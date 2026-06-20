import csv, json, math
from pathlib import Path
import numpy as np

HERE = Path(__file__).resolve().parent
PROJECT_ROOT = HERE.parents[1]
CSV_FILE = PROJECT_ROOT / 'data' / 'csv' / 'pokestats-workbook.csv'

ENTRY_FEE = 25.0
GUARANTEED_COST = 16.0
GUARANTEED_RETAIL = 22.0
RUNS = 25_000_000
MAX_STREAK = 120
SECONDS = 15

# Cost/retail assumptions for new prizes that were not in the original inventory list:
# - 2 Better English Packs: assumed $20 cost / $30 player retail value.
# - 1 Paldean Fates Pack: assumed $8 cost / $12 player retail value.
# Update these values if your actual buy cost differs.
PRIZE_TIERS = [
    {"streak": 13, "name": "2 Better English Packs", "cost": 20.0, "retail": 30.0},
    {"streak": 15, "name": "1 Ascended Heroes Pack", "cost": 17.0, "retail": 25.0},
    {"streak": 18, "name": "1 Paldean Fates Pack", "cost": 8.0, "retail": 12.0},
    {"streak": 22, "name": "1 Mega Evolution Tin", "cost": 20.0, "retail": 30.0},
    {"streak": 26, "name": "1 Ascended Heroes Tin", "cost": 20.0, "retail": 40.0},
    {"streak": 31, "name": "1 Prismatic Tin", "cost": 20.0, "retail": 60.0},
    {"streak": 42, "name": "1 Prismatic ETB", "cost": 100.0, "retail": 230.0},
]

EXTREME_HARD_WIN_STREAKS = {tier['streak'] - 1 for tier in PRIZE_TIERS}
EXTREME_HARD_MIN_DELTA = 1
EXTREME_HARD_MAX_DELTA = 2

ROUND_BANDS = [
  {"label":"Warm Up", "from":1, "to":3, "minDelta":70, "maxDelta":None, "totalWeight":70, "sameStatWeight":30},
  {"label":"Trainer Check", "from":4, "to":6, "minDelta":42, "maxDelta":None, "totalWeight":50, "sameStatWeight":50},
  {"label":"Gym Leader", "from":7, "to":9, "minDelta":24, "maxDelta":None, "totalWeight":35, "sameStatWeight":65},
  {"label":"Elite Four", "from":10, "to":12, "minDelta":12, "maxDelta":42, "totalWeight":20, "sameStatWeight":80},
  {"label":"Champion", "from":13, "to":15, "minDelta":6, "maxDelta":28, "totalWeight":10, "sameStatWeight":90},
  {"label":"Shiny Odds", "from":16, "to":None, "minDelta":1, "maxDelta":16, "totalWeight":5, "sameStatWeight":95},
]

STAT_KEYS = ['hp','attack','defense','spAttack','spDefense','speed']
CSV_STAT_COLUMNS = {
    'hp': 'HP',
    'attack': 'Attack',
    'defense': 'Defense',
    'spAttack': 'Sp.Attack',
    'spDefense': 'Sp.Defense',
    'speed': 'Speed',
}
STAT_FAC = {
    'hp':0.95,
    'attack':1.05,
    'defense':0.95,
    'spAttack':0.88,
    'spDefense':0.84,
    'speed':1.08,
}

PROFILES = {
    "Experienced Pokemon Player": {
        "desc":"Knows most Pokemon, evolution/power bands, and many stat archetypes; still pressured by exact small-delta stat calls.",
        "total_cap":0.955, "total_scale":82.0, "total_shape":1.15,
        "stat_cap":0.885, "stat_scale":29.0, "stat_shape":1.05,
        "floor_boost":0.045,
        "time_sensitivity":0.50,
    },
    "Pokemon Collector": {
        "desc":"Recognizes most Pokemon and rarity/popularity/evolution cues; better on total strength than exact competitive stats.",
        "total_cap":0.890, "total_scale":102.0, "total_shape":1.08,
        "stat_cap":0.745, "stat_scale":41.0, "stat_shape":1.00,
        "floor_boost":0.020,
        "time_sensitivity":0.65,
    },
    "Novice": {
        "desc":"Uses visual/evolution intuition and guesses; little reliable stat memory.",
        "total_cap":0.765, "total_scale":135.0, "total_shape":1.00,
        "stat_cap":0.645, "stat_scale":58.0, "stat_shape":0.95,
        "floor_boost":0.000,
        "time_sensitivity":0.80,
    },
}

def load_pokemon():
    rows=[]
    with open(CSV_FILE, encoding='latin-1', newline='') as f:
        for row in csv.DictReader(f):
            stats={key:int(row[col]) for key,col in CSV_STAT_COLUMNS.items()}
            stats['total']=sum(stats.values())
            rows.append({'id':int(str(row['Number']).lstrip('0') or '0'), 'name':row['Name'], 'stats':stats})
    rows.sort(key=lambda p: p['id'])
    return rows

def build_delta_arrays(pokemon):
    vals={key:np.array([p['stats'][key] for p in pokemon], dtype=np.int16) for key in STAT_KEYS+['total']}
    triu=np.triu_indices(len(pokemon), k=1)
    deltas={}
    for key,v in vals.items():
        d=np.abs(v[triu[0]].astype(np.int16)-v[triu[1]].astype(np.int16)).astype(np.int16)
        d=d[d>0]
        deltas[key]=d
    return deltas

def ease(delta, scale, shape):
    d=np.asarray(delta,dtype=np.float64)
    return 1.0-np.exp(-np.power(d/scale, shape))

def time_multiplier(seconds, sens):
    ratio=seconds/15.0
    return max(0.60, min(1.10, ratio**sens))

def p_for_deltas(kind, stat, deltas, profile, seconds=15):
    mult=time_multiplier(seconds, profile['time_sensitivity'])
    if kind=='total':
        cap=0.5+(profile['total_cap']-0.5)*mult
        scale=profile['total_scale']/max(0.75, mult)
        e=ease(deltas, scale, profile['total_shape'])
        p=0.5+profile['floor_boost']*0.5+(cap-0.5)*e
    else:
        fac=STAT_FAC[stat]
        cap=0.5+(profile['stat_cap']-0.5)*mult
        scale=profile['stat_scale']/(max(0.72, mult)*fac)
        e=ease(deltas, scale, profile['stat_shape'])
        p=0.5+profile['floor_boost']*0.25+(cap-0.5)*e
    return np.clip(p, 0.5, 0.985)

def p_for_stat_range(deltas_by_stat, profile, stat, min_delta, max_delta=None, seconds=15):
    ds=deltas_by_stat[stat]
    mask=ds>=min_delta
    if max_delta is not None:
        mask &= ds<=max_delta
    if not mask.any():
        return 0.5
    kind='total' if stat=='total' else 'same-stat'
    return float(p_for_deltas(kind, stat, ds[mask], profile, seconds).mean())

def band_mean_p(deltas_by_stat, band, profile, seconds=15):
    minD, maxD=band['minDelta'], band['maxDelta']
    total_p=p_for_stat_range(deltas_by_stat, profile, 'total', minD, maxD, seconds)
    stat_ps=[p_for_stat_range(deltas_by_stat, profile, stat, minD, maxD, seconds) for stat in STAT_KEYS]
    same_p=float(np.mean(stat_ps))
    tw=band['totalWeight']; sw=band['sameStatWeight']
    return (tw*total_p+sw*same_p)/(tw+sw), total_p, same_p

def extreme_mean_p(deltas_by_stat, profile, seconds=15):
    stat_ps=[p_for_stat_range(deltas_by_stat, profile, stat, EXTREME_HARD_MIN_DELTA, EXTREME_HARD_MAX_DELTA, seconds) for stat in STAT_KEYS]
    return float(np.mean(stat_ps))

def band_for_round(round_number):
    return next(b for b in ROUND_BANDS if round_number>=b['from'] and (b['to'] is None or round_number<=b['to']))

def round_ps(deltas, profile, seconds=15, max_streak=MAX_STREAK):
    rows=[]
    band_values=[]
    for b in ROUND_BANDS:
        p,total_p,same_p=band_mean_p(deltas,b,profile,seconds)
        band_values.append((b,p,total_p,same_p))
        rows.append({'label':b['label'],'round_from':b['from'],'round_to':b['to'],'p':p,'total_p':total_p,'same_stat_p':same_p,'is_extreme':False})
    extreme_p=extreme_mean_p(deltas, profile, seconds)
    rows.append({'label':'Prize Milestone Spike','round_from':'tier thresholds','round_to':'tier thresholds','p':extreme_p,'total_p':None,'same_stat_p':extreme_p,'is_extreme':True})
    ps=[]
    for r in range(1,max_streak+1):
        wins_before=r-1
        if wins_before in EXTREME_HARD_WIN_STREAKS:
            ps.append(extreme_p)
        else:
            b=band_for_round(r)
            ps.append(next(p for band,p,_,_ in band_values if band is b))
    return np.array(ps,dtype=np.float64), rows

def distribution_from_ps(ps):
    probs=[]; reach=1.0
    for p in ps:
        probs.append(reach*(1-p))
        reach*=p
    probs.append(reach)
    probs=np.array(probs,dtype=np.float64)
    probs/=probs.sum()
    return probs

def simulate_counts(probs, n, seed):
    rng=np.random.default_rng(seed)
    return rng.multinomial(n, probs)

def q_from_counts(counts,q):
    target=math.ceil(q*counts.sum())
    return int(np.searchsorted(np.cumsum(counts), target, side='left'))

def q_from_probs(probs,q):
    target=q*probs.sum()
    return int(np.searchsorted(np.cumsum(probs), target, side='left'))

def summarize_counts(counts, ps):
    n=counts.sum(); streaks=np.arange(len(counts)); probs=distribution_from_ps(ps)
    return {
        'runs':int(n),
        'mean_final_streak_sim':float(np.sum(streaks*counts)/n),
        'mean_final_streak_exact':float(np.sum(np.arange(len(probs))*probs)),
        'median':q_from_counts(counts,0.50),
        'p75':q_from_counts(counts,0.75),
        'p90':q_from_counts(counts,0.90),
        'p95':q_from_counts(counts,0.95),
        'p99':q_from_counts(counts,0.99),
        'max_bucket_hit':int(np.max(np.flatnonzero(counts))),
    }

def ladder_ev(counts, probs, tiers):
    n=counts.sum(); rows=[]
    total_bonus_cost=0.0; total_bonus_retail=0.0
    total_bonus_cost_exact=0.0; total_bonus_retail_exact=0.0
    for i,t in enumerate(tiers):
        next_streak=tiers[i+1]['streak'] if i+1<len(tiers) else len(counts)
        exact=int(counts[t['streak']:next_streak].sum())
        reach=int(counts[t['streak']:].sum())
        exact_prob=float(probs[t['streak']:next_streak].sum())
        reach_prob=float(probs[t['streak']:].sum())
        exact_rate=exact/n; reach_rate=reach/n
        cost_ev=exact_rate*t['cost']; retail_ev=exact_rate*t['retail']
        exact_cost_ev=exact_prob*t['cost']; exact_retail_ev=exact_prob*t['retail']
        total_bonus_cost+=cost_ev; total_bonus_retail+=retail_ev
        total_bonus_cost_exact+=exact_cost_ev; total_bonus_retail_exact+=exact_retail_ev
        rows.append({
            'threshold_streak':t['streak'], 'tier':t['name'], 'cost':t['cost'], 'retail':t['retail'],
            'reach_count':reach, 'reach_rate':reach_rate, 'reach_rate_exact':reach_prob,
            'awards':exact, 'award_rate':exact_rate, 'award_rate_exact':exact_prob,
            'expected_awards_exact':exact_prob*n,
            'operator_cost_total':cost_ev*n, 'operator_cost_ev_per_entry':cost_ev,
            'operator_cost_ev_per_entry_exact':exact_cost_ev,
            'player_retail_total':retail_ev*n, 'player_retail_ev_per_entry':retail_ev,
            'player_retail_ev_per_entry_exact':exact_retail_ev,
        })
    total_cost=GUARANTEED_COST+total_bonus_cost
    profit=ENTRY_FEE-total_cost
    total_cost_exact=GUARANTEED_COST+total_bonus_cost_exact
    profit_exact=ENTRY_FEE-total_cost_exact
    return rows, {
        'bonus_cost_ev_per_entry':total_bonus_cost,
        'bonus_cost_ev_per_entry_exact':total_bonus_cost_exact,
        'bonus_retail_ev_per_entry':total_bonus_retail,
        'bonus_retail_ev_per_entry_exact':total_bonus_retail_exact,
        'player_total_retail_ev_per_entry':GUARANTEED_RETAIL+total_bonus_retail,
        'player_total_retail_ev_per_entry_exact':GUARANTEED_RETAIL+total_bonus_retail_exact,
        'operator_cost_ev_per_entry':total_cost,
        'operator_cost_ev_per_entry_exact':total_cost_exact,
        'operator_profit_ev_per_entry':profit,
        'operator_profit_ev_per_entry_exact':profit_exact,
        'operator_margin':profit/ENTRY_FEE,
        'operator_margin_exact':profit_exact/ENTRY_FEE,
        'operator_total_cost':total_cost*n,
        'operator_total_revenue':ENTRY_FEE*n,
        'operator_total_profit':profit*n,
    }

def money(v): return f"${v:,.4f}"
def pct(v): return f"{v*100:.6f}%"
def commas(v): return f"{v:,.0f}"

def write_csv(path, rows):
    if not rows:
        path.write_text('')
        return
    with open(path,'w',newline='',encoding='utf-8') as f:
        writer=csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        writer.writeheader(); writer.writerows(rows)

def main():
    pokemon=load_pokemon()
    deltas=build_delta_arrays(pokemon)
    report={'runs':RUNS,'seconds':SECONDS,'pokemon_count':len(pokemon),'tiers':PRIZE_TIERS,'assumptions':{
        'better_english_packs_cost':20.0,
        'better_english_packs_retail':30.0,
        'paldean_fates_pack_cost':8.0,
        'paldean_fates_pack_retail':12.0,
        'extreme_hard_milestone_rounds':sorted(EXTREME_HARD_WIN_STREAKS),
        'extreme_hard_delta':'same-stat only, delta 1-2'
    },'profiles':{}}
    summary_rows=[]; tier_rows=[]; streak_rows=[]; band_rows=[]; timer_rows=[]
    seeds={'Experienced Pokemon Player':101,'Pokemon Collector':202,'Novice':303}
    for profile_name, profile in PROFILES.items():
        ps, bands=round_ps(deltas, profile, SECONDS)
        probs=distribution_from_ps(ps)
        counts=simulate_counts(probs, RUNS, seeds[profile_name])
        summary=summarize_counts(counts, ps)
        tiers, ev=ladder_ev(counts, probs, PRIZE_TIERS)
        report['profiles'][profile_name]={'summary':summary,'ev':ev,'tiers':tiers,'band_probabilities':bands}
        summary_rows.append({'profile':profile_name,'seconds':SECONDS,'ladder':'harder_user_ladder','pokemon_count':len(pokemon),**summary,**ev})
        for row in tiers:
            tier_rows.append({'profile':profile_name,'seconds':SECONDS,'ladder':'harder_user_ladder',**row})
        for streak,count in enumerate(counts):
            if count or streak <= 50:
                streak_rows.append({'profile':profile_name,'seconds':SECONDS,'streak':streak,'runs':int(count),'rate':float(count/RUNS),'probability_exact':float(probs[streak]),'expected_runs_exact':float(probs[streak]*RUNS)})
        for b in bands:
            band_rows.append({'profile':profile_name,'seconds':SECONDS,**b})
    for sec in [25,20,15,12,10,8]:
        for profile_name, profile in PROFILES.items():
            ps,_=round_ps(deltas, profile, sec)
            probs=distribution_from_ps(ps)
            counts=simulate_counts(probs, RUNS, seeds[profile_name]+sec)
            summary=summarize_counts(counts, ps)
            tiers, ev=ladder_ev(counts, probs, PRIZE_TIERS)
            timer_rows.append({
                'seconds':sec,'profile':profile_name,'mean_final_streak_sim':summary['mean_final_streak_sim'],
                'median':summary['median'],'p90':summary['p90'],'p95':summary['p95'],'p99':summary['p99'],
                'first_tier_reach_rate':tiers[0]['reach_rate'],'first_tier_reach_rate_exact':tiers[0]['reach_rate_exact'],
                'etb_reach_rate':tiers[-1]['reach_rate'],'etb_reach_rate_exact':tiers[-1]['reach_rate_exact'],
                'etb_expected_awards_exact':tiers[-1]['expected_awards_exact'],
                'bonus_cost_ev_per_entry':ev['bonus_cost_ev_per_entry'],
                'bonus_cost_ev_per_entry_exact':ev['bonus_cost_ev_per_entry_exact'],
                'operator_margin':ev['operator_margin'],
                'operator_margin_exact':ev['operator_margin_exact'],
            })
    write_csv(HERE/'summary.csv', summary_rows)
    write_csv(HERE/'tier_ev.csv', tier_rows)
    write_csv(HERE/'streak_distribution.csv', streak_rows)
    write_csv(HERE/'band_probabilities.csv', band_rows)
    write_csv(HERE/'timer_sensitivity.csv', timer_rows)
    (HERE/'simulation_report.json').write_text(json.dumps(report, indent=2), encoding='utf-8')

    lines=[]
    lines.append('# 25M-run Pokemon Prize Ladder Simulation')
    lines.append('')
    lines.append(f'- Runs per profile: **{RUNS:,}**')
    lines.append(f'- Timer: **{SECONDS} seconds/question**')
    lines.append(f'- Pokemon stat source: **data/csv/pokestats-workbook.csv**')
    lines.append(f'- Pokemon count: **{len(pokemon):,}**')
    lines.append('- Gameplay model includes prize-milestone spike rounds: same-stat only, 1-2 stat delta.')
    lines.append('')
    lines.append('## Cost assumptions for newly-added items')
    lines.append('')
    lines.append('| Item | Assumed cost | Assumed player retail value |')
    lines.append('|---|---:|---:|')
    lines.append('| 2 Better English Packs | $20 | $30 |')
    lines.append('| 1 Paldean Fates Pack | $8 | $12 |')
    lines.append('')
    lines.append('Update these if your actual buy cost differs, then rerun `python3 simulation/25m/simulation_model.py`.')
    lines.append('')
    lines.append('## Prize ladder simulated')
    lines.append('')
    lines.append('| Unlock | Prize | Cost | Retail |')
    lines.append('|---:|---|---:|---:|')
    for t in PRIZE_TIERS:
        lines.append(f"| {t['streak']} wins | {t['name']} | ${t['cost']:,.0f} | ${t['retail']:,.0f} |")
    lines.append('')
    lines.append('## Expected landing point')
    lines.append('')
    lines.append('| Profile | Mean streak | Median | P90 | P95 | P99 | Bonus cost EV/entry | Total cost EV/entry | Profit EV/entry | Margin |')
    lines.append('|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|')
    for row in summary_rows:
        lines.append(f"| {row['profile']} | {row['mean_final_streak_sim']:.2f} | {row['median']} | {row['p90']} | {row['p95']} | {row['p99']} | ${row['bonus_cost_ev_per_entry']:.4f} | ${row['operator_cost_ev_per_entry']:.4f} | ${row['operator_profit_ev_per_entry']:.4f} | {row['operator_margin']*100:.2f}% |")
    lines.append('')
    lines.append('## Tier EV by profile')
    lines.append('')
    lines.append('| Profile | Tier | Wins | Awards / 25M | Expected awards | Award rate | Cost EV/entry | Cost total | Player retail EV/entry |')
    lines.append('|---|---|---:|---:|---:|---:|---:|---:|---:|')
    for row in tier_rows:
        lines.append(f"| {row['profile']} | {row['tier']} | {row['threshold_streak']} | {row['awards']:,} | {row['expected_awards_exact']:,.2f} | {row['award_rate']*100:.6f}% | ${row['operator_cost_ev_per_entry']:.6f} | ${row['operator_cost_total']:,.0f} | ${row['player_retail_ev_per_entry']:.6f} |")
    lines.append('')
    lines.append('## Timer sensitivity')
    lines.append('')
    lines.append('| Seconds | Profile | Mean streak | P90 | P95 | P99 | First tier reach | ETB expected awards / 25M | Bonus cost EV | Margin |')
    lines.append('|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|')
    for row in timer_rows:
        lines.append(f"| {row['seconds']} | {row['profile']} | {row['mean_final_streak_sim']:.2f} | {row['p90']} | {row['p95']} | {row['p99']} | {row['first_tier_reach_rate']*100:.4f}% | {row['etb_expected_awards_exact']:,.2f} | ${row['bonus_cost_ev_per_entry']:.4f} | {row['operator_margin']*100:.2f}% |")
    lines.append('')
    (HERE/'report.md').write_text('\n'.join(lines), encoding='utf-8')
    print((HERE/'report.md').read_text(encoding='utf-8'))

if __name__=='__main__':
    main()

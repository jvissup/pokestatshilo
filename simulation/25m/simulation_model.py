import csv, math, json
from pathlib import Path
import numpy as np

HERE = Path(__file__).resolve().parent
PROJECT_ROOT = HERE.parents[1]
CSV_DIR = PROJECT_ROOT / 'data' / 'csv'

ENTRY_FEE=25.0
GUARANTEED_COST=16.0
GUARANTEED_RETAIL=22.0
RUNS=25_000_000
MAX_STREAK=80

# Current prize ladder from project before recalibration
CURRENT_TIERS=[
    {"streak":9,"name":"1 Ascended Heroes Pack","cost":17.0,"retail":25.0},
    {"streak":11,"name":"1 Mega Evolution Tin","cost":20.0,"retail":30.0},
    {"streak":13,"name":"1 Ascended Heroes Tin","cost":20.0,"retail":40.0},
    {"streak":15,"name":"1 Prismatic Tin","cost":20.0,"retail":60.0},
    {"streak":22,"name":"1 Prismatic ETB","cost":100.0,"retail":230.0},
]

ROUND_BANDS=[
  {"label":"Warm Up", "from":1, "to":3, "minDelta":70, "maxDelta":None, "totalWeight":70, "sameStatWeight":30},
  {"label":"Trainer Check", "from":4, "to":6, "minDelta":42, "maxDelta":None, "totalWeight":50, "sameStatWeight":50},
  {"label":"Gym Leader", "from":7, "to":9, "minDelta":24, "maxDelta":None, "totalWeight":35, "sameStatWeight":65},
  {"label":"Elite Four", "from":10, "to":12, "minDelta":12, "maxDelta":42, "totalWeight":20, "sameStatWeight":80},
  {"label":"Champion", "from":13, "to":15, "minDelta":6, "maxDelta":28, "totalWeight":10, "sameStatWeight":90},
  {"label":"Shiny Odds", "from":16, "to":None, "minDelta":1, "maxDelta":16, "totalWeight":5, "sameStatWeight":95},
]
STAT_KEYS=['hp','attack','defense','spAttack','spDefense','speed']
STAT_ID_MAP={1:'hp',2:'attack',3:'defense',4:'spAttack',5:'spDefense',6:'speed'}
STAT_FAC={
    'hp':0.95,
    'attack':1.05,
    'defense':0.95,
    'spAttack':0.88,
    'spDefense':0.84,
    'speed':1.08,
}

PROFILES={
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
    pokemon_rows=list(csv.DictReader(open(CSV_DIR / 'pokemon.csv', encoding='utf-8')))
    stats_rows=list(csv.DictReader(open(CSV_DIR / 'pokemon_stats.csv', encoding='utf-8')))
    stats_by_id={}
    for r in stats_rows:
        pid=int(r['pokemon_id']); sid=int(r['stat_id'])
        if sid in STAT_ID_MAP:
            stats_by_id.setdefault(pid,{})[STAT_ID_MAP[sid]]=int(r['base_stat'])
    out=[]
    for r in pokemon_rows:
        if r.get('is_default')!='1':
            continue
        pid=int(r['id'])
        st=stats_by_id.get(pid)
        if not st or len(st)!=6:
            continue
        total=sum(st.values())
        st['total']=total
        out.append({'id':pid,'name':r['identifier'],'stats':st})
    return out

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
    # 15s is baseline. Longer timers have diminishing gains; shorter timers hurt more.
    # At 12s: ~0.90-0.94 depending on profile. At 10s: ~0.82-0.88.
    ratio=seconds/15.0
    return max(0.60, min(1.10, ratio**sens))

def p_for_deltas(kind, stat, deltas, profile, seconds=15):
    mult=time_multiplier(seconds, profile['time_sensitivity'])
    if kind=='total':
        cap=0.5+(profile['total_cap']-0.5)*mult
        scale=profile['total_scale']/max(0.75, mult) # less time acts like a larger effective scale
        e=ease(deltas, scale, profile['total_shape'])
        p=0.5+profile['floor_boost']*0.5+(cap-0.5)*e
    else:
        fac=STAT_FAC[stat]
        cap=0.5+(profile['stat_cap']-0.5)*mult
        scale=profile['stat_scale']/(max(0.72, mult)*fac)
        e=ease(deltas, scale, profile['stat_shape'])
        p=0.5+profile['floor_boost']*0.25+(cap-0.5)*e
    return np.clip(p, 0.5, 0.985)

def band_mean_p(deltas_by_stat, band, profile, seconds=15):
    # Generator chooses total vs same-stat by weight, stat uniformly for same-stat, pair uniformly from candidates.
    minD, maxD=band['minDelta'], band['maxDelta']
    # total
    dt=deltas_by_stat['total']
    mask=dt>=minD
    if maxD is not None: mask &= dt<=maxD
    total_p=float(p_for_deltas('total','total',dt[mask],profile,seconds).mean()) if mask.any() else 0.5
    stat_ps=[]
    counts={}
    for stat in STAT_KEYS:
        ds=deltas_by_stat[stat]
        m=ds>=minD
        if maxD is not None: m &= ds<=maxD
        counts[stat]=int(m.sum())
        stat_ps.append(float(p_for_deltas('same-stat',stat,ds[m],profile,seconds).mean()) if m.any() else 0.5)
    same_p=float(np.mean(stat_ps))
    tw=band['totalWeight']; sw=band['sameStatWeight']
    return (tw*total_p+sw*same_p)/(tw+sw), total_p, same_p, counts

def round_ps(deltas, profile, seconds=15, max_streak=MAX_STREAK):
    band_ps=[]
    rows=[]
    for b in ROUND_BANDS:
        p,total_p,same_p,counts=band_mean_p(deltas,b,profile,seconds)
        band_ps.append(p)
        rows.append({'label':b['label'],'round_from':b['from'],'round_to':b['to'],'p':p,'total_p':total_p,'same_stat_p':same_p})
    ps=[]
    for r in range(1,max_streak+1):
        idx=next(i for i,b in enumerate(ROUND_BANDS) if r>=b['from'] and (b['to'] is None or r<=b['to']))
        ps.append(band_ps[idx])
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
    # Multinomial is equivalent to n independent runs from this final streak distribution.
    return rng.multinomial(n, probs)

def q_from_counts(counts,q):
    target=math.ceil(q*counts.sum())
    return int(np.searchsorted(np.cumsum(counts), target, side='left'))

def summarize_counts(counts, ps):
    n=counts.sum(); streaks=np.arange(len(counts))
    exact_mean=float(np.sum(np.arange(len(distribution_from_ps(ps))) * distribution_from_ps(ps)))
    return {
        'runs':int(n),
        'mean_final_streak_sim':float(np.sum(streaks*counts)/n),
        'mean_final_streak_exact':exact_mean,
        'median':q_from_counts(counts,0.50),
        'p75':q_from_counts(counts,0.75),
        'p90':q_from_counts(counts,0.90),
        'p95':q_from_counts(counts,0.95),
        'p99':q_from_counts(counts,0.99),
        'max_bucket_hit':int(np.max(np.flatnonzero(counts))),
    }

def ladder_ev(counts, tiers):
    n=counts.sum(); rows=[]
    total_bonus_cost=0.0; total_bonus_retail=0.0
    for i,t in enumerate(tiers):
        next_streak=tiers[i+1]['streak'] if i+1<len(tiers) else len(counts)
        exact=int(counts[t['streak']:next_streak].sum())
        reach=int(counts[t['streak']:].sum())
        exact_rate=exact/n; reach_rate=reach/n
        cost_ev=exact_rate*t['cost']; retail_ev=exact_rate*t['retail']
        total_bonus_cost+=cost_ev; total_bonus_retail+=retail_ev
        rows.append({
            'threshold_streak':t['streak'], 'tier':t['name'], 'cost':t['cost'], 'retail':t['retail'],
            'reach_count':reach, 'reach_rate':reach_rate,
            'awards':exact, 'award_rate':exact_rate,
            'operator_cost_total':cost_ev*n, 'operator_cost_ev_per_entry':cost_ev,
            'player_retail_total':retail_ev*n, 'player_retail_ev_per_entry':retail_ev,
        })
    total_cost=GUARANTEED_COST+total_bonus_cost
    profit=ENTRY_FEE-total_cost
    return rows, {
        'bonus_cost_ev_per_entry':total_bonus_cost,
        'bonus_retail_ev_per_entry':total_bonus_retail,
        'player_total_retail_ev_per_entry':GUARANTEED_RETAIL+total_bonus_retail,
        'operator_cost_ev_per_entry':total_cost,
        'operator_profit_ev_per_entry':profit,
        'operator_margin':profit/ENTRY_FEE,
        'operator_total_cost':total_cost*n,
        'operator_total_revenue':ENTRY_FEE*n,
        'operator_total_profit':profit*n,
    }

def find_adjusted_ladder(ps_by_profile, target_margin=0.30):
    # Risk-manage against experienced players. Target bonus EV <= 1.50 and grand prize rare.
    # Candidate thresholds preserving order and distinct tiers.
    # Use exact probabilities, no Monte Carlo noise.
    risk='Experienced Pokemon Player'
    probs=distribution_from_ps(ps_by_profile[risk])
    counts=probs # probabilities can be summarized as counts-like if n=1, but use exact award prob
    best=None
    # Search intuitive thresholds; restrict first prize reachable but not too common.
    for s1 in range(10,15):
      for s2 in range(s1+2,18):
       for s3 in range(s2+2,21):
        for s4 in range(s3+2,25):
         for s5 in range(max(s4+4,23),33):
            tiers=[{**CURRENT_TIERS[0],'streak':s1},{**CURRENT_TIERS[1],'streak':s2},{**CURRENT_TIERS[2],'streak':s3},{**CURRENT_TIERS[3],'streak':s4},{**CURRENT_TIERS[4],'streak':s5}]
            # exact expected cost for experienced using probs
            ev=0.0
            for i,t in enumerate(tiers):
                hi=tiers[i+1]['streak'] if i+1<len(tiers) else len(probs)
                award_prob=float(probs[t['streak']:hi].sum())
                ev += award_prob*t['cost']
            margin=(ENTRY_FEE-GUARANTEED_COST-ev)/ENTRY_FEE
            # constraints: target margin, ETB not too common, first prize not impossible, orderly event feel.
            etb_prob=float(probs[s5:].sum())
            first_reach=float(probs[s1:].sum())
            p99=int(np.searchsorted(np.cumsum(probs), 0.99, side='left'))
            if margin < target_margin:
                continue
            if etb_prob > 0.00005: # <= 1 in 20,000 for experienced
                continue
            if first_reach < 0.015 or first_reach > 0.10:
                continue
            # score: margin close to 31-33%, tiers near p95/p99 and not too spaced.
            target_ev=1.25 # leave buffer under $1.50
            score=abs(ev-target_ev)*10 + abs(first_reach-0.055)*5 + abs(etb_prob-0.000015)*5000
            score += 0.1*((s2-s1-2)+(s3-s2-2)+(s4-s3-3)+(s5-s4-5))**2
            candidate=(score, tiers, ev, margin, etb_prob, first_reach)
            if best is None or score<best[0]:
                best=candidate
    return best

def main():
    pokemon=load_pokemon()
    deltas=build_delta_arrays(pokemon)
    outdir=HERE; outdir.mkdir(exist_ok=True)
    # Calculate baseline 15-second ps.
    ps_by_profile={}; band_rows=[]
    for profile,cfg in PROFILES.items():
        ps, rows=round_ps(deltas,cfg,15)
        ps_by_profile[profile]=ps
        for r in rows:
            band_rows.append({'profile':profile,'seconds':15,**r})
    best=find_adjusted_ladder(ps_by_profile,0.30)
    adjusted=best[1]
    # choose a smoother ladder manually if nearly equivalent? We'll use best.
    print('pokemon_count',len(pokemon),'adjusted',[(t['streak'],t['name']) for t in adjusted], 'exp_ev',best[2], 'margin', best[3], 'etb',best[4], 'first_reach',best[5])
    summary=[]; tiers=[]; dist=[]
    for idx,(profile,cfg) in enumerate(PROFILES.items()):
        ps=ps_by_profile[profile]
        probs=distribution_from_ps(ps)
        counts=simulate_counts(probs,RUNS,20260620+idx*1000)
        stats=summarize_counts(counts,ps)
        for ladder_name, ladder in [('current',CURRENT_TIERS),('adjusted',adjusted)]:
            rows, totals=ladder_ev(counts,ladder)
            summary.append({'profile':profile,'seconds':15,'ladder':ladder_name, **stats, **totals})
            for row in rows:
                tiers.append({'profile':profile,'seconds':15,'ladder':ladder_name, **row})
        for k in range(0,41):
            dist.append({'profile':profile,'seconds':15,'streak':k,'count':int(counts[k]),'rate':float(counts[k]/RUNS)})
        tail=int(counts[41:].sum()); dist.append({'profile':profile,'seconds':15,'streak':'41+','count':tail,'rate':tail/RUNS})
    # Time sensitivity for adjusted ladder using exact probabilities maybe simulate not needed.
    sensitivity=[]
    for seconds in [25,20,15,12,10,8]:
        for profile,cfg in PROFILES.items():
            ps, rows=round_ps(deltas,cfg,seconds)
            probs=distribution_from_ps(ps)
            # Use probabilities as exact counts of one; compute exact summary/EV manually
            # expected mean and quantiles from exact dist using n large for q function easier.
            cdf=np.cumsum(probs)
            mean=float(np.sum(np.arange(len(probs))*probs))
            q=lambda x:int(np.searchsorted(cdf,x,side='left'))
            # exact ladder ev
            ev=0.0; retail=0.0; etb_reach=float(probs[adjusted[-1]['streak']:].sum()); first_reach=float(probs[adjusted[0]['streak']:].sum())
            for i,t in enumerate(adjusted):
                hi=adjusted[i+1]['streak'] if i+1<len(adjusted) else len(probs)
                award=float(probs[t['streak']:hi].sum())
                ev += award*t['cost']; retail += award*t['retail']
            sensitivity.append({'profile':profile,'seconds':seconds,'mean_final_streak_exact':mean,'median':q(0.5),'p90':q(0.9),'p95':q(0.95),'p99':q(0.99),'first_tier_reach_rate':first_reach,'etb_reach_rate':etb_reach,'bonus_cost_ev_per_entry':ev,'operator_margin':(ENTRY_FEE-GUARANTEED_COST-ev)/ENTRY_FEE})
    # Write CSVs
    def write_csv(path, rows):
        with open(path,'w',newline='') as f:
            w=csv.DictWriter(f,fieldnames=list(rows[0].keys()))
            w.writeheader(); w.writerows(rows)
    write_csv(outdir/'summary.csv', summary)
    write_csv(outdir/'tier_ev.csv', tiers)
    write_csv(outdir/'streak_distribution.csv', dist)
    write_csv(outdir/'band_probabilities.csv', band_rows)
    write_csv(outdir/'timer_sensitivity.csv', sensitivity)
    # JSON report
    report={'runs_per_profile':RUNS,'entry_fee':ENTRY_FEE,'guaranteed_cost':GUARANTEED_COST,'guaranteed_retail':GUARANTEED_RETAIL,'pokemon_count':len(pokemon),'timer_seconds':15,'profiles':{k:v['desc'] for k,v in PROFILES.items()},'current_tiers':CURRENT_TIERS,'adjusted_tiers':adjusted,'adjustment_search':{'experienced_bonus_ev_exact':best[2],'experienced_margin_exact':best[3],'experienced_etb_reach_exact':best[4],'experienced_first_tier_reach_exact':best[5]},'summary':summary,'tiers':tiers,'band_probabilities':band_rows,'timer_sensitivity':sensitivity}
    (outdir/'simulation_report.json').write_text(json.dumps(report,indent=2))
    # Markdown report
    def pct(x,d=3): return f"{x*100:.{d}f}%"
    md=[]
    md.append('# Pokemon Prize Ladder Simulation - 25M Runs per Profile\n\n')
    md.append(f'- Dataset: {len(pokemon)} default Pokemon from local stat CSVs.\n')
    md.append(f'- Timer: 15 seconds per question. No internet/help.\n')
    md.append('- Game model: same round bands/delta rules as the current project; highest unlocked bonus prize only.\n\n')
    md.append('## Recommended adjusted ladder\n\n')
    for t in adjusted:
        md.append(f"- {t['streak']} wins: {t['name']} — cost ${t['cost']:.0f}, player retail ${t['retail']:.0f}\n")
    md.append('\n## Expected landing point, adjusted ladder\n\n')
    md.append('| Profile | Mean streak | Median | P90 | P95 | P99 | Bonus cost EV/entry | Total cost EV/entry | Profit EV/entry | Margin |\n')
    md.append('|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n')
    for r in [x for x in summary if x['ladder']=='adjusted']:
        md.append(f"| {r['profile']} | {r['mean_final_streak_sim']:.2f} | {r['median']} | {r['p90']} | {r['p95']} | {r['p99']} | ${r['bonus_cost_ev_per_entry']:.4f} | ${r['operator_cost_ev_per_entry']:.4f} | ${r['operator_profit_ev_per_entry']:.4f} | {pct(r['operator_margin'],2)} |\n")
    md.append('\n## Tier EV by profile, adjusted ladder\n\n')
    md.append('| Profile | Tier | Wins | Awards / 25M | Award rate | Cost EV/entry | Cost total | Player retail EV/entry |\n')
    md.append('|---|---|---:|---:|---:|---:|---:|---:|\n')
    for row in [x for x in tiers if x['ladder']=='adjusted']:
        md.append(f"| {row['profile']} | {row['tier']} | {row['threshold_streak']} | {row['awards']:,} | {pct(row['award_rate'],4)} | ${row['operator_cost_ev_per_entry']:.4f} | ${row['operator_cost_total']:,.0f} | ${row['player_retail_ev_per_entry']:.4f} |\n")
    md.append('\n## Timer sensitivity on adjusted ladder\n\n')
    md.append('| Seconds | Profile | Mean streak | P90 | P95 | P99 | First tier reach | ETB reach | Bonus cost EV | Margin |\n')
    md.append('|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|\n')
    for s in sensitivity:
        md.append(f"| {s['seconds']} | {s['profile']} | {s['mean_final_streak_exact']:.2f} | {s['p90']} | {s['p95']} | {s['p99']} | {pct(s['first_tier_reach_rate'],3)} | {pct(s['etb_reach_rate'],5)} | ${s['bonus_cost_ev_per_entry']:.4f} | {pct(s['operator_margin'],2)} |\n")
    (outdir/'report.md').write_text(''.join(md))

if __name__=='__main__':
    main()

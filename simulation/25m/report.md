# Pokemon Prize Ladder Simulation - 25M Runs per Profile

- Dataset: 898 default Pokemon from local stat CSVs.
- Timer: 15 seconds per question. No internet/help.
- Game model: same round bands/delta rules as the current project; highest unlocked bonus prize only.

## Recommended adjusted ladder

- 13 wins: 1 Ascended Heroes Pack — cost $17, player retail $25
- 15 wins: 1 Mega Evolution Tin — cost $20, player retail $30
- 17 wins: 1 Ascended Heroes Tin — cost $20, player retail $40
- 19 wins: 1 Prismatic Tin — cost $20, player retail $60
- 28 wins: 1 Prismatic ETB — cost $100, player retail $230

## Expected landing point, adjusted ladder

| Profile | Mean streak | Median | P90 | P95 | P99 | Bonus cost EV/entry | Total cost EV/entry | Profit EV/entry | Margin |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Experienced Pokemon Player | 5.60 | 5 | 11 | 13 | 16 | $1.1017 | $17.1017 | $7.8983 | 31.59% |
| Pokemon Collector | 3.11 | 2 | 7 | 9 | 12 | $0.1591 | $16.1591 | $8.8409 | 35.36% |
| Novice | 1.85 | 1 | 5 | 6 | 9 | $0.0252 | $16.0252 | $8.9748 | 35.90% |

## Tier EV by profile, adjusted ladder

| Profile | Tier | Wins | Awards / 25M | Award rate | Cost EV/entry | Cost total | Player retail EV/entry |
|---|---|---:|---:|---:|---:|---:|---:|
| Experienced Pokemon Player | 1 Ascended Heroes Pack | 13 | 848,990 | 3.3960% | $0.5773 | $14,432,830 | $0.8490 |
| Experienced Pokemon Player | 1 Mega Evolution Tin | 15 | 417,454 | 1.6698% | $0.3340 | $8,349,080 | $0.5009 |
| Experienced Pokemon Player | 1 Ascended Heroes Tin | 17 | 149,922 | 0.5997% | $0.1199 | $2,998,440 | $0.2399 |
| Experienced Pokemon Player | 1 Prismatic Tin | 19 | 83,699 | 0.3348% | $0.0670 | $1,673,980 | $0.2009 |
| Experienced Pokemon Player | 1 Prismatic ETB | 28 | 870 | 0.0035% | $0.0035 | $87,000 | $0.0080 |
| Pokemon Collector | 1 Ascended Heroes Pack | 13 | 146,718 | 0.5869% | $0.0998 | $2,494,206 | $0.1467 |
| Pokemon Collector | 1 Mega Evolution Tin | 15 | 51,484 | 0.2059% | $0.0412 | $1,029,680 | $0.0618 |
| Pokemon Collector | 1 Ascended Heroes Tin | 17 | 15,821 | 0.0633% | $0.0127 | $316,420 | $0.0253 |
| Pokemon Collector | 1 Prismatic Tin | 19 | 6,693 | 0.0268% | $0.0054 | $133,860 | $0.0161 |
| Pokemon Collector | 1 Prismatic ETB | 28 | 25 | 0.0001% | $0.0001 | $2,500 | $0.0002 |
| Novice | 1 Ascended Heroes Pack | 13 | 25,072 | 0.1003% | $0.0170 | $426,224 | $0.0251 |
| Novice | 1 Mega Evolution Tin | 15 | 7,330 | 0.0293% | $0.0059 | $146,600 | $0.0088 |
| Novice | 1 Ascended Heroes Tin | 17 | 2,054 | 0.0082% | $0.0016 | $41,080 | $0.0033 |
| Novice | 1 Prismatic Tin | 19 | 747 | 0.0030% | $0.0006 | $14,940 | $0.0018 |
| Novice | 1 Prismatic ETB | 28 | 1 | 0.0000% | $0.0000 | $100 | $0.0000 |

## Timer sensitivity on adjusted ladder

| Seconds | Profile | Mean streak | P90 | P95 | P99 | First tier reach | ETB reach | Bonus cost EV | Margin |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 25 | Experienced Pokemon Player | 7.07 | 13 | 15 | 18 | 10.921% | 0.00979% | $2.0184 | 27.93% |
| 25 | Pokemon Collector | 3.67 | 9 | 10 | 13 | 1.477% | 0.00027% | $0.2669 | 34.93% |
| 25 | Novice | 2.03 | 5 | 7 | 10 | 0.199% | 0.00001% | $0.0356 | 35.86% |
| 20 | Experienced Pokemon Player | 7.07 | 13 | 15 | 18 | 10.921% | 0.00979% | $2.0184 | 27.93% |
| 20 | Pokemon Collector | 3.67 | 9 | 10 | 13 | 1.477% | 0.00027% | $0.2669 | 34.93% |
| 20 | Novice | 2.03 | 5 | 7 | 10 | 0.199% | 0.00001% | $0.0356 | 35.86% |
| 15 | Experienced Pokemon Player | 5.60 | 11 | 13 | 16 | 6.012% | 0.00344% | $1.1031 | 31.59% |
| 15 | Pokemon Collector | 3.11 | 7 | 9 | 12 | 0.885% | 0.00012% | $0.1595 | 35.36% |
| 15 | Novice | 1.85 | 5 | 6 | 9 | 0.141% | 0.00001% | $0.0253 | 35.90% |
| 12 | Experienced Pokemon Player | 4.32 | 10 | 11 | 15 | 2.972% | 0.00108% | $0.5418 | 33.83% |
| 12 | Pokemon Collector | 2.51 | 6 | 8 | 11 | 0.439% | 0.00005% | $0.0788 | 35.68% |
| 12 | Novice | 1.60 | 4 | 6 | 9 | 0.081% | 0.00000% | $0.0145 | 35.94% |
| 10 | Experienced Pokemon Player | 3.60 | 9 | 10 | 14 | 1.743% | 0.00046% | $0.3164 | 34.73% |
| 10 | Pokemon Collector | 2.17 | 6 | 7 | 10 | 0.265% | 0.00002% | $0.0474 | 35.81% |
| 10 | Novice | 1.46 | 4 | 5 | 8 | 0.057% | 0.00000% | $0.0102 | 35.96% |
| 8 | Experienced Pokemon Player | 3.00 | 7 | 9 | 12 | 0.974% | 0.00019% | $0.1762 | 35.30% |
| 8 | Pokemon Collector | 1.94 | 5 | 6 | 10 | 0.176% | 0.00001% | $0.0315 | 35.87% |
| 8 | Novice | 1.38 | 4 | 5 | 8 | 0.045% | 0.00000% | $0.0080 | 35.97% |

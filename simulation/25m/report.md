# 25M-run Pokemon Prize Ladder Simulation

- Runs per profile: **25,000,000**
- Timer: **15 seconds/question**
- Pokemon stat source: **data/csv/pokestats-workbook.csv**
- Pokemon count: **1,025**
- Gameplay model includes prize-milestone spike rounds: same-stat only, 1-2 stat delta.

## Cost assumptions for newly-added items

| Item | Assumed cost | Assumed player retail value |
|---|---:|---:|
| 2 Better English Packs | $20 | $30 |
| 1 Paldean Fates Pack | $8 | $12 |

Update these if your actual buy cost differs, then rerun `python3 simulation/25m/simulation_model.py`.

## Prize ladder simulated

| Unlock | Prize | Cost | Retail |
|---:|---|---:|---:|
| 13 wins | 2 Better English Packs | $20 | $30 |
| 15 wins | 1 Ascended Heroes Pack | $17 | $25 |
| 18 wins | 1 Paldean Fates Pack | $8 | $12 |
| 22 wins | 1 Mega Evolution Tin | $20 | $30 |
| 26 wins | 1 Ascended Heroes Tin | $20 | $40 |
| 31 wins | 1 Prismatic Tin | $20 | $60 |
| 42 wins | 1 Prismatic ETB | $100 | $230 |

## Expected landing point

| Profile | Mean streak | Median | P90 | P95 | P99 | Bonus cost EV/entry | Total cost EV/entry | Profit EV/entry | Margin |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Experienced Pokemon Player | 5.57 | 5 | 11 | 12 | 16 | $0.8946 | $16.8946 | $8.1054 | 32.42% |
| Pokemon Collector | 3.11 | 2 | 7 | 9 | 12 | $0.1479 | $16.1479 | $8.8521 | 35.41% |
| Novice | 1.86 | 1 | 5 | 6 | 9 | $0.0254 | $16.0254 | $8.9746 | 35.90% |

## Tier EV by profile

| Profile | Tier | Wins | Awards / 25M | Expected awards | Award rate | Cost EV/entry | Cost total | Player retail EV/entry |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| Experienced Pokemon Player | 2 Better English Packs | 13 | 790,956 | 789,672.73 | 3.163824% | $0.632765 | $15,819,120 | $0.949147 |
| Experienced Pokemon Player | 1 Ascended Heroes Pack | 15 | 340,682 | 341,240.61 | 1.362728% | $0.231664 | $5,791,594 | $0.340682 |
| Experienced Pokemon Player | 1 Paldean Fates Pack | 18 | 70,897 | 71,066.16 | 0.283588% | $0.022687 | $567,176 | $0.034031 |
| Experienced Pokemon Player | 1 Mega Evolution Tin | 22 | 8,307 | 8,122.41 | 0.033228% | $0.006646 | $166,140 | $0.009968 |
| Experienced Pokemon Player | 1 Ascended Heroes Tin | 26 | 921 | 976.21 | 0.003684% | $0.000737 | $18,420 | $0.001474 |
| Experienced Pokemon Player | 1 Prismatic Tin | 31 | 70 | 71.69 | 0.000280% | $0.000056 | $1,400 | $0.000168 |
| Experienced Pokemon Player | 1 Prismatic ETB | 42 | 0 | 0.23 | 0.000000% | $0.000000 | $0 | $0.000000 |
| Pokemon Collector | 2 Better English Packs | 13 | 138,838 | 138,275.44 | 0.555352% | $0.111070 | $2,776,760 | $0.166606 |
| Pokemon Collector | 1 Ascended Heroes Pack | 15 | 49,343 | 49,639.57 | 0.197372% | $0.033553 | $838,831 | $0.049343 |
| Pokemon Collector | 1 Paldean Fates Pack | 18 | 8,313 | 8,345.17 | 0.033252% | $0.002660 | $66,504 | $0.003990 |
| Pokemon Collector | 1 Mega Evolution Tin | 22 | 700 | 712.25 | 0.002800% | $0.000560 | $14,000 | $0.000840 |
| Pokemon Collector | 1 Ascended Heroes Tin | 26 | 60 | 63.34 | 0.000240% | $0.000048 | $1,200 | $0.000096 |
| Pokemon Collector | 1 Prismatic Tin | 31 | 4 | 3.11 | 0.000016% | $0.000003 | $80 | $0.000010 |
| Pokemon Collector | 1 Prismatic ETB | 42 | 0 | 0.00 | 0.000000% | $0.000000 | $0 | $0.000000 |
| Novice | 2 Better English Packs | 13 | 24,520 | 24,409.09 | 0.098080% | $0.019616 | $490,400 | $0.029424 |
| Novice | 1 Ascended Heroes Pack | 15 | 7,934 | 7,801.34 | 0.031736% | $0.005395 | $134,878 | $0.007934 |
| Novice | 1 Paldean Fates Pack | 18 | 1,102 | 1,150.02 | 0.004408% | $0.000353 | $8,816 | $0.000529 |
| Novice | 1 Mega Evolution Tin | 22 | 79 | 82.11 | 0.000316% | $0.000063 | $1,580 | $0.000095 |
| Novice | 1 Ascended Heroes Tin | 26 | 9 | 6.08 | 0.000036% | $0.000007 | $180 | $0.000014 |
| Novice | 1 Prismatic Tin | 31 | 0 | 0.23 | 0.000000% | $0.000000 | $0 | $0.000000 |
| Novice | 1 Prismatic ETB | 42 | 0 | 0.00 | 0.000000% | $0.000000 | $0 | $0.000000 |

## Timer sensitivity

| Seconds | Profile | Mean streak | P90 | P95 | P99 | First tier reach | ETB expected awards / 25M | Bonus cost EV | Margin |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 25 | Experienced Pokemon Player | 6.98 | 12 | 14 | 17 | 8.4962% | 0.82 | $1.5594 | 29.76% |
| 25 | Pokemon Collector | 3.67 | 9 | 10 | 13 | 1.2910% | 0.01 | $0.2413 | 35.03% |
| 25 | Novice | 2.04 | 5 | 7 | 10 | 0.1868% | 0.00 | $0.0353 | 35.86% |
| 20 | Experienced Pokemon Player | 6.98 | 12 | 14 | 17 | 8.4942% | 0.82 | $1.5591 | 29.76% |
| 20 | Pokemon Collector | 3.67 | 9 | 10 | 13 | 1.2855% | 0.01 | $0.2402 | 35.04% |
| 20 | Novice | 2.04 | 5 | 7 | 10 | 0.1871% | 0.00 | $0.0353 | 35.86% |
| 15 | Experienced Pokemon Player | 5.57 | 11 | 12 | 16 | 4.8427% | 0.23 | $0.8935 | 32.43% |
| 15 | Pokemon Collector | 3.11 | 7 | 9 | 12 | 0.7919% | 0.00 | $0.1484 | 35.41% |
| 15 | Novice | 1.86 | 5 | 6 | 9 | 0.1344% | 0.00 | $0.0254 | 35.90% |
| 12 | Experienced Pokemon Player | 4.31 | 10 | 11 | 14 | 2.4810% | 0.06 | $0.4602 | 34.16% |
| 12 | Pokemon Collector | 2.51 | 6 | 8 | 11 | 0.3995% | 0.00 | $0.0750 | 35.70% |
| 12 | Novice | 1.60 | 4 | 6 | 9 | 0.0791% | 0.00 | $0.0150 | 35.94% |
| 10 | Experienced Pokemon Player | 3.60 | 9 | 10 | 13 | 1.4905% | 0.02 | $0.2773 | 34.89% |
| 10 | Pokemon Collector | 2.17 | 6 | 7 | 10 | 0.2457% | 0.00 | $0.0463 | 35.81% |
| 10 | Novice | 1.47 | 4 | 5 | 8 | 0.0565% | 0.00 | $0.0107 | 35.96% |
| 8 | Experienced Pokemon Player | 3.00 | 7 | 9 | 12 | 0.8563% | 0.01 | $0.1599 | 35.36% |
| 8 | Pokemon Collector | 1.94 | 5 | 6 | 10 | 0.1654% | 0.00 | $0.0312 | 35.88% |
| 8 | Novice | 1.38 | 4 | 5 | 8 | 0.0440% | 0.00 | $0.0083 | 35.97% |

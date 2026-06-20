# Pokemon Base Stat Prize Ladder

A Vercel-ready Next.js starter for a timed Pokemon base-stat higher/lower game with fullscreen/popout play, automatic next-round flow, encrypted run tokens, server-side run storage, CSV-backed Pokemon stats, and a physical prize ladder.

## Current economics

Players pay **$25** and receive **2 English Packs** guaranteed. Those packs cost you **$16** and retail to the player for about **$22**.

For a **30% target margin**, max variable cost is **$17.50** per entry. After the $16 guaranteed packs, the bonus-prize expected-value budget is about **$1.50 per player**.

The bonus prize is **highest unlocked only**, not cumulative.

| Unlock | Prize | Your cost | Player retail value |
|---:|---|---:|---:|
| Entry | 2 English Packs | $16 | $22 |
| 13 wins | 2 Better English Packs | $20* | $30* |
| 15 wins | 1 Ascended Heroes Pack | $17 | $25 |
| 18 wins | 1 Paldean Fates Pack | $8* | $12* |
| 22 wins | 1 Mega Evolution Tin | $20 | $30 |
| 26 wins | 1 Ascended Heroes Tin | $20 | $40 |
| 31 wins | 1 Prismatic Tin | $20 | $60 |
| 42 wins | 1 Prismatic ETB | $100 | $230 |

\*Assumptions because these exact item costs were not in the original inventory list: **2 Better English Packs = $20 cost / $30 retail**, **1 Paldean Fates Pack = $8 cost / $12 retail**. Update `src/lib/game/config.ts` and `simulation/25m/simulation_model.py` if your actual buy costs differ, then rerun the simulation.

## Simulation outputs

The latest simulation files are in `simulation/25m/`:

- `report.md` - readable summary.
- `summary.csv` - expected landing point and total EV by profile.
- `tier_ev.csv` - tier-by-tier winner counts and EV.
- `timer_sensitivity.csv` - 8s/10s/12s/15s/20s/25s timer comparison.
- `simulation_report.json` - complete machine-readable output.

The latest model uses:

- **25,000,000 runs per player profile**.
- **15 seconds/question**.
- **1,025 Pokemon** from `data/csv/pokestats-workbook.csv`.
- Prize-milestone spike rounds: same-stat only, 1-2 stat delta.
- No player internet lookup.

Headline result for the harder ladder at **15 seconds/question**:

| Profile | Mean final streak | Median | P90 | P95 | P99 | Bonus cost EV/entry | Margin |
|---|---:|---:|---:|---:|---:|---:|---:|
| Experienced Pokemon Player | 5.57 | 5 | 11 | 12 | 16 | $0.8946 | 32.42% |
| Pokemon Collector | 3.11 | 2 | 7 | 9 | 12 | $0.1479 | 35.41% |
| Novice | 1.86 | 1 | 5 | 6 | 9 | $0.0254 | 35.90% |

Recommended timer: **15 seconds**. At **20-25 seconds**, the experienced-player margin drops just below the 30% target with this ladder. At **12 seconds**, the game is much harder and margin rises to about 34% against experienced players.

## CSV-based Pokemon stats

This version does **not** depend on PokéAPI or another runtime stat API for gameplay. The main dataset is generated from:

```text
data/csv/pokestats-workbook.csv
```

The checked-in generated file is `src/lib/game/data.ts` and contains **1,025 Pokemon** from the uploaded workbook CSV, with base stats, total base stats, image URLs, fallback image URLs, and Pokemon.com Pokédex links.

Regenerate the TypeScript dataset after replacing/updating the CSV:

```bash
npm run seed:pokemon
```

The older CSV files are still included only as reference material. Gameplay stats are generated from `pokestats-workbook.csv`.

## True-random, no-repeat run logic

Question generation uses Node crypto randomness on the server. It does not use deterministic `seed + round` question generation.

Each run stores a `seenPokemonIds` ledger. When a question is generated, both Pokemon in that question are added to the ledger. Future questions filter out every seen Pokemon, so the same player cannot see the same Pokemon twice in one run.

Other anti-cheat changes:

- Current questions are stored server-side instead of being recomputed from a visible seed.
- Run tokens are encrypted, not just signed.
- Tokens include a run-state version, so stale/replayed tokens are rejected.
- Unrevealed Pokemon stat values and hidden stat deltas are not sent to the browser before the answer.
- Answer checking still happens server-side.

For local development, run state falls back to an in-memory map. For Vercel production, configure Redis/KV-style REST environment variables so run state survives serverless instance changes and stale tokens can be rejected consistently.

Supported production env var names:

```bash
KV_REST_API_URL=
KV_REST_API_TOKEN=
# or
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

## Image handling

Each Pokemon gets:

- `imageUrl` - Pokemon.com-style static detail image URL by National Dex number.
- `fallbackImageUrl` - legacy Pokemon asset URL by National Dex number.
- `pokemonComUrl` - official Pokédex page URL.

To physically download images into `public/images/pokemon` and point the generated dataset at local files, run:

```bash
npm run images:pokemon
```

Only use downloaded/hosted Pokemon assets commercially if you have the appropriate rights.

## Game design

- Timer: **15 seconds per round**.
- Correct answers reveal stats briefly, then auto-advance.
- Fullscreen mode: `Start Fullscreen Game` requests browser fullscreen from a user click.
- Popout mode: `Popout Game` opens a kiosk-style full-screen-sized window.
- Early rounds: larger total-stat gaps.
- Mid rounds: mix of total base stats and exact stat-to-stat comparisons.
- Late rounds: exact stat comparisons with tighter deltas.
- Prize-milestone rounds use extra-tight same-stat comparisons before major unlocks.
- ETB tier: **42 wins**, intentionally the rarest unlock.

Edit `src/lib/game/config.ts` to change the timer, auto-advance delay, stat-difference bands, prize thresholds, or prize costs.

## Setup

```bash
npm install
cp .env.example .env.local
# edit .env.local with GAME_SECRET and CLAIM_SECRET
npm run dev
```

Generate secrets:

```bash
openssl rand -hex 32
openssl rand -hex 32
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repo into Vercel.
3. Add `GAME_SECRET` and `CLAIM_SECRET` environment variables.
4. Add Redis/KV REST environment variables for production run storage.
5. Deploy with the default Next.js settings.

## Production checklist before taking paid entries

This starter now has server-side run storage, encrypted run tokens, one-version-only request tokens, and per-run no-repeat Pokemon logic. Before live paid use, still add/confirm:

- Durable production Redis/KV or database storage.
- Staff admin screen for claim verification and redemption.
- Payment verification or POS entry-code redemption.
- Inventory caps and event configuration, especially for the Prismatic ETB.
- Real analytics: reach rate by round, prize EV, actual margin, timer abandonments.
- Full contest rules, eligibility, privacy/refund policies, and legal/IP review.

Pokemon names, images, logos, and related marks belong to their respective owners. This project is a technical prototype and does not grant rights to use protected Pokemon IP commercially.

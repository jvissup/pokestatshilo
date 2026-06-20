# Pokemon Base Stat Prize Ladder

A Vercel-ready Next.js starter for a timed Pokemon base-stat higher/lower game with fullscreen/popout play, automatic next-round flow, encrypted run tokens, server-side run storage, CSV-backed Pokemon stats, and a physical prize ladder.

## Current economics

<<<<<<< HEAD
Players pay **$25** and receive **2 English Packs** guaranteed. Those packs cost you **$16** and retail to the player for about **$22**.
=======
Players pay **$25** and receive **2 English Packs** to start. Those packs cost you **$16**.
>>>>>>> 669aff68fa823c56f19707423b9a4e9bd7a9c1b1

For a **30% target margin**, max variable cost is **$17.50** per entry. After the $16 guaranteed packs, the bonus-prize expected-value budget is about **$1.50 per player**.

The bonus prize is **highest unlocked only**, not cumulative.

<<<<<<< HEAD
| Unlock | Prize | Your cost | Player retail value |
|---:|---|---:|---:|
| Entry | 2 English Packs | $16 | $22 |
| 13 wins | 1 Ascended Heroes Pack | $17 | $25 |
| 15 wins | 1 Mega Evolution Tin | $20 | $30 |
| 17 wins | 1 Ascended Heroes Tin | $20 | $40 |
| 19 wins | 1 Prismatic Tin | $20 | $60 |
| 28 wins | 1 Prismatic ETB | $100 | $230 |
=======
| Unlock | Prize | Your cost |
|---:|---|---:|
| Entry | 2 English Packs | $16 |
| 9 wins | 1 Ascended Heroes Pack | $17 |
| 11 wins | 1 Mega Evolution Tin | $20 |
| 13 wins | 1 Ascended Heroes Tin | $20 |
| 15 wins | 1 Prismatic Tin | $20 |
| 22 wins | 1 Prismatic ETB | $100 |
>>>>>>> 669aff68fa823c56f19707423b9a4e9bd7a9c1b1

These thresholds are based on the included 25,000,000-run simulation per player profile using a 15-second timer and the local CSV stat dataset.

## Simulation outputs

The latest simulation files are in `simulation/25m/`:

- `report.md` - readable summary.
- `summary.csv` - expected landing point and total EV by profile.
- `tier_ev.csv` - tier-by-tier winner counts and EV.
- `timer_sensitivity.csv` - 8s/10s/12s/15s/20s/25s timer comparison.
- `simulation_report.json` - complete machine-readable output.

Headline result for the adjusted ladder at **15 seconds/question**:

| Profile | Mean final streak | Median | P90 | P95 | P99 | Bonus cost EV/entry | Margin |
|---|---:|---:|---:|---:|---:|---:|---:|
| Experienced Pokemon Player | 5.60 | 5 | 11 | 13 | 16 | $1.1017 | 31.59% |
| Pokemon Collector | 3.11 | 2 | 7 | 9 | 12 | $0.1591 | 35.36% |
| Novice | 1.85 | 1 | 5 | 6 | 9 | $0.0252 | 35.90% |

Recommended timer: **15 seconds** for a fair public game, or **12 seconds** if you want the event to feel noticeably more challenging and protect margin harder. Avoid **20-25 seconds** unless you raise the ETB threshold again.

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

Question generation now uses Node crypto randomness on the server. It no longer uses deterministic `seed + round` question generation.

Each run stores a `seenPokemonIds` ledger. When a question is generated, both Pokemon in that question are added to the ledger. Future questions filter out every seen Pokemon, so the same player cannot see the same Pokemon twice in one run.

Other anti-cheat changes:

- Current questions are stored server-side instead of being recomputed from a visible seed.
- Run tokens are encrypted, not just signed.
- Tokens include a run-state version, so stale/replayed tokens are rejected.
- Unrevealed Pokemon stat values and hidden stat deltas are not sent to the browser before the answer.
- Answer checking still happens server-side.

For local development, run state falls back to an in-memory map. For Vercel production, configure Redis/KV-style REST environment variables so run state survives serverless instance changes.

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
- ETB tier: **28 wins**, intentionally rarest.

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

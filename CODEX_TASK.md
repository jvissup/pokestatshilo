# Codex Task: Build Production Version of Pokemon Base Stat Prize Ladder

You are working in a Next.js app-router project designed for Vercel hosting.

## Product goal

Build a timed Pokemon base-stat higher/lower game. Players pay $25 and receive 2 English Packs guaranteed. They then answer timed comparisons to unlock bonus prize tiers. Longer streak = bigger prize. Only the highest unlocked bonus prize is awarded.

## Current app

- `app/page.tsx`: playable client UI.
- `app/api/game/start`: starts a signed run.
- `app/api/game/answer`: checks answer server-side and reveals stats.
- `app/api/game/next`: starts the next timed question after reveal.
- `app/api/game/claim`: creates signed claim code.
- `app/api/game/verify-claim`: verifies signed claim code.
- `src/lib/game/config.ts`: prize tiers, timers, difficulty bands, target margin.
- `src/lib/game/questions.ts`: question generator.
- `src/lib/game/data.ts`: starter Pokemon dataset.
- `scripts/ev-simulator.mjs`: expected-value calculator.
- `scripts/build-pokemon-dataset.mjs`: optional PokéAPI dataset builder.

## Must keep

- Entry fee: $25.
- Guaranteed prize: 2 English Packs, cost $16, retail $22.
- Target operating margin: 30%+ over many runs.
- Bonus EV budget: approximately $1.50 per entry unless entry fee or guaranteed pack cost changes.
- Prize gates:
  - 9 wins: 1 Ascended Heroes Pack, cost $17, retail $25.
  - 11 wins: 1 Mega Evolution Tin, cost $20, retail $30.
  - 13 wins: 1 Ascended Heroes Tin, cost $20, retail $40.
  - 15 wins: 1 Prismatic Tin, cost $20, retail $60.
  - 22 wins: 1 Prismatic ETB, cost $100, retail $230.

## Build next

1. Add a database-backed run ledger. Recommended tables:
   - `runs`: run id, payment id, seed, streak, status, timestamps.
   - `questions`: run id, round, question id, left id, right id, stat key, correct side, answered at.
   - `claims`: claim code hash, run id, prize tier, redeemed at, staff user.
   - `inventory`: prize tier, on hand, reserved, redeemed.
2. Make signed run tokens one-time-use or store the current question server-side.
3. Add Stripe Checkout or event POS entry-code redemption.
4. Add staff admin page for verifying and redeeming claims.
5. Add configurable event mode: free-play demo vs paid prize mode.
6. Add analytics for actual reach probability by round and prize EV.
7. Add accessibility pass and mobile event kiosk mode.

## Safety constraints

Do not expose unrevealed stat values to the client before an answer is locked.
Do not make bonus prizes cumulative unless you recalculate EV and adjust gates.
Do not launch paid prize mode without legal/IP review and proper contest rules.

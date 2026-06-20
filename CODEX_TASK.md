# Codex Task: Productionize Pokemon Base Stat Prize Ladder

You are inside a Next.js app-router project for Vercel.

## Product brief

Build a timed Pokemon base-stat higher/lower game. Players pay $25, receive 2 English Packs guaranteed, then answer Pokemon stat comparisons to unlock a physical prize ladder. Longer streak = bigger prize. Only the highest unlocked bonus prize is awarded.

## Must preserve

- Entry: $25.
- Guaranteed item: 2 English Packs, cost $16, retail $22.
- Target margin: 30%+ over many runs.
- Bonus EV target: about $1.50 per player or lower.
- Timer: 15 seconds per question unless the ladder is recalibrated.
- Prize tiers from the latest harder ladder simulation:
  - 13 wins: 2 Better English Packs, assumed cost $20, assumed retail $30.
  - 15 wins: 1 Ascended Heroes Pack, cost $17, retail $25.
  - 18 wins: 1 Paldean Fates Pack, assumed cost $8, assumed retail $12.
  - 22 wins: 1 Mega Evolution Tin, cost $20, retail $30.
  - 26 wins: 1 Ascended Heroes Tin, cost $20, retail $40.
  - 31 wins: 1 Prismatic Tin, cost $20, retail $60.
  - 42 wins: 1 Prismatic ETB, cost $100, retail $230.

## Simulation context

The `simulation/25m/` folder contains the latest 25,000,000-run-per-profile projection.

Assumptions:

- 15 seconds/question.
- No player internet lookup.
- Highest unlocked bonus prize only, not cumulative.
- 1,025 Pokemon generated from the uploaded local CSV workbook.
- Prize-milestone spike rounds are modeled as same-stat only with 1-2 stat delta.
- Profiles modeled: Experienced Pokemon Player, Pokemon Collector, Novice.

Headline result at 15 seconds/question:

- Experienced Pokemon Player: $0.8946 bonus cost EV/entry, 32.42% projected margin.
- Pokemon Collector: $0.1479 bonus cost EV/entry, 35.41% projected margin.
- Novice: $0.0254 bonus cost EV/entry, 35.90% projected margin.

Use `simulation/25m/summary.csv`, `tier_ev.csv`, and `timer_sensitivity.csv` when changing prize thresholds, costs, or the timer.

## Current code map

- `app/page.tsx`: playable UI, popout/kiosk mode, fullscreen button, auto-timeout, and correct-answer auto-advance.
- `app/api/game/start`: starts a stored run and returns the first public question.
- `app/api/game/answer`: checks the stored current question server-side and reveals stats.
- `app/api/game/next`: generates the next crypto-random question after a correct answer.
- `app/api/game/claim`: creates signed claim code.
- `app/api/game/verify-claim`: validates signed claim code.
- `src/lib/game/config.ts`: prize tiers, 15-second timer, difficulty bands, and prize-milestone hard rounds.
- `src/lib/game/questions.ts`: crypto-random server-side question generator with cached candidate pools and no-repeat filtering.
- `src/lib/game/store.ts`: stateless encrypted token adapter. No KV/Upstash env vars are required for Vercel production.
- `src/lib/game/signing.ts`: encrypted run access tokens and signed claim codes.
- `src/lib/game/data.ts`: generated CSV-backed Pokemon data.
- `data/csv/pokestats-workbook.csv`: source of truth for Pokemon stats.
- `scripts/build-pokemon-dataset.mjs`: regenerates Pokemon data from the local workbook CSV; can optionally download images to `public/images/pokemon`.
- `scripts/ev-simulator.mjs`: quick EV sanity checker.
- `simulation/25m/simulation_model.py`: full data-aware 25M-run simulation.
- `GITHUB_PR_REVIEW.md`: summary of reviewed GitHub PRs and how their ideas were incorporated.

## Build next

1. Confirm actual buy costs for `2 Better English Packs` and `1 Paldean Fates Pack`; rerun the simulation if those differ from assumptions.
2. Add Stripe Checkout or POS entry-code redemption.
3. Add staff admin screen for claim verification and redemption.
4. Add inventory caps and event configuration.
5. Add analytics: reach rate by round, prize EV, actual margin.
6. Add operator-controlled kiosk settings for live events.
7. Consider optional durable storage if you need stronger anti-replay protection than stateless encrypted tokens.
8. Polish fullscreen game mode for tablets/event monitors.
9. Re-run simulation after any timer, prize, stat-band, cost, or dataset change.

## Hard requirements

- Keep the 15-second round timer unless economics/difficulty are recalculated.
- Keep correct-answer auto-advance unless a future kiosk flow intentionally changes it.
- Never expose unrevealed stat values or hidden deltas to the client.
- Never use deterministic `seed + round` question generation for live gameplay.
- Keep every run crypto-random from the server.
- Never show a player the same Pokemon more than once in a run.
- Keep image handling per Pokemon: every generated Pokemon should have an `imageUrl`, `fallbackImageUrl`, and `pokemonComUrl`.
- Use `data/csv/pokestats-workbook.csv` as the source of truth for all Pokemon stats.
- Do not reintroduce runtime dependence on external stat APIs for gameplay.
- Do not make prizes cumulative without recalculating EV.
- Do not launch paid public prize mode without legal/IP review.

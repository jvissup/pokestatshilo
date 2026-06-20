# Codex Task: Productionize Pokemon Base Stat Prize Ladder

You are inside a Next.js app-router project for Vercel.

## Product brief

Build a timed Pokemon base-stat higher/lower game. Players pay $25, receive 2 English Packs guaranteed, then answer Pokemon stat comparisons to unlock a physical prize ladder. Longer streak = bigger prize. Only the highest unlocked bonus prize is awarded.

## Must preserve

- Entry: $25.
- Guaranteed item: 2 English Packs, cost $16, retail $22.
- Target margin: 30%+ over many runs.
- Bonus EV target: about $1.50 per player.
- Prize tiers:
  - 9 wins: 1 Ascended Heroes Pack, cost $17, retail $25.
  - 11 wins: 1 Mega Evolution Tin, cost $20, retail $30.
  - 13 wins: 1 Ascended Heroes Tin, cost $20, retail $40.
  - 15 wins: 1 Prismatic Tin, cost $20, retail $60.
  - 22 wins: 1 Prismatic ETB, cost $100, retail $230.

## Current code map

- `app/page.tsx`: playable UI, popout/kiosk mode, fullscreen button, auto-timeout, and correct-answer auto-advance.
- `app/api/game/start`: starts signed run.
- `app/api/game/answer`: checks answer server-side and reveals stats.
- `app/api/game/next`: starts next timed question after reveal.
- `app/api/game/claim`: creates signed claim code.
- `app/api/game/verify-claim`: validates signed claim code.
- `src/lib/game/config.ts`: prize tiers and difficulty bands.
- `src/lib/game/questions.ts`: deterministic server-side question generator.
- `src/lib/game/data.ts`: demo Pokemon data and image URL helpers.
- `scripts/build-pokemon-dataset.mjs`: pulls Pokemon.com image metadata and PokéAPI stats; can download images to public folder.
- `scripts/ev-simulator.mjs`: EV math simulator.

## Build next

1. Add durable DB-backed sessions.
2. Store current question server-side and make answer tokens one-time use.
3. Add Stripe Checkout or POS entry-code redemption.
4. Add staff admin screen for claim verification and redemption.
5. Add inventory caps and event configuration.
6. Add analytics: reach rate by round, prize EV, actual margin.
7. Add operator-controlled kiosk settings for live events.
8. Polish fullscreen game mode for tablets/event monitors.

## Hard requirements

- Keep the 25-second round timer unless economics/difficulty are recalculated.
- Keep correct-answer auto-advance unless a future kiosk flow intentionally changes it.
- Never expose unrevealed stat values to the client.
- Keep image handling per Pokemon: every generated Pokemon should have an `imageUrl`, `fallbackImageUrl`, and `pokemonComUrl`.
- Do not make prizes cumulative without recalculating EV.
- Do not launch paid public prize mode without legal/IP review.

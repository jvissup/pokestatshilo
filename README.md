# Pokemon Base Stat Prize Ladder

A Vercel-ready Next.js starter for a timed base-stat higher/lower game with a physical prize ladder.

Players pay **$25** and receive **2 English Packs** to start. Bonus prizes unlock only when a player reaches the required streak. The bonus ladder is designed as **highest unlocked prize only**, not cumulative, because cumulative prizes change the expected-value math.

## Prize ladder

| Unlock | Prize | Your cost | Player retail value |
|---:|---|---:|---:|
| Entry | 2 English Packs | $16 | $22 |
| 9 wins | 1 Ascended Heroes Pack | $17 | $25 |
| 11 wins | 1 Mega Evolution Tin | $20 | $30 |
| 13 wins | 1 Ascended Heroes Tin | $20 | $40 |
| 15 wins | 1 Prismatic Tin | $20 | $60 |
| 22 wins | 1 Prismatic ETB | $100 | $230 |

At a $25 entry fee and a 30% target margin, the max total variable cost is $17.50. Because the guaranteed packs cost $16, the target bonus prize expected value is about **$1.50 per player**.

Run the EV helper:

```bash
npm run ev
```

The simulator uses three player-strength profiles and assumes the highest unlocked bonus prize is awarded. Tune `scripts/ev-simulator.mjs` after you collect real results.

## Game design

- Rounds 1-3: mostly total base stat comparisons with large stat gaps.
- Rounds 4-6: total and exact-stat mix.
- Rounds 7-9: more exact-stat questions.
- Rounds 10-15: tight exact-stat questions under shorter timers.
- Rounds 16+: tiny deltas and 5-second timers, making the ETB genuinely hard.

The question generator avoids ties and chooses pairings by stat-difference bands. Edit `src/lib/game/config.ts` to tune timers, stat gaps, and prize gates.

## Data and images

The starter seed includes Gen 1 Pokemon base stats for a working demo. Images are referenced from Pokemon.com asset URLs and each card links to the matching official Pokédex page.

For a larger dataset, run:

```bash
npm run seed:pokemon
```

That script fetches base stats from PokéAPI and writes `src/lib/game/data.generated.ts`. To use the generated file, either rename it to `src/lib/game/data.ts` or change the import in `src/lib/game/questions.ts` from `./data` to `./data.generated`.

Pokemon.com does not provide a stable public JSON endpoint for numeric base stats. For a commercial deployment, use a licensed source or get written permission for the Pokémon marks/images/assets you display.

## Local setup

```bash
npm install
cp .env.example .env.local
# edit .env.local and set GAME_SECRET and CLAIM_SECRET
npm run dev
```

Open `http://localhost:3000`.

Generate secrets:

```bash
openssl rand -hex 32
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repo in Vercel.
3. Add environment variables:
   - `GAME_SECRET`
   - `CLAIM_SECRET`
4. Deploy with the default Next.js settings.

## Production notes before taking paid entries

This scaffold signs game state and claim codes server-side, which is much better than a purely client-side game. It is still not enough for real prize operations because a determined user can replay old signed tokens without a database-backed session ledger.

Before launch, add:

- A database table for runs, questions, answer submissions, claims, inventory, and staff redemptions.
- One-time token usage so old answers cannot be replayed.
- Payment verification, likely Stripe Checkout or a POS-issued entry code.
- Staff-only claim verification screen using `/api/game/verify-claim`.
- Inventory caps per day/event, especially for the Prismatic ETB.
- Full contest terms, eligibility, odds/material disclosures, privacy policy, refund policy, and local legal review.

## Important legal/IP reminder

Pokemon names, images, logos, and related marks belong to their respective owners. This project is a technical prototype and does not grant rights to use protected Pokémon IP in a commercial event.

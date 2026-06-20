# Pokemon Base Stat Prize Ladder

A Vercel-ready Next.js starter for a timed Pokemon base-stat higher/lower game with a physical prize ladder.

## Economics

Players pay **$25** and receive **2 English Packs** to start. Those packs cost you **$16** and retail to the player for about **$22**.

For a **30% target margin**, max variable cost is $17.50 per entry. After the $16 guaranteed packs, the bonus-prize expected-value budget is about **$1.50 per player**.

The bonus prize is **highest unlocked only**, not cumulative.

| Unlock | Prize | Your cost | Player retail value |
|---:|---|---:|---:|
| Entry | 2 English Packs | $16 | $22 |
| 9 wins | 1 Ascended Heroes Pack | $17 | $25 |
| 11 wins | 1 Mega Evolution Tin | $20 | $30 |
| 13 wins | 1 Ascended Heroes Tin | $20 | $40 |
| 15 wins | 1 Prismatic Tin | $20 | $60 |
| 22 wins | 1 Prismatic ETB | $100 | $230 |

Run the EV simulator:

```bash
npm run ev
```

## Image pulling

The demo seed uses Pokemon.com-style image URLs by Pokédex number. For a full dataset with image URLs for each Pokemon, run:

```bash
npm run seed:pokemon
```

That command pulls:

- Pokemon.com Pokédex metadata, including `ThumbnailImage`, slug, detail page URL, and types.
- PokéAPI base stats.

To physically download Pokemon images into `public/images/pokemon` and point the dataset at local files, run:

```bash
npm run images:pokemon
```

The image download mode is useful if you want Vercel to serve static images from the app instead of relying on remote image URLs. Make sure you have the rights to host/use these assets before running a paid public event.

## Game design

- Early rounds: larger total-stat gaps.
- Mid rounds: mix of total base stats and exact stat-to-stat comparisons.
- Late rounds: exact stat comparisons with tighter deltas.
- Timer: 25 seconds per round by default.
- Correct answers reveal stats briefly, then auto-advance to the next round.
- Popout/fullscreen mode: use Popout Game to open a kiosk-style full-screen-sized window. Start Fullscreen Game and Enter Fullscreen request true browser fullscreen from a user click.
- ETB tier: 22-win streak, intentionally hardest to reach.

Edit `src/lib/game/config.ts` to change the 25-second timer, auto-advance delay, stat-difference bands, prize thresholds, or prize costs.

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
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repo into Vercel.
3. Add `GAME_SECRET` and `CLAIM_SECRET` environment variables.
4. Deploy with the default Next.js settings.

## Production checklist before taking paid entries

This starter signs run state and claim codes server-side, and unrevealed stats are not sent to the browser before the player answers. Still, for real prizes, add database-backed run/session storage so old signed tokens cannot be replayed.

Add before launch:

- Database tables for runs, questions, answers, claims, inventory, and redemptions.
- One-time use answer tokens.
- Payment verification or POS entry-code redemption.
- Staff admin claim verification UI using `/api/game/verify-claim`.
- Daily/event inventory caps, especially for the Prismatic ETB.
- Full contest rules, eligibility, privacy/refund policies, and legal/IP review.

Pokemon names, images, logos, and related marks belong to their respective owners. This project is a technical prototype and does not grant rights to use protected Pokémon IP commercially.

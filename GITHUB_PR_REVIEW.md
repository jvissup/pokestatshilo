# GitHub Pull Request Review

Repository reviewed: `jvissup/pokestatshilo`

## Status

No open pull requests were found at review time.

Two merged pull requests were found and reviewed:

## PR #1 — Remove retail values from prize tiers and ladder UI

Status: closed and merged.

What it changed:

- Removed public-facing retail value display from the ladder UI.
- Updated the prize tier type to focus on prize identity and internal cost.
- Updated docs/task notes to avoid showing retail values in the player-facing experience.

Review notes:

- Good direction for a live game because player-facing retail values can make the experience feel overly transactional.
- Incorporated into the player-facing UI: the ladder no longer shows a retail row and the hero metric now shows `Best unlocked prize`.
- Retail values are still retained in internal economics/simulation config because the operator needs those values for EV analysis.

## PR #2 — Make question generation truly per-round random and add extreme-hard milestone rounds

Status: closed and merged.

What it changed:

- Added fresh question entropy per round instead of relying only on deterministic `seed + round` logic.
- Added extra-hard milestone rounds with tight stat deltas.
- Added cached candidate pools to reduce repeated pair-scanning work.

Review notes:

- Good direction, but the original PR still allowed deterministic reconstruction from signed run state patterns.
- The ZIP goes further than PR #2:
  - removes deterministic seed-based generation for live gameplay;
  - uses Node crypto randomness for server-side question choice;
  - stores current questions server-side;
  - encrypts run access tokens;
  - rejects stale/replayed run tokens using a version number;
  - tracks `seenPokemonIds`; and
  - filters all future question candidates so no Pokemon can appear twice in the same run.

## Implemented in this ZIP

- Source of truth changed to `data/csv/pokestats-workbook.csv`.
- Generated `src/lib/game/data.ts` now contains 1,025 Pokemon from the uploaded workbook CSV.
- `src/lib/game/questions.ts` now uses crypto-random selection and no-repeat filtering.
- `src/lib/game/store.ts` adds server-side run storage with Redis/KV REST support and local memory fallback.
- `src/lib/game/signing.ts` now uses encrypted run tokens for game access.
- API routes now load/update stored run state instead of trusting a visible signed state blob.


import type { PrizeTier, RoundBand, StatKey } from './types';

export const ENTRY_FEE = 25;
export const TARGET_MARGIN = 0.30;
export const ROUND_SECONDS = 15;
export const AUTO_ADVANCE_MS = 1400;

export const GUARANTEED_PRIZE = {
  name: '2 English Packs',
  cost: 16,
  retail: 22,
  label: 'Guaranteed with entry'
} as const;

// Highest unlocked bonus prize only. Do not make cumulative unless you recalc EV.
export const PRIZE_TIERS: PrizeTier[] = [
  { streak: 13, name: '2 Better English Packs', cost: 20, retail: 30, label: 'Better pack unlock' },
  { streak: 15, name: '1 Ascended Heroes Pack', cost: 17, retail: 25, label: 'Ascended Heroes pack' },
  { streak: 18, name: '1 Paldean Fates Pack', cost: 8, retail: 12, label: 'Paldean Fates pack' },
  { streak: 22, name: '1 Mega Evolution Tin', cost: 20, retail: 30, label: 'Mega Evolution tin' },
  { streak: 26, name: '1 Ascended Heroes Tin', cost: 20, retail: 40, label: 'Ascended Heroes tin' },
  { streak: 31, name: '1 Prismatic Tin', cost: 20, retail: 60, label: 'Prismatic tin' },
  { streak: 42, name: '1 Prismatic ETB', cost: 100, retail: 230, label: 'Grand prize and rarest unlock', isGrandPrize: true }
];


export const EXTREME_HARD_WIN_STREAKS = new Set(PRIZE_TIERS.map((tier) => tier.streak - 1));
export const EXTREME_HARD_MIN_DELTA = 1;
export const EXTREME_HARD_MAX_DELTA = 2;
export const EXTREME_HARD_FALLBACK_MAX_DELTA = 4;

export const STAT_LABELS: Record<StatKey, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  spAttack: 'Special Attack',
  spDefense: 'Special Defense',
  speed: 'Speed',
  total: 'Total Base Stats'
};

export const STAT_KEYS: Exclude<StatKey, 'total'>[] = ['hp', 'attack', 'defense', 'spAttack', 'spDefense', 'speed'];

export const ROUND_BANDS: RoundBand[] = [
  { label: 'Warm Up', fromRound: 1, toRound: 3, seconds: ROUND_SECONDS, minDelta: 70, totalWeight: 70, sameStatWeight: 30 },
  { label: 'Trainer Check', fromRound: 4, toRound: 6, seconds: ROUND_SECONDS, minDelta: 42, totalWeight: 50, sameStatWeight: 50 },
  { label: 'Gym Leader', fromRound: 7, toRound: 9, seconds: ROUND_SECONDS, minDelta: 24, totalWeight: 35, sameStatWeight: 65 },
  { label: 'Elite Four', fromRound: 10, toRound: 12, seconds: ROUND_SECONDS, minDelta: 12, maxDelta: 42, totalWeight: 20, sameStatWeight: 80 },
  { label: 'Champion', fromRound: 13, toRound: 15, seconds: ROUND_SECONDS, minDelta: 6, maxDelta: 28, totalWeight: 10, sameStatWeight: 90 },
  { label: 'Shiny Odds', fromRound: 16, seconds: ROUND_SECONDS, minDelta: 1, maxDelta: 16, totalWeight: 5, sameStatWeight: 95 }
];

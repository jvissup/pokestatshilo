import type { PrizeTier, RoundBand, StatKey } from './types';

export const ENTRY_FEE = 25;

export const GUARANTEED_PRIZE = {
  name: '2 English Packs',
  cost: 16,
  retail: 22,
  label: 'Guaranteed starter prize'
} as const;

// Highest unlocked bonus prize only. Do not award these cumulatively unless you recalc EV.
export const PRIZE_TIERS: PrizeTier[] = [
  {
    streak: 9,
    name: '1 Ascended Heroes Pack',
    cost: 17,
    retail: 25,
    label: 'First unlock'
  },
  {
    streak: 11,
    name: '1 Mega Evolution Tin',
    cost: 20,
    retail: 30,
    label: 'Tin tier'
  },
  {
    streak: 13,
    name: '1 Ascended Heroes Tin',
    cost: 20,
    retail: 40,
    label: 'Value jump'
  },
  {
    streak: 15,
    name: '1 Prismatic Tin',
    cost: 20,
    retail: 60,
    label: 'High value tin'
  },
  {
    streak: 22,
    name: '1 Prismatic ETB',
    cost: 100,
    retail: 230,
    label: 'Grand prize',
    isGrandPrize: true
  }
];

export const STAT_LABELS: Record<StatKey, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  spAttack: 'Special Attack',
  spDefense: 'Special Defense',
  speed: 'Speed',
  total: 'Total Base Stats'
};

export const STAT_KEYS: Exclude<StatKey, 'total'>[] = [
  'hp',
  'attack',
  'defense',
  'spAttack',
  'spDefense',
  'speed'
];

export const ROUND_BANDS: RoundBand[] = [
  {
    label: 'Warm Up',
    fromRound: 1,
    toRound: 3,
    seconds: 12,
    minDelta: 70,
    totalWeight: 70,
    sameStatWeight: 30,
    description: 'Mostly total-stat matchups with large gaps.'
  },
  {
    label: 'Trainer Check',
    fromRound: 4,
    toRound: 6,
    seconds: 10,
    minDelta: 42,
    totalWeight: 50,
    sameStatWeight: 50,
    description: 'Mixes total-stat and exact-stat comparisons.'
  },
  {
    label: 'Gym Leader',
    fromRound: 7,
    toRound: 9,
    seconds: 8,
    minDelta: 24,
    totalWeight: 35,
    sameStatWeight: 65,
    description: 'Exact stats become more common and deltas get tighter.'
  },
  {
    label: 'Elite Four',
    fromRound: 10,
    toRound: 12,
    seconds: 7,
    minDelta: 12,
    maxDelta: 42,
    totalWeight: 20,
    sameStatWeight: 80,
    description: 'Mostly exact-stat questions with mid-sized gaps.'
  },
  {
    label: 'Champion',
    fromRound: 13,
    toRound: 15,
    seconds: 6,
    minDelta: 6,
    maxDelta: 28,
    totalWeight: 10,
    sameStatWeight: 90,
    description: 'Fast exact-stat comparisons with small gaps.'
  },
  {
    label: 'Shiny Odds',
    fromRound: 16,
    seconds: 5,
    minDelta: 1,
    maxDelta: 16,
    totalWeight: 5,
    sameStatWeight: 95,
    description: 'Near coin-flip exact-stat calls under pressure.'
  }
];

export const TARGET_MARGIN = 0.30;

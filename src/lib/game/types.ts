export type StatKey = 'hp' | 'attack' | 'defense' | 'spAttack' | 'spDefense' | 'speed' | 'total';

export type BaseStats = Record<StatKey, number>;

export type Pokemon = {
  id: number;
  slug: string;
  name: string;
  types: string[];
  stats: BaseStats;
  imageUrl?: string;
  fallbackImageUrl?: string;
  pokemonComUrl?: string;
};

export type ComparisonKind = 'same-stat' | 'total';

export type PrizeTier = {
  streak: number;
  name: string;
  cost: number;
  label: string;
  isGrandPrize?: boolean;
};

export type RoundBand = {
  label: string;
  fromRound: number;
  toRound?: number;
  seconds: number;
  minDelta: number;
  maxDelta?: number;
  totalWeight: number;
  sameStatWeight: number;
};

export type QuestionPokemon = Pokemon & {
  imageUrl: string;
  fallbackImageUrl: string;
  pokemonComUrl: string;
};

export type GameQuestion = {
  questionId: string;
  round: number;
  prompt: string;
  statKey: StatKey;
  comparisonKind: ComparisonKind;
  seconds: number;
  delta: number;
  left: QuestionPokemon;
  right: QuestionPokemon;
};

export type PublicQuestionPokemon = Omit<QuestionPokemon, 'stats'> & { stats?: BaseStats };
export type PublicGameQuestion = Omit<GameQuestion, 'left' | 'right'> & {
  left: PublicQuestionPokemon;
  right: PublicQuestionPokemon;
  reveal?: { correctSide: 'left' | 'right'; leftValue: number; rightValue: number };
};

export type SignedRunState = {
  runId: string;
  seed: number;
  questionNonce: number;
  streak: number;
  bestPrizeStreak: number;
  status: 'active' | 'lost' | 'claimed';
  startedAt: number;
  updatedAt: number;
};

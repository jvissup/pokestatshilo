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
  retail: number;
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

export type StoredQuestion = {
  questionId: string;
  round: number;
  statKey: StatKey;
  comparisonKind: ComparisonKind;
  seconds: number;
  leftId: number;
  rightId: number;
  createdAt: number;
};

export type PublicQuestionPokemon = Omit<QuestionPokemon, 'stats'> & { stats?: BaseStats };
export type PublicGameQuestion = Omit<GameQuestion, 'left' | 'right'> & {
  left: PublicQuestionPokemon;
  right: PublicQuestionPokemon;
  reveal?: { correctSide: 'left' | 'right'; leftValue: number; rightValue: number };
};

export type RunStatus = 'active' | 'lost' | 'claimed';

export type StoredRunState = {
  runId: string;
  playerSecret: string;
  version: number;
  streak: number;
  bestPrizeStreak: number;
  status: RunStatus;
  seenPokemonIds: number[];
  currentQuestion: StoredQuestion | null;
  startedAt: number;
  updatedAt: number;
};

export type RunAccessToken = {
  runId: string;
  playerSecret: string;
  version: number;
};

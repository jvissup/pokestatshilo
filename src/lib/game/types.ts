export type StatKey = 'hp' | 'attack' | 'defense' | 'spAttack' | 'spDefense' | 'speed' | 'total';

export type BaseStats = {
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
  total: number;
};

export type Pokemon = {
  id: number;
  slug: string;
  name: string;
  types: string[];
  stats: BaseStats;
};

export type ComparisonKind = 'same-stat' | 'total';

export type RoundBand = {
  label: string;
  fromRound: number;
  toRound?: number;
  seconds: number;
  minDelta: number;
  maxDelta?: number;
  totalWeight: number;
  sameStatWeight: number;
  description: string;
};

export type PrizeTier = {
  streak: number;
  name: string;
  cost: number;
  retail: number;
  label: string;
  isGrandPrize?: boolean;
};

export type QuestionPokemon = {
  id: number;
  slug: string;
  name: string;
  types: string[];
  imageUrl: string;
  fallbackImageUrl: string;
  pokemonComUrl: string;
  stats: BaseStats;
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

export type SignedRunState = {
  runId: string;
  seed: number;
  streak: number;
  bestPrizeStreak: number;
  status: 'active' | 'lost' | 'claimed';
  startedAt: number;
  updatedAt: number;
};

export type PublicRunState = {
  token: string;
  runId: string;
  streak: number;
  bestPrizeStreak: number;
  status: SignedRunState['status'];
  question: GameQuestion | null;
};

export type PublicQuestionPokemon = Omit<QuestionPokemon, 'stats'> & {
  stats?: BaseStats;
};

export type PublicGameQuestion = Omit<GameQuestion, 'left' | 'right'> & {
  left: PublicQuestionPokemon;
  right: PublicQuestionPokemon;
  reveal?: {
    correctSide: 'left' | 'right';
    leftValue: number;
    rightValue: number;
  };
};

export type PublicRunStateV2 = Omit<PublicRunState, 'question'> & {
  question: PublicGameQuestion | null;
};

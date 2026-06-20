import type { GameQuestion, PublicGameQuestion, QuestionPokemon } from './types';
import { getCorrectSide } from './questions';

function hideStats(pokemon: QuestionPokemon, reveal: boolean) {
  const { stats, ...publicPokemon } = pokemon;
  return reveal ? { ...publicPokemon, stats } : publicPokemon;
}

export function toPublicQuestion(question: GameQuestion, reveal = false): PublicGameQuestion {
  const correctSide = getCorrectSide(question);
  return {
    ...question,
    left: hideStats(question.left, reveal),
    right: hideStats(question.right, reveal),
    reveal: reveal
      ? {
          correctSide,
          leftValue: question.left.stats[question.statKey],
          rightValue: question.right.stats[question.statKey]
        }
      : undefined
  };
}

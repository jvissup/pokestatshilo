import { getCorrectSide } from './questions';
import type { GameQuestion, PublicGameQuestion, QuestionPokemon } from './types';

function publicPokemon(pokemon: QuestionPokemon, reveal: boolean) {
  const { stats, ...rest } = pokemon;
  return reveal ? { ...rest, stats } : rest;
}

export function toPublicQuestion(question: GameQuestion, reveal = false): PublicGameQuestion {
  const correctSide = getCorrectSide(question);
  return {
    ...question,
    delta: reveal ? question.delta : 0,
    left: publicPokemon(question.left, reveal),
    right: publicPokemon(question.right, reveal),
    reveal: reveal ? {
      correctSide,
      leftValue: question.left.stats[question.statKey],
      rightValue: question.right.stats[question.statKey]
    } : undefined
  };
}

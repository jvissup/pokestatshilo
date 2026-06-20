import { POKEMON, toQuestionPokemon } from './data';
import { ROUND_BANDS, STAT_KEYS, STAT_LABELS } from './config';
import { pickOne, rngFromParts, shuffle } from './rng';
import type { ComparisonKind, GameQuestion, Pokemon, RoundBand, StatKey } from './types';

export function getRoundBand(round: number): RoundBand {
  return ROUND_BANDS.find((band) => round >= band.fromRound && (band.toRound === undefined || round <= band.toRound)) ?? ROUND_BANDS[ROUND_BANDS.length - 1];
}

function chooseComparisonKind(rng: () => number, band: RoundBand): ComparisonKind {
  const total = band.totalWeight + band.sameStatWeight;
  return rng() * total < band.totalWeight ? 'total' : 'same-stat';
}

function chooseStatKey(rng: () => number, kind: ComparisonKind): StatKey {
  return kind === 'total' ? 'total' : pickOne(rng, STAT_KEYS);
}

type Candidate = {
  left: Pokemon;
  right: Pokemon;
  delta: number;
};

function buildCandidates(statKey: StatKey, band: RoundBand): Candidate[] {
  const candidates: Candidate[] = [];
  for (let i = 0; i < POKEMON.length; i += 1) {
    for (let j = i + 1; j < POKEMON.length; j += 1) {
      const left = POKEMON[i];
      const right = POKEMON[j];
      const leftValue = left.stats[statKey];
      const rightValue = right.stats[statKey];
      const delta = Math.abs(leftValue - rightValue);
      const insideMin = delta >= band.minDelta;
      const insideMax = band.maxDelta === undefined || delta <= band.maxDelta;
      if (delta > 0 && insideMin && insideMax) {
        candidates.push({ left, right, delta });
      }
    }
  }
  return candidates;
}

function fallbackCandidates(statKey: StatKey): Candidate[] {
  const candidates: Candidate[] = [];
  for (let i = 0; i < POKEMON.length; i += 1) {
    for (let j = i + 1; j < POKEMON.length; j += 1) {
      const left = POKEMON[i];
      const right = POKEMON[j];
      const delta = Math.abs(left.stats[statKey] - right.stats[statKey]);
      if (delta > 0) {
        candidates.push({ left, right, delta });
      }
    }
  }
  return candidates;
}

export function makeQuestion(seed: number, round: number): GameQuestion {
  const band = getRoundBand(round);
  const rng = rngFromParts(seed, round, 'question');
  const comparisonKind = chooseComparisonKind(rng, band);
  const statKey = chooseStatKey(rng, comparisonKind);
  const candidates = buildCandidates(statKey, band);
  const pool = candidates.length > 0 ? candidates : fallbackCandidates(statKey);
  const candidate = pickOne(rng, pool);
  const [left, right] = shuffle(rng, [candidate.left, candidate.right]);
  const delta = Math.abs(left.stats[statKey] - right.stats[statKey]);
  const prompt = `Which Pokemon has the higher ${STAT_LABELS[statKey]}?`;

  return {
    questionId: `${seed}.${round}.${statKey}.${left.id}.${right.id}`,
    round,
    prompt,
    statKey,
    comparisonKind,
    seconds: band.seconds,
    delta,
    left: toQuestionPokemon(left),
    right: toQuestionPokemon(right)
  };
}

export function getCorrectSide(question: GameQuestion): 'left' | 'right' {
  const leftValue = question.left.stats[question.statKey];
  const rightValue = question.right.stats[question.statKey];
  if (leftValue === rightValue) {
    throw new Error('Question generated a tie, which should be filtered out.');
  }
  return leftValue > rightValue ? 'left' : 'right';
}

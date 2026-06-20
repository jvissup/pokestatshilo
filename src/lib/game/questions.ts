import { ROUND_BANDS, STAT_KEYS, STAT_LABELS } from './config';
import { POKEMON, toQuestionPokemon } from './data';
import { pickOne, rngFromParts, shuffle } from './rng';
import type { ComparisonKind, GameQuestion, Pokemon, RoundBand, StatKey } from './types';

export function getRoundBand(round: number): RoundBand {
  return ROUND_BANDS.find((band) => round >= band.fromRound && (band.toRound === undefined || round <= band.toRound)) ?? ROUND_BANDS.at(-1)!;
}

function chooseKind(rng: () => number, band: RoundBand): ComparisonKind {
  return rng() * (band.totalWeight + band.sameStatWeight) < band.totalWeight ? 'total' : 'same-stat';
}

function chooseStat(rng: () => number, kind: ComparisonKind): StatKey {
  return kind === 'total' ? 'total' : pickOne(rng, STAT_KEYS);
}

type Candidate = { left: Pokemon; right: Pokemon; delta: number };

function candidatesFor(statKey: StatKey, band: RoundBand): Candidate[] {
  const candidates: Candidate[] = [];
  for (let i = 0; i < POKEMON.length; i += 1) {
    for (let j = i + 1; j < POKEMON.length; j += 1) {
      const left = POKEMON[i];
      const right = POKEMON[j];
      const delta = Math.abs(left.stats[statKey] - right.stats[statKey]);
      if (delta > 0 && delta >= band.minDelta && (band.maxDelta === undefined || delta <= band.maxDelta)) {
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
      if (delta > 0) candidates.push({ left, right, delta });
    }
  }
  return candidates;
}

export function makeQuestion(seed: number, round: number): GameQuestion {
  const band = getRoundBand(round);
  const rng = rngFromParts(seed, round, 'question');
  const comparisonKind = chooseKind(rng, band);
  const statKey = chooseStat(rng, comparisonKind);
  const pool = candidatesFor(statKey, band);
  const candidate = pickOne(rng, pool.length ? pool : fallbackCandidates(statKey));
  const [left, right] = shuffle(rng, [candidate.left, candidate.right]);
  const delta = Math.abs(left.stats[statKey] - right.stats[statKey]);

  return {
    questionId: `${seed}.${round}.${statKey}.${left.id}.${right.id}`,
    round,
    prompt: `Which Pokemon has the higher ${STAT_LABELS[statKey]}?`,
    statKey,
    comparisonKind,
    seconds: band.seconds,
    delta,
    left: toQuestionPokemon(left),
    right: toQuestionPokemon(right)
  };
}

export function getCorrectSide(question: GameQuestion): 'left' | 'right' {
  return question.left.stats[question.statKey] > question.right.stats[question.statKey] ? 'left' : 'right';
}

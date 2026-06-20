import { ROUND_BANDS, STAT_KEYS, STAT_LABELS } from './config';
import { POKEMON, toQuestionPokemon } from './data';
import { pickOne, rngFromParts, shuffle } from './rng';
import type { ComparisonKind, GameQuestion, Pokemon, RoundBand, StatKey } from './types';

const EXTREME_HARD_WIN_STREAKS = new Set([8, 10, 12, 14, 21]);

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
const candidateCache = new Map<string, Candidate[]>();

function getCachedCandidates(key: string, build: () => Candidate[]): Candidate[] {
  const cached = candidateCache.get(key);
  if (cached) return cached;
  const candidates = build();
  candidateCache.set(key, candidates);
  return candidates;
}

function candidatesFor(statKey: StatKey, band: RoundBand): Candidate[] {
  return getCachedCandidates(`band:${statKey}:${band.minDelta}:${band.maxDelta ?? 'none'}`, () => {
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
  });
}

function fallbackCandidates(statKey: StatKey): Candidate[] {
  return getCachedCandidates(`fallback:${statKey}`, () => {
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
  });
}

function candidatesForDeltaRange(statKey: StatKey, minDelta: number, maxDelta: number): Candidate[] {
  return getCachedCandidates(`delta:${statKey}:${minDelta}:${maxDelta}`, () => {
    const candidates: Candidate[] = [];
    for (let i = 0; i < POKEMON.length; i += 1) {
      for (let j = i + 1; j < POKEMON.length; j += 1) {
        const left = POKEMON[i];
        const right = POKEMON[j];
        const delta = Math.abs(left.stats[statKey] - right.stats[statKey]);
        if (delta >= minDelta && delta <= maxDelta) {
          candidates.push({ left, right, delta });
        }
      }
    }
    return candidates;
  });
}

function isExtremeHardRound(round: number): boolean {
  return EXTREME_HARD_WIN_STREAKS.has(round - 1);
}

export function makeQuestion(seed: number, round: number, questionNonce = 0): GameQuestion {
  const band = getRoundBand(round);
  const rng = rngFromParts(seed, round, questionNonce, 'question');
  const extremeHard = isExtremeHardRound(round);
  const comparisonKind = extremeHard ? 'same-stat' : chooseKind(rng, band);
  const statKey = extremeHard ? pickOne(rng, STAT_KEYS) : chooseStat(rng, comparisonKind);
  const pool = extremeHard ? candidatesForDeltaRange(statKey, 1, 2) : candidatesFor(statKey, band);
  const fallbackPool = extremeHard ? candidatesForDeltaRange(statKey, 1, 4) : fallbackCandidates(statKey);
  let candidatePool = pool;
  if (!candidatePool.length) candidatePool = fallbackPool;
  if (!candidatePool.length) candidatePool = fallbackCandidates(statKey);
  const candidate = pickOne(rng, candidatePool);
  const [left, right] = shuffle(rng, [candidate.left, candidate.right]);
  const delta = Math.abs(left.stats[statKey] - right.stats[statKey]);

  return {
    questionId: `${seed}.${questionNonce}.${round}.${statKey}.${left.id}.${right.id}`,
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

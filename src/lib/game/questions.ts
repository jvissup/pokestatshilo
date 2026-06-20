import { randomBytes, randomInt } from 'crypto';
import {
  EXTREME_HARD_FALLBACK_MAX_DELTA,
  EXTREME_HARD_MAX_DELTA,
  EXTREME_HARD_MIN_DELTA,
  EXTREME_HARD_WIN_STREAKS,
  ROUND_BANDS,
  STAT_KEYS,
  STAT_LABELS
} from './config';
import { POKEMON, toQuestionPokemon } from './data';
import type { ComparisonKind, GameQuestion, Pokemon, RoundBand, StatKey, StoredQuestion } from './types';

const POKEMON_BY_ID = new Map(POKEMON.map((pokemon) => [pokemon.id, pokemon]));
const ALL_STAT_KEYS: StatKey[] = [...STAT_KEYS, 'total'];

export function getRoundBand(round: number): RoundBand {
  return ROUND_BANDS.find((band) => round >= band.fromRound && (band.toRound === undefined || round <= band.toRound)) ?? ROUND_BANDS.at(-1)!;
}

type Candidate = { left: Pokemon; right: Pokemon; delta: number };

type CandidateOptions = {
  minDelta?: number;
  maxDelta?: number;
};

const candidateCache = new Map<string, Candidate[]>();

function securePickOne<T>(items: T[]): T {
  if (!items.length) throw new Error('Cannot pick from empty array.');
  return items[randomInt(items.length)];
}

function secureShuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = randomInt(i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function randomQuestionId(round: number) {
  return `${round}.${randomBytes(10).toString('base64url')}`;
}

function chooseKind(band: RoundBand): ComparisonKind {
  const total = band.totalWeight + band.sameStatWeight;
  return randomInt(total) < band.totalWeight ? 'total' : 'same-stat';
}

function chooseStat(kind: ComparisonKind): StatKey {
  return kind === 'total' ? 'total' : securePickOne(STAT_KEYS);
}

function cacheKey(statKey: StatKey, options: CandidateOptions) {
  return `${statKey}:${options.minDelta ?? 'any'}:${options.maxDelta ?? 'any'}`;
}

function candidatesFor(statKey: StatKey, options: CandidateOptions): Candidate[] {
  const key = cacheKey(statKey, options);
  const cached = candidateCache.get(key);
  if (cached) return cached;

  const candidates: Candidate[] = [];
  for (let i = 0; i < POKEMON.length; i += 1) {
    for (let j = i + 1; j < POKEMON.length; j += 1) {
      const left = POKEMON[i];
      const right = POKEMON[j];
      const delta = Math.abs(left.stats[statKey] - right.stats[statKey]);
      if (delta <= 0) continue;
      if (options.minDelta !== undefined && delta < options.minDelta) continue;
      if (options.maxDelta !== undefined && delta > options.maxDelta) continue;
      candidates.push({ left, right, delta });
    }
  }

  candidateCache.set(key, candidates);
  return candidates;
}

function availableCandidates(candidates: Candidate[], seenIds: Set<number>) {
  return candidates.filter((candidate) => !seenIds.has(candidate.left.id) && !seenIds.has(candidate.right.id));
}

function standardCandidates(statKey: StatKey, band: RoundBand, seenIds: Set<number>) {
  const strict = availableCandidates(candidatesFor(statKey, { minDelta: band.minDelta, maxDelta: band.maxDelta }), seenIds);
  if (strict.length) return strict;
  return availableCandidates(candidatesFor(statKey, {}), seenIds);
}

function extremeCandidates(statKey: StatKey, seenIds: Set<number>) {
  const strict = availableCandidates(candidatesFor(statKey, { minDelta: EXTREME_HARD_MIN_DELTA, maxDelta: EXTREME_HARD_MAX_DELTA }), seenIds);
  if (strict.length) return strict;
  const relaxed = availableCandidates(candidatesFor(statKey, { minDelta: EXTREME_HARD_MIN_DELTA, maxDelta: EXTREME_HARD_FALLBACK_MAX_DELTA }), seenIds);
  if (relaxed.length) return relaxed;
  return availableCandidates(candidatesFor(statKey, {}), seenIds);
}

function isExtremeHardMilestoneRound(round: number): boolean {
  const winsBeforeRound = round - 1;
  return EXTREME_HARD_WIN_STREAKS.has(winsBeforeRound);
}

function buildQuestion(round: number, comparisonKind: ComparisonKind, statKey: StatKey, candidate: Candidate, seconds: number): GameQuestion {
  const [left, right] = secureShuffle([candidate.left, candidate.right]);
  const delta = Math.abs(left.stats[statKey] - right.stats[statKey]);
  return {
    questionId: randomQuestionId(round),
    round,
    prompt: `Which Pokemon has the higher ${STAT_LABELS[statKey]}?`,
    statKey,
    comparisonKind,
    seconds,
    delta,
    left: toQuestionPokemon(left),
    right: toQuestionPokemon(right)
  };
}

export function makeQuestion(round: number, seenPokemonIds: number[] = []): GameQuestion {
  const band = getRoundBand(round);
  const seenIds = new Set(seenPokemonIds);
  const extremeHard = isExtremeHardMilestoneRound(round);

  for (let attempt = 0; attempt < 24; attempt += 1) {
    const comparisonKind = extremeHard ? 'same-stat' : chooseKind(band);
    const statKey = chooseStat(comparisonKind);
    const pool = extremeHard ? extremeCandidates(statKey, seenIds) : standardCandidates(statKey, band, seenIds);
    if (pool.length) return buildQuestion(round, comparisonKind, statKey, securePickOne(pool), band.seconds);
  }

  for (const statKey of secureShuffle(ALL_STAT_KEYS)) {
    const comparisonKind: ComparisonKind = statKey === 'total' ? 'total' : 'same-stat';
    const pool = standardCandidates(statKey, band, seenIds);
    if (pool.length) return buildQuestion(round, comparisonKind, statKey, securePickOne(pool), band.seconds);
  }

  throw new Error('No unique Pokemon pairs remain for this run.');
}

export function storeQuestion(question: GameQuestion): StoredQuestion {
  return {
    questionId: question.questionId,
    round: question.round,
    statKey: question.statKey,
    comparisonKind: question.comparisonKind,
    seconds: question.seconds,
    leftId: question.left.id,
    rightId: question.right.id,
    createdAt: Date.now()
  };
}

export function hydrateQuestion(snapshot: StoredQuestion): GameQuestion {
  const left = POKEMON_BY_ID.get(snapshot.leftId);
  const right = POKEMON_BY_ID.get(snapshot.rightId);
  if (!left || !right) throw new Error('Stored question references an unknown Pokemon.');
  const delta = Math.abs(left.stats[snapshot.statKey] - right.stats[snapshot.statKey]);
  return {
    questionId: snapshot.questionId,
    round: snapshot.round,
    prompt: `Which Pokemon has the higher ${STAT_LABELS[snapshot.statKey]}?`,
    statKey: snapshot.statKey,
    comparisonKind: snapshot.comparisonKind,
    seconds: snapshot.seconds,
    delta,
    left: toQuestionPokemon(left),
    right: toQuestionPokemon(right)
  };
}

export function addQuestionPokemonToSeen(seenPokemonIds: number[], question: GameQuestion) {
  return Array.from(new Set([...seenPokemonIds, question.left.id, question.right.id]));
}

export function getCorrectSide(question: GameQuestion): 'left' | 'right' {
  return question.left.stats[question.statKey] > question.right.stats[question.statKey] ? 'left' : 'right';
}

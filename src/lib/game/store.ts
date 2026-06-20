import { createRunToken, safeEqualString, verifyRunToken } from './signing';
import type { StoredRunState } from './types';

const RUN_TTL_SECONDS = 60 * 60 * 6;
const memoryRuns = new Map<string, StoredRunState>();

type RedisResponse<T> = { result?: T; error?: string };

function redisConfig() {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

async function redisCommand<T>(command: unknown[]): Promise<T> {
  const config = redisConfig();
  if (!config) throw new Error('Redis is not configured.');
  const response = await fetch(config.url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(command),
    cache: 'no-store'
  });
  if (!response.ok) throw new Error(`Redis command failed with status ${response.status}.`);
  const data = (await response.json()) as RedisResponse<T>;
  if (data.error) throw new Error(data.error);
  return data.result as T;
}

function keyForRun(runId: string) {
  return `pokestats:run:${runId}`;
}

function assertStorageConfiguredForProduction() {
  if (!redisConfig() && process.env.NODE_ENV === 'production') {
    throw new Error('Production run storage requires KV_REST_API_URL/KV_REST_API_TOKEN or UPSTASH_REDIS_REST_URL/UPSTASH_REDIS_REST_TOKEN.');
  }
}

export async function saveRun(state: StoredRunState) {
  assertStorageConfiguredForProduction();
  const serialized = JSON.stringify(state);
  if (redisConfig()) {
    await redisCommand(['SET', keyForRun(state.runId), serialized, 'EX', RUN_TTL_SECONDS]);
    return;
  }
  memoryRuns.set(state.runId, state);
}

export async function readRun(runId: string): Promise<StoredRunState | null> {
  assertStorageConfiguredForProduction();
  if (redisConfig()) {
    const result = await redisCommand<string | null>(['GET', keyForRun(runId)]);
    return result ? JSON.parse(result) as StoredRunState : null;
  }
  return memoryRuns.get(runId) ?? null;
}

export async function deleteRun(runId: string) {
  assertStorageConfiguredForProduction();
  if (redisConfig()) {
    await redisCommand(['DEL', keyForRun(runId)]);
    return;
  }
  memoryRuns.delete(runId);
}

export async function loadRunFromToken(token: string): Promise<StoredRunState> {
  const access = verifyRunToken(token);
  const state = await readRun(access.runId);
  if (!state) throw new Error('Run not found or expired.');
  if (!safeEqualString(state.playerSecret, access.playerSecret)) throw new Error('Invalid run token.');
  if (state.version !== access.version) throw new Error('Stale run token.');
  return state;
}

export async function saveRunAndCreateToken(state: StoredRunState) {
  await saveRun(state);
  return createRunToken(state);
}

export function nextRunVersion(state: StoredRunState): number {
  return state.version + 1;
}

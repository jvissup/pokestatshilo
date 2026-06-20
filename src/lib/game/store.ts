import { createRunToken, safeEqualString, verifyRunToken } from './signing';
import type { StoredRunState } from './types';

const RUN_TTL_MS = 1000 * 60 * 60 * 6;
const memoryRuns = new Map<string, StoredRunState>();

function pruneExpiredRuns(now = Date.now()) {
  for (const [runId, state] of memoryRuns.entries()) {
    if (now - state.updatedAt > RUN_TTL_MS) memoryRuns.delete(runId);
  }
}

export async function saveRun(state: StoredRunState) {
  pruneExpiredRuns();
  memoryRuns.set(state.runId, state);
}

export async function readRun(runId: string): Promise<StoredRunState | null> {
  pruneExpiredRuns();
  return memoryRuns.get(runId) ?? null;
}

export async function deleteRun(runId: string) {
  memoryRuns.delete(runId);
}

export async function loadRunFromToken(token: string): Promise<StoredRunState> {
  const tokenState = verifyRunToken(token);
  const cached = await readRun(tokenState.runId);

  if (!cached) return tokenState;
  if (!safeEqualString(cached.playerSecret, tokenState.playerSecret)) throw new Error('Invalid run token.');
  if (cached.version > tokenState.version) throw new Error('Stale run token.');
  return cached.version === tokenState.version ? cached : tokenState;
}

export async function saveRunAndCreateToken(state: StoredRunState) {
  await saveRun(state);
  return createRunToken(state);
}

export function nextRunVersion(state: StoredRunState): number {
  return state.version + 1;
}

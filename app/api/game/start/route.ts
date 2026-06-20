import { NextResponse } from 'next/server';
import { makeQuestion } from '@/lib/game/questions';
import { toPublicQuestion } from '@/lib/game/public';
import { createRandomSeed, createRunId, signRunState } from '@/lib/game/signing';
import type { SignedRunState } from '@/lib/game/types';

export const runtime = 'nodejs';

export async function POST() {
  const now = Date.now();
  const state: SignedRunState = {
    runId: createRunId(),
    seed: createRandomSeed(),
    streak: 0,
    bestPrizeStreak: 0,
    status: 'active',
    startedAt: now,
    updatedAt: now
  };
  return NextResponse.json({
    token: signRunState(state),
    runId: state.runId,
    streak: state.streak,
    bestPrizeStreak: state.bestPrizeStreak,
    status: state.status,
    question: toPublicQuestion(makeQuestion(state.seed, 1), false)
  });
}

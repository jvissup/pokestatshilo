import { NextResponse } from 'next/server';
import { makeQuestion } from '@/lib/game/questions';
import { toPublicQuestion } from '@/lib/game/public';
import { signRunState, verifyRunToken } from '@/lib/game/signing';
import type { SignedRunState } from '@/lib/game/types';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!body.token) return NextResponse.json({ error: 'token is required.' }, { status: 400 });

  let state: SignedRunState;
  try { state = verifyRunToken(body.token); } catch { return NextResponse.json({ error: 'Invalid token.' }, { status: 401 }); }
  if (state.status !== 'active') return NextResponse.json({ error: 'Run is not active.' }, { status: 409 });

  const nextState = { ...state, updatedAt: Date.now() };
  return NextResponse.json({
    token: signRunState(nextState),
    runId: nextState.runId,
    streak: nextState.streak,
    bestPrizeStreak: nextState.bestPrizeStreak,
    status: nextState.status,
    question: toPublicQuestion(makeQuestion(nextState.seed, nextState.streak + 1), false)
  });
}

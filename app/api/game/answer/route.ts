import { NextResponse } from 'next/server';
import { getUnlockedPrize } from '@/lib/game/economics';
import { getCorrectSide, makeQuestion } from '@/lib/game/questions';
import { toPublicQuestion } from '@/lib/game/public';
import { signRunState, verifyRunToken } from '@/lib/game/signing';
import type { SignedRunState } from '@/lib/game/types';

export const runtime = 'nodejs';

type Body = { token?: string; questionId?: string; selectedSide?: 'left' | 'right'; timedOut?: boolean };

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as Body;
  if (!body.token || !body.questionId || (!body.selectedSide && !body.timedOut)) {
    return NextResponse.json({ error: 'token, questionId, and selectedSide or timedOut are required.' }, { status: 400 });
  }

  let state: SignedRunState;
  try { state = verifyRunToken(body.token); } catch { return NextResponse.json({ error: 'Invalid token.' }, { status: 401 }); }
  if (state.status !== 'active') return NextResponse.json({ error: 'Run is not active.' }, { status: 409 });

  const question = makeQuestion(state.seed, state.streak + 1);
  if (question.questionId !== body.questionId) {
    return NextResponse.json({ error: 'Question does not match current run.' }, { status: 409 });
  }

  const serverClockExpired = (Date.now() - state.updatedAt) / 1000 > question.seconds + 0.8;
  const timedOut = Boolean(body.timedOut) || serverClockExpired;
  const correct = !timedOut && body.selectedSide === getCorrectSide(question);
  const streak = correct ? state.streak + 1 : state.streak;
  const prize = getUnlockedPrize(streak);
  const nextState: SignedRunState = {
    ...state,
    streak,
    bestPrizeStreak: Math.max(state.bestPrizeStreak, prize?.streak ?? 0),
    status: correct ? 'active' : 'lost',
    updatedAt: Date.now()
  };

  return NextResponse.json({
    token: signRunState(nextState),
    runId: nextState.runId,
    streak: nextState.streak,
    bestPrizeStreak: nextState.bestPrizeStreak,
    status: nextState.status,
    question: null,
    correct,
    timedOut,
    answeredQuestion: toPublicQuestion(question, true)
  });
}

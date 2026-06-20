import { NextResponse } from 'next/server';
import { getUnlockedPrize } from '@/lib/game/economics';
import { getCorrectSide, hydrateQuestion } from '@/lib/game/questions';
import { toPublicQuestion } from '@/lib/game/public';
import { loadRunFromToken, nextRunVersion, saveRunAndCreateToken } from '@/lib/game/store';
import type { StoredRunState } from '@/lib/game/types';

export const runtime = 'nodejs';

type Body = { token?: string; questionId?: string; selectedSide?: 'left' | 'right'; timedOut?: boolean };

function errorMessage(error: unknown) {
  if (!(error instanceof Error)) return 'Answer failed.';
  if (error.message.includes('GAME_SECRET') || error.message.includes('CLAIM_SECRET')) return error.message;
  return process.env.NODE_ENV === 'production' ? 'Answer failed.' : error.message;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as Body;
    if (!body.token || !body.questionId || (!body.selectedSide && !body.timedOut)) {
      return NextResponse.json({ error: 'token, questionId, and selectedSide or timedOut are required.' }, { status: 400 });
    }

    let state: StoredRunState;
    try { state = await loadRunFromToken(body.token); } catch { return NextResponse.json({ error: 'Invalid, expired, or stale token.' }, { status: 401 }); }
    if (state.status !== 'active') return NextResponse.json({ error: 'Run is not active.' }, { status: 409 });
    if (!state.currentQuestion) return NextResponse.json({ error: 'No active question for this run.' }, { status: 409 });

    const question = hydrateQuestion(state.currentQuestion);
    if (question.questionId !== body.questionId) {
      return NextResponse.json({ error: 'Question does not match current run.' }, { status: 409 });
    }

    const serverClockExpired = (Date.now() - state.currentQuestion.createdAt) / 1000 > question.seconds + 0.8;
    const timedOut = Boolean(body.timedOut) || serverClockExpired;
    const correct = !timedOut && body.selectedSide === getCorrectSide(question);
    const streak = correct ? state.streak + 1 : state.streak;
    const prize = getUnlockedPrize(streak);
    const nextState: StoredRunState = {
      ...state,
      version: nextRunVersion(state),
      streak,
      bestPrizeStreak: Math.max(state.bestPrizeStreak, prize?.streak ?? 0),
      status: correct ? 'active' : 'lost',
      currentQuestion: null,
      updatedAt: Date.now()
    };
    const token = await saveRunAndCreateToken(nextState);

    return NextResponse.json({
      token,
      runId: nextState.runId,
      streak: nextState.streak,
      bestPrizeStreak: nextState.bestPrizeStreak,
      status: nextState.status,
      question: null,
      correct,
      timedOut,
      answeredQuestion: toPublicQuestion(question, true)
    });
  } catch (error) {
    return NextResponse.json({ error: errorMessage(error) }, { status: 500 });
  }
}

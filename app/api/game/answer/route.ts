import { NextResponse } from 'next/server';
import { getUnlockedPrize } from '@/lib/game/economics';
import { getCorrectSide, makeQuestion } from '@/lib/game/questions';
import { toPublicQuestion } from '@/lib/game/public';
import { signRunState, verifyRunToken } from '@/lib/game/signing';
import type { SignedRunState } from '@/lib/game/types';

export const runtime = 'nodejs';

type AnswerBody = {
  token?: string;
  questionId?: string;
  selectedSide?: 'left' | 'right';
};

function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let body: AnswerBody;
  try {
    body = (await request.json()) as AnswerBody;
  } catch {
    return jsonError('Invalid JSON body.');
  }

  if (!body.token || !body.questionId || !body.selectedSide) {
    return jsonError('token, questionId, and selectedSide are required.');
  }

  let state: SignedRunState;
  try {
    state = verifyRunToken(body.token);
  } catch {
    return jsonError('Invalid or expired run token.', 401);
  }

  if (state.status !== 'active') {
    return jsonError('This run is no longer active.', 409);
  }

  const round = state.streak + 1;
  const question = makeQuestion(state.seed, round);
  if (question.questionId !== body.questionId) {
    return jsonError('Question does not match the current run state.', 409);
  }

  const elapsedSeconds = (Date.now() - state.updatedAt) / 1000;
  const graceSeconds = 0.8;
  const timedOut = elapsedSeconds > question.seconds + graceSeconds;
  const correctSide = getCorrectSide(question);
  const correct = !timedOut && body.selectedSide === correctSide;
  const newStreak = correct ? state.streak + 1 : state.streak;
  const unlocked = getUnlockedPrize(newStreak);

  const nextState: SignedRunState = {
    ...state,
    streak: newStreak,
    bestPrizeStreak: Math.max(state.bestPrizeStreak, unlocked?.streak ?? 0),
    status: correct ? 'active' : 'lost',
    updatedAt: Date.now()
  };

  const token = signRunState(nextState);

  return NextResponse.json({
    token,
    runId: nextState.runId,
    streak: nextState.streak,
    bestPrizeStreak: nextState.bestPrizeStreak,
    status: nextState.status,
    correct,
    timedOut,
    answeredQuestion: toPublicQuestion(question, true),
    question: null
  });
}

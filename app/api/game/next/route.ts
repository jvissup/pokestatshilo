import { NextResponse } from 'next/server';
import { addQuestionPokemonToSeen, hydrateQuestion, makeQuestion, storeQuestion } from '@/lib/game/questions';
import { toPublicQuestion } from '@/lib/game/public';
import { loadRunFromToken, nextRunVersion, saveRunAndCreateToken } from '@/lib/game/store';
import type { StoredRunState } from '@/lib/game/types';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!body.token) return NextResponse.json({ error: 'token is required.' }, { status: 400 });

  let state: StoredRunState;
  try { state = await loadRunFromToken(body.token); } catch { return NextResponse.json({ error: 'Invalid, expired, or stale token.' }, { status: 401 }); }
  if (state.status !== 'active') return NextResponse.json({ error: 'Run is not active.' }, { status: 409 });

  if (state.currentQuestion) {
    const question = hydrateQuestion(state.currentQuestion);
    return NextResponse.json({
      token: body.token,
      runId: state.runId,
      streak: state.streak,
      bestPrizeStreak: state.bestPrizeStreak,
      status: state.status,
      question: toPublicQuestion(question, false)
    });
  }

  const question = makeQuestion(state.streak + 1, state.seenPokemonIds);
  const nextState: StoredRunState = {
    ...state,
    version: nextRunVersion(state),
    seenPokemonIds: addQuestionPokemonToSeen(state.seenPokemonIds, question),
    currentQuestion: storeQuestion(question),
    updatedAt: Date.now()
  };
  const token = await saveRunAndCreateToken(nextState);

  return NextResponse.json({
    token,
    runId: nextState.runId,
    streak: nextState.streak,
    bestPrizeStreak: nextState.bestPrizeStreak,
    status: nextState.status,
    question: toPublicQuestion(question, false)
  });
}

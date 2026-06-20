import { NextResponse } from 'next/server';
import { addQuestionPokemonToSeen, makeQuestion, storeQuestion } from '@/lib/game/questions';
import { toPublicQuestion } from '@/lib/game/public';
import { createPlayerSecret, createRunId } from '@/lib/game/signing';
import { saveRunAndCreateToken } from '@/lib/game/store';
import type { StoredRunState } from '@/lib/game/types';

export const runtime = 'nodejs';

function errorMessage(error: unknown) {
  if (!(error instanceof Error)) return 'Could not start run.';
  if (error.message.includes('GAME_SECRET') || error.message.includes('CLAIM_SECRET')) return error.message;
  return process.env.NODE_ENV === 'production' ? 'Could not start run.' : error.message;
}

export async function POST() {
  try {
    const now = Date.now();
    const question = makeQuestion(1, []);
    const state: StoredRunState = {
      runId: createRunId(),
      playerSecret: createPlayerSecret(),
      version: 1,
      streak: 0,
      bestPrizeStreak: 0,
      status: 'active',
      seenPokemonIds: addQuestionPokemonToSeen([], question),
      currentQuestion: storeQuestion(question),
      startedAt: now,
      updatedAt: now
    };
    const token = await saveRunAndCreateToken(state);
    return NextResponse.json({
      token,
      runId: state.runId,
      streak: state.streak,
      bestPrizeStreak: state.bestPrizeStreak,
      status: state.status,
      question: toPublicQuestion(question, false)
    });
  } catch (error) {
    return NextResponse.json({ error: errorMessage(error) }, { status: 500 });
  }
}

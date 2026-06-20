import { NextResponse } from 'next/server';
import { addQuestionPokemonToSeen, makeQuestion, storeQuestion } from '@/lib/game/questions';
import { toPublicQuestion } from '@/lib/game/public';
import { createPlayerSecret, createRunId } from '@/lib/game/signing';
import { saveRunAndCreateToken } from '@/lib/game/store';
import type { StoredRunState } from '@/lib/game/types';

export const runtime = 'nodejs';

export async function POST() {
  const now = Date.now();
  const question = makeQuestion(1, []);
  const state: StoredRunState = {
    runId: createRunId(),
<<<<<<< HEAD
    playerSecret: createPlayerSecret(),
    version: 1,
=======
    seed: createRandomSeed(),
    questionNonce: createRandomSeed(),
>>>>>>> 669aff68fa823c56f19707423b9a4e9bd7a9c1b1
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
<<<<<<< HEAD
    question: toPublicQuestion(question, false)
=======
    question: toPublicQuestion(makeQuestion(state.seed, 1, state.questionNonce), false)
>>>>>>> 669aff68fa823c56f19707423b9a4e9bd7a9c1b1
  });
}

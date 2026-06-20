import { NextResponse } from 'next/server';
import { getPrizeByStreak } from '@/lib/game/economics';
import { createClaimCode, signRunState, verifyRunToken } from '@/lib/game/signing';
import type { SignedRunState } from '@/lib/game/types';

export const runtime = 'nodejs';

type ClaimBody = {
  token?: string;
};

function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let body: ClaimBody;
  try {
    body = (await request.json()) as ClaimBody;
  } catch {
    return jsonError('Invalid JSON body.');
  }

  if (!body.token) {
    return jsonError('token is required.');
  }

  let state: SignedRunState;
  try {
    state = verifyRunToken(body.token);
  } catch {
    return jsonError('Invalid run token.', 401);
  }

  if (state.bestPrizeStreak <= 0) {
    return jsonError('No bonus prize has been unlocked yet.', 409);
  }

  const prize = getPrizeByStreak(state.bestPrizeStreak);
  if (!prize) {
    return jsonError('Unlocked prize tier was not found.', 500);
  }

  const claimedState: SignedRunState = {
    ...state,
    status: 'claimed',
    updatedAt: Date.now()
  };

  const claimCode = createClaimCode({
    runId: claimedState.runId,
    streak: claimedState.streak,
    prizeStreak: prize.streak,
    prizeName: prize.name,
    createdAt: Date.now()
  });

  return NextResponse.json({
    token: signRunState(claimedState),
    runId: claimedState.runId,
    streak: claimedState.streak,
    bestPrizeStreak: claimedState.bestPrizeStreak,
    status: claimedState.status,
    prize,
    claimCode
  });
}

import { NextResponse } from 'next/server';
import { getPrizeByStreak } from '@/lib/game/economics';
import { createClaimCode, signRunState, verifyRunToken } from '@/lib/game/signing';
import type { SignedRunState } from '@/lib/game/types';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!body.token) return NextResponse.json({ error: 'token is required.' }, { status: 400 });

  let state: SignedRunState;
  try { state = verifyRunToken(body.token); } catch { return NextResponse.json({ error: 'Invalid token.' }, { status: 401 }); }
  const prize = getPrizeByStreak(state.bestPrizeStreak);
  if (!prize) return NextResponse.json({ error: 'No bonus prize unlocked yet.' }, { status: 409 });

  const claimed: SignedRunState = { ...state, status: 'claimed', updatedAt: Date.now() };
  const claimCode = createClaimCode({
    runId: claimed.runId,
    streak: claimed.streak,
    prizeStreak: prize.streak,
    prizeName: prize.name,
    createdAt: Date.now()
  });

  return NextResponse.json({
    token: signRunState(claimed),
    runId: claimed.runId,
    streak: claimed.streak,
    bestPrizeStreak: claimed.bestPrizeStreak,
    status: claimed.status,
    question: null,
    prize,
    claimCode
  });
}

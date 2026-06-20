import { NextResponse } from 'next/server';
import { getPrizeByStreak } from '@/lib/game/economics';
import { createClaimCode } from '@/lib/game/signing';
import { loadRunFromToken, nextRunVersion, saveRunAndCreateToken } from '@/lib/game/store';
import type { StoredRunState } from '@/lib/game/types';

export const runtime = 'nodejs';

function errorMessage(error: unknown) {
  if (!(error instanceof Error)) return 'Could not claim prize.';
  if (error.message.includes('GAME_SECRET') || error.message.includes('CLAIM_SECRET')) return error.message;
  return process.env.NODE_ENV === 'production' ? 'Could not claim prize.' : error.message;
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    if (!body.token) return NextResponse.json({ error: 'token is required.' }, { status: 400 });

    let state: StoredRunState;
    try { state = await loadRunFromToken(body.token); } catch { return NextResponse.json({ error: 'Invalid, expired, or stale token.' }, { status: 401 }); }
    const prize = getPrizeByStreak(state.bestPrizeStreak);
    if (!prize) return NextResponse.json({ error: 'No bonus prize unlocked yet.' }, { status: 409 });

    const claimed: StoredRunState = {
      ...state,
      version: nextRunVersion(state),
      status: 'claimed',
      currentQuestion: null,
      updatedAt: Date.now()
    };
    const token = await saveRunAndCreateToken(claimed);
    const claimCode = createClaimCode({
      runId: claimed.runId,
      streak: claimed.streak,
      prizeStreak: prize.streak,
      prizeName: prize.name,
      createdAt: Date.now()
    });

    return NextResponse.json({
      token,
      runId: claimed.runId,
      streak: claimed.streak,
      bestPrizeStreak: claimed.bestPrizeStreak,
      status: claimed.status,
      question: null,
      prize,
      claimCode
    });
  } catch (error) {
    return NextResponse.json({ error: errorMessage(error) }, { status: 500 });
  }
}

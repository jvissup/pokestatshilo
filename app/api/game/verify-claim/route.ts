import { NextResponse } from 'next/server';
import { verifyClaimCode } from '@/lib/game/signing';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!body.claimCode) return NextResponse.json({ error: 'claimCode is required.' }, { status: 400 });
  try {
    return NextResponse.json({ valid: true, payload: verifyClaimCode(body.claimCode) });
  } catch (error) {
    const message = error instanceof Error && error.message.includes('CLAIM_SECRET')
      ? error.message
      : 'Invalid claim code.';
    return NextResponse.json({ valid: false, error: message }, { status: 401 });
  }
}

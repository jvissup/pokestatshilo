import { NextResponse } from 'next/server';
import { verifyClaimCode } from '@/lib/game/signing';

export const runtime = 'nodejs';

type VerifyBody = {
  claimCode?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as VerifyBody;
  if (!body.claimCode) {
    return NextResponse.json({ error: 'claimCode is required.' }, { status: 400 });
  }
  try {
    const payload = verifyClaimCode(body.claimCode);
    return NextResponse.json({ valid: true, payload });
  } catch {
    return NextResponse.json({ valid: false, error: 'Invalid claim code.' }, { status: 401 });
  }
}

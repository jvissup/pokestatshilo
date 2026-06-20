import { createHmac, randomBytes, timingSafeEqual } from 'crypto';
import type { SignedRunState } from './types';

function base64UrlEncode(input: Buffer | string): string {
  return Buffer.from(input).toString('base64url');
}

function base64UrlDecode(input: string): Buffer {
  return Buffer.from(input, 'base64url');
}

function getSecret(name: 'GAME_SECRET' | 'CLAIM_SECRET'): string {
  const secret = process.env[name];
  if (secret && secret.length >= 32) {
    return secret;
  }
  if (process.env.NODE_ENV === 'production') {
    throw new Error(`${name} must be set to at least 32 characters in production.`);
  }
  return `${name}-dev-only-secret-change-before-production-000000000000`;
}

function signPayload(payload: string, secret: string): string {
  return createHmac('sha256', secret).update(payload).digest('base64url');
}

export function signRunState(state: SignedRunState): string {
  const payload = base64UrlEncode(JSON.stringify(state));
  const signature = signPayload(payload, getSecret('GAME_SECRET'));
  return `${payload}.${signature}`;
}

export function verifyRunToken(token: string): SignedRunState {
  const [payload, signature] = token.split('.');
  if (!payload || !signature) {
    throw new Error('Malformed token.');
  }
  const expected = signPayload(payload, getSecret('GAME_SECRET'));
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (actualBuffer.length !== expectedBuffer.length || !timingSafeEqual(actualBuffer, expectedBuffer)) {
    throw new Error('Invalid token signature.');
  }
  const decoded = JSON.parse(base64UrlDecode(payload).toString('utf8')) as SignedRunState;
  return decoded;
}

type ClaimPayload = {
  runId: string;
  streak: number;
  prizeStreak: number;
  prizeName: string;
  createdAt: number;
};

export function createRunId(): string {
  return randomBytes(10).toString('hex');
}

export function createRandomSeed(): number {
  return randomBytes(4).readUInt32BE(0);
}

export function createClaimCode(payload: ClaimPayload): string {
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = signPayload(encodedPayload, getSecret('CLAIM_SECRET'));
  return `${encodedPayload}.${signature}`;
}

export function verifyClaimCode(code: string): ClaimPayload {
  const [payload, signature] = code.split('.');
  if (!payload || !signature) {
    throw new Error('Malformed claim code.');
  }
  const expected = signPayload(payload, getSecret('CLAIM_SECRET'));
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (actualBuffer.length !== expectedBuffer.length || !timingSafeEqual(actualBuffer, expectedBuffer)) {
    throw new Error('Invalid claim signature.');
  }
  return JSON.parse(base64UrlDecode(payload).toString('utf8')) as ClaimPayload;
}

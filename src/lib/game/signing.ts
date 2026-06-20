import { createHmac, randomBytes, timingSafeEqual } from 'crypto';
import type { SignedRunState } from './types';

function secret(name: 'GAME_SECRET' | 'CLAIM_SECRET'): string {
  const value = process.env[name];
  if (value && value.length >= 32) return value;
  if (process.env.NODE_ENV === 'production') throw new Error(`${name} must be at least 32 characters.`);
  return `${name}-dev-only-change-before-production-000000000000`;
}

function sign(payload: string, key: string) {
  return createHmac('sha256', key).update(payload).digest('base64url');
}

function encodeJson(value: unknown) {
  return Buffer.from(JSON.stringify(value)).toString('base64url');
}

function decodeJson<T>(value: string): T {
  return JSON.parse(Buffer.from(value, 'base64url').toString('utf8')) as T;
}

export function createRunId() {
  return randomBytes(10).toString('hex');
}

export function createRandomSeed() {
  return randomBytes(4).readUInt32BE(0);
}

export function signRunState(state: SignedRunState): string {
  const payload = encodeJson(state);
  return `${payload}.${sign(payload, secret('GAME_SECRET'))}`;
}

export function verifyRunToken(token: string): SignedRunState {
  const [payload, signature] = token.split('.');
  if (!payload || !signature) throw new Error('Malformed token.');
  const expected = sign(payload, secret('GAME_SECRET'));
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) throw new Error('Invalid token.');
  return decodeJson<SignedRunState>(payload);
}

type ClaimPayload = { runId: string; streak: number; prizeStreak: number; prizeName: string; createdAt: number };

export function createClaimCode(payload: ClaimPayload): string {
  const encoded = encodeJson(payload);
  return `${encoded}.${sign(encoded, secret('CLAIM_SECRET'))}`;
}

export function verifyClaimCode(code: string): ClaimPayload {
  const [payload, signature] = code.split('.');
  if (!payload || !signature) throw new Error('Malformed code.');
  const expected = sign(payload, secret('CLAIM_SECRET'));
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) throw new Error('Invalid code.');
  return decodeJson<ClaimPayload>(payload);
}

import { createCipheriv, createDecipheriv, createHash, createHmac, randomBytes, timingSafeEqual } from 'crypto';
import type { RunAccessToken, StoredRunState } from './types';

function secret(name: 'GAME_SECRET' | 'CLAIM_SECRET'): string {
  const value = process.env[name];
  if (value && value.length >= 32) return value;
  if (process.env.NODE_ENV === 'production') throw new Error(`${name} must be at least 32 characters.`);
  return `${name}-dev-only-change-before-production-000000000000`;
}

function encryptionKey(name: 'GAME_SECRET' | 'CLAIM_SECRET') {
  return createHash('sha256').update(secret(name)).digest();
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

function encryptJson(value: unknown, name: 'GAME_SECRET' | 'CLAIM_SECRET') {
  const iv = randomBytes(12);
  const cipher = createCipheriv('aes-256-gcm', encryptionKey(name), iv);
  const ciphertext = Buffer.concat([cipher.update(JSON.stringify(value), 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `v2.${iv.toString('base64url')}.${ciphertext.toString('base64url')}.${tag.toString('base64url')}`;
}

function decryptJson<T>(token: string, name: 'GAME_SECRET' | 'CLAIM_SECRET'): T {
  const [version, iv, ciphertext, tag] = token.split('.');
  if (version !== 'v2' || !iv || !ciphertext || !tag) throw new Error('Malformed token.');
  const decipher = createDecipheriv('aes-256-gcm', encryptionKey(name), Buffer.from(iv, 'base64url'));
  decipher.setAuthTag(Buffer.from(tag, 'base64url'));
  const cleartext = Buffer.concat([
    decipher.update(Buffer.from(ciphertext, 'base64url')),
    decipher.final()
  ]).toString('utf8');
  return JSON.parse(cleartext) as T;
}

export function safeEqualString(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

export function createRunId() {
  return randomBytes(10).toString('hex');
}

export function createPlayerSecret() {
  return randomBytes(32).toString('base64url');
}

export function createRandomSeed() {
  return randomBytes(4).readUInt32BE(0);
}

export function createRunToken(state: StoredRunState): string {
  const access: RunAccessToken = {
    runId: state.runId,
    playerSecret: state.playerSecret,
    version: state.version
  };
  return encryptJson(access, 'GAME_SECRET');
}

export function verifyRunToken(token: string): RunAccessToken {
  return decryptJson<RunAccessToken>(token, 'GAME_SECRET');
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

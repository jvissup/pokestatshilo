import { ENTRY_FEE, GUARANTEED_PRIZE, PRIZE_TIERS, TARGET_MARGIN } from './config';
import type { PrizeTier } from './types';

export function getUnlockedPrize(streak: number): PrizeTier | null {
  return [...PRIZE_TIERS].reverse().find((tier) => streak >= tier.streak) ?? null;
}

export function getNextPrize(streak: number): PrizeTier | null {
  return PRIZE_TIERS.find((tier) => streak < tier.streak) ?? null;
}

export function getPrizeByStreak(streak: number): PrizeTier | null {
  return PRIZE_TIERS.find((tier) => tier.streak === streak) ?? null;
}

export function getMaxBonusEv(): number {
  return ENTRY_FEE * (1 - TARGET_MARGIN) - GUARANTEED_PRIZE.cost;
}

export function getProjectedMargin(extraPrizeCost: number): number {
  return (ENTRY_FEE - GUARANTEED_PRIZE.cost - extraPrizeCost) / ENTRY_FEE;
}

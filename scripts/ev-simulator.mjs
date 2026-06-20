const ENTRY_FEE = 25;
const GUARANTEED_COST = 16;
const GUARANTEED_RETAIL = 22;
const TARGET_MARGIN = 0.30;

// Cost/retail assumptions for new items that were not in the original inventory list:
// 2 Better English Packs: cost 20, retail 30
// 1 Paldean Fates Pack: cost 8, retail 12
const tiers = [
  { streak: 13, name: '2 Better English Packs', cost: 20, retail: 30 },
  { streak: 15, name: '1 Ascended Heroes Pack', cost: 17, retail: 25 },
  { streak: 18, name: '1 Paldean Fates Pack', cost: 8, retail: 12 },
  { streak: 22, name: '1 Mega Evolution Tin', cost: 20, retail: 30 },
  { streak: 26, name: '1 Ascended Heroes Tin', cost: 20, retail: 40 },
  { streak: 31, name: '1 Prismatic Tin', cost: 20, retail: 60 },
  { streak: 42, name: '1 Prismatic ETB', cost: 100, retail: 230 }
];

// Quick sanity profiles only. The full CSV/data-aware 25M simulation lives in simulation/25m/.
const profiles = {
  experienced: [0.90,0.90,0.90,0.86,0.86,0.86,0.82,0.82,0.82,0.70,0.70,0.70,0.54,0.66,0.54,0.60,0.60,0.54,0.60,0.60,0.60,0.54,0.60,0.60,0.60,0.54,0.60,0.60,0.60,0.60,0.54,0.60,0.60,0.60,0.60,0.60,0.60,0.60,0.60,0.60,0.60,0.54],
  collector: [0.78,0.78,0.78,0.74,0.74,0.74,0.70,0.70,0.70,0.61,0.61,0.61,0.52,0.58,0.52,0.55,0.55,0.52,0.55,0.55,0.55,0.52,0.55,0.55,0.55,0.52,0.55,0.55,0.55,0.55,0.52,0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.52],
  novice: [0.66,0.66,0.66,0.63,0.63,0.63,0.60,0.60,0.60,0.55,0.55,0.55,0.50,0.535,0.50,0.52,0.52,0.50,0.52,0.52,0.52,0.50,0.52,0.52,0.52,0.50,0.52,0.52,0.52,0.52,0.50,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.52,0.50]
};

function reach(streak, ps) {
  return Array.from({ length: streak }, (_, i) => ps[i] ?? ps.at(-1)).reduce((acc, p) => acc * p, 1);
}

function bonusEv(ps) {
  let ev = 0;
  for (let i = 0; i < tiers.length; i += 1) {
    const tier = tiers[i];
    const next = tiers[i + 1]?.streak ?? 200;
    const awardProbability = reach(tier.streak, ps) - reach(next, ps);
    ev += tier.cost * awardProbability;
  }
  return ev;
}

function money(value) {
  return `$${value.toFixed(4)}`;
}

console.log('Pokemon Prize Ladder quick EV sanity check');
console.log('For full data-aware results, open simulation/25m/report.md.');
console.log(`Entry ${money(ENTRY_FEE)} | Guaranteed cost ${money(GUARANTEED_COST)} | Target bonus EV budget ${money(ENTRY_FEE * (1 - TARGET_MARGIN) - GUARANTEED_COST)}\n`);

for (const [name, ps] of Object.entries(profiles)) {
  const bonus = bonusEv(ps);
  const margin = (ENTRY_FEE - GUARANTEED_COST - bonus) / ENTRY_FEE;
  console.log(`${name.padEnd(12)} bonus EV ${money(bonus).padEnd(10)} margin ${(margin * 100).toFixed(2)}% total player retail EV baseline ${money(GUARANTEED_RETAIL)}`);
  for (const tier of tiers) {
    console.log(`  P(reach ${String(tier.streak).padStart(2)}) ${(reach(tier.streak, ps) * 100).toFixed(4)}% -> ${tier.name}`);
  }
  console.log('');
}

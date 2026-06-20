const ENTRY_FEE = 25;
const GUARANTEED_COST = 16;
const TARGET_MARGIN = 0.30;
const tiers = [
  { streak: 9, name: '1 Ascended Heroes Pack', cost: 17 },
  { streak: 11, name: '1 Mega Evolution Tin', cost: 20 },
  { streak: 13, name: '1 Ascended Heroes Tin', cost: 20 },
  { streak: 15, name: '1 Prismatic Tin', cost: 20 },
  { streak: 22, name: '1 Prismatic ETB', cost: 100 }
];
const profiles = {
  baseline: [0.75,0.75,0.75,0.62,0.62,0.62,0.54,0.54,0.54,0.48,0.48,0.48,0.43,0.43,0.43,0.40,0.40,0.40,0.40,0.40,0.40,0.40],
  strong: [0.80,0.80,0.80,0.70,0.70,0.70,0.60,0.60,0.60,0.55,0.55,0.55,0.50,0.50,0.50,0.48,0.48,0.48,0.48,0.48,0.48,0.48],
  veryStrong: [0.85,0.85,0.85,0.75,0.75,0.75,0.65,0.65,0.65,0.58,0.58,0.58,0.52,0.52,0.52,0.50,0.50,0.50,0.50,0.50,0.50,0.50]
};
function reach(streak, ps) { return Array.from({ length: streak }, (_, i) => ps[i] ?? ps.at(-1)).reduce((a, b) => a * b, 1); }
function ev(ps) { let prev = 0; return tiers.reduce((sum, t) => { const inc = Math.max(0, t.cost - prev); prev = Math.max(prev, t.cost); return sum + inc * reach(t.streak, ps); }, 0); }
function money(n) { return `$${n.toFixed(2)}`; }
console.log('Prize ladder EV simulator');
console.log('Assumption: highest unlocked bonus prize only, not cumulative.');
console.log(`Entry ${money(ENTRY_FEE)} | Guaranteed cost ${money(GUARANTEED_COST)} | Bonus EV budget ${money(ENTRY_FEE * (1 - TARGET_MARGIN) - GUARANTEED_COST)}\n`);
for (const [name, ps] of Object.entries(profiles)) {
  const bonus = ev(ps);
  const margin = (ENTRY_FEE - GUARANTEED_COST - bonus) / ENTRY_FEE;
  console.log(`${name.padEnd(10)} bonus EV ${money(bonus).padEnd(8)} margin ${(margin * 100).toFixed(1)}%`);
  for (const tier of tiers) console.log(`  P(reach ${String(tier.streak).padStart(2)}) ${(reach(tier.streak, ps) * 100).toFixed(3)}% -> ${tier.name}`);
  console.log('');
}

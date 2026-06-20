const ENTRY_FEE = 25;
const GUARANTEED_COST = 16;
const TARGET_MARGIN = 0.30;

const tiers = [
  { streak: 9, name: '1 Ascended Heroes Pack', cost: 17, retail: 25 },
  { streak: 11, name: '1 Mega Evolution Tin', cost: 20, retail: 30 },
  { streak: 13, name: '1 Ascended Heroes Tin', cost: 20, retail: 40 },
  { streak: 15, name: '1 Prismatic Tin', cost: 20, retail: 60 },
  { streak: 22, name: '1 Prismatic ETB', cost: 100, retail: 230 }
];

const profiles = {
  baseline: [0.75, 0.75, 0.75, 0.62, 0.62, 0.62, 0.54, 0.54, 0.54, 0.48, 0.48, 0.48, 0.43, 0.43, 0.43, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40],
  strong: [0.80, 0.80, 0.80, 0.70, 0.70, 0.70, 0.60, 0.60, 0.60, 0.55, 0.55, 0.55, 0.50, 0.50, 0.50, 0.48, 0.48, 0.48, 0.48, 0.48, 0.48, 0.48],
  veryStrong: [0.85, 0.85, 0.85, 0.75, 0.75, 0.75, 0.65, 0.65, 0.65, 0.58, 0.58, 0.58, 0.52, 0.52, 0.52, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50, 0.50]
};

function reachProbability(streak, probabilities) {
  let probability = 1;
  for (let i = 0; i < streak; i += 1) {
    probability *= probabilities[i] ?? probabilities[probabilities.length - 1];
  }
  return probability;
}

// Highest-unlocked prize only. Expected cost = incremental cost of reaching each higher prize tier.
function expectedBonusCost(probabilities) {
  let previousCost = 0;
  return tiers.reduce((sum, tier) => {
    const incrementalCost = Math.max(0, tier.cost - previousCost);
    previousCost = Math.max(previousCost, tier.cost);
    return sum + incrementalCost * reachProbability(tier.streak, probabilities);
  }, 0);
}

function money(value) {
  return `$${value.toFixed(2)}`;
}

console.log('Prize ladder EV simulator');
console.log('Assumption: only the highest unlocked bonus prize is awarded, not cumulative.');
console.log(`Entry: ${money(ENTRY_FEE)} | Guaranteed cost: ${money(GUARANTEED_COST)} | Target margin: ${(TARGET_MARGIN * 100).toFixed(0)}%`);
console.log(`Bonus EV budget: ${money(ENTRY_FEE * (1 - TARGET_MARGIN) - GUARANTEED_COST)}\n`);

for (const [name, probabilities] of Object.entries(profiles)) {
  const bonusEv = expectedBonusCost(probabilities);
  const totalCost = GUARANTEED_COST + bonusEv;
  const profit = ENTRY_FEE - totalCost;
  const margin = profit / ENTRY_FEE;
  console.log(`${name.padEnd(10)} bonus EV ${money(bonusEv).padEnd(8)} total cost ${money(totalCost).padEnd(8)} margin ${(margin * 100).toFixed(1)}%`);
  for (const tier of tiers) {
    console.log(`  P(reach ${String(tier.streak).padStart(2)}): ${(reachProbability(tier.streak, probabilities) * 100).toFixed(3)}% -> ${tier.name}`);
  }
  console.log('');
}

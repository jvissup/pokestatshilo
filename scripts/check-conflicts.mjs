import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const skipDirs = new Set(['.git', '.next', 'node_modules', 'public/images/pokemon']);
const textFileExtensions = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.md', '.css', '.csv', '.txt', '.yml', '.yaml'
]);
const leftMarker = '<'.repeat(7);
const middleMarker = '='.repeat(7);
const rightMarker = '>'.repeat(7);
const markers = [leftMarker, middleMarker, rightMarker];
const offenders = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!skipDirs.has(entry.name)) walk(path.join(dir, entry.name));
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(root, fullPath);
    if (!textFileExtensions.has(path.extname(entry.name))) continue;

    const content = readFileSync(fullPath, 'utf8');
    if (markers.some((marker) => content.includes(marker))) offenders.push(relPath);
  }
}

walk(root);

if (offenders.length) {
  console.error('Merge conflict markers were found. Resolve these files before deploying:');
  for (const file of offenders) console.error(`- ${file}`);
  process.exit(1);
}

console.log('No merge conflict markers found.');

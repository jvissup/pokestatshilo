import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const args = new Set(process.argv.slice(2));
const WRITE_MAIN = args.has('--write-main');
const DOWNLOAD_IMAGES = args.has('--download-images') || process.env.DOWNLOAD_IMAGES === 'true';
const OUTPUT = WRITE_MAIN ? 'src/lib/game/data.ts' : 'src/lib/game/data.generated.ts';
const CSV_DIR = 'data/csv';
const WORKBOOK_CSV = 'pokestats-workbook.csv';
const IMAGE_DIR = 'public/images/pokemon';

const SPECIAL_DISPLAY_NAMES_BY_ID = new Map([
  [29, 'Nidoran♀'],
  [32, 'Nidoran♂'],
  [250, 'Ho-Oh'],
  [669, 'Flabébé']
]);

const SPECIAL_POKEMON_COM_SLUGS_BY_ID = new Map([
  [29, 'nidoran-female'],
  [32, 'nidoran-male'],
  [83, 'farfetchd'],
  [122, 'mr-mime'],
  [439, 'mime-jr'],
  [669, 'flabebe'],
  [772, 'type-null'],
  [865, 'sirfetchd'],
  [866, 'mr-rime']
]);

const padDex = (id) => String(id).padStart(3, '0');
const pokemonComUrl = (slug) => `https://www.pokemon.com/us/pokedex/${slug}`;
const pokemonDetailImageUrl = (id) => `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${padDex(id)}.png`;
const pokemonLegacyImageUrl = (id) => `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padDex(id)}.png`;

function decodeCsv(buffer) {
  const utf8 = buffer.toString('utf8');
  const replacementCharacters = (utf8.match(/\uFFFD/g) ?? []).length;
  return replacementCharacters > 0 ? buffer.toString('latin1') : utf8;
}

function detectDelimiter(headerLine) {
  return headerLine.includes('\t') ? '\t' : ',';
}

function parseDelimited(text) {
  const firstLine = text.split(/\r?\n/, 1)[0] ?? '';
  const delimiter = detectDelimiter(firstLine);
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === delimiter && !inQuotes) {
      row.push(field.trim());
      field = '';
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && next === '\n') i += 1;
      row.push(field.trim());
      if (row.some((value) => value.length > 0)) rows.push(row);
      row = [];
      field = '';
    } else {
      field += char;
    }
  }

  row.push(field.trim());
  if (row.some((value) => value.length > 0)) rows.push(row);
  const [header, ...body] = rows;
  if (!header) return [];
  return body.map((values) => Object.fromEntries(header.map((key, index) => [key.trim(), values[index] ?? ''])));
}

async function readWorkbookCsv() {
  const buffer = await readFile(path.join(CSV_DIR, WORKBOOK_CSV));
  return parseDelimited(decodeCsv(buffer));
}

function numberFromRow(row) {
  return Number(String(row.Number ?? row.number ?? row.id ?? '').replace(/^0+/, '') || '0');
}

function requiredStat(row, key) {
  const raw = row[key];
  const value = Number(raw);
  if (!Number.isFinite(value)) throw new Error(`Invalid ${key} value for Pokemon ${row.Number}: ${raw}`);
  return value;
}

function normalizeDisplayName(id, name) {
  return SPECIAL_DISPLAY_NAMES_BY_ID.get(id) ?? name;
}

function slugifyPokemonName(id, name) {
  const special = SPECIAL_POKEMON_COM_SLUGS_BY_ID.get(id);
  if (special) return special;
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[.:]/g, '')
    .replace(/♀/g, '-female')
    .replace(/♂/g, '-male')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function downloadImage(url, id) {
  await mkdir(IMAGE_DIR, { recursive: true });
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Image fetch failed ${response.status}: ${url}`);
  const relative = `/images/pokemon/${padDex(id)}.png`;
  await writeFile(path.join(IMAGE_DIR, `${padDex(id)}.png`), Buffer.from(await response.arrayBuffer()));
  return relative;
}

const workbookRows = await readWorkbookCsv();
const pokemon = [];
const seenIds = new Set();

for (const row of workbookRows) {
  const id = numberFromRow(row);
  if (!id || seenIds.has(id)) continue;
  seenIds.add(id);

  const name = normalizeDisplayName(id, row.Name ?? row.name ?? `Pokemon ${id}`);
  const stats = {
    hp: requiredStat(row, 'HP'),
    attack: requiredStat(row, 'Attack'),
    defense: requiredStat(row, 'Defense'),
    spAttack: requiredStat(row, 'Sp.Attack'),
    spDefense: requiredStat(row, 'Sp.Defense'),
    speed: requiredStat(row, 'Speed')
  };
  const slug = slugifyPokemonName(id, name);
  const remoteImageUrl = pokemonDetailImageUrl(id);
  const imageUrl = DOWNLOAD_IMAGES ? await downloadImage(remoteImageUrl, id) : remoteImageUrl;
  pokemon.push({
    id,
    slug,
    name,
    types: [],
    imageUrl,
    fallbackImageUrl: pokemonLegacyImageUrl(id),
    pokemonComUrl: pokemonComUrl(slug),
    stats: {
      total: stats.hp + stats.attack + stats.defense + stats.spAttack + stats.spDefense + stats.speed,
      ...stats
    }
  });
}

pokemon.sort((a, b) => a.id - b.id);

const file = `import type { Pokemon, QuestionPokemon } from './types';\n\nexport const padDex = (id: number) => String(id).padStart(3, '0');\nexport const pokemonComUrl = (slug: string) => \`https://www.pokemon.com/us/pokedex/\${slug}\`;\nexport const pokemonDetailImageUrl = (id: number) => \`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/\${padDex(id)}.png\`;\nexport const pokemonFullImageUrl = (id: number) => \`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/\${padDex(id)}.png\`;\nexport const pokemonLegacyImageUrl = (id: number) => \`https://assets.pokemon.com/assets/cms2/img/pokedex/full/\${padDex(id)}.png\`;\n\nexport function toQuestionPokemon(pokemon: Pokemon): QuestionPokemon {\n  return {\n    ...pokemon,\n    imageUrl: pokemon.imageUrl ?? pokemonDetailImageUrl(pokemon.id),\n    fallbackImageUrl: pokemon.fallbackImageUrl ?? pokemonLegacyImageUrl(pokemon.id),\n    pokemonComUrl: pokemon.pokemonComUrl ?? pokemonComUrl(pokemon.slug)\n  };\n}\n\n// Generated from data/csv/pokestats-workbook.csv. Run \`npm run seed:pokemon\` after replacing the CSV file.\nexport const POKEMON: Pokemon[] = ${JSON.stringify(pokemon, null, 2)};\n`;

await writeFile(OUTPUT, file);
console.log(`Wrote ${pokemon.length} Pokemon from ${WORKBOOK_CSV} to ${OUTPUT}`);
if (DOWNLOAD_IMAGES) console.log(`Downloaded image files to ${IMAGE_DIR}`);

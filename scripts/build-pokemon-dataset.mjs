import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const args = new Set(process.argv.slice(2));
const LIMIT = Number(process.env.POKEMON_LIMIT ?? [...args].find((a) => a.startsWith('--limit='))?.split('=')[1] ?? 1025);
const DOWNLOAD_IMAGES = args.has('--download-images') || process.env.DOWNLOAD_IMAGES === 'true';
const WRITE_MAIN = args.has('--write-main');
const OUTPUT = WRITE_MAIN ? 'src/lib/game/data.ts' : 'src/lib/game/data.generated.ts';
const IMAGE_DIR = 'public/images/pokemon';
const POKEMON_COM_API = 'https://www.pokemon.com/us/api/pokedex';
const POKEAPI_LIST = `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=0`;

const SPECIAL_SLUGS = new Map([
  ['nidoran-f', 'nidoran-female'], ['nidoran-m', 'nidoran-male'], ['farfetchd', 'farfetchd'],
  ['mr-mime', 'mr-mime'], ['mime-jr', 'mime-jr'], ['type-null', 'type-null'],
  ['jangmo-o', 'jangmo-o'], ['hakamo-o', 'hakamo-o'], ['kommo-o', 'kommo-o'],
  ['sirfetchd', 'sirfetchd'], ['mr-rime', 'mr-rime']
]);

const padDex = (id) => String(id).padStart(3, '0');
const pokemonComUrl = (slug) => `https://www.pokemon.com/us/pokedex/${slug}`;
const computedDetail = (id) => `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${padDex(id)}.png`;
const computedFull = (id) => `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${padDex(id)}.png`;
const legacyFull = (id) => `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padDex(id)}.png`;

function titleCase(slug) {
  return slug.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
    .replace('Nidoran F', 'Nidoran Female')
    .replace('Nidoran M', 'Nidoran Male')
    .replace('Mr Mime', 'Mr. Mime')
    .replace('Mime Jr', 'Mime Jr.')
    .replace('Mr Rime', 'Mr. Rime')
    .replace('Farfetchd', "Farfetch'd")
    .replace('Sirfetchd', "Sirfetch'd");
}

function pokemonComSlug(name) { return SPECIAL_SLUGS.get(name) ?? name; }

function statMap(stats) {
  const byName = Object.fromEntries(stats.map((row) => [row.stat.name, row.base_stat]));
  const hp = byName.hp;
  const attack = byName.attack;
  const defense = byName.defense;
  const spAttack = byName['special-attack'];
  const spDefense = byName['special-defense'];
  const speed = byName.speed;
  return { total: hp + attack + defense + spAttack + spDefense + speed, hp, attack, defense, spAttack, spDefense, speed };
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Fetch failed ${response.status}: ${url}`);
  return response.json();
}

function buildPokemonComMap(rows) {
  const map = new Map();
  for (const row of rows) {
    const id = Number(row.id ?? row.number);
    if (!Number.isFinite(id) || map.has(id)) continue;
    map.set(id, {
      slug: row.slug,
      name: row.name,
      types: Array.isArray(row.type) ? row.type.map(titleCase) : undefined,
      imageUrl: row.ThumbnailImage,
      fallbackImageUrl: row.ThumbnailImage?.replace('/detail/', '/full/') ?? computedFull(id),
      pokemonComUrl: row.detailPageURL ? new URL(row.detailPageURL, 'https://www.pokemon.com').toString() : pokemonComUrl(row.slug)
    });
  }
  return map;
}

async function downloadImage(url, id) {
  await mkdir(IMAGE_DIR, { recursive: true });
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Image fetch failed ${response.status}: ${url}`);
  const ext = url.includes('.webp') ? 'webp' : 'png';
  const relative = `/images/pokemon/${padDex(id)}.${ext}`;
  await writeFile(path.join(IMAGE_DIR, `${padDex(id)}.${ext}`), Buffer.from(await response.arrayBuffer()));
  return relative;
}

console.log(`Fetching Pokemon.com Pokédex image metadata from ${POKEMON_COM_API}`);
const pokemonComRows = await fetchJson(POKEMON_COM_API);
const pokemonCom = buildPokemonComMap(pokemonComRows);

console.log(`Fetching PokéAPI stats list from ${POKEAPI_LIST}`);
const list = await fetchJson(POKEAPI_LIST);
const pokemon = [];

for (let i = 0; i < list.results.length; i += 1) {
  const item = list.results[i];
  const detail = await fetchJson(item.url);
  if (!detail.is_default) continue;

  const id = detail.id;
  const com = pokemonCom.get(id);
  const slug = com?.slug ?? pokemonComSlug(detail.name);
  const remoteImage = com?.imageUrl ?? computedDetail(id);
  const fallbackImage = com?.fallbackImageUrl ?? legacyFull(id);
  const localImage = DOWNLOAD_IMAGES ? await downloadImage(remoteImage, id) : null;

  pokemon.push({
    id,
    slug,
    name: com?.name ?? titleCase(detail.name),
    types: com?.types ?? detail.types.map((slot) => titleCase(slot.type.name)),
    imageUrl: localImage ?? remoteImage,
    fallbackImageUrl: fallbackImage,
    pokemonComUrl: com?.pokemonComUrl ?? pokemonComUrl(slug),
    stats: statMap(detail.stats)
  });

  if ((i + 1) % 50 === 0) console.log(`Processed ${i + 1}/${list.results.length}`);
}

pokemon.sort((a, b) => a.id - b.id);

const file = `import type { Pokemon, QuestionPokemon } from './types';\n\nexport const padDex = (id: number) => String(id).padStart(3, '0');\nexport const pokemonComUrl = (slug: string) => \`https://www.pokemon.com/us/pokedex/\${slug}\`;\nexport const pokemonDetailImageUrl = (id: number) => \`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/\${padDex(id)}.png\`;\nexport const pokemonFullImageUrl = (id: number) => \`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/\${padDex(id)}.png\`;\nexport const pokemonLegacyImageUrl = (id: number) => \`https://assets.pokemon.com/assets/cms2/img/pokedex/full/\${padDex(id)}.png\`;\n\nexport function toQuestionPokemon(pokemon: Pokemon): QuestionPokemon {\n  return {\n    ...pokemon,\n    imageUrl: pokemon.imageUrl ?? pokemonDetailImageUrl(pokemon.id),\n    fallbackImageUrl: pokemon.fallbackImageUrl ?? pokemonLegacyImageUrl(pokemon.id),\n    pokemonComUrl: pokemon.pokemonComUrl ?? pokemonComUrl(pokemon.slug)\n  };\n}\n\nexport const POKEMON: Pokemon[] = ${JSON.stringify(pokemon, null, 2)};\n`;

await writeFile(OUTPUT, file);
console.log(`Wrote ${pokemon.length} Pokemon to ${OUTPUT}`);
if (DOWNLOAD_IMAGES) console.log(`Downloaded image files to ${IMAGE_DIR}`);

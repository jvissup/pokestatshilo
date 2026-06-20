import { writeFile } from 'node:fs/promises';

const LIMIT = Number(process.env.POKEMON_LIMIT ?? 1025);
const OUTPUT = 'src/lib/game/data.generated.ts';

const SPECIAL_SLUGS = new Map([
  ['nidoran-f', 'nidoran-female'],
  ['nidoran-m', 'nidoran-male'],
  ['farfetchd', 'farfetchd'],
  ['mr-mime', 'mr-mime'],
  ['mime-jr', 'mime-jr'],
  ['type-null', 'type-null'],
  ['jangmo-o', 'jangmo-o'],
  ['hakamo-o', 'hakamo-o'],
  ['kommo-o', 'kommo-o'],
  ['tapu-koko', 'tapu-koko'],
  ['tapu-lele', 'tapu-lele'],
  ['tapu-bulu', 'tapu-bulu'],
  ['tapu-fini', 'tapu-fini'],
  ['sirfetchd', 'sirfetchd'],
  ['mr-rime', 'mr-rime']
]);

function titleCase(slug) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
    .replace('Nidoran F', 'Nidoran Female')
    .replace('Nidoran M', 'Nidoran Male')
    .replace('Mr Mime', 'Mr. Mime')
    .replace('Mime Jr', 'Mime Jr.')
    .replace('Mr Rime', 'Mr. Rime')
    .replace('Farfetchd', "Farfetch'd")
    .replace('Sirfetchd', "Sirfetch'd");
}

function pokemonComSlug(name) {
  return SPECIAL_SLUGS.get(name) ?? name;
}

function statMap(stats) {
  const byName = Object.fromEntries(stats.map((row) => [row.stat.name, row.base_stat]));
  return {
    hp: byName.hp,
    attack: byName.attack,
    defense: byName.defense,
    spAttack: byName['special-attack'],
    spDefense: byName['special-defense'],
    speed: byName.speed,
    total: byName.hp + byName.attack + byName.defense + byName['special-attack'] + byName['special-defense'] + byName.speed
  };
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Fetch failed: ${response.status} ${url}`);
  return response.json();
}

const list = await fetchJson(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=0`);
const pokemon = [];
for (let i = 0; i < list.results.length; i += 1) {
  const item = list.results[i];
  const detail = await fetchJson(item.url);
  if (!detail.is_default) continue;
  pokemon.push({
    id: detail.id,
    slug: pokemonComSlug(detail.name),
    name: titleCase(detail.name),
    types: detail.types.map((slot) => titleCase(slot.type.name)),
    stats: statMap(detail.stats)
  });
  if ((i + 1) % 50 === 0) console.log(`Fetched ${i + 1}/${list.results.length}`);
}

pokemon.sort((a, b) => a.id - b.id);

const file = `import type { Pokemon, QuestionPokemon } from './types';\n\nexport function padDex(id: number): string {\n  return String(id).padStart(3, '0');\n}\n\nexport function pokemonImageUrl(id: number): string {\n  return \`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/\${padDex(id)}.png\`;\n}\n\nexport function legacyPokemonImageUrl(id: number): string {\n  return \`https://assets.pokemon.com/assets/cms2/img/pokedex/full/\${padDex(id)}.png\`;\n}\n\nexport function pokemonComUrl(slug: string): string {\n  return \`https://www.pokemon.com/us/pokedex/\${slug}\`;\n}\n\nexport function toQuestionPokemon(pokemon: Pokemon): QuestionPokemon {\n  return {\n    ...pokemon,\n    imageUrl: pokemonImageUrl(pokemon.id),\n    fallbackImageUrl: legacyPokemonImageUrl(pokemon.id),\n    pokemonComUrl: pokemonComUrl(pokemon.slug)\n  };\n}\n\nexport const POKEMON: Pokemon[] = ${JSON.stringify(pokemon, null, 2)};\n`;

await writeFile(OUTPUT, file);
console.log(`Wrote ${pokemon.length} Pokemon to ${OUTPUT}`);
console.log('To use it, replace the import in src/lib/game/questions.ts from ./data to ./data.generated or rename the file to data.ts.');

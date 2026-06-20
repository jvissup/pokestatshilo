import type { Pokemon, QuestionPokemon } from './types';

export const padDex = (id: number) => String(id).padStart(3, '0');
export const pokemonComUrl = (slug: string) => `https://www.pokemon.com/us/pokedex/${slug}`;
export const pokemonDetailImageUrl = (id: number) => `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${padDex(id)}.png`;
export const pokemonFullImageUrl = (id: number) => `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${padDex(id)}.png`;
export const pokemonLegacyImageUrl = (id: number) => `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padDex(id)}.png`;

export function toQuestionPokemon(pokemon: Pokemon): QuestionPokemon {
  return {
    ...pokemon,
    imageUrl: pokemon.imageUrl ?? pokemonDetailImageUrl(pokemon.id),
    fallbackImageUrl: pokemon.fallbackImageUrl ?? pokemonLegacyImageUrl(pokemon.id),
    pokemonComUrl: pokemon.pokemonComUrl ?? pokemonComUrl(pokemon.slug)
  };
}

// Demo seed. Run `npm run seed:pokemon` for a full generated dataset and `npm run images:pokemon` to also download image files to /public/images/pokemon.
export const POKEMON: Pokemon[] = [
  { id: 1, slug: 'bulbasaur', name: 'Bulbasaur', types: ['Grass','Poison'], stats: { total: 318, hp: 45, attack: 49, defense: 49, spAttack: 65, spDefense: 65, speed: 45 } },
  { id: 2, slug: 'ivysaur', name: 'Ivysaur', types: ['Grass','Poison'], stats: { total: 405, hp: 60, attack: 62, defense: 63, spAttack: 80, spDefense: 80, speed: 60 } },
  { id: 3, slug: 'venusaur', name: 'Venusaur', types: ['Grass','Poison'], stats: { total: 525, hp: 80, attack: 82, defense: 83, spAttack: 100, spDefense: 100, speed: 80 } },
  { id: 4, slug: 'charmander', name: 'Charmander', types: ['Fire'], stats: { total: 309, hp: 39, attack: 52, defense: 43, spAttack: 60, spDefense: 50, speed: 65 } },
  { id: 5, slug: 'charmeleon', name: 'Charmeleon', types: ['Fire'], stats: { total: 405, hp: 58, attack: 64, defense: 58, spAttack: 80, spDefense: 65, speed: 80 } },
  { id: 6, slug: 'charizard', name: 'Charizard', types: ['Fire','Flying'], stats: { total: 534, hp: 78, attack: 84, defense: 78, spAttack: 109, spDefense: 85, speed: 100 } },
  { id: 7, slug: 'squirtle', name: 'Squirtle', types: ['Water'], stats: { total: 314, hp: 44, attack: 48, defense: 65, spAttack: 50, spDefense: 64, speed: 43 } },
  { id: 8, slug: 'wartortle', name: 'Wartortle', types: ['Water'], stats: { total: 405, hp: 59, attack: 63, defense: 80, spAttack: 65, spDefense: 80, speed: 58 } },
  { id: 9, slug: 'blastoise', name: 'Blastoise', types: ['Water'], stats: { total: 530, hp: 79, attack: 83, defense: 100, spAttack: 85, spDefense: 105, speed: 78 } },
  { id: 10, slug: 'caterpie', name: 'Caterpie', types: ['Bug'], stats: { total: 195, hp: 45, attack: 30, defense: 35, spAttack: 20, spDefense: 20, speed: 45 } },
  { id: 11, slug: 'metapod', name: 'Metapod', types: ['Bug'], stats: { total: 205, hp: 50, attack: 20, defense: 55, spAttack: 25, spDefense: 25, speed: 30 } },
  { id: 12, slug: 'butterfree', name: 'Butterfree', types: ['Bug','Flying'], stats: { total: 395, hp: 60, attack: 45, defense: 50, spAttack: 90, spDefense: 80, speed: 70 } },
  { id: 13, slug: 'weedle', name: 'Weedle', types: ['Bug','Poison'], stats: { total: 195, hp: 40, attack: 35, defense: 30, spAttack: 20, spDefense: 20, speed: 50 } },
  { id: 14, slug: 'kakuna', name: 'Kakuna', types: ['Bug','Poison'], stats: { total: 205, hp: 45, attack: 25, defense: 50, spAttack: 25, spDefense: 25, speed: 35 } },
  { id: 15, slug: 'beedrill', name: 'Beedrill', types: ['Bug','Poison'], stats: { total: 395, hp: 65, attack: 90, defense: 40, spAttack: 45, spDefense: 80, speed: 75 } },
  { id: 16, slug: 'pidgey', name: 'Pidgey', types: ['Normal','Flying'], stats: { total: 251, hp: 40, attack: 45, defense: 40, spAttack: 35, spDefense: 35, speed: 56 } },
  { id: 17, slug: 'pidgeotto', name: 'Pidgeotto', types: ['Normal','Flying'], stats: { total: 349, hp: 63, attack: 60, defense: 55, spAttack: 50, spDefense: 50, speed: 71 } },
  { id: 18, slug: 'pidgeot', name: 'Pidgeot', types: ['Normal','Flying'], stats: { total: 479, hp: 83, attack: 80, defense: 75, spAttack: 70, spDefense: 70, speed: 101 } },
  { id: 19, slug: 'rattata', name: 'Rattata', types: ['Normal'], stats: { total: 253, hp: 30, attack: 56, defense: 35, spAttack: 25, spDefense: 35, speed: 72 } },
  { id: 20, slug: 'raticate', name: 'Raticate', types: ['Normal'], stats: { total: 413, hp: 55, attack: 81, defense: 60, spAttack: 50, spDefense: 70, speed: 97 } },
  { id: 21, slug: 'spearow', name: 'Spearow', types: ['Normal','Flying'], stats: { total: 262, hp: 40, attack: 60, defense: 30, spAttack: 31, spDefense: 31, speed: 70 } },
  { id: 22, slug: 'fearow', name: 'Fearow', types: ['Normal','Flying'], stats: { total: 442, hp: 65, attack: 90, defense: 65, spAttack: 61, spDefense: 61, speed: 100 } },
  { id: 23, slug: 'ekans', name: 'Ekans', types: ['Poison'], stats: { total: 288, hp: 35, attack: 60, defense: 44, spAttack: 40, spDefense: 54, speed: 55 } },
  { id: 24, slug: 'arbok', name: 'Arbok', types: ['Poison'], stats: { total: 448, hp: 60, attack: 95, defense: 69, spAttack: 65, spDefense: 79, speed: 80 } },
  { id: 25, slug: 'pikachu', name: 'Pikachu', types: ['Electric'], stats: { total: 320, hp: 35, attack: 55, defense: 40, spAttack: 50, spDefense: 50, speed: 90 } },
  { id: 26, slug: 'raichu', name: 'Raichu', types: ['Electric'], stats: { total: 485, hp: 60, attack: 90, defense: 55, spAttack: 90, spDefense: 80, speed: 110 } },
  { id: 27, slug: 'sandshrew', name: 'Sandshrew', types: ['Ground'], stats: { total: 300, hp: 50, attack: 75, defense: 85, spAttack: 20, spDefense: 30, speed: 40 } },
  { id: 28, slug: 'sandslash', name: 'Sandslash', types: ['Ground'], stats: { total: 450, hp: 75, attack: 100, defense: 110, spAttack: 45, spDefense: 55, speed: 65 } },
  { id: 29, slug: 'nidoran-female', name: 'Nidoran Female', types: ['Poison'], stats: { total: 275, hp: 55, attack: 47, defense: 52, spAttack: 40, spDefense: 40, speed: 41 } },
  { id: 30, slug: 'nidorina', name: 'Nidorina', types: ['Poison'], stats: { total: 365, hp: 70, attack: 62, defense: 67, spAttack: 55, spDefense: 55, speed: 56 } },
  { id: 31, slug: 'nidoqueen', name: 'Nidoqueen', types: ['Poison','Ground'], stats: { total: 505, hp: 90, attack: 92, defense: 87, spAttack: 75, spDefense: 85, speed: 76 } },
  { id: 32, slug: 'nidoran-male', name: 'Nidoran Male', types: ['Poison'], stats: { total: 273, hp: 46, attack: 57, defense: 40, spAttack: 40, spDefense: 40, speed: 50 } },
  { id: 33, slug: 'nidorino', name: 'Nidorino', types: ['Poison'], stats: { total: 365, hp: 61, attack: 72, defense: 57, spAttack: 55, spDefense: 55, speed: 65 } },
  { id: 34, slug: 'nidoking', name: 'Nidoking', types: ['Poison','Ground'], stats: { total: 505, hp: 81, attack: 102, defense: 77, spAttack: 85, spDefense: 75, speed: 85 } },
  { id: 35, slug: 'clefairy', name: 'Clefairy', types: ['Fairy'], stats: { total: 323, hp: 70, attack: 45, defense: 48, spAttack: 60, spDefense: 65, speed: 35 } },
  { id: 36, slug: 'clefable', name: 'Clefable', types: ['Fairy'], stats: { total: 483, hp: 95, attack: 70, defense: 73, spAttack: 95, spDefense: 90, speed: 60 } },
  { id: 37, slug: 'vulpix', name: 'Vulpix', types: ['Fire'], stats: { total: 299, hp: 38, attack: 41, defense: 40, spAttack: 50, spDefense: 65, speed: 65 } },
  { id: 38, slug: 'ninetales', name: 'Ninetales', types: ['Fire'], stats: { total: 505, hp: 73, attack: 76, defense: 75, spAttack: 81, spDefense: 100, speed: 100 } },
  { id: 39, slug: 'jigglypuff', name: 'Jigglypuff', types: ['Normal','Fairy'], stats: { total: 270, hp: 115, attack: 45, defense: 20, spAttack: 45, spDefense: 25, speed: 20 } },
  { id: 40, slug: 'wigglytuff', name: 'Wigglytuff', types: ['Normal','Fairy'], stats: { total: 435, hp: 140, attack: 70, defense: 45, spAttack: 85, spDefense: 50, speed: 45 } },
  { id: 41, slug: 'zubat', name: 'Zubat', types: ['Poison','Flying'], stats: { total: 245, hp: 40, attack: 45, defense: 35, spAttack: 30, spDefense: 40, speed: 55 } },
  { id: 42, slug: 'golbat', name: 'Golbat', types: ['Poison','Flying'], stats: { total: 455, hp: 75, attack: 80, defense: 70, spAttack: 65, spDefense: 75, speed: 90 } },
  { id: 43, slug: 'oddish', name: 'Oddish', types: ['Grass','Poison'], stats: { total: 320, hp: 45, attack: 50, defense: 55, spAttack: 75, spDefense: 65, speed: 30 } },
  { id: 44, slug: 'gloom', name: 'Gloom', types: ['Grass','Poison'], stats: { total: 395, hp: 60, attack: 65, defense: 70, spAttack: 85, spDefense: 75, speed: 40 } },
  { id: 45, slug: 'vileplume', name: 'Vileplume', types: ['Grass','Poison'], stats: { total: 490, hp: 75, attack: 80, defense: 85, spAttack: 110, spDefense: 90, speed: 50 } },
  { id: 46, slug: 'paras', name: 'Paras', types: ['Bug','Grass'], stats: { total: 285, hp: 35, attack: 70, defense: 55, spAttack: 45, spDefense: 55, speed: 25 } },
  { id: 47, slug: 'parasect', name: 'Parasect', types: ['Bug','Grass'], stats: { total: 405, hp: 60, attack: 95, defense: 80, spAttack: 60, spDefense: 80, speed: 30 } },
  { id: 48, slug: 'venonat', name: 'Venonat', types: ['Bug','Poison'], stats: { total: 305, hp: 60, attack: 55, defense: 50, spAttack: 40, spDefense: 55, speed: 45 } },
  { id: 49, slug: 'venomoth', name: 'Venomoth', types: ['Bug','Poison'], stats: { total: 450, hp: 70, attack: 65, defense: 60, spAttack: 90, spDefense: 75, speed: 90 } },
  { id: 50, slug: 'diglett', name: 'Diglett', types: ['Ground'], stats: { total: 265, hp: 10, attack: 55, defense: 25, spAttack: 35, spDefense: 45, speed: 95 } },
  { id: 51, slug: 'dugtrio', name: 'Dugtrio', types: ['Ground'], stats: { total: 425, hp: 35, attack: 100, defense: 50, spAttack: 50, spDefense: 70, speed: 120 } },
  { id: 52, slug: 'meowth', name: 'Meowth', types: ['Normal'], stats: { total: 290, hp: 40, attack: 45, defense: 35, spAttack: 40, spDefense: 40, speed: 90 } },
  { id: 53, slug: 'persian', name: 'Persian', types: ['Normal'], stats: { total: 440, hp: 65, attack: 70, defense: 60, spAttack: 65, spDefense: 65, speed: 115 } },
  { id: 54, slug: 'psyduck', name: 'Psyduck', types: ['Water'], stats: { total: 320, hp: 50, attack: 52, defense: 48, spAttack: 65, spDefense: 50, speed: 55 } },
  { id: 55, slug: 'golduck', name: 'Golduck', types: ['Water'], stats: { total: 500, hp: 80, attack: 82, defense: 78, spAttack: 95, spDefense: 80, speed: 85 } },
  { id: 56, slug: 'mankey', name: 'Mankey', types: ['Fighting'], stats: { total: 305, hp: 40, attack: 80, defense: 35, spAttack: 35, spDefense: 45, speed: 70 } },
  { id: 57, slug: 'primeape', name: 'Primeape', types: ['Fighting'], stats: { total: 455, hp: 65, attack: 105, defense: 60, spAttack: 60, spDefense: 70, speed: 95 } },
  { id: 58, slug: 'growlithe', name: 'Growlithe', types: ['Fire'], stats: { total: 350, hp: 55, attack: 70, defense: 45, spAttack: 70, spDefense: 50, speed: 60 } },
  { id: 59, slug: 'arcanine', name: 'Arcanine', types: ['Fire'], stats: { total: 555, hp: 90, attack: 110, defense: 80, spAttack: 100, spDefense: 80, speed: 95 } },
  { id: 60, slug: 'poliwag', name: 'Poliwag', types: ['Water'], stats: { total: 300, hp: 40, attack: 50, defense: 40, spAttack: 40, spDefense: 40, speed: 90 } }
];

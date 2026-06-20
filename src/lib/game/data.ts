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

// Generated from data/csv/pokestats-workbook.csv. Run `npm run seed:pokemon` after replacing the CSV file.
export const POKEMON: Pokemon[] = [
  {
    "id": 1,
    "slug": "bulbasaur",
    "name": "Bulbasaur",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bulbasaur",
    "stats": {
      "total": 318,
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "spAttack": 65,
      "spDefense": 65,
      "speed": 45
    }
  },
  {
    "id": 2,
    "slug": "ivysaur",
    "name": "Ivysaur",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/002.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ivysaur",
    "stats": {
      "total": 405,
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "spAttack": 80,
      "spDefense": 80,
      "speed": 60
    }
  },
  {
    "id": 3,
    "slug": "venusaur",
    "name": "Venusaur",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/003.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/venusaur",
    "stats": {
      "total": 525,
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "spAttack": 100,
      "spDefense": 100,
      "speed": 80
    }
  },
  {
    "id": 4,
    "slug": "charmander",
    "name": "Charmander",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/charmander",
    "stats": {
      "total": 309,
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "spAttack": 60,
      "spDefense": 50,
      "speed": 65
    }
  },
  {
    "id": 5,
    "slug": "charmeleon",
    "name": "Charmeleon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/005.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/charmeleon",
    "stats": {
      "total": 405,
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "spAttack": 80,
      "spDefense": 65,
      "speed": 80
    }
  },
  {
    "id": 6,
    "slug": "charizard",
    "name": "Charizard",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/006.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/charizard",
    "stats": {
      "total": 534,
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "spAttack": 109,
      "spDefense": 85,
      "speed": 100
    }
  },
  {
    "id": 7,
    "slug": "squirtle",
    "name": "Squirtle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/007.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/squirtle",
    "stats": {
      "total": 314,
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "spAttack": 50,
      "spDefense": 64,
      "speed": 43
    }
  },
  {
    "id": 8,
    "slug": "wartortle",
    "name": "Wartortle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/008.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wartortle",
    "stats": {
      "total": 405,
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "spAttack": 65,
      "spDefense": 80,
      "speed": 58
    }
  },
  {
    "id": 9,
    "slug": "blastoise",
    "name": "Blastoise",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/009.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/blastoise",
    "stats": {
      "total": 530,
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "spAttack": 85,
      "spDefense": 105,
      "speed": 78
    }
  },
  {
    "id": 10,
    "slug": "caterpie",
    "name": "Caterpie",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/010.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/caterpie",
    "stats": {
      "total": 195,
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "spAttack": 20,
      "spDefense": 20,
      "speed": 45
    }
  },
  {
    "id": 11,
    "slug": "metapod",
    "name": "Metapod",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/011.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/metapod",
    "stats": {
      "total": 205,
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "spAttack": 25,
      "spDefense": 25,
      "speed": 30
    }
  },
  {
    "id": 12,
    "slug": "butterfree",
    "name": "Butterfree",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/012.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/butterfree",
    "stats": {
      "total": 395,
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "spAttack": 90,
      "spDefense": 80,
      "speed": 70
    }
  },
  {
    "id": 13,
    "slug": "weedle",
    "name": "Weedle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/013.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/weedle",
    "stats": {
      "total": 195,
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "spAttack": 20,
      "spDefense": 20,
      "speed": 50
    }
  },
  {
    "id": 14,
    "slug": "kakuna",
    "name": "Kakuna",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/014.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kakuna",
    "stats": {
      "total": 205,
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "spAttack": 25,
      "spDefense": 25,
      "speed": 35
    }
  },
  {
    "id": 15,
    "slug": "beedrill",
    "name": "Beedrill",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/015.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/beedrill",
    "stats": {
      "total": 395,
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "spAttack": 45,
      "spDefense": 80,
      "speed": 75
    }
  },
  {
    "id": 16,
    "slug": "pidgey",
    "name": "Pidgey",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/016.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pidgey",
    "stats": {
      "total": 251,
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 56
    }
  },
  {
    "id": 17,
    "slug": "pidgeotto",
    "name": "Pidgeotto",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/017.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pidgeotto",
    "stats": {
      "total": 349,
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 71
    }
  },
  {
    "id": 18,
    "slug": "pidgeot",
    "name": "Pidgeot",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/018.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pidgeot",
    "stats": {
      "total": 479,
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "spAttack": 70,
      "spDefense": 70,
      "speed": 101
    }
  },
  {
    "id": 19,
    "slug": "rattata",
    "name": "Rattata",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/019.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rattata",
    "stats": {
      "total": 253,
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "spAttack": 25,
      "spDefense": 35,
      "speed": 72
    }
  },
  {
    "id": 20,
    "slug": "raticate",
    "name": "Raticate",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/020.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/raticate",
    "stats": {
      "total": 413,
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "spAttack": 50,
      "spDefense": 70,
      "speed": 97
    }
  },
  {
    "id": 21,
    "slug": "spearow",
    "name": "Spearow",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/021.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/spearow",
    "stats": {
      "total": 262,
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "spAttack": 31,
      "spDefense": 31,
      "speed": 70
    }
  },
  {
    "id": 22,
    "slug": "fearow",
    "name": "Fearow",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/022.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/fearow",
    "stats": {
      "total": 442,
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "spAttack": 61,
      "spDefense": 61,
      "speed": 100
    }
  },
  {
    "id": 23,
    "slug": "ekans",
    "name": "Ekans",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/023.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ekans",
    "stats": {
      "total": 288,
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "spAttack": 40,
      "spDefense": 54,
      "speed": 55
    }
  },
  {
    "id": 24,
    "slug": "arbok",
    "name": "Arbok",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/024.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/arbok",
    "stats": {
      "total": 448,
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "spAttack": 65,
      "spDefense": 79,
      "speed": 80
    }
  },
  {
    "id": 25,
    "slug": "pikachu",
    "name": "Pikachu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pikachu",
    "stats": {
      "total": 320,
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 90
    }
  },
  {
    "id": 26,
    "slug": "raichu",
    "name": "Raichu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/026.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/raichu",
    "stats": {
      "total": 485,
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "spAttack": 90,
      "spDefense": 80,
      "speed": 110
    }
  },
  {
    "id": 27,
    "slug": "sandshrew",
    "name": "Sandshrew",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/027.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sandshrew",
    "stats": {
      "total": 300,
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "spAttack": 20,
      "spDefense": 30,
      "speed": 40
    }
  },
  {
    "id": 28,
    "slug": "sandslash",
    "name": "Sandslash",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/028.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sandslash",
    "stats": {
      "total": 450,
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "spAttack": 45,
      "spDefense": 55,
      "speed": 65
    }
  },
  {
    "id": 29,
    "slug": "nidoran-female",
    "name": "Nidoran♀",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/029.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/nidoran-female",
    "stats": {
      "total": 275,
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 41
    }
  },
  {
    "id": 30,
    "slug": "nidorina",
    "name": "Nidorina",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/030.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/nidorina",
    "stats": {
      "total": 365,
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "spAttack": 55,
      "spDefense": 55,
      "speed": 56
    }
  },
  {
    "id": 31,
    "slug": "nidoqueen",
    "name": "Nidoqueen",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/031.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/nidoqueen",
    "stats": {
      "total": 505,
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "spAttack": 75,
      "spDefense": 85,
      "speed": 76
    }
  },
  {
    "id": 32,
    "slug": "nidoran-male",
    "name": "Nidoran♂",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/032.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/nidoran-male",
    "stats": {
      "total": 273,
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 50
    }
  },
  {
    "id": 33,
    "slug": "nidorino",
    "name": "Nidorino",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/033.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/nidorino",
    "stats": {
      "total": 365,
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "spAttack": 55,
      "spDefense": 55,
      "speed": 65
    }
  },
  {
    "id": 34,
    "slug": "nidoking",
    "name": "Nidoking",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/034.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/nidoking",
    "stats": {
      "total": 505,
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "spAttack": 85,
      "spDefense": 75,
      "speed": 85
    }
  },
  {
    "id": 35,
    "slug": "clefairy",
    "name": "Clefairy",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/035.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/clefairy",
    "stats": {
      "total": 323,
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "spAttack": 60,
      "spDefense": 65,
      "speed": 35
    }
  },
  {
    "id": 36,
    "slug": "clefable",
    "name": "Clefable",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/036.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/clefable",
    "stats": {
      "total": 483,
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "spAttack": 95,
      "spDefense": 90,
      "speed": 60
    }
  },
  {
    "id": 37,
    "slug": "vulpix",
    "name": "Vulpix",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/037.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/vulpix",
    "stats": {
      "total": 299,
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "spAttack": 50,
      "spDefense": 65,
      "speed": 65
    }
  },
  {
    "id": 38,
    "slug": "ninetales",
    "name": "Ninetales",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/038.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ninetales",
    "stats": {
      "total": 505,
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "spAttack": 81,
      "spDefense": 100,
      "speed": 100
    }
  },
  {
    "id": 39,
    "slug": "jigglypuff",
    "name": "Jigglypuff",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/039.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/jigglypuff",
    "stats": {
      "total": 270,
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "spAttack": 45,
      "spDefense": 25,
      "speed": 20
    }
  },
  {
    "id": 40,
    "slug": "wigglytuff",
    "name": "Wigglytuff",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/040.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wigglytuff",
    "stats": {
      "total": 435,
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "spAttack": 85,
      "spDefense": 50,
      "speed": 45
    }
  },
  {
    "id": 41,
    "slug": "zubat",
    "name": "Zubat",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/041.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zubat",
    "stats": {
      "total": 245,
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "spAttack": 30,
      "spDefense": 40,
      "speed": 55
    }
  },
  {
    "id": 42,
    "slug": "golbat",
    "name": "Golbat",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/042.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/golbat",
    "stats": {
      "total": 455,
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "spAttack": 65,
      "spDefense": 75,
      "speed": 90
    }
  },
  {
    "id": 43,
    "slug": "oddish",
    "name": "Oddish",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/043.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/oddish",
    "stats": {
      "total": 320,
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "spAttack": 75,
      "spDefense": 65,
      "speed": 30
    }
  },
  {
    "id": 44,
    "slug": "gloom",
    "name": "Gloom",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/044.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gloom",
    "stats": {
      "total": 395,
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "spAttack": 85,
      "spDefense": 75,
      "speed": 40
    }
  },
  {
    "id": 45,
    "slug": "vileplume",
    "name": "Vileplume",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/045.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/vileplume",
    "stats": {
      "total": 490,
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "spAttack": 110,
      "spDefense": 90,
      "speed": 50
    }
  },
  {
    "id": 46,
    "slug": "paras",
    "name": "Paras",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/046.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/paras",
    "stats": {
      "total": 285,
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "spAttack": 45,
      "spDefense": 55,
      "speed": 25
    }
  },
  {
    "id": 47,
    "slug": "parasect",
    "name": "Parasect",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/047.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/parasect",
    "stats": {
      "total": 405,
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "spAttack": 60,
      "spDefense": 80,
      "speed": 30
    }
  },
  {
    "id": 48,
    "slug": "venonat",
    "name": "Venonat",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/048.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/venonat",
    "stats": {
      "total": 305,
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "spAttack": 40,
      "spDefense": 55,
      "speed": 45
    }
  },
  {
    "id": 49,
    "slug": "venomoth",
    "name": "Venomoth",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/049.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/venomoth",
    "stats": {
      "total": 450,
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "spAttack": 90,
      "spDefense": 75,
      "speed": 90
    }
  },
  {
    "id": 50,
    "slug": "diglett",
    "name": "Diglett",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/050.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/diglett",
    "stats": {
      "total": 265,
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "spAttack": 35,
      "spDefense": 45,
      "speed": 95
    }
  },
  {
    "id": 51,
    "slug": "dugtrio",
    "name": "Dugtrio",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/051.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dugtrio",
    "stats": {
      "total": 425,
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "spAttack": 50,
      "spDefense": 70,
      "speed": 120
    }
  },
  {
    "id": 52,
    "slug": "meowth",
    "name": "Meowth",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/052.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/meowth",
    "stats": {
      "total": 290,
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 90
    }
  },
  {
    "id": 53,
    "slug": "persian",
    "name": "Persian",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/053.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/persian",
    "stats": {
      "total": 440,
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "spAttack": 65,
      "spDefense": 65,
      "speed": 115
    }
  },
  {
    "id": 54,
    "slug": "psyduck",
    "name": "Psyduck",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/054.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/psyduck",
    "stats": {
      "total": 320,
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "spAttack": 65,
      "spDefense": 50,
      "speed": 55
    }
  },
  {
    "id": 55,
    "slug": "golduck",
    "name": "Golduck",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/055.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/golduck",
    "stats": {
      "total": 500,
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "spAttack": 95,
      "spDefense": 80,
      "speed": 85
    }
  },
  {
    "id": 56,
    "slug": "mankey",
    "name": "Mankey",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/056.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mankey",
    "stats": {
      "total": 305,
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "spAttack": 35,
      "spDefense": 45,
      "speed": 70
    }
  },
  {
    "id": 57,
    "slug": "primeape",
    "name": "Primeape",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/057.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/primeape",
    "stats": {
      "total": 455,
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 95
    }
  },
  {
    "id": 58,
    "slug": "growlithe",
    "name": "Growlithe",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/058.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/growlithe",
    "stats": {
      "total": 350,
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "spAttack": 70,
      "spDefense": 50,
      "speed": 60
    }
  },
  {
    "id": 59,
    "slug": "arcanine",
    "name": "Arcanine",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/059.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/arcanine",
    "stats": {
      "total": 555,
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "spAttack": 100,
      "spDefense": 80,
      "speed": 95
    }
  },
  {
    "id": 60,
    "slug": "poliwag",
    "name": "Poliwag",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/060.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/poliwag",
    "stats": {
      "total": 300,
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 90
    }
  },
  {
    "id": 61,
    "slug": "poliwhirl",
    "name": "Poliwhirl",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/061.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/poliwhirl",
    "stats": {
      "total": 385,
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 90
    }
  },
  {
    "id": 62,
    "slug": "poliwrath",
    "name": "Poliwrath",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/062.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/poliwrath",
    "stats": {
      "total": 510,
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "spAttack": 70,
      "spDefense": 90,
      "speed": 70
    }
  },
  {
    "id": 63,
    "slug": "abra",
    "name": "Abra",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/063.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/abra",
    "stats": {
      "total": 310,
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "spAttack": 105,
      "spDefense": 55,
      "speed": 90
    }
  },
  {
    "id": 64,
    "slug": "kadabra",
    "name": "Kadabra",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/064.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kadabra",
    "stats": {
      "total": 400,
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "spAttack": 120,
      "spDefense": 70,
      "speed": 105
    }
  },
  {
    "id": 65,
    "slug": "alakazam",
    "name": "Alakazam",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/065.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/alakazam",
    "stats": {
      "total": 500,
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "spAttack": 135,
      "spDefense": 95,
      "speed": 120
    }
  },
  {
    "id": 66,
    "slug": "machop",
    "name": "Machop",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/066.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/machop",
    "stats": {
      "total": 305,
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 35
    }
  },
  {
    "id": 67,
    "slug": "machoke",
    "name": "Machoke",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/067.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/machoke",
    "stats": {
      "total": 405,
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "spAttack": 50,
      "spDefense": 60,
      "speed": 45
    }
  },
  {
    "id": 68,
    "slug": "machamp",
    "name": "Machamp",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/068.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/machamp",
    "stats": {
      "total": 505,
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "spAttack": 65,
      "spDefense": 85,
      "speed": 55
    }
  },
  {
    "id": 69,
    "slug": "bellsprout",
    "name": "Bellsprout",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/069.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bellsprout",
    "stats": {
      "total": 300,
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "spAttack": 70,
      "spDefense": 30,
      "speed": 40
    }
  },
  {
    "id": 70,
    "slug": "weepinbell",
    "name": "Weepinbell",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/070.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/weepinbell",
    "stats": {
      "total": 390,
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "spAttack": 85,
      "spDefense": 45,
      "speed": 55
    }
  },
  {
    "id": 71,
    "slug": "victreebel",
    "name": "Victreebel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/071.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/victreebel",
    "stats": {
      "total": 490,
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "spAttack": 100,
      "spDefense": 70,
      "speed": 70
    }
  },
  {
    "id": 72,
    "slug": "tentacool",
    "name": "Tentacool",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/072.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tentacool",
    "stats": {
      "total": 335,
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "spAttack": 50,
      "spDefense": 100,
      "speed": 70
    }
  },
  {
    "id": 73,
    "slug": "tentacruel",
    "name": "Tentacruel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/073.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tentacruel",
    "stats": {
      "total": 515,
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "spAttack": 80,
      "spDefense": 120,
      "speed": 100
    }
  },
  {
    "id": 74,
    "slug": "geodude",
    "name": "Geodude",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/074.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/geodude",
    "stats": {
      "total": 300,
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 20
    }
  },
  {
    "id": 75,
    "slug": "graveler",
    "name": "Graveler",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/075.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/graveler",
    "stats": {
      "total": 390,
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "spAttack": 45,
      "spDefense": 45,
      "speed": 35
    }
  },
  {
    "id": 76,
    "slug": "golem",
    "name": "Golem",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/076.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/golem",
    "stats": {
      "total": 495,
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "spAttack": 55,
      "spDefense": 65,
      "speed": 45
    }
  },
  {
    "id": 77,
    "slug": "ponyta",
    "name": "Ponyta",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/077.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ponyta",
    "stats": {
      "total": 410,
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "spAttack": 65,
      "spDefense": 65,
      "speed": 90
    }
  },
  {
    "id": 78,
    "slug": "rapidash",
    "name": "Rapidash",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/078.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rapidash",
    "stats": {
      "total": 500,
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "spAttack": 80,
      "spDefense": 80,
      "speed": 105
    }
  },
  {
    "id": 79,
    "slug": "slowpoke",
    "name": "Slowpoke",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/079.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/slowpoke",
    "stats": {
      "total": 315,
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 15
    }
  },
  {
    "id": 80,
    "slug": "slowbro",
    "name": "Slowbro",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/080.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/slowbro",
    "stats": {
      "total": 490,
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "spAttack": 100,
      "spDefense": 80,
      "speed": 30
    }
  },
  {
    "id": 81,
    "slug": "magnemite",
    "name": "Magnemite",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/081.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/magnemite",
    "stats": {
      "total": 325,
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "spAttack": 95,
      "spDefense": 55,
      "speed": 45
    }
  },
  {
    "id": 82,
    "slug": "magneton",
    "name": "Magneton",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/082.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/magneton",
    "stats": {
      "total": 465,
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "spAttack": 120,
      "spDefense": 70,
      "speed": 70
    }
  },
  {
    "id": 83,
    "slug": "farfetchd",
    "name": "Farfetch'd",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/083.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/farfetchd",
    "stats": {
      "total": 377,
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "spAttack": 58,
      "spDefense": 62,
      "speed": 60
    }
  },
  {
    "id": 84,
    "slug": "doduo",
    "name": "Doduo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/084.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/doduo",
    "stats": {
      "total": 310,
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 75
    }
  },
  {
    "id": 85,
    "slug": "dodrio",
    "name": "Dodrio",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/085.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dodrio",
    "stats": {
      "total": 470,
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 110
    }
  },
  {
    "id": 86,
    "slug": "seel",
    "name": "Seel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/086.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/seel",
    "stats": {
      "total": 325,
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "spAttack": 45,
      "spDefense": 70,
      "speed": 45
    }
  },
  {
    "id": 87,
    "slug": "dewgong",
    "name": "Dewgong",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/087.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dewgong",
    "stats": {
      "total": 475,
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "spAttack": 70,
      "spDefense": 95,
      "speed": 70
    }
  },
  {
    "id": 88,
    "slug": "grimer",
    "name": "Grimer",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/088.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/grimer",
    "stats": {
      "total": 325,
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 25
    }
  },
  {
    "id": 89,
    "slug": "muk",
    "name": "Muk",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/089.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/muk",
    "stats": {
      "total": 500,
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "spAttack": 65,
      "spDefense": 100,
      "speed": 50
    }
  },
  {
    "id": 90,
    "slug": "shellder",
    "name": "Shellder",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/090.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shellder",
    "stats": {
      "total": 305,
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "spAttack": 45,
      "spDefense": 25,
      "speed": 40
    }
  },
  {
    "id": 91,
    "slug": "cloyster",
    "name": "Cloyster",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/091.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cloyster",
    "stats": {
      "total": 525,
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "spAttack": 85,
      "spDefense": 45,
      "speed": 70
    }
  },
  {
    "id": 92,
    "slug": "gastly",
    "name": "Gastly",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/092.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gastly",
    "stats": {
      "total": 310,
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "spAttack": 100,
      "spDefense": 35,
      "speed": 80
    }
  },
  {
    "id": 93,
    "slug": "haunter",
    "name": "Haunter",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/093.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/haunter",
    "stats": {
      "total": 405,
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "spAttack": 115,
      "spDefense": 55,
      "speed": 95
    }
  },
  {
    "id": 94,
    "slug": "gengar",
    "name": "Gengar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/094.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gengar",
    "stats": {
      "total": 500,
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "spAttack": 130,
      "spDefense": 75,
      "speed": 110
    }
  },
  {
    "id": 95,
    "slug": "onix",
    "name": "Onix",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/095.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/onix",
    "stats": {
      "total": 385,
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "spAttack": 30,
      "spDefense": 45,
      "speed": 70
    }
  },
  {
    "id": 96,
    "slug": "drowzee",
    "name": "Drowzee",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/096.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/drowzee",
    "stats": {
      "total": 328,
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "spAttack": 43,
      "spDefense": 90,
      "speed": 42
    }
  },
  {
    "id": 97,
    "slug": "hypno",
    "name": "Hypno",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/097.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hypno",
    "stats": {
      "total": 483,
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "spAttack": 73,
      "spDefense": 115,
      "speed": 67
    }
  },
  {
    "id": 98,
    "slug": "krabby",
    "name": "Krabby",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/098.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/krabby",
    "stats": {
      "total": 325,
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "spAttack": 25,
      "spDefense": 25,
      "speed": 50
    }
  },
  {
    "id": 99,
    "slug": "kingler",
    "name": "Kingler",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/099.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kingler",
    "stats": {
      "total": 475,
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 75
    }
  },
  {
    "id": 100,
    "slug": "voltorb",
    "name": "Voltorb",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/100.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/voltorb",
    "stats": {
      "total": 330,
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "spAttack": 55,
      "spDefense": 55,
      "speed": 100
    }
  },
  {
    "id": 101,
    "slug": "electrode",
    "name": "Electrode",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/101.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/electrode",
    "stats": {
      "total": 490,
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "spAttack": 80,
      "spDefense": 80,
      "speed": 150
    }
  },
  {
    "id": 102,
    "slug": "exeggcute",
    "name": "Exeggcute",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/102.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/exeggcute",
    "stats": {
      "total": 325,
      "hp": 60,
      "attack": 40,
      "defense": 80,
      "spAttack": 60,
      "spDefense": 45,
      "speed": 40
    }
  },
  {
    "id": 103,
    "slug": "exeggutor",
    "name": "Exeggutor",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/103.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/exeggutor",
    "stats": {
      "total": 530,
      "hp": 95,
      "attack": 95,
      "defense": 85,
      "spAttack": 125,
      "spDefense": 75,
      "speed": 55
    }
  },
  {
    "id": 104,
    "slug": "cubone",
    "name": "Cubone",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/104.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cubone",
    "stats": {
      "total": 320,
      "hp": 50,
      "attack": 50,
      "defense": 95,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 35
    }
  },
  {
    "id": 105,
    "slug": "marowak",
    "name": "Marowak",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/105.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/marowak",
    "stats": {
      "total": 425,
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "spAttack": 50,
      "spDefense": 80,
      "speed": 45
    }
  },
  {
    "id": 106,
    "slug": "hitmonlee",
    "name": "Hitmonlee",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/106.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hitmonlee",
    "stats": {
      "total": 455,
      "hp": 50,
      "attack": 120,
      "defense": 53,
      "spAttack": 35,
      "spDefense": 110,
      "speed": 87
    }
  },
  {
    "id": 107,
    "slug": "hitmonchan",
    "name": "Hitmonchan",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/107.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hitmonchan",
    "stats": {
      "total": 455,
      "hp": 50,
      "attack": 105,
      "defense": 79,
      "spAttack": 35,
      "spDefense": 110,
      "speed": 76
    }
  },
  {
    "id": 108,
    "slug": "lickitung",
    "name": "Lickitung",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/108.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lickitung",
    "stats": {
      "total": 385,
      "hp": 90,
      "attack": 55,
      "defense": 75,
      "spAttack": 60,
      "spDefense": 75,
      "speed": 30
    }
  },
  {
    "id": 109,
    "slug": "koffing",
    "name": "Koffing",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/109.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/koffing",
    "stats": {
      "total": 340,
      "hp": 40,
      "attack": 65,
      "defense": 95,
      "spAttack": 60,
      "spDefense": 45,
      "speed": 35
    }
  },
  {
    "id": 110,
    "slug": "weezing",
    "name": "Weezing",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/110.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/weezing",
    "stats": {
      "total": 490,
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "spAttack": 85,
      "spDefense": 70,
      "speed": 60
    }
  },
  {
    "id": 111,
    "slug": "rhyhorn",
    "name": "Rhyhorn",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/111.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rhyhorn",
    "stats": {
      "total": 345,
      "hp": 80,
      "attack": 85,
      "defense": 95,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 25
    }
  },
  {
    "id": 112,
    "slug": "rhydon",
    "name": "Rhydon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/112.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rhydon",
    "stats": {
      "total": 485,
      "hp": 105,
      "attack": 130,
      "defense": 120,
      "spAttack": 45,
      "spDefense": 45,
      "speed": 40
    }
  },
  {
    "id": 113,
    "slug": "chansey",
    "name": "Chansey",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/113.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/chansey",
    "stats": {
      "total": 450,
      "hp": 250,
      "attack": 5,
      "defense": 5,
      "spAttack": 35,
      "spDefense": 105,
      "speed": 50
    }
  },
  {
    "id": 114,
    "slug": "tangela",
    "name": "Tangela",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/114.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tangela",
    "stats": {
      "total": 435,
      "hp": 65,
      "attack": 55,
      "defense": 115,
      "spAttack": 100,
      "spDefense": 40,
      "speed": 60
    }
  },
  {
    "id": 115,
    "slug": "kangaskhan",
    "name": "Kangaskhan",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/115.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kangaskhan",
    "stats": {
      "total": 490,
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "spAttack": 40,
      "spDefense": 80,
      "speed": 90
    }
  },
  {
    "id": 116,
    "slug": "horsea",
    "name": "Horsea",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/116.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/horsea",
    "stats": {
      "total": 295,
      "hp": 30,
      "attack": 40,
      "defense": 70,
      "spAttack": 70,
      "spDefense": 25,
      "speed": 60
    }
  },
  {
    "id": 117,
    "slug": "seadra",
    "name": "Seadra",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/117.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/seadra",
    "stats": {
      "total": 440,
      "hp": 55,
      "attack": 65,
      "defense": 95,
      "spAttack": 95,
      "spDefense": 45,
      "speed": 85
    }
  },
  {
    "id": 118,
    "slug": "goldeen",
    "name": "Goldeen",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/118.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/goldeen",
    "stats": {
      "total": 320,
      "hp": 45,
      "attack": 67,
      "defense": 60,
      "spAttack": 35,
      "spDefense": 50,
      "speed": 63
    }
  },
  {
    "id": 119,
    "slug": "seaking",
    "name": "Seaking",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/119.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/seaking",
    "stats": {
      "total": 450,
      "hp": 80,
      "attack": 92,
      "defense": 65,
      "spAttack": 65,
      "spDefense": 80,
      "speed": 68
    }
  },
  {
    "id": 120,
    "slug": "staryu",
    "name": "Staryu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/120.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/staryu",
    "stats": {
      "total": 340,
      "hp": 30,
      "attack": 45,
      "defense": 55,
      "spAttack": 70,
      "spDefense": 55,
      "speed": 85
    }
  },
  {
    "id": 121,
    "slug": "starmie",
    "name": "Starmie",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/121.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/starmie",
    "stats": {
      "total": 520,
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "spAttack": 100,
      "spDefense": 85,
      "speed": 115
    }
  },
  {
    "id": 122,
    "slug": "mr-mime",
    "name": "Mr. Mime",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/122.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mr-mime",
    "stats": {
      "total": 460,
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "spAttack": 100,
      "spDefense": 120,
      "speed": 90
    }
  },
  {
    "id": 123,
    "slug": "scyther",
    "name": "Scyther",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/123.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/scyther",
    "stats": {
      "total": 500,
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "spAttack": 55,
      "spDefense": 80,
      "speed": 105
    }
  },
  {
    "id": 124,
    "slug": "jynx",
    "name": "Jynx",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/124.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/jynx",
    "stats": {
      "total": 455,
      "hp": 65,
      "attack": 50,
      "defense": 35,
      "spAttack": 115,
      "spDefense": 95,
      "speed": 95
    }
  },
  {
    "id": 125,
    "slug": "electabuzz",
    "name": "Electabuzz",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/125.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/electabuzz",
    "stats": {
      "total": 490,
      "hp": 65,
      "attack": 83,
      "defense": 57,
      "spAttack": 95,
      "spDefense": 85,
      "speed": 105
    }
  },
  {
    "id": 126,
    "slug": "magmar",
    "name": "Magmar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/126.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/magmar",
    "stats": {
      "total": 495,
      "hp": 65,
      "attack": 95,
      "defense": 57,
      "spAttack": 100,
      "spDefense": 85,
      "speed": 93
    }
  },
  {
    "id": 127,
    "slug": "pinsir",
    "name": "Pinsir",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/127.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pinsir",
    "stats": {
      "total": 500,
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "spAttack": 55,
      "spDefense": 70,
      "speed": 85
    }
  },
  {
    "id": 128,
    "slug": "tauros",
    "name": "Tauros",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/128.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tauros",
    "stats": {
      "total": 490,
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "spAttack": 40,
      "spDefense": 70,
      "speed": 110
    }
  },
  {
    "id": 129,
    "slug": "magikarp",
    "name": "Magikarp",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/129.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/magikarp",
    "stats": {
      "total": 200,
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "spAttack": 15,
      "spDefense": 20,
      "speed": 80
    }
  },
  {
    "id": 130,
    "slug": "gyarados",
    "name": "Gyarados",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/130.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gyarados",
    "stats": {
      "total": 540,
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "spAttack": 60,
      "spDefense": 100,
      "speed": 81
    }
  },
  {
    "id": 131,
    "slug": "lapras",
    "name": "Lapras",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/131.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lapras",
    "stats": {
      "total": 535,
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "spAttack": 85,
      "spDefense": 95,
      "speed": 60
    }
  },
  {
    "id": 132,
    "slug": "ditto",
    "name": "Ditto",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/132.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ditto",
    "stats": {
      "total": 288,
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "spAttack": 48,
      "spDefense": 48,
      "speed": 48
    }
  },
  {
    "id": 133,
    "slug": "eevee",
    "name": "Eevee",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/133.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/eevee",
    "stats": {
      "total": 325,
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "spAttack": 45,
      "spDefense": 65,
      "speed": 55
    }
  },
  {
    "id": 134,
    "slug": "vaporeon",
    "name": "Vaporeon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/134.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/vaporeon",
    "stats": {
      "total": 525,
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "spAttack": 110,
      "spDefense": 95,
      "speed": 65
    }
  },
  {
    "id": 135,
    "slug": "jolteon",
    "name": "Jolteon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/135.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/jolteon",
    "stats": {
      "total": 525,
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "spAttack": 110,
      "spDefense": 95,
      "speed": 130
    }
  },
  {
    "id": 136,
    "slug": "flareon",
    "name": "Flareon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/136.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/flareon",
    "stats": {
      "total": 525,
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "spAttack": 95,
      "spDefense": 110,
      "speed": 65
    }
  },
  {
    "id": 137,
    "slug": "porygon",
    "name": "Porygon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/137.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/porygon",
    "stats": {
      "total": 395,
      "hp": 65,
      "attack": 60,
      "defense": 70,
      "spAttack": 85,
      "spDefense": 75,
      "speed": 40
    }
  },
  {
    "id": 138,
    "slug": "omanyte",
    "name": "Omanyte",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/138.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/omanyte",
    "stats": {
      "total": 355,
      "hp": 35,
      "attack": 40,
      "defense": 100,
      "spAttack": 90,
      "spDefense": 55,
      "speed": 35
    }
  },
  {
    "id": 139,
    "slug": "omastar",
    "name": "Omastar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/139.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/omastar",
    "stats": {
      "total": 495,
      "hp": 70,
      "attack": 60,
      "defense": 125,
      "spAttack": 115,
      "spDefense": 70,
      "speed": 55
    }
  },
  {
    "id": 140,
    "slug": "kabuto",
    "name": "Kabuto",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/140.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kabuto",
    "stats": {
      "total": 355,
      "hp": 30,
      "attack": 80,
      "defense": 90,
      "spAttack": 55,
      "spDefense": 45,
      "speed": 55
    }
  },
  {
    "id": 141,
    "slug": "kabutops",
    "name": "Kabutops",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/141.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kabutops",
    "stats": {
      "total": 495,
      "hp": 60,
      "attack": 115,
      "defense": 105,
      "spAttack": 65,
      "spDefense": 70,
      "speed": 80
    }
  },
  {
    "id": 142,
    "slug": "aerodactyl",
    "name": "Aerodactyl",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/142.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/aerodactyl",
    "stats": {
      "total": 515,
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "spAttack": 60,
      "spDefense": 75,
      "speed": 130
    }
  },
  {
    "id": 143,
    "slug": "snorlax",
    "name": "Snorlax",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/143.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/snorlax",
    "stats": {
      "total": 540,
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "spAttack": 65,
      "spDefense": 110,
      "speed": 30
    }
  },
  {
    "id": 144,
    "slug": "articuno",
    "name": "Articuno",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/144.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/articuno",
    "stats": {
      "total": 580,
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "spAttack": 95,
      "spDefense": 125,
      "speed": 85
    }
  },
  {
    "id": 145,
    "slug": "zapdos",
    "name": "Zapdos",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/145.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zapdos",
    "stats": {
      "total": 580,
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "spAttack": 125,
      "spDefense": 90,
      "speed": 100
    }
  },
  {
    "id": 146,
    "slug": "moltres",
    "name": "Moltres",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/146.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/moltres",
    "stats": {
      "total": 580,
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "spAttack": 125,
      "spDefense": 85,
      "speed": 90
    }
  },
  {
    "id": 147,
    "slug": "dratini",
    "name": "Dratini",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/147.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dratini",
    "stats": {
      "total": 300,
      "hp": 41,
      "attack": 64,
      "defense": 45,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 50
    }
  },
  {
    "id": 148,
    "slug": "dragonair",
    "name": "Dragonair",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/148.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dragonair",
    "stats": {
      "total": 420,
      "hp": 61,
      "attack": 84,
      "defense": 65,
      "spAttack": 70,
      "spDefense": 70,
      "speed": 70
    }
  },
  {
    "id": 149,
    "slug": "dragonite",
    "name": "Dragonite",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/149.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dragonite",
    "stats": {
      "total": 600,
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "spAttack": 100,
      "spDefense": 100,
      "speed": 80
    }
  },
  {
    "id": 150,
    "slug": "mewtwo",
    "name": "Mewtwo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/150.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mewtwo",
    "stats": {
      "total": 680,
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "spAttack": 154,
      "spDefense": 90,
      "speed": 130
    }
  },
  {
    "id": 151,
    "slug": "mew",
    "name": "Mew",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/151.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mew",
    "stats": {
      "total": 600,
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "spAttack": 100,
      "spDefense": 100,
      "speed": 100
    }
  },
  {
    "id": 152,
    "slug": "chikorita",
    "name": "Chikorita",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/152.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/chikorita",
    "stats": {
      "total": 318,
      "hp": 45,
      "attack": 49,
      "defense": 65,
      "spAttack": 49,
      "spDefense": 65,
      "speed": 45
    }
  },
  {
    "id": 153,
    "slug": "bayleef",
    "name": "Bayleef",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/153.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/153.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bayleef",
    "stats": {
      "total": 405,
      "hp": 60,
      "attack": 62,
      "defense": 80,
      "spAttack": 63,
      "spDefense": 80,
      "speed": 60
    }
  },
  {
    "id": 154,
    "slug": "meganium",
    "name": "Meganium",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/154.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/meganium",
    "stats": {
      "total": 525,
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "spAttack": 83,
      "spDefense": 100,
      "speed": 80
    }
  },
  {
    "id": 155,
    "slug": "cyndaquil",
    "name": "Cyndaquil",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/155.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cyndaquil",
    "stats": {
      "total": 309,
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "spAttack": 60,
      "spDefense": 50,
      "speed": 65
    }
  },
  {
    "id": 156,
    "slug": "quilava",
    "name": "Quilava",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/156.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/156.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/quilava",
    "stats": {
      "total": 405,
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "spAttack": 80,
      "spDefense": 65,
      "speed": 80
    }
  },
  {
    "id": 157,
    "slug": "typhlosion",
    "name": "Typhlosion",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/157.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/typhlosion",
    "stats": {
      "total": 534,
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "spAttack": 109,
      "spDefense": 85,
      "speed": 100
    }
  },
  {
    "id": 158,
    "slug": "totodile",
    "name": "Totodile",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/158.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/totodile",
    "stats": {
      "total": 314,
      "hp": 50,
      "attack": 65,
      "defense": 64,
      "spAttack": 44,
      "spDefense": 48,
      "speed": 43
    }
  },
  {
    "id": 159,
    "slug": "croconaw",
    "name": "Croconaw",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/159.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/159.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/croconaw",
    "stats": {
      "total": 405,
      "hp": 65,
      "attack": 80,
      "defense": 80,
      "spAttack": 59,
      "spDefense": 63,
      "speed": 58
    }
  },
  {
    "id": 160,
    "slug": "feraligatr",
    "name": "Feraligatr",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/160.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/feraligatr",
    "stats": {
      "total": 530,
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "spAttack": 79,
      "spDefense": 83,
      "speed": 78
    }
  },
  {
    "id": 161,
    "slug": "sentret",
    "name": "Sentret",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/161.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/161.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sentret",
    "stats": {
      "total": 215,
      "hp": 35,
      "attack": 46,
      "defense": 34,
      "spAttack": 35,
      "spDefense": 45,
      "speed": 20
    }
  },
  {
    "id": 162,
    "slug": "furret",
    "name": "Furret",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/162.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/162.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/furret",
    "stats": {
      "total": 415,
      "hp": 85,
      "attack": 76,
      "defense": 64,
      "spAttack": 45,
      "spDefense": 55,
      "speed": 90
    }
  },
  {
    "id": 163,
    "slug": "hoothoot",
    "name": "Hoothoot",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/163.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/163.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hoothoot",
    "stats": {
      "total": 262,
      "hp": 60,
      "attack": 30,
      "defense": 30,
      "spAttack": 36,
      "spDefense": 56,
      "speed": 50
    }
  },
  {
    "id": 164,
    "slug": "noctowl",
    "name": "Noctowl",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/164.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/164.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/noctowl",
    "stats": {
      "total": 452,
      "hp": 100,
      "attack": 50,
      "defense": 50,
      "spAttack": 86,
      "spDefense": 96,
      "speed": 70
    }
  },
  {
    "id": 165,
    "slug": "ledyba",
    "name": "Ledyba",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/165.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/165.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ledyba",
    "stats": {
      "total": 265,
      "hp": 40,
      "attack": 20,
      "defense": 30,
      "spAttack": 40,
      "spDefense": 80,
      "speed": 55
    }
  },
  {
    "id": 166,
    "slug": "ledian",
    "name": "Ledian",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/166.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/166.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ledian",
    "stats": {
      "total": 390,
      "hp": 55,
      "attack": 35,
      "defense": 50,
      "spAttack": 55,
      "spDefense": 110,
      "speed": 85
    }
  },
  {
    "id": 167,
    "slug": "spinarak",
    "name": "Spinarak",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/167.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/167.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/spinarak",
    "stats": {
      "total": 250,
      "hp": 40,
      "attack": 60,
      "defense": 40,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 30
    }
  },
  {
    "id": 168,
    "slug": "ariados",
    "name": "Ariados",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/168.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/168.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ariados",
    "stats": {
      "total": 400,
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 40
    }
  },
  {
    "id": 169,
    "slug": "crobat",
    "name": "Crobat",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/169.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/169.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/crobat",
    "stats": {
      "total": 535,
      "hp": 85,
      "attack": 90,
      "defense": 80,
      "spAttack": 70,
      "spDefense": 80,
      "speed": 130
    }
  },
  {
    "id": 170,
    "slug": "chinchou",
    "name": "Chinchou",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/170.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/170.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/chinchou",
    "stats": {
      "total": 330,
      "hp": 75,
      "attack": 38,
      "defense": 38,
      "spAttack": 56,
      "spDefense": 56,
      "speed": 67
    }
  },
  {
    "id": 171,
    "slug": "lanturn",
    "name": "Lanturn",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/171.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/171.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lanturn",
    "stats": {
      "total": 460,
      "hp": 125,
      "attack": 58,
      "defense": 58,
      "spAttack": 76,
      "spDefense": 76,
      "speed": 67
    }
  },
  {
    "id": 172,
    "slug": "pichu",
    "name": "Pichu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/172.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pichu",
    "stats": {
      "total": 205,
      "hp": 20,
      "attack": 40,
      "defense": 15,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 60
    }
  },
  {
    "id": 173,
    "slug": "cleffa",
    "name": "Cleffa",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/173.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/173.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cleffa",
    "stats": {
      "total": 218,
      "hp": 50,
      "attack": 25,
      "defense": 28,
      "spAttack": 45,
      "spDefense": 55,
      "speed": 15
    }
  },
  {
    "id": 174,
    "slug": "igglybuff",
    "name": "Igglybuff",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/174.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/174.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/igglybuff",
    "stats": {
      "total": 210,
      "hp": 90,
      "attack": 30,
      "defense": 15,
      "spAttack": 40,
      "spDefense": 20,
      "speed": 15
    }
  },
  {
    "id": 175,
    "slug": "togepi",
    "name": "Togepi",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/175.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/togepi",
    "stats": {
      "total": 245,
      "hp": 35,
      "attack": 20,
      "defense": 65,
      "spAttack": 40,
      "spDefense": 65,
      "speed": 20
    }
  },
  {
    "id": 176,
    "slug": "togetic",
    "name": "Togetic",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/176.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/176.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/togetic",
    "stats": {
      "total": 405,
      "hp": 55,
      "attack": 40,
      "defense": 85,
      "spAttack": 80,
      "spDefense": 105,
      "speed": 40
    }
  },
  {
    "id": 177,
    "slug": "natu",
    "name": "Natu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/177.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/177.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/natu",
    "stats": {
      "total": 320,
      "hp": 40,
      "attack": 50,
      "defense": 45,
      "spAttack": 70,
      "spDefense": 45,
      "speed": 70
    }
  },
  {
    "id": 178,
    "slug": "xatu",
    "name": "Xatu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/178.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/178.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/xatu",
    "stats": {
      "total": 470,
      "hp": 65,
      "attack": 75,
      "defense": 70,
      "spAttack": 95,
      "spDefense": 70,
      "speed": 95
    }
  },
  {
    "id": 179,
    "slug": "mareep",
    "name": "Mareep",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/179.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/179.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mareep",
    "stats": {
      "total": 280,
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "spAttack": 65,
      "spDefense": 45,
      "speed": 35
    }
  },
  {
    "id": 180,
    "slug": "flaaffy",
    "name": "Flaaffy",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/180.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/180.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/flaaffy",
    "stats": {
      "total": 365,
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "spAttack": 80,
      "spDefense": 60,
      "speed": 45
    }
  },
  {
    "id": 181,
    "slug": "ampharos",
    "name": "Ampharos",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/181.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/181.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ampharos",
    "stats": {
      "total": 510,
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "spAttack": 115,
      "spDefense": 90,
      "speed": 55
    }
  },
  {
    "id": 182,
    "slug": "bellossom",
    "name": "Bellossom",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/182.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/182.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bellossom",
    "stats": {
      "total": 490,
      "hp": 75,
      "attack": 80,
      "defense": 95,
      "spAttack": 90,
      "spDefense": 100,
      "speed": 50
    }
  },
  {
    "id": 183,
    "slug": "marill",
    "name": "Marill",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/183.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/183.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/marill",
    "stats": {
      "total": 250,
      "hp": 70,
      "attack": 20,
      "defense": 50,
      "spAttack": 20,
      "spDefense": 50,
      "speed": 40
    }
  },
  {
    "id": 184,
    "slug": "azumarill",
    "name": "Azumarill",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/184.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/184.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/azumarill",
    "stats": {
      "total": 420,
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "spAttack": 60,
      "spDefense": 80,
      "speed": 50
    }
  },
  {
    "id": 185,
    "slug": "sudowoodo",
    "name": "Sudowoodo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/185.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/185.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sudowoodo",
    "stats": {
      "total": 410,
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "spAttack": 30,
      "spDefense": 65,
      "speed": 30
    }
  },
  {
    "id": 186,
    "slug": "politoed",
    "name": "Politoed",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/186.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/186.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/politoed",
    "stats": {
      "total": 500,
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "spAttack": 90,
      "spDefense": 100,
      "speed": 70
    }
  },
  {
    "id": 187,
    "slug": "hoppip",
    "name": "Hoppip",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/187.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/187.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hoppip",
    "stats": {
      "total": 250,
      "hp": 35,
      "attack": 35,
      "defense": 40,
      "spAttack": 35,
      "spDefense": 55,
      "speed": 50
    }
  },
  {
    "id": 188,
    "slug": "skiploom",
    "name": "Skiploom",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/188.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/188.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/skiploom",
    "stats": {
      "total": 340,
      "hp": 55,
      "attack": 45,
      "defense": 50,
      "spAttack": 45,
      "spDefense": 65,
      "speed": 80
    }
  },
  {
    "id": 189,
    "slug": "jumpluff",
    "name": "Jumpluff",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/189.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/189.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/jumpluff",
    "stats": {
      "total": 460,
      "hp": 75,
      "attack": 55,
      "defense": 70,
      "spAttack": 55,
      "spDefense": 95,
      "speed": 110
    }
  },
  {
    "id": 190,
    "slug": "aipom",
    "name": "Aipom",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/190.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/190.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/aipom",
    "stats": {
      "total": 360,
      "hp": 55,
      "attack": 70,
      "defense": 55,
      "spAttack": 40,
      "spDefense": 55,
      "speed": 85
    }
  },
  {
    "id": 191,
    "slug": "sunkern",
    "name": "Sunkern",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/191.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/191.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sunkern",
    "stats": {
      "total": 180,
      "hp": 30,
      "attack": 30,
      "defense": 30,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 30
    }
  },
  {
    "id": 192,
    "slug": "sunflora",
    "name": "Sunflora",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/192.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/192.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sunflora",
    "stats": {
      "total": 425,
      "hp": 75,
      "attack": 75,
      "defense": 55,
      "spAttack": 105,
      "spDefense": 85,
      "speed": 30
    }
  },
  {
    "id": 193,
    "slug": "yanma",
    "name": "Yanma",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/193.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/193.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/yanma",
    "stats": {
      "total": 390,
      "hp": 65,
      "attack": 65,
      "defense": 45,
      "spAttack": 75,
      "spDefense": 45,
      "speed": 95
    }
  },
  {
    "id": 194,
    "slug": "wooper",
    "name": "Wooper",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/194.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/194.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wooper",
    "stats": {
      "total": 210,
      "hp": 55,
      "attack": 45,
      "defense": 45,
      "spAttack": 25,
      "spDefense": 25,
      "speed": 15
    }
  },
  {
    "id": 195,
    "slug": "quagsire",
    "name": "Quagsire",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/195.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/195.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/quagsire",
    "stats": {
      "total": 430,
      "hp": 95,
      "attack": 85,
      "defense": 85,
      "spAttack": 65,
      "spDefense": 65,
      "speed": 35
    }
  },
  {
    "id": 196,
    "slug": "espeon",
    "name": "Espeon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/196.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/espeon",
    "stats": {
      "total": 525,
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "spAttack": 130,
      "spDefense": 95,
      "speed": 110
    }
  },
  {
    "id": 197,
    "slug": "umbreon",
    "name": "Umbreon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/197.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/umbreon",
    "stats": {
      "total": 525,
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "spAttack": 60,
      "spDefense": 130,
      "speed": 65
    }
  },
  {
    "id": 198,
    "slug": "murkrow",
    "name": "Murkrow",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/198.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/murkrow",
    "stats": {
      "total": 405,
      "hp": 60,
      "attack": 85,
      "defense": 42,
      "spAttack": 85,
      "spDefense": 42,
      "speed": 91
    }
  },
  {
    "id": 199,
    "slug": "slowking",
    "name": "Slowking",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/199.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/199.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/slowking",
    "stats": {
      "total": 490,
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "spAttack": 100,
      "spDefense": 110,
      "speed": 30
    }
  },
  {
    "id": 200,
    "slug": "misdreavus",
    "name": "Misdreavus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/200.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/200.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/misdreavus",
    "stats": {
      "total": 435,
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "spAttack": 85,
      "spDefense": 85,
      "speed": 85
    }
  },
  {
    "id": 201,
    "slug": "unown",
    "name": "Unown",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/201.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/201.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/unown",
    "stats": {
      "total": 336,
      "hp": 48,
      "attack": 72,
      "defense": 48,
      "spAttack": 72,
      "spDefense": 48,
      "speed": 48
    }
  },
  {
    "id": 202,
    "slug": "wobbuffet",
    "name": "Wobbuffet",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/202.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/202.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wobbuffet",
    "stats": {
      "total": 405,
      "hp": 190,
      "attack": 33,
      "defense": 58,
      "spAttack": 33,
      "spDefense": 58,
      "speed": 33
    }
  },
  {
    "id": 203,
    "slug": "girafarig",
    "name": "Girafarig",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/203.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/203.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/girafarig",
    "stats": {
      "total": 455,
      "hp": 70,
      "attack": 80,
      "defense": 65,
      "spAttack": 90,
      "spDefense": 65,
      "speed": 85
    }
  },
  {
    "id": 204,
    "slug": "pineco",
    "name": "Pineco",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/204.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/204.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pineco",
    "stats": {
      "total": 290,
      "hp": 50,
      "attack": 65,
      "defense": 90,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 15
    }
  },
  {
    "id": 205,
    "slug": "forretress",
    "name": "Forretress",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/205.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/205.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/forretress",
    "stats": {
      "total": 465,
      "hp": 75,
      "attack": 90,
      "defense": 140,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 40
    }
  },
  {
    "id": 206,
    "slug": "dunsparce",
    "name": "Dunsparce",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/206.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/206.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dunsparce",
    "stats": {
      "total": 415,
      "hp": 100,
      "attack": 70,
      "defense": 70,
      "spAttack": 65,
      "spDefense": 65,
      "speed": 45
    }
  },
  {
    "id": 207,
    "slug": "gligar",
    "name": "Gligar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/207.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/207.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gligar",
    "stats": {
      "total": 430,
      "hp": 65,
      "attack": 75,
      "defense": 105,
      "spAttack": 35,
      "spDefense": 65,
      "speed": 85
    }
  },
  {
    "id": 208,
    "slug": "steelix",
    "name": "Steelix",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/208.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/208.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/steelix",
    "stats": {
      "total": 510,
      "hp": 75,
      "attack": 85,
      "defense": 200,
      "spAttack": 55,
      "spDefense": 65,
      "speed": 30
    }
  },
  {
    "id": 209,
    "slug": "snubbull",
    "name": "Snubbull",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/209.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/209.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/snubbull",
    "stats": {
      "total": 300,
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 30
    }
  },
  {
    "id": 210,
    "slug": "granbull",
    "name": "Granbull",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/210.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/210.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/granbull",
    "stats": {
      "total": 450,
      "hp": 90,
      "attack": 120,
      "defense": 75,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 45
    }
  },
  {
    "id": 211,
    "slug": "qwilfish",
    "name": "Qwilfish",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/211.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/211.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/qwilfish",
    "stats": {
      "total": 440,
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "spAttack": 55,
      "spDefense": 55,
      "speed": 85
    }
  },
  {
    "id": 212,
    "slug": "scizor",
    "name": "Scizor",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/212.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/212.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/scizor",
    "stats": {
      "total": 500,
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "spAttack": 55,
      "spDefense": 80,
      "speed": 65
    }
  },
  {
    "id": 213,
    "slug": "shuckle",
    "name": "Shuckle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/213.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/213.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shuckle",
    "stats": {
      "total": 505,
      "hp": 20,
      "attack": 10,
      "defense": 230,
      "spAttack": 10,
      "spDefense": 230,
      "speed": 5
    }
  },
  {
    "id": 214,
    "slug": "heracross",
    "name": "Heracross",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/214.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/214.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/heracross",
    "stats": {
      "total": 500,
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "spAttack": 40,
      "spDefense": 95,
      "speed": 85
    }
  },
  {
    "id": 215,
    "slug": "sneasel",
    "name": "Sneasel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/215.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/215.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sneasel",
    "stats": {
      "total": 430,
      "hp": 55,
      "attack": 95,
      "defense": 55,
      "spAttack": 35,
      "spDefense": 75,
      "speed": 115
    }
  },
  {
    "id": 216,
    "slug": "teddiursa",
    "name": "Teddiursa",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/216.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/216.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/teddiursa",
    "stats": {
      "total": 330,
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 40
    }
  },
  {
    "id": 217,
    "slug": "ursaring",
    "name": "Ursaring",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/217.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/217.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ursaring",
    "stats": {
      "total": 500,
      "hp": 90,
      "attack": 130,
      "defense": 75,
      "spAttack": 75,
      "spDefense": 75,
      "speed": 55
    }
  },
  {
    "id": 218,
    "slug": "slugma",
    "name": "Slugma",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/218.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/218.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/slugma",
    "stats": {
      "total": 250,
      "hp": 40,
      "attack": 40,
      "defense": 40,
      "spAttack": 70,
      "spDefense": 40,
      "speed": 20
    }
  },
  {
    "id": 219,
    "slug": "magcargo",
    "name": "Magcargo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/219.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/219.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/magcargo",
    "stats": {
      "total": 430,
      "hp": 60,
      "attack": 50,
      "defense": 120,
      "spAttack": 90,
      "spDefense": 80,
      "speed": 30
    }
  },
  {
    "id": 220,
    "slug": "swinub",
    "name": "Swinub",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/220.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/220.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/swinub",
    "stats": {
      "total": 250,
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 50
    }
  },
  {
    "id": 221,
    "slug": "piloswine",
    "name": "Piloswine",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/221.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/221.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/piloswine",
    "stats": {
      "total": 450,
      "hp": 100,
      "attack": 100,
      "defense": 80,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 50
    }
  },
  {
    "id": 222,
    "slug": "corsola",
    "name": "Corsola",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/222.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/222.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/corsola",
    "stats": {
      "total": 410,
      "hp": 65,
      "attack": 55,
      "defense": 95,
      "spAttack": 65,
      "spDefense": 95,
      "speed": 35
    }
  },
  {
    "id": 223,
    "slug": "remoraid",
    "name": "Remoraid",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/223.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/223.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/remoraid",
    "stats": {
      "total": 300,
      "hp": 35,
      "attack": 65,
      "defense": 35,
      "spAttack": 65,
      "spDefense": 35,
      "speed": 65
    }
  },
  {
    "id": 224,
    "slug": "octillery",
    "name": "Octillery",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/224.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/224.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/octillery",
    "stats": {
      "total": 480,
      "hp": 75,
      "attack": 105,
      "defense": 75,
      "spAttack": 105,
      "spDefense": 75,
      "speed": 45
    }
  },
  {
    "id": 225,
    "slug": "delibird",
    "name": "Delibird",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/225.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/225.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/delibird",
    "stats": {
      "total": 330,
      "hp": 45,
      "attack": 55,
      "defense": 45,
      "spAttack": 65,
      "spDefense": 45,
      "speed": 75
    }
  },
  {
    "id": 226,
    "slug": "mantine",
    "name": "Mantine",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/226.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/226.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mantine",
    "stats": {
      "total": 485,
      "hp": 85,
      "attack": 40,
      "defense": 70,
      "spAttack": 80,
      "spDefense": 140,
      "speed": 70
    }
  },
  {
    "id": 227,
    "slug": "skarmory",
    "name": "Skarmory",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/227.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/227.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/skarmory",
    "stats": {
      "total": 465,
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "spAttack": 40,
      "spDefense": 70,
      "speed": 70
    }
  },
  {
    "id": 228,
    "slug": "houndour",
    "name": "Houndour",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/228.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/228.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/houndour",
    "stats": {
      "total": 330,
      "hp": 45,
      "attack": 60,
      "defense": 30,
      "spAttack": 80,
      "spDefense": 50,
      "speed": 65
    }
  },
  {
    "id": 229,
    "slug": "houndoom",
    "name": "Houndoom",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/229.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/229.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/houndoom",
    "stats": {
      "total": 500,
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "spAttack": 110,
      "spDefense": 80,
      "speed": 95
    }
  },
  {
    "id": 230,
    "slug": "kingdra",
    "name": "Kingdra",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/230.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/230.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kingdra",
    "stats": {
      "total": 540,
      "hp": 75,
      "attack": 95,
      "defense": 95,
      "spAttack": 95,
      "spDefense": 95,
      "speed": 85
    }
  },
  {
    "id": 231,
    "slug": "phanpy",
    "name": "Phanpy",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/231.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/231.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/phanpy",
    "stats": {
      "total": 330,
      "hp": 90,
      "attack": 60,
      "defense": 60,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 40
    }
  },
  {
    "id": 232,
    "slug": "donphan",
    "name": "Donphan",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/232.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/232.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/donphan",
    "stats": {
      "total": 500,
      "hp": 90,
      "attack": 120,
      "defense": 120,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 50
    }
  },
  {
    "id": 233,
    "slug": "porygon2",
    "name": "Porygon2",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/233.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/233.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/porygon2",
    "stats": {
      "total": 515,
      "hp": 85,
      "attack": 80,
      "defense": 90,
      "spAttack": 105,
      "spDefense": 95,
      "speed": 60
    }
  },
  {
    "id": 234,
    "slug": "stantler",
    "name": "Stantler",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/234.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/234.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/stantler",
    "stats": {
      "total": 465,
      "hp": 73,
      "attack": 95,
      "defense": 62,
      "spAttack": 85,
      "spDefense": 65,
      "speed": 85
    }
  },
  {
    "id": 235,
    "slug": "smeargle",
    "name": "Smeargle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/235.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/235.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/smeargle",
    "stats": {
      "total": 250,
      "hp": 55,
      "attack": 20,
      "defense": 35,
      "spAttack": 20,
      "spDefense": 45,
      "speed": 75
    }
  },
  {
    "id": 236,
    "slug": "tyrogue",
    "name": "Tyrogue",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/236.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/236.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tyrogue",
    "stats": {
      "total": 210,
      "hp": 35,
      "attack": 35,
      "defense": 35,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 35
    }
  },
  {
    "id": 237,
    "slug": "hitmontop",
    "name": "Hitmontop",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/237.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/237.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hitmontop",
    "stats": {
      "total": 455,
      "hp": 50,
      "attack": 95,
      "defense": 95,
      "spAttack": 35,
      "spDefense": 110,
      "speed": 70
    }
  },
  {
    "id": 238,
    "slug": "smoochum",
    "name": "Smoochum",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/238.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/238.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/smoochum",
    "stats": {
      "total": 305,
      "hp": 45,
      "attack": 30,
      "defense": 15,
      "spAttack": 85,
      "spDefense": 65,
      "speed": 65
    }
  },
  {
    "id": 239,
    "slug": "elekid",
    "name": "Elekid",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/239.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/239.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/elekid",
    "stats": {
      "total": 360,
      "hp": 45,
      "attack": 63,
      "defense": 37,
      "spAttack": 65,
      "spDefense": 55,
      "speed": 95
    }
  },
  {
    "id": 240,
    "slug": "magby",
    "name": "Magby",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/240.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/240.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/magby",
    "stats": {
      "total": 365,
      "hp": 45,
      "attack": 75,
      "defense": 37,
      "spAttack": 70,
      "spDefense": 55,
      "speed": 83
    }
  },
  {
    "id": 241,
    "slug": "miltank",
    "name": "Miltank",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/241.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/241.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/miltank",
    "stats": {
      "total": 490,
      "hp": 95,
      "attack": 80,
      "defense": 105,
      "spAttack": 40,
      "spDefense": 70,
      "speed": 100
    }
  },
  {
    "id": 242,
    "slug": "blissey",
    "name": "Blissey",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/242.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/242.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/blissey",
    "stats": {
      "total": 540,
      "hp": 255,
      "attack": 10,
      "defense": 10,
      "spAttack": 75,
      "spDefense": 135,
      "speed": 55
    }
  },
  {
    "id": 243,
    "slug": "raikou",
    "name": "Raikou",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/243.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/raikou",
    "stats": {
      "total": 580,
      "hp": 90,
      "attack": 85,
      "defense": 75,
      "spAttack": 115,
      "spDefense": 100,
      "speed": 115
    }
  },
  {
    "id": 244,
    "slug": "entei",
    "name": "Entei",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/244.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/entei",
    "stats": {
      "total": 580,
      "hp": 115,
      "attack": 115,
      "defense": 85,
      "spAttack": 90,
      "spDefense": 75,
      "speed": 100
    }
  },
  {
    "id": 245,
    "slug": "suicune",
    "name": "Suicune",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/245.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/suicune",
    "stats": {
      "total": 580,
      "hp": 100,
      "attack": 75,
      "defense": 115,
      "spAttack": 90,
      "spDefense": 115,
      "speed": 85
    }
  },
  {
    "id": 246,
    "slug": "larvitar",
    "name": "Larvitar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/246.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/246.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/larvitar",
    "stats": {
      "total": 300,
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "spAttack": 45,
      "spDefense": 50,
      "speed": 41
    }
  },
  {
    "id": 247,
    "slug": "pupitar",
    "name": "Pupitar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/247.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/247.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pupitar",
    "stats": {
      "total": 410,
      "hp": 70,
      "attack": 84,
      "defense": 70,
      "spAttack": 65,
      "spDefense": 70,
      "speed": 51
    }
  },
  {
    "id": 248,
    "slug": "tyranitar",
    "name": "Tyranitar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/248.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tyranitar",
    "stats": {
      "total": 600,
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "spAttack": 95,
      "spDefense": 100,
      "speed": 61
    }
  },
  {
    "id": 249,
    "slug": "lugia",
    "name": "Lugia",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/249.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lugia",
    "stats": {
      "total": 680,
      "hp": 106,
      "attack": 90,
      "defense": 130,
      "spAttack": 90,
      "spDefense": 154,
      "speed": 110
    }
  },
  {
    "id": 250,
    "slug": "ho-oh",
    "name": "Ho-Oh",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/250.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/250.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ho-oh",
    "stats": {
      "total": 680,
      "hp": 106,
      "attack": 130,
      "defense": 90,
      "spAttack": 110,
      "spDefense": 154,
      "speed": 90
    }
  },
  {
    "id": 251,
    "slug": "celebi",
    "name": "Celebi",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/251.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/celebi",
    "stats": {
      "total": 600,
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "spAttack": 100,
      "spDefense": 100,
      "speed": 100
    }
  },
  {
    "id": 252,
    "slug": "treecko",
    "name": "Treecko",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/252.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/treecko",
    "stats": {
      "total": 310,
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "spAttack": 65,
      "spDefense": 55,
      "speed": 70
    }
  },
  {
    "id": 253,
    "slug": "grovyle",
    "name": "Grovyle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/253.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/253.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/grovyle",
    "stats": {
      "total": 405,
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "spAttack": 85,
      "spDefense": 65,
      "speed": 95
    }
  },
  {
    "id": 254,
    "slug": "sceptile",
    "name": "Sceptile",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/254.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sceptile",
    "stats": {
      "total": 530,
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "spAttack": 105,
      "spDefense": 85,
      "speed": 120
    }
  },
  {
    "id": 255,
    "slug": "torchic",
    "name": "Torchic",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/255.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/torchic",
    "stats": {
      "total": 310,
      "hp": 45,
      "attack": 60,
      "defense": 40,
      "spAttack": 70,
      "spDefense": 50,
      "speed": 45
    }
  },
  {
    "id": 256,
    "slug": "combusken",
    "name": "Combusken",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/256.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/256.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/combusken",
    "stats": {
      "total": 405,
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "spAttack": 85,
      "spDefense": 60,
      "speed": 55
    }
  },
  {
    "id": 257,
    "slug": "blaziken",
    "name": "Blaziken",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/257.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/blaziken",
    "stats": {
      "total": 530,
      "hp": 80,
      "attack": 120,
      "defense": 70,
      "spAttack": 110,
      "spDefense": 70,
      "speed": 80
    }
  },
  {
    "id": 258,
    "slug": "mudkip",
    "name": "Mudkip",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/258.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mudkip",
    "stats": {
      "total": 310,
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 40
    }
  },
  {
    "id": 259,
    "slug": "marshtomp",
    "name": "Marshtomp",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/259.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/259.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/marshtomp",
    "stats": {
      "total": 405,
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 50
    }
  },
  {
    "id": 260,
    "slug": "swampert",
    "name": "Swampert",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/260.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/swampert",
    "stats": {
      "total": 535,
      "hp": 100,
      "attack": 110,
      "defense": 90,
      "spAttack": 85,
      "spDefense": 90,
      "speed": 60
    }
  },
  {
    "id": 261,
    "slug": "poochyena",
    "name": "Poochyena",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/261.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/261.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/poochyena",
    "stats": {
      "total": 220,
      "hp": 35,
      "attack": 55,
      "defense": 35,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 35
    }
  },
  {
    "id": 262,
    "slug": "mightyena",
    "name": "Mightyena",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/262.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/262.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mightyena",
    "stats": {
      "total": 420,
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 70
    }
  },
  {
    "id": 263,
    "slug": "zigzagoon",
    "name": "Zigzagoon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/263.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/263.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zigzagoon",
    "stats": {
      "total": 240,
      "hp": 38,
      "attack": 30,
      "defense": 41,
      "spAttack": 30,
      "spDefense": 41,
      "speed": 60
    }
  },
  {
    "id": 264,
    "slug": "linoone",
    "name": "Linoone",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/264.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/264.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/linoone",
    "stats": {
      "total": 420,
      "hp": 78,
      "attack": 70,
      "defense": 61,
      "spAttack": 50,
      "spDefense": 61,
      "speed": 100
    }
  },
  {
    "id": 265,
    "slug": "wurmple",
    "name": "Wurmple",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/265.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/265.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wurmple",
    "stats": {
      "total": 195,
      "hp": 45,
      "attack": 45,
      "defense": 35,
      "spAttack": 20,
      "spDefense": 30,
      "speed": 20
    }
  },
  {
    "id": 266,
    "slug": "silcoon",
    "name": "Silcoon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/266.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/266.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/silcoon",
    "stats": {
      "total": 205,
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "spAttack": 25,
      "spDefense": 25,
      "speed": 15
    }
  },
  {
    "id": 267,
    "slug": "beautifly",
    "name": "Beautifly",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/267.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/267.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/beautifly",
    "stats": {
      "total": 395,
      "hp": 60,
      "attack": 70,
      "defense": 50,
      "spAttack": 100,
      "spDefense": 50,
      "speed": 65
    }
  },
  {
    "id": 268,
    "slug": "cascoon",
    "name": "Cascoon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/268.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/268.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cascoon",
    "stats": {
      "total": 205,
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "spAttack": 25,
      "spDefense": 25,
      "speed": 15
    }
  },
  {
    "id": 269,
    "slug": "dustox",
    "name": "Dustox",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/269.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/269.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dustox",
    "stats": {
      "total": 385,
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "spAttack": 50,
      "spDefense": 90,
      "speed": 65
    }
  },
  {
    "id": 270,
    "slug": "lotad",
    "name": "Lotad",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/270.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/270.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lotad",
    "stats": {
      "total": 220,
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 30
    }
  },
  {
    "id": 271,
    "slug": "lombre",
    "name": "Lombre",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/271.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/271.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lombre",
    "stats": {
      "total": 340,
      "hp": 60,
      "attack": 50,
      "defense": 50,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 50
    }
  },
  {
    "id": 272,
    "slug": "ludicolo",
    "name": "Ludicolo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/272.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/272.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ludicolo",
    "stats": {
      "total": 480,
      "hp": 80,
      "attack": 70,
      "defense": 70,
      "spAttack": 90,
      "spDefense": 100,
      "speed": 70
    }
  },
  {
    "id": 273,
    "slug": "seedot",
    "name": "Seedot",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/273.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/273.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/seedot",
    "stats": {
      "total": 220,
      "hp": 40,
      "attack": 40,
      "defense": 50,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 30
    }
  },
  {
    "id": 274,
    "slug": "nuzleaf",
    "name": "Nuzleaf",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/274.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/274.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/nuzleaf",
    "stats": {
      "total": 340,
      "hp": 70,
      "attack": 70,
      "defense": 40,
      "spAttack": 60,
      "spDefense": 40,
      "speed": 60
    }
  },
  {
    "id": 275,
    "slug": "shiftry",
    "name": "Shiftry",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/275.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/275.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shiftry",
    "stats": {
      "total": 480,
      "hp": 90,
      "attack": 100,
      "defense": 60,
      "spAttack": 90,
      "spDefense": 60,
      "speed": 80
    }
  },
  {
    "id": 276,
    "slug": "taillow",
    "name": "Taillow",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/276.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/276.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/taillow",
    "stats": {
      "total": 270,
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 85
    }
  },
  {
    "id": 277,
    "slug": "swellow",
    "name": "Swellow",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/277.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/277.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/swellow",
    "stats": {
      "total": 455,
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "spAttack": 75,
      "spDefense": 50,
      "speed": 125
    }
  },
  {
    "id": 278,
    "slug": "wingull",
    "name": "Wingull",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/278.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/278.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wingull",
    "stats": {
      "total": 270,
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "spAttack": 55,
      "spDefense": 30,
      "speed": 85
    }
  },
  {
    "id": 279,
    "slug": "pelipper",
    "name": "Pelipper",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/279.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/279.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pelipper",
    "stats": {
      "total": 440,
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "spAttack": 95,
      "spDefense": 70,
      "speed": 65
    }
  },
  {
    "id": 280,
    "slug": "ralts",
    "name": "Ralts",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/280.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/280.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ralts",
    "stats": {
      "total": 198,
      "hp": 28,
      "attack": 25,
      "defense": 25,
      "spAttack": 45,
      "spDefense": 35,
      "speed": 40
    }
  },
  {
    "id": 281,
    "slug": "kirlia",
    "name": "Kirlia",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/281.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/281.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kirlia",
    "stats": {
      "total": 278,
      "hp": 38,
      "attack": 35,
      "defense": 35,
      "spAttack": 65,
      "spDefense": 55,
      "speed": 50
    }
  },
  {
    "id": 282,
    "slug": "gardevoir",
    "name": "Gardevoir",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/282.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gardevoir",
    "stats": {
      "total": 518,
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "spAttack": 125,
      "spDefense": 115,
      "speed": 80
    }
  },
  {
    "id": 283,
    "slug": "surskit",
    "name": "Surskit",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/283.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/283.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/surskit",
    "stats": {
      "total": 269,
      "hp": 40,
      "attack": 30,
      "defense": 32,
      "spAttack": 50,
      "spDefense": 52,
      "speed": 65
    }
  },
  {
    "id": 284,
    "slug": "masquerain",
    "name": "Masquerain",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/284.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/284.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/masquerain",
    "stats": {
      "total": 454,
      "hp": 70,
      "attack": 60,
      "defense": 62,
      "spAttack": 100,
      "spDefense": 82,
      "speed": 80
    }
  },
  {
    "id": 285,
    "slug": "shroomish",
    "name": "Shroomish",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/285.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/285.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shroomish",
    "stats": {
      "total": 295,
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "spAttack": 40,
      "spDefense": 60,
      "speed": 35
    }
  },
  {
    "id": 286,
    "slug": "breloom",
    "name": "Breloom",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/286.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/286.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/breloom",
    "stats": {
      "total": 460,
      "hp": 60,
      "attack": 130,
      "defense": 80,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 70
    }
  },
  {
    "id": 287,
    "slug": "slakoth",
    "name": "Slakoth",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/287.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/287.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/slakoth",
    "stats": {
      "total": 280,
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 30
    }
  },
  {
    "id": 288,
    "slug": "vigoroth",
    "name": "Vigoroth",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/288.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/288.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/vigoroth",
    "stats": {
      "total": 440,
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "spAttack": 55,
      "spDefense": 55,
      "speed": 90
    }
  },
  {
    "id": 289,
    "slug": "slaking",
    "name": "Slaking",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/289.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/289.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/slaking",
    "stats": {
      "total": 670,
      "hp": 150,
      "attack": 160,
      "defense": 100,
      "spAttack": 95,
      "spDefense": 65,
      "speed": 100
    }
  },
  {
    "id": 290,
    "slug": "nincada",
    "name": "Nincada",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/290.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/290.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/nincada",
    "stats": {
      "total": 266,
      "hp": 31,
      "attack": 45,
      "defense": 90,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 40
    }
  },
  {
    "id": 291,
    "slug": "ninjask",
    "name": "Ninjask",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/291.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/291.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ninjask",
    "stats": {
      "total": 456,
      "hp": 61,
      "attack": 90,
      "defense": 45,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 160
    }
  },
  {
    "id": 292,
    "slug": "shedinja",
    "name": "Shedinja",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/292.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/292.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shedinja",
    "stats": {
      "total": 236,
      "hp": 1,
      "attack": 90,
      "defense": 45,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 40
    }
  },
  {
    "id": 293,
    "slug": "whismur",
    "name": "Whismur",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/293.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/293.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/whismur",
    "stats": {
      "total": 240,
      "hp": 64,
      "attack": 51,
      "defense": 23,
      "spAttack": 51,
      "spDefense": 23,
      "speed": 28
    }
  },
  {
    "id": 294,
    "slug": "loudred",
    "name": "Loudred",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/294.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/294.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/loudred",
    "stats": {
      "total": 360,
      "hp": 84,
      "attack": 71,
      "defense": 43,
      "spAttack": 71,
      "spDefense": 43,
      "speed": 48
    }
  },
  {
    "id": 295,
    "slug": "exploud",
    "name": "Exploud",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/295.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/295.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/exploud",
    "stats": {
      "total": 490,
      "hp": 104,
      "attack": 91,
      "defense": 63,
      "spAttack": 91,
      "spDefense": 73,
      "speed": 68
    }
  },
  {
    "id": 296,
    "slug": "makuhita",
    "name": "Makuhita",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/296.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/296.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/makuhita",
    "stats": {
      "total": 237,
      "hp": 72,
      "attack": 60,
      "defense": 30,
      "spAttack": 20,
      "spDefense": 30,
      "speed": 25
    }
  },
  {
    "id": 297,
    "slug": "hariyama",
    "name": "Hariyama",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/297.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/297.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hariyama",
    "stats": {
      "total": 474,
      "hp": 144,
      "attack": 120,
      "defense": 60,
      "spAttack": 40,
      "spDefense": 60,
      "speed": 50
    }
  },
  {
    "id": 298,
    "slug": "azurill",
    "name": "Azurill",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/298.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/298.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/azurill",
    "stats": {
      "total": 190,
      "hp": 50,
      "attack": 20,
      "defense": 40,
      "spAttack": 20,
      "spDefense": 40,
      "speed": 20
    }
  },
  {
    "id": 299,
    "slug": "nosepass",
    "name": "Nosepass",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/299.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/299.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/nosepass",
    "stats": {
      "total": 375,
      "hp": 30,
      "attack": 45,
      "defense": 135,
      "spAttack": 45,
      "spDefense": 90,
      "speed": 30
    }
  },
  {
    "id": 300,
    "slug": "skitty",
    "name": "Skitty",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/300.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/300.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/skitty",
    "stats": {
      "total": 260,
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 50
    }
  },
  {
    "id": 301,
    "slug": "delcatty",
    "name": "Delcatty",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/301.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/301.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/delcatty",
    "stats": {
      "total": 400,
      "hp": 70,
      "attack": 65,
      "defense": 65,
      "spAttack": 55,
      "spDefense": 55,
      "speed": 90
    }
  },
  {
    "id": 302,
    "slug": "sableye",
    "name": "Sableye",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/302.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/302.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sableye",
    "stats": {
      "total": 380,
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "spAttack": 65,
      "spDefense": 65,
      "speed": 50
    }
  },
  {
    "id": 303,
    "slug": "mawile",
    "name": "Mawile",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/303.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/303.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mawile",
    "stats": {
      "total": 380,
      "hp": 50,
      "attack": 85,
      "defense": 85,
      "spAttack": 55,
      "spDefense": 55,
      "speed": 50
    }
  },
  {
    "id": 304,
    "slug": "aron",
    "name": "Aron",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/304.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/304.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/aron",
    "stats": {
      "total": 330,
      "hp": 50,
      "attack": 70,
      "defense": 100,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 30
    }
  },
  {
    "id": 305,
    "slug": "lairon",
    "name": "Lairon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/305.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/305.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lairon",
    "stats": {
      "total": 430,
      "hp": 60,
      "attack": 90,
      "defense": 140,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 40
    }
  },
  {
    "id": 306,
    "slug": "aggron",
    "name": "Aggron",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/306.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/306.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/aggron",
    "stats": {
      "total": 530,
      "hp": 70,
      "attack": 110,
      "defense": 180,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 50
    }
  },
  {
    "id": 307,
    "slug": "meditite",
    "name": "Meditite",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/307.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/307.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/meditite",
    "stats": {
      "total": 280,
      "hp": 30,
      "attack": 40,
      "defense": 55,
      "spAttack": 40,
      "spDefense": 55,
      "speed": 60
    }
  },
  {
    "id": 308,
    "slug": "medicham",
    "name": "Medicham",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/308.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/308.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/medicham",
    "stats": {
      "total": 410,
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "spAttack": 60,
      "spDefense": 75,
      "speed": 80
    }
  },
  {
    "id": 309,
    "slug": "electrike",
    "name": "Electrike",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/309.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/309.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/electrike",
    "stats": {
      "total": 295,
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "spAttack": 65,
      "spDefense": 40,
      "speed": 65
    }
  },
  {
    "id": 310,
    "slug": "manectric",
    "name": "Manectric",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/310.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/310.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/manectric",
    "stats": {
      "total": 475,
      "hp": 70,
      "attack": 75,
      "defense": 60,
      "spAttack": 105,
      "spDefense": 60,
      "speed": 105
    }
  },
  {
    "id": 311,
    "slug": "plusle",
    "name": "Plusle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/311.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/311.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/plusle",
    "stats": {
      "total": 405,
      "hp": 60,
      "attack": 50,
      "defense": 40,
      "spAttack": 85,
      "spDefense": 75,
      "speed": 95
    }
  },
  {
    "id": 312,
    "slug": "minun",
    "name": "Minun",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/312.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/312.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/minun",
    "stats": {
      "total": 405,
      "hp": 60,
      "attack": 40,
      "defense": 50,
      "spAttack": 75,
      "spDefense": 85,
      "speed": 95
    }
  },
  {
    "id": 313,
    "slug": "volbeat",
    "name": "Volbeat",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/313.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/313.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/volbeat",
    "stats": {
      "total": 430,
      "hp": 65,
      "attack": 73,
      "defense": 75,
      "spAttack": 47,
      "spDefense": 85,
      "speed": 85
    }
  },
  {
    "id": 314,
    "slug": "illumise",
    "name": "Illumise",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/314.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/314.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/illumise",
    "stats": {
      "total": 430,
      "hp": 65,
      "attack": 47,
      "defense": 75,
      "spAttack": 73,
      "spDefense": 85,
      "speed": 85
    }
  },
  {
    "id": 315,
    "slug": "roselia",
    "name": "Roselia",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/315.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/315.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/roselia",
    "stats": {
      "total": 400,
      "hp": 50,
      "attack": 60,
      "defense": 45,
      "spAttack": 100,
      "spDefense": 80,
      "speed": 65
    }
  },
  {
    "id": 316,
    "slug": "gulpin",
    "name": "Gulpin",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/316.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/316.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gulpin",
    "stats": {
      "total": 302,
      "hp": 70,
      "attack": 43,
      "defense": 53,
      "spAttack": 43,
      "spDefense": 53,
      "speed": 40
    }
  },
  {
    "id": 317,
    "slug": "swalot",
    "name": "Swalot",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/317.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/317.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/swalot",
    "stats": {
      "total": 467,
      "hp": 100,
      "attack": 73,
      "defense": 83,
      "spAttack": 73,
      "spDefense": 83,
      "speed": 55
    }
  },
  {
    "id": 318,
    "slug": "carvanha",
    "name": "Carvanha",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/318.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/318.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/carvanha",
    "stats": {
      "total": 305,
      "hp": 45,
      "attack": 90,
      "defense": 20,
      "spAttack": 65,
      "spDefense": 20,
      "speed": 65
    }
  },
  {
    "id": 319,
    "slug": "sharpedo",
    "name": "Sharpedo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/319.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/319.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sharpedo",
    "stats": {
      "total": 460,
      "hp": 70,
      "attack": 120,
      "defense": 40,
      "spAttack": 95,
      "spDefense": 40,
      "speed": 95
    }
  },
  {
    "id": 320,
    "slug": "wailmer",
    "name": "Wailmer",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/320.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/320.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wailmer",
    "stats": {
      "total": 400,
      "hp": 130,
      "attack": 70,
      "defense": 35,
      "spAttack": 70,
      "spDefense": 35,
      "speed": 60
    }
  },
  {
    "id": 321,
    "slug": "wailord",
    "name": "Wailord",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/321.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/321.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wailord",
    "stats": {
      "total": 500,
      "hp": 170,
      "attack": 90,
      "defense": 45,
      "spAttack": 90,
      "spDefense": 45,
      "speed": 60
    }
  },
  {
    "id": 322,
    "slug": "numel",
    "name": "Numel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/322.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/322.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/numel",
    "stats": {
      "total": 305,
      "hp": 60,
      "attack": 60,
      "defense": 40,
      "spAttack": 65,
      "spDefense": 45,
      "speed": 35
    }
  },
  {
    "id": 323,
    "slug": "camerupt",
    "name": "Camerupt",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/323.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/323.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/camerupt",
    "stats": {
      "total": 460,
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "spAttack": 105,
      "spDefense": 75,
      "speed": 40
    }
  },
  {
    "id": 324,
    "slug": "torkoal",
    "name": "Torkoal",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/324.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/324.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/torkoal",
    "stats": {
      "total": 470,
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "spAttack": 85,
      "spDefense": 70,
      "speed": 20
    }
  },
  {
    "id": 325,
    "slug": "spoink",
    "name": "Spoink",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/325.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/325.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/spoink",
    "stats": {
      "total": 330,
      "hp": 60,
      "attack": 25,
      "defense": 35,
      "spAttack": 70,
      "spDefense": 80,
      "speed": 60
    }
  },
  {
    "id": 326,
    "slug": "grumpig",
    "name": "Grumpig",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/326.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/326.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/grumpig",
    "stats": {
      "total": 470,
      "hp": 80,
      "attack": 45,
      "defense": 65,
      "spAttack": 90,
      "spDefense": 110,
      "speed": 80
    }
  },
  {
    "id": 327,
    "slug": "spinda",
    "name": "Spinda",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/327.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/327.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/spinda",
    "stats": {
      "total": 360,
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 60
    }
  },
  {
    "id": 328,
    "slug": "trapinch",
    "name": "Trapinch",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/328.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/328.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/trapinch",
    "stats": {
      "total": 290,
      "hp": 45,
      "attack": 100,
      "defense": 45,
      "spAttack": 45,
      "spDefense": 45,
      "speed": 10
    }
  },
  {
    "id": 329,
    "slug": "vibrava",
    "name": "Vibrava",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/329.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/329.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/vibrava",
    "stats": {
      "total": 340,
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 70
    }
  },
  {
    "id": 330,
    "slug": "flygon",
    "name": "Flygon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/330.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/330.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/flygon",
    "stats": {
      "total": 520,
      "hp": 80,
      "attack": 100,
      "defense": 80,
      "spAttack": 80,
      "spDefense": 80,
      "speed": 100
    }
  },
  {
    "id": 331,
    "slug": "cacnea",
    "name": "Cacnea",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/331.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/331.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cacnea",
    "stats": {
      "total": 335,
      "hp": 50,
      "attack": 85,
      "defense": 40,
      "spAttack": 85,
      "spDefense": 40,
      "speed": 35
    }
  },
  {
    "id": 332,
    "slug": "cacturne",
    "name": "Cacturne",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/332.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/332.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cacturne",
    "stats": {
      "total": 475,
      "hp": 70,
      "attack": 115,
      "defense": 60,
      "spAttack": 115,
      "spDefense": 60,
      "speed": 55
    }
  },
  {
    "id": 333,
    "slug": "swablu",
    "name": "Swablu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/333.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/333.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/swablu",
    "stats": {
      "total": 310,
      "hp": 45,
      "attack": 40,
      "defense": 60,
      "spAttack": 40,
      "spDefense": 75,
      "speed": 50
    }
  },
  {
    "id": 334,
    "slug": "altaria",
    "name": "Altaria",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/334.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/334.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/altaria",
    "stats": {
      "total": 490,
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "spAttack": 70,
      "spDefense": 105,
      "speed": 80
    }
  },
  {
    "id": 335,
    "slug": "zangoose",
    "name": "Zangoose",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/335.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/335.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zangoose",
    "stats": {
      "total": 458,
      "hp": 73,
      "attack": 115,
      "defense": 60,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 90
    }
  },
  {
    "id": 336,
    "slug": "seviper",
    "name": "Seviper",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/336.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/336.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/seviper",
    "stats": {
      "total": 458,
      "hp": 73,
      "attack": 100,
      "defense": 60,
      "spAttack": 100,
      "spDefense": 60,
      "speed": 65
    }
  },
  {
    "id": 337,
    "slug": "lunatone",
    "name": "Lunatone",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/337.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/337.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lunatone",
    "stats": {
      "total": 460,
      "hp": 90,
      "attack": 55,
      "defense": 65,
      "spAttack": 95,
      "spDefense": 85,
      "speed": 70
    }
  },
  {
    "id": 338,
    "slug": "solrock",
    "name": "Solrock",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/338.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/338.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/solrock",
    "stats": {
      "total": 460,
      "hp": 90,
      "attack": 95,
      "defense": 85,
      "spAttack": 55,
      "spDefense": 65,
      "speed": 70
    }
  },
  {
    "id": 339,
    "slug": "barboach",
    "name": "Barboach",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/339.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/339.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/barboach",
    "stats": {
      "total": 288,
      "hp": 50,
      "attack": 48,
      "defense": 43,
      "spAttack": 46,
      "spDefense": 41,
      "speed": 60
    }
  },
  {
    "id": 340,
    "slug": "whiscash",
    "name": "Whiscash",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/340.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/340.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/whiscash",
    "stats": {
      "total": 468,
      "hp": 110,
      "attack": 78,
      "defense": 73,
      "spAttack": 76,
      "spDefense": 71,
      "speed": 60
    }
  },
  {
    "id": 341,
    "slug": "corphish",
    "name": "Corphish",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/341.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/341.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/corphish",
    "stats": {
      "total": 308,
      "hp": 43,
      "attack": 80,
      "defense": 65,
      "spAttack": 50,
      "spDefense": 35,
      "speed": 35
    }
  },
  {
    "id": 342,
    "slug": "crawdaunt",
    "name": "Crawdaunt",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/342.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/342.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/crawdaunt",
    "stats": {
      "total": 468,
      "hp": 63,
      "attack": 120,
      "defense": 85,
      "spAttack": 90,
      "spDefense": 55,
      "speed": 55
    }
  },
  {
    "id": 343,
    "slug": "baltoy",
    "name": "Baltoy",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/343.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/343.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/baltoy",
    "stats": {
      "total": 300,
      "hp": 40,
      "attack": 40,
      "defense": 55,
      "spAttack": 40,
      "spDefense": 70,
      "speed": 55
    }
  },
  {
    "id": 344,
    "slug": "claydol",
    "name": "Claydol",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/344.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/344.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/claydol",
    "stats": {
      "total": 500,
      "hp": 60,
      "attack": 70,
      "defense": 105,
      "spAttack": 70,
      "spDefense": 120,
      "speed": 75
    }
  },
  {
    "id": 345,
    "slug": "lileep",
    "name": "Lileep",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/345.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/345.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lileep",
    "stats": {
      "total": 355,
      "hp": 66,
      "attack": 41,
      "defense": 77,
      "spAttack": 61,
      "spDefense": 87,
      "speed": 23
    }
  },
  {
    "id": 346,
    "slug": "cradily",
    "name": "Cradily",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/346.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/346.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cradily",
    "stats": {
      "total": 495,
      "hp": 86,
      "attack": 81,
      "defense": 97,
      "spAttack": 81,
      "spDefense": 107,
      "speed": 43
    }
  },
  {
    "id": 347,
    "slug": "anorith",
    "name": "Anorith",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/347.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/347.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/anorith",
    "stats": {
      "total": 355,
      "hp": 45,
      "attack": 95,
      "defense": 50,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 75
    }
  },
  {
    "id": 348,
    "slug": "armaldo",
    "name": "Armaldo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/348.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/348.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/armaldo",
    "stats": {
      "total": 495,
      "hp": 75,
      "attack": 125,
      "defense": 100,
      "spAttack": 70,
      "spDefense": 80,
      "speed": 45
    }
  },
  {
    "id": 349,
    "slug": "feebas",
    "name": "Feebas",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/349.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/349.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/feebas",
    "stats": {
      "total": 200,
      "hp": 20,
      "attack": 15,
      "defense": 20,
      "spAttack": 10,
      "spDefense": 55,
      "speed": 80
    }
  },
  {
    "id": 350,
    "slug": "milotic",
    "name": "Milotic",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/350.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/350.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/milotic",
    "stats": {
      "total": 540,
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "spAttack": 100,
      "spDefense": 125,
      "speed": 81
    }
  },
  {
    "id": 351,
    "slug": "castform",
    "name": "Castform",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/351.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/351.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/castform",
    "stats": {
      "total": 420,
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "spAttack": 70,
      "spDefense": 70,
      "speed": 70
    }
  },
  {
    "id": 352,
    "slug": "kecleon",
    "name": "Kecleon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/352.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/352.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kecleon",
    "stats": {
      "total": 440,
      "hp": 60,
      "attack": 90,
      "defense": 70,
      "spAttack": 60,
      "spDefense": 120,
      "speed": 40
    }
  },
  {
    "id": 353,
    "slug": "shuppet",
    "name": "Shuppet",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/353.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/353.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shuppet",
    "stats": {
      "total": 295,
      "hp": 44,
      "attack": 75,
      "defense": 35,
      "spAttack": 63,
      "spDefense": 33,
      "speed": 45
    }
  },
  {
    "id": 354,
    "slug": "banette",
    "name": "Banette",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/354.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/354.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/banette",
    "stats": {
      "total": 455,
      "hp": 64,
      "attack": 115,
      "defense": 65,
      "spAttack": 83,
      "spDefense": 63,
      "speed": 65
    }
  },
  {
    "id": 355,
    "slug": "duskull",
    "name": "Duskull",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/355.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/355.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/duskull",
    "stats": {
      "total": 295,
      "hp": 20,
      "attack": 40,
      "defense": 90,
      "spAttack": 30,
      "spDefense": 90,
      "speed": 25
    }
  },
  {
    "id": 356,
    "slug": "dusclops",
    "name": "Dusclops",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/356.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/356.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dusclops",
    "stats": {
      "total": 455,
      "hp": 40,
      "attack": 70,
      "defense": 130,
      "spAttack": 60,
      "spDefense": 130,
      "speed": 25
    }
  },
  {
    "id": 357,
    "slug": "tropius",
    "name": "Tropius",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/357.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/357.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tropius",
    "stats": {
      "total": 460,
      "hp": 99,
      "attack": 68,
      "defense": 83,
      "spAttack": 72,
      "spDefense": 87,
      "speed": 51
    }
  },
  {
    "id": 358,
    "slug": "chimecho",
    "name": "Chimecho",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/358.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/358.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/chimecho",
    "stats": {
      "total": 455,
      "hp": 75,
      "attack": 50,
      "defense": 80,
      "spAttack": 95,
      "spDefense": 90,
      "speed": 65
    }
  },
  {
    "id": 359,
    "slug": "absol",
    "name": "Absol",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/359.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/absol",
    "stats": {
      "total": 465,
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "spAttack": 75,
      "spDefense": 60,
      "speed": 75
    }
  },
  {
    "id": 360,
    "slug": "wynaut",
    "name": "Wynaut",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/360.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/360.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wynaut",
    "stats": {
      "total": 260,
      "hp": 95,
      "attack": 23,
      "defense": 48,
      "spAttack": 23,
      "spDefense": 48,
      "speed": 23
    }
  },
  {
    "id": 361,
    "slug": "snorunt",
    "name": "Snorunt",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/361.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/361.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/snorunt",
    "stats": {
      "total": 300,
      "hp": 50,
      "attack": 50,
      "defense": 50,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 50
    }
  },
  {
    "id": 362,
    "slug": "glalie",
    "name": "Glalie",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/362.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/362.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/glalie",
    "stats": {
      "total": 480,
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "spAttack": 80,
      "spDefense": 80,
      "speed": 80
    }
  },
  {
    "id": 363,
    "slug": "spheal",
    "name": "Spheal",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/363.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/363.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/spheal",
    "stats": {
      "total": 290,
      "hp": 70,
      "attack": 40,
      "defense": 50,
      "spAttack": 55,
      "spDefense": 50,
      "speed": 25
    }
  },
  {
    "id": 364,
    "slug": "sealeo",
    "name": "Sealeo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/364.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/364.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sealeo",
    "stats": {
      "total": 410,
      "hp": 90,
      "attack": 60,
      "defense": 70,
      "spAttack": 75,
      "spDefense": 70,
      "speed": 45
    }
  },
  {
    "id": 365,
    "slug": "walrein",
    "name": "Walrein",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/365.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/365.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/walrein",
    "stats": {
      "total": 530,
      "hp": 110,
      "attack": 80,
      "defense": 90,
      "spAttack": 95,
      "spDefense": 90,
      "speed": 65
    }
  },
  {
    "id": 366,
    "slug": "clamperl",
    "name": "Clamperl",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/366.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/366.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/clamperl",
    "stats": {
      "total": 345,
      "hp": 35,
      "attack": 64,
      "defense": 85,
      "spAttack": 74,
      "spDefense": 55,
      "speed": 32
    }
  },
  {
    "id": 367,
    "slug": "huntail",
    "name": "Huntail",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/367.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/367.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/huntail",
    "stats": {
      "total": 485,
      "hp": 55,
      "attack": 104,
      "defense": 105,
      "spAttack": 94,
      "spDefense": 75,
      "speed": 52
    }
  },
  {
    "id": 368,
    "slug": "gorebyss",
    "name": "Gorebyss",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/368.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/368.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gorebyss",
    "stats": {
      "total": 485,
      "hp": 55,
      "attack": 84,
      "defense": 105,
      "spAttack": 114,
      "spDefense": 75,
      "speed": 52
    }
  },
  {
    "id": 369,
    "slug": "relicanth",
    "name": "Relicanth",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/369.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/369.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/relicanth",
    "stats": {
      "total": 485,
      "hp": 100,
      "attack": 90,
      "defense": 130,
      "spAttack": 45,
      "spDefense": 65,
      "speed": 55
    }
  },
  {
    "id": 370,
    "slug": "luvdisc",
    "name": "Luvdisc",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/370.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/370.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/luvdisc",
    "stats": {
      "total": 330,
      "hp": 43,
      "attack": 30,
      "defense": 55,
      "spAttack": 40,
      "spDefense": 65,
      "speed": 97
    }
  },
  {
    "id": 371,
    "slug": "bagon",
    "name": "Bagon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/371.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/371.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bagon",
    "stats": {
      "total": 300,
      "hp": 45,
      "attack": 75,
      "defense": 60,
      "spAttack": 40,
      "spDefense": 30,
      "speed": 50
    }
  },
  {
    "id": 372,
    "slug": "shelgon",
    "name": "Shelgon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/372.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/372.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shelgon",
    "stats": {
      "total": 420,
      "hp": 65,
      "attack": 95,
      "defense": 100,
      "spAttack": 60,
      "spDefense": 50,
      "speed": 50
    }
  },
  {
    "id": 373,
    "slug": "salamence",
    "name": "Salamence",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/373.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/salamence",
    "stats": {
      "total": 600,
      "hp": 95,
      "attack": 135,
      "defense": 80,
      "spAttack": 110,
      "spDefense": 80,
      "speed": 100
    }
  },
  {
    "id": 374,
    "slug": "beldum",
    "name": "Beldum",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/374.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/374.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/beldum",
    "stats": {
      "total": 300,
      "hp": 40,
      "attack": 55,
      "defense": 80,
      "spAttack": 35,
      "spDefense": 60,
      "speed": 30
    }
  },
  {
    "id": 375,
    "slug": "metang",
    "name": "Metang",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/375.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/375.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/metang",
    "stats": {
      "total": 420,
      "hp": 60,
      "attack": 75,
      "defense": 100,
      "spAttack": 55,
      "spDefense": 80,
      "speed": 50
    }
  },
  {
    "id": 376,
    "slug": "metagross",
    "name": "Metagross",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/376.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/metagross",
    "stats": {
      "total": 600,
      "hp": 80,
      "attack": 135,
      "defense": 130,
      "spAttack": 95,
      "spDefense": 90,
      "speed": 70
    }
  },
  {
    "id": 377,
    "slug": "regirock",
    "name": "Regirock",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/377.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/377.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/regirock",
    "stats": {
      "total": 580,
      "hp": 80,
      "attack": 100,
      "defense": 200,
      "spAttack": 50,
      "spDefense": 100,
      "speed": 50
    }
  },
  {
    "id": 378,
    "slug": "regice",
    "name": "Regice",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/378.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/378.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/regice",
    "stats": {
      "total": 580,
      "hp": 80,
      "attack": 50,
      "defense": 100,
      "spAttack": 100,
      "spDefense": 200,
      "speed": 50
    }
  },
  {
    "id": 379,
    "slug": "registeel",
    "name": "Registeel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/379.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/379.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/registeel",
    "stats": {
      "total": 580,
      "hp": 80,
      "attack": 75,
      "defense": 150,
      "spAttack": 75,
      "spDefense": 150,
      "speed": 50
    }
  },
  {
    "id": 380,
    "slug": "latias",
    "name": "Latias",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/380.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/380.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/latias",
    "stats": {
      "total": 600,
      "hp": 80,
      "attack": 80,
      "defense": 90,
      "spAttack": 110,
      "spDefense": 130,
      "speed": 110
    }
  },
  {
    "id": 381,
    "slug": "latios",
    "name": "Latios",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/381.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/381.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/latios",
    "stats": {
      "total": 600,
      "hp": 80,
      "attack": 90,
      "defense": 80,
      "spAttack": 130,
      "spDefense": 110,
      "speed": 110
    }
  },
  {
    "id": 382,
    "slug": "kyogre",
    "name": "Kyogre",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/382.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kyogre",
    "stats": {
      "total": 670,
      "hp": 100,
      "attack": 100,
      "defense": 90,
      "spAttack": 150,
      "spDefense": 140,
      "speed": 90
    }
  },
  {
    "id": 383,
    "slug": "groudon",
    "name": "Groudon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/383.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/383.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/groudon",
    "stats": {
      "total": 670,
      "hp": 100,
      "attack": 150,
      "defense": 140,
      "spAttack": 100,
      "spDefense": 90,
      "speed": 90
    }
  },
  {
    "id": 384,
    "slug": "rayquaza",
    "name": "Rayquaza",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/384.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rayquaza",
    "stats": {
      "total": 680,
      "hp": 105,
      "attack": 150,
      "defense": 90,
      "spAttack": 150,
      "spDefense": 90,
      "speed": 95
    }
  },
  {
    "id": 385,
    "slug": "jirachi",
    "name": "Jirachi",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/385.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/385.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/jirachi",
    "stats": {
      "total": 600,
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "spAttack": 100,
      "spDefense": 100,
      "speed": 100
    }
  },
  {
    "id": 386,
    "slug": "deoxys",
    "name": "Deoxys",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/386.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/386.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/deoxys",
    "stats": {
      "total": 600,
      "hp": 50,
      "attack": 150,
      "defense": 50,
      "spAttack": 150,
      "spDefense": 50,
      "speed": 150
    }
  },
  {
    "id": 387,
    "slug": "turtwig",
    "name": "Turtwig",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/387.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/turtwig",
    "stats": {
      "total": 318,
      "hp": 55,
      "attack": 68,
      "defense": 64,
      "spAttack": 45,
      "spDefense": 55,
      "speed": 31
    }
  },
  {
    "id": 388,
    "slug": "grotle",
    "name": "Grotle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/388.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/388.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/grotle",
    "stats": {
      "total": 405,
      "hp": 75,
      "attack": 89,
      "defense": 85,
      "spAttack": 55,
      "spDefense": 65,
      "speed": 36
    }
  },
  {
    "id": 389,
    "slug": "torterra",
    "name": "Torterra",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/389.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/389.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/torterra",
    "stats": {
      "total": 525,
      "hp": 95,
      "attack": 109,
      "defense": 105,
      "spAttack": 75,
      "spDefense": 85,
      "speed": 56
    }
  },
  {
    "id": 390,
    "slug": "chimchar",
    "name": "Chimchar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/390.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/390.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/chimchar",
    "stats": {
      "total": 309,
      "hp": 44,
      "attack": 58,
      "defense": 44,
      "spAttack": 58,
      "spDefense": 44,
      "speed": 61
    }
  },
  {
    "id": 391,
    "slug": "monferno",
    "name": "Monferno",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/391.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/391.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/monferno",
    "stats": {
      "total": 405,
      "hp": 64,
      "attack": 78,
      "defense": 52,
      "spAttack": 78,
      "spDefense": 52,
      "speed": 81
    }
  },
  {
    "id": 392,
    "slug": "infernape",
    "name": "Infernape",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/392.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/392.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/infernape",
    "stats": {
      "total": 534,
      "hp": 76,
      "attack": 104,
      "defense": 71,
      "spAttack": 104,
      "spDefense": 71,
      "speed": 108
    }
  },
  {
    "id": 393,
    "slug": "piplup",
    "name": "Piplup",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/393.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/393.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/piplup",
    "stats": {
      "total": 314,
      "hp": 53,
      "attack": 51,
      "defense": 53,
      "spAttack": 61,
      "spDefense": 56,
      "speed": 40
    }
  },
  {
    "id": 394,
    "slug": "prinplup",
    "name": "Prinplup",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/394.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/394.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/prinplup",
    "stats": {
      "total": 405,
      "hp": 64,
      "attack": 66,
      "defense": 68,
      "spAttack": 81,
      "spDefense": 76,
      "speed": 50
    }
  },
  {
    "id": 395,
    "slug": "empoleon",
    "name": "Empoleon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/395.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/395.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/empoleon",
    "stats": {
      "total": 530,
      "hp": 84,
      "attack": 86,
      "defense": 88,
      "spAttack": 111,
      "spDefense": 101,
      "speed": 60
    }
  },
  {
    "id": 396,
    "slug": "starly",
    "name": "Starly",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/396.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/396.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/starly",
    "stats": {
      "total": 245,
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 60
    }
  },
  {
    "id": 397,
    "slug": "staravia",
    "name": "Staravia",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/397.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/397.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/staravia",
    "stats": {
      "total": 340,
      "hp": 55,
      "attack": 75,
      "defense": 50,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 80
    }
  },
  {
    "id": 398,
    "slug": "staraptor",
    "name": "Staraptor",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/398.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/398.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/staraptor",
    "stats": {
      "total": 485,
      "hp": 85,
      "attack": 120,
      "defense": 70,
      "spAttack": 50,
      "spDefense": 60,
      "speed": 100
    }
  },
  {
    "id": 399,
    "slug": "bidoof",
    "name": "Bidoof",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/399.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/399.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bidoof",
    "stats": {
      "total": 250,
      "hp": 59,
      "attack": 45,
      "defense": 40,
      "spAttack": 35,
      "spDefense": 40,
      "speed": 31
    }
  },
  {
    "id": 400,
    "slug": "bibarel",
    "name": "Bibarel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/400.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/400.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bibarel",
    "stats": {
      "total": 410,
      "hp": 79,
      "attack": 85,
      "defense": 60,
      "spAttack": 55,
      "spDefense": 60,
      "speed": 71
    }
  },
  {
    "id": 401,
    "slug": "kricketot",
    "name": "Kricketot",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/401.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/401.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kricketot",
    "stats": {
      "total": 194,
      "hp": 37,
      "attack": 25,
      "defense": 41,
      "spAttack": 25,
      "spDefense": 41,
      "speed": 25
    }
  },
  {
    "id": 402,
    "slug": "kricketune",
    "name": "Kricketune",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/402.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/402.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kricketune",
    "stats": {
      "total": 384,
      "hp": 77,
      "attack": 85,
      "defense": 51,
      "spAttack": 55,
      "spDefense": 51,
      "speed": 65
    }
  },
  {
    "id": 403,
    "slug": "shinx",
    "name": "Shinx",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/403.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/403.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shinx",
    "stats": {
      "total": 263,
      "hp": 45,
      "attack": 65,
      "defense": 34,
      "spAttack": 40,
      "spDefense": 34,
      "speed": 45
    }
  },
  {
    "id": 404,
    "slug": "luxio",
    "name": "Luxio",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/404.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/404.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/luxio",
    "stats": {
      "total": 363,
      "hp": 60,
      "attack": 85,
      "defense": 49,
      "spAttack": 60,
      "spDefense": 49,
      "speed": 60
    }
  },
  {
    "id": 405,
    "slug": "luxray",
    "name": "Luxray",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/405.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/405.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/luxray",
    "stats": {
      "total": 523,
      "hp": 80,
      "attack": 120,
      "defense": 79,
      "spAttack": 95,
      "spDefense": 79,
      "speed": 70
    }
  },
  {
    "id": 406,
    "slug": "budew",
    "name": "Budew",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/406.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/406.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/budew",
    "stats": {
      "total": 280,
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "spAttack": 50,
      "spDefense": 70,
      "speed": 55
    }
  },
  {
    "id": 407,
    "slug": "roserade",
    "name": "Roserade",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/407.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/407.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/roserade",
    "stats": {
      "total": 515,
      "hp": 60,
      "attack": 70,
      "defense": 65,
      "spAttack": 125,
      "spDefense": 105,
      "speed": 90
    }
  },
  {
    "id": 408,
    "slug": "cranidos",
    "name": "Cranidos",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/408.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/408.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cranidos",
    "stats": {
      "total": 350,
      "hp": 67,
      "attack": 125,
      "defense": 40,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 58
    }
  },
  {
    "id": 409,
    "slug": "rampardos",
    "name": "Rampardos",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/409.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/409.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rampardos",
    "stats": {
      "total": 495,
      "hp": 97,
      "attack": 165,
      "defense": 60,
      "spAttack": 65,
      "spDefense": 50,
      "speed": 58
    }
  },
  {
    "id": 410,
    "slug": "shieldon",
    "name": "Shieldon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/410.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/410.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shieldon",
    "stats": {
      "total": 350,
      "hp": 30,
      "attack": 42,
      "defense": 118,
      "spAttack": 42,
      "spDefense": 88,
      "speed": 30
    }
  },
  {
    "id": 411,
    "slug": "bastiodon",
    "name": "Bastiodon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/411.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/411.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bastiodon",
    "stats": {
      "total": 495,
      "hp": 60,
      "attack": 52,
      "defense": 168,
      "spAttack": 47,
      "spDefense": 138,
      "speed": 30
    }
  },
  {
    "id": 412,
    "slug": "burmy",
    "name": "Burmy",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/412.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/412.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/burmy",
    "stats": {
      "total": 224,
      "hp": 40,
      "attack": 29,
      "defense": 45,
      "spAttack": 29,
      "spDefense": 45,
      "speed": 36
    }
  },
  {
    "id": 413,
    "slug": "wormadam",
    "name": "Wormadam",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/413.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/413.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wormadam",
    "stats": {
      "total": 424,
      "hp": 60,
      "attack": 59,
      "defense": 85,
      "spAttack": 79,
      "spDefense": 105,
      "speed": 36
    }
  },
  {
    "id": 414,
    "slug": "mothim",
    "name": "Mothim",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/414.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/414.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mothim",
    "stats": {
      "total": 424,
      "hp": 70,
      "attack": 94,
      "defense": 50,
      "spAttack": 94,
      "spDefense": 50,
      "speed": 66
    }
  },
  {
    "id": 415,
    "slug": "combee",
    "name": "Combee",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/415.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/415.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/combee",
    "stats": {
      "total": 244,
      "hp": 30,
      "attack": 30,
      "defense": 42,
      "spAttack": 30,
      "spDefense": 42,
      "speed": 70
    }
  },
  {
    "id": 416,
    "slug": "vespiquen",
    "name": "Vespiquen",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/416.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/416.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/vespiquen",
    "stats": {
      "total": 474,
      "hp": 70,
      "attack": 80,
      "defense": 102,
      "spAttack": 80,
      "spDefense": 102,
      "speed": 40
    }
  },
  {
    "id": 417,
    "slug": "pachirisu",
    "name": "Pachirisu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/417.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/417.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pachirisu",
    "stats": {
      "total": 405,
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "spAttack": 45,
      "spDefense": 90,
      "speed": 95
    }
  },
  {
    "id": 418,
    "slug": "buizel",
    "name": "Buizel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/418.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/418.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/buizel",
    "stats": {
      "total": 330,
      "hp": 55,
      "attack": 65,
      "defense": 35,
      "spAttack": 60,
      "spDefense": 30,
      "speed": 85
    }
  },
  {
    "id": 419,
    "slug": "floatzel",
    "name": "Floatzel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/419.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/419.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/floatzel",
    "stats": {
      "total": 495,
      "hp": 85,
      "attack": 105,
      "defense": 55,
      "spAttack": 85,
      "spDefense": 50,
      "speed": 115
    }
  },
  {
    "id": 420,
    "slug": "cherubi",
    "name": "Cherubi",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/420.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/420.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cherubi",
    "stats": {
      "total": 275,
      "hp": 45,
      "attack": 35,
      "defense": 45,
      "spAttack": 62,
      "spDefense": 53,
      "speed": 35
    }
  },
  {
    "id": 421,
    "slug": "cherrim",
    "name": "Cherrim",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/421.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/421.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cherrim",
    "stats": {
      "total": 450,
      "hp": 70,
      "attack": 60,
      "defense": 70,
      "spAttack": 87,
      "spDefense": 78,
      "speed": 85
    }
  },
  {
    "id": 422,
    "slug": "shellos",
    "name": "Shellos",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/422.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/422.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shellos",
    "stats": {
      "total": 325,
      "hp": 76,
      "attack": 48,
      "defense": 48,
      "spAttack": 57,
      "spDefense": 62,
      "speed": 34
    }
  },
  {
    "id": 423,
    "slug": "gastrodon",
    "name": "Gastrodon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/423.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/423.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gastrodon",
    "stats": {
      "total": 475,
      "hp": 111,
      "attack": 83,
      "defense": 68,
      "spAttack": 92,
      "spDefense": 82,
      "speed": 39
    }
  },
  {
    "id": 424,
    "slug": "ambipom",
    "name": "Ambipom",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/424.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/424.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ambipom",
    "stats": {
      "total": 482,
      "hp": 75,
      "attack": 100,
      "defense": 66,
      "spAttack": 60,
      "spDefense": 66,
      "speed": 115
    }
  },
  {
    "id": 425,
    "slug": "drifloon",
    "name": "Drifloon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/425.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/425.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/drifloon",
    "stats": {
      "total": 348,
      "hp": 90,
      "attack": 50,
      "defense": 34,
      "spAttack": 60,
      "spDefense": 44,
      "speed": 70
    }
  },
  {
    "id": 426,
    "slug": "drifblim",
    "name": "Drifblim",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/426.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/426.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/drifblim",
    "stats": {
      "total": 498,
      "hp": 150,
      "attack": 80,
      "defense": 44,
      "spAttack": 90,
      "spDefense": 54,
      "speed": 80
    }
  },
  {
    "id": 427,
    "slug": "buneary",
    "name": "Buneary",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/427.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/427.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/buneary",
    "stats": {
      "total": 350,
      "hp": 55,
      "attack": 66,
      "defense": 44,
      "spAttack": 44,
      "spDefense": 56,
      "speed": 85
    }
  },
  {
    "id": 428,
    "slug": "lopunny",
    "name": "Lopunny",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/428.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/428.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lopunny",
    "stats": {
      "total": 480,
      "hp": 65,
      "attack": 76,
      "defense": 84,
      "spAttack": 54,
      "spDefense": 96,
      "speed": 105
    }
  },
  {
    "id": 429,
    "slug": "mismagius",
    "name": "Mismagius",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/429.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/429.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mismagius",
    "stats": {
      "total": 495,
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "spAttack": 105,
      "spDefense": 105,
      "speed": 105
    }
  },
  {
    "id": 430,
    "slug": "honchkrow",
    "name": "Honchkrow",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/430.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/430.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/honchkrow",
    "stats": {
      "total": 505,
      "hp": 100,
      "attack": 125,
      "defense": 52,
      "spAttack": 105,
      "spDefense": 52,
      "speed": 71
    }
  },
  {
    "id": 431,
    "slug": "glameow",
    "name": "Glameow",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/431.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/431.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/glameow",
    "stats": {
      "total": 310,
      "hp": 49,
      "attack": 55,
      "defense": 42,
      "spAttack": 42,
      "spDefense": 37,
      "speed": 85
    }
  },
  {
    "id": 432,
    "slug": "purugly",
    "name": "Purugly",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/432.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/432.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/purugly",
    "stats": {
      "total": 452,
      "hp": 71,
      "attack": 82,
      "defense": 64,
      "spAttack": 64,
      "spDefense": 59,
      "speed": 112
    }
  },
  {
    "id": 433,
    "slug": "chingling",
    "name": "Chingling",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/433.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/433.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/chingling",
    "stats": {
      "total": 285,
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "spAttack": 65,
      "spDefense": 50,
      "speed": 45
    }
  },
  {
    "id": 434,
    "slug": "stunky",
    "name": "Stunky",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/434.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/434.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/stunky",
    "stats": {
      "total": 329,
      "hp": 63,
      "attack": 63,
      "defense": 47,
      "spAttack": 41,
      "spDefense": 41,
      "speed": 74
    }
  },
  {
    "id": 435,
    "slug": "skuntank",
    "name": "Skuntank",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/435.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/435.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/skuntank",
    "stats": {
      "total": 479,
      "hp": 103,
      "attack": 93,
      "defense": 67,
      "spAttack": 71,
      "spDefense": 61,
      "speed": 84
    }
  },
  {
    "id": 436,
    "slug": "bronzor",
    "name": "Bronzor",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/436.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/436.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bronzor",
    "stats": {
      "total": 300,
      "hp": 57,
      "attack": 24,
      "defense": 86,
      "spAttack": 24,
      "spDefense": 86,
      "speed": 23
    }
  },
  {
    "id": 437,
    "slug": "bronzong",
    "name": "Bronzong",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/437.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/437.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bronzong",
    "stats": {
      "total": 500,
      "hp": 67,
      "attack": 89,
      "defense": 116,
      "spAttack": 79,
      "spDefense": 116,
      "speed": 33
    }
  },
  {
    "id": 438,
    "slug": "bonsly",
    "name": "Bonsly",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/438.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/438.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bonsly",
    "stats": {
      "total": 290,
      "hp": 50,
      "attack": 80,
      "defense": 95,
      "spAttack": 10,
      "spDefense": 45,
      "speed": 10
    }
  },
  {
    "id": 439,
    "slug": "mime-jr",
    "name": "Mime Jr.",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/439.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/439.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mime-jr",
    "stats": {
      "total": 310,
      "hp": 20,
      "attack": 25,
      "defense": 45,
      "spAttack": 70,
      "spDefense": 90,
      "speed": 60
    }
  },
  {
    "id": 440,
    "slug": "happiny",
    "name": "Happiny",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/440.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/440.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/happiny",
    "stats": {
      "total": 220,
      "hp": 100,
      "attack": 5,
      "defense": 5,
      "spAttack": 15,
      "spDefense": 65,
      "speed": 30
    }
  },
  {
    "id": 441,
    "slug": "chatot",
    "name": "Chatot",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/441.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/441.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/chatot",
    "stats": {
      "total": 411,
      "hp": 76,
      "attack": 65,
      "defense": 45,
      "spAttack": 92,
      "spDefense": 42,
      "speed": 91
    }
  },
  {
    "id": 442,
    "slug": "spiritomb",
    "name": "Spiritomb",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/442.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/442.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/spiritomb",
    "stats": {
      "total": 485,
      "hp": 50,
      "attack": 92,
      "defense": 108,
      "spAttack": 92,
      "spDefense": 108,
      "speed": 35
    }
  },
  {
    "id": 443,
    "slug": "gible",
    "name": "Gible",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/443.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/443.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gible",
    "stats": {
      "total": 300,
      "hp": 58,
      "attack": 70,
      "defense": 45,
      "spAttack": 40,
      "spDefense": 45,
      "speed": 42
    }
  },
  {
    "id": 444,
    "slug": "gabite",
    "name": "Gabite",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/444.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/444.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gabite",
    "stats": {
      "total": 410,
      "hp": 68,
      "attack": 90,
      "defense": 65,
      "spAttack": 50,
      "spDefense": 55,
      "speed": 82
    }
  },
  {
    "id": 445,
    "slug": "garchomp",
    "name": "Garchomp",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/445.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/garchomp",
    "stats": {
      "total": 600,
      "hp": 108,
      "attack": 130,
      "defense": 95,
      "spAttack": 80,
      "spDefense": 85,
      "speed": 102
    }
  },
  {
    "id": 446,
    "slug": "munchlax",
    "name": "Munchlax",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/446.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/446.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/munchlax",
    "stats": {
      "total": 390,
      "hp": 135,
      "attack": 85,
      "defense": 40,
      "spAttack": 40,
      "spDefense": 85,
      "speed": 5
    }
  },
  {
    "id": 447,
    "slug": "riolu",
    "name": "Riolu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/447.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/447.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/riolu",
    "stats": {
      "total": 285,
      "hp": 40,
      "attack": 70,
      "defense": 40,
      "spAttack": 35,
      "spDefense": 40,
      "speed": 60
    }
  },
  {
    "id": 448,
    "slug": "lucario",
    "name": "Lucario",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/448.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lucario",
    "stats": {
      "total": 525,
      "hp": 70,
      "attack": 110,
      "defense": 70,
      "spAttack": 115,
      "spDefense": 70,
      "speed": 90
    }
  },
  {
    "id": 449,
    "slug": "hippopotas",
    "name": "Hippopotas",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/449.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/449.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hippopotas",
    "stats": {
      "total": 330,
      "hp": 68,
      "attack": 72,
      "defense": 78,
      "spAttack": 38,
      "spDefense": 42,
      "speed": 32
    }
  },
  {
    "id": 450,
    "slug": "hippowdon",
    "name": "Hippowdon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/450.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/450.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hippowdon",
    "stats": {
      "total": 525,
      "hp": 108,
      "attack": 112,
      "defense": 118,
      "spAttack": 68,
      "spDefense": 72,
      "speed": 47
    }
  },
  {
    "id": 451,
    "slug": "skorupi",
    "name": "Skorupi",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/451.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/451.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/skorupi",
    "stats": {
      "total": 330,
      "hp": 40,
      "attack": 50,
      "defense": 90,
      "spAttack": 30,
      "spDefense": 55,
      "speed": 65
    }
  },
  {
    "id": 452,
    "slug": "drapion",
    "name": "Drapion",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/452.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/452.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/drapion",
    "stats": {
      "total": 500,
      "hp": 70,
      "attack": 90,
      "defense": 110,
      "spAttack": 60,
      "spDefense": 75,
      "speed": 95
    }
  },
  {
    "id": 453,
    "slug": "croagunk",
    "name": "Croagunk",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/453.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/453.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/croagunk",
    "stats": {
      "total": 300,
      "hp": 48,
      "attack": 61,
      "defense": 40,
      "spAttack": 61,
      "spDefense": 40,
      "speed": 50
    }
  },
  {
    "id": 454,
    "slug": "toxicroak",
    "name": "Toxicroak",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/454.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/454.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/toxicroak",
    "stats": {
      "total": 490,
      "hp": 83,
      "attack": 106,
      "defense": 65,
      "spAttack": 86,
      "spDefense": 65,
      "speed": 85
    }
  },
  {
    "id": 455,
    "slug": "carnivine",
    "name": "Carnivine",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/455.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/455.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/carnivine",
    "stats": {
      "total": 454,
      "hp": 74,
      "attack": 100,
      "defense": 72,
      "spAttack": 90,
      "spDefense": 72,
      "speed": 46
    }
  },
  {
    "id": 456,
    "slug": "finneon",
    "name": "Finneon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/456.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/456.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/finneon",
    "stats": {
      "total": 330,
      "hp": 49,
      "attack": 49,
      "defense": 56,
      "spAttack": 49,
      "spDefense": 61,
      "speed": 66
    }
  },
  {
    "id": 457,
    "slug": "lumineon",
    "name": "Lumineon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/457.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/457.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lumineon",
    "stats": {
      "total": 460,
      "hp": 69,
      "attack": 69,
      "defense": 76,
      "spAttack": 69,
      "spDefense": 86,
      "speed": 91
    }
  },
  {
    "id": 458,
    "slug": "mantyke",
    "name": "Mantyke",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/458.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/458.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mantyke",
    "stats": {
      "total": 345,
      "hp": 45,
      "attack": 20,
      "defense": 50,
      "spAttack": 60,
      "spDefense": 120,
      "speed": 50
    }
  },
  {
    "id": 459,
    "slug": "snover",
    "name": "Snover",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/459.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/459.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/snover",
    "stats": {
      "total": 334,
      "hp": 60,
      "attack": 62,
      "defense": 50,
      "spAttack": 62,
      "spDefense": 60,
      "speed": 40
    }
  },
  {
    "id": 460,
    "slug": "abomasnow",
    "name": "Abomasnow",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/460.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/460.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/abomasnow",
    "stats": {
      "total": 494,
      "hp": 90,
      "attack": 92,
      "defense": 75,
      "spAttack": 92,
      "spDefense": 85,
      "speed": 60
    }
  },
  {
    "id": 461,
    "slug": "weavile",
    "name": "Weavile",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/461.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/461.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/weavile",
    "stats": {
      "total": 510,
      "hp": 70,
      "attack": 120,
      "defense": 65,
      "spAttack": 45,
      "spDefense": 85,
      "speed": 125
    }
  },
  {
    "id": 462,
    "slug": "magnezone",
    "name": "Magnezone",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/462.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/462.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/magnezone",
    "stats": {
      "total": 535,
      "hp": 70,
      "attack": 70,
      "defense": 115,
      "spAttack": 130,
      "spDefense": 90,
      "speed": 60
    }
  },
  {
    "id": 463,
    "slug": "lickilicky",
    "name": "Lickilicky",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/463.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/463.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lickilicky",
    "stats": {
      "total": 515,
      "hp": 110,
      "attack": 85,
      "defense": 95,
      "spAttack": 80,
      "spDefense": 95,
      "speed": 50
    }
  },
  {
    "id": 464,
    "slug": "rhyperior",
    "name": "Rhyperior",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/464.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/464.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rhyperior",
    "stats": {
      "total": 535,
      "hp": 115,
      "attack": 140,
      "defense": 130,
      "spAttack": 55,
      "spDefense": 55,
      "speed": 40
    }
  },
  {
    "id": 465,
    "slug": "tangrowth",
    "name": "Tangrowth",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/465.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/465.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tangrowth",
    "stats": {
      "total": 535,
      "hp": 100,
      "attack": 100,
      "defense": 125,
      "spAttack": 110,
      "spDefense": 50,
      "speed": 50
    }
  },
  {
    "id": 466,
    "slug": "electivire",
    "name": "Electivire",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/466.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/466.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/electivire",
    "stats": {
      "total": 540,
      "hp": 75,
      "attack": 123,
      "defense": 67,
      "spAttack": 95,
      "spDefense": 85,
      "speed": 95
    }
  },
  {
    "id": 467,
    "slug": "magmortar",
    "name": "Magmortar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/467.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/467.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/magmortar",
    "stats": {
      "total": 540,
      "hp": 75,
      "attack": 95,
      "defense": 67,
      "spAttack": 125,
      "spDefense": 95,
      "speed": 83
    }
  },
  {
    "id": 468,
    "slug": "togekiss",
    "name": "Togekiss",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/468.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/468.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/togekiss",
    "stats": {
      "total": 545,
      "hp": 85,
      "attack": 50,
      "defense": 95,
      "spAttack": 120,
      "spDefense": 115,
      "speed": 80
    }
  },
  {
    "id": 469,
    "slug": "yanmega",
    "name": "Yanmega",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/469.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/469.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/yanmega",
    "stats": {
      "total": 515,
      "hp": 86,
      "attack": 76,
      "defense": 86,
      "spAttack": 116,
      "spDefense": 56,
      "speed": 95
    }
  },
  {
    "id": 470,
    "slug": "leafeon",
    "name": "Leafeon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/470.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/leafeon",
    "stats": {
      "total": 525,
      "hp": 65,
      "attack": 110,
      "defense": 130,
      "spAttack": 60,
      "spDefense": 65,
      "speed": 95
    }
  },
  {
    "id": 471,
    "slug": "glaceon",
    "name": "Glaceon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/471.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/471.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/glaceon",
    "stats": {
      "total": 525,
      "hp": 65,
      "attack": 60,
      "defense": 110,
      "spAttack": 130,
      "spDefense": 95,
      "speed": 65
    }
  },
  {
    "id": 472,
    "slug": "gliscor",
    "name": "Gliscor",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/472.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/472.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gliscor",
    "stats": {
      "total": 510,
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "spAttack": 45,
      "spDefense": 75,
      "speed": 95
    }
  },
  {
    "id": 473,
    "slug": "mamoswine",
    "name": "Mamoswine",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/473.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/473.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mamoswine",
    "stats": {
      "total": 530,
      "hp": 110,
      "attack": 130,
      "defense": 80,
      "spAttack": 70,
      "spDefense": 60,
      "speed": 80
    }
  },
  {
    "id": 474,
    "slug": "porygon-z",
    "name": "Porygon-Z",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/474.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/474.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/porygon-z",
    "stats": {
      "total": 535,
      "hp": 85,
      "attack": 80,
      "defense": 70,
      "spAttack": 135,
      "spDefense": 75,
      "speed": 90
    }
  },
  {
    "id": 475,
    "slug": "gallade",
    "name": "Gallade",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/475.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/475.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gallade",
    "stats": {
      "total": 518,
      "hp": 68,
      "attack": 125,
      "defense": 65,
      "spAttack": 65,
      "spDefense": 115,
      "speed": 80
    }
  },
  {
    "id": 476,
    "slug": "probopass",
    "name": "Probopass",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/476.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/476.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/probopass",
    "stats": {
      "total": 525,
      "hp": 60,
      "attack": 55,
      "defense": 145,
      "spAttack": 75,
      "spDefense": 150,
      "speed": 40
    }
  },
  {
    "id": 477,
    "slug": "dusknoir",
    "name": "Dusknoir",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/477.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/477.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dusknoir",
    "stats": {
      "total": 525,
      "hp": 45,
      "attack": 100,
      "defense": 135,
      "spAttack": 65,
      "spDefense": 135,
      "speed": 45
    }
  },
  {
    "id": 478,
    "slug": "froslass",
    "name": "Froslass",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/478.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/478.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/froslass",
    "stats": {
      "total": 480,
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "spAttack": 80,
      "spDefense": 70,
      "speed": 110
    }
  },
  {
    "id": 479,
    "slug": "rotom",
    "name": "Rotom",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/479.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/479.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rotom",
    "stats": {
      "total": 440,
      "hp": 50,
      "attack": 50,
      "defense": 77,
      "spAttack": 95,
      "spDefense": 77,
      "speed": 91
    }
  },
  {
    "id": 480,
    "slug": "uxie",
    "name": "Uxie",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/480.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/480.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/uxie",
    "stats": {
      "total": 580,
      "hp": 75,
      "attack": 75,
      "defense": 130,
      "spAttack": 75,
      "spDefense": 130,
      "speed": 95
    }
  },
  {
    "id": 481,
    "slug": "mesprit",
    "name": "Mesprit",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/481.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/481.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mesprit",
    "stats": {
      "total": 580,
      "hp": 80,
      "attack": 105,
      "defense": 105,
      "spAttack": 105,
      "spDefense": 105,
      "speed": 80
    }
  },
  {
    "id": 482,
    "slug": "azelf",
    "name": "Azelf",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/482.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/482.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/azelf",
    "stats": {
      "total": 580,
      "hp": 75,
      "attack": 125,
      "defense": 70,
      "spAttack": 125,
      "spDefense": 70,
      "speed": 115
    }
  },
  {
    "id": 483,
    "slug": "dialga",
    "name": "Dialga",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/483.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/483.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dialga",
    "stats": {
      "total": 680,
      "hp": 100,
      "attack": 120,
      "defense": 120,
      "spAttack": 150,
      "spDefense": 100,
      "speed": 90
    }
  },
  {
    "id": 484,
    "slug": "palkia",
    "name": "Palkia",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/484.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/484.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/palkia",
    "stats": {
      "total": 680,
      "hp": 90,
      "attack": 120,
      "defense": 100,
      "spAttack": 150,
      "spDefense": 120,
      "speed": 100
    }
  },
  {
    "id": 485,
    "slug": "heatran",
    "name": "Heatran",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/485.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/485.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/heatran",
    "stats": {
      "total": 600,
      "hp": 91,
      "attack": 90,
      "defense": 106,
      "spAttack": 130,
      "spDefense": 106,
      "speed": 77
    }
  },
  {
    "id": 486,
    "slug": "regigigas",
    "name": "Regigigas",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/486.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/486.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/regigigas",
    "stats": {
      "total": 670,
      "hp": 110,
      "attack": 160,
      "defense": 110,
      "spAttack": 80,
      "spDefense": 110,
      "speed": 100
    }
  },
  {
    "id": 487,
    "slug": "giratina",
    "name": "Giratina",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/487.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/487.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/giratina",
    "stats": {
      "total": 680,
      "hp": 150,
      "attack": 100,
      "defense": 120,
      "spAttack": 100,
      "spDefense": 120,
      "speed": 90
    }
  },
  {
    "id": 488,
    "slug": "cresselia",
    "name": "Cresselia",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/488.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/488.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cresselia",
    "stats": {
      "total": 580,
      "hp": 120,
      "attack": 70,
      "defense": 110,
      "spAttack": 75,
      "spDefense": 120,
      "speed": 85
    }
  },
  {
    "id": 489,
    "slug": "phione",
    "name": "Phione",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/489.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/489.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/phione",
    "stats": {
      "total": 480,
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "spAttack": 80,
      "spDefense": 80,
      "speed": 80
    }
  },
  {
    "id": 490,
    "slug": "manaphy",
    "name": "Manaphy",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/490.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/490.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/manaphy",
    "stats": {
      "total": 600,
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "spAttack": 100,
      "spDefense": 100,
      "speed": 100
    }
  },
  {
    "id": 491,
    "slug": "darkrai",
    "name": "Darkrai",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/491.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/491.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/darkrai",
    "stats": {
      "total": 600,
      "hp": 70,
      "attack": 90,
      "defense": 90,
      "spAttack": 135,
      "spDefense": 90,
      "speed": 125
    }
  },
  {
    "id": 492,
    "slug": "shaymin",
    "name": "Shaymin",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/492.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/492.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shaymin",
    "stats": {
      "total": 600,
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "spAttack": 100,
      "spDefense": 100,
      "speed": 100
    }
  },
  {
    "id": 493,
    "slug": "arceus",
    "name": "Arceus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/493.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/493.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/arceus",
    "stats": {
      "total": 720,
      "hp": 120,
      "attack": 120,
      "defense": 120,
      "spAttack": 120,
      "spDefense": 120,
      "speed": 120
    }
  },
  {
    "id": 494,
    "slug": "victini",
    "name": "Victini",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/494.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/494.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/victini",
    "stats": {
      "total": 600,
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "spAttack": 100,
      "spDefense": 100,
      "speed": 100
    }
  },
  {
    "id": 495,
    "slug": "snivy",
    "name": "Snivy",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/495.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/snivy",
    "stats": {
      "total": 308,
      "hp": 45,
      "attack": 45,
      "defense": 55,
      "spAttack": 45,
      "spDefense": 55,
      "speed": 63
    }
  },
  {
    "id": 496,
    "slug": "servine",
    "name": "Servine",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/496.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/496.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/servine",
    "stats": {
      "total": 413,
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "spAttack": 60,
      "spDefense": 75,
      "speed": 83
    }
  },
  {
    "id": 497,
    "slug": "serperior",
    "name": "Serperior",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/497.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/497.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/serperior",
    "stats": {
      "total": 528,
      "hp": 75,
      "attack": 75,
      "defense": 95,
      "spAttack": 75,
      "spDefense": 95,
      "speed": 113
    }
  },
  {
    "id": 498,
    "slug": "tepig",
    "name": "Tepig",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/498.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/498.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tepig",
    "stats": {
      "total": 308,
      "hp": 65,
      "attack": 63,
      "defense": 45,
      "spAttack": 45,
      "spDefense": 45,
      "speed": 45
    }
  },
  {
    "id": 499,
    "slug": "pignite",
    "name": "Pignite",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/499.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/499.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pignite",
    "stats": {
      "total": 418,
      "hp": 90,
      "attack": 93,
      "defense": 55,
      "spAttack": 70,
      "spDefense": 55,
      "speed": 55
    }
  },
  {
    "id": 500,
    "slug": "emboar",
    "name": "Emboar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/500.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/500.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/emboar",
    "stats": {
      "total": 528,
      "hp": 110,
      "attack": 123,
      "defense": 65,
      "spAttack": 100,
      "spDefense": 65,
      "speed": 65
    }
  },
  {
    "id": 501,
    "slug": "oshawott",
    "name": "Oshawott",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/501.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/oshawott",
    "stats": {
      "total": 308,
      "hp": 55,
      "attack": 55,
      "defense": 45,
      "spAttack": 63,
      "spDefense": 45,
      "speed": 45
    }
  },
  {
    "id": 502,
    "slug": "dewott",
    "name": "Dewott",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/502.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/502.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dewott",
    "stats": {
      "total": 413,
      "hp": 75,
      "attack": 75,
      "defense": 60,
      "spAttack": 83,
      "spDefense": 60,
      "speed": 60
    }
  },
  {
    "id": 503,
    "slug": "samurott",
    "name": "Samurott",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/503.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/503.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/samurott",
    "stats": {
      "total": 528,
      "hp": 95,
      "attack": 100,
      "defense": 85,
      "spAttack": 108,
      "spDefense": 70,
      "speed": 70
    }
  },
  {
    "id": 504,
    "slug": "patrat",
    "name": "Patrat",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/504.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/504.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/patrat",
    "stats": {
      "total": 255,
      "hp": 45,
      "attack": 55,
      "defense": 39,
      "spAttack": 35,
      "spDefense": 39,
      "speed": 42
    }
  },
  {
    "id": 505,
    "slug": "watchog",
    "name": "Watchog",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/505.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/505.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/watchog",
    "stats": {
      "total": 420,
      "hp": 60,
      "attack": 85,
      "defense": 69,
      "spAttack": 60,
      "spDefense": 69,
      "speed": 77
    }
  },
  {
    "id": 506,
    "slug": "lillipup",
    "name": "Lillipup",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/506.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/506.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lillipup",
    "stats": {
      "total": 275,
      "hp": 45,
      "attack": 60,
      "defense": 45,
      "spAttack": 25,
      "spDefense": 45,
      "speed": 55
    }
  },
  {
    "id": 507,
    "slug": "herdier",
    "name": "Herdier",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/507.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/507.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/herdier",
    "stats": {
      "total": 370,
      "hp": 65,
      "attack": 80,
      "defense": 65,
      "spAttack": 35,
      "spDefense": 65,
      "speed": 60
    }
  },
  {
    "id": 508,
    "slug": "stoutland",
    "name": "Stoutland",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/508.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/508.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/stoutland",
    "stats": {
      "total": 500,
      "hp": 85,
      "attack": 110,
      "defense": 90,
      "spAttack": 45,
      "spDefense": 90,
      "speed": 80
    }
  },
  {
    "id": 509,
    "slug": "purrloin",
    "name": "Purrloin",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/509.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/509.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/purrloin",
    "stats": {
      "total": 281,
      "hp": 41,
      "attack": 50,
      "defense": 37,
      "spAttack": 50,
      "spDefense": 37,
      "speed": 66
    }
  },
  {
    "id": 510,
    "slug": "liepard",
    "name": "Liepard",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/510.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/510.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/liepard",
    "stats": {
      "total": 446,
      "hp": 64,
      "attack": 88,
      "defense": 50,
      "spAttack": 88,
      "spDefense": 50,
      "speed": 106
    }
  },
  {
    "id": 511,
    "slug": "pansage",
    "name": "Pansage",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/511.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/511.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pansage",
    "stats": {
      "total": 316,
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "spAttack": 53,
      "spDefense": 48,
      "speed": 64
    }
  },
  {
    "id": 512,
    "slug": "simisage",
    "name": "Simisage",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/512.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/512.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/simisage",
    "stats": {
      "total": 498,
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "spAttack": 98,
      "spDefense": 63,
      "speed": 101
    }
  },
  {
    "id": 513,
    "slug": "pansear",
    "name": "Pansear",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/513.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/513.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pansear",
    "stats": {
      "total": 316,
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "spAttack": 53,
      "spDefense": 48,
      "speed": 64
    }
  },
  {
    "id": 514,
    "slug": "simisear",
    "name": "Simisear",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/514.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/514.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/simisear",
    "stats": {
      "total": 498,
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "spAttack": 98,
      "spDefense": 63,
      "speed": 101
    }
  },
  {
    "id": 515,
    "slug": "panpour",
    "name": "Panpour",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/515.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/515.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/panpour",
    "stats": {
      "total": 316,
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "spAttack": 53,
      "spDefense": 48,
      "speed": 64
    }
  },
  {
    "id": 516,
    "slug": "simipour",
    "name": "Simipour",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/516.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/516.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/simipour",
    "stats": {
      "total": 498,
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "spAttack": 98,
      "spDefense": 63,
      "speed": 101
    }
  },
  {
    "id": 517,
    "slug": "munna",
    "name": "Munna",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/517.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/517.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/munna",
    "stats": {
      "total": 292,
      "hp": 76,
      "attack": 25,
      "defense": 45,
      "spAttack": 67,
      "spDefense": 55,
      "speed": 24
    }
  },
  {
    "id": 518,
    "slug": "musharna",
    "name": "Musharna",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/518.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/518.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/musharna",
    "stats": {
      "total": 487,
      "hp": 116,
      "attack": 55,
      "defense": 85,
      "spAttack": 107,
      "spDefense": 95,
      "speed": 29
    }
  },
  {
    "id": 519,
    "slug": "pidove",
    "name": "Pidove",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/519.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/519.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pidove",
    "stats": {
      "total": 264,
      "hp": 50,
      "attack": 55,
      "defense": 50,
      "spAttack": 36,
      "spDefense": 30,
      "speed": 43
    }
  },
  {
    "id": 520,
    "slug": "tranquill",
    "name": "Tranquill",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/520.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/520.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tranquill",
    "stats": {
      "total": 358,
      "hp": 62,
      "attack": 77,
      "defense": 62,
      "spAttack": 50,
      "spDefense": 42,
      "speed": 65
    }
  },
  {
    "id": 521,
    "slug": "unfezant",
    "name": "Unfezant",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/521.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/521.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/unfezant",
    "stats": {
      "total": 488,
      "hp": 80,
      "attack": 115,
      "defense": 80,
      "spAttack": 65,
      "spDefense": 55,
      "speed": 93
    }
  },
  {
    "id": 522,
    "slug": "blitzle",
    "name": "Blitzle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/522.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/522.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/blitzle",
    "stats": {
      "total": 295,
      "hp": 45,
      "attack": 60,
      "defense": 32,
      "spAttack": 50,
      "spDefense": 32,
      "speed": 76
    }
  },
  {
    "id": 523,
    "slug": "zebstrika",
    "name": "Zebstrika",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/523.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/523.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zebstrika",
    "stats": {
      "total": 497,
      "hp": 75,
      "attack": 100,
      "defense": 63,
      "spAttack": 80,
      "spDefense": 63,
      "speed": 116
    }
  },
  {
    "id": 524,
    "slug": "roggenrola",
    "name": "Roggenrola",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/524.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/524.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/roggenrola",
    "stats": {
      "total": 280,
      "hp": 55,
      "attack": 75,
      "defense": 85,
      "spAttack": 25,
      "spDefense": 25,
      "speed": 15
    }
  },
  {
    "id": 525,
    "slug": "boldore",
    "name": "Boldore",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/525.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/525.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/boldore",
    "stats": {
      "total": 390,
      "hp": 70,
      "attack": 105,
      "defense": 105,
      "spAttack": 50,
      "spDefense": 40,
      "speed": 20
    }
  },
  {
    "id": 526,
    "slug": "gigalith",
    "name": "Gigalith",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/526.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/526.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gigalith",
    "stats": {
      "total": 515,
      "hp": 85,
      "attack": 135,
      "defense": 130,
      "spAttack": 60,
      "spDefense": 80,
      "speed": 25
    }
  },
  {
    "id": 527,
    "slug": "woobat",
    "name": "Woobat",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/527.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/527.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/woobat",
    "stats": {
      "total": 323,
      "hp": 65,
      "attack": 45,
      "defense": 43,
      "spAttack": 55,
      "spDefense": 43,
      "speed": 72
    }
  },
  {
    "id": 528,
    "slug": "swoobat",
    "name": "Swoobat",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/528.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/528.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/swoobat",
    "stats": {
      "total": 425,
      "hp": 67,
      "attack": 57,
      "defense": 55,
      "spAttack": 77,
      "spDefense": 55,
      "speed": 114
    }
  },
  {
    "id": 529,
    "slug": "drilbur",
    "name": "Drilbur",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/529.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/529.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/drilbur",
    "stats": {
      "total": 328,
      "hp": 60,
      "attack": 85,
      "defense": 40,
      "spAttack": 30,
      "spDefense": 45,
      "speed": 68
    }
  },
  {
    "id": 530,
    "slug": "excadrill",
    "name": "Excadrill",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/530.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/530.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/excadrill",
    "stats": {
      "total": 508,
      "hp": 110,
      "attack": 135,
      "defense": 60,
      "spAttack": 50,
      "spDefense": 65,
      "speed": 88
    }
  },
  {
    "id": 531,
    "slug": "audino",
    "name": "Audino",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/531.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/531.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/audino",
    "stats": {
      "total": 445,
      "hp": 103,
      "attack": 60,
      "defense": 86,
      "spAttack": 60,
      "spDefense": 86,
      "speed": 50
    }
  },
  {
    "id": 532,
    "slug": "timburr",
    "name": "Timburr",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/532.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/532.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/timburr",
    "stats": {
      "total": 305,
      "hp": 75,
      "attack": 80,
      "defense": 55,
      "spAttack": 25,
      "spDefense": 35,
      "speed": 35
    }
  },
  {
    "id": 533,
    "slug": "gurdurr",
    "name": "Gurdurr",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/533.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/533.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gurdurr",
    "stats": {
      "total": 405,
      "hp": 85,
      "attack": 105,
      "defense": 85,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 40
    }
  },
  {
    "id": 534,
    "slug": "conkeldurr",
    "name": "Conkeldurr",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/534.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/534.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/conkeldurr",
    "stats": {
      "total": 505,
      "hp": 105,
      "attack": 140,
      "defense": 95,
      "spAttack": 55,
      "spDefense": 65,
      "speed": 45
    }
  },
  {
    "id": 535,
    "slug": "tympole",
    "name": "Tympole",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/535.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/535.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tympole",
    "stats": {
      "total": 294,
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "spAttack": 50,
      "spDefense": 40,
      "speed": 64
    }
  },
  {
    "id": 536,
    "slug": "palpitoad",
    "name": "Palpitoad",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/536.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/536.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/palpitoad",
    "stats": {
      "total": 384,
      "hp": 75,
      "attack": 65,
      "defense": 55,
      "spAttack": 65,
      "spDefense": 55,
      "speed": 69
    }
  },
  {
    "id": 537,
    "slug": "seismitoad",
    "name": "Seismitoad",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/537.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/537.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/seismitoad",
    "stats": {
      "total": 509,
      "hp": 105,
      "attack": 95,
      "defense": 75,
      "spAttack": 85,
      "spDefense": 75,
      "speed": 74
    }
  },
  {
    "id": 538,
    "slug": "throh",
    "name": "Throh",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/538.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/538.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/throh",
    "stats": {
      "total": 465,
      "hp": 120,
      "attack": 100,
      "defense": 85,
      "spAttack": 30,
      "spDefense": 85,
      "speed": 45
    }
  },
  {
    "id": 539,
    "slug": "sawk",
    "name": "Sawk",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/539.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/539.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sawk",
    "stats": {
      "total": 465,
      "hp": 75,
      "attack": 125,
      "defense": 75,
      "spAttack": 30,
      "spDefense": 75,
      "speed": 85
    }
  },
  {
    "id": 540,
    "slug": "sewaddle",
    "name": "Sewaddle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/540.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/540.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sewaddle",
    "stats": {
      "total": 310,
      "hp": 45,
      "attack": 53,
      "defense": 70,
      "spAttack": 40,
      "spDefense": 60,
      "speed": 42
    }
  },
  {
    "id": 541,
    "slug": "swadloon",
    "name": "Swadloon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/541.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/541.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/swadloon",
    "stats": {
      "total": 380,
      "hp": 55,
      "attack": 63,
      "defense": 90,
      "spAttack": 50,
      "spDefense": 80,
      "speed": 42
    }
  },
  {
    "id": 542,
    "slug": "leavanny",
    "name": "Leavanny",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/542.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/542.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/leavanny",
    "stats": {
      "total": 500,
      "hp": 75,
      "attack": 103,
      "defense": 80,
      "spAttack": 70,
      "spDefense": 80,
      "speed": 92
    }
  },
  {
    "id": 543,
    "slug": "venipede",
    "name": "Venipede",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/543.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/543.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/venipede",
    "stats": {
      "total": 260,
      "hp": 30,
      "attack": 45,
      "defense": 59,
      "spAttack": 30,
      "spDefense": 39,
      "speed": 57
    }
  },
  {
    "id": 544,
    "slug": "whirlipede",
    "name": "Whirlipede",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/544.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/544.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/whirlipede",
    "stats": {
      "total": 360,
      "hp": 40,
      "attack": 55,
      "defense": 99,
      "spAttack": 40,
      "spDefense": 79,
      "speed": 47
    }
  },
  {
    "id": 545,
    "slug": "scolipede",
    "name": "Scolipede",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/545.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/545.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/scolipede",
    "stats": {
      "total": 485,
      "hp": 60,
      "attack": 100,
      "defense": 89,
      "spAttack": 55,
      "spDefense": 69,
      "speed": 112
    }
  },
  {
    "id": 546,
    "slug": "cottonee",
    "name": "Cottonee",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/546.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/546.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cottonee",
    "stats": {
      "total": 280,
      "hp": 40,
      "attack": 27,
      "defense": 60,
      "spAttack": 37,
      "spDefense": 50,
      "speed": 66
    }
  },
  {
    "id": 547,
    "slug": "whimsicott",
    "name": "Whimsicott",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/547.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/547.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/whimsicott",
    "stats": {
      "total": 480,
      "hp": 60,
      "attack": 67,
      "defense": 85,
      "spAttack": 77,
      "spDefense": 75,
      "speed": 116
    }
  },
  {
    "id": 548,
    "slug": "petilil",
    "name": "Petilil",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/548.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/548.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/petilil",
    "stats": {
      "total": 280,
      "hp": 45,
      "attack": 35,
      "defense": 50,
      "spAttack": 70,
      "spDefense": 50,
      "speed": 30
    }
  },
  {
    "id": 549,
    "slug": "lilligant",
    "name": "Lilligant",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/549.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/549.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lilligant",
    "stats": {
      "total": 480,
      "hp": 70,
      "attack": 60,
      "defense": 75,
      "spAttack": 110,
      "spDefense": 75,
      "speed": 90
    }
  },
  {
    "id": 550,
    "slug": "basculin",
    "name": "Basculin",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/550.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/550.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/basculin",
    "stats": {
      "total": 460,
      "hp": 70,
      "attack": 92,
      "defense": 65,
      "spAttack": 80,
      "spDefense": 55,
      "speed": 98
    }
  },
  {
    "id": 551,
    "slug": "sandile",
    "name": "Sandile",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/551.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/551.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sandile",
    "stats": {
      "total": 292,
      "hp": 50,
      "attack": 72,
      "defense": 35,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 65
    }
  },
  {
    "id": 552,
    "slug": "krokorok",
    "name": "Krokorok",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/552.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/552.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/krokorok",
    "stats": {
      "total": 351,
      "hp": 60,
      "attack": 82,
      "defense": 45,
      "spAttack": 45,
      "spDefense": 45,
      "speed": 74
    }
  },
  {
    "id": 553,
    "slug": "krookodile",
    "name": "Krookodile",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/553.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/553.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/krookodile",
    "stats": {
      "total": 519,
      "hp": 95,
      "attack": 117,
      "defense": 80,
      "spAttack": 65,
      "spDefense": 70,
      "speed": 92
    }
  },
  {
    "id": 554,
    "slug": "darumaka",
    "name": "Darumaka",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/554.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/554.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/darumaka",
    "stats": {
      "total": 315,
      "hp": 70,
      "attack": 90,
      "defense": 45,
      "spAttack": 15,
      "spDefense": 45,
      "speed": 50
    }
  },
  {
    "id": 555,
    "slug": "darmanitan",
    "name": "Darmanitan",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/555.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/555.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/darmanitan",
    "stats": {
      "total": 480,
      "hp": 105,
      "attack": 140,
      "defense": 55,
      "spAttack": 30,
      "spDefense": 55,
      "speed": 95
    }
  },
  {
    "id": 556,
    "slug": "maractus",
    "name": "Maractus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/556.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/556.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/maractus",
    "stats": {
      "total": 461,
      "hp": 75,
      "attack": 86,
      "defense": 67,
      "spAttack": 106,
      "spDefense": 67,
      "speed": 60
    }
  },
  {
    "id": 557,
    "slug": "dwebble",
    "name": "Dwebble",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/557.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/557.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dwebble",
    "stats": {
      "total": 325,
      "hp": 50,
      "attack": 65,
      "defense": 85,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 55
    }
  },
  {
    "id": 558,
    "slug": "crustle",
    "name": "Crustle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/558.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/558.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/crustle",
    "stats": {
      "total": 485,
      "hp": 70,
      "attack": 105,
      "defense": 125,
      "spAttack": 65,
      "spDefense": 75,
      "speed": 45
    }
  },
  {
    "id": 559,
    "slug": "scraggy",
    "name": "Scraggy",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/559.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/559.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/scraggy",
    "stats": {
      "total": 348,
      "hp": 50,
      "attack": 75,
      "defense": 70,
      "spAttack": 35,
      "spDefense": 70,
      "speed": 48
    }
  },
  {
    "id": 560,
    "slug": "scrafty",
    "name": "Scrafty",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/560.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/560.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/scrafty",
    "stats": {
      "total": 488,
      "hp": 65,
      "attack": 90,
      "defense": 115,
      "spAttack": 45,
      "spDefense": 115,
      "speed": 58
    }
  },
  {
    "id": 561,
    "slug": "sigilyph",
    "name": "Sigilyph",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/561.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/561.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sigilyph",
    "stats": {
      "total": 490,
      "hp": 72,
      "attack": 58,
      "defense": 80,
      "spAttack": 103,
      "spDefense": 80,
      "speed": 97
    }
  },
  {
    "id": 562,
    "slug": "yamask",
    "name": "Yamask",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/562.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/562.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/yamask",
    "stats": {
      "total": 303,
      "hp": 38,
      "attack": 30,
      "defense": 85,
      "spAttack": 55,
      "spDefense": 65,
      "speed": 30
    }
  },
  {
    "id": 563,
    "slug": "cofagrigus",
    "name": "Cofagrigus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/563.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/563.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cofagrigus",
    "stats": {
      "total": 483,
      "hp": 58,
      "attack": 50,
      "defense": 145,
      "spAttack": 95,
      "spDefense": 105,
      "speed": 30
    }
  },
  {
    "id": 564,
    "slug": "tirtouga",
    "name": "Tirtouga",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/564.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/564.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tirtouga",
    "stats": {
      "total": 355,
      "hp": 54,
      "attack": 78,
      "defense": 103,
      "spAttack": 53,
      "spDefense": 45,
      "speed": 22
    }
  },
  {
    "id": 565,
    "slug": "carracosta",
    "name": "Carracosta",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/565.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/565.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/carracosta",
    "stats": {
      "total": 495,
      "hp": 74,
      "attack": 108,
      "defense": 133,
      "spAttack": 83,
      "spDefense": 65,
      "speed": 32
    }
  },
  {
    "id": 566,
    "slug": "archen",
    "name": "Archen",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/566.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/566.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/archen",
    "stats": {
      "total": 401,
      "hp": 55,
      "attack": 112,
      "defense": 45,
      "spAttack": 74,
      "spDefense": 45,
      "speed": 70
    }
  },
  {
    "id": 567,
    "slug": "archeops",
    "name": "Archeops",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/567.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/567.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/archeops",
    "stats": {
      "total": 567,
      "hp": 75,
      "attack": 140,
      "defense": 65,
      "spAttack": 112,
      "spDefense": 65,
      "speed": 110
    }
  },
  {
    "id": 568,
    "slug": "trubbish",
    "name": "Trubbish",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/568.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/568.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/trubbish",
    "stats": {
      "total": 329,
      "hp": 50,
      "attack": 50,
      "defense": 62,
      "spAttack": 40,
      "spDefense": 62,
      "speed": 65
    }
  },
  {
    "id": 569,
    "slug": "garbodor",
    "name": "Garbodor",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/569.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/569.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/garbodor",
    "stats": {
      "total": 474,
      "hp": 80,
      "attack": 95,
      "defense": 82,
      "spAttack": 60,
      "spDefense": 82,
      "speed": 75
    }
  },
  {
    "id": 570,
    "slug": "zorua",
    "name": "Zorua",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/570.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/570.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zorua",
    "stats": {
      "total": 330,
      "hp": 40,
      "attack": 65,
      "defense": 40,
      "spAttack": 80,
      "spDefense": 40,
      "speed": 65
    }
  },
  {
    "id": 571,
    "slug": "zoroark",
    "name": "Zoroark",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/571.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/571.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zoroark",
    "stats": {
      "total": 510,
      "hp": 60,
      "attack": 105,
      "defense": 60,
      "spAttack": 120,
      "spDefense": 60,
      "speed": 105
    }
  },
  {
    "id": 572,
    "slug": "minccino",
    "name": "Minccino",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/572.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/572.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/minccino",
    "stats": {
      "total": 300,
      "hp": 55,
      "attack": 50,
      "defense": 40,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 75
    }
  },
  {
    "id": 573,
    "slug": "cinccino",
    "name": "Cinccino",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/573.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/573.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cinccino",
    "stats": {
      "total": 470,
      "hp": 75,
      "attack": 95,
      "defense": 60,
      "spAttack": 65,
      "spDefense": 60,
      "speed": 115
    }
  },
  {
    "id": 574,
    "slug": "gothita",
    "name": "Gothita",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/574.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/574.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gothita",
    "stats": {
      "total": 290,
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "spAttack": 55,
      "spDefense": 65,
      "speed": 45
    }
  },
  {
    "id": 575,
    "slug": "gothorita",
    "name": "Gothorita",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/575.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/575.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gothorita",
    "stats": {
      "total": 390,
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "spAttack": 75,
      "spDefense": 85,
      "speed": 55
    }
  },
  {
    "id": 576,
    "slug": "gothitelle",
    "name": "Gothitelle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/576.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/576.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gothitelle",
    "stats": {
      "total": 490,
      "hp": 70,
      "attack": 55,
      "defense": 95,
      "spAttack": 95,
      "spDefense": 110,
      "speed": 65
    }
  },
  {
    "id": 577,
    "slug": "solosis",
    "name": "Solosis",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/577.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/577.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/solosis",
    "stats": {
      "total": 290,
      "hp": 45,
      "attack": 30,
      "defense": 40,
      "spAttack": 105,
      "spDefense": 50,
      "speed": 20
    }
  },
  {
    "id": 578,
    "slug": "duosion",
    "name": "Duosion",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/578.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/578.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/duosion",
    "stats": {
      "total": 370,
      "hp": 65,
      "attack": 40,
      "defense": 50,
      "spAttack": 125,
      "spDefense": 60,
      "speed": 30
    }
  },
  {
    "id": 579,
    "slug": "reuniclus",
    "name": "Reuniclus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/579.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/579.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/reuniclus",
    "stats": {
      "total": 490,
      "hp": 110,
      "attack": 65,
      "defense": 75,
      "spAttack": 125,
      "spDefense": 85,
      "speed": 30
    }
  },
  {
    "id": 580,
    "slug": "ducklett",
    "name": "Ducklett",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/580.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/580.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ducklett",
    "stats": {
      "total": 305,
      "hp": 62,
      "attack": 44,
      "defense": 50,
      "spAttack": 44,
      "spDefense": 50,
      "speed": 55
    }
  },
  {
    "id": 581,
    "slug": "swanna",
    "name": "Swanna",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/581.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/581.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/swanna",
    "stats": {
      "total": 473,
      "hp": 75,
      "attack": 87,
      "defense": 63,
      "spAttack": 87,
      "spDefense": 63,
      "speed": 98
    }
  },
  {
    "id": 582,
    "slug": "vanillite",
    "name": "Vanillite",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/582.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/582.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/vanillite",
    "stats": {
      "total": 305,
      "hp": 36,
      "attack": 50,
      "defense": 50,
      "spAttack": 65,
      "spDefense": 60,
      "speed": 44
    }
  },
  {
    "id": 583,
    "slug": "vanillish",
    "name": "Vanillish",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/583.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/583.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/vanillish",
    "stats": {
      "total": 395,
      "hp": 51,
      "attack": 65,
      "defense": 65,
      "spAttack": 80,
      "spDefense": 75,
      "speed": 59
    }
  },
  {
    "id": 584,
    "slug": "vanilluxe",
    "name": "Vanilluxe",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/584.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/584.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/vanilluxe",
    "stats": {
      "total": 535,
      "hp": 71,
      "attack": 95,
      "defense": 85,
      "spAttack": 110,
      "spDefense": 95,
      "speed": 79
    }
  },
  {
    "id": 585,
    "slug": "deerling",
    "name": "Deerling",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/585.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/585.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/deerling",
    "stats": {
      "total": 335,
      "hp": 60,
      "attack": 60,
      "defense": 50,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 75
    }
  },
  {
    "id": 586,
    "slug": "sawsbuck",
    "name": "Sawsbuck",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/586.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/586.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sawsbuck",
    "stats": {
      "total": 475,
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 95
    }
  },
  {
    "id": 587,
    "slug": "emolga",
    "name": "Emolga",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/587.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/587.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/emolga",
    "stats": {
      "total": 428,
      "hp": 55,
      "attack": 75,
      "defense": 60,
      "spAttack": 75,
      "spDefense": 60,
      "speed": 103
    }
  },
  {
    "id": 588,
    "slug": "karrablast",
    "name": "Karrablast",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/588.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/588.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/karrablast",
    "stats": {
      "total": 315,
      "hp": 50,
      "attack": 75,
      "defense": 45,
      "spAttack": 40,
      "spDefense": 45,
      "speed": 60
    }
  },
  {
    "id": 589,
    "slug": "escavalier",
    "name": "Escavalier",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/589.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/589.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/escavalier",
    "stats": {
      "total": 495,
      "hp": 70,
      "attack": 135,
      "defense": 105,
      "spAttack": 60,
      "spDefense": 105,
      "speed": 20
    }
  },
  {
    "id": 590,
    "slug": "foongus",
    "name": "Foongus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/590.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/590.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/foongus",
    "stats": {
      "total": 294,
      "hp": 69,
      "attack": 55,
      "defense": 45,
      "spAttack": 55,
      "spDefense": 55,
      "speed": 15
    }
  },
  {
    "id": 591,
    "slug": "amoonguss",
    "name": "Amoonguss",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/591.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/591.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/amoonguss",
    "stats": {
      "total": 464,
      "hp": 114,
      "attack": 85,
      "defense": 70,
      "spAttack": 85,
      "spDefense": 80,
      "speed": 30
    }
  },
  {
    "id": 592,
    "slug": "frillish",
    "name": "Frillish",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/592.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/592.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/frillish",
    "stats": {
      "total": 335,
      "hp": 55,
      "attack": 40,
      "defense": 50,
      "spAttack": 65,
      "spDefense": 85,
      "speed": 40
    }
  },
  {
    "id": 593,
    "slug": "jellicent",
    "name": "Jellicent",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/593.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/593.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/jellicent",
    "stats": {
      "total": 480,
      "hp": 100,
      "attack": 60,
      "defense": 70,
      "spAttack": 85,
      "spDefense": 105,
      "speed": 60
    }
  },
  {
    "id": 594,
    "slug": "alomomola",
    "name": "Alomomola",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/594.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/594.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/alomomola",
    "stats": {
      "total": 470,
      "hp": 165,
      "attack": 75,
      "defense": 80,
      "spAttack": 40,
      "spDefense": 45,
      "speed": 65
    }
  },
  {
    "id": 595,
    "slug": "joltik",
    "name": "Joltik",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/595.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/595.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/joltik",
    "stats": {
      "total": 319,
      "hp": 50,
      "attack": 47,
      "defense": 50,
      "spAttack": 57,
      "spDefense": 50,
      "speed": 65
    }
  },
  {
    "id": 596,
    "slug": "galvantula",
    "name": "Galvantula",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/596.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/596.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/galvantula",
    "stats": {
      "total": 472,
      "hp": 70,
      "attack": 77,
      "defense": 60,
      "spAttack": 97,
      "spDefense": 60,
      "speed": 108
    }
  },
  {
    "id": 597,
    "slug": "ferroseed",
    "name": "Ferroseed",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/597.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/597.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ferroseed",
    "stats": {
      "total": 305,
      "hp": 44,
      "attack": 50,
      "defense": 91,
      "spAttack": 24,
      "spDefense": 86,
      "speed": 10
    }
  },
  {
    "id": 598,
    "slug": "ferrothorn",
    "name": "Ferrothorn",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/598.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/598.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ferrothorn",
    "stats": {
      "total": 489,
      "hp": 74,
      "attack": 94,
      "defense": 131,
      "spAttack": 54,
      "spDefense": 116,
      "speed": 20
    }
  },
  {
    "id": 599,
    "slug": "klink",
    "name": "Klink",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/599.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/599.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/klink",
    "stats": {
      "total": 300,
      "hp": 40,
      "attack": 55,
      "defense": 70,
      "spAttack": 45,
      "spDefense": 60,
      "speed": 30
    }
  },
  {
    "id": 600,
    "slug": "klang",
    "name": "Klang",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/600.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/600.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/klang",
    "stats": {
      "total": 440,
      "hp": 60,
      "attack": 80,
      "defense": 95,
      "spAttack": 70,
      "spDefense": 85,
      "speed": 50
    }
  },
  {
    "id": 601,
    "slug": "klinklang",
    "name": "Klinklang",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/601.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/601.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/klinklang",
    "stats": {
      "total": 520,
      "hp": 60,
      "attack": 100,
      "defense": 115,
      "spAttack": 70,
      "spDefense": 85,
      "speed": 90
    }
  },
  {
    "id": 602,
    "slug": "tynamo",
    "name": "Tynamo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/602.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/602.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tynamo",
    "stats": {
      "total": 275,
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "spAttack": 45,
      "spDefense": 40,
      "speed": 60
    }
  },
  {
    "id": 603,
    "slug": "eelektrik",
    "name": "Eelektrik",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/603.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/603.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/eelektrik",
    "stats": {
      "total": 405,
      "hp": 65,
      "attack": 85,
      "defense": 70,
      "spAttack": 75,
      "spDefense": 70,
      "speed": 40
    }
  },
  {
    "id": 604,
    "slug": "eelektross",
    "name": "Eelektross",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/604.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/604.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/eelektross",
    "stats": {
      "total": 515,
      "hp": 85,
      "attack": 115,
      "defense": 80,
      "spAttack": 105,
      "spDefense": 80,
      "speed": 50
    }
  },
  {
    "id": 605,
    "slug": "elgyem",
    "name": "Elgyem",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/605.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/605.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/elgyem",
    "stats": {
      "total": 335,
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "spAttack": 85,
      "spDefense": 55,
      "speed": 30
    }
  },
  {
    "id": 606,
    "slug": "beheeyem",
    "name": "Beheeyem",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/606.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/606.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/beheeyem",
    "stats": {
      "total": 485,
      "hp": 75,
      "attack": 75,
      "defense": 75,
      "spAttack": 125,
      "spDefense": 95,
      "speed": 40
    }
  },
  {
    "id": 607,
    "slug": "litwick",
    "name": "Litwick",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/607.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/607.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/litwick",
    "stats": {
      "total": 275,
      "hp": 50,
      "attack": 30,
      "defense": 55,
      "spAttack": 65,
      "spDefense": 55,
      "speed": 20
    }
  },
  {
    "id": 608,
    "slug": "lampent",
    "name": "Lampent",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/608.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/608.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lampent",
    "stats": {
      "total": 370,
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "spAttack": 95,
      "spDefense": 60,
      "speed": 55
    }
  },
  {
    "id": 609,
    "slug": "chandelure",
    "name": "Chandelure",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/609.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/609.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/chandelure",
    "stats": {
      "total": 520,
      "hp": 60,
      "attack": 55,
      "defense": 90,
      "spAttack": 145,
      "spDefense": 90,
      "speed": 80
    }
  },
  {
    "id": 610,
    "slug": "axew",
    "name": "Axew",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/610.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/610.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/axew",
    "stats": {
      "total": 320,
      "hp": 46,
      "attack": 87,
      "defense": 60,
      "spAttack": 30,
      "spDefense": 40,
      "speed": 57
    }
  },
  {
    "id": 611,
    "slug": "fraxure",
    "name": "Fraxure",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/611.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/611.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/fraxure",
    "stats": {
      "total": 410,
      "hp": 66,
      "attack": 117,
      "defense": 70,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 67
    }
  },
  {
    "id": 612,
    "slug": "haxorus",
    "name": "Haxorus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/612.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/612.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/haxorus",
    "stats": {
      "total": 540,
      "hp": 76,
      "attack": 147,
      "defense": 90,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 97
    }
  },
  {
    "id": 613,
    "slug": "cubchoo",
    "name": "Cubchoo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/613.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/613.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cubchoo",
    "stats": {
      "total": 305,
      "hp": 55,
      "attack": 70,
      "defense": 40,
      "spAttack": 60,
      "spDefense": 40,
      "speed": 40
    }
  },
  {
    "id": 614,
    "slug": "beartic",
    "name": "Beartic",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/614.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/614.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/beartic",
    "stats": {
      "total": 505,
      "hp": 95,
      "attack": 130,
      "defense": 80,
      "spAttack": 70,
      "spDefense": 80,
      "speed": 50
    }
  },
  {
    "id": 615,
    "slug": "cryogonal",
    "name": "Cryogonal",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/615.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/615.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cryogonal",
    "stats": {
      "total": 515,
      "hp": 80,
      "attack": 50,
      "defense": 50,
      "spAttack": 95,
      "spDefense": 135,
      "speed": 105
    }
  },
  {
    "id": 616,
    "slug": "shelmet",
    "name": "Shelmet",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/616.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/616.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shelmet",
    "stats": {
      "total": 305,
      "hp": 50,
      "attack": 40,
      "defense": 85,
      "spAttack": 40,
      "spDefense": 65,
      "speed": 25
    }
  },
  {
    "id": 617,
    "slug": "accelgor",
    "name": "Accelgor",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/617.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/617.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/accelgor",
    "stats": {
      "total": 495,
      "hp": 80,
      "attack": 70,
      "defense": 40,
      "spAttack": 100,
      "spDefense": 60,
      "speed": 145
    }
  },
  {
    "id": 618,
    "slug": "stunfisk",
    "name": "Stunfisk",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/618.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/618.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/stunfisk",
    "stats": {
      "total": 471,
      "hp": 109,
      "attack": 66,
      "defense": 84,
      "spAttack": 81,
      "spDefense": 99,
      "speed": 32
    }
  },
  {
    "id": 619,
    "slug": "mienfoo",
    "name": "Mienfoo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/619.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/619.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mienfoo",
    "stats": {
      "total": 350,
      "hp": 45,
      "attack": 85,
      "defense": 50,
      "spAttack": 55,
      "spDefense": 50,
      "speed": 65
    }
  },
  {
    "id": 620,
    "slug": "mienshao",
    "name": "Mienshao",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/620.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/620.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mienshao",
    "stats": {
      "total": 510,
      "hp": 65,
      "attack": 125,
      "defense": 60,
      "spAttack": 95,
      "spDefense": 60,
      "speed": 105
    }
  },
  {
    "id": 621,
    "slug": "druddigon",
    "name": "Druddigon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/621.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/621.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/druddigon",
    "stats": {
      "total": 485,
      "hp": 77,
      "attack": 120,
      "defense": 90,
      "spAttack": 60,
      "spDefense": 90,
      "speed": 48
    }
  },
  {
    "id": 622,
    "slug": "golett",
    "name": "Golett",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/622.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/622.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/golett",
    "stats": {
      "total": 303,
      "hp": 59,
      "attack": 74,
      "defense": 50,
      "spAttack": 35,
      "spDefense": 50,
      "speed": 35
    }
  },
  {
    "id": 623,
    "slug": "golurk",
    "name": "Golurk",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/623.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/623.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/golurk",
    "stats": {
      "total": 483,
      "hp": 89,
      "attack": 124,
      "defense": 80,
      "spAttack": 55,
      "spDefense": 80,
      "speed": 55
    }
  },
  {
    "id": 624,
    "slug": "pawniard",
    "name": "Pawniard",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/624.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/624.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pawniard",
    "stats": {
      "total": 340,
      "hp": 45,
      "attack": 85,
      "defense": 70,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 60
    }
  },
  {
    "id": 625,
    "slug": "bisharp",
    "name": "Bisharp",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/625.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/625.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bisharp",
    "stats": {
      "total": 490,
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 70
    }
  },
  {
    "id": 626,
    "slug": "bouffalant",
    "name": "Bouffalant",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/626.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/626.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bouffalant",
    "stats": {
      "total": 490,
      "hp": 95,
      "attack": 110,
      "defense": 95,
      "spAttack": 40,
      "spDefense": 95,
      "speed": 55
    }
  },
  {
    "id": 627,
    "slug": "rufflet",
    "name": "Rufflet",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/627.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/627.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rufflet",
    "stats": {
      "total": 350,
      "hp": 70,
      "attack": 83,
      "defense": 50,
      "spAttack": 37,
      "spDefense": 50,
      "speed": 60
    }
  },
  {
    "id": 628,
    "slug": "braviary",
    "name": "Braviary",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/628.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/628.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/braviary",
    "stats": {
      "total": 510,
      "hp": 100,
      "attack": 123,
      "defense": 75,
      "spAttack": 57,
      "spDefense": 75,
      "speed": 80
    }
  },
  {
    "id": 629,
    "slug": "vullaby",
    "name": "Vullaby",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/629.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/629.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/vullaby",
    "stats": {
      "total": 370,
      "hp": 70,
      "attack": 55,
      "defense": 75,
      "spAttack": 45,
      "spDefense": 65,
      "speed": 60
    }
  },
  {
    "id": 630,
    "slug": "mandibuzz",
    "name": "Mandibuzz",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/630.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/630.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mandibuzz",
    "stats": {
      "total": 510,
      "hp": 110,
      "attack": 65,
      "defense": 105,
      "spAttack": 55,
      "spDefense": 95,
      "speed": 80
    }
  },
  {
    "id": 631,
    "slug": "heatmor",
    "name": "Heatmor",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/631.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/631.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/heatmor",
    "stats": {
      "total": 484,
      "hp": 85,
      "attack": 97,
      "defense": 66,
      "spAttack": 105,
      "spDefense": 66,
      "speed": 65
    }
  },
  {
    "id": 632,
    "slug": "durant",
    "name": "Durant",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/632.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/632.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/durant",
    "stats": {
      "total": 484,
      "hp": 58,
      "attack": 109,
      "defense": 112,
      "spAttack": 48,
      "spDefense": 48,
      "speed": 109
    }
  },
  {
    "id": 633,
    "slug": "deino",
    "name": "Deino",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/633.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/633.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/deino",
    "stats": {
      "total": 300,
      "hp": 52,
      "attack": 65,
      "defense": 50,
      "spAttack": 45,
      "spDefense": 50,
      "speed": 38
    }
  },
  {
    "id": 634,
    "slug": "zweilous",
    "name": "Zweilous",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/634.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/634.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zweilous",
    "stats": {
      "total": 420,
      "hp": 72,
      "attack": 85,
      "defense": 70,
      "spAttack": 65,
      "spDefense": 70,
      "speed": 58
    }
  },
  {
    "id": 635,
    "slug": "hydreigon",
    "name": "Hydreigon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/635.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/635.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hydreigon",
    "stats": {
      "total": 600,
      "hp": 92,
      "attack": 105,
      "defense": 90,
      "spAttack": 125,
      "spDefense": 90,
      "speed": 98
    }
  },
  {
    "id": 636,
    "slug": "larvesta",
    "name": "Larvesta",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/636.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/636.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/larvesta",
    "stats": {
      "total": 360,
      "hp": 55,
      "attack": 85,
      "defense": 55,
      "spAttack": 50,
      "spDefense": 55,
      "speed": 60
    }
  },
  {
    "id": 637,
    "slug": "volcarona",
    "name": "Volcarona",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/637.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/637.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/volcarona",
    "stats": {
      "total": 550,
      "hp": 85,
      "attack": 60,
      "defense": 65,
      "spAttack": 135,
      "spDefense": 105,
      "speed": 100
    }
  },
  {
    "id": 638,
    "slug": "cobalion",
    "name": "Cobalion",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/638.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/638.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cobalion",
    "stats": {
      "total": 580,
      "hp": 91,
      "attack": 90,
      "defense": 129,
      "spAttack": 90,
      "spDefense": 72,
      "speed": 108
    }
  },
  {
    "id": 639,
    "slug": "terrakion",
    "name": "Terrakion",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/639.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/639.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/terrakion",
    "stats": {
      "total": 580,
      "hp": 91,
      "attack": 129,
      "defense": 90,
      "spAttack": 72,
      "spDefense": 90,
      "speed": 108
    }
  },
  {
    "id": 640,
    "slug": "virizion",
    "name": "Virizion",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/640.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/640.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/virizion",
    "stats": {
      "total": 580,
      "hp": 91,
      "attack": 90,
      "defense": 72,
      "spAttack": 90,
      "spDefense": 129,
      "speed": 108
    }
  },
  {
    "id": 641,
    "slug": "tornadus",
    "name": "Tornadus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/641.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/641.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tornadus",
    "stats": {
      "total": 580,
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "spAttack": 125,
      "spDefense": 80,
      "speed": 111
    }
  },
  {
    "id": 642,
    "slug": "thundurus",
    "name": "Thundurus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/642.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/642.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/thundurus",
    "stats": {
      "total": 580,
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "spAttack": 125,
      "spDefense": 80,
      "speed": 111
    }
  },
  {
    "id": 643,
    "slug": "reshiram",
    "name": "Reshiram",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/643.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/643.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/reshiram",
    "stats": {
      "total": 680,
      "hp": 100,
      "attack": 120,
      "defense": 100,
      "spAttack": 150,
      "spDefense": 120,
      "speed": 90
    }
  },
  {
    "id": 644,
    "slug": "zekrom",
    "name": "Zekrom",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/644.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/644.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zekrom",
    "stats": {
      "total": 680,
      "hp": 100,
      "attack": 150,
      "defense": 120,
      "spAttack": 120,
      "spDefense": 100,
      "speed": 90
    }
  },
  {
    "id": 645,
    "slug": "landorus",
    "name": "Landorus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/645.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/645.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/landorus",
    "stats": {
      "total": 600,
      "hp": 89,
      "attack": 125,
      "defense": 90,
      "spAttack": 115,
      "spDefense": 80,
      "speed": 101
    }
  },
  {
    "id": 646,
    "slug": "kyurem",
    "name": "Kyurem",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/646.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/646.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kyurem",
    "stats": {
      "total": 660,
      "hp": 125,
      "attack": 130,
      "defense": 90,
      "spAttack": 130,
      "spDefense": 90,
      "speed": 95
    }
  },
  {
    "id": 647,
    "slug": "keldeo",
    "name": "Keldeo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/647.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/647.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/keldeo",
    "stats": {
      "total": 580,
      "hp": 91,
      "attack": 72,
      "defense": 90,
      "spAttack": 129,
      "spDefense": 90,
      "speed": 108
    }
  },
  {
    "id": 648,
    "slug": "meloetta",
    "name": "Meloetta",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/648.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/648.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/meloetta",
    "stats": {
      "total": 600,
      "hp": 100,
      "attack": 77,
      "defense": 77,
      "spAttack": 128,
      "spDefense": 128,
      "speed": 90
    }
  },
  {
    "id": 649,
    "slug": "genesect",
    "name": "Genesect",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/649.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/649.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/genesect",
    "stats": {
      "total": 600,
      "hp": 71,
      "attack": 120,
      "defense": 95,
      "spAttack": 120,
      "spDefense": 95,
      "speed": 99
    }
  },
  {
    "id": 650,
    "slug": "chespin",
    "name": "Chespin",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/650.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/650.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/chespin",
    "stats": {
      "total": 313,
      "hp": 56,
      "attack": 61,
      "defense": 65,
      "spAttack": 48,
      "spDefense": 45,
      "speed": 38
    }
  },
  {
    "id": 651,
    "slug": "quilladin",
    "name": "Quilladin",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/651.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/651.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/quilladin",
    "stats": {
      "total": 405,
      "hp": 61,
      "attack": 78,
      "defense": 95,
      "spAttack": 56,
      "spDefense": 58,
      "speed": 57
    }
  },
  {
    "id": 652,
    "slug": "chesnaught",
    "name": "Chesnaught",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/652.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/652.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/chesnaught",
    "stats": {
      "total": 530,
      "hp": 88,
      "attack": 107,
      "defense": 122,
      "spAttack": 74,
      "spDefense": 75,
      "speed": 64
    }
  },
  {
    "id": 653,
    "slug": "fennekin",
    "name": "Fennekin",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/653.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/653.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/fennekin",
    "stats": {
      "total": 307,
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "spAttack": 62,
      "spDefense": 60,
      "speed": 60
    }
  },
  {
    "id": 654,
    "slug": "braixen",
    "name": "Braixen",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/654.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/654.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/braixen",
    "stats": {
      "total": 409,
      "hp": 59,
      "attack": 59,
      "defense": 58,
      "spAttack": 90,
      "spDefense": 70,
      "speed": 73
    }
  },
  {
    "id": 655,
    "slug": "delphox",
    "name": "Delphox",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/655.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/655.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/delphox",
    "stats": {
      "total": 534,
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "spAttack": 114,
      "spDefense": 100,
      "speed": 104
    }
  },
  {
    "id": 656,
    "slug": "froakie",
    "name": "Froakie",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/656.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/656.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/froakie",
    "stats": {
      "total": 314,
      "hp": 41,
      "attack": 56,
      "defense": 40,
      "spAttack": 62,
      "spDefense": 44,
      "speed": 71
    }
  },
  {
    "id": 657,
    "slug": "frogadier",
    "name": "Frogadier",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/657.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/657.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/frogadier",
    "stats": {
      "total": 405,
      "hp": 54,
      "attack": 63,
      "defense": 52,
      "spAttack": 83,
      "spDefense": 56,
      "speed": 97
    }
  },
  {
    "id": 658,
    "slug": "greninja",
    "name": "Greninja",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/658.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/greninja",
    "stats": {
      "total": 530,
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "spAttack": 103,
      "spDefense": 71,
      "speed": 122
    }
  },
  {
    "id": 659,
    "slug": "bunnelby",
    "name": "Bunnelby",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/659.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/659.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bunnelby",
    "stats": {
      "total": 237,
      "hp": 38,
      "attack": 36,
      "defense": 38,
      "spAttack": 32,
      "spDefense": 36,
      "speed": 57
    }
  },
  {
    "id": 660,
    "slug": "diggersby",
    "name": "Diggersby",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/660.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/660.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/diggersby",
    "stats": {
      "total": 423,
      "hp": 85,
      "attack": 56,
      "defense": 77,
      "spAttack": 50,
      "spDefense": 77,
      "speed": 78
    }
  },
  {
    "id": 661,
    "slug": "fletchling",
    "name": "Fletchling",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/661.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/661.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/fletchling",
    "stats": {
      "total": 278,
      "hp": 45,
      "attack": 50,
      "defense": 43,
      "spAttack": 40,
      "spDefense": 38,
      "speed": 62
    }
  },
  {
    "id": 662,
    "slug": "fletchinder",
    "name": "Fletchinder",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/662.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/662.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/fletchinder",
    "stats": {
      "total": 382,
      "hp": 62,
      "attack": 73,
      "defense": 55,
      "spAttack": 56,
      "spDefense": 52,
      "speed": 84
    }
  },
  {
    "id": 663,
    "slug": "talonflame",
    "name": "Talonflame",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/663.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/663.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/talonflame",
    "stats": {
      "total": 499,
      "hp": 78,
      "attack": 81,
      "defense": 71,
      "spAttack": 74,
      "spDefense": 69,
      "speed": 126
    }
  },
  {
    "id": 664,
    "slug": "scatterbug",
    "name": "Scatterbug",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/664.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/664.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/scatterbug",
    "stats": {
      "total": 200,
      "hp": 38,
      "attack": 35,
      "defense": 40,
      "spAttack": 27,
      "spDefense": 25,
      "speed": 35
    }
  },
  {
    "id": 665,
    "slug": "spewpa",
    "name": "Spewpa",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/665.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/665.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/spewpa",
    "stats": {
      "total": 213,
      "hp": 45,
      "attack": 22,
      "defense": 60,
      "spAttack": 27,
      "spDefense": 30,
      "speed": 29
    }
  },
  {
    "id": 666,
    "slug": "vivillon",
    "name": "Vivillon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/666.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/666.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/vivillon",
    "stats": {
      "total": 411,
      "hp": 80,
      "attack": 52,
      "defense": 50,
      "spAttack": 90,
      "spDefense": 50,
      "speed": 89
    }
  },
  {
    "id": 667,
    "slug": "litleo",
    "name": "Litleo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/667.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/667.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/litleo",
    "stats": {
      "total": 369,
      "hp": 62,
      "attack": 50,
      "defense": 58,
      "spAttack": 73,
      "spDefense": 54,
      "speed": 72
    }
  },
  {
    "id": 668,
    "slug": "pyroar",
    "name": "Pyroar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/668.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/668.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pyroar",
    "stats": {
      "total": 507,
      "hp": 86,
      "attack": 68,
      "defense": 72,
      "spAttack": 109,
      "spDefense": 66,
      "speed": 106
    }
  },
  {
    "id": 669,
    "slug": "flabebe",
    "name": "Flabébé",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/669.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/669.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/flabebe",
    "stats": {
      "total": 303,
      "hp": 44,
      "attack": 38,
      "defense": 39,
      "spAttack": 61,
      "spDefense": 79,
      "speed": 42
    }
  },
  {
    "id": 670,
    "slug": "floette",
    "name": "Floette",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/670.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/670.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/floette",
    "stats": {
      "total": 371,
      "hp": 54,
      "attack": 45,
      "defense": 47,
      "spAttack": 75,
      "spDefense": 98,
      "speed": 52
    }
  },
  {
    "id": 671,
    "slug": "florges",
    "name": "Florges",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/671.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/671.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/florges",
    "stats": {
      "total": 552,
      "hp": 78,
      "attack": 65,
      "defense": 68,
      "spAttack": 112,
      "spDefense": 154,
      "speed": 75
    }
  },
  {
    "id": 672,
    "slug": "skiddo",
    "name": "Skiddo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/672.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/672.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/skiddo",
    "stats": {
      "total": 350,
      "hp": 66,
      "attack": 65,
      "defense": 48,
      "spAttack": 62,
      "spDefense": 57,
      "speed": 52
    }
  },
  {
    "id": 673,
    "slug": "gogoat",
    "name": "Gogoat",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/673.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/673.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gogoat",
    "stats": {
      "total": 531,
      "hp": 123,
      "attack": 100,
      "defense": 62,
      "spAttack": 97,
      "spDefense": 81,
      "speed": 68
    }
  },
  {
    "id": 674,
    "slug": "pancham",
    "name": "Pancham",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/674.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/674.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pancham",
    "stats": {
      "total": 348,
      "hp": 67,
      "attack": 82,
      "defense": 62,
      "spAttack": 46,
      "spDefense": 48,
      "speed": 43
    }
  },
  {
    "id": 675,
    "slug": "pangoro",
    "name": "Pangoro",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/675.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/675.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pangoro",
    "stats": {
      "total": 495,
      "hp": 95,
      "attack": 124,
      "defense": 78,
      "spAttack": 69,
      "spDefense": 71,
      "speed": 58
    }
  },
  {
    "id": 676,
    "slug": "furfrou",
    "name": "Furfrou",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/676.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/676.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/furfrou",
    "stats": {
      "total": 472,
      "hp": 75,
      "attack": 80,
      "defense": 60,
      "spAttack": 65,
      "spDefense": 90,
      "speed": 102
    }
  },
  {
    "id": 677,
    "slug": "espurr",
    "name": "Espurr",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/677.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/677.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/espurr",
    "stats": {
      "total": 355,
      "hp": 62,
      "attack": 48,
      "defense": 54,
      "spAttack": 63,
      "spDefense": 60,
      "speed": 68
    }
  },
  {
    "id": 678,
    "slug": "meowstic",
    "name": "Meowstic",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/678.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/678.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/meowstic",
    "stats": {
      "total": 466,
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "spAttack": 83,
      "spDefense": 81,
      "speed": 104
    }
  },
  {
    "id": 679,
    "slug": "honedge",
    "name": "Honedge",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/679.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/679.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/honedge",
    "stats": {
      "total": 325,
      "hp": 45,
      "attack": 80,
      "defense": 100,
      "spAttack": 35,
      "spDefense": 37,
      "speed": 28
    }
  },
  {
    "id": 680,
    "slug": "doublade",
    "name": "Doublade",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/680.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/680.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/doublade",
    "stats": {
      "total": 448,
      "hp": 59,
      "attack": 110,
      "defense": 150,
      "spAttack": 45,
      "spDefense": 49,
      "speed": 35
    }
  },
  {
    "id": 681,
    "slug": "aegislash",
    "name": "Aegislash",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/681.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/681.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/aegislash",
    "stats": {
      "total": 500,
      "hp": 60,
      "attack": 50,
      "defense": 140,
      "spAttack": 50,
      "spDefense": 140,
      "speed": 60
    }
  },
  {
    "id": 682,
    "slug": "spritzee",
    "name": "Spritzee",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/682.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/682.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/spritzee",
    "stats": {
      "total": 341,
      "hp": 78,
      "attack": 52,
      "defense": 60,
      "spAttack": 63,
      "spDefense": 65,
      "speed": 23
    }
  },
  {
    "id": 683,
    "slug": "aromatisse",
    "name": "Aromatisse",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/683.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/683.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/aromatisse",
    "stats": {
      "total": 462,
      "hp": 101,
      "attack": 72,
      "defense": 72,
      "spAttack": 99,
      "spDefense": 89,
      "speed": 29
    }
  },
  {
    "id": 684,
    "slug": "swirlix",
    "name": "Swirlix",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/684.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/684.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/swirlix",
    "stats": {
      "total": 341,
      "hp": 62,
      "attack": 48,
      "defense": 66,
      "spAttack": 59,
      "spDefense": 57,
      "speed": 49
    }
  },
  {
    "id": 685,
    "slug": "slurpuff",
    "name": "Slurpuff",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/685.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/685.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/slurpuff",
    "stats": {
      "total": 480,
      "hp": 82,
      "attack": 80,
      "defense": 86,
      "spAttack": 85,
      "spDefense": 75,
      "speed": 72
    }
  },
  {
    "id": 686,
    "slug": "inkay",
    "name": "Inkay",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/686.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/686.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/inkay",
    "stats": {
      "total": 288,
      "hp": 53,
      "attack": 54,
      "defense": 53,
      "spAttack": 37,
      "spDefense": 46,
      "speed": 45
    }
  },
  {
    "id": 687,
    "slug": "malamar",
    "name": "Malamar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/687.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/687.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/malamar",
    "stats": {
      "total": 482,
      "hp": 86,
      "attack": 92,
      "defense": 88,
      "spAttack": 68,
      "spDefense": 75,
      "speed": 73
    }
  },
  {
    "id": 688,
    "slug": "binacle",
    "name": "Binacle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/688.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/688.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/binacle",
    "stats": {
      "total": 306,
      "hp": 42,
      "attack": 52,
      "defense": 67,
      "spAttack": 39,
      "spDefense": 56,
      "speed": 50
    }
  },
  {
    "id": 689,
    "slug": "barbaracle",
    "name": "Barbaracle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/689.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/689.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/barbaracle",
    "stats": {
      "total": 500,
      "hp": 72,
      "attack": 105,
      "defense": 115,
      "spAttack": 54,
      "spDefense": 86,
      "speed": 68
    }
  },
  {
    "id": 690,
    "slug": "skrelp",
    "name": "Skrelp",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/690.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/690.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/skrelp",
    "stats": {
      "total": 320,
      "hp": 50,
      "attack": 60,
      "defense": 60,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 30
    }
  },
  {
    "id": 691,
    "slug": "dragalge",
    "name": "Dragalge",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/691.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/691.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dragalge",
    "stats": {
      "total": 494,
      "hp": 65,
      "attack": 75,
      "defense": 90,
      "spAttack": 97,
      "spDefense": 123,
      "speed": 44
    }
  },
  {
    "id": 692,
    "slug": "clauncher",
    "name": "Clauncher",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/692.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/692.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/clauncher",
    "stats": {
      "total": 330,
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "spAttack": 58,
      "spDefense": 63,
      "speed": 44
    }
  },
  {
    "id": 693,
    "slug": "clawitzer",
    "name": "Clawitzer",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/693.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/693.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/clawitzer",
    "stats": {
      "total": 500,
      "hp": 71,
      "attack": 73,
      "defense": 88,
      "spAttack": 120,
      "spDefense": 89,
      "speed": 59
    }
  },
  {
    "id": 694,
    "slug": "helioptile",
    "name": "Helioptile",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/694.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/694.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/helioptile",
    "stats": {
      "total": 289,
      "hp": 44,
      "attack": 38,
      "defense": 33,
      "spAttack": 61,
      "spDefense": 43,
      "speed": 70
    }
  },
  {
    "id": 695,
    "slug": "heliolisk",
    "name": "Heliolisk",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/695.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/695.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/heliolisk",
    "stats": {
      "total": 481,
      "hp": 62,
      "attack": 55,
      "defense": 52,
      "spAttack": 109,
      "spDefense": 94,
      "speed": 109
    }
  },
  {
    "id": 696,
    "slug": "tyrunt",
    "name": "Tyrunt",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/696.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/696.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tyrunt",
    "stats": {
      "total": 362,
      "hp": 58,
      "attack": 89,
      "defense": 77,
      "spAttack": 45,
      "spDefense": 45,
      "speed": 48
    }
  },
  {
    "id": 697,
    "slug": "tyrantrum",
    "name": "Tyrantrum",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/697.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/697.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tyrantrum",
    "stats": {
      "total": 521,
      "hp": 82,
      "attack": 121,
      "defense": 119,
      "spAttack": 69,
      "spDefense": 59,
      "speed": 71
    }
  },
  {
    "id": 698,
    "slug": "amaura",
    "name": "Amaura",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/698.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/698.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/amaura",
    "stats": {
      "total": 362,
      "hp": 77,
      "attack": 59,
      "defense": 50,
      "spAttack": 67,
      "spDefense": 63,
      "speed": 46
    }
  },
  {
    "id": 699,
    "slug": "aurorus",
    "name": "Aurorus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/699.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/699.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/aurorus",
    "stats": {
      "total": 521,
      "hp": 123,
      "attack": 77,
      "defense": 72,
      "spAttack": 99,
      "spDefense": 92,
      "speed": 58
    }
  },
  {
    "id": 700,
    "slug": "sylveon",
    "name": "Sylveon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/700.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sylveon",
    "stats": {
      "total": 525,
      "hp": 95,
      "attack": 65,
      "defense": 65,
      "spAttack": 110,
      "spDefense": 130,
      "speed": 60
    }
  },
  {
    "id": 701,
    "slug": "hawlucha",
    "name": "Hawlucha",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/701.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/701.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hawlucha",
    "stats": {
      "total": 500,
      "hp": 78,
      "attack": 92,
      "defense": 75,
      "spAttack": 74,
      "spDefense": 63,
      "speed": 118
    }
  },
  {
    "id": 702,
    "slug": "dedenne",
    "name": "Dedenne",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/702.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/702.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dedenne",
    "stats": {
      "total": 431,
      "hp": 67,
      "attack": 58,
      "defense": 57,
      "spAttack": 81,
      "spDefense": 67,
      "speed": 101
    }
  },
  {
    "id": 703,
    "slug": "carbink",
    "name": "Carbink",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/703.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/703.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/carbink",
    "stats": {
      "total": 500,
      "hp": 50,
      "attack": 50,
      "defense": 150,
      "spAttack": 50,
      "spDefense": 150,
      "speed": 50
    }
  },
  {
    "id": 704,
    "slug": "goomy",
    "name": "Goomy",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/704.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/704.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/goomy",
    "stats": {
      "total": 300,
      "hp": 45,
      "attack": 50,
      "defense": 35,
      "spAttack": 55,
      "spDefense": 75,
      "speed": 40
    }
  },
  {
    "id": 705,
    "slug": "sliggoo",
    "name": "Sliggoo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/705.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/705.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sliggoo",
    "stats": {
      "total": 452,
      "hp": 68,
      "attack": 75,
      "defense": 53,
      "spAttack": 83,
      "spDefense": 113,
      "speed": 60
    }
  },
  {
    "id": 706,
    "slug": "goodra",
    "name": "Goodra",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/706.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/706.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/goodra",
    "stats": {
      "total": 600,
      "hp": 90,
      "attack": 100,
      "defense": 70,
      "spAttack": 110,
      "spDefense": 150,
      "speed": 80
    }
  },
  {
    "id": 707,
    "slug": "klefki",
    "name": "Klefki",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/707.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/707.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/klefki",
    "stats": {
      "total": 470,
      "hp": 57,
      "attack": 80,
      "defense": 91,
      "spAttack": 80,
      "spDefense": 87,
      "speed": 75
    }
  },
  {
    "id": 708,
    "slug": "phantump",
    "name": "Phantump",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/708.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/708.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/phantump",
    "stats": {
      "total": 309,
      "hp": 43,
      "attack": 70,
      "defense": 48,
      "spAttack": 50,
      "spDefense": 60,
      "speed": 38
    }
  },
  {
    "id": 709,
    "slug": "trevenant",
    "name": "Trevenant",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/709.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/709.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/trevenant",
    "stats": {
      "total": 474,
      "hp": 85,
      "attack": 110,
      "defense": 76,
      "spAttack": 65,
      "spDefense": 82,
      "speed": 56
    }
  },
  {
    "id": 710,
    "slug": "pumpkaboo",
    "name": "Pumpkaboo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/710.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/710.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pumpkaboo",
    "stats": {
      "total": 335,
      "hp": 49,
      "attack": 66,
      "defense": 70,
      "spAttack": 44,
      "spDefense": 55,
      "speed": 51
    }
  },
  {
    "id": 711,
    "slug": "gourgeist",
    "name": "Gourgeist",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/711.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/711.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gourgeist",
    "stats": {
      "total": 494,
      "hp": 65,
      "attack": 90,
      "defense": 122,
      "spAttack": 58,
      "spDefense": 75,
      "speed": 84
    }
  },
  {
    "id": 712,
    "slug": "bergmite",
    "name": "Bergmite",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/712.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/712.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bergmite",
    "stats": {
      "total": 304,
      "hp": 55,
      "attack": 69,
      "defense": 85,
      "spAttack": 32,
      "spDefense": 35,
      "speed": 28
    }
  },
  {
    "id": 713,
    "slug": "avalugg",
    "name": "Avalugg",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/713.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/713.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/avalugg",
    "stats": {
      "total": 514,
      "hp": 95,
      "attack": 117,
      "defense": 184,
      "spAttack": 44,
      "spDefense": 46,
      "speed": 28
    }
  },
  {
    "id": 714,
    "slug": "noibat",
    "name": "Noibat",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/714.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/714.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/noibat",
    "stats": {
      "total": 245,
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "spAttack": 45,
      "spDefense": 40,
      "speed": 55
    }
  },
  {
    "id": 715,
    "slug": "noivern",
    "name": "Noivern",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/715.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/715.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/noivern",
    "stats": {
      "total": 535,
      "hp": 85,
      "attack": 70,
      "defense": 80,
      "spAttack": 97,
      "spDefense": 80,
      "speed": 123
    }
  },
  {
    "id": 716,
    "slug": "xerneas",
    "name": "Xerneas",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/716.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/716.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/xerneas",
    "stats": {
      "total": 680,
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "spAttack": 131,
      "spDefense": 98,
      "speed": 99
    }
  },
  {
    "id": 717,
    "slug": "yveltal",
    "name": "Yveltal",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/717.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/717.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/yveltal",
    "stats": {
      "total": 680,
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "spAttack": 131,
      "spDefense": 98,
      "speed": 99
    }
  },
  {
    "id": 718,
    "slug": "zygarde",
    "name": "Zygarde",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/718.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/718.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zygarde",
    "stats": {
      "total": 600,
      "hp": 108,
      "attack": 100,
      "defense": 121,
      "spAttack": 81,
      "spDefense": 95,
      "speed": 95
    }
  },
  {
    "id": 719,
    "slug": "diancie",
    "name": "Diancie",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/719.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/719.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/diancie",
    "stats": {
      "total": 600,
      "hp": 50,
      "attack": 100,
      "defense": 150,
      "spAttack": 100,
      "spDefense": 150,
      "speed": 50
    }
  },
  {
    "id": 720,
    "slug": "hoopa",
    "name": "Hoopa",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/720.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/720.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hoopa",
    "stats": {
      "total": 600,
      "hp": 80,
      "attack": 110,
      "defense": 60,
      "spAttack": 150,
      "spDefense": 130,
      "speed": 70
    }
  },
  {
    "id": 721,
    "slug": "volcanion",
    "name": "Volcanion",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/721.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/721.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/volcanion",
    "stats": {
      "total": 600,
      "hp": 80,
      "attack": 110,
      "defense": 120,
      "spAttack": 130,
      "spDefense": 90,
      "speed": 70
    }
  },
  {
    "id": 722,
    "slug": "rowlet",
    "name": "Rowlet",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/722.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/722.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rowlet",
    "stats": {
      "total": 320,
      "hp": 68,
      "attack": 55,
      "defense": 55,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 42
    }
  },
  {
    "id": 723,
    "slug": "dartrix",
    "name": "Dartrix",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/723.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/723.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dartrix",
    "stats": {
      "total": 420,
      "hp": 78,
      "attack": 75,
      "defense": 75,
      "spAttack": 70,
      "spDefense": 70,
      "speed": 52
    }
  },
  {
    "id": 724,
    "slug": "decidueye",
    "name": "Decidueye",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/724.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/724.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/decidueye",
    "stats": {
      "total": 530,
      "hp": 78,
      "attack": 107,
      "defense": 75,
      "spAttack": 100,
      "spDefense": 100,
      "speed": 70
    }
  },
  {
    "id": 725,
    "slug": "litten",
    "name": "Litten",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/725.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/725.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/litten",
    "stats": {
      "total": 320,
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "spAttack": 60,
      "spDefense": 40,
      "speed": 70
    }
  },
  {
    "id": 726,
    "slug": "torracat",
    "name": "Torracat",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/726.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/726.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/torracat",
    "stats": {
      "total": 420,
      "hp": 65,
      "attack": 85,
      "defense": 50,
      "spAttack": 80,
      "spDefense": 50,
      "speed": 90
    }
  },
  {
    "id": 727,
    "slug": "incineroar",
    "name": "Incineroar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/727.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/727.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/incineroar",
    "stats": {
      "total": 530,
      "hp": 95,
      "attack": 115,
      "defense": 90,
      "spAttack": 80,
      "spDefense": 90,
      "speed": 60
    }
  },
  {
    "id": 728,
    "slug": "popplio",
    "name": "Popplio",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/728.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/728.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/popplio",
    "stats": {
      "total": 320,
      "hp": 50,
      "attack": 54,
      "defense": 54,
      "spAttack": 66,
      "spDefense": 56,
      "speed": 40
    }
  },
  {
    "id": 729,
    "slug": "brionne",
    "name": "Brionne",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/729.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/729.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/brionne",
    "stats": {
      "total": 420,
      "hp": 60,
      "attack": 69,
      "defense": 69,
      "spAttack": 91,
      "spDefense": 81,
      "speed": 50
    }
  },
  {
    "id": 730,
    "slug": "primarina",
    "name": "Primarina",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/730.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/730.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/primarina",
    "stats": {
      "total": 530,
      "hp": 80,
      "attack": 74,
      "defense": 74,
      "spAttack": 126,
      "spDefense": 116,
      "speed": 60
    }
  },
  {
    "id": 731,
    "slug": "pikipek",
    "name": "Pikipek",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/731.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/731.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pikipek",
    "stats": {
      "total": 265,
      "hp": 35,
      "attack": 75,
      "defense": 30,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 65
    }
  },
  {
    "id": 732,
    "slug": "trumbeak",
    "name": "Trumbeak",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/732.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/732.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/trumbeak",
    "stats": {
      "total": 355,
      "hp": 55,
      "attack": 85,
      "defense": 50,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 75
    }
  },
  {
    "id": 733,
    "slug": "toucannon",
    "name": "Toucannon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/733.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/733.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/toucannon",
    "stats": {
      "total": 485,
      "hp": 80,
      "attack": 120,
      "defense": 75,
      "spAttack": 75,
      "spDefense": 75,
      "speed": 60
    }
  },
  {
    "id": 734,
    "slug": "yungoos",
    "name": "Yungoos",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/734.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/734.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/yungoos",
    "stats": {
      "total": 253,
      "hp": 48,
      "attack": 70,
      "defense": 30,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 45
    }
  },
  {
    "id": 735,
    "slug": "gumshoos",
    "name": "Gumshoos",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/735.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/735.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gumshoos",
    "stats": {
      "total": 418,
      "hp": 88,
      "attack": 110,
      "defense": 60,
      "spAttack": 55,
      "spDefense": 60,
      "speed": 45
    }
  },
  {
    "id": 736,
    "slug": "grubbin",
    "name": "Grubbin",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/736.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/736.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/grubbin",
    "stats": {
      "total": 300,
      "hp": 47,
      "attack": 62,
      "defense": 45,
      "spAttack": 55,
      "spDefense": 45,
      "speed": 46
    }
  },
  {
    "id": 737,
    "slug": "charjabug",
    "name": "Charjabug",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/737.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/737.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/charjabug",
    "stats": {
      "total": 400,
      "hp": 57,
      "attack": 82,
      "defense": 95,
      "spAttack": 55,
      "spDefense": 75,
      "speed": 36
    }
  },
  {
    "id": 738,
    "slug": "vikavolt",
    "name": "Vikavolt",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/738.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/738.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/vikavolt",
    "stats": {
      "total": 500,
      "hp": 77,
      "attack": 70,
      "defense": 90,
      "spAttack": 145,
      "spDefense": 75,
      "speed": 43
    }
  },
  {
    "id": 739,
    "slug": "crabrawler",
    "name": "Crabrawler",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/739.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/739.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/crabrawler",
    "stats": {
      "total": 338,
      "hp": 47,
      "attack": 82,
      "defense": 57,
      "spAttack": 42,
      "spDefense": 47,
      "speed": 63
    }
  },
  {
    "id": 740,
    "slug": "crabominable",
    "name": "Crabominable",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/740.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/740.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/crabominable",
    "stats": {
      "total": 478,
      "hp": 97,
      "attack": 132,
      "defense": 77,
      "spAttack": 62,
      "spDefense": 67,
      "speed": 43
    }
  },
  {
    "id": 741,
    "slug": "oricorio",
    "name": "Oricorio",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/741.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/741.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/oricorio",
    "stats": {
      "total": 476,
      "hp": 75,
      "attack": 70,
      "defense": 70,
      "spAttack": 98,
      "spDefense": 70,
      "speed": 93
    }
  },
  {
    "id": 742,
    "slug": "cutiefly",
    "name": "Cutiefly",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/742.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/742.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cutiefly",
    "stats": {
      "total": 304,
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "spAttack": 55,
      "spDefense": 40,
      "speed": 84
    }
  },
  {
    "id": 743,
    "slug": "ribombee",
    "name": "Ribombee",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/743.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/743.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ribombee",
    "stats": {
      "total": 464,
      "hp": 60,
      "attack": 55,
      "defense": 60,
      "spAttack": 95,
      "spDefense": 70,
      "speed": 124
    }
  },
  {
    "id": 744,
    "slug": "rockruff",
    "name": "Rockruff",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/744.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/744.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rockruff",
    "stats": {
      "total": 280,
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "spAttack": 30,
      "spDefense": 40,
      "speed": 60
    }
  },
  {
    "id": 745,
    "slug": "lycanroc",
    "name": "Lycanroc",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/745.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/745.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lycanroc",
    "stats": {
      "total": 487,
      "hp": 75,
      "attack": 115,
      "defense": 65,
      "spAttack": 55,
      "spDefense": 65,
      "speed": 112
    }
  },
  {
    "id": 746,
    "slug": "wishiwashi",
    "name": "Wishiwashi",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/746.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/746.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wishiwashi",
    "stats": {
      "total": 175,
      "hp": 45,
      "attack": 20,
      "defense": 20,
      "spAttack": 25,
      "spDefense": 25,
      "speed": 40
    }
  },
  {
    "id": 747,
    "slug": "mareanie",
    "name": "Mareanie",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/747.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/747.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mareanie",
    "stats": {
      "total": 305,
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "spAttack": 43,
      "spDefense": 52,
      "speed": 45
    }
  },
  {
    "id": 748,
    "slug": "toxapex",
    "name": "Toxapex",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/748.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/748.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/toxapex",
    "stats": {
      "total": 495,
      "hp": 50,
      "attack": 63,
      "defense": 152,
      "spAttack": 53,
      "spDefense": 142,
      "speed": 35
    }
  },
  {
    "id": 749,
    "slug": "mudbray",
    "name": "Mudbray",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/749.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/749.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mudbray",
    "stats": {
      "total": 385,
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "spAttack": 45,
      "spDefense": 55,
      "speed": 45
    }
  },
  {
    "id": 750,
    "slug": "mudsdale",
    "name": "Mudsdale",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/750.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/750.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mudsdale",
    "stats": {
      "total": 500,
      "hp": 100,
      "attack": 125,
      "defense": 100,
      "spAttack": 55,
      "spDefense": 85,
      "speed": 35
    }
  },
  {
    "id": 751,
    "slug": "dewpider",
    "name": "Dewpider",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/751.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/751.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dewpider",
    "stats": {
      "total": 269,
      "hp": 38,
      "attack": 40,
      "defense": 52,
      "spAttack": 40,
      "spDefense": 72,
      "speed": 27
    }
  },
  {
    "id": 752,
    "slug": "araquanid",
    "name": "Araquanid",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/752.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/752.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/araquanid",
    "stats": {
      "total": 454,
      "hp": 68,
      "attack": 70,
      "defense": 92,
      "spAttack": 50,
      "spDefense": 132,
      "speed": 42
    }
  },
  {
    "id": 753,
    "slug": "fomantis",
    "name": "Fomantis",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/753.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/753.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/fomantis",
    "stats": {
      "total": 250,
      "hp": 40,
      "attack": 55,
      "defense": 35,
      "spAttack": 50,
      "spDefense": 35,
      "speed": 35
    }
  },
  {
    "id": 754,
    "slug": "lurantis",
    "name": "Lurantis",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/754.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/754.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lurantis",
    "stats": {
      "total": 480,
      "hp": 70,
      "attack": 105,
      "defense": 90,
      "spAttack": 80,
      "spDefense": 90,
      "speed": 45
    }
  },
  {
    "id": 755,
    "slug": "morelull",
    "name": "Morelull",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/755.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/755.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/morelull",
    "stats": {
      "total": 285,
      "hp": 40,
      "attack": 35,
      "defense": 55,
      "spAttack": 65,
      "spDefense": 75,
      "speed": 15
    }
  },
  {
    "id": 756,
    "slug": "shiinotic",
    "name": "Shiinotic",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/756.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/756.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shiinotic",
    "stats": {
      "total": 405,
      "hp": 60,
      "attack": 45,
      "defense": 80,
      "spAttack": 90,
      "spDefense": 100,
      "speed": 30
    }
  },
  {
    "id": 757,
    "slug": "salandit",
    "name": "Salandit",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/757.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/757.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/salandit",
    "stats": {
      "total": 320,
      "hp": 48,
      "attack": 44,
      "defense": 40,
      "spAttack": 71,
      "spDefense": 40,
      "speed": 77
    }
  },
  {
    "id": 758,
    "slug": "salazzle",
    "name": "Salazzle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/758.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/758.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/salazzle",
    "stats": {
      "total": 480,
      "hp": 68,
      "attack": 64,
      "defense": 60,
      "spAttack": 111,
      "spDefense": 60,
      "speed": 117
    }
  },
  {
    "id": 759,
    "slug": "stufful",
    "name": "Stufful",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/759.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/759.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/stufful",
    "stats": {
      "total": 340,
      "hp": 70,
      "attack": 75,
      "defense": 50,
      "spAttack": 45,
      "spDefense": 50,
      "speed": 50
    }
  },
  {
    "id": 760,
    "slug": "bewear",
    "name": "Bewear",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/760.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/760.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bewear",
    "stats": {
      "total": 500,
      "hp": 120,
      "attack": 125,
      "defense": 80,
      "spAttack": 55,
      "spDefense": 60,
      "speed": 60
    }
  },
  {
    "id": 761,
    "slug": "bounsweet",
    "name": "Bounsweet",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/761.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/761.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bounsweet",
    "stats": {
      "total": 210,
      "hp": 42,
      "attack": 30,
      "defense": 38,
      "spAttack": 30,
      "spDefense": 38,
      "speed": 32
    }
  },
  {
    "id": 762,
    "slug": "steenee",
    "name": "Steenee",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/762.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/762.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/steenee",
    "stats": {
      "total": 290,
      "hp": 52,
      "attack": 40,
      "defense": 48,
      "spAttack": 40,
      "spDefense": 48,
      "speed": 62
    }
  },
  {
    "id": 763,
    "slug": "tsareena",
    "name": "Tsareena",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/763.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/763.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tsareena",
    "stats": {
      "total": 510,
      "hp": 72,
      "attack": 120,
      "defense": 98,
      "spAttack": 50,
      "spDefense": 98,
      "speed": 72
    }
  },
  {
    "id": 764,
    "slug": "comfey",
    "name": "Comfey",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/764.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/764.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/comfey",
    "stats": {
      "total": 485,
      "hp": 51,
      "attack": 52,
      "defense": 90,
      "spAttack": 82,
      "spDefense": 110,
      "speed": 100
    }
  },
  {
    "id": 765,
    "slug": "oranguru",
    "name": "Oranguru",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/765.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/765.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/oranguru",
    "stats": {
      "total": 490,
      "hp": 90,
      "attack": 60,
      "defense": 80,
      "spAttack": 90,
      "spDefense": 110,
      "speed": 60
    }
  },
  {
    "id": 766,
    "slug": "passimian",
    "name": "Passimian",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/766.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/766.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/passimian",
    "stats": {
      "total": 490,
      "hp": 100,
      "attack": 120,
      "defense": 90,
      "spAttack": 40,
      "spDefense": 60,
      "speed": 80
    }
  },
  {
    "id": 767,
    "slug": "wimpod",
    "name": "Wimpod",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/767.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/767.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wimpod",
    "stats": {
      "total": 230,
      "hp": 25,
      "attack": 35,
      "defense": 40,
      "spAttack": 20,
      "spDefense": 30,
      "speed": 80
    }
  },
  {
    "id": 768,
    "slug": "golisopod",
    "name": "Golisopod",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/768.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/768.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/golisopod",
    "stats": {
      "total": 530,
      "hp": 75,
      "attack": 125,
      "defense": 140,
      "spAttack": 60,
      "spDefense": 90,
      "speed": 40
    }
  },
  {
    "id": 769,
    "slug": "sandygast",
    "name": "Sandygast",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/769.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/769.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sandygast",
    "stats": {
      "total": 320,
      "hp": 55,
      "attack": 55,
      "defense": 80,
      "spAttack": 70,
      "spDefense": 45,
      "speed": 15
    }
  },
  {
    "id": 770,
    "slug": "palossand",
    "name": "Palossand",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/770.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/770.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/palossand",
    "stats": {
      "total": 480,
      "hp": 85,
      "attack": 75,
      "defense": 110,
      "spAttack": 100,
      "spDefense": 75,
      "speed": 35
    }
  },
  {
    "id": 771,
    "slug": "pyukumuku",
    "name": "Pyukumuku",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/771.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/771.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pyukumuku",
    "stats": {
      "total": 410,
      "hp": 55,
      "attack": 60,
      "defense": 130,
      "spAttack": 30,
      "spDefense": 130,
      "speed": 5
    }
  },
  {
    "id": 772,
    "slug": "type-null",
    "name": "Type: Null",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/772.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/772.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/type-null",
    "stats": {
      "total": 534,
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "spAttack": 95,
      "spDefense": 95,
      "speed": 59
    }
  },
  {
    "id": 773,
    "slug": "silvally",
    "name": "Silvally",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/773.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/773.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/silvally",
    "stats": {
      "total": 570,
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "spAttack": 95,
      "spDefense": 95,
      "speed": 95
    }
  },
  {
    "id": 774,
    "slug": "minior",
    "name": "Minior",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/774.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/774.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/minior",
    "stats": {
      "total": 440,
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "spAttack": 60,
      "spDefense": 100,
      "speed": 60
    }
  },
  {
    "id": 775,
    "slug": "komala",
    "name": "Komala",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/775.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/775.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/komala",
    "stats": {
      "total": 480,
      "hp": 65,
      "attack": 115,
      "defense": 65,
      "spAttack": 75,
      "spDefense": 95,
      "speed": 65
    }
  },
  {
    "id": 776,
    "slug": "turtonator",
    "name": "Turtonator",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/776.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/776.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/turtonator",
    "stats": {
      "total": 485,
      "hp": 60,
      "attack": 78,
      "defense": 135,
      "spAttack": 91,
      "spDefense": 85,
      "speed": 36
    }
  },
  {
    "id": 777,
    "slug": "togedemaru",
    "name": "Togedemaru",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/777.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/777.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/togedemaru",
    "stats": {
      "total": 435,
      "hp": 65,
      "attack": 98,
      "defense": 63,
      "spAttack": 40,
      "spDefense": 73,
      "speed": 96
    }
  },
  {
    "id": 778,
    "slug": "mimikyu",
    "name": "Mimikyu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/778.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/778.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mimikyu",
    "stats": {
      "total": 476,
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "spAttack": 50,
      "spDefense": 105,
      "speed": 96
    }
  },
  {
    "id": 779,
    "slug": "bruxish",
    "name": "Bruxish",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/779.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/779.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bruxish",
    "stats": {
      "total": 475,
      "hp": 68,
      "attack": 105,
      "defense": 70,
      "spAttack": 70,
      "spDefense": 70,
      "speed": 92
    }
  },
  {
    "id": 780,
    "slug": "drampa",
    "name": "Drampa",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/780.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/780.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/drampa",
    "stats": {
      "total": 485,
      "hp": 78,
      "attack": 60,
      "defense": 85,
      "spAttack": 135,
      "spDefense": 91,
      "speed": 36
    }
  },
  {
    "id": 781,
    "slug": "dhelmise",
    "name": "Dhelmise",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/781.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/781.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dhelmise",
    "stats": {
      "total": 517,
      "hp": 70,
      "attack": 131,
      "defense": 100,
      "spAttack": 86,
      "spDefense": 90,
      "speed": 40
    }
  },
  {
    "id": 782,
    "slug": "jangmo-o",
    "name": "Jangmo-o",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/782.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/782.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/jangmo-o",
    "stats": {
      "total": 300,
      "hp": 45,
      "attack": 55,
      "defense": 65,
      "spAttack": 45,
      "spDefense": 45,
      "speed": 45
    }
  },
  {
    "id": 783,
    "slug": "hakamo-o",
    "name": "Hakamo-o",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/783.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/783.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hakamo-o",
    "stats": {
      "total": 420,
      "hp": 55,
      "attack": 75,
      "defense": 90,
      "spAttack": 65,
      "spDefense": 70,
      "speed": 65
    }
  },
  {
    "id": 784,
    "slug": "kommo-o",
    "name": "Kommo-o",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/784.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/784.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kommo-o",
    "stats": {
      "total": 600,
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "spAttack": 100,
      "spDefense": 105,
      "speed": 85
    }
  },
  {
    "id": 785,
    "slug": "tapu-koko",
    "name": "Tapu Koko",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/785.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/785.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tapu-koko",
    "stats": {
      "total": 570,
      "hp": 70,
      "attack": 115,
      "defense": 85,
      "spAttack": 95,
      "spDefense": 75,
      "speed": 130
    }
  },
  {
    "id": 786,
    "slug": "tapu-lele",
    "name": "Tapu Lele",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/786.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/786.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tapu-lele",
    "stats": {
      "total": 570,
      "hp": 70,
      "attack": 85,
      "defense": 75,
      "spAttack": 130,
      "spDefense": 115,
      "speed": 95
    }
  },
  {
    "id": 787,
    "slug": "tapu-bulu",
    "name": "Tapu Bulu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/787.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/787.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tapu-bulu",
    "stats": {
      "total": 570,
      "hp": 70,
      "attack": 130,
      "defense": 115,
      "spAttack": 85,
      "spDefense": 95,
      "speed": 75
    }
  },
  {
    "id": 788,
    "slug": "tapu-fini",
    "name": "Tapu Fini",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/788.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/788.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tapu-fini",
    "stats": {
      "total": 570,
      "hp": 70,
      "attack": 75,
      "defense": 115,
      "spAttack": 95,
      "spDefense": 130,
      "speed": 85
    }
  },
  {
    "id": 789,
    "slug": "cosmog",
    "name": "Cosmog",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/789.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/789.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cosmog",
    "stats": {
      "total": 200,
      "hp": 43,
      "attack": 29,
      "defense": 31,
      "spAttack": 29,
      "spDefense": 31,
      "speed": 37
    }
  },
  {
    "id": 790,
    "slug": "cosmoem",
    "name": "Cosmoem",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/790.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/790.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cosmoem",
    "stats": {
      "total": 400,
      "hp": 43,
      "attack": 29,
      "defense": 131,
      "spAttack": 29,
      "spDefense": 131,
      "speed": 37
    }
  },
  {
    "id": 791,
    "slug": "solgaleo",
    "name": "Solgaleo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/791.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/791.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/solgaleo",
    "stats": {
      "total": 680,
      "hp": 137,
      "attack": 137,
      "defense": 107,
      "spAttack": 113,
      "spDefense": 89,
      "speed": 97
    }
  },
  {
    "id": 792,
    "slug": "lunala",
    "name": "Lunala",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/792.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/792.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lunala",
    "stats": {
      "total": 680,
      "hp": 137,
      "attack": 113,
      "defense": 89,
      "spAttack": 137,
      "spDefense": 107,
      "speed": 97
    }
  },
  {
    "id": 793,
    "slug": "nihilego",
    "name": "Nihilego",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/793.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/793.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/nihilego",
    "stats": {
      "total": 570,
      "hp": 109,
      "attack": 53,
      "defense": 47,
      "spAttack": 127,
      "spDefense": 131,
      "speed": 103
    }
  },
  {
    "id": 794,
    "slug": "buzzwole",
    "name": "Buzzwole",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/794.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/794.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/buzzwole",
    "stats": {
      "total": 570,
      "hp": 107,
      "attack": 139,
      "defense": 139,
      "spAttack": 53,
      "spDefense": 53,
      "speed": 79
    }
  },
  {
    "id": 795,
    "slug": "pheromosa",
    "name": "Pheromosa",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/795.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/795.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pheromosa",
    "stats": {
      "total": 570,
      "hp": 71,
      "attack": 137,
      "defense": 37,
      "spAttack": 137,
      "spDefense": 37,
      "speed": 151
    }
  },
  {
    "id": 796,
    "slug": "xurkitree",
    "name": "Xurkitree",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/796.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/796.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/xurkitree",
    "stats": {
      "total": 570,
      "hp": 83,
      "attack": 89,
      "defense": 71,
      "spAttack": 173,
      "spDefense": 71,
      "speed": 83
    }
  },
  {
    "id": 797,
    "slug": "celesteela",
    "name": "Celesteela",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/797.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/797.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/celesteela",
    "stats": {
      "total": 570,
      "hp": 97,
      "attack": 101,
      "defense": 103,
      "spAttack": 107,
      "spDefense": 101,
      "speed": 61
    }
  },
  {
    "id": 798,
    "slug": "kartana",
    "name": "Kartana",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/798.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/798.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kartana",
    "stats": {
      "total": 570,
      "hp": 59,
      "attack": 181,
      "defense": 131,
      "spAttack": 59,
      "spDefense": 31,
      "speed": 109
    }
  },
  {
    "id": 799,
    "slug": "guzzlord",
    "name": "Guzzlord",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/799.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/799.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/guzzlord",
    "stats": {
      "total": 570,
      "hp": 223,
      "attack": 101,
      "defense": 53,
      "spAttack": 97,
      "spDefense": 53,
      "speed": 43
    }
  },
  {
    "id": 800,
    "slug": "necrozma",
    "name": "Necrozma",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/800.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/800.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/necrozma",
    "stats": {
      "total": 600,
      "hp": 97,
      "attack": 107,
      "defense": 101,
      "spAttack": 127,
      "spDefense": 89,
      "speed": 79
    }
  },
  {
    "id": 801,
    "slug": "magearna",
    "name": "Magearna",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/801.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/801.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/magearna",
    "stats": {
      "total": 600,
      "hp": 80,
      "attack": 95,
      "defense": 115,
      "spAttack": 130,
      "spDefense": 115,
      "speed": 65
    }
  },
  {
    "id": 802,
    "slug": "marshadow",
    "name": "Marshadow",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/802.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/802.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/marshadow",
    "stats": {
      "total": 600,
      "hp": 90,
      "attack": 125,
      "defense": 80,
      "spAttack": 90,
      "spDefense": 90,
      "speed": 125
    }
  },
  {
    "id": 803,
    "slug": "poipole",
    "name": "Poipole",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/803.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/803.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/poipole",
    "stats": {
      "total": 420,
      "hp": 67,
      "attack": 73,
      "defense": 67,
      "spAttack": 73,
      "spDefense": 67,
      "speed": 73
    }
  },
  {
    "id": 804,
    "slug": "naganadel",
    "name": "Naganadel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/804.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/804.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/naganadel",
    "stats": {
      "total": 540,
      "hp": 73,
      "attack": 73,
      "defense": 73,
      "spAttack": 127,
      "spDefense": 73,
      "speed": 121
    }
  },
  {
    "id": 805,
    "slug": "stakataka",
    "name": "Stakataka",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/805.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/805.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/stakataka",
    "stats": {
      "total": 570,
      "hp": 61,
      "attack": 131,
      "defense": 211,
      "spAttack": 53,
      "spDefense": 101,
      "speed": 13
    }
  },
  {
    "id": 806,
    "slug": "blacephalon",
    "name": "Blacephalon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/806.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/806.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/blacephalon",
    "stats": {
      "total": 570,
      "hp": 53,
      "attack": 127,
      "defense": 53,
      "spAttack": 151,
      "spDefense": 79,
      "speed": 107
    }
  },
  {
    "id": 807,
    "slug": "zeraora",
    "name": "Zeraora",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/807.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/807.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zeraora",
    "stats": {
      "total": 600,
      "hp": 88,
      "attack": 112,
      "defense": 75,
      "spAttack": 102,
      "spDefense": 80,
      "speed": 143
    }
  },
  {
    "id": 808,
    "slug": "meltan",
    "name": "Meltan",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/808.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/808.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/meltan",
    "stats": {
      "total": 300,
      "hp": 46,
      "attack": 65,
      "defense": 65,
      "spAttack": 55,
      "spDefense": 35,
      "speed": 34
    }
  },
  {
    "id": 809,
    "slug": "melmetal",
    "name": "Melmetal",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/809.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/809.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/melmetal",
    "stats": {
      "total": 600,
      "hp": 135,
      "attack": 143,
      "defense": 143,
      "spAttack": 80,
      "spDefense": 65,
      "speed": 34
    }
  },
  {
    "id": 810,
    "slug": "grookey",
    "name": "Grookey",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/810.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/810.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/grookey",
    "stats": {
      "total": 310,
      "hp": 50,
      "attack": 65,
      "defense": 50,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 65
    }
  },
  {
    "id": 811,
    "slug": "thwackey",
    "name": "Thwackey",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/811.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/811.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/thwackey",
    "stats": {
      "total": 420,
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "spAttack": 55,
      "spDefense": 60,
      "speed": 80
    }
  },
  {
    "id": 812,
    "slug": "rillaboom",
    "name": "Rillaboom",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/812.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/812.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rillaboom",
    "stats": {
      "total": 530,
      "hp": 100,
      "attack": 125,
      "defense": 90,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 85
    }
  },
  {
    "id": 813,
    "slug": "scorbunny",
    "name": "Scorbunny",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/813.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/813.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/scorbunny",
    "stats": {
      "total": 310,
      "hp": 50,
      "attack": 71,
      "defense": 40,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 69
    }
  },
  {
    "id": 814,
    "slug": "raboot",
    "name": "Raboot",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/814.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/814.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/raboot",
    "stats": {
      "total": 420,
      "hp": 65,
      "attack": 86,
      "defense": 60,
      "spAttack": 55,
      "spDefense": 60,
      "speed": 94
    }
  },
  {
    "id": 815,
    "slug": "cinderace",
    "name": "Cinderace",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/815.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/815.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cinderace",
    "stats": {
      "total": 530,
      "hp": 80,
      "attack": 116,
      "defense": 75,
      "spAttack": 65,
      "spDefense": 75,
      "speed": 119
    }
  },
  {
    "id": 816,
    "slug": "sobble",
    "name": "Sobble",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/816.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/816.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sobble",
    "stats": {
      "total": 310,
      "hp": 50,
      "attack": 40,
      "defense": 40,
      "spAttack": 70,
      "spDefense": 40,
      "speed": 70
    }
  },
  {
    "id": 817,
    "slug": "drizzile",
    "name": "Drizzile",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/817.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/817.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/drizzile",
    "stats": {
      "total": 420,
      "hp": 65,
      "attack": 60,
      "defense": 55,
      "spAttack": 95,
      "spDefense": 55,
      "speed": 90
    }
  },
  {
    "id": 818,
    "slug": "inteleon",
    "name": "Inteleon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/818.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/818.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/inteleon",
    "stats": {
      "total": 530,
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "spAttack": 125,
      "spDefense": 65,
      "speed": 120
    }
  },
  {
    "id": 819,
    "slug": "skwovet",
    "name": "Skwovet",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/819.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/819.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/skwovet",
    "stats": {
      "total": 275,
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 25
    }
  },
  {
    "id": 820,
    "slug": "greedent",
    "name": "Greedent",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/820.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/820.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/greedent",
    "stats": {
      "total": 460,
      "hp": 120,
      "attack": 95,
      "defense": 95,
      "spAttack": 55,
      "spDefense": 75,
      "speed": 20
    }
  },
  {
    "id": 821,
    "slug": "rookidee",
    "name": "Rookidee",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/821.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/821.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rookidee",
    "stats": {
      "total": 245,
      "hp": 38,
      "attack": 47,
      "defense": 35,
      "spAttack": 33,
      "spDefense": 35,
      "speed": 57
    }
  },
  {
    "id": 822,
    "slug": "corvisquire",
    "name": "Corvisquire",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/822.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/822.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/corvisquire",
    "stats": {
      "total": 365,
      "hp": 68,
      "attack": 67,
      "defense": 55,
      "spAttack": 43,
      "spDefense": 55,
      "speed": 77
    }
  },
  {
    "id": 823,
    "slug": "corviknight",
    "name": "Corviknight",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/823.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/823.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/corviknight",
    "stats": {
      "total": 495,
      "hp": 98,
      "attack": 87,
      "defense": 105,
      "spAttack": 53,
      "spDefense": 85,
      "speed": 67
    }
  },
  {
    "id": 824,
    "slug": "blipbug",
    "name": "Blipbug",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/824.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/824.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/blipbug",
    "stats": {
      "total": 180,
      "hp": 25,
      "attack": 20,
      "defense": 20,
      "spAttack": 25,
      "spDefense": 45,
      "speed": 45
    }
  },
  {
    "id": 825,
    "slug": "dottler",
    "name": "Dottler",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/825.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/825.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dottler",
    "stats": {
      "total": 335,
      "hp": 50,
      "attack": 35,
      "defense": 80,
      "spAttack": 50,
      "spDefense": 90,
      "speed": 30
    }
  },
  {
    "id": 826,
    "slug": "orbeetle",
    "name": "Orbeetle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/826.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/826.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/orbeetle",
    "stats": {
      "total": 505,
      "hp": 60,
      "attack": 45,
      "defense": 110,
      "spAttack": 80,
      "spDefense": 120,
      "speed": 90
    }
  },
  {
    "id": 827,
    "slug": "nickit",
    "name": "Nickit",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/827.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/827.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/nickit",
    "stats": {
      "total": 245,
      "hp": 40,
      "attack": 28,
      "defense": 28,
      "spAttack": 47,
      "spDefense": 52,
      "speed": 50
    }
  },
  {
    "id": 828,
    "slug": "thievul",
    "name": "Thievul",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/828.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/828.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/thievul",
    "stats": {
      "total": 455,
      "hp": 70,
      "attack": 58,
      "defense": 58,
      "spAttack": 87,
      "spDefense": 92,
      "speed": 90
    }
  },
  {
    "id": 829,
    "slug": "gossifleur",
    "name": "Gossifleur",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/829.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/829.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gossifleur",
    "stats": {
      "total": 250,
      "hp": 40,
      "attack": 40,
      "defense": 60,
      "spAttack": 40,
      "spDefense": 60,
      "speed": 10
    }
  },
  {
    "id": 830,
    "slug": "eldegoss",
    "name": "Eldegoss",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/830.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/830.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/eldegoss",
    "stats": {
      "total": 460,
      "hp": 60,
      "attack": 50,
      "defense": 90,
      "spAttack": 80,
      "spDefense": 120,
      "speed": 60
    }
  },
  {
    "id": 831,
    "slug": "wooloo",
    "name": "Wooloo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/831.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/831.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wooloo",
    "stats": {
      "total": 270,
      "hp": 42,
      "attack": 40,
      "defense": 55,
      "spAttack": 40,
      "spDefense": 45,
      "speed": 48
    }
  },
  {
    "id": 832,
    "slug": "dubwool",
    "name": "Dubwool",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/832.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/832.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dubwool",
    "stats": {
      "total": 490,
      "hp": 72,
      "attack": 80,
      "defense": 100,
      "spAttack": 60,
      "spDefense": 90,
      "speed": 88
    }
  },
  {
    "id": 833,
    "slug": "chewtle",
    "name": "Chewtle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/833.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/833.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/chewtle",
    "stats": {
      "total": 284,
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "spAttack": 38,
      "spDefense": 38,
      "speed": 44
    }
  },
  {
    "id": 834,
    "slug": "drednaw",
    "name": "Drednaw",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/834.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/834.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/drednaw",
    "stats": {
      "total": 485,
      "hp": 90,
      "attack": 115,
      "defense": 90,
      "spAttack": 48,
      "spDefense": 68,
      "speed": 74
    }
  },
  {
    "id": 835,
    "slug": "yamper",
    "name": "Yamper",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/835.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/835.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/yamper",
    "stats": {
      "total": 270,
      "hp": 59,
      "attack": 45,
      "defense": 50,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 26
    }
  },
  {
    "id": 836,
    "slug": "boltund",
    "name": "Boltund",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/836.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/836.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/boltund",
    "stats": {
      "total": 490,
      "hp": 69,
      "attack": 90,
      "defense": 60,
      "spAttack": 90,
      "spDefense": 60,
      "speed": 121
    }
  },
  {
    "id": 837,
    "slug": "rolycoly",
    "name": "Rolycoly",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/837.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/837.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rolycoly",
    "stats": {
      "total": 240,
      "hp": 30,
      "attack": 40,
      "defense": 50,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 30
    }
  },
  {
    "id": 838,
    "slug": "carkol",
    "name": "Carkol",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/838.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/838.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/carkol",
    "stats": {
      "total": 410,
      "hp": 80,
      "attack": 60,
      "defense": 90,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 50
    }
  },
  {
    "id": 839,
    "slug": "coalossal",
    "name": "Coalossal",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/839.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/839.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/coalossal",
    "stats": {
      "total": 510,
      "hp": 110,
      "attack": 80,
      "defense": 120,
      "spAttack": 80,
      "spDefense": 90,
      "speed": 30
    }
  },
  {
    "id": 840,
    "slug": "applin",
    "name": "Applin",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/840.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/840.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/applin",
    "stats": {
      "total": 260,
      "hp": 40,
      "attack": 40,
      "defense": 80,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 20
    }
  },
  {
    "id": 841,
    "slug": "flapple",
    "name": "Flapple",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/841.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/841.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/flapple",
    "stats": {
      "total": 485,
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "spAttack": 95,
      "spDefense": 60,
      "speed": 70
    }
  },
  {
    "id": 842,
    "slug": "appletun",
    "name": "Appletun",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/842.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/842.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/appletun",
    "stats": {
      "total": 485,
      "hp": 110,
      "attack": 85,
      "defense": 80,
      "spAttack": 100,
      "spDefense": 80,
      "speed": 30
    }
  },
  {
    "id": 843,
    "slug": "silicobra",
    "name": "Silicobra",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/843.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/843.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/silicobra",
    "stats": {
      "total": 315,
      "hp": 52,
      "attack": 57,
      "defense": 75,
      "spAttack": 35,
      "spDefense": 50,
      "speed": 46
    }
  },
  {
    "id": 844,
    "slug": "sandaconda",
    "name": "Sandaconda",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/844.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/844.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sandaconda",
    "stats": {
      "total": 510,
      "hp": 72,
      "attack": 107,
      "defense": 125,
      "spAttack": 65,
      "spDefense": 70,
      "speed": 71
    }
  },
  {
    "id": 845,
    "slug": "cramorant",
    "name": "Cramorant",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/845.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/845.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cramorant",
    "stats": {
      "total": 475,
      "hp": 70,
      "attack": 85,
      "defense": 55,
      "spAttack": 85,
      "spDefense": 95,
      "speed": 85
    }
  },
  {
    "id": 846,
    "slug": "arrokuda",
    "name": "Arrokuda",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/846.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/846.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/arrokuda",
    "stats": {
      "total": 280,
      "hp": 41,
      "attack": 63,
      "defense": 40,
      "spAttack": 40,
      "spDefense": 30,
      "speed": 66
    }
  },
  {
    "id": 847,
    "slug": "barraskewda",
    "name": "Barraskewda",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/847.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/847.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/barraskewda",
    "stats": {
      "total": 490,
      "hp": 61,
      "attack": 123,
      "defense": 60,
      "spAttack": 60,
      "spDefense": 50,
      "speed": 136
    }
  },
  {
    "id": 848,
    "slug": "toxel",
    "name": "Toxel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/848.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/848.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/toxel",
    "stats": {
      "total": 242,
      "hp": 40,
      "attack": 38,
      "defense": 35,
      "spAttack": 54,
      "spDefense": 35,
      "speed": 40
    }
  },
  {
    "id": 849,
    "slug": "toxtricity",
    "name": "Toxtricity",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/849.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/849.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/toxtricity",
    "stats": {
      "total": 502,
      "hp": 75,
      "attack": 98,
      "defense": 70,
      "spAttack": 114,
      "spDefense": 70,
      "speed": 75
    }
  },
  {
    "id": 850,
    "slug": "sizzlipede",
    "name": "Sizzlipede",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/850.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/850.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sizzlipede",
    "stats": {
      "total": 305,
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 45
    }
  },
  {
    "id": 851,
    "slug": "centiskorch",
    "name": "Centiskorch",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/851.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/851.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/centiskorch",
    "stats": {
      "total": 525,
      "hp": 100,
      "attack": 115,
      "defense": 65,
      "spAttack": 90,
      "spDefense": 90,
      "speed": 65
    }
  },
  {
    "id": 852,
    "slug": "clobbopus",
    "name": "Clobbopus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/852.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/852.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/clobbopus",
    "stats": {
      "total": 310,
      "hp": 50,
      "attack": 68,
      "defense": 60,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 32
    }
  },
  {
    "id": 853,
    "slug": "grapploct",
    "name": "Grapploct",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/853.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/853.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/grapploct",
    "stats": {
      "total": 480,
      "hp": 80,
      "attack": 118,
      "defense": 90,
      "spAttack": 70,
      "spDefense": 80,
      "speed": 42
    }
  },
  {
    "id": 854,
    "slug": "sinistea",
    "name": "Sinistea",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/854.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/854.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sinistea",
    "stats": {
      "total": 308,
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "spAttack": 74,
      "spDefense": 54,
      "speed": 50
    }
  },
  {
    "id": 855,
    "slug": "polteageist",
    "name": "Polteageist",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/855.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/855.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/polteageist",
    "stats": {
      "total": 508,
      "hp": 60,
      "attack": 65,
      "defense": 65,
      "spAttack": 134,
      "spDefense": 114,
      "speed": 70
    }
  },
  {
    "id": 856,
    "slug": "hatenna",
    "name": "Hatenna",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/856.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/856.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hatenna",
    "stats": {
      "total": 265,
      "hp": 42,
      "attack": 30,
      "defense": 45,
      "spAttack": 56,
      "spDefense": 53,
      "speed": 39
    }
  },
  {
    "id": 857,
    "slug": "hattrem",
    "name": "Hattrem",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/857.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/857.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hattrem",
    "stats": {
      "total": 370,
      "hp": 57,
      "attack": 40,
      "defense": 65,
      "spAttack": 86,
      "spDefense": 73,
      "speed": 49
    }
  },
  {
    "id": 858,
    "slug": "hatterene",
    "name": "Hatterene",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/858.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/858.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hatterene",
    "stats": {
      "total": 510,
      "hp": 57,
      "attack": 90,
      "defense": 95,
      "spAttack": 136,
      "spDefense": 103,
      "speed": 29
    }
  },
  {
    "id": 859,
    "slug": "impidimp",
    "name": "Impidimp",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/859.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/859.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/impidimp",
    "stats": {
      "total": 265,
      "hp": 45,
      "attack": 45,
      "defense": 30,
      "spAttack": 55,
      "spDefense": 40,
      "speed": 50
    }
  },
  {
    "id": 860,
    "slug": "morgrem",
    "name": "Morgrem",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/860.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/860.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/morgrem",
    "stats": {
      "total": 370,
      "hp": 65,
      "attack": 60,
      "defense": 45,
      "spAttack": 75,
      "spDefense": 55,
      "speed": 70
    }
  },
  {
    "id": 861,
    "slug": "grimmsnarl",
    "name": "Grimmsnarl",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/861.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/861.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/grimmsnarl",
    "stats": {
      "total": 510,
      "hp": 95,
      "attack": 120,
      "defense": 65,
      "spAttack": 95,
      "spDefense": 75,
      "speed": 60
    }
  },
  {
    "id": 862,
    "slug": "obstagoon",
    "name": "Obstagoon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/862.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/862.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/obstagoon",
    "stats": {
      "total": 520,
      "hp": 93,
      "attack": 90,
      "defense": 101,
      "spAttack": 60,
      "spDefense": 81,
      "speed": 95
    }
  },
  {
    "id": 863,
    "slug": "perrserker",
    "name": "Perrserker",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/863.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/863.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/perrserker",
    "stats": {
      "total": 440,
      "hp": 70,
      "attack": 110,
      "defense": 100,
      "spAttack": 50,
      "spDefense": 60,
      "speed": 50
    }
  },
  {
    "id": 864,
    "slug": "cursola",
    "name": "Cursola",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/864.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/864.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cursola",
    "stats": {
      "total": 510,
      "hp": 60,
      "attack": 95,
      "defense": 50,
      "spAttack": 145,
      "spDefense": 130,
      "speed": 30
    }
  },
  {
    "id": 865,
    "slug": "sirfetchd",
    "name": "Sirfetch'd",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/865.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/865.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sirfetchd",
    "stats": {
      "total": 507,
      "hp": 62,
      "attack": 135,
      "defense": 95,
      "spAttack": 68,
      "spDefense": 82,
      "speed": 65
    }
  },
  {
    "id": 866,
    "slug": "mr-rime",
    "name": "Mr. Rime",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/866.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/866.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mr-rime",
    "stats": {
      "total": 520,
      "hp": 80,
      "attack": 85,
      "defense": 75,
      "spAttack": 110,
      "spDefense": 100,
      "speed": 70
    }
  },
  {
    "id": 867,
    "slug": "runerigus",
    "name": "Runerigus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/867.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/867.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/runerigus",
    "stats": {
      "total": 483,
      "hp": 58,
      "attack": 95,
      "defense": 145,
      "spAttack": 50,
      "spDefense": 105,
      "speed": 30
    }
  },
  {
    "id": 868,
    "slug": "milcery",
    "name": "Milcery",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/868.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/868.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/milcery",
    "stats": {
      "total": 270,
      "hp": 45,
      "attack": 40,
      "defense": 40,
      "spAttack": 50,
      "spDefense": 61,
      "speed": 34
    }
  },
  {
    "id": 869,
    "slug": "alcremie",
    "name": "Alcremie",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/869.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/869.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/alcremie",
    "stats": {
      "total": 495,
      "hp": 65,
      "attack": 60,
      "defense": 75,
      "spAttack": 110,
      "spDefense": 121,
      "speed": 64
    }
  },
  {
    "id": 870,
    "slug": "falinks",
    "name": "Falinks",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/870.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/870.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/falinks",
    "stats": {
      "total": 470,
      "hp": 65,
      "attack": 100,
      "defense": 100,
      "spAttack": 70,
      "spDefense": 60,
      "speed": 75
    }
  },
  {
    "id": 871,
    "slug": "pincurchin",
    "name": "Pincurchin",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/871.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/871.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pincurchin",
    "stats": {
      "total": 435,
      "hp": 48,
      "attack": 101,
      "defense": 95,
      "spAttack": 91,
      "spDefense": 85,
      "speed": 15
    }
  },
  {
    "id": 872,
    "slug": "snom",
    "name": "Snom",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/872.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/872.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/snom",
    "stats": {
      "total": 185,
      "hp": 30,
      "attack": 25,
      "defense": 35,
      "spAttack": 45,
      "spDefense": 30,
      "speed": 20
    }
  },
  {
    "id": 873,
    "slug": "frosmoth",
    "name": "Frosmoth",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/873.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/873.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/frosmoth",
    "stats": {
      "total": 475,
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "spAttack": 125,
      "spDefense": 90,
      "speed": 65
    }
  },
  {
    "id": 874,
    "slug": "stonjourner",
    "name": "Stonjourner",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/874.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/874.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/stonjourner",
    "stats": {
      "total": 470,
      "hp": 100,
      "attack": 125,
      "defense": 135,
      "spAttack": 20,
      "spDefense": 20,
      "speed": 70
    }
  },
  {
    "id": 875,
    "slug": "eiscue",
    "name": "Eiscue",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/875.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/875.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/eiscue",
    "stats": {
      "total": 470,
      "hp": 75,
      "attack": 80,
      "defense": 110,
      "spAttack": 65,
      "spDefense": 90,
      "speed": 50
    }
  },
  {
    "id": 876,
    "slug": "indeedee",
    "name": "Indeedee",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/876.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/876.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/indeedee",
    "stats": {
      "total": 475,
      "hp": 60,
      "attack": 65,
      "defense": 55,
      "spAttack": 105,
      "spDefense": 95,
      "speed": 95
    }
  },
  {
    "id": 877,
    "slug": "morpeko",
    "name": "Morpeko",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/877.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/877.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/morpeko",
    "stats": {
      "total": 436,
      "hp": 58,
      "attack": 95,
      "defense": 58,
      "spAttack": 70,
      "spDefense": 58,
      "speed": 97
    }
  },
  {
    "id": 878,
    "slug": "cufant",
    "name": "Cufant",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/878.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/878.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cufant",
    "stats": {
      "total": 330,
      "hp": 72,
      "attack": 80,
      "defense": 49,
      "spAttack": 40,
      "spDefense": 49,
      "speed": 40
    }
  },
  {
    "id": 879,
    "slug": "copperajah",
    "name": "Copperajah",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/879.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/879.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/copperajah",
    "stats": {
      "total": 500,
      "hp": 122,
      "attack": 130,
      "defense": 69,
      "spAttack": 80,
      "spDefense": 69,
      "speed": 30
    }
  },
  {
    "id": 880,
    "slug": "dracozolt",
    "name": "Dracozolt",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/880.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/880.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dracozolt",
    "stats": {
      "total": 505,
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "spAttack": 80,
      "spDefense": 70,
      "speed": 75
    }
  },
  {
    "id": 881,
    "slug": "arctozolt",
    "name": "Arctozolt",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/881.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/881.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/arctozolt",
    "stats": {
      "total": 505,
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "spAttack": 90,
      "spDefense": 80,
      "speed": 55
    }
  },
  {
    "id": 882,
    "slug": "dracovish",
    "name": "Dracovish",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/882.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/882.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dracovish",
    "stats": {
      "total": 505,
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "spAttack": 70,
      "spDefense": 80,
      "speed": 75
    }
  },
  {
    "id": 883,
    "slug": "arctovish",
    "name": "Arctovish",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/883.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/883.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/arctovish",
    "stats": {
      "total": 505,
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "spAttack": 80,
      "spDefense": 90,
      "speed": 55
    }
  },
  {
    "id": 884,
    "slug": "duraludon",
    "name": "Duraludon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/884.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/884.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/duraludon",
    "stats": {
      "total": 535,
      "hp": 70,
      "attack": 95,
      "defense": 115,
      "spAttack": 120,
      "spDefense": 50,
      "speed": 85
    }
  },
  {
    "id": 885,
    "slug": "dreepy",
    "name": "Dreepy",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/885.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/885.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dreepy",
    "stats": {
      "total": 270,
      "hp": 28,
      "attack": 60,
      "defense": 30,
      "spAttack": 40,
      "spDefense": 30,
      "speed": 82
    }
  },
  {
    "id": 886,
    "slug": "drakloak",
    "name": "Drakloak",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/886.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/886.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/drakloak",
    "stats": {
      "total": 410,
      "hp": 68,
      "attack": 80,
      "defense": 50,
      "spAttack": 60,
      "spDefense": 50,
      "speed": 102
    }
  },
  {
    "id": 887,
    "slug": "dragapult",
    "name": "Dragapult",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/887.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/887.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dragapult",
    "stats": {
      "total": 600,
      "hp": 88,
      "attack": 120,
      "defense": 75,
      "spAttack": 100,
      "spDefense": 75,
      "speed": 142
    }
  },
  {
    "id": 888,
    "slug": "zacian",
    "name": "Zacian",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/888.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/888.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zacian",
    "stats": {
      "total": 660,
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "spAttack": 80,
      "spDefense": 115,
      "speed": 138
    }
  },
  {
    "id": 889,
    "slug": "zamazenta",
    "name": "Zamazenta",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/889.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/889.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zamazenta",
    "stats": {
      "total": 660,
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "spAttack": 80,
      "spDefense": 115,
      "speed": 138
    }
  },
  {
    "id": 890,
    "slug": "eternatus",
    "name": "Eternatus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/890.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/890.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/eternatus",
    "stats": {
      "total": 690,
      "hp": 140,
      "attack": 85,
      "defense": 95,
      "spAttack": 145,
      "spDefense": 95,
      "speed": 130
    }
  },
  {
    "id": 891,
    "slug": "kubfu",
    "name": "Kubfu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/891.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/891.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kubfu",
    "stats": {
      "total": 385,
      "hp": 60,
      "attack": 90,
      "defense": 60,
      "spAttack": 53,
      "spDefense": 50,
      "speed": 72
    }
  },
  {
    "id": 892,
    "slug": "urshifu",
    "name": "Urshifu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/892.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/892.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/urshifu",
    "stats": {
      "total": 550,
      "hp": 100,
      "attack": 130,
      "defense": 100,
      "spAttack": 63,
      "spDefense": 60,
      "speed": 97
    }
  },
  {
    "id": 893,
    "slug": "zarude",
    "name": "Zarude",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/893.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/893.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/zarude",
    "stats": {
      "total": 600,
      "hp": 105,
      "attack": 120,
      "defense": 105,
      "spAttack": 70,
      "spDefense": 95,
      "speed": 105
    }
  },
  {
    "id": 894,
    "slug": "regieleki",
    "name": "Regieleki",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/894.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/894.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/regieleki",
    "stats": {
      "total": 580,
      "hp": 80,
      "attack": 100,
      "defense": 50,
      "spAttack": 100,
      "spDefense": 50,
      "speed": 200
    }
  },
  {
    "id": 895,
    "slug": "regidrago",
    "name": "Regidrago",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/895.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/895.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/regidrago",
    "stats": {
      "total": 580,
      "hp": 200,
      "attack": 100,
      "defense": 50,
      "spAttack": 100,
      "spDefense": 50,
      "speed": 80
    }
  },
  {
    "id": 896,
    "slug": "glastrier",
    "name": "Glastrier",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/896.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/896.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/glastrier",
    "stats": {
      "total": 580,
      "hp": 100,
      "attack": 145,
      "defense": 130,
      "spAttack": 65,
      "spDefense": 110,
      "speed": 30
    }
  },
  {
    "id": 897,
    "slug": "spectrier",
    "name": "Spectrier",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/897.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/897.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/spectrier",
    "stats": {
      "total": 580,
      "hp": 100,
      "attack": 65,
      "defense": 60,
      "spAttack": 145,
      "spDefense": 80,
      "speed": 130
    }
  },
  {
    "id": 898,
    "slug": "calyrex",
    "name": "Calyrex",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/898.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/898.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/calyrex",
    "stats": {
      "total": 500,
      "hp": 100,
      "attack": 80,
      "defense": 80,
      "spAttack": 80,
      "spDefense": 80,
      "speed": 80
    }
  },
  {
    "id": 899,
    "slug": "wyrdeer",
    "name": "Wyrdeer",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/899.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/899.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wyrdeer",
    "stats": {
      "total": 525,
      "hp": 103,
      "attack": 105,
      "defense": 72,
      "spAttack": 105,
      "spDefense": 75,
      "speed": 65
    }
  },
  {
    "id": 900,
    "slug": "kleavor",
    "name": "Kleavor",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/900.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/900.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kleavor",
    "stats": {
      "total": 500,
      "hp": 70,
      "attack": 135,
      "defense": 95,
      "spAttack": 45,
      "spDefense": 70,
      "speed": 85
    }
  },
  {
    "id": 901,
    "slug": "ursaluna",
    "name": "Ursaluna",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/901.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/901.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ursaluna",
    "stats": {
      "total": 550,
      "hp": 130,
      "attack": 140,
      "defense": 105,
      "spAttack": 45,
      "spDefense": 80,
      "speed": 50
    }
  },
  {
    "id": 902,
    "slug": "basculegion",
    "name": "Basculegion",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/902.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/902.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/basculegion",
    "stats": {
      "total": 530,
      "hp": 120,
      "attack": 112,
      "defense": 65,
      "spAttack": 80,
      "spDefense": 75,
      "speed": 78
    }
  },
  {
    "id": 903,
    "slug": "sneasler",
    "name": "Sneasler",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/903.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/903.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sneasler",
    "stats": {
      "total": 510,
      "hp": 80,
      "attack": 130,
      "defense": 60,
      "spAttack": 40,
      "spDefense": 80,
      "speed": 120
    }
  },
  {
    "id": 904,
    "slug": "overqwil",
    "name": "Overqwil",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/904.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/904.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/overqwil",
    "stats": {
      "total": 510,
      "hp": 85,
      "attack": 115,
      "defense": 95,
      "spAttack": 65,
      "spDefense": 65,
      "speed": 85
    }
  },
  {
    "id": 905,
    "slug": "enamorus",
    "name": "Enamorus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/905.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/905.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/enamorus",
    "stats": {
      "total": 580,
      "hp": 74,
      "attack": 115,
      "defense": 70,
      "spAttack": 135,
      "spDefense": 80,
      "speed": 106
    }
  },
  {
    "id": 906,
    "slug": "sprigatito",
    "name": "Sprigatito",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/906.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/906.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sprigatito",
    "stats": {
      "total": 310,
      "hp": 40,
      "attack": 61,
      "defense": 54,
      "spAttack": 45,
      "spDefense": 45,
      "speed": 65
    }
  },
  {
    "id": 907,
    "slug": "floragato",
    "name": "Floragato",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/907.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/907.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/floragato",
    "stats": {
      "total": 410,
      "hp": 61,
      "attack": 80,
      "defense": 63,
      "spAttack": 60,
      "spDefense": 63,
      "speed": 83
    }
  },
  {
    "id": 908,
    "slug": "meowscarada",
    "name": "Meowscarada",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/908.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/908.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/meowscarada",
    "stats": {
      "total": 530,
      "hp": 76,
      "attack": 110,
      "defense": 70,
      "spAttack": 81,
      "spDefense": 70,
      "speed": 123
    }
  },
  {
    "id": 909,
    "slug": "fuecoco",
    "name": "Fuecoco",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/909.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/909.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/fuecoco",
    "stats": {
      "total": 310,
      "hp": 67,
      "attack": 45,
      "defense": 59,
      "spAttack": 63,
      "spDefense": 40,
      "speed": 36
    }
  },
  {
    "id": 910,
    "slug": "crocalor",
    "name": "Crocalor",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/910.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/910.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/crocalor",
    "stats": {
      "total": 411,
      "hp": 81,
      "attack": 55,
      "defense": 78,
      "spAttack": 90,
      "spDefense": 58,
      "speed": 49
    }
  },
  {
    "id": 911,
    "slug": "skeledirge",
    "name": "Skeledirge",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/911.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/911.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/skeledirge",
    "stats": {
      "total": 530,
      "hp": 104,
      "attack": 75,
      "defense": 100,
      "spAttack": 110,
      "spDefense": 75,
      "speed": 66
    }
  },
  {
    "id": 912,
    "slug": "quaxly",
    "name": "Quaxly",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/912.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/912.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/quaxly",
    "stats": {
      "total": 310,
      "hp": 55,
      "attack": 65,
      "defense": 45,
      "spAttack": 50,
      "spDefense": 45,
      "speed": 50
    }
  },
  {
    "id": 913,
    "slug": "quaxwell",
    "name": "Quaxwell",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/913.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/913.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/quaxwell",
    "stats": {
      "total": 410,
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "spAttack": 65,
      "spDefense": 60,
      "speed": 65
    }
  },
  {
    "id": 914,
    "slug": "quaquaval",
    "name": "Quaquaval",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/914.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/914.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/quaquaval",
    "stats": {
      "total": 530,
      "hp": 85,
      "attack": 120,
      "defense": 80,
      "spAttack": 85,
      "spDefense": 75,
      "speed": 85
    }
  },
  {
    "id": 915,
    "slug": "lechonk",
    "name": "Lechonk",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/915.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/915.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lechonk",
    "stats": {
      "total": 254,
      "hp": 54,
      "attack": 45,
      "defense": 40,
      "spAttack": 35,
      "spDefense": 45,
      "speed": 35
    }
  },
  {
    "id": 916,
    "slug": "oinkologne",
    "name": "Oinkologne",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/916.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/916.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/oinkologne",
    "stats": {
      "total": 489,
      "hp": 110,
      "attack": 100,
      "defense": 75,
      "spAttack": 59,
      "spDefense": 80,
      "speed": 65
    }
  },
  {
    "id": 917,
    "slug": "tarountula",
    "name": "Tarountula",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/917.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/917.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tarountula",
    "stats": {
      "total": 210,
      "hp": 35,
      "attack": 41,
      "defense": 45,
      "spAttack": 29,
      "spDefense": 40,
      "speed": 20
    }
  },
  {
    "id": 918,
    "slug": "spidops",
    "name": "Spidops",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/918.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/918.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/spidops",
    "stats": {
      "total": 404,
      "hp": 60,
      "attack": 79,
      "defense": 92,
      "spAttack": 52,
      "spDefense": 86,
      "speed": 35
    }
  },
  {
    "id": 919,
    "slug": "nymble",
    "name": "Nymble",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/919.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/919.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/nymble",
    "stats": {
      "total": 210,
      "hp": 33,
      "attack": 46,
      "defense": 40,
      "spAttack": 21,
      "spDefense": 25,
      "speed": 45
    }
  },
  {
    "id": 920,
    "slug": "lokix",
    "name": "Lokix",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/920.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/920.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/lokix",
    "stats": {
      "total": 450,
      "hp": 71,
      "attack": 102,
      "defense": 78,
      "spAttack": 52,
      "spDefense": 55,
      "speed": 92
    }
  },
  {
    "id": 921,
    "slug": "pawmi",
    "name": "Pawmi",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/921.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/921.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pawmi",
    "stats": {
      "total": 240,
      "hp": 45,
      "attack": 50,
      "defense": 20,
      "spAttack": 40,
      "spDefense": 25,
      "speed": 60
    }
  },
  {
    "id": 922,
    "slug": "pawmo",
    "name": "Pawmo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/922.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/922.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pawmo",
    "stats": {
      "total": 350,
      "hp": 60,
      "attack": 75,
      "defense": 40,
      "spAttack": 50,
      "spDefense": 40,
      "speed": 85
    }
  },
  {
    "id": 923,
    "slug": "pawmot",
    "name": "Pawmot",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/923.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/923.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pawmot",
    "stats": {
      "total": 490,
      "hp": 70,
      "attack": 115,
      "defense": 70,
      "spAttack": 70,
      "spDefense": 60,
      "speed": 105
    }
  },
  {
    "id": 924,
    "slug": "tandemaus",
    "name": "Tandemaus",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/924.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/924.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tandemaus",
    "stats": {
      "total": 305,
      "hp": 50,
      "attack": 50,
      "defense": 45,
      "spAttack": 40,
      "spDefense": 45,
      "speed": 75
    }
  },
  {
    "id": 925,
    "slug": "maushold",
    "name": "Maushold",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/925.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/925.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/maushold",
    "stats": {
      "total": 470,
      "hp": 74,
      "attack": 75,
      "defense": 70,
      "spAttack": 65,
      "spDefense": 75,
      "speed": 111
    }
  },
  {
    "id": 926,
    "slug": "fidough",
    "name": "Fidough",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/926.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/926.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/fidough",
    "stats": {
      "total": 312,
      "hp": 37,
      "attack": 55,
      "defense": 70,
      "spAttack": 30,
      "spDefense": 55,
      "speed": 65
    }
  },
  {
    "id": 927,
    "slug": "dachsbun",
    "name": "Dachsbun",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/927.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/927.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dachsbun",
    "stats": {
      "total": 477,
      "hp": 57,
      "attack": 80,
      "defense": 115,
      "spAttack": 50,
      "spDefense": 80,
      "speed": 95
    }
  },
  {
    "id": 928,
    "slug": "smoliv",
    "name": "Smoliv",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/928.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/928.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/smoliv",
    "stats": {
      "total": 260,
      "hp": 41,
      "attack": 35,
      "defense": 45,
      "spAttack": 58,
      "spDefense": 51,
      "speed": 30
    }
  },
  {
    "id": 929,
    "slug": "dolliv",
    "name": "Dolliv",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/929.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/929.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dolliv",
    "stats": {
      "total": 354,
      "hp": 52,
      "attack": 53,
      "defense": 60,
      "spAttack": 78,
      "spDefense": 78,
      "speed": 33
    }
  },
  {
    "id": 930,
    "slug": "arboliva",
    "name": "Arboliva",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/930.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/930.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/arboliva",
    "stats": {
      "total": 510,
      "hp": 78,
      "attack": 69,
      "defense": 90,
      "spAttack": 125,
      "spDefense": 109,
      "speed": 39
    }
  },
  {
    "id": 931,
    "slug": "squawkabilly",
    "name": "Squawkabilly",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/931.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/931.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/squawkabilly",
    "stats": {
      "total": 417,
      "hp": 82,
      "attack": 96,
      "defense": 51,
      "spAttack": 45,
      "spDefense": 51,
      "speed": 92
    }
  },
  {
    "id": 932,
    "slug": "nacli",
    "name": "Nacli",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/932.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/932.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/nacli",
    "stats": {
      "total": 280,
      "hp": 55,
      "attack": 55,
      "defense": 75,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 25
    }
  },
  {
    "id": 933,
    "slug": "naclstack",
    "name": "Naclstack",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/933.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/933.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/naclstack",
    "stats": {
      "total": 355,
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "spAttack": 35,
      "spDefense": 65,
      "speed": 35
    }
  },
  {
    "id": 934,
    "slug": "garganacl",
    "name": "Garganacl",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/934.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/934.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/garganacl",
    "stats": {
      "total": 500,
      "hp": 100,
      "attack": 100,
      "defense": 130,
      "spAttack": 45,
      "spDefense": 90,
      "speed": 35
    }
  },
  {
    "id": 935,
    "slug": "charcadet",
    "name": "Charcadet",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/935.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/935.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/charcadet",
    "stats": {
      "total": 255,
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "spAttack": 50,
      "spDefense": 40,
      "speed": 35
    }
  },
  {
    "id": 936,
    "slug": "armarouge",
    "name": "Armarouge",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/936.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/936.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/armarouge",
    "stats": {
      "total": 525,
      "hp": 85,
      "attack": 60,
      "defense": 100,
      "spAttack": 125,
      "spDefense": 80,
      "speed": 75
    }
  },
  {
    "id": 937,
    "slug": "ceruledge",
    "name": "Ceruledge",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/937.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/937.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ceruledge",
    "stats": {
      "total": 525,
      "hp": 75,
      "attack": 125,
      "defense": 80,
      "spAttack": 60,
      "spDefense": 100,
      "speed": 85
    }
  },
  {
    "id": 938,
    "slug": "tadbulb",
    "name": "Tadbulb",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/938.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/938.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tadbulb",
    "stats": {
      "total": 272,
      "hp": 61,
      "attack": 31,
      "defense": 41,
      "spAttack": 59,
      "spDefense": 35,
      "speed": 45
    }
  },
  {
    "id": 939,
    "slug": "bellibolt",
    "name": "Bellibolt",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/939.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/939.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bellibolt",
    "stats": {
      "total": 495,
      "hp": 109,
      "attack": 64,
      "defense": 91,
      "spAttack": 103,
      "spDefense": 83,
      "speed": 45
    }
  },
  {
    "id": 940,
    "slug": "wattrel",
    "name": "Wattrel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/940.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/940.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wattrel",
    "stats": {
      "total": 280,
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "spAttack": 55,
      "spDefense": 40,
      "speed": 70
    }
  },
  {
    "id": 941,
    "slug": "kilowattrel",
    "name": "Kilowattrel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/941.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/941.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kilowattrel",
    "stats": {
      "total": 490,
      "hp": 70,
      "attack": 70,
      "defense": 60,
      "spAttack": 105,
      "spDefense": 60,
      "speed": 125
    }
  },
  {
    "id": 942,
    "slug": "maschiff",
    "name": "Maschiff",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/942.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/942.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/maschiff",
    "stats": {
      "total": 340,
      "hp": 60,
      "attack": 78,
      "defense": 60,
      "spAttack": 40,
      "spDefense": 51,
      "speed": 51
    }
  },
  {
    "id": 943,
    "slug": "mabosstiff",
    "name": "Mabosstiff",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/943.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/943.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/mabosstiff",
    "stats": {
      "total": 505,
      "hp": 80,
      "attack": 120,
      "defense": 90,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 85
    }
  },
  {
    "id": 944,
    "slug": "shroodle",
    "name": "Shroodle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/944.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/944.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/shroodle",
    "stats": {
      "total": 290,
      "hp": 40,
      "attack": 65,
      "defense": 35,
      "spAttack": 40,
      "spDefense": 35,
      "speed": 75
    }
  },
  {
    "id": 945,
    "slug": "grafaiai",
    "name": "Grafaiai",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/945.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/945.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/grafaiai",
    "stats": {
      "total": 485,
      "hp": 63,
      "attack": 95,
      "defense": 65,
      "spAttack": 80,
      "spDefense": 72,
      "speed": 110
    }
  },
  {
    "id": 946,
    "slug": "bramblin",
    "name": "Bramblin",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/946.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/946.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bramblin",
    "stats": {
      "total": 275,
      "hp": 40,
      "attack": 65,
      "defense": 30,
      "spAttack": 45,
      "spDefense": 35,
      "speed": 60
    }
  },
  {
    "id": 947,
    "slug": "brambleghast",
    "name": "Brambleghast",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/947.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/947.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/brambleghast",
    "stats": {
      "total": 480,
      "hp": 55,
      "attack": 115,
      "defense": 70,
      "spAttack": 80,
      "spDefense": 70,
      "speed": 90
    }
  },
  {
    "id": 948,
    "slug": "toedscool",
    "name": "Toedscool",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/948.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/948.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/toedscool",
    "stats": {
      "total": 335,
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "spAttack": 50,
      "spDefense": 100,
      "speed": 70
    }
  },
  {
    "id": 949,
    "slug": "toedscruel",
    "name": "Toedscruel",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/949.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/949.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/toedscruel",
    "stats": {
      "total": 515,
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "spAttack": 80,
      "spDefense": 120,
      "speed": 100
    }
  },
  {
    "id": 950,
    "slug": "klawf",
    "name": "Klawf",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/950.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/950.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/klawf",
    "stats": {
      "total": 450,
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "spAttack": 35,
      "spDefense": 55,
      "speed": 75
    }
  },
  {
    "id": 951,
    "slug": "capsakid",
    "name": "Capsakid",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/951.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/951.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/capsakid",
    "stats": {
      "total": 304,
      "hp": 50,
      "attack": 62,
      "defense": 40,
      "spAttack": 62,
      "spDefense": 40,
      "speed": 50
    }
  },
  {
    "id": 952,
    "slug": "scovillain",
    "name": "Scovillain",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/952.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/952.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/scovillain",
    "stats": {
      "total": 486,
      "hp": 65,
      "attack": 108,
      "defense": 65,
      "spAttack": 108,
      "spDefense": 65,
      "speed": 75
    }
  },
  {
    "id": 953,
    "slug": "rellor",
    "name": "Rellor",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/953.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/953.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rellor",
    "stats": {
      "total": 270,
      "hp": 41,
      "attack": 50,
      "defense": 60,
      "spAttack": 31,
      "spDefense": 58,
      "speed": 30
    }
  },
  {
    "id": 954,
    "slug": "rabsca",
    "name": "Rabsca",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/954.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/954.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/rabsca",
    "stats": {
      "total": 470,
      "hp": 75,
      "attack": 50,
      "defense": 85,
      "spAttack": 115,
      "spDefense": 100,
      "speed": 45
    }
  },
  {
    "id": 955,
    "slug": "flittle",
    "name": "Flittle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/955.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/955.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/flittle",
    "stats": {
      "total": 255,
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "spAttack": 55,
      "spDefense": 30,
      "speed": 75
    }
  },
  {
    "id": 956,
    "slug": "espathra",
    "name": "Espathra",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/956.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/956.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/espathra",
    "stats": {
      "total": 481,
      "hp": 95,
      "attack": 60,
      "defense": 60,
      "spAttack": 101,
      "spDefense": 60,
      "speed": 105
    }
  },
  {
    "id": 957,
    "slug": "tinkatink",
    "name": "Tinkatink",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/957.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/957.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tinkatink",
    "stats": {
      "total": 297,
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "spAttack": 35,
      "spDefense": 64,
      "speed": 58
    }
  },
  {
    "id": 958,
    "slug": "tinkatuff",
    "name": "Tinkatuff",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/958.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/958.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tinkatuff",
    "stats": {
      "total": 380,
      "hp": 65,
      "attack": 55,
      "defense": 55,
      "spAttack": 45,
      "spDefense": 82,
      "speed": 78
    }
  },
  {
    "id": 959,
    "slug": "tinkaton",
    "name": "Tinkaton",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/959.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/959.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tinkaton",
    "stats": {
      "total": 506,
      "hp": 85,
      "attack": 75,
      "defense": 77,
      "spAttack": 70,
      "spDefense": 105,
      "speed": 94
    }
  },
  {
    "id": 960,
    "slug": "wiglett",
    "name": "Wiglett",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/960.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/960.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wiglett",
    "stats": {
      "total": 245,
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "spAttack": 35,
      "spDefense": 25,
      "speed": 95
    }
  },
  {
    "id": 961,
    "slug": "wugtrio",
    "name": "Wugtrio",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/961.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/961.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wugtrio",
    "stats": {
      "total": 425,
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "spAttack": 50,
      "spDefense": 70,
      "speed": 120
    }
  },
  {
    "id": 962,
    "slug": "bombirdier",
    "name": "Bombirdier",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/962.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/962.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/bombirdier",
    "stats": {
      "total": 485,
      "hp": 70,
      "attack": 103,
      "defense": 85,
      "spAttack": 60,
      "spDefense": 85,
      "speed": 82
    }
  },
  {
    "id": 963,
    "slug": "finizen",
    "name": "Finizen",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/963.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/963.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/finizen",
    "stats": {
      "total": 315,
      "hp": 70,
      "attack": 45,
      "defense": 40,
      "spAttack": 45,
      "spDefense": 40,
      "speed": 75
    }
  },
  {
    "id": 964,
    "slug": "palafin",
    "name": "Palafin",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/964.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/964.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/palafin",
    "stats": {
      "total": 457,
      "hp": 100,
      "attack": 70,
      "defense": 72,
      "spAttack": 53,
      "spDefense": 62,
      "speed": 100
    }
  },
  {
    "id": 965,
    "slug": "varoom",
    "name": "Varoom",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/965.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/965.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/varoom",
    "stats": {
      "total": 300,
      "hp": 45,
      "attack": 70,
      "defense": 63,
      "spAttack": 30,
      "spDefense": 45,
      "speed": 47
    }
  },
  {
    "id": 966,
    "slug": "revavroom",
    "name": "Revavroom",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/966.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/966.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/revavroom",
    "stats": {
      "total": 500,
      "hp": 80,
      "attack": 119,
      "defense": 90,
      "spAttack": 54,
      "spDefense": 67,
      "speed": 90
    }
  },
  {
    "id": 967,
    "slug": "cyclizar",
    "name": "Cyclizar",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/967.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/967.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cyclizar",
    "stats": {
      "total": 501,
      "hp": 70,
      "attack": 95,
      "defense": 65,
      "spAttack": 85,
      "spDefense": 65,
      "speed": 121
    }
  },
  {
    "id": 968,
    "slug": "orthworm",
    "name": "Orthworm",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/968.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/968.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/orthworm",
    "stats": {
      "total": 480,
      "hp": 70,
      "attack": 85,
      "defense": 145,
      "spAttack": 60,
      "spDefense": 55,
      "speed": 65
    }
  },
  {
    "id": 969,
    "slug": "glimmet",
    "name": "Glimmet",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/969.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/969.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/glimmet",
    "stats": {
      "total": 350,
      "hp": 48,
      "attack": 35,
      "defense": 42,
      "spAttack": 105,
      "spDefense": 60,
      "speed": 60
    }
  },
  {
    "id": 970,
    "slug": "glimmora",
    "name": "Glimmora",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/970.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/970.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/glimmora",
    "stats": {
      "total": 525,
      "hp": 83,
      "attack": 55,
      "defense": 90,
      "spAttack": 130,
      "spDefense": 81,
      "speed": 86
    }
  },
  {
    "id": 971,
    "slug": "greavard",
    "name": "Greavard",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/971.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/971.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/greavard",
    "stats": {
      "total": 290,
      "hp": 50,
      "attack": 61,
      "defense": 60,
      "spAttack": 30,
      "spDefense": 55,
      "speed": 34
    }
  },
  {
    "id": 972,
    "slug": "houndstone",
    "name": "Houndstone",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/972.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/972.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/houndstone",
    "stats": {
      "total": 488,
      "hp": 72,
      "attack": 101,
      "defense": 100,
      "spAttack": 50,
      "spDefense": 97,
      "speed": 68
    }
  },
  {
    "id": 973,
    "slug": "flamigo",
    "name": "Flamigo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/973.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/973.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/flamigo",
    "stats": {
      "total": 500,
      "hp": 82,
      "attack": 115,
      "defense": 74,
      "spAttack": 75,
      "spDefense": 64,
      "speed": 90
    }
  },
  {
    "id": 974,
    "slug": "cetoddle",
    "name": "Cetoddle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/974.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/974.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cetoddle",
    "stats": {
      "total": 334,
      "hp": 108,
      "attack": 68,
      "defense": 45,
      "spAttack": 30,
      "spDefense": 40,
      "speed": 43
    }
  },
  {
    "id": 975,
    "slug": "cetitan",
    "name": "Cetitan",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/975.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/975.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/cetitan",
    "stats": {
      "total": 521,
      "hp": 170,
      "attack": 113,
      "defense": 65,
      "spAttack": 45,
      "spDefense": 55,
      "speed": 73
    }
  },
  {
    "id": 976,
    "slug": "veluza",
    "name": "Veluza",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/976.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/976.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/veluza",
    "stats": {
      "total": 478,
      "hp": 90,
      "attack": 102,
      "defense": 73,
      "spAttack": 78,
      "spDefense": 65,
      "speed": 70
    }
  },
  {
    "id": 977,
    "slug": "dondozo",
    "name": "Dondozo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/977.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/977.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dondozo",
    "stats": {
      "total": 530,
      "hp": 150,
      "attack": 100,
      "defense": 115,
      "spAttack": 65,
      "spDefense": 65,
      "speed": 35
    }
  },
  {
    "id": 978,
    "slug": "tatsugiri",
    "name": "Tatsugiri",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/978.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/978.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/tatsugiri",
    "stats": {
      "total": 475,
      "hp": 68,
      "attack": 50,
      "defense": 60,
      "spAttack": 120,
      "spDefense": 95,
      "speed": 82
    }
  },
  {
    "id": 979,
    "slug": "annihilape",
    "name": "Annihilape",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/979.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/979.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/annihilape",
    "stats": {
      "total": 535,
      "hp": 110,
      "attack": 115,
      "defense": 80,
      "spAttack": 50,
      "spDefense": 90,
      "speed": 90
    }
  },
  {
    "id": 980,
    "slug": "clodsire",
    "name": "Clodsire",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/980.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/980.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/clodsire",
    "stats": {
      "total": 430,
      "hp": 130,
      "attack": 75,
      "defense": 60,
      "spAttack": 45,
      "spDefense": 100,
      "speed": 20
    }
  },
  {
    "id": 981,
    "slug": "farigiraf",
    "name": "Farigiraf",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/981.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/981.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/farigiraf",
    "stats": {
      "total": 520,
      "hp": 120,
      "attack": 90,
      "defense": 70,
      "spAttack": 110,
      "spDefense": 70,
      "speed": 60
    }
  },
  {
    "id": 982,
    "slug": "dudunsparce",
    "name": "Dudunsparce",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/982.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/982.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dudunsparce",
    "stats": {
      "total": 520,
      "hp": 125,
      "attack": 100,
      "defense": 80,
      "spAttack": 85,
      "spDefense": 75,
      "speed": 55
    }
  },
  {
    "id": 983,
    "slug": "kingambit",
    "name": "Kingambit",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/983.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/983.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/kingambit",
    "stats": {
      "total": 550,
      "hp": 100,
      "attack": 135,
      "defense": 120,
      "spAttack": 60,
      "spDefense": 85,
      "speed": 50
    }
  },
  {
    "id": 984,
    "slug": "great-tusk",
    "name": "Great Tusk",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/984.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/984.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/great-tusk",
    "stats": {
      "total": 570,
      "hp": 115,
      "attack": 131,
      "defense": 131,
      "spAttack": 53,
      "spDefense": 53,
      "speed": 87
    }
  },
  {
    "id": 985,
    "slug": "scream-tail",
    "name": "Scream Tail",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/985.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/985.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/scream-tail",
    "stats": {
      "total": 570,
      "hp": 115,
      "attack": 65,
      "defense": 99,
      "spAttack": 65,
      "spDefense": 115,
      "speed": 111
    }
  },
  {
    "id": 986,
    "slug": "brute-bonnet",
    "name": "Brute Bonnet",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/986.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/986.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/brute-bonnet",
    "stats": {
      "total": 570,
      "hp": 111,
      "attack": 127,
      "defense": 99,
      "spAttack": 79,
      "spDefense": 99,
      "speed": 55
    }
  },
  {
    "id": 987,
    "slug": "flutter-mane",
    "name": "Flutter Mane",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/987.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/987.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/flutter-mane",
    "stats": {
      "total": 570,
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "spAttack": 135,
      "spDefense": 135,
      "speed": 135
    }
  },
  {
    "id": 988,
    "slug": "slither-wing",
    "name": "Slither Wing",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/988.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/988.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/slither-wing",
    "stats": {
      "total": 570,
      "hp": 85,
      "attack": 135,
      "defense": 79,
      "spAttack": 85,
      "spDefense": 105,
      "speed": 81
    }
  },
  {
    "id": 989,
    "slug": "sandy-shocks",
    "name": "Sandy Shocks",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/989.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/989.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sandy-shocks",
    "stats": {
      "total": 570,
      "hp": 85,
      "attack": 81,
      "defense": 97,
      "spAttack": 121,
      "spDefense": 85,
      "speed": 101
    }
  },
  {
    "id": 990,
    "slug": "iron-treads",
    "name": "Iron Treads",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/990.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/990.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/iron-treads",
    "stats": {
      "total": 570,
      "hp": 90,
      "attack": 112,
      "defense": 120,
      "spAttack": 72,
      "spDefense": 70,
      "speed": 106
    }
  },
  {
    "id": 991,
    "slug": "iron-bundle",
    "name": "Iron Bundle",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/991.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/991.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/iron-bundle",
    "stats": {
      "total": 570,
      "hp": 56,
      "attack": 80,
      "defense": 114,
      "spAttack": 124,
      "spDefense": 60,
      "speed": 136
    }
  },
  {
    "id": 992,
    "slug": "iron-hands",
    "name": "Iron Hands",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/992.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/992.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/iron-hands",
    "stats": {
      "total": 570,
      "hp": 154,
      "attack": 140,
      "defense": 108,
      "spAttack": 50,
      "spDefense": 68,
      "speed": 50
    }
  },
  {
    "id": 993,
    "slug": "iron-jugulis",
    "name": "Iron Jugulis",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/993.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/993.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/iron-jugulis",
    "stats": {
      "total": 570,
      "hp": 94,
      "attack": 80,
      "defense": 86,
      "spAttack": 122,
      "spDefense": 80,
      "speed": 108
    }
  },
  {
    "id": 994,
    "slug": "iron-moth",
    "name": "Iron Moth",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/994.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/994.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/iron-moth",
    "stats": {
      "total": 570,
      "hp": 80,
      "attack": 70,
      "defense": 60,
      "spAttack": 140,
      "spDefense": 110,
      "speed": 110
    }
  },
  {
    "id": 995,
    "slug": "iron-thorns",
    "name": "Iron Thorns",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/995.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/995.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/iron-thorns",
    "stats": {
      "total": 570,
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "spAttack": 70,
      "spDefense": 84,
      "speed": 72
    }
  },
  {
    "id": 996,
    "slug": "frigibax",
    "name": "Frigibax",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/996.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/996.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/frigibax",
    "stats": {
      "total": 320,
      "hp": 65,
      "attack": 75,
      "defense": 45,
      "spAttack": 35,
      "spDefense": 45,
      "speed": 55
    }
  },
  {
    "id": 997,
    "slug": "arctibax",
    "name": "Arctibax",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/997.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/997.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/arctibax",
    "stats": {
      "total": 423,
      "hp": 90,
      "attack": 95,
      "defense": 66,
      "spAttack": 45,
      "spDefense": 65,
      "speed": 62
    }
  },
  {
    "id": 998,
    "slug": "baxcalibur",
    "name": "Baxcalibur",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/998.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/998.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/baxcalibur",
    "stats": {
      "total": 600,
      "hp": 115,
      "attack": 145,
      "defense": 92,
      "spAttack": 75,
      "spDefense": 86,
      "speed": 87
    }
  },
  {
    "id": 999,
    "slug": "gimmighoul",
    "name": "Gimmighoul",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/999.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/999.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gimmighoul",
    "stats": {
      "total": 300,
      "hp": 45,
      "attack": 30,
      "defense": 70,
      "spAttack": 75,
      "spDefense": 70,
      "speed": 10
    }
  },
  {
    "id": 1000,
    "slug": "gholdengo",
    "name": "Gholdengo",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1000.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1000.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gholdengo",
    "stats": {
      "total": 550,
      "hp": 87,
      "attack": 60,
      "defense": 95,
      "spAttack": 133,
      "spDefense": 91,
      "speed": 84
    }
  },
  {
    "id": 1001,
    "slug": "wo-chien",
    "name": "Wo-Chien",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1001.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1001.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/wo-chien",
    "stats": {
      "total": 570,
      "hp": 85,
      "attack": 85,
      "defense": 100,
      "spAttack": 95,
      "spDefense": 135,
      "speed": 70
    }
  },
  {
    "id": 1002,
    "slug": "chien-pao",
    "name": "Chien-Pao",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1002.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1002.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/chien-pao",
    "stats": {
      "total": 570,
      "hp": 80,
      "attack": 120,
      "defense": 80,
      "spAttack": 90,
      "spDefense": 65,
      "speed": 135
    }
  },
  {
    "id": 1003,
    "slug": "ting-lu",
    "name": "Ting-Lu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1003.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1003.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ting-lu",
    "stats": {
      "total": 570,
      "hp": 155,
      "attack": 110,
      "defense": 125,
      "spAttack": 55,
      "spDefense": 80,
      "speed": 45
    }
  },
  {
    "id": 1004,
    "slug": "chi-yu",
    "name": "Chi-Yu",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1004.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1004.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/chi-yu",
    "stats": {
      "total": 570,
      "hp": 55,
      "attack": 80,
      "defense": 80,
      "spAttack": 135,
      "spDefense": 120,
      "speed": 100
    }
  },
  {
    "id": 1005,
    "slug": "roaring-moon",
    "name": "Roaring Moon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1005.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1005.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/roaring-moon",
    "stats": {
      "total": 590,
      "hp": 105,
      "attack": 139,
      "defense": 71,
      "spAttack": 55,
      "spDefense": 101,
      "speed": 119
    }
  },
  {
    "id": 1006,
    "slug": "iron-valiant",
    "name": "Iron Valiant",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1006.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1006.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/iron-valiant",
    "stats": {
      "total": 590,
      "hp": 74,
      "attack": 130,
      "defense": 90,
      "spAttack": 120,
      "spDefense": 60,
      "speed": 116
    }
  },
  {
    "id": 1007,
    "slug": "koraidon",
    "name": "Koraidon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1007.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1007.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/koraidon",
    "stats": {
      "total": 670,
      "hp": 100,
      "attack": 135,
      "defense": 115,
      "spAttack": 85,
      "spDefense": 100,
      "speed": 135
    }
  },
  {
    "id": 1008,
    "slug": "miraidon",
    "name": "Miraidon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1008.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1008.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/miraidon",
    "stats": {
      "total": 670,
      "hp": 100,
      "attack": 85,
      "defense": 100,
      "spAttack": 135,
      "spDefense": 115,
      "speed": 135
    }
  },
  {
    "id": 1009,
    "slug": "walking-wake",
    "name": "Walking Wake",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1009.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1009.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/walking-wake",
    "stats": {
      "total": 590,
      "hp": 99,
      "attack": 83,
      "defense": 91,
      "spAttack": 125,
      "spDefense": 83,
      "speed": 109
    }
  },
  {
    "id": 1010,
    "slug": "iron-leaves",
    "name": "Iron Leaves",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1010.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1010.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/iron-leaves",
    "stats": {
      "total": 590,
      "hp": 90,
      "attack": 130,
      "defense": 88,
      "spAttack": 70,
      "spDefense": 108,
      "speed": 104
    }
  },
  {
    "id": 1011,
    "slug": "dipplin",
    "name": "Dipplin",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1011.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1011.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/dipplin",
    "stats": {
      "total": 485,
      "hp": 80,
      "attack": 80,
      "defense": 110,
      "spAttack": 95,
      "spDefense": 80,
      "speed": 40
    }
  },
  {
    "id": 1012,
    "slug": "poltchageist",
    "name": "Poltchageist",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1012.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1012.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/poltchageist",
    "stats": {
      "total": 308,
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "spAttack": 74,
      "spDefense": 54,
      "speed": 50
    }
  },
  {
    "id": 1013,
    "slug": "sinistcha",
    "name": "Sinistcha",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1013.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1013.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/sinistcha",
    "stats": {
      "total": 508,
      "hp": 71,
      "attack": 60,
      "defense": 106,
      "spAttack": 121,
      "spDefense": 80,
      "speed": 70
    }
  },
  {
    "id": 1014,
    "slug": "okidogi",
    "name": "Okidogi",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1014.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1014.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/okidogi",
    "stats": {
      "total": 555,
      "hp": 88,
      "attack": 128,
      "defense": 115,
      "spAttack": 58,
      "spDefense": 86,
      "speed": 80
    }
  },
  {
    "id": 1015,
    "slug": "munkidori",
    "name": "Munkidori",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1015.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1015.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/munkidori",
    "stats": {
      "total": 555,
      "hp": 88,
      "attack": 75,
      "defense": 66,
      "spAttack": 130,
      "spDefense": 90,
      "speed": 106
    }
  },
  {
    "id": 1016,
    "slug": "fezandipiti",
    "name": "Fezandipiti",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1016.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1016.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/fezandipiti",
    "stats": {
      "total": 555,
      "hp": 88,
      "attack": 91,
      "defense": 82,
      "spAttack": 70,
      "spDefense": 125,
      "speed": 99
    }
  },
  {
    "id": 1017,
    "slug": "ogerpon",
    "name": "Ogerpon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1017.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1017.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/ogerpon",
    "stats": {
      "total": 550,
      "hp": 80,
      "attack": 120,
      "defense": 84,
      "spAttack": 60,
      "spDefense": 96,
      "speed": 110
    }
  },
  {
    "id": 1018,
    "slug": "archaludon",
    "name": "Archaludon",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1018.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1018.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/archaludon",
    "stats": {
      "total": 600,
      "hp": 90,
      "attack": 105,
      "defense": 130,
      "spAttack": 125,
      "spDefense": 65,
      "speed": 85
    }
  },
  {
    "id": 1019,
    "slug": "hydrapple",
    "name": "Hydrapple",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1019.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1019.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/hydrapple",
    "stats": {
      "total": 540,
      "hp": 106,
      "attack": 80,
      "defense": 110,
      "spAttack": 120,
      "spDefense": 80,
      "speed": 44
    }
  },
  {
    "id": 1020,
    "slug": "gouging-fire",
    "name": "Gouging Fire",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1020.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1020.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/gouging-fire",
    "stats": {
      "total": 590,
      "hp": 105,
      "attack": 115,
      "defense": 121,
      "spAttack": 65,
      "spDefense": 93,
      "speed": 91
    }
  },
  {
    "id": 1021,
    "slug": "raging-bolt",
    "name": "Raging Bolt",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1021.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1021.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/raging-bolt",
    "stats": {
      "total": 590,
      "hp": 125,
      "attack": 73,
      "defense": 91,
      "spAttack": 137,
      "spDefense": 89,
      "speed": 75
    }
  },
  {
    "id": 1022,
    "slug": "iron-boulder",
    "name": "Iron Boulder",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1022.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1022.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/iron-boulder",
    "stats": {
      "total": 590,
      "hp": 90,
      "attack": 120,
      "defense": 80,
      "spAttack": 68,
      "spDefense": 108,
      "speed": 124
    }
  },
  {
    "id": 1023,
    "slug": "iron-crown",
    "name": "Iron Crown",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1023.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1023.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/iron-crown",
    "stats": {
      "total": 590,
      "hp": 90,
      "attack": 72,
      "defense": 100,
      "spAttack": 122,
      "spDefense": 108,
      "speed": 98
    }
  },
  {
    "id": 1024,
    "slug": "terapagos",
    "name": "Terapagos",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1024.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1024.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/terapagos",
    "stats": {
      "total": 450,
      "hp": 90,
      "attack": 65,
      "defense": 85,
      "spAttack": 65,
      "spDefense": 85,
      "speed": 60
    }
  },
  {
    "id": 1025,
    "slug": "pecharunt",
    "name": "Pecharunt",
    "types": [],
    "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1025.png",
    "fallbackImageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1025.png",
    "pokemonComUrl": "https://www.pokemon.com/us/pokedex/pecharunt",
    "stats": {
      "total": 600,
      "hp": 88,
      "attack": 88,
      "defense": 160,
      "spAttack": 88,
      "spDefense": 88,
      "speed": 88
    }
  }
];

import { GraphQLClient } from "graphql-request";

const endpoint = "https://beta.pokeapi.co/graphql/v1beta";

const graphQLClient = new GraphQLClient(endpoint);

export async function getPokemonList(value) {
  const whereClause = value ? `where: { name: { _iregex: ${value} } }` : "";

  const query = `
    query samplePokeAPIquery {
      pokemon_v2_pokemon(
        order_by: { id: asc }
        limit: 905
        ${whereClause}
      ) {
        id
        name
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
    `;

  const data = await graphQLClient.request(query);

  return data.pokemon_v2_pokemon;
}

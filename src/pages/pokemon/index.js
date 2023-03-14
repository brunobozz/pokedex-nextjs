import { useState, useEffect } from "react";
import { getPokemonInfo } from "@/graphql/GetPokemonInfo";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "./pokemon.module.scss";
import PokemonHeader from "@/components/pokemonHeader/pokemonHeader";
import PokemonImage from "@/components/pokemonImage/pokemonImage";
import PokemonInfo from "@/components/pokemonInfo/pokemonInfo";

function Pokemon() {
  const router = useRouter();
  const { id } = router.query;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (id) {
      getPokemonInfo(id).then((data) => {
        setPokemon(data);
      });
    }
  }, [id]);

  if (pokemon) {
    let type = pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
    return (
      <>
        <Head>
          <title>
            {pokemon.id} - {pokemon.name}
          </title>
        </Head>
        <main className={styles.pokebg + " bg-type-" + type}>
          <div className={styles.card + " border-0"}>
            <PokemonHeader
              pokeType={type}
              pokeId={pokemon.id}
              pokeName={pokemon.name}
            ></PokemonHeader>
            <PokemonImage pokeId={pokemon.id} pokeType={type}></PokemonImage>
            <PokemonInfo pokemon={pokemon} pokeType={type}></PokemonInfo>
          </div>
        </main>
      </>
    );
  }
}

export default Pokemon;

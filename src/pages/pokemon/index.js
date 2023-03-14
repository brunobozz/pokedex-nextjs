import styles from "./pokemon.module.scss";
import PokemonHeader from "@/components/pokemonHeader/pokemonHeader";
import PokemonImage from "@/components/pokemonImage/pokemonImage";
import PokemonInfo from "@/components/pokemonInfo/pokemonInfo";

function Pokemon() {
  let type = "electric";
  return (
    <main className={styles.pokebg + " bg-type-" + type}>
      <div className={styles.card + " border-0"}>
        <PokemonHeader
          pokeType={type}
          pokeId="25"
          pokeName="Pikachu"
        ></PokemonHeader>
        <PokemonImage pokeId={25} pokeType={type}></PokemonImage>
        <PokemonInfo pokeType={type}></PokemonInfo>
      </div>
    </main>
  );
}

export default Pokemon;

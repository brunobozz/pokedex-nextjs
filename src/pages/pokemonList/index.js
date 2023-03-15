import styles from "./pokemonList.module.scss";
import PokemonListItem from "@/components/pokemonListItem/PokemonListItem";
import SearchForm from "@/components/searchForm/SearchForm";
import { getPokemonList } from "@/graphql/GetPokemonList";
import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    getPokemonList().then((data) => {
      setPokemonList(data);
    });
  }, []);

  const pokeSearch = (value) => {
    clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      setSearchValue(value);
    }, 1000);
    setTimeoutId(newTimeoutId);
  };

  const filteredPokemonList = pokemonList?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (pokemonList) {
    return (
      <main className={styles.pokemonList + " bg-light"}>
        <SearchForm onSearch={pokeSearch}></SearchForm>
        <div className="list-group list-group-flush bg-primary">
        {filteredPokemonList.map((item) => (
          <PokemonListItem key={item.id} pokemon={item}></PokemonListItem>
          ))}
      </div>
      </main>
    );
  }
}

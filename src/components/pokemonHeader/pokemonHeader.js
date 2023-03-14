import Link from "next/link";
import styles from "./pokemonHeader.module.scss";

function PokemonHeader(props) {
  return (
    <div
      className={
        styles.card_header +
        " d-flex justify-content-between p-3 align-items-center bg-type-" +
        props.pokeType
      }
    >
      <h5 className={styles.card_header_title + " text-capitalize"}>
        {props.pokeId} - {props.pokeName}
      </h5>
      <Link href="/pokemonList" className="btn text-light">
        <i className="fa fa-search"></i>
      </Link>
    </div>
  );
}

export default PokemonHeader;

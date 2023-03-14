import Link from "next/link";
import styles from "./pokemonImage.module.scss";

export default function PokemonImage(props) {
  if (!Number.isInteger(props.pokeId) || props.pokeId < 0) {
    throw new Error("ID inválido");
  }
  const strId = String(props.pokeId);
  const paddedId = strId.padStart(3, "0");

  return (
    <div className={styles.card_img}>
      <div className={styles.card_img_actions}>
        <Link href={"/pokemon?id=" + (props.pokeId - 1)}>
          <i className="fa fa-chevron-left"></i>
        </Link>
        <Link href={"/pokemon?id=" + (props.pokeId + 1)}>
          <i className="fa fa-chevron-right"></i>
        </Link>
      </div>
      <img
        src={
          "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
          paddedId +
          ".png"
        }
        className={"card-img-top bg-type-" + props.pokeType}
        alt="Pokémon"
      />
    </div>
  );
}

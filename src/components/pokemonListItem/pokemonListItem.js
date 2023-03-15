import Link from "next/link";
import CircleType from "../circleType/circleType";

export default function PokemonListItem(props) {
  return (
    <Link
      className="list-group-item fw-bold d-flex justify-content-between"
      href={"/pokemon?id=" + props.pokemon.id}
    >
      <span className="text-capitalize">
        {props.pokemon.id} - {props.pokemon.name}
      </span>
      <div className="d-flex">
        {props.pokemon.pokemon_v2_pokemontypes.map((type, index) => (
          <CircleType key={index} type={type.pokemon_v2_type.name}></CircleType>
        ))}
      </div>
    </Link>
  );
}

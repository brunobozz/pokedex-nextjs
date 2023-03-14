import styles from "./pokemonInfo.module.scss";

export default function PokemonInfo(props) {
  return (
    <ul
      className={
        styles.listGroup +
        " list-group list-group-flush bg-type-" +
        props.pokeType
      }
    >
      <li
        className={
          styles.listGroupItem +
          " list-group-item d-flex justify-content-between"
        }
      >
        <span className="fw-bold">Type</span>
        {/* <span className="fw-bold">{props.pokeType}</span> */}
      </li>
      <li
        className={
          styles.listGroupItem +
          " list-group-item d-flex justify-content-between"
        }
      >
        <span className="fw-bold">Weight</span>
        {/* <span>{props.pokemon.weight} lbs.</span> */}
      </li>
      <li
        className={
          styles.listGroupItem +
          " list-group-item d-flex justify-content-between"
        }
      >
        <span className="fw-bold">Height</span>
        {/* <span>{props.pokemon.height} f.</span> */}
      </li>
      <li
        className={
          styles.listGroupItem +
          " list-group-item d-flex justify-content-between"
        }
      >
        <span className="fw-bold">Base Experience</span>
        {/* <span>{props.pokemon.base_experience}</span> */}
      </li>
      <li
        className={
          styles.listGroupItem +
          " list-group-item d-flex justify-content-between"
        }
      >
        <span className="fw-bold">Abilities</span>
        {/* <ul>
          {props.pokemon.pokemon_v2_pokemonabilities.map((ability, index) => (
            <li key={index}>{ability.pokemon_v2_ability.name}</li>
          ))}
        </ul> */}
      </li>
    </ul>
  );
}

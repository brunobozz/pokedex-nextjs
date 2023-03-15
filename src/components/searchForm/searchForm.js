import styles from "./searchForm.module.scss";

export default function SearchForm(props) {
  const handleChange = (event) => {
    const value = event.target.value;
    props.onSearch(value);
  };

  return (
    <div className={styles.search + " p-3"}>
      <div className="input-group">
        <button className={styles.btn + " btn bg-white"} type="button">
          <i className="fa fa-search fa-fw"></i>
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Search Pokémon"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

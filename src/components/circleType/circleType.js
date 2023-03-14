import styles from "./circleType.module.scss";

export default function CircleType(props) {
  return (
    <img
      className={styles.circleType + " bg-type-" + props.type}
      src={"../assets/icons/type/" + props.type + ".svg"}
    />
  );
}

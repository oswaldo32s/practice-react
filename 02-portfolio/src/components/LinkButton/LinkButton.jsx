import { Link } from "react-router";
import styles from "./LinkButton.module.css";

export default function LinkButton({ path, children }) {
  return (
    <Link className={styles.button} to={path}>
      {children}
    </Link>
  );
}

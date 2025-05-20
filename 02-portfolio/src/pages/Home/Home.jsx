import { Link } from "react-router";
import LinkButton from "../../components/LinkButton/LinkButton";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <section>
        <h2 className={styles.title}>Oswaldo Gonzalez</h2>
        <h3 className={styles.jobTitle}>Data Engineer | Software Developer</h3>
        <p className={styles.quote}>
          <em>Turning Data into insight, and insight into code.</em>
        </p>
      </section>
      <div className={styles.buttonSection}>
        <LinkButton path="/projects">See my Projects</LinkButton>
        <LinkButton path="/contact">Contact Me</LinkButton>
      </div>
    </main>
  );
}

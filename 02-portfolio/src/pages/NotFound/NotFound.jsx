import styles from "./NotFound.module.css";
import LinkButton from "../../components/LinkButton/LinkButton";
import Header from "../../components/Header/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.notFound}>
        <h2 className={styles.title}>
          Hey! Looks like this page does not exist... yet...
        </h2>
        <p>Don't worry! This is not the end of the world.</p>
        <LinkButton path="/">Go back to the Home Page</LinkButton>
      </main>
    </>
  );
}

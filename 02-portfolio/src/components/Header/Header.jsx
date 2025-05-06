import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  function toggleMenu() {
    setActive(active ? false : true);
  }

  return (
    <header className={styles.header}>
      <section className={styles.titleSection}>
        <h1 className={styles.longTitle}>Oswaldo Gonzalez</h1>
        <h1 className={styles.shortTitle}>OG</h1>
      </section>
      <section className={styles.menuSection}>
        <nav className={styles.navSection}>
          <ul className={active ? styles.menuList : styles.hiddenMenuList}>
            <li className={styles.menuItem}>Home</li>
            <li className={styles.menuItem}>About</li>
            <li className={styles.menuItem}>Projects</li>
            <li className={styles.menuItem}>Contact</li>
          </ul>
        </nav>
        <div className={styles.menuButtonSection}>
          <button className={styles.menuButton} onClick={toggleMenu}>
            {active ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={styles.menuSVG}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={styles.menuSVG}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </section>
    </header>
  );
}

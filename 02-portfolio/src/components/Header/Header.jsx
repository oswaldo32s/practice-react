import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [active, setActive] = useState(false);

  function toggleMenu() {
    setActive(active ? false : true);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <section className={styles.titleSection}>
          <Link to="/" className={styles.titleSection}>
            <h1 className={styles.longTitle}>Oswaldo Gonzalez</h1>
            <h1 className={styles.shortTitle}>OG</h1>
          </Link>
        </section>
        <section className={styles.menuSection}>
          <nav className={styles.navSection}>
            <ul className={active ? styles.menuList : styles.hiddenMenuList}>
              <li className={styles.menuItem} onClick={toggleMenu}>
                <Link className={styles.link} to="/">
                  Home
                </Link>
              </li>
              <li className={styles.menuItem} onClick={toggleMenu}>
                <Link className={styles.link} to="/about">
                  About
                </Link>
              </li>
              <li className={styles.menuItem} onClick={toggleMenu}>
                <Link className={styles.link} to="/projects">
                  Projects
                </Link>
              </li>
              <li className={styles.menuItem} onClick={toggleMenu}>
                <Link className={styles.link} to="/contact">
                  Contact
                </Link>
              </li>
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
      </div>
    </header>
  );
}

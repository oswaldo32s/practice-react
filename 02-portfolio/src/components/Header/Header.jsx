import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router";
import {
  CloseIcon,
  HomeIcon,
  MenuIcon,
  PhoneIcon,
  ProfileIcon,
  ProjectsIcon,
} from "../../assets/Icons";

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
                  <HomeIcon style={styles.menuSVG} />
                  Home
                </Link>
              </li>
              <li className={styles.menuItem} onClick={toggleMenu}>
                <Link className={styles.link} to="/about">
                  <ProfileIcon style={styles.menuSVG} />
                  About
                </Link>
              </li>
              <li className={styles.menuItem} onClick={toggleMenu}>
                <Link className={styles.link} to="/projects">
                  <ProjectsIcon style={styles.menuSVG} />
                  Projects
                </Link>
              </li>
              <li className={styles.menuItem} onClick={toggleMenu}>
                <Link className={styles.link} to="/contact">
                  <PhoneIcon style={styles.menuSVG} />
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.menuButtonSection}>
            <button className={styles.menuButton} onClick={toggleMenu}>
              {active ? (
                <CloseIcon style={styles.menuSVG} />
              ) : (
                <MenuIcon style={styles.menuSVG} />
              )}
            </button>
          </div>
        </section>
      </div>
    </header>
  );
}

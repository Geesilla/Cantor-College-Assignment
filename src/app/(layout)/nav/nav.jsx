import { useState } from "react";
import styles from "./BurgerNav.module.css";

export default function BurgerNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Navigation</div>
      <div className={styles.burger} onClick={toggleMenu}>
        <div className={`${styles.line} ${isOpen ? styles.rotate1 : ""}`} />
        <div className={`${styles.line} ${isOpen ? styles.fade : ""}`} />
        <div className={`${styles.line} ${isOpen ? styles.rotate2 : ""}`} />
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Business</a></li>
        <li><a href="#contact">Courses</a></li>
      </ul>
    </nav>
  );
}

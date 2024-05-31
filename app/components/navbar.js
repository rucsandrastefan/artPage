// app/components/Navbar.js

import React from "react";
import styles from "./navbar.module.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <a transition={{ duration: 0.3 }} href="#">
            Home
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#">About</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#">Services</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

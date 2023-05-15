import React from "react";
import styles from "../header/navbar.module.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import JoinUsButton from "../buttons/JoinUsButton";
const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <Logo />
      <div className={styles.navLinks}>
        <Link className={styles.links} to="/">
          მთავარი
        </Link>
        <Link className={styles.links} to="/contact">
          კონტაქტი
        </Link>
        <Link className={styles.links} to="/about-us">
          ჩვენს შესახებ
        </Link>
        <JoinUsButton />
      </div>
    </div>
  );
};

export default Navbar;

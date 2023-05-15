import React from "react";
import styles from "../header/navbar.module.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <Logo />
      <div className={styles.navLinks}>
        <Link className={styles.links} to="/">
          მთავარი
        </Link>
        <Link className={styles.links} to="/">
          კონტაქტი
        </Link>
        <Link className={styles.links} to="/">
          ჩვენს შესახებ
        </Link>
        <div className={styles.loginWrapper}>
          <Link className={styles.loginLikns} to="/">
            დაიწყე ახლა!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

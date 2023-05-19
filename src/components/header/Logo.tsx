import React from "react";
import { Link } from "react-router-dom";
import styles from "./logo.module.css";
const Logo = () => {
  return (
    <div>
      <Link to="/" className={styles.logoText}>
        <div className={styles.co}>
          <span className={styles.coText}>CO</span>
        </div>
        Work-Space
      </Link>
    </div>
  );
};

export default Logo;

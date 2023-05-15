import React from "react";
import { Link } from "react-router-dom";
import styles from "./logo.module.css";
const Logo = () => {
  return (
    <div>
      <h1 className={styles.logoText}>
        <div className={styles.co}>
          <span className={styles.coText}>CO</span>
        </div>
        Work-Space
      </h1>
    </div>
  );
};

export default Logo;

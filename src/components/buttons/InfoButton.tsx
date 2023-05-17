import React from "react";
import { Link } from "react-router-dom";
import Styles from "./button.module.css";

const InfoButton = () => {
  return (
    <Link className={Styles.infoLink} to="/about-us">
      გაიგე მეტი!
    </Link>
  );
};

export default InfoButton;

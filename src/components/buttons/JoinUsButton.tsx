import React from "react";
import { Link } from "react-router-dom";
import Styles from "./button.module.css";
const JoinUsButton = () => {
  return (
    <div className={Styles.loginWrapper}>
      <Link className={Styles.loginLikns} to="/join-us">
        შემოგვიერთდი
      </Link>
      ;
    </div>
  );
};

export default JoinUsButton;

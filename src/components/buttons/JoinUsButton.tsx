import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./button.module.css";
import styled, { css } from "styled-components";

interface LogInTypes {
  adminData: {
    logged: boolean;
    user: string;
  };
  userData: {
    logged: boolean;
    user: string;
  };
}

const initialValue = {
  adminData: {
    logged: false,
    user: "",
  },
  userData: {
    logged: false,
    user: "",
  },
};

const JoinUsButton = ({ num }: { num: number }) => {
  const [logged, setLogged] = useState<LogInTypes>(initialValue);

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem("adminLogIn")!);
    const userData = JSON.parse(localStorage.getItem("userLogIn")!);
    setLogged({ adminData, userData });
  }, []);

  return (
    <LinkWrapper num={num}>
      <Link
        className={Styles.loginLikns}
        to={
          logged?.adminData?.user === "admin" &&
          logged?.adminData?.logged === true
            ? "/admin-panel"
            : logged?.userData?.user === "commonUser" &&
              logged?.userData?.logged === true
            ? "/profile"
            : "/log-in"
        }
      >
        {logged?.adminData?.logged
          ? "ჩემი გვერდი"
          : logged?.userData?.logged
          ? "ჩემი გვერდი"
          : "შემოგვიერთდი"}
      </Link>
    </LinkWrapper>
  );
};

export default JoinUsButton;

const LinkWrapper = styled.div(
  ({ num }: { num: number }) => css`
    width: 193px;
    height: 69px;
    background: ${num === 2 ? " #346a8a" : " #123b53"};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in;
    &:hover {
      background-color: #041a27;
    }
    @media (max-width: 1360px) {
      background-color: #346a8a;
    }
  `
);

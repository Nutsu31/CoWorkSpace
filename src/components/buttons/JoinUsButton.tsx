import React from "react";
import { Link } from "react-router-dom";
import Styles from "./button.module.css";
import styled, { css } from "styled-components";
const JoinUsButton = ({ num }: { num: number }) => {
  return (
    <LinkWrapper num={num}>
      <Link className={Styles.loginLikns} to="/join-us">
        შემოგვიერთდი
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

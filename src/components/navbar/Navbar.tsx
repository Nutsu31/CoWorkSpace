import React from "react";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiLogIn } from "react-icons/bi";

const styles = {
  header: {
    width: "100%",
    height: "160px",
    padding: "0 80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "10px 5px 20px black",
  },
  linksWrapper: {
    width: "800px",
    display: "flex",
    justifyContent: "space-between",
    color: "black",
  },
  links: {
    color: "black",
    fontWeight: 600,
    fontSize: 20,
  },
  logo: {
    fontSize: 56,
  },
};

const Navbar = () => {
  return (
    <HeaderDiv>
      <div>
        <h1 style={styles.logo}>CoWork-Space</h1>
      </div>
      <div style={styles.linksWrapper}>
        <Link style={styles.links} to="/">
          Home
        </Link>
        <Link style={styles.links} to="/about-us">
          ჩვენს შესახებ
        </Link>
        <Link style={styles.links} to="/contact">
          კონტაქტი
        </Link>
        <div>
          <Link style={styles.links} to="/login">
            <BiLogIn /> შესვლა
          </Link>
          /
          <Link style={styles.links} to="/register">
            რეგისტრაცია
          </Link>
        </div>
      </div>
    </HeaderDiv>
  );
};

export default Navbar;

const HeaderDiv = styled.div`
  width: 100%;
  height: 160px;
  padding: 0 80px;
  box-shadow: 0px 1px 5px black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

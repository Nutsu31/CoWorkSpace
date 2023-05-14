import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiLogIn } from "react-icons/bi";

const styles = {
  header: {
    width: "100%",
    height: "1000px",
    padding: "60px 80px ",
    background: `url(${HeaderBg}) `,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  navigation: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linksWrapper: {
    width: "1200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "120px",
    color: "black",
  },
  links: {
    color: "rgba(250, 250, 250, 0.6)",
    fontWeight: 600,
    fontSize: 20,
  },
  logo: {
    color: "#A9DEEE",
    fontSize: 56,
  },
  logoStartBox: {
    color: "#123B53",
    width: "100px",
    marginRight: "20px",
    backgroundColor: "#A9DEEE",
    display: "inline-flex",
    justifyContent: "center",
    transform: "skew( -15deg)",
  },
  loginAndRegisterDiv: {
    width: "243px",
    height: "69px",
    background: "#123B53",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  loninAndRegister: {
    color: "#A9DEEE",
    fontWeight: 600,
    fontSize: 20,
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
  background: ${HeaderBg};
`;

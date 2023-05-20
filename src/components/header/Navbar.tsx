import React, { useEffect, useState } from "react";
import styles from "../header/navbar.module.css";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import JoinUsButton from "../buttons/JoinUsButton";
import styled, { css } from "styled-components";
import { Button, useMediaQuery } from "@mui/material";
import { Menu } from "@mui/icons-material";
const Navbar = () => {
  const media1400 = useMediaQuery("(max-width:1360px)");
  const [showMiniMenu, setShowMiniMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setShowMiniMenu(false);
  }, [location]);

  return (
    <Navigation>
      <Logo />
      <NavLinks showMenu={showMiniMenu}>
        <Link className={styles.links} to="/">
          მთავარი
        </Link>
        <Link className={styles.links} to="/contact">
          კონტაქტი
        </Link>
        <Link className={styles.links} to="/about-us">
          ჩვენს შესახებ
        </Link>
        <JoinUsButton num={1} />
      </NavLinks>
      {media1400 ? (
        <Button
          sx={{ position: "absolute", top: 10, right: 10, zIndex: 12 }}
          onClick={() => setShowMiniMenu(!showMiniMenu)}
        >
          <Menu />
        </Button>
      ) : null}
    </Navigation>
  );
};

export default Navbar;
const Navigation = styled.div(
  () => css`
    width: 100%;
    height: 164px;
    padding: 0 156px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media (max-width: 1350px) {
      padding: 0;
      justify-content: center;
      height: 160px;
    }
    @media (max-width: 410px) {
    }
  `
);
const NavLinks = styled.div(
  ({ showMenu }: { showMenu: boolean }) => css`
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1600px) {
      width: 800px;
    }
    @media (max-width: 1440px) {
      width: 700px;
    }
    @media (max-width: 1360px) {
      width: 200px;
      height: 100vh;
      padding-top: 70px;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 24px;
      background-color: #0a4a5e;
      position: absolute;
      z-index: 10;
      top: 0;
      right: ${showMenu ? 0 : "-200px"};
      transition: 0.3s ease;
    }
    @media (max-width: 550px) {
    }
    @media (max-width: 410px) {
    }
  `
);

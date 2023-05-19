import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import BgImage from "../assets/Group91.png";
import styled, { css } from "styled-components";

export const baseURL = "https://vast-gold-prawn-kilt.cyclic.app";

const Root = () => {
  return (
    <RootWrapper bg={BgImage}>
      <Navbar />
      <Outlet />
    </RootWrapper>
  );
};

export default Root;

const RootWrapper = styled.div(
  ({ bg }: { bg: string }) => css`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #123b53;
    background-image: url(${bg});
    background-size: cover;
    overflow-x: hidden;
  `
);

import React from "react";
import styled, { css } from "styled-components";
import UserPanelDashBoard from "./UserPanelDashBoard";
import UserPrivatRoute from "./UserPrivatRoute";

const UserPanelRoot = () => {
  return (
    <Container>
      <UserPanelDashBoard />
      <UserPrivatRoute />
    </Container>
  );
};

export default UserPanelRoot;

const Container = styled.div(
  () => css`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    background-color: #e9e7e7;
  `
);

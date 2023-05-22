import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import Logo from "components/header/Logo";
import React from "react";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";

const UserPanelDashBoard = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem(
      "userLogIn",
      JSON.stringify({ logged: false, user: undefined })
    );
    navigate("/log-in");
  };
  return (
    <Dashboard>
      <Logo />
      <Button variant="contained" onClick={handleLogOut}>
        <Logout />
        გასვლა
      </Button>
    </Dashboard>
  );
};

export default UserPanelDashBoard;

const Dashboard = styled.div(
  () => css`
    width: 260px;
    min-height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 40px 0;
  `
);

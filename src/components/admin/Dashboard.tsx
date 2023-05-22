import React, { useState } from "react";
import styled, { css } from "styled-components";
import Logo from "../header/Logo";
import EachLists from "./EachLists";
import { Button } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem(
      "adminLogIn",
      JSON.stringify({ logged: false, user: undefined })
    );
    navigate("/log-in");
  };

  return (
    <Container>
      <Logo />
      <ListsWrapper>
        <EachLists
          name="General"
          option="general"
          setActive={setActive}
          active={active}
          buttonNumber={1}
        />
        <EachLists
          buttonNumber={2}
          name="Users"
          option="users"
          setActive={setActive}
          active={active}
        />
        <EachLists
          buttonNumber={3}
          name="Statistic"
          option="statistics"
          setActive={setActive}
          active={active}
        />
        <Button variant="contained" onClick={handleLogOut}>
          <Logout />
          გასვლა
        </Button>
      </ListsWrapper>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div(
  () => css`
    height: 100vh;
    width: 305px;
    padding: 40px 0 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    background: #f1f1f1;
    box-sizing: border-box;
  `
);
const ListsWrapper = styled.div(
  () => css`
    height: 48px;
    width: 121px;
    left: 32px;
    top: 12px;
    border-radius: 10px;
    padding: 12px 15px 12px 15px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `
);

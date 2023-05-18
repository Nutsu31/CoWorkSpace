import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import axios from "axios";
import { baseURL } from "./Root";
import Dashboard from "../components/admin/Dashboard";

export interface UserType {
  name: string;
  lastname: string;
  email: string;
  isAdmin: boolean;
  developer: string;
}

const AdminRoot = () => {
  return (
    <AdminRootContainer>
      <Dashboard />
      <Outlet />
    </AdminRootContainer>
  );
};

export default AdminRoot;

const AdminRootContainer = styled.div(
  () => css`
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 10px;
  `
);

import styled, { css } from "styled-components";
import Dashboard from "../components/admin/Dashboard";
import PrivateRoute from "./PrivateRoute";
export interface UserType {
  name: string;
  lastname: string;
  email: string;
  isAdmin: boolean;
  developer: string;
  _id?: string;
}

const AdminRoot = () => {
  return (
    <AdminRootContainer>
      <Dashboard />
      <PrivateRoute />
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

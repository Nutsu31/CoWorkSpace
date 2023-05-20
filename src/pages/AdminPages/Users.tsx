import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { UserType } from "../AdminRoot";
import axios from "axios";
import { baseURL } from "../Root";
import { Person } from "@mui/icons-material";

const Users = () => {
  const [users, setUsers] = useState<Array<UserType>>([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(baseURL + "/admin-panel/users");
      const data = await res.data;
      setUsers(data.users);
    }
    getData();
  }, []);
  return (
    <UsersWrapper>
      {users.map((user) => (
        <UserInfoWrapper key={Math.random() * Math.random()}>
          <Person />
          <span>{user?._id}</span>
          <span>{user.name}</span>
          <span>{user.lastname}</span>
          <span>{user.email}</span>
          <span>{user.developer}</span>
          <span>{user.isAdmin}</span>
        </UserInfoWrapper>
      ))}
    </UsersWrapper>
  );
};

export default Users;
const UsersWrapper = styled.div(
  () => css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  `
);
const UserInfoWrapper = styled.div(
  () => css`
    width: 100%;
    height: 100px;
    display: flex;
    gap: 20px;
  `
);

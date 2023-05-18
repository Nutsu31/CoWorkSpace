import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { UserType } from "../AdminRoot";
import axios from "axios";
import { baseURL } from "../Root";

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
      <div></div>
    </UsersWrapper>
  );
};

export default Users;
const UsersWrapper = styled.div(
  () => css`
    width: 100%;
    height: 300px;
    display: flex;
    gap: 20px;
  `
);

import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Person } from "@mui/icons-material";
import { baseURL } from "../Root";
import axios from "axios";
import { UserType } from "../AdminRoot";

const General = () => {
  const [admins, setAdmins] = useState<Array<UserType>>([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(baseURL + "/admin-panel/general");
      const data = await res.data;
      setAdmins(data.users);
    }
    getData();
  }, []);
  return (
    <div>
      <h1>Admins</h1>
      <AdminsWrapper>
        {admins.map((item) => (
          <EachAdmin key={Math.random() * Math.random()}>
            <Person sx={{ fontSize: 64, color: "#A9DEEE" }} />
            <InfoText>{item.name}</InfoText>
            <InfoText>{item.lastname}</InfoText>
            <InfoText position={true}>{item.developer}</InfoText>
          </EachAdmin>
        ))}
      </AdminsWrapper>
    </div>
  );
};

export default General;

const AdminsWrapper = styled.div(
  () => css`
    width: 100%;
    height: 250px;
    display: flex;
    gap: 20px;
    box-sizing: border-box;
  `
);

const EachAdmin = styled.div(
  () => css`
    height: 220px;
    width: 174px;
    border-radius: 8px;
    background: rgba(249, 249, 249, 0.5);
    backdrop-filter: blur(2.5px);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `
);

const InfoText = styled.p(
  ({ position }: { position?: boolean }) => css`
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    /* or 19px */

    text-align: center;
    letter-spacing: 0.1px;

    color: ${position ? "#747474" : "#000000"};
  `
);

import { Button, FormControl, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { baseURL } from "./Root";

interface UserDataType {
  status: number;
  user: string;
  isAdmin: boolean;
}

const initialValue = {
  status: 0,
  user: "",
  isAdmin: false,
};

const LogIn = () => {
  const { register, handleSubmit, reset } = useForm();
  const [userData, setUserData] = useState<UserDataType>(initialValue);
  const navigate = useNavigate();

  console.log(userData);
  const onSubmit = handleSubmit((data) => {
    axios({
      method: "POST",
      url: baseURL + "/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((res) => setUserData(res.data))
      .catch((err) => setUserData(err.response.data));
    reset({
      email: "",
      password: "",
    });
  });

  function getUserDetails() {
    if (userData.isAdmin) {
      navigate("/admin-panel");
    } else if (userData.status === 200) {
      navigate("/profile");
    }
  }

  useEffect(() => {
    getUserDetails();
  }, [userData]);

  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <FormControl
          sx={{
            width: { xs: 300, sm: 350, md: 400, lg: 450 },
            height: 400,
            padding: "60px 20px",
            backgroundColor: "rgba(193, 193, 193, 1)",
            display: "flex",
            alignItems: "center",
            gap: 2,
            borderRadius: 2,
          }}
        >
          <h1>შესვლა</h1>

          <TextField
            sx={{ width: { xs: 200, sm: 250, md: 300, lg: 400 } }}
            label="ელ.ფოსტა"
            type="email"
            {...register("email", { required: true })}
          />
          <TextField
            sx={{ width: { xs: 200, sm: 250, md: 300, lg: 400 } }}
            label="პაროლი"
            type="password"
            {...register("password", { required: true })}
          />
          {userData.status >= 400 ? (
            <WrongPass status={userData?.status}>{userData.user}</WrongPass>
          ) : null}
          <Button
            sx={{ width: { xs: 200, sm: 250, md: 300, lg: 400 } }}
            variant="contained"
            type="submit"
          >
            შესვლა
          </Button>
          <Link style={{ color: "#3789e7" }} to="/join-us">
            ახალი ანგარიშის შექმნა
          </Link>
        </FormControl>
      </form>
    </FormWrapper>
  );
};

export default LogIn;

const FormWrapper = styled.div(
  () => css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
  `
);
const WrongPass = styled.span(
  ({ status }: { status: number }) => css`
    font-size: 14px;
    font-weight: 600;
    color: ${status >= 400 ? "red" : ""};
  `
);

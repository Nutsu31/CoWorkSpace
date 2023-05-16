import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const LogIn = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset({
      name: "",
      lastname: "",
      email: "",
      password: "",
      re_password: "",
    });
  });

  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <FormControl
          sx={{
            width: { xs: 300, sm: 350, md: 400, lg: 450 },
            height: 400,
            padding: "60px 20px",
            backgroundColor: "#ffffffab",
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
            {...register("email")}
          />
          <TextField
            sx={{ width: { xs: 200, sm: 250, md: 300, lg: 400 } }}
            label="პაროლი"
            type="password"
            {...register("password")}
          />
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

import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
const JoisUs = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset({
      email: "",
      password: "",
    });
  });

  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <FormControl
          sx={{
            width: { xs: 300, sm: 350, md: 450, lg: 500 },
            height: 600,
            padding: "60px 20px",
            backgroundColor: "#ffffffab",
            display: "flex",
            alignItems: "center",
            gap: 2,
            borderRadius: 2,
          }}
        >
          <h1>რეგისტრაცია</h1>
          <TextField
            sx={{ width: { xs: 200, sm: 250, md: 300, lg: 400 } }}
            label="სახელი"
            type="text"
            {...register("name")}
          />
          <TextField
            sx={{ width: { xs: 200, sm: 250, md: 300, lg: 400 } }}
            label="გვარი"
            type="text"
            {...register("lastname")}
          />
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
          <TextField
            sx={{ width: { xs: 200, sm: 250, md: 300, lg: 400 } }}
            label="გაიმეორე პაროლი"
            type="password"
            {...register("re-password")}
          />
          <Button
            sx={{ width: { xs: 200, sm: 250, md: 300, lg: 400 } }}
            variant="contained"
            type="submit"
          >
            რეგისტრაცია
          </Button>
          <Link style={{ color: "#3789e7" }} to="/log-in">
            შესვლა
          </Link>
        </FormControl>
      </form>
    </FormWrapper>
  );
};

export default JoisUs;

const FormWrapper = styled.div(
  () => css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
  `
);

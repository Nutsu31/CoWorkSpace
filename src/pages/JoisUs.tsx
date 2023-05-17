import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { baseURL } from "./Root";

interface Register {
  status: number;
  user: string;
}
const JoisUs = () => {
  const { register, handleSubmit, reset } = useForm();
  const [registerInfo, setRegisterInfo] = useState<Register>();
  const onSubmit = handleSubmit((data) => {
    if (data.password !== data.re_password) {
      return setRegisterInfo({
        status: 400,
        user: "განმეორებით პაროლი არ ემთხვევა",
      });
    } else {
      axios({
        method: "POST",
        url: baseURL + "join-us",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: data.name,
          lastname: data.lastname,
          email: data.email,
          password: data.password,
          re_password: data.re_password,
          developer: data.developer,
          isAdmin: false,
        },
      })
        .then((res) => setRegisterInfo(res.data))
        .catch((err) => setRegisterInfo(err.response.data));
      reset({
        name: "",
        lastname: "",
        email: "",
        password: "",
        re_password: "",
        developer: null,
      });
    }
  });

  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <FormControl
          fullWidth
          sx={{
            width: { xs: 300, sm: 350, md: 450, lg: 500 },
            minHeight: 500,
            padding: "40px 20px",
            backgroundColor: "rgba(193, 193, 193, 1)",
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
            {...register("name", { required: true })}
          />
          <TextField
            sx={{ width: { xs: 200, sm: 250, md: 300, lg: 400 } }}
            label="გვარი"
            type="text"
            {...register("lastname", { required: true })}
          />
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
          <TextField
            sx={{ width: { xs: 200, sm: 250, md: 300, lg: 400 } }}
            label="გაიმეორე პაროლი"
            type="password"
            {...register("re_password", { required: true })}
          />

          <FormControl sx={{ display: "flex", alignItems: "center" }}>
            <InputLabel id="select-label">დეველოპერის პოზიცია</InputLabel>
            <Select
              sx={{ width: { xs: 200, sm: 250, md: 300, lg: 400 } }}
              labelId="select-label"
              label="დეველოპერის პოზიცია"
              {...register("developer")}
            >
              <MenuItem value="Front-end">Front-end Developer</MenuItem>
              <MenuItem value="Back-end">Back-end Developer</MenuItem>
              <MenuItem value="Full-stack">Full-stack Developer</MenuItem>
            </Select>
          </FormControl>
          {registerInfo ? (
            <SuccessText status={registerInfo.status}>
              {registerInfo.user}
            </SuccessText>
          ) : null}

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

const SuccessText = styled.span(
  ({ status }: { status: number }) => css`
    font-size: 14px;
    font-weight: 600;
    color: ${status >= 200 && status < 400 ? "green" : "red"};
  `
);

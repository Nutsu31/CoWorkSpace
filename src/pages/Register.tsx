import React from "react";
import { useForm } from "react-hook-form";
const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Email:</label>
        <input type="email" {...register("email-sing-up")} />

        <label>Password:</label>
        <input type="password" {...register("password-sing-up")} />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Register;

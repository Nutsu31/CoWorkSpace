import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
const Root = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;

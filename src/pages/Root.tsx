import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/section/Navbar";
const Root = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        backgroundColor: "#123B53",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;

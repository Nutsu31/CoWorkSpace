import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import BgImage from "../assets/headerbg.png";

const Root = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "0 150px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        backgroundColor: "#123B53",
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;

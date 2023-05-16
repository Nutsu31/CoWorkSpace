import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import BgImage from "../assets/headerbg.png";
import Shadow from "../components/section/Shadow";

const Root = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
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
      <Shadow />
    </div>
  );
};

export default Root;

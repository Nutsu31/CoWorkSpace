import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import BgImage from "../assets/Group91.png";
import Shadow from "../components/section/Shadow";

export const baseURL = "http://localhost:4000/";

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
    </div>
  );
};

export default Root;

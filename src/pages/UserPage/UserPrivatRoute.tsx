import React from "react";
import { Navigate, Outlet } from "react-router";

const UserPrivatRoute = () => {
  function getItemsFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("userLogIn")!);
    return data.logged;
  }

  return (
    <>{getItemsFromLocalStorage() ? <Outlet /> : <Navigate to="/log-in" />} </>
  );
};

export default UserPrivatRoute;

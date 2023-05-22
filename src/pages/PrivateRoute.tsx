import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  function getItemsFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("adminLogIn")!);
    return data?.logged;
  }

  return (
    <>{getItemsFromLocalStorage() ? <Outlet /> : <Navigate to="/log-in" />}</>
  );
};

export default PrivateRoute;

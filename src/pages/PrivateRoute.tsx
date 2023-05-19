import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [logedIn, setLogedIn] = useState(true);

  return <>{logedIn ? <Outlet /> : <Navigate to="/log-in" />}</>;
};

export default PrivateRoute;

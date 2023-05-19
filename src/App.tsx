import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import JoisUs from "./pages/JoisUs";
import LogIn from "./pages/LogIn";
import UserInterface from "./pages/UserInterface";
import AdminRoot from "./pages/AdminRoot";
import General from "./pages/AdminPages/General";
import Statistics from "./pages/AdminPages/Statistics";
import Users from "./pages/AdminPages/Users";
import HomePage from "pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-us" element={<JoisUs />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/profile" element={<UserInterface />} />
      </Route>

      <Route path="/admin-panel" element={<AdminRoot />}>
        <Route index element={<General />} />
        <Route path="/admin-panel/general" element={<General />} />
        <Route path="/admin-panel/statistics" element={<Statistics />} />
        <Route path="/admin-panel/users" element={<Users />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

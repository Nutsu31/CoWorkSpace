import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import JoisUs from "./pages/JoisUs";
import LogIn from "./pages/LogIn";
import UserInterface from "./pages/UserInterface";
import Admin from "./pages/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-us" element={<JoisUs />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/admin-panel" element={<Admin />} />
        <Route path="/profile" element={<UserInterface />} />
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

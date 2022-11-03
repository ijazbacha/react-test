import Cookies from "js-cookie";
import React from "react";
import {  Route, Routes } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotRequiredAuth from "./NotRequiredAuth";
import RequiredAuth from "./RequiredAuth";

function MainRoutes() {
  const userCookie = Cookies.get("login");

  return (
    <>
      {userCookie && (
        <NavBar />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />

        <Route
          path="/login"
          element={
            <NotRequiredAuth>
              <Login />
            </NotRequiredAuth>
          }
        />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default MainRoutes;

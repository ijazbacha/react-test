import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotRequiredAuth from "./NotRequiredAuth";
import RequiredAuth from "./RequiredAuth";

function MainRoutes() {
    let navigate = useNavigate();
  const userCookie = Cookies.get("login");

  const logoutHandler = () => {
    Cookies.remove("login");
    navigate('/login')
  };
  return (
    <>
    {
userCookie && 
<nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li onClick={logoutHandler}>
            <Link>Logout</Link>
          </li>
        </ul>
      </nav>
    }
      
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />

        <Route path="/login" element={<NotRequiredAuth><Login /></NotRequiredAuth> } />
      </Routes>
    </>
  );
}

export default MainRoutes;

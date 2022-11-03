import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

function NotRequiredAuth({ children }) {
  const getCookie = Cookies.get("login");

  if (getCookie) {
    return <Navigate to={"/"} />;
  }
  return children;
}

export default NotRequiredAuth;

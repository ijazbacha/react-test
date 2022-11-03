import Cookies from "js-cookie";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    let navigate = useNavigate();

  const logoutHandler = () => {
    Cookies.remove("login");
    navigate("/login");
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"} className='link' >Home</Link>
        </li>
        <li onClick={logoutHandler}>
          <Link className='link'>Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

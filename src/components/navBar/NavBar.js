import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  let navigate = useNavigate();
  const userCookie = Cookies.get("login");
  const [showNav, setShowNav] = useState(false)

  useEffect(() =>{
    if(userCookie){
      setShowNav(true)
    }
    return () => setShowNav(false)
  },[userCookie])

  const logoutHandler = () => {
    Cookies.remove("login");
    navigate("/login");
  };


  if(showNav){
    return (
    <nav>
      <ul>
        <li>
          <Link to={"/"} className="link">
            Home
          </Link>
        </li>
        <li onClick={logoutHandler}>
          <Link className="link">Logout</Link>
        </li>
      </ul>
    </nav>
  );
  }
  else{
    return 
  }

  
}

export default NavBar;

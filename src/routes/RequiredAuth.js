import Cookies from 'js-cookie';
import React from 'react'
import { Navigate } from 'react-router-dom';

function RequiredAuth({children}) {
    const getCookie = Cookies.get("login");

    if (!getCookie){
        return <Navigate to={'/login'} />
    } 
  return children
}

export default RequiredAuth
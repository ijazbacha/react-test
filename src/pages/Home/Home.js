import React from 'react'
import { useSelector } from 'react-redux'
import Cookies from "js-cookie";

function Home() {
  const getCookie = Cookies.get('login')
  console.log("getCookie###: ", getCookie);
  return (
    <div>Home</div>
  )
}

export default Home
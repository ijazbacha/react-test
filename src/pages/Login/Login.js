import React from 'react'
import Button from '../../components/customButton/Button'
import './Login.css'

function Login() {
  const loginHandler = () =>{
    alert(" login button clicked")
  }
  return (
    <div className='container'>
      <div className='loginContainer'>
        <h1 className='loginText'>Login to Your Account</h1>
        <Button onClick={loginHandler}>Login</Button>
      </div>
    </div>
  )
}

export default Login
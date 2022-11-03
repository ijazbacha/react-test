import React from "react";
import { useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import Button from "../../components/customButton/Button";
import "./Login.css";
import Cookies from "js-cookie";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Password Must be an eight characters!";
  }
  return errors;
};

function Login(props) {
  let { handleSubmit } = props;
  let navigate = useNavigate();

  const loginHandler = (values) => {
    if(values.email == 'ijaz@gmail.com' && values.password == '12345678'){
      Cookies.remove("login");
    Cookies.set("login", values, {
      expires: 7,
      secure: true,
      path: "/",
      sameSite: "Strict",
    });
    navigate("/");
    }else{
      alert('Login Failed: Please check your email and password!')
    }
    
  };

  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="inputContainer">
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="input" />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="loginContainer">
        <h1 className="loginText">Login to Your Account</h1>

        <form onSubmit={handleSubmit((values) => loginHandler(values))}>
          <Field
            name="email"
            component={renderField}
            type="email"
            label="Email"
          />

          <Field
            name="password"
            component={renderField}
            type="password"
            label="Password"
          />

          <Button
            // onClick={loginHandler}
            buttonStyle="btn--primary--solid"
            buttonSize="btn--large"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default reduxForm({
  form: "LoginFrom",
  validate,
})(Login);

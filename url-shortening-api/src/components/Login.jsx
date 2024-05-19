import React from "react";
import "../css/login.css";

function Login() {
  return (
    <div className="login-btn">
      <button id="loginBtn" type="button">
        Login
      </button>
      <button id="signUpBtn" type="button">
        Sign Up
      </button>
    </div>
  );
}

export default Login;

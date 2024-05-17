import React, { useEffect, useState } from "react";
import "./App.css";
import Logo from "./assets/logo.svg";
import Illustration from "./assets/illustration-dashboard.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { PiCopyrightThin } from "react-icons/pi";

function App() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(null);

  const validateEmail = (mail) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(mail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    const isValid = validateEmail(email);
    setIsValidEmail(isValid);
  };

  useEffect(() => {
    handleSubmit;
  }, [handleSubmit]);

  return (
    <div className="container">
      <img id="logo" src={Logo} alt="logo" />
      <p id="title">
        We are launching <span>soon!</span>
      </p>
      <p id="subText">Subscribe and get notified</p>
      <form className="email" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your email adress.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={
            isValidEmail === true
              ? { border: "1px solid green", color: "green" }
              : isValidEmail === false
              ? { border: "1px solid red", color: "red" }
              : {}
          }
        />
        <button type="submit">Notify Me</button>
      </form>
      {isValidEmail === true && (
        <p className="hide-text" style={{ color: "green" }}>
          Successful
        </p>
      )}
      {isValidEmail === false && (
        <p className="hide-text" style={{ color: "red" }}>
          Please enter a valid email
        </p>
      )}
      <img id="mainImg" src={Illustration} />
      <div className="social-media">
        <FaFacebookF className="icon" />
        <FaTwitter className="icon" />
        <FaInstagram className="icon" />
      </div>
      <p id="footerText">
        <PiCopyrightThin /> Copyright Ping. All rights reserved.
      </p>
    </div>
  );
}

export default App;

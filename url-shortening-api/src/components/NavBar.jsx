import React from "react";
import Logo from "../assets/logo.svg";
import "../css/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="" />
      <div className="nav">
        <ul id="navbarEl">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import avatarImage from "../assets/avatar-michelle.jpg";
import { FaShare } from "react-icons/fa";

function Footer({ setClicked, clicked }) {
  const handleShow = () => {
    setClicked(!clicked);
    console.log(clicked);
  };
  return (
    <div className="footer">
      <img src={avatarImage} alt="michelle profile photo" />
      <div className="name-date">
        <p id="name">Michelle Appleton</p>
        <p id="date">28 JUN 2020</p>
      </div>
      <button id="shareBtn" onClick={handleShow}>
        <FaShare />
      </button>
    </div>
  );
}

export default Footer;

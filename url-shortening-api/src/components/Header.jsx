import React, { useRef } from "react";
import "../css/header.css";
import WorkingImage from "../assets/illustration-working.svg";

function Header({ targetInputRef }) {
  const handleFocus = () => {
    targetInputRef.current.focus();
    // Sayfayı aşağı kaydırmak için scrollIntoView() yöntemi, behavior ise yumuşak bir iniş sağlamak için...
    targetInputRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <div className="header">
      <div className="context-text">
        <h1 id="headerText">More than just shorter links</h1>
        <p id="subText">
          Buil your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <button type="button" id="focusBtn" onClick={handleFocus}>
          Get Started
        </button>
      </div>
      <img src={WorkingImage} id="workingImg" />
    </div>
  );
}

export default Header;

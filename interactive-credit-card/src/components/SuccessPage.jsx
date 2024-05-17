import React from "react";
import SuccessIcon from "../assets/icon-complete.svg";
import "../App.css";

function SuccessPage() {
  return (
    <div id="successDiv">
      <img id="successIcon" src={SuccessIcon} alt="Complete icon" />
      <h2 id="successTitle">Thank You</h2>
      <p id="successSubText">We've added your card details</p>
    </div>
  );
}

export default SuccessPage;

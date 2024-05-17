import React from "react";
import CardBack from "../assets/bg-card-back.png";
import CardFront from "../assets/bg-card-front.png";
import CardLogo from "../assets/card-logo.svg";
import "../App.css";

function CreditCard({ name, number, month, year, cvv }) {
  return (
    <div id="interactiveCard">
      <div id="frontInfo">
        <img id="cardLogo" src={CardLogo} />
        <img id="cardFront" src={CardFront} />
        <p id="interactiveName">{name}</p>
        <p id="interactiveNumber">{number}</p>
        <p id="interactiveDate">
          {month}/{year}
        </p>
      </div>
      <div id="backInfo">
        <img id="cardBack" src={CardBack} />
        <p id="interactiveCVC">{cvv}</p>
      </div>
    </div>
  );
}

export default CreditCard;

import React, { useEffect, useState } from "react";
import "../App.css";
function CardForm({
  setName,
  setMonth,
  setYear,
  setCvv,
  setNumber,
  setState,
  name,
  month,
  year,
  cvv,
  number,
}) {
  const [dateMessage, setDateMessage] = useState("");
  const [cvvMessage, setCvvMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [numberMessage, setNumberMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [cvvError, setCvvError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    checkSuccess();
  };
  const checkSuccess = () => {
    if (
      !dateMessage &&
      !cvvMessage &&
      !nameMessage &&
      !numberMessage &&
      name &&
      month &&
      year &&
      cvv &&
      number
    ) {
      setState(true);
    }
  };

  const getName = (e) => {
    setName(e.target.value);
    if (e.target.value === "") {
      setNameMessage("Can't blank");
      setNameError(true);
    } else {
      setNameMessage("");
      setNameError(false);
    }
  };

  const getMonth = (value) => {
    if (value >= 1 && value <= 9) {
      setMonth("0" + value);
      setDateMessage("");
      setDateError(false);
    } else if (value >= 10 && value <= 12) {
      setMonth(value);
      setDateMessage("");
      setDateError(false);
    } else if (value === "") {
      setMonth("");
      setDateMessage("Can't be blank");
      setDateError(true);
    } else {
      setMonth("");
      setDateMessage("Invalid value");
      setDateError(true);
    }
  };

  const getYear = (value) => {
    if (value >= 24 && value <= 99) {
      setYear(value);
      setDateMessage("");
      setDateError(false);
    } else if (value === "") {
      setYear("");
      setDateMessage("Can't be blank");
      setDateError(true);
    } else {
      setYear("");
      setDateMessage("Invalid Value");
      setDateError(true);
    }
  };

  const getCvv = (value) => {
    if (value.length === 3) {
      setCvv(value);
      setCvvMessage("");
      setCvvError(false);
    } else if (value === "") {
      setCvv("");
      setCvvMessage("Can't be blank");
      setCvvError(true);
    } else {
      setCvv("");
      setCvvMessage("Invalid value");
      setCvvError(true);
    }
  };

  const handleCardNumber = (value) => {
    setNumber(value.replace(/(.{4})/g, "$1 "));
    if (value.length == 16) {
      if (testCreditCardNumber(value)) {
        setNumber(value.replace(/(.{4})/g, "$1 "));
        setNumberError(false);
        setNumberMessage("");
      } else {
        setNumberError(true);
        setNumberMessage("Invalid card number");
      }
    }
  };

  function testCreditCardNumber(input) {
    const regex = /^(?:\d{4} ?){4}$/;
    return regex.test(input);
  }

  return (
    <div>
      <form>
        <div>
          <div id="cardholderDiv">
            <p>Cardholder Name</p>
            <input
              type="text"
              id="cardHolder"
              className={`name-number ${nameError ? "error-border" : ""}`}
              placeholder="e.g. Jane Appleseed"
              onChange={(e) => getName(e)}
            />
            {nameMessage && (
              <div style={{ color: "hsl(0, 100%, 66%)", fontSize: "13px" }}>
                {nameMessage}
              </div>
            )}
          </div>
          <div id="cardNumberDiv">
            <p>Card Number</p>
            <input
              type="text"
              id="cardNumber"
              className={`name-number ${numberError ? "error-border" : ""}`}
              placeholder="e.g. 1234 5678 9123 0000"
              maxLength={16}
              onChange={(e) => handleCardNumber(e.target.value)}
            />
            {numberMessage && (
              <div style={{ color: "hsl(0, 100%, 66%)", fontSize: "13px" }}>
                {numberMessage}
              </div>
            )}
          </div>
        </div>
        <div id="underForm">
          <div>
            <p>Exp. Date (MM/YY)</p>
            <div>
              <div></div>
              <input
                className={`date-input ${dateError ? "error-border" : ""}`}
                type="text"
                placeholder="MM"
                maxLength={2}
                onChange={(e) => getMonth(Number(e.target.value))}
              />
              <input
                className={`date-input ${dateError ? "error-border" : ""}`}
                type="text"
                placeholder="YY"
                maxLength={2}
                onChange={(e) => getYear(Number(e.target.value))}
                style={{ marginLeft: "10px" }}
              />
            </div>
            {dateMessage && (
              <p
                style={{
                  color: " hsl(0, 100%, 66%)",
                  textTransform: "none",
                  fontSize: "13px",
                }}
              >
                {dateMessage}
              </p>
            )}
          </div>
          <div id="cvcNumberDiv">
            <p>CVC</p>
            <input
              className={cvvError ? "error-border" : ""}
              id="cvcNumber"
              type="text"
              placeholder="e.g 123"
              maxLength={3}
              onChange={(e) => getCvv(e.target.value)}
            />
          </div>
          {cvvMessage && (
            <div
              style={{
                color: "hsl(0, 100%, 66%)",
                position: "relative",
                top: "71px",
                right: "125px",
                fontSize: "13px",
              }}
            >
              {cvvMessage}
            </div>
          )}
        </div>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Confirm
        </button>
      </form>
    </div>
  );
}
export default CardForm;

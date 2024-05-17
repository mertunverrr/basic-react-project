import React from "react";
import "../css/display.css";

function Display({ totalBill, tip, reset, setReset }) {
  const handleReset = (e) => {
    e.preventDefault();
    setReset(false);
  };
  return (
    <div>
      {reset ? (
        <div className="display-container">
          <div className="calc-display">
            <p className="display-text">
              Tip Amount <span className="person">/ person</span>
            </p>
            <p className="calc">${tip}</p>
          </div>
          <div className="calc-display">
            <p className="display-text">
              Total <span className="person">/ person</span>
            </p>
            <p className="calc">${totalBill}</p>
          </div>
          <button id="resetBtn" type="reset" onClick={(e) => handleReset(e)}>
            RESET
          </button>
        </div>
      ) : (
        <div className="display-container">
          <div className="calc-display">
            <p className="display-text">
              Tip Amount <span className="person">/ person</span>
            </p>
            <p className="calc">$0</p>
          </div>
          <div className="calc-display">
            <p className="display-text">
              Total <span className="person">/ person</span>
            </p>
            <p className="calc">$0</p>
          </div>
          <button id="resetBtn" type="reset" onClick={(e) => handleReset(e)}>
            RESET
          </button>
        </div>
      )}
    </div>
  );
}

export default Display;

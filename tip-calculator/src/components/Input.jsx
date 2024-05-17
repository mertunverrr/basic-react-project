import React, { useEffect, useState } from "react";
import { BsCurrencyDollar, BsFillPeopleFill } from "react-icons/bs";
import "../css/input.css";

function Input({ setTotalBill, setTip, setReset }) {
  const [people, setPeople] = useState(1);
  const [bill, setBill] = useState(0);
  const [percent, setPercent] = useState(0);

  const getBill = (e) => {
    const value = Number(e.target.value);
    setBill(value);
    setReset(true);
  };
  const getNumOfPeople = (e) => {
    const value = Number(e.target.value);
    setPeople(value);
    setReset(true);
  };
  const getPercent = (e) => {
    const value = Number(e.target.value);
    setPercent(value);
    setReset(true);
  };
  const handleCalculate = (qbill, qpercent, qpeople) => {
    const total = Number((qbill + (qbill / 100) * qpercent) / qpeople).toFixed(
      2
    );
    const onlyTip = Number((qbill / 100) * qpercent).toFixed(2);
    setTotalBill(total);
    setTip(onlyTip);
  };

  useEffect(() => {
    handleCalculate(bill, percent, people);
  }, [getPercent]);

  return (
    <div className="input-container">
      <div className="bill-wrapper">
        <p id="inputTitle">Bill</p>
        <div className="bill-input">
          <input
            className="inputs"
            type="text"
            placeholder="0"
            onChange={(e) => getBill(e)}
          />
          <BsCurrencyDollar className="icon" />
        </div>
      </div>
      <div className="select-percent">
        <p id="inputTitle">Select Tip %</p>
        <div className="btn-wrapper">
          <div className="btn-grid" onClick={(e) => getPercent(e)}>
            <button value={5} class="percent-btn" type="button">
              5%
            </button>
            <button value={10} className="percent-btn" type="button">
              10%
            </button>
            <button value={15} className="percent-btn" type="button">
              15%
            </button>
            <button value={25} className="percent-btn" type="button">
              25%
            </button>
            <button value={50} className="percent-btn" type="button">
              50%
            </button>
            <input
              id="percentInput"
              placeholder="Custom"
              type="text"
              onChange={(e) => getPercent(e)}
            />
          </div>
        </div>
      </div>
      <div className="people-number">
        <p id="inputTitle">Number of People</p>
        <div className="number-input"></div>
        <input
          className="inputs"
          type="text"
          placeholder="0"
          onChange={(e) => getNumOfPeople(e)}
        />
        <BsFillPeopleFill className="icon" />
      </div>
    </div>
  );
}

export default Input;

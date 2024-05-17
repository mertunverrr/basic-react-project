import React from "react";
import "../css/timersquare.css";

function TimerSquare({ time, timeText }) {
  return (
    <div className="square-calender">
      <div className="square-calender-top">
        <span>{time}</span>
      </div>
      <p>{timeText}</p>
    </div>
  );
}

export default TimerSquare;

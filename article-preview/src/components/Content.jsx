import React from "react";
import drawersImage from "../assets/drawers.jpg";

function Content() {
  return (
    <div className="content">
      <img src={drawersImage} alt="image" />
      <p id="title">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </p>
      <p id="subText">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
    </div>
  );
}

export default Content;

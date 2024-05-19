import React from "react";
import BrandRecognition from "../assets/icon-brand-recognition.svg";
import DetailedRecords from "../assets/icon-detailed-records.svg";
import FullyCustomizable from "../assets/icon-fully-customizable.svg";
import "../css/advancedstatistics.css";

function AdvancedStatistics() {
  return (
    <div className="advanced-container">
      <div className="advanced-top">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="advanced-bottom">
        <div className="advancedElement first-item">
          <img className="advancedImg" src={BrandRecognition} alt="" />
          <h3 className="advancedTitle">Brand Recognition</h3>
          <p className="advancedText">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="advancedElement second-item">
          <img className="advancedImg" src={DetailedRecords} alt="" />
          <h3 className="advancedTitle">Detailed Records</h3>
          <p className="advancedText">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="advancedElement third-item">
          <img className="advancedImg" src={FullyCustomizable} alt="" />
          <h3 className="advancedTitle">Fully Customizable</h3>
          <p className="advancedText">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement
          </p>
        </div>
      </div>
      <hr id="blueLine" />
    </div>
  );
}

export default AdvancedStatistics;

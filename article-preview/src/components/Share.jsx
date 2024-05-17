import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaShare,
} from "react-icons/fa";

function Share({ clicked, setClicked }) {
  const handleShare = () => {
    setClicked(false);
  };
  return (
    <div>
      {clicked ? (
        <div className="share-card">
          <div className="icon-area">
            <span>SHARE</span>
            <FaFacebookSquare style={{ marginLeft: "0.8em" }} />
            <FaTwitter style={{ marginLeft: "0.4em" }} />
            <FaPinterest style={{ marginLeft: "0.4em" }} />
          </div>

          <button onClick={handleShare}>
            <FaShare />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Share;

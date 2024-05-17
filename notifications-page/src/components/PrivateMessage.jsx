import React from "react";

function PrivateMessage({ privMessage }) {
  return (
    <div className="priv-border">
      <p className="priv-mess-area">{privMessage}</p>
    </div>
  );
}

export default PrivateMessage;

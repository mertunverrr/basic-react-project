import React, { useState } from "react";

function Notification({
  club,
  read,
  agoTime,
  name,
  events,
  photoName,
  eventMessage,
}) {
  const [handleRead, setHandleRead] = useState(true);

  const handleSetRead = (e) => {
    e.preventDefault();
    setHandleRead(false);
  };
  return (
    <div>
      {read && handleRead && (
        <div
          className="notification-message"
          style={{ backgroundColor: "hsl(205, 33%, 90%)", cursor: "pointer" }}
          onClick={(e) => handleSetRead(e)}
        >
          <div className="photoDiv">
            <img
              className="profile-photo"
              src={photoName}
              alt="profile photo"
            />
          </div>
          <div className="eventDiv">
            <p className="name-event">
              <span className="bold name">{name}</span> {eventMessage}{" "}
              {club ? (
                <a>{events}</a>
              ) : (
                <span className="bold events">{events}</span>
              )}
            </p>
            <p className="agoTime">{agoTime}</p>
          </div>
        </div>
      )}
      {read && !handleRead && (
        <div className="notification-message">
          <div className="photoDiv">
            <img
              className="profile-photo"
              src={photoName}
              alt="profile photo"
            />
          </div>
          <div className="eventDiv">
            <p className="name-event">
              <span className="bold name">{name}</span> {eventMessage}{" "}
              {club ? (
                <a>{events}</a>
              ) : (
                <span className="bold events">{events}</span>
              )}
            </p>
            <p className="agoTime">{agoTime}</p>
          </div>
        </div>
      )}
      {!read && (
        <div className="notification-message">
          <div className="photoDiv">
            <img
              className="profile-photo"
              src={photoName}
              alt="profile photo"
            />
          </div>
          <div className="eventDiv">
            <p className="name-event">
              <span className="bold name">{name}</span> {eventMessage}{" "}
              {club ? (
                <a>{events}</a>
              ) : (
                <span className="bold events">{events}</span>
              )}
            </p>
            <p className="agoTime">{agoTime}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;

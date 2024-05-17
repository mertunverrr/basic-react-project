import { useEffect, useState } from "react";
import "./App.css";
import Notification from "./components/Notification";
import PrivateMessage from "./components/PrivateMessage";
import MarkWeberPhoto from "./assets/avatar-mark-webber.webp";
import AnnaKimPhoto from "./assets/avatar-anna-kim.webp";
import JacobThompsonPhoto from "./assets/avatar-jacob-thompson.webp";
import KimberlySmithPhoto from "./assets/avatar-kimberly-smith.webp";
import NathanPetersonPhoto from "./assets/avatar-nathan-peterson.webp";
import RizkyHasanuddinPhoto from "./assets/avatar-rizky-hasanuddin.webp";
import AngelaGrayPhoto from "./assets/avatar-angela-gray.webp";
import ChessClubPhoto from "./assets/image-chess.webp";

function App() {
  const club = true;
  const [read, setRead] = useState(true);
  const handleRead = (e) => {
    e.preventDefault();
    setRead(false);
  };
  return (
    <div className="container">
      <div className="card">
        <div id="header">
          <h3>
            Notifications <span id="notificationsNum"> 3 </span>
          </h3>
          <p onClick={(e) => handleRead(e)}>Mark all as read</p>
        </div>
        <div className="notification-area">
          <div className="notification"></div>
          <Notification
            photoName={MarkWeberPhoto}
            name="Mark Webber"
            eventMessage="reacted to your recent post"
            events="My first tournament today!"
            agoTime={"1m ago"}
            read={read}
          />
          <div className="notification">
            <Notification
              photoName={AngelaGrayPhoto}
              name="Angela Gray"
              eventMessage="followed you"
              events=""
              agoTime={"5m ago"}
              read={read}
            />
          </div>
          <div className="notification club">
            <Notification
              photoName={JacobThompsonPhoto}
              name="Jacob Thompson"
              eventMessage="has joined your group"
              events="Chess Club"
              agoTime={"1 day ago"}
              club={club}
              read={read}
            />
          </div>
          <div className="notification privMess">
            <Notification
              photoName={RizkyHasanuddinPhoto}
              name="Rizky Hasanuddin"
              eventMessage="sent you a private message"
              events=""
              agoTime={"5 day ago"}
            />
            <PrivateMessage privMessage="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game." />
          </div>

          <div className="notification">
            <Notification
              photoName={KimberlySmithPhoto}
              name="Kimberly Smith"
              eventMessage="commented on your picture"
              events=""
              agoTime={"1 week ago"}
            />
            <img className="notifPhoto" src={ChessClubPhoto} />
          </div>

          <div className="notification">
            <Notification
              photoName={NathanPetersonPhoto}
              name="Nathan Peterson"
              eventMessage="reacted to your recent post"
              events="5 end-game strategies to increase your win rate"
              agoTime={"2 weeks ago"}
            />
          </div>
          <div className="notification club">
            <Notification
              photoName={AnnaKimPhoto}
              name="Anna Kim"
              eventMessage="left the group"
              events="Chess Club"
              agoTime="2 weeks ago"
              club={club}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

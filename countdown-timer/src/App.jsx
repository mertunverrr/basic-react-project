import { useEffect, useState } from "react";
import "./App.css";
import TimerSquare from "./components/TimerSquare";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

function App() {
  const currentDate = new Date().getTime();
  const targetDate = new Date(
    currentDate + 10 * 24 * 60 * 60 * 1000 + 1000
  ).getTime();
  const [time, setTime] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });
  const timer = () => {
    const currentTime = new Date().getTime();
    const dif = targetDate - currentTime;
    if (dif > 0) {
      const days = Math.floor(dif / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((dif % (1000 * 60)) / 1000);
      setTime({
        day: days,
        hour: hours,
        minute: minutes,
        second: seconds,
      });
    }
  };
  useEffect(() => {
    // İlk olarak zamanlayıcıyı başlatmak için timer fonksiyonunu çağırın
    timer();

    // Her saniyede bir timer fonksiyonunu çağırmak için interval oluşturun
    const interval = setInterval(timer, 1000);

    // Komponent kaldırıldığında interval'i temizleyin
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-color">
      <div className="bg-pattern">
        <div className="bg-stairs">
          <div className="timer-container">
            <TimerSquare timeText={"days"} time={time.day} />
            <TimerSquare timeText={"hours"} time={time.hour} />
            <TimerSquare timeText={"minutes"} time={time.minute} />
            <TimerSquare timeText={"seconds"} time={time.second} />
          </div>
        </div>
        <div className="icons">
          <FaFacebookSquare className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
        </div>
      </div>
    </div>
  );
}

export default App;

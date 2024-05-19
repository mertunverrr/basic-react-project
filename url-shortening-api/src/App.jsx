import { useRef, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Header from "./components/Header";
import ShortenInput from "./components/ShortenInput";
import AdvancedStatistics from "./components/AdvancedStatistics";
import Footer from "./components/Footer";

function App() {
  const inputRef = useRef(null);
  return (
    <div>
      <div className="padding">
        <div className="top-section">
          <NavBar />
          <Login />
        </div>
        <div>
          <Header targetInputRef={inputRef} />
        </div>
        <div>
          <ShortenInput inputRef={inputRef} />
        </div>
        <div>
          <AdvancedStatistics />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

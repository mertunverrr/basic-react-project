import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Share from "./components/Share";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="card">
      <Content />
      <Footer setClicked={setClicked} clicked={clicked} />
      <Share clicked={clicked} setClicked={setClicked} />
    </div>
  );
}

export default App;

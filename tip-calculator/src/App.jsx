import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Display from "./components/Display";
import LogoPic from "./assets/logo.svg";

function App() {
  const [totalBill, setTotalBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [reset, setReset] = useState(true);

  return (
    <div className="container">
      <Input setTotalBill={setTotalBill} setTip={setTip} setReset={setReset} />
      <Display
        totalBill={totalBill}
        tip={tip}
        reset={reset}
        setReset={setReset}
      />
    </div>
  );
}

export default App;

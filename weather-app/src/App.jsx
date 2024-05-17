import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Info from "./components/Info";

function App() {
  const [info, setInfo] = useState([]);
  const [state, setState] = useState(false);
  const [api, setApi] = useState();
  return (
    <div className="container">
      <h1 id="title">HAVA DURUMU</h1>
      <div className="card">
        <Form setInfo={setInfo} setState={setState} setApi={setApi} />
        <Info info={info} state={state} api={api} />
      </div>
    </div>
  );
}

export default App;

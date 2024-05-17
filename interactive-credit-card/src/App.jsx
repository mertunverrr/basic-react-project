import { useState } from "react";
import "./App.css";
import "./css/form.css";
import "./css/success-page.css";
import "./css/credit-card.css";
import CardForm from "./components/CardForm";
import CreditCard from "./components/CreditCard";
import SuccessPage from "./components/SuccessPage";

function App() {
  const [name, setName] = useState();
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [state, setState] = useState(false);

  return (
    <div className="container">
      <div className="bg-color">
        <CreditCard
          name={name}
          number={number}
          month={month}
          year={year}
          cvv={cvv}
        />
      </div>
      <div className="card-form">
        {!state ? (
          <CardForm
            setName={setName}
            setNumber={setNumber}
            setMonth={setMonth}
            setYear={setYear}
            setCvv={setCvv}
            setState={setState}
            name={name}
            number={number}
            month={month}
            year={year}
            cvv={cvv}
          />
        ) : (
          <SuccessPage />
        )}
      </div>
    </div>
  );
}

export default App;

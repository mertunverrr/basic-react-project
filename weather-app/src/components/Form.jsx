import React, { useState } from "react";
import axios from "axios";

function Form({ setInfo, setState, setApi }) {
  const [city, setCity] = useState("");

  const handleSubmit = async () => {
    const api = "40665c4560daabdd1c0936d75865ae86";
    const BaseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
    await axios
      .get(BaseURL)
      .then((data) => {
        setInfo(data.data);
        setApi(true);
      })
      .catch(() => setApi(false));
    setState(true);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="submitForm"
      >
        <input
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          placeholder="Please enter a city name"
        />
        <button type="submit" id="submitBtn">
          Get weather data!
        </button>
      </form>
      <hr style={{ border: "1px lightgrey solid", marginTop: "2rem" }} />
    </div>
  );
}

export default Form;

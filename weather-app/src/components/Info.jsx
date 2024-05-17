import React from "react";

function Info({ info, state, api }) {
  return (
    <div>
      {api ? (
        state ? (
          <div className="info">
            <p id="cityName"> </p>
            {info.name} , {info.sys.country}
            <p id="degree">{Math.round(info.main.temp)}°</p>
            <p id="description">{info.weather[0].description}</p>
          </div>
        ) : null
      ) : (
        <div className="info">Yanlış şehir ismi girildi.</div>
      )}
    </div>
  );
}

export default Info;

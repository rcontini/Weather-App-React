import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function WeatherTemperature(props) {
  //const [unit, setUnit] = useState("celsius");
  // function showFahrenheit(event) {
  //   event.preventDefault();
  //    setUnit("fahrenheit");
  //  }
  //  function showCelsius(event) {
  // event.preventDefault();
  //   setUnit("celsius");
  // }

  // if (unit === "celsius") {
  //   return (
  //   <span>
  //   <span className="temp" id="currentTemp">
  //   {Math.round(props.celsius)}
  //  </span>
  //<span className="units">
  //<a href="/" id="unitLink">
  //°C |{" "}
  //  </a>
  // <a href="/" id="unitLink" onClick={showFahrenheit}>
  // °F
  //  </a>
  // </span> </span>
  //   );
  //} else {
  let fahrenheit = (props.celsius * 9) / 5 + 32;
  return (
    <span>
      <span className="temp" id="currentTemp">
        {Math.round(fahrenheit)}
      </span>
      <span className="units">
        <a href="/" id="unitLink">
          °F
        </a>
      </span>
    </span>
  );
}

import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "4de5d6165fffbb5d356ef70ff72b3431";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="card five-day-forecast">
      <div className="card-body" id="forecast">
        <div className="row">
          <div className="col">
            <span>Thu</span>
            <span>
              {" "}
              <WeatherIcon code="01d" size={32} />
            </span>
            <span className="WeatherForecastTemp-max">19</span>
            <span className="WeatherForecastTemp-min">11</span>
          </div>
        </div>
      </div>
    </div>
  );
}

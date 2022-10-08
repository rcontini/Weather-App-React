import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherForecast.css";
import "./Weather.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="card currentAndForecastTemp" id="five-day-forecast">
        <div className="card-body" id="forecast">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col-12" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "4de5d6165fffbb5d356ef70ff72b3431";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast() {
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

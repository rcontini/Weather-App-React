import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 id="locationHeader">
        <em>{props.data.city}</em>
      </h2>

      <div className="row" id="current-temp">
        <div className="col">
          <h2 id="date">
            <FormattedDate date={props.data.date} />
          </h2>
          <em>Current Temperature:</em>
          <br />
          <span>
            <WeatherIcon code={props.data.icon} className="icon" size={60} />
          </span>
          <WeatherTemperature celsius={props.data.temperature} />
          <br />

          <ul>
            <li id="description">{props.data.description}</li>
            <li>
              Humidity:
              <span id="humidity"> {props.data.humidity}</span>%
            </li>
            <li>
              Windspeed:
              <span id="windspeed"> {Math.round(props.data.windspeed)}</span>
              km/h
            </li>
          </ul>
        </div>
        <div className="col">
          <WeatherForecast coordinates={props.data.coordinates} />
        </div>
      </div>
    </div>
  );
}

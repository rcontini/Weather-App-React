import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="container WeatherInfo">
      <h2 id="locationHeader">
        <em>{props.data.city}</em>
      </h2>

      <div className="row" id="current-temp">
        <div className="col-6">
          <h2 id="date">
            <FormattedDate date={props.data.date} />
          </h2>
          <em>Current Temperature:</em>
          <br />
          <span>
            <WeatherIcon
              code={props.data.icon}
              className="float-left"
              size={52}
            />
          </span>
          <WeatherTemperature celsius={props.data.temperature} />
          <br />
          <span id="temp-max">{Math.round(props.data.maxTemp)}</span>/
          <span id="temp-min">{Math.round(props.data.minTemp)}</span>
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
        <div className="col-6">
          <WeatherForecast coordinates={props.data.coordinates} />
        </div>
      </div>
    </div>
  );
}

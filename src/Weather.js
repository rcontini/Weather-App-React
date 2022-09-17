import React from "react";
import "./App.css";

export default function Weather() {
  let weatherAppData = {
    city: "Washington DC",
    date: "Tuesday 26th: 9:38pm",
    currentTemp: 21,
    maxTemp: 23,
    minTemp: 17,
    description: "Sunny",
    humidity: 9,
    windspeed: 3,
  };

  return (
    <div className="WeatherApp">
      <div className="border">
        <h1>Weather</h1>

        <form className="search" id="searchEngine">
          <input
            type="search"
            className="form-control dc-input"
            placeholder="Search a City..."
            id="searchInput"
            autoComplete="off"
          />
        </form>

        <button>Current Location</button>

        <h2 id="locationHeader">
          <em></em>
        </h2>
        <div className="card current-temp">
          <div className="card-body">
            <h2 id="date"> {weatherAppData.date}</h2>
            <em>Current Temperature:</em>
            <br />
            <span>
              <img src="" id="icon" alt="" />
            </span>
            <span className="temp" id="currentTemp">
              {weatherAppData.currentTemp}
            </span>
            <span className="units">°F </span>
            <br />
            <span id="temp-max">{weatherAppData.maxTemp}</span>/
            <span id="temp-min">{weatherAppData.minTemp}</span>
            <ul>
              <li id="description">{weatherAppData.description}</li>
              <li>
                Humidity:<span id="humidity">{weatherAppData.humidity} </span>%
              </li>
              <li>
                Windspeed:
                <span id="windspeed">{weatherAppData.windspeed} </span>m/h
              </li>
            </ul>
          </div>
        </div>

        <div className="card five-day-forecast">
          <div className="card-body" id="forecast"></div>
        </div>
      </div>
      <div className="githubLink">
        <p>
          <a href="https://github.com/rcontini/Weather-App-React">
            Open Source Code
          </a>{" "}
          by{" "}
          <a href="https://splendid-lokum-3327ae.netlify.app">
            Rachele Contini
          </a>
        </p>
      </div>
    </div>
  );
}

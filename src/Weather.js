import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  // let weatherAppData = {
  //city: "Washington DC",
  //  date: "Tuesday 26th: 9:38pm",
  //  currentTemp: 21,
  //maxTemp: 23,
  //minTemp: 17,
  //description: "Sunny",
  //humidity: 9,
  //windspeed: 3,
  // };

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div className="container">
          <div className="border">
            <h1>Weather</h1>

            <form className="search" id="searchEngine">
              <input
                type="search"
                className="form-control dc-input"
                placeholder="Search a City..."
                id="searchInput"
                autoFocus="on"
              />
            </form>

            <button>Current Location</button>

            <h2 id="locationHeader">
              <em>{weatherData.city}</em>
            </h2>
            <div className="card current-temp">
              <div className="card-body">
                <h2 id="date">
                  <FormattedDate date={weatherData.date} />
                </h2>
                <em>Current Temperature:</em>
                <br />
                <span>
                  <img src="" id="icon" alt="" />
                </span>
                <span className="temp" id="currentTemp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">°C </span>
                <br />
                <span id="temp-max">{Math.round(weatherData.maxTemp)}</span>/
                <span id="temp-min">{Math.round(weatherData.minTemp)}</span>
                <ul>
                  <li id="description">{weatherData.description}</li>
                  <li>
                    Humidity:
                    <span id="humidity"> {weatherData.humidity}</span>%
                  </li>
                  <li>
                    Windspeed:
                    <span id="windspeed">
                      {" "}
                      {Math.round(weatherData.windspeed)}
                    </span>
                    km/h
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
              <a href="https://melodious-pithivier-57ba29.netlify.app/">
                Rachele Contini
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4de5d6165fffbb5d356ef70ff72b3431";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

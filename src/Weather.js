import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import { specialCharMap } from "@testing-library/user-event/dist/keyboard";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
  function search() {
    const apiKey = "4de5d6165fffbb5d356ef70ff72b3431";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div className="container">
          <div className="border">
            <h1>Weather</h1>

            <form className="search" id="searchEngine" onSubmit={handleSubmit}>
              <input
                type="search"
                className="form-control dc-input"
                placeholder="Search a City..."
                id="searchInput"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </form>

            <button>Current Location</button>
            <WeatherInfo data={weatherData} />
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
    search();
    return "Loading...";
  }
}

import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
const [weatherData, setweatherData] = useState({ ready:false });

function handleResponse(response) {
console.log(response.data);
setweatherData({
ready: true,
iconUrl: "http://apidev.accuweather.com/developers/Media/Default/WeatherIcons/21-s.png",
temperature: Math.round(response.data.main.temp),
date: "Sunday 09:02",
description: response.data.weather[0].description,
wind: response.data.wind.speed,
humidity: response.data.main.humidity,
city: response.data.name

});
}

if(weatherData.ready) {
  return (
    <div className="Weather">
      <form className="form">
      <div className="row">
        <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Enter your location"
              autoComplete="off"
              autoFocus="on"
            />
            </div>
            <div className="col-3">
            <input className="btn btn-primary w=100" type="submit" value="Search" />
            </div>
            </div>
      </form>
      <br />
      <h1 className="city">{weatherData.city}</h1>
      <br />

      <div className="time-date">
        <p>
          Last Updated:{weatherData.date}
          <span className="date"></span>
        </p>
      </div>
      <div className="weather-temp">
        <img src={weatherData.iconUrl} alt={weatherData.description} />
        <span className="temp">{weatherData.temperature}</span>
        <small className="degrees">
          <a href="/">℃</a> | <a href="/">℉</a>
        </small>
      </div>

      <div className="header">
        <h2> </h2>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="cond col-4">{weatherData.description}</div>
          <div className="hum col-4">Humidity:{weatherData.humidity} %</div>
          <div className="wind col-4">Wind:{weatherData.wind} KM/HR</div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}else{

const apiKey = "d01a8031900e2023529537f3248e4cb4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(handleResponse);

return "Loading...";
}
}

import React, { useState } from "react";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";

export default function Weather(props) {
const [weatherData, setweatherData] = useState({ ready:false });
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
setweatherData({
ready: true,
date: new Date(response.data.dt * 1000),
iconUrl: "http://apidev.accuweather.com/developers/Media/Default/WeatherIcons/21-s.png",
temperature: Math.round(response.data.main.temp),
description: response.data.weather[0].description,
wind: response.data.wind.speed,
humidity: response.data.main.humidity,
city: response.data.name
});
}

function search() {
const apiKey = "d01a8031900e2023529537f3248e4cb4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
event.preventDefault();
search();
}

function changeCity(event) {
setCity(event.target.value);
}

if(weatherData.ready) {
  return (
    <div className="Weather">
      <form className="form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Enter your location"
              autoComplete="off"
              autoFocus="on"
              onChange={changeCity}
            />
            </div>
            <div className="col-3">
            <input className="btn btn-primary w=100" type="submit" value="Search" />
            </div>
            </div>
      </form>
      <WeatherDetails data={weatherData}/>
      </div>
  );
} else {
search();
return "Loading...";
}
}

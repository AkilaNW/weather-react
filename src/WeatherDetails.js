import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherDetails(props) {
return (
<div className="WeatherDetails">
<h1 className="city">{props.data.city}</h1>
      <br />
      <div className="time-date">
        <span className="format">
        <FormattedDate date={props.data.date} />
        </span>
      </div>
      <div className="weather-temp">
        <img src={props.data.iconUrl} alt={props.data.description} />
        <span className="temp">{props.data.temperature}</span>
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
          <div className="cond col-4">{props.data.description}</div>
          <div className="hum col-4">Humidity:{props.data.humidity} %</div>
          <div className="wind col-4">Wind:{props.data.wind} KM/HR</div>
        </div>
        </div>
        </div>
);
}
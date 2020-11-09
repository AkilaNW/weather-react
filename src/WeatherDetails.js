import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTempearature from "./WeatherTemperature";

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
      <span className="Icon"><WeatherIcon code={props.data.iconUrl} /></span>
      <span className="Temp"><WeatherTempearature celsius={props.data.temperature} /></span>
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
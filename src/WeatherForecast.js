import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastPreview from "./ForecastPreview";

export default function WeatherForecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);

function handleForecastResponse(response) {
setForecast(response.data);
setLoaded(true);
}

if(loaded) {

return (
<div className="WeatherForecast row">
<ForecastPreview data={forecast.list[0]} />
<ForecastPreview data={forecast.list[1]} />
<ForecastPreview data={forecast.list[2]} />
<ForecastPreview data={forecast.list[3]} />
<ForecastPreview data={forecast.list[4]} />
<ForecastPreview data={forecast.list[5]} />
</div>
);

} else {
let apiKey = "d01a8031900e2023529537f3248e4cb4";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleForecastResponse);
return  null;
}
}
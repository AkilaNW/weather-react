import React, {useState} from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");

function showFarenheit(event) {
event.preventDefault();
setUnit("farenheit");
}

function showCelsius(event) {
event.preventDefault();
setUnit("celsius");
}

function farenheit() {
return (props.celsius * 9) / 5 + 32;
}

if(unit ==="celsius") {
return (
<div className="WeatherTemp">
<span className="temp">{Math.round(props.celsius)}</span>
<small className="degrees">
℃| {" "}<a href="/" onClick={showFarenheit}>℉</a>
</small>
</div>
);
} else {
return (
<div className="WeatherTemp">
<span className="temp">{Math.round(farenheit())}</span>
<small className="degrees">
<a href="/" onClick={showCelsius}>℃</a>{" "}| ℉
</small>
</div>   
);
}
}

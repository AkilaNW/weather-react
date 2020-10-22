import React from "react";
import axios from "axios";

export default function Weather() {

function handleResponse(response) {
    

alert(`It is ${Math.round(response.data.main.temp)} degrees in London`);

}

let apiKey = "d01a8031900e2023529537f3248e4cb4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(handleResponse);

}
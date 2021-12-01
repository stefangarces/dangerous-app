/*
export async function GetWeather() {
    let cityName = "Gothenburg"
    let response = await fetch(                                                                             // The API key
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=en&appid=34832f1e903a4e490cfc9a2d3fffea23`
    );

    if (response.ok) {
        let json = await response.json();
        let weather = json.weather[0].description;
        let temp = json.main.temp;

        return (
            <h1>{temp}</h1>,
            <h1>{weather}</h1>
        )
    } else {
        alert("Couldn't find the weather of that city.");
    }
}
*/

import axios from "axios";

const WeatherAPI = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

export default WeatherAPI;
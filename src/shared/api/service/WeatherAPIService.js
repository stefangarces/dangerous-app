import http from '../WeatherAPI'

const getWeatherFromCity = (cityName) => {
    return http.get(`/weather?q=${cityName}&units=metric&lang=en&appid=34832f1e903a4e490cfc9a2d3fffea23`)
}

export default {
    getWeatherFromCity
}
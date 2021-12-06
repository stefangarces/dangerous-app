import WeatherAPIService from "../../shared/api/service/WeatherAPIService";
import {useEffect, useState} from "react";
import {Roller} from "react-awesome-spinners";
import {BoxInner} from "../../styles/styleComponens";

export const SignUpView = () => {
    const [serverResponse, setServerResponse] = useState()
    useEffect(()=>getData(), [])

const getData = async () => {
    const response = await WeatherAPIService.getWeatherFromCity('Gothenburg')
    setServerResponse(response)
    console.log(response)
}
    return (
        <BoxInner>
            <h1>{serverResponse ? serverResponse.data.name : <Roller />}</h1>
            <h3>{serverResponse ? serverResponse.data.weather[0].description : <Roller />}</h3>
            <h3>{serverResponse ? serverResponse.data.main.temp + "°" : <Roller />}</h3>
        </BoxInner>
    )
}
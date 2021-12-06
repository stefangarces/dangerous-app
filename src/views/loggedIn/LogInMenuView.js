import {useEffect, useState} from "react";
import UserAPIService from "../../shared/api/service/UserAPIService";
import {Roller} from "react-awesome-spinners";

export const LogInMenuView = () => {
    const [serverResponse, setServerResponse] = useState()

    useEffect(()=>getUserData(), [])

    const getUserData = async () => {
        const response = await UserAPIService.getUserData()
        setServerResponse(response)
        console.log(response.data[0].name)
    }

    return (
        <div>
            <h1>Welcome {serverResponse ? serverResponse.data[0].name : <Roller />}</h1>
        </div>
    )
}
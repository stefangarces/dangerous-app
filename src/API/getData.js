import Axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import {CardHeading, CardOptionsNote} from "../styles/styleComponens";
import { Roller } from "react-awesome-spinners";

    export const DisplayDataView = () => {
        const [serverResponse, setServerResponse] = useState()
        const [loading, setLoading] = useState(true)
        const [search, setSearch] = useState('')

        const fetchData = async () => {
            const API_URL = `https://pokeapi.co/api/v2/pokemon/${search}`
            try {
                setLoading(true)
                const response = await Axios.get(API_URL.toLowerCase())
                setServerResponse(response)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

    useEffect(() => {
        fetchData()
    }, [])

    const displayData = () => {
        return (
            <CardOptionsNote>
                {serverResponse?.data.sprites && <img src={serverResponse?.data.sprites?.front_shiny} alt={'Error'} />}
                {serverResponse?.data.name && <h1>{serverResponse?.data.name}</h1>}
            </CardOptionsNote>
        )
    }

    useEffect(() => {
        fetchData()
    }, [search])

    return (
        <CardHeading>
            <input onChange={(event) => setSearch(event.target.value)} /> <br />
            {!loading ? displayData() : <Roller/>}
        </CardHeading>
    )
}
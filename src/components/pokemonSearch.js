import * as React from 'react';
import {DisplayDataView} from "../API/getData";
import {CardStyle, CardHeader, CardHeading } from "../styles/styleComponens";

export default function PokemonSearchCard() {
    return (
        <CardStyle>
            <CardHeader>
                <CardHeading>Search Pokémon</CardHeading>
            </CardHeader>
            <DisplayDataView />
        </CardStyle>
    );
}
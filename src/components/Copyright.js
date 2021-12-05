import * as React from "react";
import {CardOptionsNote} from "../styles/styleComponens";

export const Copyright = (props) => {
    return (
        <CardOptionsNote variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
                The Complex Company
            {' '}
            {new Date().getFullYear()}
        </CardOptionsNote>
    );
}
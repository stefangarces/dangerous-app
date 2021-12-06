import React, {useState} from "react";
import {BoxInner} from "../../styles/styleComponens";

export const SellObjectView = () => {
    const [count, setCount] = useState(0)

    return (
        <BoxInner>
            <h1>Count to {count}/100</h1>
            <button onClick={()=> setCount(count + 2)}>CLICK ME</button>
        </BoxInner>
    )
}
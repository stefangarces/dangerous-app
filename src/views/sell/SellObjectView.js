import React, {useState} from "react";

export const SellObjectView = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Count to {count}/100</h1>
            <button onClick={()=> setCount(count + 2)}>CLICK ME</button>
        </div>
    )
}
import {useState} from "react";
import useCounter from "../hooks/useCounter.jsx";

function Counter() {

    const [number, increment, decrement, reset] = useCounter()

    return (
        <div>
            <h3>Number : {number}</h3>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >Decrement</button>
            <button onClick={reset} >Reset</button>
        </div>
    );
}

export default Counter ;

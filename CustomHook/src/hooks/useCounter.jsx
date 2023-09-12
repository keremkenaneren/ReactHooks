import {useState} from "react";

function useCounter() {

    const [number, setNumber] = useState(0)

    const increment = ()=>{
        setNumber((prevNum)=>prevNum+1)
    }
    const decrement = ()=>{
        setNumber((prevNum)=>prevNum-1)
    }
    const reset = ()=>{
        setNumber(0)
    }

    return [number, increment, decrement, reset]
}

export default useCounter ;

import { useContext } from "react";
import { NumberContext } from "./App";

function Calculate() {

    const numberContext = useContext(NumberContext)


    return (
        <div>
            <h2>Sayı = {numberContext.count}</h2>
            <button onClick={() => numberContext.dispatch("increment")}>Arttır</button>
            <button onClick={() => numberContext.dispatch("decrement")} >Azalat</button>
            <button onClick={() => numberContext.dispatch("reset")} >Sıfırla</button>
        </div>
    );
}

export default Calculate;
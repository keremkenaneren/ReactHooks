import {useEffect, useState} from "react";
import useTitle from "../hooks/useTitle.jsx";

function TitleOne() {


    const [num, setNum] = useState(0)

    useTitle(num)


    return (
        <div>
            <button onClick={()=> setNum(num+1)} >sayı - {num}</button>
        </div>
    );
}

export default TitleOne ;

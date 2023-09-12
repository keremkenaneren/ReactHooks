import { useEffect, useState } from "react";

function NumberList({ getItems }) {

    useEffect(() => {
        setItems(getItems());
        console.log("Click");
    }, [getItems])



    const [items, setItems] = useState([])
    return items.map((item) => <div key={item}>{item}</div>)

}

export default NumberList;
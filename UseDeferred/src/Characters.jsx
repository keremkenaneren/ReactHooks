import {useDeferredValue, useMemo} from "react";

function Characters({input}) {

    const defferedValue = useDeferredValue(input)

    const myList = useMemo(() => {
        const myArray = []
        for (let i = 0; i < 30; i++) {
            myArray.push(<div key={i} >{defferedValue}</div>)
        }
        return myArray
    }, [defferedValue]);

    return myList;
    

}

export default Characters ;

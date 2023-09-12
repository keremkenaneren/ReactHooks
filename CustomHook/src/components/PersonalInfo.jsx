import {useState} from "react";
import useInput from "../hooks/useInput.jsx";

function PersonalInfo() {

    // const [name, setName] = useState("")
    // const [surname, setSurname] = useState("");

    const [name, bindName, resetName] = useInput("")
    const [surname, bindSurname, resetSurname] = useInput("")

    const submitForm = (e)=>{
        e.preventDefault()
        alert(`Saved! \n Name : ${name} \n Surname : ${surname}`)
        resetName();
        resetSurname();
    }

    return (
        <form onSubmit={submitForm}>
            <label>Name : </label>
            <input
                type="text"
                {...bindName} />
            <br/><br/>
            <label>Surname : </label>
            <input
                type="text"
                {...bindSurname}/>
            <br/><br/>
            <button>Save / Show</button>
        </form>
    );
}

export default PersonalInfo ;

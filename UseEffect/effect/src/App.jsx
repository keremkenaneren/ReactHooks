import './App.css'
import {useEffect, useState} from "react";

function App() {

    const [elma, setElma] = useState(0);
    const [armut, setArmut] = useState(0);

    useEffect(()=>{
        console.log("-- Bu UseEffect Kullanımı sayfa her render edildiğinde çalışır - Her zaman çalışır")
    })

    useEffect(()=>{
        console.log("-- Bu UseEffect Kullanımı sayfa render eddildiğinde ve' elma ' değerinde değişiklik olduğunda çalışır")
    }, [elma])

    useEffect(()=>{
        console.log("-- Bu UseEffect Kullanımı sayfa render eddildiğinde ve ' armut ' değerinde değişiklik olduğunda çalışır")
    }, [armut])

    useEffect(()=>{
        console.log("-- Bu UseEffect Kullanımı sayfa render eddildiğinde ve ' elma' ve ' armut ' değerlerinde değişiklik olduğunda çalışır")
    }, [elma, armut])



    return (
    <div>
        <h1>UseEffect Kullanımı</h1>
        <hr/>
        <br/>
        <div>
            <button onClick={()=>setElma(elma+1)}>Elma arttır</button>
            <p>Kaç elma : {elma} </p>
        </div>
            <br/><br/>
        <div>
            <button onClick={()=>setArmut(armut+1)}>armut arttır</button>
            <p>Kaç armut : {armut}</p>
        </div>
    </div>
  )
}

export default App

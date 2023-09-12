import { useMemo } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const doubleNumber = useMemo(() => {
    return slowFunc(number)
  }, [number])

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333"
  }



  return (
    <div>
      <input
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        type="number"
        className='input' />

      <br /><br />
      <button onClick={() => setDark((prevDark) => !prevDark)} >Temayı Değiştir</button>
      <br />
      <div style={theme}>{doubleNumber}</div>
    </div>
  )
}

function slowFunc(num) {
  console.log("aa");
  for (let i = 0; i <= 100000000; i++) { /* empty */ }
  return num * 2;

}

export default App


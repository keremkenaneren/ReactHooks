/* eslint-disable no-undef */
import './App.css'
import NumberList from './NumberList'
import { useCallback, useState } from 'react'

function App() {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])


  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333"
  }

  return (
    <div style={theme}>
      <input
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        type="number"
        className='input' />

      <br /><br />
      <button onClick={() => setDark((prevDark) => !prevDark)} >Temayı Değiştir</button>
      <br />
      <NumberList getItems={getItems} />
    </div>
  )
}

export default App

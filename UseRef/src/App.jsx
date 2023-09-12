import { useRef } from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'


// componentin her state edildiğinde render olmasını istemiyorsak UseRef kullanırız 

function App() {

  const [name, setName] = useState("")
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  })

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.value = "Kerem Kenan"
    inputRef.current.focus();
  }

  return (
    <div>
      <label>Adınız : </label>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} />
      <br />
      <h2>Benim adım : {name} </h2>
      <h4>{renderCount.current} - defa render oldu </h4>
      <br />
      <button onClick={focusInput}>Focus</button>
    </div>
  )
}

export default App

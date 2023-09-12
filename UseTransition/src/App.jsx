import { useState, useTransition } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState("")
  const [myList, setMyList] = useState([])
  const [isPending, startTransition] = useTransition()

  const handleChange = (e) => {
    setInput(e.target.value)

    startTransition(() => {
      const myArr = []
      for (let i = 0; i < 2000; i++) {
        myArr.push(e.target.value)
      }
      setMyList(myArr)
    })
  }


  return (
    <>
      <input type="text"
        value={input}
        onChange={handleChange}
      />

      {isPending
        ? "Yükleniyor..."
        :
        myList.map((item, index) => {
          return <div key={index}>{item} </div>
        })
      }


    </>
  )
}

export default App

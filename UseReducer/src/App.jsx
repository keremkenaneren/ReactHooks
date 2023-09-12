import React, { useReducer } from 'react'
import './App.css'
import Calculate from './Calculate';

export const NumberContext = React.createContext();



const initalValue = 0

// initalValue varolan başlangıç değeri
// state var olan durum için
// action da state değerimi güncellemek için
// action kullanmak için dispatchi kullandık
// reducer methodum hesaplama için
// dispatchin içine bir action type belirtiyoruz. ona göre işlem yapılıyor.
// state değeri count da tutuluyo



const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initalValue;

    default:
      return state;
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initalValue)

  return (
    <div>
      <NumberContext.Provider value={{count:count, dispatch:dispatch}}>
        <Calculate />
      </NumberContext.Provider>
    </div>
  )
}

export default App

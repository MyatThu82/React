import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MyButton} from 'vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyButton/>
    </>
  )
}

export default App;

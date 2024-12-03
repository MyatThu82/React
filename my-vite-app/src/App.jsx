import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcomeone from './Welcomeone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcomeone></Welcomeone>
    </>
  )
}

export default App

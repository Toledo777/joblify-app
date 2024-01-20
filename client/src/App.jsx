import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DropFile from './DropFile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DropFile></DropFile>
    </>
  )
}

export default App

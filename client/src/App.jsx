import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import Home from './components/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './components/home/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <About/>
      <Home/>
      <Chat/>
    </div>
  )
}

export default App

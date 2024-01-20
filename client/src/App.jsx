import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DropFile from './DropFile'
import Header from './components/header/Header'
import About from './components/about/About'
import Home from './components/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './components/home/Chat'

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Home/>
      <Chat/>
      <DropFile/>
    </div>
  )
}

export default App

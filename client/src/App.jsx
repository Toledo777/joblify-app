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
import LoadingOverlay from 'react-loading-overlay-ts';

function App() {
  // for loading overlay
  const [isActive, setActive] = useState(false)
  const [loadingText, setLoadingText] = useState("Reading your resume...");
  function loading(e) {
    e.preventDefault();
    setActive(value => !value)
    setTimeout(() => {
      setActive(value => !value)
    }, 15000);
    setTimeout(() => {
      setLoadingText("Done!");
    }, 14500);
    setTimeout(() => {
      setLoadingText("Analyzing...");
    }, 4000);
    setTimeout(() => {
      setLoadingText("Compiling data...");
    }, 10500);
  }

  return (
    <>
    <LoadingOverlay
      active={isActive}
      spinner
      text={loadingText}
    >
      <Header />
      <About />
      <Home />
      <Chat />
      <DropFile load={loading}/>
    </LoadingOverlay></>
  )
}

export default App

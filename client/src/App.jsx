import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DropFile from './components/dropfile/DropFile'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content/Content';

function App() {


  return (
    <div>
      <Header />
      <DropFile />
      <Content />
      <Footer />
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content/Content'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App

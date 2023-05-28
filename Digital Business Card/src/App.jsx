import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Photo from './components/photo';
import Info from './components/info';
import Buttons from './components/buttons';
import About from './components/About'
import Interests from './components/interests';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="ctn">
      <Photo />
      <div className='ctn-mid-section'>
        <Info />
        <Buttons />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  )
}

export default App

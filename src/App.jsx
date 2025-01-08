import React from 'react'
import Navbar from './Component/Navbar'
import Landingpgae from './Component/Landingpgae'
import Maqee from './Component/Maqee'
import About from './Component/About'
import Eyes from './Component/Eyes'
import Laptop from './Component/Laptop'
const App = () => {
  return (
    <div className=' w-full min-h-screen bg-white'>
      <Navbar/>
      <Landingpgae/>
      <Maqee/>
    <About/>
    <Eyes/>
    <Laptop/>
    </div>
  )
}

export default App
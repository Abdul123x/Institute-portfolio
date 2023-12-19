
import "./App.css"
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from "../src/Contact/Contact"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Moreprojects from './Components/moreprojects/Moreprojects'






  

const App = () => {


  return (

    <>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Moreprojects />} />
          </Routes>
          <Footer />

        </BrowserRouter>
   

    </>

  )
}
export default App
import React  from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from "../src/Contact/Contact"
import Projects from './Components/Projects/Projects'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"



const App = () => {



  return (

    <>

      <BrowserRouter>
        <Navbar />
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/portfolio' element={<Projects/>}/>
        </Routes>
        <Footer />
      </BrowserRouter> 

   

    </>

  )
}
export default App
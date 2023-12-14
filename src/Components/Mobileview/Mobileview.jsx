import React from 'react'
import { FaTimes } from 'react-icons/fa'
import "./MobileView.css"
import { useNavigate } from 'react-router-dom'
const Mobileview = ({ setshow }) => {
  const navigate = useNavigate();

  return (
    <div className="mobileview">
      <div className="top">
        <div className="logo">  
          Beta <span className="commune">Commune</span>
        </div>
        <div className="fatimes">
          <FaTimes onClick={() => { setshow(false) }} className='cross' />

        </div>
      </div>
      <div className="middle">
        <ul className='mobilemenu' onClick={() => { setshow(false) }}  >
          <li onClick={() => navigate("/")}><p>Home</p></li>
       
          <li onClick={() => navigate("/portfolio")}><p>Portfolio</p></li>
          <li  onClick={() => navigate("/about")}><p>About</p></li>
          <li onClick={() => navigate("/contact")}><p>Contact</p></li>
        </ul>
      </div>




    </div>
  )
}

export default Mobileview
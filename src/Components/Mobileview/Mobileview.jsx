import React from 'react'
import { FaTimes } from 'react-icons/fa'
import "./MobileView.css"
const Mobileview = ({setshow}) => {
  return (
      <div className="mobileview">
         <div className="fatimes">
         <FaTimes onClick={() =>{setshow(false)}} className='faaaa' />

         </div>
 
        <ul className='mobilemenu'>
            <li><p>Home</p></li>
            <li><p>About</p></li>
            <li><p>Contact</p></li>
        </ul>
       
    </div>
  )
}

export default Mobileview
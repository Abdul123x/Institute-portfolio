import React from "react";
import "./Navbar.css";
import  { FaBars } from "react-icons/fa"

import { Link } from "react-scroll";
import { useState } from "react";
import Mobileview from "../Mobileview/Mobileview";
const Navbar = () => {
  const [show, setshow] = useState(false);

  const toggle = () =>{
      setshow(true);
  }
  return (
    <div className="nav-container">
      <div className="logo-nav">
      {show && <Mobileview setshow = {setshow}/>}
        Retro <span className="commune">Commune</span>
       <div className="barsicon">
       <FaBars className="barsssss"  onClick={toggle} />
       </div>
      </div>
       

      
      
       
      <div className="menu-nav">
        <ul className="menu">
          <li>
            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li> <Link  to="Services" spy={true} smooth={true}>
              Services
            </Link> </li>
          <li><Link to="Projects" spy={true} smooth={true}>
              About
            </Link> </li>
        </ul>

        
      </div>
      
      <div className="button-nav">
      <button className="btnn">Contact Us</button>

      </div>
    </div>
  );
};

export default Navbar;

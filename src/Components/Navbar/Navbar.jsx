import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom";
import Mobileview from "../Mobileview/Mobileview";
import { useNavigate } from 'react-router-dom'
import Logo from "../../img/betacommunes.png"

  


const Navbar = () => {

  const [show, setshow] = useState(false);
  const navigate = useNavigate();


  return (   
    <>

      <nav className="main">

        <div className="nav-content">
          <div  className="nav-logo" onClick={() => navigate("/")}>
            Beta <span className="commune">Communes</span>
            {/* <img  src={Logo} alt="" /> */}
          </div>
          <div className="nav-list">
            <ul className="menu">
              <li onClick={() => navigate("/")}>
            
                  Home
             
              </li>
              <li onClick={() => navigate("/portfolio")}> 
             
                Portfolio
            
               </li>
              <li onClick={() => navigate("/about")}>
              
                About
            
               </li>  
            
            </ul>
          </div>
          <div className="nav-button">
        
              <button  onClick={() => navigate("/contact")} className="btnn">Schedule your Consulation </button>
          
          </div>
          <div className="nav-icon">
            <FaBars className="nav-icon" onClick={() => { setshow(true) }} />
          </div>

        </div>



      </nav>
      {show && <Mobileview setshow={setshow} />}
    </>
  );
};

export default Navbar;

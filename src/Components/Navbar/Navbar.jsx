import React from "react";
import "./Navbar.css";
import  { FaBars,  FaTimes } from "react-icons/fa"

import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-nav">
        Retro <span>Commune</span>
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

        {/* <FaBars className="barsicon"/> */}
        {/* <FaTimes/> */}
      </div>

      <div className="button-nav">
      <button className="btnn">Contact Us</button>

      </div>
    </div>
  );
};

export default Navbar;

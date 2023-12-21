import React from 'react'
import './Footer.css'
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaInstagram
} from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer>
            <div className="footer">
                <div className="footer-left">
                    <div className="form-left-data">
                    <div className="footer-title1">
                        <span>Subscribe to our <br /> newsletter</span>
                        <div className="footer-form">
                            <input type="email" name="" id="" placeholder='Email' style={{padding:"10px"}} />
                            <button>Get a free quote</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="footer-right">
                    <span className='footer-title'>Menu</span>
                    <div className="footer-list">
                        <div className='list1'>
                            <ul className='footer-ul'>
                                <li onClick={() => navigate('/')} >Home</li>
                                <li onClick={() => navigate('/about')}  >About Us</li>
                                <li onClick={() => navigate('/contact')}  >Hire Us</li>
                            </ul>
                        </div>
                        <div className="list2">
                            <ul className='footer-ul' >
                                <li onClick={() => navigate('/portfolio')}  >Portfolio</li>
                                <li onClick={() => navigate('/about')}  >Our Team</li>
                            </ul>
                        </div>
                    </div>
                


                </div>
               
            </div>
            <div className="footer-Bottom">
                <div className="footer-icons">
                <div className="footer--socials">
                        <a href="https://www.facebook.com/profile.php?id=61554057222085&mibextid=zLoPMf" target="_blank" className="contact--social--links">
                            <FaFacebookF />
                        </a>
                        <a href="https://wa.me/+923271519404" target="_blank" className="contact--social--links">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/betacommunes/" target="_blank" className="contact--social--links">
                            <FaInstagram />
                        </a>
                        <a href="#" target="_blank" className="contact--social--links">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
           
                    <div className="copyright">
                        <span >© Copyright 2023 | Beta Communes, Inc</span>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
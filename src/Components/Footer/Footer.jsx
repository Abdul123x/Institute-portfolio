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

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-left">
                    <span className="footer-title">Let’s Make It App’n</span>
                    <div className="footer-content">
                    <div className="footer--info">
                            <FaPhoneSquareAlt className='footer-icon' />
                            <div>
                                <span className="info--title">Call Us</span>
                                <h4 className="info--desc">+923271519404</h4>
                            </div>
                        </div>
                        <div className="footer--info">
                            <FaEnvelopeOpen className='footer-icon' />
                            <div>
                                <span className="info--title">Mail Us</span>
                                <h4 className="info--desc">betacommunes@gmail.com</h4>
                            </div>
                        </div>
                       
                        {/* <span>Connect on Social</span> */}
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
                </div>
                <div className="footer-right">
                    <span className='footer-title'>Menu</span>
                    <div className="footer-list">
                    <div className='list1'>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Hire Us</li>
                        </ul>
                    </div>
                    <div className="list2">
                        <ul>
                            <li>Portfolio</li>
                            <li>Our Team</li>
                        </ul>
                    </div>
                    </div>
                    <div className="footer--socials-mobileView">
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
              
            </div>
            <span style={{textAlign:'center', display:"flex", alignItems:"center" , justifyContent:'center' , marginBottom:'20px' , marginTop:"2rem"}}>© Copyright 2023 | Beta Communes, Inc</span>
        </footer>
    )
}

export default Footer
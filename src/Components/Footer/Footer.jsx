import React from 'react'
import './Footer.css'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon
} from "@heroicons/react/outline"
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <div className="logo">
                        <div className="footer-title">
                            Retro <span>Communes</span>
                        </div>
                    </div>
                    <div className="footer-item">
                        <span>Contact Us</span>
                        <span className='pngLine'>
                            <LocationMarkerIcon className='icon' />
                            <span>111 north avenue orlando, FL 32801</span>
                        </span>
                        <span className='pngLine'>
                            <PhoneIcon className='icon' />
                            <span>048 5582 77 </span>
                        </span>
                        <span className='pngLine'>
                            <InboxIcon className='icon' />
                            <span>retrocommune@gmail.com </span>
                        </span>
                    </div>
                    <div className="footer-item">
                    <span>Accounts</span>
                          <span className='pngLine'>
                              <LoginIcon className='icon'/>
                              <span>Sign in</span>
                          </span>
                    </div>
                    <div className="footer-item">
                    <span>Company</span>
                          <span className='pngLine'>
                              <UsersIcon className='icon'/>
                              <span>About us</span>
                          </span>
                    </div>
                    <div className="footer-item">
                    <span>Resources</span>
                          <span className='pngLine'>
                              <LinkIcon className='icon'/>
                              <span>safety privacy & terms</span>
                          </span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
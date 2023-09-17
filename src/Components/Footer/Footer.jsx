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
          <div className="cfooterwrapper">
              <hr />
  
              <div className="cfooter">
                  <div className="logo2">
                      {/* <img src={logo} alt="" /> */}
                      <span>Retro</span><p>Commune</p>

                  </div>
  
                  <div className="block">
                      <div className="details">
                          <span>Contact Us</span>
                          <span className='pngLine'>
                              <LocationMarkerIcon className='icon'/>
                              <span>111 north avenue orlando, FL 32801</span>
                          </span>
                          <span className='pngLine'>
                              <PhoneIcon className='icon'/>
                              <span>048 5582 77 </span>
                          </span>
                          <span className='pngLine'>
                              <InboxIcon className='icon'/>
                              <span>retrocommune@gmail.com </span>
                          </span>
                      </div>
                  </div>
                  <div className="block">
                      <div className="details">
                          <span>Accounts</span>
                          <span className='pngLine'>
                              <LoginIcon className='icon'/>
                              <span>Sign in</span>
                          </span>
                          
                      </div>
                  </div>
                  <div className="block">
                      <div className="details">
                          <span>Company</span>
                          <span className='pngLine'>
                              <UsersIcon className='icon'/>
                              <span>About us</span>
                          </span>
                          
                      </div>
                  </div>
                  <div className="block">
                      <div className="details">
                          <span>Resources</span>
                          <span className='pngLine'>
                              <LinkIcon className='icon'/>
                              <span>safety privacy & terms</span>
                          </span>
                          
                      </div>
                  </div>
              </div>
          </div>
      )
  }

export default Footer
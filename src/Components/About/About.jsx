import React from 'react'
import './About.css'
import dash from '../../img/dash.jpg'
import Letstalknum from '../Letstalk/Letstalknum'
import Photos from '../Photos/Photos'

const About = () => {
  return (
       
      <div className="About-sec">   
        {/* <Navbar/> */}

        <div className="aboutbodr">
            <div className="leftsidede">
                <span>About Us</span>
                <p>Proudly serving the world’s top asset finance <br /> and leasing companies with smart software <br /> technology for over four decades.</p>
                <button className="getintouch">
                    Get in Touch
                </button>

            </div>
            <div className="rightsidees">
                <img className='imageabout' src={dash} alt="" />
            </div>
        </div>
        <Letstalknum/>
        <Photos/>
      
      </div>

    )
}

export default About
import React, { useEffect, useRef, useState } from 'react'
import GLOBE from 'vanta/dist/vanta.globe.min';
import Typewriter from 'typewriter-effect';










import './Mainbody.css'
const Mainbody = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null);




  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x8836c3,
        color2: 0x6729e8,
        size: 0.90,
        backgroundColor: 0xfcfcfc
       

      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])





  return (
    <div className="maincontainer" ref={vantaRef} >
      <div className="left">
        {/* <p>THINK P<span>A</span>RTNER</p><p>N<span>O</span>T AGENCY</p> */}
        <p>
          <p>
            <Typewriter
              options={{
                strings: ['THINK P<span style="color:  #663399;;" >A</span>RTNER', 'N<span  style="color:#663399;;" >O</span>T AGENCY'],
                autoStart: true,
                loop: true,
                cursor: '|',
                cursorSpeed: 500,
                deleteSpeed: 100,
              }}
            />
          </p>
        </p>
        <div className="content">
          <p>Since 2022, we've helped lauch 8+ next-generation apps for startups  <br/> and growing companines around the world. Let's Make It App'n!®</p>
        </div>
        <div className="button">
          <button className="workwithus">
            Work With Us
          </button>
        </div>
      </div>




      <div className="right">

      </div>
    </div>

  )
}

export default Mainbody
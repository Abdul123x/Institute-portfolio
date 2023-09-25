import React, { useEffect, useRef , useState } from 'react'

import  GLOBE  from 'vanta/dist/vanta.globe.min';




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
        minHeight: 150.00,
        minWidth: 150.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff9a46,
        backgroundColor: 0xfffdfd
      
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

 

  




  return (
    <div className="maincontainer" ref={vantaRef} >
      <div className="left">
        <p>THINK P<span>A</span>RTNER</p><p>N<span>O</span>T AGENCY</p>
        <div className="content">
          <p>Since 2022, we've helped lauch 8+ next-generation apps for startups <br /> and growing companines around the world. Let's Make It App'n!®</p>
        </div>
        <div className="button">
          <button className="workwithus">
            Register
          </button>
        </div>
      </div>


      <div className="right">

      </div>
    </div>

  )
}

export default Mainbody
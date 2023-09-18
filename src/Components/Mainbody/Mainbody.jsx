import React from 'react'
import { motion } from "framer-motion";
import Fiverr from "../../img/fiverr.png"
import Upwork from "../../img/Upwork.png"
import Facebook from "../../img/Facebook (1).png"
import Shopify from "../../img/Shopify.png"
import Amazon from "../../img/amazon.png"
import './Mainbody.css'
const Mainbody = () => {

  
  return (
       <div className="maincontainer">
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
        <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
         {/* backCircle */}
        {/* <div className="w-backCircle blueCircle"></div> */}
        {/* <div className="w-backCircle yellowCircle"></div> */}
        </div>
       </div>
 
    )
}

export default Mainbody
import React, { useState } from "react";
import "./Services.css";
import { service } from "../Data/Data";
import parse from "html-react-parser"
import Zoom from 'react-reveal/Zoom';



const Services = () => {

  const [isHovered, setIsHovered] = useState(false);



  const handleMouseEnter = () => {
    setIsHovered(true);  
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="services">
      <div className="title">   
        Our <span> Services</span>   
      </div>
      <div className="service-content"

      >
        {service.map(({ img, text, title }, index) => {   
          return (
            <> 
           
              <Zoom>
              <div className="service-item" key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={img} alt="" className="service-img" />
                <span className="service-title">{title}</span>
              {isHovered && <span className="text">{parse(text)}</span>}

              </div>
              </Zoom> 
           
            
            </>


          )
        })}  
      </div>

    </div>
  );
};

export default Services;

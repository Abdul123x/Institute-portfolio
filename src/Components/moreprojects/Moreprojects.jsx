import React from "react";
import "./Moreprojects.css";
import { moreprojects } from "../Data/Data";
import parse from "html-react-parser";
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";
const Moreprojects = () => {

  const navigate = useNavigate();
  return (
    <div className="moreproject">
      <div className="title">
        Our <span> Projects</span> 
      </div>
      <div className="moreproject-content">  
        {moreprojects.map(({ img, title, desc , link }, index) => {
          return (
            <Fade duration={1500}>
            <div className="moreproject-item" key={index}>
              <img src={img} alt="" className="moreproject-img" />
              <span className="moreproject-title">{parse(title)}</span>
              <p className="moreproject-desc">{desc}</p>
              <button className="moreproject-btn" 
                onClick={() => window.open(link, '_blank')}
              >Open</button>
            </div>
       
            </Fade>
          )  
        })}
      </div>
    
    </div>
  );
};

export default Moreprojects;

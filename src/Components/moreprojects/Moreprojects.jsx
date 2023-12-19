import React, {useEffect} from "react";
import "./Moreprojects.css";
import { moreprojects } from "../Data/Data";
import parse from "html-react-parser";
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"

const Moreprojects = () => {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName])

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
            <div className="project-item" key={index}>
              <img src={img} alt="" className="project-img" />
              <span className="project-title">{parse(title)}</span>
              <p className="project-desc">{desc}</p>
              <button className="project-btn" 
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

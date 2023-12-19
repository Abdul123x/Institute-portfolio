import React from "react";
import "./Projects.css";
import { project } from "../Data/Data";
import parse from "html-react-parser";
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";
const Projects = () => {

  const navigate = useNavigate();
  return (
    <div className="project">
      <div className="title">
        Our <span> Projects</span> 
      </div>
      <div className="project-content">  
        {project.map(({ img, title, desc , link }, index) => {
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
      <div className="main-button">
        <button className="project-button" onClick={()=>{
          navigate("/portfolio")
        }}> Explore More Projects</button>
      </div>
    </div>
  );
};

export default Projects;

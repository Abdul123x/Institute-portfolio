import React from "react";
import "./Projects.css";
import { project } from "../Data/Data";
import parse from "html-react-parser";
const Projects = () => {
  return (
    <div className="project">
      <div className="title">
        Our <span> Projects</span> 
      </div>
      <div className="project-content">
        {project.map(({ img, title, desc }, index) => {
          return (
            <div className="project-item" key={index}>
              <img src={img} alt="" className="project-img" />
              <span className="project-title">{parse(title)}</span>
              <p className="project-desc">{desc}</p>
            </div>
          )  
        })}
      </div>
      <div className="main-button">
        <button className="project-button">Explore More Projects</button>
      </div>
    </div>
  );
};

export default Projects;

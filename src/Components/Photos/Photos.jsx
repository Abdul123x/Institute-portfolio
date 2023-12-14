import React from "react";
import "./Photos.css";
import { team } from "../Data/Data";

const Photos = () => {
  return (
    <div className="team">
      <div className="title">
        Our <span> Team</span>
      </div>
       <div className="team-content">
      {team.map(({ img, name, desc }, index) => {
        return (
          <div className="project-item" key={index}>
            <img src={img} alt="" className="teamproject-img" />
            <span className="project-title">{name}</span>
            <p className="project-desc">{desc}</p>
          </div>
        )  
      })}
    </div> 
      {/* <div className="team-wrapper">
        <div className="team-content">
          {team.map(({ img, name, desc }, index) => {
            return (
              <div className="project-item" key={index}>
                <img src={img} alt="" className="project-img" />
                <span className="project-title">{name}</span>
                <p className="project-desc">{desc}</p>
              </div>
            )
          })}
        </div>
      </div> */}

    </div>

  );
};

export default Photos;

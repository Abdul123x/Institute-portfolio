import React from "react";
import "./Projects.css";
import project from "../../img/project.png";
const Projects = () => {
  return (
    <div className="projects" id="Projects">
      <div className="heading">Our Web Projects</div>

      <div className="cards">
        <div className="card1">
          <img className="img11" src={project} alt="" />
          <h1>Bug Tracker Product</h1>
          <p>
            Streamline software development with efficient bug tracking. Detect,
            report, and resolve issues swiftly for enhanced project delivery and
            client satisfaction.
          </p>
        </div>
        <div className="card2">
          <img className="img11" src={project} alt="" />
          <h1>Bug Tracker Product</h1>
          <p>
            Streamline software development with efficient bug tracking. Detect,
            report, and resolve issues swiftly for enhanced project delivery and
            client satisfaction.
          </p>
        </div>
        <div className="card3">
          <img className="img11" src={project} alt="" />
          <h1>Bug Tracker Product</h1>
          <p>
            Streamline software development with efficient bug tracking. Detect,
            report, and resolve issues swiftly for enhanced project delivery and
            client satisfaction.
          </p>
        </div>
      </div>

      <div className="explorebutton">
        <button className="explore">Explore More Projects </button>
      </div>
    </div>
  );
};

export default Projects;

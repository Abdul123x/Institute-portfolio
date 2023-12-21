import React, { useEffect } from "react";
import "./Moreprojects.css";
import { moreprojects } from "../Data/Data";
import parse from "html-react-parser";
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"
import portfolioVideo from "../../videos/portfolio.mp4"

const Moreprojects = () => {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName])

  const navigate = useNavigate();
  return (
    <div className="moreproject">
      <div className="project-video">
      <video autoPlay loop muted className="backgroundVideo">
        <source src={portfolioVideo} type="video/mp4" />
      </video>
      <div className="project-main">

        <div className="project-main-title">
          <span>We Help Your Business</span>

        </div>
        <span className="project-main-desc">Cheering for our partners! Explore the awesome digital solutions we've crafted!</span>
      </div>
      </div>
     

      <div className="moreproject-content">
        {moreprojects.map(({ img, title, desc, link }, index) => {
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

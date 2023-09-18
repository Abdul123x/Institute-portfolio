import React from "react";
import "./Photos.css";
import project from "../../img/project.png";
import Asad from "../../img/Asad.jpg";
const Photos = () => {
  return (
    <div className="projectsss" >
      <div className="heading22ss">
        <span>Our Team</span> <br />
        <p>The Talented People Behind the Scenes of the Organization</p>
      </div>

      <div className="cardsss">
        <div className="card1ss">
          <img className="img11ss" src={Asad} alt="" />
          <h1>Asad Ali Hanif</h1>
          <p>Co-Founder | MERN STACK</p>
        </div>
        <div className="card1ss">
          <img className="img11ss" src={Asad} alt="" />
          <h1>Umer Ahmad</h1>
          <p>Co-Founder | DropShipping</p>
        </div>
        <div className="card1ss">
          <img className="img11ss" src={Asad} alt="" />
          <h1>Hamza Ashfaq</h1>
          <p>Co-Founder | Fiverr & upwork</p>
        </div>
      </div>

      {/* bugs */}
        {/* <div className="card1" id="carddddd">
          <img className="img11" src={Asad} alt="" />
          <h1>Hamza Ashfaq</h1>
          <p>Co-Founder | Fiverr & upwork</p>
        </div> */}
    </div>
  );
};

export default Photos;

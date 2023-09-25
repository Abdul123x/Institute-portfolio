import React from "react";
import "./Letstalknum.css";
import {experience} from "../Data/Data";
const Letstalknum = () => {
  return (
    <div className="experience">
      <div className="title">
        LET'S <span>TALK</span>  NUMBERS
        </div>
        <div className="exper-content">
            {experience.map(({year, title , desc} , index) => {
              return(
                <div className="exper-item" key={index}>
                  <h1 className="exper-year">{year}</h1>
                  <h3 className="exper-title">{title}</h3>
                  <span className="exper-des">{desc}</span>
                </div>
              )

            })}
        </div>
    </div>
  );
};

export default Letstalknum;

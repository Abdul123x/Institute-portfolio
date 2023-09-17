import React from "react";
import "./Services.css";
import dropshipping from "../../img/drop-shipping.png";
import graphicdesign from "../../img/graphicdesign.png";
import webdevelopment from "../../img/Webdevelopment.png";
import pinterest from "../../img/pinterest.png";

const Services = () => {
  return (
    <div className="services" id="Services">
      <div className="name-svr">OUR SERVICES</div>

      <br />

      <div className="logoss">
        <div className="webb">
          <img className="loggo" src={webdevelopment} alt="" />
          <p className="web">Web Development</p>
          <div className="webtag">
          <p>
            &nbsp; &nbsp;&nbsp;We deliver <br />  &nbsp; responsive web <br />
            &nbsp; apps, sites and a <br />  &nbsp; seamless mobile <br />  experience for iOS{" "}
              <br />  &nbsp;  &nbsp; &nbsp; and Android
            </p>
          </div>
        </div>
        <div className="dropp">
          <img className="loggo" src={dropshipping} alt="" />
          <p className="dropshipping">Drop Shipping</p>
          <div className="webtag">
          <p>
            &nbsp; &nbsp;&nbsp;We deliver <br />  &nbsp; responsive web <br />
            &nbsp; apps, sites and a <br />  &nbsp; seamless mobile <br />   experience for iOS{" "}
              <br />  &nbsp;  &nbsp; &nbsp; and Android
            </p>
          </div>
        </div>
        <div className="graphics">
          <img className="loggo" src={graphicdesign} alt="" />
          <p className="graphicdesign">Graphic Design</p>
          <div className="webtag">
          <p>
            &nbsp; &nbsp;&nbsp;We deliver <br />  &nbsp; responsive web <br />
            &nbsp; apps, sites and a <br />  &nbsp; seamless mobile <br />   experience for iOS{" "}
              <br />  &nbsp;  &nbsp; &nbsp; and Android
            </p>
          </div>
        </div>
        <div className="pint">
          <img className="loggo" src={pinterest} alt="" />
          <p className="pinterest">Pinterest</p>
          <div className="webtag">
            <p>
            &nbsp; &nbsp;&nbsp;We deliver <br />  &nbsp; responsive web <br />
            &nbsp; apps, sites and a <br />  &nbsp; seamless mobile <br />   experience for iOS{" "}
              <br />  &nbsp;  &nbsp; &nbsp; and Android
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

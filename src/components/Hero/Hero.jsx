import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in twon</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
        </div>
        <div>
          <span>
            in here we will help you to shape and build your ideal body and live
            up you life to fullest
          </span>
        </div>
      </div>
      <div className="right-h">right</div>
    </div>
  );
};

export default Hero;

import React from "react";
import "./Home.css";
import Me from "../../assets/me.png";

function Home() {
  return (
    <div className="info" id="home">
      <div className="left">
        <div className="lWrapper">
          <h2 className="intro">Hello, My name is</h2>
          <h1 className="name">Justin Stokes</h1>

          <div className="title">
            <div className="tWrapper">
              <div className="item">Software Developer</div>
              <div className="item">Web Designer</div>
              <div className="item">Content Creator</div>
              <div className="item">Avid Gamer</div>
            </div>
          </div>

          <div className="description">
            Hi, Im Justin. A passionate Full-Stack Web Developer, with a knack
            for creating digital experiences. Currently, Im focused on building
            accesible, human-friendly applications.
          </div>
        </div>
      </div>

      <div className="right">
        <div className="r-bg"></div>
        <img src={Me} alt="Justin Stokes" className="rImage" />
      </div>
    </div>
  );
}

export default Home;

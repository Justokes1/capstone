import React from "react";
import "./About.css";
import tanker from "../../assets/tanker.jpeg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="a-left">
        <div className="card bg"></div>
        <div className="card">
          <img src={tanker} alt="tanker" className="a-img" />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hi, Im Justin. I build websites and applications. I live in Charlotte,
          NC but I call many places home. I am a techie and am interested in
          many things tech related.
        </p>

        <p className="a-desc">
          I dont like to define myself by the work ive done. I define myself by
          the work I want to do. Skills can be taught, personality is inherent.
          I prefer to keep learning, continue challenging myself, and do
          interesting things that matter.
        </p>
      </div>
    </div>
  );
};

export default About;

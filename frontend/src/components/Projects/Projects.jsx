import React from "react";
import { SliderData } from "./SlideData";
import "./Projects.css";

function Projects({ slides }) {
  return (
    <div className="product-container" id="Projects">
      <div className="products">
        {SliderData.map((slide) => {
          return (
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="front">
                  <img src={slide.img} alt="test" />
                </div>
                <div className="back">
                  <h1 className="name">{slide.title}</h1>
                  <h2 className="description">{slide.description}</h2>
                  <h3 className="price">
                    <button>
                      <a href={slide.link}>Visit Website</a>
                    </button>
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

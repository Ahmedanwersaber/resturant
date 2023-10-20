import React from "react";
import about from '../../assets/images/1.png';
import './About.css'
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={about} title="about-img" />
          </div>
          <div className="col-md-6">
            <h2>We pride ourselves on making real food from the best ingredients.</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
             </p>
             <button><a href="#about">Learn More</a></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;

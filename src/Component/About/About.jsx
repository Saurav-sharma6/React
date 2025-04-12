import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <p>
          Welcome to ProVision, your premier destination for all things
          dashcams. We're dedicated to providing you with the best dashcams,
          emphasizing quality, reliability, and innovative features.
        </p>
        <p>
          Founded in 2024 by Lambton College Students, ProVision has evolved
          significantly since its inception in Canada. Initially driven by a
          passion for vehicle safety and technology, our team has grown into a
          leading provider of dashcams.
        </p>
        <p>
          We hope you enjoy browsing our selection of dashcams as much as we
          enjoy offering them to you. From basic models to advanced AI-powered
          dashcams, we cater to all your vehicle safety needs. If you have any
          questions or comments, please don't hesitate to contact us.
        </p>
        <p className="signature">Sincerely,</p>
        <p className="signature-name">Lambton</p>
      </div>
    </div>
  );
};

export default About;

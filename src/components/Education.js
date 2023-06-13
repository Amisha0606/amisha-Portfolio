import React from "react";
import "./styles.css";

import "aos/dist/aos.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h1>Education</h1>
      <div className="education-container">
        <div className="education-item" data-aos="zoom-in">
          <h2>Bachelor of Technology -ECE</h2>
          <h5>JSS Academy of Technical Eduaction</h5>
          <h3>2020-2024</h3>
        </div>
        <div className="education-item" data-aos="zoom-in">
          <h2>Intermediate | CBSE</h2>
          <h5>Red Eagle Public School</h5>
          <h3>2017-2019</h3>
        </div>
        {/* <div className="education-item" data-aos="zoom-in">
          <h2>High School | CBSE</h2>
          <h5>Red Eagle Public School</h5>
          <h3>2015-2017</h3>
        </div> */}
      </div>
    </section>
  );
};

export default Education;

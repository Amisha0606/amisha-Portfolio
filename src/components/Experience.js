import React from "react";
import "./styles.css";

import "aos/dist/aos.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h1>Work Experience</h1>
      <div className="experience-container">
        <div className="experience-item" data-aos="fade-right">
          <h3>Frontend Developer</h3>
          <h5>Systaldyn | Sept 2022- Nov 2022</h5>
          <p>
            - <b>React, HTML, CSS Javascript, Figma</b> <br />
            - Worked on a statistics storing website <br />- Used APIs and
            implemented charts, tables, maps, etc.
          </p>
        </div>
        <div className="experience-item" data-aos="fade-left">
          <h3>Community Manager</h3>
          <h5>Bluelearn | Jan 2021- present</h5>
          <p>
            - <b>Communication, Management, Networking</b>
            <br />
            - Leading English club aend engaging with the members <br />
            - Organising events and hackathons, user engagement
          </p>
        </div>
        <div className="experience-item" data-aos="fade-right">
          <h3>Content Writer</h3>
          <h5>Freelancing | Nov 2020- Aug 2021</h5>
          <p>
            - <b>Writing, Researching, Documentation</b><br/>
            - Worked fo brands like Brainly.com, curated educational content <br />
            - Wrote technical and non-technical articles, blogs, emails, etc.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Experience;
import React from "react";
import "./styles.css";

import "aos/dist/aos.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h1>Work Experience</h1>
      <div className="experience-container">
        <div className="experience-item" data-aos="fade-right">
          <h3>Research Intern</h3>
          <h5>INMAS labs, DRDO | Sept 2022- April 2023</h5>
          <p>
            - <b>Unity, C-sharp, Documentation</b> <br />
            - Developed a desktop-based Aim Training Game <br />- Conducted a
            human subject study to determine the effect of the game and its
            attention enhancement capabilities
          </p>
        </div>
        <div className="experience-item" data-aos="fade-right">
          <h3>Frontend Developer</h3>
          <h5>Systaldyn | Sept 2022- Nov 2022</h5>
          <p>
            - <b>React, HTML, CSS,Javascript, Figma</b> <br />
            - Developed a front-end project for data storage and analysis
            <br />- Integrated APIs and implemented libraries for adding charts,
            tables, maps, etc.
          </p>
        </div>
        <div className="experience-item" data-aos="fade-left">
          <h3>Community Manager</h3>
          <h5>Bluelearn | Jan 2021- April 2023</h5>
          <p>
            - <b>Communication, Management, Networking</b>
            <br />
            - Led the esteemed English club, actively fostered member engagement{" "}
            <br />- Organized and coordinated engaging events and hackathons,
            ensuring high user participation and interaction
          </p>
        </div>
        <div className="experience-item" data-aos="fade-right">
          <h3>Content Writer</h3>
          <h5>Freelancing | Nov 2020- Aug 2021</h5>
          <p>
            - <b>Writing, Researching, Documentation</b>
            <br />- Worked for brands like Brainly.com, curated educational and technical
            content <br />- Wrote technical and non-technical articles, blogs,
            emails, etc.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Experience;
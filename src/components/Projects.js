import React from "react";
import "./styles.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-container">
        <div className="project-item">
          <h3>Statistics Storing Website</h3>
          <p>
            - <b>ReactJS, HTML, CSS</b>
            <br />
            - A desktop based platform for storing data for businesses 
            <br />- Imlementation of maps, charts, table etc.
          </p>
          <div>
            <a
              href="https://statistics-storing-site.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
            <a
              href="https://github.com/Amisha0606/Statistics-Storing-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
        <div className="project-item">
          <h3>Personal Portfolio</h3>
          <p>
            - <b>ReactJS, HTML, CSS</b>
            <br />
            - My portfolio website consisting all the required information
            <br />- Use of APIs and CSS Animations, fully responsive
          </p>
          <div>
            <a
              href="https://amisha-pandey.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
            <a
              href="https://github.com/Amisha0606/amisha-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
        <div className="project-item">
          <h3>Spotify Web Page</h3>
          <p>
            - <b>ReactJS, HTML, CSS</b>
            <br />
            - Webpage format of the music app "Spotify"
            <br />- Play, pause and change the songs, Responsive
          </p>
          <div>
            <a
              href="https://spotify-clone-by-amisha.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              Code
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

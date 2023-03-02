import React from "react";
import "./styles.css";

import "aos/dist/aos.css";

import { IconContext } from "react-icons";
import { FaHtml5, FaCss3Alt, FaFileAlt } from "react-icons/fa";
import { GiPublicSpeaker } from "react-icons/gi";
import { MdPeopleOutline } from "react-icons/md";
import {
  SiReact,
  SiCplusplus,
  SiMaterialui,
  SiJavascript,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1>My Skills</h1>
      <div className="skills-container" data-aos="zoom-in">
        <div className="skill-item">
          {/* <img src="/skillslogo/HTML.png" alt="" className="skill-img" /> */}
          <IconContext.Provider value={{ color: "white", size: "6.5rem" }}>
            <FaHtml5 />
          </IconContext.Provider>
          <h4>HTML</h4>
        </div>
        <div className="skill-item">
          {/* <img src="/skillslogo/css.png" alt="" className="skill-img" /> */}
          <IconContext.Provider value={{ color: "white", size: "6.5rem" }}>
            <FaCss3Alt />
          </IconContext.Provider>
          <h4>CSS</h4>
        </div>
        <div className="skill-item">
          {/* <img src="/skillslogo/javascript.png" alt="" className="skill-img" /> */}
          <IconContext.Provider value={{ color: "white", size: "5.5rem" }}>
            <SiJavascript />
          </IconContext.Provider>
          <h4>JavaScript</h4>
        </div>
        <div className="skill-item">
          {/* <img src="/skillslogo/react.png" alt="" className="skill-img" /> */}
          <IconContext.Provider value={{ color: "white", size: "6.5rem" }}>
            <SiReact />
          </IconContext.Provider>
          <h4>React</h4>
        </div>
        <div className="skill-item">
          {/* <img src="/skillslogo/materialUI.png" alt="" className="skill-img" /> */}
          <IconContext.Provider value={{ color: "white", size: "6.5rem" }}>
            <SiMaterialui />
          </IconContext.Provider>
          <h4>Material Ui</h4>
        </div>
        <div className="skill-item">
          {/* <img src="/skillslogo/cpp.png" alt="" className="skill-img" /> */}
          <IconContext.Provider value={{ color: "white", size: "6.5rem" }}>
            <SiCplusplus />
          </IconContext.Provider>
          <h4>C++</h4>
        </div>
        <div className="skill-item">
          <IconContext.Provider value={{ color: "white", size: "6.5rem" }}>
            <GiPublicSpeaker />
          </IconContext.Provider>
          <h4>Public Speaking</h4>
        </div>
        <div className="skill-item">
          <IconContext.Provider value={{ color: "white", size: "6.5rem" }}>
            <MdPeopleOutline />
          </IconContext.Provider>
          <h4>Community</h4>
        </div>
        <div className="skill-item">
          <IconContext.Provider value={{ color: "white", size: "6.5rem" }}>
            <FaFileAlt />
          </IconContext.Provider>
          <h4>Documentation</h4>
        </div>
      </div>
    </section>
  );
};

export default Skills;

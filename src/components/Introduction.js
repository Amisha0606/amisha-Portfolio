import React, { useEffect } from "react";
import "./Introduction.css";
import "./styles.css";

import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section id="introduction" className="container">
        <div className="container_content">
          <div className="container_content_inner" data-aos="fade-right">
            <div>
              <h1>Hello!</h1>
            </div>
            <div className="par">
              <p>
                I'm a front-end web developer interested in{" "}
                <b>machine learning</b> and <b>photography</b>. I am active in
                several tech communities and love to build connections. I have
                worked as a <b>freelance content writer</b> and Community
                Manager at <b>Bluelearn</b>. <br />
                Building websites and reading books is my favourite hobby.{" "}
                <br />
                Also, I love doughnuts.
                <br />
                <br />
                Hit me up at:{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=pamisha0606@gmail.com
            &su=Regarding Frontend Web Developer Role.
            &body=Hey! How are you? I'm <Your Name Here>. 
            I'm looking for a Frontend Web Developer for my project. Are you available?
            <BODY here>"
                  target="_blank"
                  className="email"
                >
                  <u>pamisha0606@gmail.com</u>
                </a>
              </p>
            </div>
            <div className="btns">
              <button className="btns_more">
                {" "}
                <a
                  href="https://drive.google.com/file/d/12DIUw6r8BMTFDG1TtEl6S9iyUeCF2zwG/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="container_outer_img">
          <div class="img-inner" data-aos="fade-left">
            <img
              src="/skillslogo/myPicture2.jpeg"
              alt=""
              class="container_img"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

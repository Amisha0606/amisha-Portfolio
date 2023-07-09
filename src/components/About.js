import React from "react";
import "./styles.css";


import $ from "jquery"; 

var words = [
    "Heyo! This is Amisha.",
    "I am a Frontend Web Developer.",
    "I have worked as a community managar @Bluelearn.",
    "I can write technical articles.",
    "I love building websites & connections.",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 80;
var wordflick = function() {
  setInterval(function() {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

$(document).ready(function() {
  wordflick();
});

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* <div className="name"> I'm Amisha</div> */}
      <div class="word"></div>
    </section>
  );
};

export default About;

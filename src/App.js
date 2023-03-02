import './App.css';
import React, { useState } from "react";
import "./components/styles.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="App">
      <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />

      <About />
      <Introduction />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Footer />
      {/* <Contact /> */}
    </div>
  );
}

export default App;

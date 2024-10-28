import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Experience from "./component/Experience";
import "aos/dist/aos.css";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import GoToTop from "./component/GoToTop";

const App = () => {
  return (
    <>
      <div>
        <GoToTop/>
        <Navbar />
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;

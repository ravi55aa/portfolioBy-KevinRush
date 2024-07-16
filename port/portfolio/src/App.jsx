import React from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import AboutMe from "./component/AboutMe";
import TechNologies from "./component/TechNologies";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Contact from "./component/Contact.";
function App() {
  return (
    <>
      <div
        className="overflow-x-hidden text-neutral-300 antialiased 
                      selection:bg-cyan-300 selection:text-cyan-900"
      >
        {/* entire screen */}
        <div className=" fixed top-0 -z-10 w-full h-full "></div>
        <div className="  absolute top-0 z-[-2] max-h-max w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          {/* component screen */}
          <div className=" container mx-auto px-8">
            <NavBar />
            <Hero />
            <AboutMe />
            <TechNologies />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

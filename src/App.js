import { useRef } from "react";

import SideLabel from "./views/components/SideLabel";
import NavButton from "./views/components/NavButton";

import About from "./views/About";
import Hero from "./views/Hero";
import Projects from "./views/Projects";

import "./App.css";

function App() {
  const heroSection = useRef(null);
  const projectsSection = useRef(null);
  const aboutSection = useRef(null);

  const scrollToSection = (ref) => {
    document.getElementById("parent").scrollTo({ left: ref.current.offsetLeft, behavior: "smooth" });
  };

  return (
    <div className="hidesb1 hidesb2">
      <div id="parent" className="parent">
        <section ref={heroSection}>
          <SideLabel text="Hero" />
          <Hero />
        </section>

        <section ref={projectsSection}>
          <SideLabel text="Projects" />
          <Projects />

          {/* Lower navigation buttons. */}
          <div className="bottom-buttons">
            <NavButton onClick={() => scrollToSection(heroSection)} />
            <NavButton onClick={() => scrollToSection(projectsSection)} />
            <NavButton onClick={() => scrollToSection(aboutSection)} />
          </div>
        </section>

        <section ref={aboutSection}>
          <SideLabel text="About" />
          <About />
        </section>

      </div>
    </div>
  );
}

export default App;

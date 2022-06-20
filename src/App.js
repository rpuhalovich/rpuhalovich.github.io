import { useRef } from "react";

import SideLabel from "./views/components/SideLabel";
import NavButton from "./views/components/NavButton";

import About from "./views/About";
import Hero from "./views/Hero";
import Projects from "./views/Projects";

import "./App.css";

function App() {
  return (
    <div className="hidesb1 hidesb2">
      {/* TODO: Implement side scroll snapping. */}
      <div className="parent">

        <section>
          <SideLabel text="Hero" />
          <Hero />
        </section>

        <section>
          <SideLabel text="Projects" />
          <Projects />
        </section>

        <section>
          <SideLabel text="About" />
          <About />
        </section>

        {/* Lower navigation buttons. */}
        {/* <div className="bottom-buttons">
          <NavButton onClick={() => scroll(0)} />
          <NavButton onClick={() => scroll(1)} />
          <NavButton onClick={() => scroll(2)} />
        </div> */}
      </div>
    </div>
  );
}

export default App;

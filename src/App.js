import React, { useEffect } from "react";

import Hero from "./views/Hero";
import About from "./views/About";
import Projects from "./views/Projects";

import layerTop from "./res/layer-top.svg";

import "./App.css";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <img src={layerTop} alt="layer top" /> */}

      <div className="appContainer">
        <section className="view1">
          <div className="headerContainer">
            <div>
              <Hero />
            </div>
          </div>
        </section>

        <section className="view2">
          <Projects />
        </section>

        <section className="view3">
          <About />
        </section>
      </div>
    </>
  );
}

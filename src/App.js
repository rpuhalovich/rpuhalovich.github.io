import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import RPCard from "./views/components/RPCard";
import Hero from "./views/Hero";
import About from "./views/About";

import "./App.css";

export default function App() {
  const [showArrow, setShowArrow] = useState(true);

  const handleScroll = (e) => {
    if (window.screenY !== 0) {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div onScroll={handleScroll}>
        <div className="appGridContainer">
          <div className="downArrowContainer" onClick={() => window.scrollByPages(1)}>
            {showArrow ? (
              <ExpandMoreIcon className="downArrow fadeInArrow" />
            ) : (
              <ExpandMoreIcon className="downArrow fadeOutArrow" />
            )}
          </div>

          <section className="view1">
            <div className="headerContainer">
              <div className="header">
                <Hero />
              </div>
            </div>
          </section>

          <section className="view2 view2Columns">
            <div className="projectsContainer">
              <div className="projects">
                <p className="subHeader">
                  <span className="smolSpace">##</span>Projects
                </p>
              </div>
            </div>

            <div className="cardsContainer">
              <RPCard className="oglp">
                <div
                  className="cardContainerHorizontal flexDirection"
                  onClick={() => window.open("https://github.com/rpuhalovich/OpenGLPathfinder")}
                >
                  <img
                    className="cardImage cardImageSizeHorizontal"
                    src={require("./res/openGLPathfinder.png")}
                    alt="OpenGL Pathfinder"
                    width="1291"
                    height="715"
                  />
                  <div>
                    <h3>OpenGL Pathfinder</h3>
                    <p>A BFS shortest path algorithm, written in C++ using raw OpenGL.</p>
                    <p className="Monospace">C++;CMake;OpenGL;DSA</p>
                  </div>
                </div>
              </RPCard>
            </div>

            <div className="cardsContainer marginTop2em">
              <RPCard className="loap">
                <div
                  className="cardContainerHorizontal flexDirection"
                  onClick={() => window.open("https://github.com/rpuhalovich/life_of_a_programmer.exe")}
                >
                  <img
                    className="cardImage cardImageSizeHorizontal"
                    src={require("./res/loap.png")}
                    alt="life_of_a_programmer.exe"
                    width="1920"
                    height="1080"
                  />
                  <div>
                    <h3>life_of_a_programmer.exe</h3>
                    <p>A metaphorical game about running through code to catch the bug at the end of the level.</p>
                    <p className="Monospace">C#;Unity</p>
                  </div>
                </div>
              </RPCard>
            </div>

            <div className="cardsContainer marginTop2em">
              <RPCard className="vpeq">
                <div
                  className="cardContainerVertical flexDirection"
                  onClick={() => window.open("https://github.com/rpuhalovich/VPEQ")}
                >
                  <img
                    className="cardImage cardImageSizeVertical"
                    src={require("./res/vpeq.png")}
                    alt="VPEQ"
                    width="640"
                    height="650"
                  />
                  <div>
                    <h3>VPEQ</h3>
                    <p>
                      A parametric equalizer made using the VSTSDK framework. Contains implementations of various DSP
                      concepts.
                    </p>
                    <p className="Monospace">C++;CMake;VSTSDK;DSP</p>
                  </div>
                </div>
              </RPCard>
            </div>

            <div className="cardsContainer marginTop2em">
              <RPCard className="rayTracer">
                <div
                  className="cardContainerVertical flexDirection"
                  onClick={() => window.open("https://github.com/rpuhalovich/CSharpRayTracer")}
                >
                  <img
                    className="cardImage cardImageSizeVertical"
                    src={require("./res/raytracer.png")}
                    alt="C# Ray Tracer"
                    width="640"
                    height="650"
                  />
                  <div>
                    <h3>C# Ray Tracer</h3>
                    <p>
                      A ray tracer written in C#. Contains implementations of depth of field, reflection, refraction and
                      the Fresnel effect.
                    </p>
                    <p className="Monospace">C#;Visual Studio</p>
                  </div>
                </div>
              </RPCard>
            </div>
          </section>

          <section className="view3 view3Columns">
            <About />
          </section>
        </div>
      </div>
    </>
  );
}

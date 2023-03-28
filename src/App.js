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
        <div className="appContainer">
          {/* <div className="downArrowContainer" onClick={() => window.scrollByPages(1)}>
            {(window.screenX >= 750) &
              (showArrow ? (
                <ExpandMoreIcon className="downArrow fadeInArrow" />
              ) : (
                <ExpandMoreIcon className="downArrow fadeOutArrow" />
              ))}
          </div> */}

          <section className="view1">
            <div className="headerContainer">
              <div>
                <Hero />
              </div>
            </div>
          </section>

          <section className="view2">
            <div className="projectsContainer">
              <div className="titleContainer">
                <div className="title">
                  <p className="subHeader">
                    <span className="smolSpace">##</span>Projects
                  </p>
                </div>
              </div>

              <RPCard
                className="openGLPathfinderCard"
                onClick={() => window.open("https://github.com/rpuhalovich/OpenGLPathfinder")}
              >
                <div className="cardContentContainer">
                  <img
                    className="cardImage"
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

              <RPCard
                className="rayTracerCard"
                onClick={() => window.open("https://github.com/rpuhalovich/OpenGLPathfinder")}
                style={{ marginTop: "2em" }}
              >
                <div className="cardContentContainer">
                  <img
                    className="cardImage"
                    src={require("./res/raytracer.png")}
                    alt="C# Ray Tracer"
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
          </section>

          <section className="view3">
            <About />
          </section>
        </div>
      </div>
    </>
  );
}

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
                imgSrc={require("./res/openGLPathfinder.png")}
                imgAlt={"OpenGL Pathfinder"}
                imgWidth={"1291"}
                imgHeight={"715"}
                header={"OpenGL Pathfinder"}
                description={"A BFS shortest path algorithm, written in C++ using raw OpenGL."}
                tech={"C++;CMake;OpenGL;DSA"}
              />

              <RPCard
                className="lifeOfAProgrammer"
                onClick={() => window.open("https://github.com/rpuhalovich/OpenGLPathfinder")}
                style={{ marginTop: "2em" }}
                imgSrc={require("./res/loap.jpg")}
                imgAlt={"life_of_a_programmer.exe"}
                imgWidth={"1920"}
                imgHeight={"1080"}
                header={"life_of_a_programmer.exe"}
                description={"A metaphorical game about running through code to catch the bug at the end of the level."}
                tech={"C#;Unity"}
              />

              <RPCard
                className="rayTracerCard"
                onClick={() => window.open("https://github.com/rpuhalovich/OpenGLPathfinder")}
                style={{ marginTop: "2em" }}
                imgSrc={require("./res/raytracer.png")}
                imgAlt={"C# Ray Tracer"}
                imgWidth={"1000"}
                imgHeight={"1000"}
                header={"C# Ray Tracer"}
                description={
                  "A ray tracer written in C#. Contains implementations of depth of field, reflection, refraction and the Fresnel effect."
                }
                tech={"C#;Visual Studio"}
              />

              <RPCard
                className="vpeqCard"
                onClick={() => window.open("https://github.com/rpuhalovich/VPEQ")}
                style={{ marginTop: "2em" }}
                imgSrc={require("./res/vpeq.png")}
                imgAlt={"VPEQ"}
                imgWidth={"640"}
                imgHeight={"650"}
                header={"VPEQ"}
                description={
                  "A parametric equalizer made using the VSTSDK framework. Contains implementations of various DSP concepts."
                }
                tech={"C++;CMake;VSTSDK;DSP"}
              />
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

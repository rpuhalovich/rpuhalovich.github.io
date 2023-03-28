import React from "react";

import RPCard from "./components/RPCard";

import "./Projects.css";

function Projects() {
  return (
    <>
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
          imgSrc={require("./../res/openGLPathfinder.png")}
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
          imgSrc={require("./../res/loap.jpg")}
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
          imgSrc={require("./../res/raytracer.png")}
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
          style={{ marginTop: "2em", marginBottom: "2em" }}
          imgSrc={require("./../res/vpeq.png")}
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
    </>
  );
}

export default Projects;

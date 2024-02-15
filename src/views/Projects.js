import React from "react";

import RPCard from "./components/RPCard";

import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="projectsContainer">
        <div className="titleContainer">
          <div className="title">
            <p className="subHeader">Work Experience</p>
          </div>
        </div>

        <RPCard
          className="gyg"
          description={"Backend AWS engineer on the GYG app."}
          header={"Guzman y Gomez"}
          imgAlt={"Guzman y Gomez"}
          imgWidth={"512"}
          imgHeight={"512"}
          imgSrc={require("./../res/gyg.png")}
          onClick={() => window.open("https://www.guzmanygomez.com.au/the-new-gyg-app-is-here/")}
          tech={"TypeScript;AWS;Serverless"}
        />

        <RPCard
          className="origin"
          description={"Fullstack engineer who built cost forecasting software for Origin Energy."}
          header={"Origin Energy"}
          imgAlt={"Origin Energy"}
          imgWidth={"450"}
          imgHeight={"300"}
          imgSrc={require("./../res/origin.png")}
          onClick={() => window.open("https://www.originenergy.com.au/")}
          style={{ marginTop: "2em" }}
          tech={"JavaScript"}
        />

        <RPCard
          className="gpt"
          description={"Fullstack engineer on internal permissions auditing software for GPT Group."}
          header={"GPT Group"}
          imgAlt={"GPT Group"}
          imgWidth={"500"}
          imgHeight={"290"}
          imgSrc={require("./../res/gpt.png")}
          onClick={() => window.open("https://www.gpt.com.au/")}
          style={{ marginTop: "2em" }}
          tech={"JavaScript"}
        />

        <div className="titleContainer" style={{ marginTop: "2em" }}>
          <div className="title">
            <p className="subHeader">Projects</p>
          </div>
        </div>

        <RPCard
          className="loap"
          description={"A metaphorical game about running through code to catch the bug at the end of the level."}
          header={"life_of_a_programmer.exe"}
          imgAlt={"life_of_a_programmer.exe"}
          imgHeight={"1080"}
          imgSrc={require("./../res/loap.jpg")}
          imgWidth={"1920"}
          onClick={() => window.open("https://github.com/rpuhalovich/life_of_a_programmer.exe")}
          tech={"C#;Unity"}
        />

        <RPCard
          className="openGLPathfinderCard"
          description={"A BFS shortest path algorithm, written in C++ using OpenGL."}
          header={"OpenGL Pathfinder"}
          imgAlt={"OpenGL Pathfinder"}
          imgHeight={"715"}
          imgWidth={"1291"}
          imgSrc={require("./../res/openGLPathfinder.png")}
          onClick={() => window.open("https://github.com/rpuhalovich/OpenGLPathfinder")}
          style={{ marginTop: "2em" }}
          tech={"C++;CMake;OpenGL;DSA"}
        />

        <RPCard
          className="rayTracerCard"
          description={
            "A ray tracer written in C#. Contains implementations of depth of field, reflection, refraction and the Fresnel effect."
          }
          header={"C# Ray Tracer"}
          imgAlt={"C# Ray Tracer"}
          imgHeight={"1000"}
          imgWidth={"1000"}
          imgSrc={require("./../res/raytracer.png")}
          onClick={() => window.open("https://github.com/rpuhalovich/CSharpRayTracer")}
          style={{ marginTop: "2em" }}
          tech={"C#;Visual Studio"}
        />

        <RPCard
          className="vpeqCard"
          description={
            "A parametric equalizer made using the VSTSDK framework. Contains implementations of various DSP concepts."
          }
          header={"VPEQ"}
          imgAlt={"VPEQ"}
          imgHeight={"650"}
          imgWidth={"640"}
          imgSrc={require("./../res/vpeq.png")}
          onClick={() => window.open("https://github.com/rpuhalovich/VPEQ")}
          style={{ marginTop: "2em" }}
          tech={"C++;CMake;VSTSDK;DSP"}
        />

        <RPCard
          className="letCommentsAreBadCard"
          description={"A talk I did at the Google Developer Group in Melbourne about coding standards."}
          header={"let commentsAreBad = true;"}
          imgAlt={"let commentsAreBad = true;"}
          imgHeight={"720"}
          imgWidth={"1280"}
          imgSrc={require("./../res/lcabet.jpg")}
          onClick={() => window.open("https://www.youtube.com/watch?v=ls4IsufyE2E")}
          style={{ marginTop: "2em" }}
          tech={"Google Docs;Public Speaking"}
        />

        <div
          style={{
            marginTop: "1em",
            width: "100%",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <div style={{ width: "fit-content" }}>
            <p onClick={() => window.open("https://github.com/rpuhalovich/rpuhalovich.github.io")} className="footNote">
              And, of course, this little website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

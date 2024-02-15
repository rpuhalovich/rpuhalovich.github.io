import React from "react";

import RPButton from "./components/RPButton";

import "./About.css";

function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="imgContainer">
          <div className="selfie" />
        </div>
        <div className="contentContainer">
          <p className="aboutText">Just a guy who likes to tinker with computers, coffee in hand.</p>
          <RPButton style={{ marginRight: "1em" }} onClick={() => window.open("https://github.com/rpuhalovich")}>
            GitHub
          </RPButton>
          <RPButton onClick={() => window.open("https://www.linkedin.com/in/ryan-puhalovich/")}>LinkedIn</RPButton>
        </div>
      </div>
    </>
  );
}

export default About;

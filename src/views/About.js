import React from "react";

import RPButton from "./components/RPButton";

import "./About.css";

function About() {
  return (
    <>
      <div>
        <div className="aboutContainer">
          <div className="imgContainer">
            <div className="selfie" />
          </div>
          <div className="contentContainer">
            <p>Just a guy who likes to tinker with computers.</p>

            <RPButton style={{ marginRight: "1em" }} onClick={() => window.open("https://github.com/rpuhalovich")}>
              GitHub
            </RPButton>
            <RPButton onClick={() => window.open("https://www.linkedin.com/in/ryan-puhalovich/")}>Linkedin</RPButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
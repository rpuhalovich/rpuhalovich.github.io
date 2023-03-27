import React from "react";

import RPButton from "./components/RPButton";

import "./About.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="aboutContainer flexDirection">
          <div>
            <div className="selfie imgRightGap" />
          </div>
          <div className="centerText">
            <p className="Paragraph">Just a guy who likes to tinker with computers.</p>

            <RPButton onClick={() => window.open("https://github.com/rpuhalovich")}>GitHub</RPButton>
            <RPButton className="buttonGap" onClick={() => window.open("https://www.linkedin.com/in/ryan-puhalovich/")}>
              Linkedin
            </RPButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

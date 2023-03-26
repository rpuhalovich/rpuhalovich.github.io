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
            <p className="Paragraph">
              Aliqua commodo deserunt tempor nulla non ut proident consequat esse laborum nostrud. Dolore laboris
              consequat enim commodo ipsum minim. Amet magna eu cupidatat sint in veniam Lorem ex. Fugiat ea ea sit sint
              anim voluptate aliquip officia do. Do incididunt excepteur nulla ipsum deserunt laboris dolore officia
              sit. Nostrud commodo excepteur anim ea ex occaecat laboris non nisi adipisicing nulla.
            </p>

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

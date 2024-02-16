import React from "react";

import "./Hero.css";

function Hero() {
  return (
    <>
      <p className="title header">Ryan Puhalovich</p>
      <p className="subHeader" style={{ marginBottom: "0em" }}>
        Software Engineer.
      </p>
      <p className="subHeader" style={{ marginTop: ".2em" }}>
        Not just frontend, not just backend.
      </p>
    </>
  );
}

export default Hero;

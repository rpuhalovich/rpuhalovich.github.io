import React from "react";

import RPButton from "./views/components/RPButton";
import RPCard from "./views/components/RPCard";

import "./App.css";

function App() {
  return (
    <>
      <div className="app-grid-container">
        <RPButton onClick={() => alert("Hey there.")}>rpuhalovich.github.com</RPButton>
        <br />
        <RPCard>
          {/* <img
            style={{ width: "500px", height: "500px" }}
            src={require("./res/demoImage.png")}
            alt="OpenGLPathfinder"
          /> */}
          <p>Hey there from inside a p tag.</p>
        </RPCard>
      </div>
    </>
  );
}

export default App;

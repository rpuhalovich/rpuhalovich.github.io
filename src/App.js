import React from "react";

import RPButton from "./views/components/RPButton";
import RPCard from "./views/components/RPCard";

import "./App.css";

function App() {
  return (
    <>
      <div className="app-grid-container">
        <div className="nameButton">
          <RPButton onClick={() => alert("Hey there.")}>rpuhalovich.github.com</RPButton>
        </div>

        <br />

        <div className="testCard">
          <RPCard>
            <p>Hey there from inside a p tag.</p>
          </RPCard>
        </div>
      </div>
    </>
  );
}

export default App;

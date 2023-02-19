import React from "react";

import RPButton from "./views/components/RPButton";
import RPCard from "./views/components/RPCard";

import "./App.css";

function App() {
  return (
    <>
      <div className="appGridContainer">
        <section className="view1 viewBounds appGridChild">
          <div className="headerContainer">
            <div className="header">
              {/* TODO: use media queries to make mobile friendly */}
              <p className="h3">
                <span className="h5">#</span>Ryan Puhalovich
              </p>
              {/* <p className="h5"><span className="h6">##</span>Algorithms Are Fun</p> */}
            </div>
          </div>
        </section>

        <section className="view2 viewBounds appGridChild">
          <div className="card">
            <RPCard>
              <p>Hey there from inside a p tag.</p>
            </RPCard>
          </div>
        </section>

        <section className="view3 viewBounds appGridChild">
          <RPButton onClick={() => window.open("https://github.com/rpuhalovich")}>Github</RPButton>
        </section>
      </div>
    </>
  );
}

export default App;

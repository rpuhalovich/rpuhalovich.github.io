import React from "react";

import RPButton from "./views/components/RPButton";
import RPCard from "./views/components/RPCard";

import "./App.css";

export default function App() {
  return (
    <>
      <div className="appGridContainer">
        <section className="view1">
          <div className="headerContainer">
            <div className="header">
              <p className="h3">
                <span className="h5">#</span>Ryan Puhalovich
              </p>
            </div>
          </div>
        </section>

        <section className="view2">
          <div className="cardContainer">
            <div className="card">
              <RPCard>
                <p>Hey there from inside a p tag.</p>
              </RPCard>
            </div>
          </div>
        </section>

        <section className="view3">
          <RPButton onClick={() => window.open("https://github.com/rpuhalovich")}>Github</RPButton>
        </section>
      </div>
    </>
  );
}

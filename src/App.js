import React from "react";

import RPCard from "./views/components/RPCard";
import Hero from "./views/Hero";
import About from "./views/About";

import "./App.css";

export default function App() {
  return (
    <>
      <div className="appGridContainer">
        <section className="view1">
          <div className="headerContainer">
            <div className="header">
              <Hero />
            </div>
          </div>
        </section>

        <section className="view2">
          <div className="cardsContainer">
            <RPCard className="cardContainer blueCard">
              <p>Hey there from a blue card.</p>
            </RPCard>
          </div>

          <div className="cardsContainer cardGap">
            <RPCard className="cardContainer redCard">
              <p>Hey there from a red card.</p>
            </RPCard>
          </div>
        </section>

        <section className="view3 aboutContainer">
          <About />
        </section>
      </div>
    </>
  );
}

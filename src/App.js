import React from "react";

import RPButton from "./views/components/RPButton";
import RPCard from "./views/components/RPCard";
import Hero from "./views/Hero";

import "./App.css";

export default function App() {
  return (
    <>
      <div className="appGridContainer">
        <section className="view1">
          <div className="headerContainer">
            <Hero />
          </div>
        </section>

        <section className="view2">
          <div className="cardsContainer">
            <RPCard className="cardContainer">
              <p>Hey there from inside a p tag.</p>
            </RPCard>
          </div>
        </section>

        <section className="view3 aboutContainer">
          <div className="about">
            <div className="aboutContentContainer">
              <div>
                <div className="tmpimg" />
              </div>
              <div>
                <p>
                  Aliqua commodo deserunt tempor nulla non ut proident consequat esse laborum nostrud. Dolore laboris
                  consequat enim commodo ipsum minim. Amet magna eu cupidatat sint in veniam Lorem ex. Fugiat ea ea sit
                  sint anim voluptate aliquip officia do. Do incididunt excepteur nulla ipsum deserunt laboris dolore
                  officia sit. Nostrud commodo excepteur anim ea ex occaecat laboris non nisi adipisicing nulla.
                </p>

                <RPButton onClick={() => window.open("https://github.com/rpuhalovich")}>GitHub</RPButton>
                <RPButton className="buttonGap" onClick={() => window.open("https://github.com/rpuhalovich")}>
                  Linkedin
                </RPButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

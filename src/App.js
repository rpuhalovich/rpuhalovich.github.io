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
            <p className="h3 header">
              <span className="h5">#</span>Ryan Puhalovich
            </p>
            <p className="subHeader">
              <span className="">#</span> Software Dev
            </p>
          </div>
        </section>

        <section className="view2">
          <div>
            <RPCard className="cardGap">
              <p>Hey there from inside a p tag.</p>
            </RPCard>
            <RPCard className="cardGap bottomCard">
              <p>Hey there from inside another p tag.</p>
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
                {/* <RPButton className="buttonGap" onClick={() => window.open("mailto:reanpuhalovich@gmail.com")}>
                  Email
                </RPButton> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

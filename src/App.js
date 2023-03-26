import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import RPCard from "./views/components/RPCard";
import Hero from "./views/Hero";
import About from "./views/About";

import "./App.css";

export default function App() {
  const [showArrow, setShowArrow] = useState(true);

  const handleScroll = (e) => {
    if (window.screenY !== 0) {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div onScroll={handleScroll}>
        <div className="appGridContainer wave">
          <div className="downArrowContainer">
            {showArrow ? (
              <ExpandMoreIcon className="downArrow fadeInArrow" />
            ) : (
              <ExpandMoreIcon className="downArrow fadeOutArrow" />
            )}
          </div>

          <section className="view1">
            <div className="headerContainer">
              <div className="header">
                <Hero />
              </div>
            </div>
          </section>

          <section className="view2">
            <div className="cardsContainer">
              <RPCard className="blueCard">
                <p>Hey there from a blue card.</p>
              </RPCard>
            </div>
          </section>

          <section className="view2">
            <div className="cardsContainer">
              <RPCard className="blueCard cardGap">
                <p>Hey there from a blue card.</p>
              </RPCard>
            </div>
          </section>

          <section className="view2">
            <div className="cardsContainer">
              <RPCard className="blueCard cardGap">
                <p>Hey there from a blue card.</p>
              </RPCard>
            </div>
          </section>

          <section className="view3 aboutContainer">
            <About />
          </section>
        </div>
      </div>
      {/* <div className="wave" /> */}
    </>
  );
}

import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Hero from "./views/Hero";
import About from "./views/About";

import "./App.css";
import Projects from "./views/Projects";

export default function App() {
  const [showArrow, setShowArrow] = useState(true);

  const handleScroll = (e) => {
    if (window.screenY !== 0) {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div onScroll={handleScroll}>
        <div className="appContainer">
          {/* <div className="downArrowContainer" onClick={() => window.scrollByPages(1)}>
            {(window.screenX >= 750) &
              (showArrow ? (
                <ExpandMoreIcon className="downArrow fadeInArrow" />
              ) : (
                <ExpandMoreIcon className="downArrow fadeOutArrow" />
              ))}
          </div> */}

          <section className="view1">
            <div className="headerContainer">
              <div>
                <Hero />
              </div>
            </div>
          </section>

          <section className="view2">
            <Projects />
          </section>

          <section className="view3">
            <About />
          </section>
        </div>
      </div>
    </>
  );
}

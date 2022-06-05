import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useRef } from 'react';

import './App.css'

import NavButton from './views/components/NavButton';

import Hero from './views/Hero';

function App() {
  const parallaxRef = useRef();

  const scroll = (to) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(to);
    }
  }

  return (
    <div className='hidesb1 hidesb2'>
      <Parallax enabled={false} horizontal ref={parallaxRef} pages={3} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0}>
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <h2>Projects</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <h3>About</h3>
        </ParallaxLayer>

        <ParallaxLayer className='bottom-buttons' sticky={{ start: 0, end: 2 }}>
          <NavButton onClick={() => scroll(0)}/>
          <NavButton onClick={() => scroll(1)}/>
          <NavButton onClick={() => scroll(2)}/>
        </ParallaxLayer>
      </Parallax>

    </div>
  );
}

export default App;

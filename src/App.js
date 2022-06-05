import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

import './App.css'

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
      <Parallax horizontal ref={parallaxRef} pages={3} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0}>
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <h2>Projects</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <h3>About</h3>
        </ParallaxLayer>

        {/* Lower navigation buttons. */}
        <ParallaxLayer sticky={{ start: 0, end: 2 }}>
          <button onClick={() => scroll(0)}>scroll to hero</button>
          <button onClick={() => scroll(1)}>scroll to projects</button>
          <button onClick={() => scroll(2)}>scroll to about</button>
        </ParallaxLayer>
      </Parallax>

    </div>
  );
}

export default App;

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

import './App.css'

function App() {
  const parallaxRef = useRef();

  const scroll = (to) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(to);
    }
  }

  return (
    <Parallax horizontal ref={parallaxRef} pages={3} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0}>
        <p className='H1'>Hero</p>
        <button onClick={() => scroll(1)}>click to scroll</button>
      </ParallaxLayer>

      <ParallaxLayer offset={1}>
        <p className='H1'>Projects</p>
        <button onClick={() => scroll(2)}>click to scroll</button>
      </ParallaxLayer>

      <ParallaxLayer offset={2}>
        <p className='H1'>About</p>
        <button onClick={() => scroll(0)}>click to scroll</button>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;

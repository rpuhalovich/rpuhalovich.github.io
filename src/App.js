import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

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
      {/* // TODO: Implement side scroll snapping. */}
      <Parallax horizontal ref={parallaxRef} pages={3} style={{
        top: '0',
        left: '0',
        scrollSnapType: 'x mandatory',
        overflowX: 'scroll'  
      }}>
        {/* background */}
        <ParallaxLayer speed={1} style={{ scrollSnapAlign: 'start' }}>
          <img alt='' src={'../res/layer1.svg'} />
        </ParallaxLayer>

        <ParallaxLayer offset={0}>
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={1} style={{ scrollSnapAlign: 'start' }}>
          <h2>Projects</h2>
          <p className='Monospace'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Elit, faucibus eu ultrices morbi felis sagittis aliquam vitae amet.
            Id congue aliquet porta gravida fames porta amet.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={2} style={{ scrollSnapAlign: 'start' }}>
          <h3>About</h3>
        </ParallaxLayer>

        {/* Lower navigation buttons. */}
        <ParallaxLayer className='bottom-buttons' sticky={{ start: 0, end: 2 }}>
          <NavButton onClick={() => scroll(0)} />
          <NavButton onClick={() => scroll(1)} />
          <NavButton onClick={() => scroll(2)} />
        </ParallaxLayer>
      </Parallax>

    </div>
  );
}

export default App;

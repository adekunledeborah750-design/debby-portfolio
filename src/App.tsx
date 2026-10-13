import React from 'react';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export const App: React.FC = () => {
  return (
    <div style={{ background: "#0C0C0C", overflowX: "clip" }}>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;

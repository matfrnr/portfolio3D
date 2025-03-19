import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Parcours, StarsCanvas, BottomRightBanner, Terminal } from "./components";
import HeroMobile from './components/HeroMobile';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary pb-12'>
      <HeroMobile />

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Parcours />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <div className='lg:px-0 px-4'>
          <Terminal />
        </div>
        <BottomRightBanner />
      </div>
    </BrowserRouter>
  );
}

export default App;

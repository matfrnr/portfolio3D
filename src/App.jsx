import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar } from "./components";
import HeroMobile from './components/HeroMobile';

const About = lazy(() => import('./components/About'));
const Parcours = lazy(() => import('./components/Parcours'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));
const Terminal = lazy(() => import('./components/Terminal'));
const BottomRightBanner = lazy(() => import('./components/BottomRightBanner '));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

const LazyLoader = () => (
  <div className='flex justify-center items-center min-h-screen'>
    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#915EFF]'></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary pb-12'>
        <HeroMobile />

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <Suspense fallback={<LazyLoader />}>
          <About />
          <Parcours />
          <Experience />
          <Tech />
          <Works />
        </Suspense>

        <div className='relative z-0'>
          <Suspense fallback={<LazyLoader />}>
            <Contact />
            <StarsCanvas />
          </Suspense>
        </div>

        <div className='lg:px-0 px-4'>
          <Suspense fallback={<LazyLoader />}>
            <Terminal />
          </Suspense>
        </div>

        <Suspense fallback={null}>
          <BottomRightBanner />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;

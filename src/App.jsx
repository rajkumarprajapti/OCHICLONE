/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Ready from './components/Ready';

// locomotive lagane ke liye hum use kar rahe hai scroll.locomotive.ca se lya hai 
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotive = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900  text-white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Ready />
      <Footer />
    </div>
  )
}

export default App

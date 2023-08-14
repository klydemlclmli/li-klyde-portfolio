import React, { lazy, Suspense } from 'react'
import Navbar from '../components/nav/Navbar.jsx';
const Hero = lazy(() => import('../components/Hero.jsx'));
const About = lazy(() => import('../components/About.jsx'));
const Projects  = lazy(() => import('../components/Projects.jsx'));


function Home() {

  const sectionIds = {
    home: 'home',
    about: 'about',
    projects: 'projects',
    designs: 'designs',
    contact: 'contact',
  };
  
  return (
    <Suspense>
      <div className="flex flex-col w-full min-h-screen bg-main">
        <Navbar sectionIds={sectionIds}/>
        <Hero/>
        <About sectionIds={sectionIds}/>
        <Projects sectionIds={sectionIds}/>
        <div className="w-full h-[2827px] z-10" id={sectionIds.designs}></div>
        <div className="w-full h-[615px] bg-beige z-10" id={sectionIds.contact}></div>
      </div>
    </Suspense>
  )
}

export default Home
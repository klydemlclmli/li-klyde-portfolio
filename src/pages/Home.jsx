import React, { lazy } from 'react'
const Navbar = lazy(() => import('../components/nav/Navbar.jsx'));
const Hero = lazy(() => import('../components/hero/Hero.jsx'));
const About = lazy(() => import('../components/About.jsx'));


function Home() {

  const sectionIds = {
    home: 'home',
    about: 'about',
    projects: 'projects',
    designs: 'designs',
    contact: 'contact',
  };
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-main">
      <Navbar sectionIds={sectionIds}/>
      <Hero/>
      <About sectionIds={sectionIds}/>
      <div className="w-full h-[970px] bg-navy z-10" id={sectionIds.projects}></div>
      <div className="w-full h-[2827px] z-10" id={sectionIds.designs}></div>
      <div className="w-full h-[615px] bg-beige z-10" id={sectionIds.contact}></div>
    </div>
  )
}

export default Home
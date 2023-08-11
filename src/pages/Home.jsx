import React from 'react'
import Navbar from '../components/nav/Navbar.jsx'
import Hero from '../components/hero/Hero.jsx'


export default function Home() {

  const sectionIds = {
    about: 'about',
    projects: 'projects',
    designs: 'designs',
    contact: 'contact',
  };
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-main">
      <Navbar className="z-40" sectionIds={sectionIds}/>
      <Hero/>
      <div className="flex flex-col items-center justify-center font-syne text-9xl text-white w-full h-[970px] bg-black z-10" id={sectionIds.about}>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </div>
      <div className="w-full h-[970px] bg-beige z-10" id={sectionIds.projects}></div>
    </div>
  )
}
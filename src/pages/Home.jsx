import React from 'react'
import Navbar from '../components/nav/Navbar.jsx'
import Hero from '../components/hero/Hero.jsx'


export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-main">
      <Navbar className="z-40"/>
      <Hero/>
      <div className="w-full h-[970px] bg-black z-10"></div>
      <div className="w-full h-[970px] bg-beige z-10"></div>
    </div>
  )
}
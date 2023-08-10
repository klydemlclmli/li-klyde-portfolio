import React from 'react'
import Navbar from '../components/nav/Navbar.jsx'
import Hero from '../components/hero/Hero.jsx'


export default function Home() {
  return (
    <div className="items-center justify-center w-full min-h-screen bg-main">
      <Navbar className="z-40"/>
      <Hero/>
      <div className="absolute w-full h-[700px] bg-black z-10"></div>
    </div>
  )
}
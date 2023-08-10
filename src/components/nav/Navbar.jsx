import React from 'react'
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import NavbarBtn from './NavbarBtn';

export default function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <>
    <header className='flex items-center justify-center h-[136px] w-full py-[28px]'>

      <div className='absolute top-[28px] 
                      left-[28px] lg:left-[60px] xl:left-[131px]'>
        <a href="/#"><img src="images/KML.png" alt="logo" 
                      className='min-w-[70px] max-w-[70px]
                                md:min-w-[80px] md:max-w-[80px]'/>
        </a>
      </div>

      <div className='flex font-syne text-xl font-semibold pt-[28px] text-black
                      absolute top-[14px] lg:top-[28px] z-40
                      right-[40px] lg:right-[60px] xl:right-[133px]'>
        <nav className='flex items-center justify-center bg-black text-white lg:text-black lg:bg-transparent lg:space-x-[60px]' ref={navRef}>
              <NavbarBtn link="/#" label="ABOUT"/>
              <NavbarBtn link="/#" label="PROJECTS"/>
              <NavbarBtn link="/#" label="DESIGNS"/>
              <NavbarBtn link="/#" label="CONTACT"/>
          <br/>
          <button onClick={showNavBar} className='visible lg:invisible lg:absolute'>
            <FaTimes className='text-4xl'/>
          </button>
        </nav>
        <button onClick={showNavBar} className='visible lg:invisible lg:absolute'>
          <FaBars className='text-4xl'/>
          </button>
      </div>

    </header>
    </>
  )
}

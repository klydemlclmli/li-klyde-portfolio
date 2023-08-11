import React from 'react'
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import NavbarBtn from './NavbarBtn';

export default function Navbar({sectionIds}) {

  // For the collapsible navbar
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <>
    <header className='flex items-center justify-center h-[136px] w-full py-[28px] z-40'>

      <div className='absolute top-[28px] 
                      left-[28px] lg:left-[60px] xl:left-[131px]'>
        <a href="/#"><img src="images/KML.png" alt="logo" 
                      className='min-w-[70px] max-w-[70px]
                                md:min-w-[80px] md:max-w-[80px]'/>
        </a>
      </div>

      <div className='flex font-syne text-xl font-semibold pt-[28px] text-black
                      absolute top-[14px] lg:top-[28px]
                      right-[40px] lg:right-[60px] xl:right-[133px]'>
        <nav ref={navRef} className='flex items-center justify-center bg-black text-white 
                                  lg:text-black lg:bg-transparent lg:space-x-[60px]'>
              <NavbarBtn link={sectionIds.about} label="ABOUT" func={showNavBar}/>
              <NavbarBtn link={sectionIds.projects} label="PROJECTS" func={showNavBar}/>
              <NavbarBtn link={sectionIds.designs} label="DESIGNS" func={showNavBar}/>
              <NavbarBtn link={sectionIds.contact} label="CONTACT" func={showNavBar}/>
          <br/>
          <button onClick={showNavBar} 
                  className='visible lg:invisible lg:absolute'>
            <FaTimes className='text-4xl'/>
          </button>
        </nav>
        <button onClick={showNavBar} 
                className='fixed right-[28px] top-[34px] visible lg:invisible lg:absolute 
                        bg-white p-[14px] drop-shadow-md rounded-full'>
          <FaBars className='text-3xl'/>
        </button>
      </div>

    </header>
    </>
  )
}

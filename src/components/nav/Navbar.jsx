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
    <header id={sectionIds.home} className='flex items-center justify-center h-[136px] w-full py-[28px] z-40'>

      <div className='absolute top-[28px] 
                      left-[28px] lg:left-[60px] xl:left-[131px]'>
        <a href="/#"><img src="images/KML.png" alt="logo" 
                      className='min-w-[70px] max-w-[70px]
                                md:min-w-[80px] md:max-w-[80px]'/>
        </a>
      </div>

      <div className='group/bars flex font-syne text-xl font-semibold pt-[28px] text-black
                      absolute top-[14px] right-[40px] '>
        <nav ref={navRef} className='flex items-center justify-center bg-black text-white z-[41]
                                      fixed top-[-100vh] left-0 h-full w-full flex-col gap-[50px] 
                                      duration-[0.5s]
                                      
                                      lg:h-auto lg:w-auto lg:left-auto lg:right-[60px] lg:rounded-lg
                                      lg:gap-[10px] lg:text-black lg:bg-white lg:bg-opacity-70
                                      lg:px-[15px] lg:py-[20px] lg:top-auto lg:invisible lg:opacity-0
                                      lg:shadow-lg'>
              <NavbarBtn link={sectionIds.home} label="HOME" func={showNavBar}/>
              <NavbarBtn link={sectionIds.about} label="ABOUT" func={showNavBar}/>
              <NavbarBtn link={sectionIds.projects} label="PROJECTS" func={showNavBar}/>
              <NavbarBtn link={sectionIds.designs} label="DESIGNS" func={showNavBar}/>
              <NavbarBtn link={sectionIds.contact} label="CONTACT" func={showNavBar}/>
          <button onClick={showNavBar} 
                  className='lg:hidden'>
            <FaTimes className='text-4xl'/>
          </button>
        </nav>
        <button onClick={showNavBar}
                className='fixed right-[28px] lg:right-[60px] top-[34px] 
                        bg-white bg-opacity-70 p-[14px] drop-shadow-md rounded-full '>
          <FaBars className='bars text-3xl'/>
        </button>
      </div>

    </header>
    </>
  )
}

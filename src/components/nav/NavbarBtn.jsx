import React from 'react'

export default function NavbarBtn(props) {

  // Scroll to the section function
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      props.func();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div class="group flex flex-col items-center justify-center">
      <button onClick={() => scrollToSection(props.link)} className='group-hover:translate-y-[-4px]
                    group-hover:ease-in-out
                    group-hover:duration-[0.35s] drop-shadow-lg'>{props.label}</button>
        <div class="w-[8px] h-[8px] bg-white lg:bg-black rounded-full opacity-0
                    transition-transform duration-[0.35s]
                    group-hover:transform group-hover:translate-y-[-4px]
                    group-hover:opacity-100
                    group-hover:ease-in-out
                    "></div>
      </div>
    </>
  )
}

import React from 'react'

function NavbarBtn(props) {

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
      <div class="group/btn flex flex-col items-center justify-center">
      <button onClick={() => scrollToSection(props.link)} className='group-hover/btn:translate-y-[-4px]
                    group-hover/btn:ease-in-out
                    group-hover/btn:duration-[0.35s] drop-shadow-lg'>{props.label}</button>
        <div class="w-[8px] h-[8px] bg-white lg:bg-black rounded-full opacity-0
                    transition-transform duration-[0.35s]
                    group-hover/btn:transform 
                    group-hover/btn:translate-y-[-4px]
                    group-hover/btn:opacity-100
                    group-hover/btn:ease-in-out
                    "></div>
      </div>
    </>
  )
}

export default NavbarBtn 
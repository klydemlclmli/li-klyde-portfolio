import React, { useRef, useEffect, useState } from 'react';

function Hero() {

  // Parallax effect
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ref for conditionally applying the parallax effect only if the element is in the viewport
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Styles
  const section = {transform: `translateY(${offsetY * 0.4}px)`};
  const moon = isVisible ? {transform: `translateY(${offsetY * 1.3}px)`} : {opacity: 0};
  const mountain4 = isVisible ? {transform: `translateY(${offsetY * 1}px)`} : {opacity: 0};
  const mountain3 = isVisible ? {transform: `translateY(${offsetY * 0.7}px)`} : {opacity: 0};
  const mountain2 = isVisible ? {transform: `translateY(${offsetY * 0.4}px)`} : {opacity: 0};
  const trees = isVisible ? {transform: `translateY(${offsetY * 0.2}px)`} : {opacity: 0};
  const name = isVisible ? {transform: `translateY(${offsetY * 0.15}px)`} : {opacity: 0};
  const hero = {transform: `translateY(${offsetY * 0.1}px)`};

  return (
    <div className='flex relative w-full items-end justify-center'>
      <div ref={ref} style={section} className='flex w-full items-end justify-center
                      h-[517px] md:h-[430px] lg:h-[624px] xl:h-[724px] 2xl:h-[824px] text-black'>               
      
        <div className='flex flex-col absolute self-start 
                        font-besley font-medium
                        text-5xl lg:text-6xl xl:text-7xl 2xl:text-[100px]'>
          <div style={name} className='z-[3]'>
          <p className='relative left-[-10px]
                          md:left-[-70px] md:top-0
                          lg:left-[-100px] lg:top-[50px]
                          xl:left-[-150px]
                          2xl:left-[-200px] animate-slideDown'><span className='italic'>K</span>LYDE</p> 
          </div> 
          <div style={name} className='z-[3]'>
          <p className='relative left-[10px] top-[4px]
                          md:left-[190px] md:top-[50px]
                          lg:left-[250px] lg:top-[100px]
                          xl:left-[280px]
                          2xl:left-[400px] animate-slideLeft'>
                            MALCOLM</p>  
          </div>
          <div style={name} className='self-end relative left-[-10px] top-[4px]
                            md:self-start md:left-[5px] md:top-[110px]
                            lg:left-[-10px] lg:top-[200px]
                            xl:left-[10px] 2xl:top-[290px]
                            2xl:left-[40px] z-[6]'>
            <p className='animate-fadeIn opacity-0 2xl:text-white'>
                              <span className='italic'>L</span>I</p>  
          </div>  
        </div>

        <div style={moon} className='relative left-[-40px] xl:bottom-[70px] 2xl:bottom-[175px]'>
          <img src="images/hero/moon.webp" alt="moon" className='invisible animate-moonUp'/>
        </div>
        
        <div style={mountain4} className='absolute z-[2]'>
          <img src="images/hero/mountain-4.webp" alt="mountain-4" className='animate-mountainOneUp w-screen'/>
        </div>

        <div style={mountain3} className='absolute z-[4]'>
          <img src="images/hero/mountain-3.webp" alt="mountain-3"className='animate-mountainOneUp w-screen'/>
        </div>

        <div style={mountain2} className='absolute z-[5]'>
          <img src="images/hero/mountain-2.webp" alt="mountain-2" className='animate-mountainUp w-screen'/>
        </div>

        <div style={trees} className='absolute z-[7]'>
          <img src="images/hero/trees.webp" alt="trees" className='animate-treesUp w-screen'/>
        </div>

        <div style={hero} className='absolute z-[8]'>
          <img src="images/hero/shadow.webp" alt="shadow" 
          className='max-h-[430px] lg:max-h-[690px] animate-shadowUp w-full'/>
        </div>

        <div style={hero} className='absolute z-[9]'>
          <img src="images/hero/hero.webp" alt="hero" 
          className='max-h-[430px] lg:max-h-[690px] animate-slideUp w-full'/>
        </div>

      </div>
      <img src="images/hero/mountain-1.webp" alt="mountain-1" className='absolute z-10 w-full'/>
    </div>
  )
}

export default Hero
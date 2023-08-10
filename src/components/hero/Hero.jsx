import React from 'react'

export default function Hero() {

  return (
    <>
      <div className='flex w-full items-end justify-center
                      h-[531px] lg:h-[827px] text-black'>               
      
        <div className='flex flex-col absolute self-start 
                        font-besley font-medium
                        text-5xl lg:text-6xl xl:text-7xl 2xl:text-[100px]'>
          <text className='relative left-[-10px] top-[10px]
                          md:left-[-70px] md:top-[100px]
                          lg:left-[-100px] lg:top-[150px]
                          xl:left-[-150px]
                          2xl:left-[-200px] animate-slideDown'>
                            <span className='italic'>K</span>LYDE</text>  
          <text className='relative left-[10px] top-[14px]
                          md:left-[190px] md:top-[150px]
                          lg:left-[250px] lg:top-[200px]
                          xl:left-[280px]
                          2xl:left-[400px] animate-slideLeft z-[2]'>
                            MALCOLM</text>  
          <text className='self-end relative left-[-10px] top-[24px]
                          md:self-start md:left-[5px] md:top-[200px]
                          lg:left-[-10px] lg:top-[330px]
                          xl:left-[10px]
                          2xl:left-[40px]
                          animate-fadeIn opacity-0 2xl:text-white z-[4]'>
                            <span className='italic'>L</span>I</text>  
        </div>
        
        <img src="images/hero/moon1.png" alt="moon"className='relative translate-y-[700px] 
                  left-[-40px] xl:bottom-[70px] 2xl:bottom-[175px] animate-moonUp'/>
        <img src="images/hero/mountain-4.png" alt="mountain-4"className='absolute z-[1] animate-mountainOneUp'/>
        <img src="images/hero/mountain-3.png" alt="mountain-3"className='absolute z-[1] animate-mountainOneUp'/>
        <img src="images/hero/mountain-2.png" alt="mountain-2" className='absolute z-[3] animate-mountainUp'/>
        <img src="images/hero/trees.png" alt="trees" className='absolute z-[5] translate-y-[700px] animate-treesUp'/>
        <img src="images/hero/mountain-1.png" alt="mountain-1" className='absolute z-[8] animate-mountainUp'/>

        <img src="images/hero/shadow.png" alt="shadow" 
        className='absolute max-h-[430px] lg:max-h-[690px] translate-y-[700px]
                  animate-shadowUp z-[6]'/>
        <img src="images/hero/hero.png" alt="hero" 
        className='absolute max-h-[430px] lg:max-h-[690px]
                   translate-y-[700px] animate-slideUp z-[7]'/>
      </div>
    </>
  )
}
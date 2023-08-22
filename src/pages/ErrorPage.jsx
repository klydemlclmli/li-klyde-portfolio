import React from 'react';
import { Link } from 'react-router-dom';
import Button2 from '../components/buttons/Button2';
import SplashScreen from './Splash';

export default function ErrorPage() {

  return (
    <div className='base bg-main w-screen h-screen justify-center font-syne font-semibold text-5xl text-black text-center px-5 gap-2 xl:gap-0'>

      <div className='absolute top-[28px] left-[28px] lg:left-[60px] xl:left-[131px]'>
        <img src="/images/KML.webp" alt="logo" className='min-w-[70px] max-w-[70px] md:min-w-[80px] md:max-w-[80px]'/>
      </div>

      <div className='z-10 xl:text-7xl'>
        <p>PAGE NOT FOUND.</p>

        <Link to='/' onClick={<SplashScreen/>}>
          <Button2 text='GO HOME?'/>
        </Link>
      </div>

      <div className='flex absolute bottom-0 w-screen'>
        <img src="/images/hero/mountain-3.webp" alt="mountain-3"className='absolute bottom-0 w-screen'/>
        <img src="/images/hero/mountain-2.webp" alt="mountain-2" className='absolute bottom-0 w-screen'/>
        <img src="/images/hero/trees.webp" alt="trees" className='absolute bottom-0 w-screen'/>
        <img src="/images/hero/mountain-1.webp" alt="mountain-1" className='absolute bottom-0 w-full'/>
      </div>

    </div>
  )
}

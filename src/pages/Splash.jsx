import React, { useEffect } from 'react';

const SplashScreen = () => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  
    // After 2.5 seconds, revert overflow to 'visible'
    setTimeout(() => {
      document.body.style.overflow = 'visible';
    }, 2500);
  }, []);
  
  return (
    <div className="fixed flex items-center justify-center w-screen h-screen z-50 bg-splash animate-slideOut">
      <img src="/images/KML-Beige.webp" alt="splash-logo" className='min-w-[112px] max-w-[112px] pb-[70px] animate-fadeInPulse'/>
    </div>
  );
};

export default SplashScreen;
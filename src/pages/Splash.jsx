import React from 'react';

const SplashScreen = () => {
  return (
    <div class="fixed flex items-center justify-center w-screen h-screen z-50 bg-splash animate-slideOut">
      <img src="/images/KML-Beige.png" alt="splash-logo" className='animate-fadeInPulse'/>
    </div>
  );
};

export default SplashScreen;
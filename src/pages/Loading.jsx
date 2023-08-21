import React from 'react';

const Loading = () => {
  
  return (
    <div className="fixed flex items-center justify-center w-screen h-screen z-50 bg-splash">
      <img src="/images/KML-Beige.webp" alt="splash-logo" className='min-w-[112px] max-w-[112px] pb-[70px] animate-pulse'/>
    </div>
  );
};

export default Loading;
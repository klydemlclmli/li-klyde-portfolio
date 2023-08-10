import React, { useState, useEffect } from 'react';

const ScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 p-2 bg-gray-800 text-white z-50">
      Screen Size: {screenWidth}px x {screenHeight}px
    </div>
  );
};

export default ScreenSize;
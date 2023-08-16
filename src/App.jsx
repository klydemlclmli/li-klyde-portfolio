import React, { lazy } from 'react';
import Home from './pages/Home.jsx';
import SplashScreen from './pages/Splash.jsx';

function App() {
  document.body.style.overflow = 'hidden';

  // After 2.5 seconds, revert overflow to 'visible'
  setTimeout(() => {
    document.body.style.overflow = 'visible';
  }, 2500);

    return (
      <>
          <SplashScreen className='z-50'/>
          <Home/>
      </>
    )
}

export default App

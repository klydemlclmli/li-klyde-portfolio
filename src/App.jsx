import { lazy, Suspense } from 'react';
import Home from './pages/Home.jsx';
const Splash = lazy(() => import('./pages/Splash.jsx'));
const ScreenSize = lazy(() => import('./ScreenSize.jsx'));

function App() {
  document.body.style.overflow = 'hidden';

  // After 3.5 seconds (3500 milliseconds), revert overflow to 'visible'
  setTimeout(() => {
    document.body.style.overflow = 'visible';
  }, 3500);

    return (
      <>
        <Suspense>
          <Splash className='z-50'/>
          <Home/>
          <ScreenSize/>
        </Suspense>
      </>
    )
}

export default App

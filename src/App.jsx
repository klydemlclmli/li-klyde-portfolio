import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SplashScreen from './pages/Splash.jsx';
import Home from './pages/Home.jsx';
const Core = lazy(() => import('./components/projects/pages/Core.jsx'));
const Asea = lazy(() => import('./components/projects/pages/Asea.jsx'));

// import Home from './pages/Home.jsx';
// import Core from './components/projects/pages/Core.jsx';

function App() {
    return (
      <>
      <SplashScreen className='z-50'/>

      <Suspense fallback={<SplashScreen className='z-50'/>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects/CORE' element={<Core/>}/>
          <Route path='/projects/Asea' element={<Asea/>}/>
        </Routes>
      </Suspense>
      </>
    )
}

export default App

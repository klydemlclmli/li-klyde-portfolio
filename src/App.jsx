import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SplashScreen from './pages/Splash.jsx';
import Home from './pages/Home.jsx';
const Core = lazy(() => import('./components/projects/pages/Core.jsx'));
const CryptoCause = lazy(() => import('./components/projects/pages/CryptoCause.jsx'));
const Asea = lazy(() => import('./components/projects/pages/Asea.jsx'));
const LoginRegister = lazy(() => import('./components/projects/pages/LoginRegister.jsx'));

const Tuklaspital = lazy(() => import('./components/designs/pages/Tuklaspital.jsx'));

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
          <Route path='/projects/CryptoCause' element={<CryptoCause/>}/>
          <Route path='/projects/ASEA' element={<Asea/>}/>
          <Route path='/projects/LoginRegister' element={<LoginRegister/>}/>

          <Route path='/designs/Tuklaspital' element={<Tuklaspital/>}/>
        </Routes>
      </Suspense>
      </>
    )
}

export default App

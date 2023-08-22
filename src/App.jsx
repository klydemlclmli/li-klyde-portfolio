import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SplashScreen from './pages/Splash.jsx';
import Loading from './pages/Loading.jsx';
import Home from './pages/Home.jsx';

// Lazy Loading other pages
const Core = lazy(() => import('./components/projects/pages/Core.jsx'));
const CryptoCause = lazy(() => import('./components/projects/pages/CryptoCause.jsx'));
const Asea = lazy(() => import('./components/projects/pages/Asea.jsx'));
const LoginRegister = lazy(() => import('./components/projects/pages/LoginRegister.jsx'));

const Tuklaspital = lazy(() => import('./components/designs/pages/Tuklaspital.jsx'));
const CoreMockups = lazy(() => import('./components/designs/pages/CoreMockups.jsx'));
const Risewave = lazy(() => import('./components/designs/pages/Risewave.jsx'));
const SyntacticsExam = lazy(() => import('./components/designs/pages/SyntacticsExam.jsx'));
const SyntacticsExamRevised = lazy(() => import('./components/designs/pages/SyntacticsExamRevised.jsx'));
const MedGrocer = lazy(() => import('./components/designs/pages/MedGrocer.jsx'));

const ErrorPage = lazy(() => import('./pages/ErrorPage.jsx'));

function App() {
    return (
      <>
      <SplashScreen className='z-50'/>

      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects/CORE' element={<Core/>}/>
          <Route path='/projects/CryptoCause' element={<CryptoCause/>}/>
          <Route path='/projects/ASEA' element={<Asea/>}/>
          <Route path='/projects/LoginRegister' element={<LoginRegister/>}/>

          <Route path='/designs/Tuklaspital' element={<Tuklaspital/>}/>
          <Route path='/designs/CoreMockups' element={<CoreMockups/>}/>
          <Route path='/designs/Risewave' element={<Risewave/>}/>
          <Route path='/designs/SyntacticsExamRevamp' element={<SyntacticsExam/>}/>
          <Route path='/designs/SyntacticsExamRevised' element={<SyntacticsExamRevised/>}/>
          <Route path='/designs/MedGrocer' element={<MedGrocer/>}/>
          
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </Suspense>
      </>
    )
}

export default App

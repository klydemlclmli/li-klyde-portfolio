import Home from './pages/Home.jsx'
import Splash from './pages/Splash.jsx'
import ScreenSize from './ScreenSize.jsx';

function App() {

    return (
      <>
        <Splash className='z-50'/>
        <Home/>
        <ScreenSize/>
      </>
    )
}

export default App

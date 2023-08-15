import Navbar from '../components/nav/Navbar.jsx'
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Projects from '../components/Projects.jsx';


function Home() {

  const sectionIds = {
    home: 'home',
    about: 'about',
    projects: 'projects',
    designs: 'designs',
    contact: 'contact',
  };
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-main">
      <Navbar sectionIds={sectionIds}/>
      <Hero/>
      <About sectionIds={sectionIds}/>
      <Projects sectionIds={sectionIds}/>
      <div className="w-full h-[2827px] z-10" id={sectionIds.designs}></div>
      <div className="w-full h-[615px] bg-beige z-10" id={sectionIds.contact}></div>
    </div>
  )
}

export default Home
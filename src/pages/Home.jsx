import Navbar from '../components/nav/Navbar.jsx'
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Projects from '../components/projects/Projects.jsx';
import Designs from '../components/designs/Designs.jsx';


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
      <Designs sectionIds={sectionIds}/>
      <div className="w-full h-[615px] bg-beige z-10" id={sectionIds.contact}></div>
    </div>
  )
}

export default Home
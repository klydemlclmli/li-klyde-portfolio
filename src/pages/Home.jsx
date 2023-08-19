import { useEffect } from 'react';
import Navbar from '../components/nav/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Projects from '../components/projects/Projects.jsx';
import Designs from '../components/designs/Designs.jsx';
import Footer from '../components/Footer.jsx';
import { useLocation } from 'react-router-dom';


function Home() {

  const sectionIds = {
    home: 'home',
    about: 'about',
    projects: 'projects',
    designs: 'designs',
    contact: 'contact',
  };

  const location = useLocation();

  // For the Project section
  const slideTo = location?.state?.slideTo || 0;

  useEffect(() => {
    const scrollToSection = location?.state?.scrollTo || sectionIds.home;
    const section = document.getElementById(scrollToSection);
    if (section) {
      section.scrollIntoView();
    }
  }, [location]);
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-main">
      <Navbar sectionIds={sectionIds}/>
      <Hero/>
      <About sectionIds={sectionIds}/>
      <Projects sectionIds={sectionIds} slideTo={slideTo}/>
      <Designs sectionIds={sectionIds}/>
      <Footer sectionIds={sectionIds}/>
    </div>
  )
}

export default Home
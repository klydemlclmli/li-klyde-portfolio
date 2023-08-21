import { useEffect, useRef } from 'react';
import Navbar from '../components/nav/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Projects from '../components/projects/Projects.jsx';
import Designs from '../components/designs/Designs.jsx';
import Footer from '../components/Footer.jsx';
import { useLocation } from 'react-router-dom';


function Home() {

  // IDs for the different sections of the page
  const sectionIds = {
    home: 'home',
    about: 'about',
    projects: 'projects',
    designs: 'designs',
    contact: 'contact',
  };

  // Refs for Designs
  const tuklaspital = useRef(null);
  const coreMockup = useRef(null);
  const risewave = useRef(null);
  const exam = useRef(null);
  const revised = useRef(null);
  const medgrocer = useRef(null);

  // A map of identifiers to refs
  const refMap = {
    'tuklaspital': tuklaspital,
    'coreMockup': coreMockup,
    'risewave': risewave,
    'exam': exam,
    'revised': revised,
    'medgrocer': medgrocer,
  };

  // From the Back button from the other Projects and Designs pages
  const location = useLocation();

  // For the Project Swiper slider
  const slideTo = location?.state?.slideTo || 0;

  // For the Design section
  const getDesignRef = location?.state?.designRef;
  // Access the ref based on the passed identifier
  const designRef = refMap[getDesignRef];

  useEffect(() => {
    const scrollToSection = location?.state?.scrollTo;
    const section = document.getElementById(scrollToSection);
    if (section) {
      section.scrollIntoView({ block: 'center' });
    }else if (designRef){
      designRef.current.scrollIntoView({ block: 'center' });
    }else{
      const home = document.getElementById(sectionIds.home);
      home.scrollIntoView();
    }
  }, [location]);
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-main">
      <Navbar sectionIds={sectionIds}/>
      <Hero/>
      <About sectionIds={sectionIds}/>
      <Projects sectionIds={sectionIds} slideTo={slideTo}/>
      <Designs sectionIds={sectionIds}
              tuklaspital={tuklaspital}
              coreMockup={coreMockup}
              risewave={risewave}
              exam={exam}
              revised={revised}
              medgrocer={medgrocer}/>
      <Footer sectionIds={sectionIds}/>
    </div>
  )
}

export default Home
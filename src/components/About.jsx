import useParallax from '../scripts/Parallax';
import { lazyLoader } from '../scripts/LazyLoader';

export default function About({sectionIds}) {

  lazyLoader();

  // Parallax effect
  const { offsetY } = useParallax();
  const text = {transform: `translateY(${offsetY * -0.11}px)`};

  return (
    <div id={sectionIds.about} className='base font-syne text-xl lg:text-2xl 2xl:text-[28px] text-white w-full pt-[78px] md:pb-[30px] px-14 xl:px-20 2xl:px-[130px] bg-black text-justify z-10 gap-[40px] md:gap-[70px] 2xl:gap-[80px]'>
      
      <p style={text} className='aboutText sectionLabel md:self-start'>
        ABOUT ME
      </p>

      <p style={text} className='aboutText md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[540px] z-[1]'>
        Hey, there! I’m <b>Klyde</b>, a Web Designer and Developer as of the creation of this portfolio.
      </p>

      <div className='base md:flex-row gap-[40px] xl:gap-[60px] 2xl:gap-[140px]'>
        <div>
          <img lazyPic="images/about-pic.webp" alt="about-pic" 
            className='lazyMe my-4 pb-16 lg:pb-20 2xl:pb-28 max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[540px] w-full'/>
        </div>
        <p style={text} className='aboutText md:w-[400px] 2xl:w-[535px]'>
          A fresh grad from the University of Santo Tomas (Manila, Philippines) with a degree on Bachelor of Science in <b>Information Technology</b>, I specialized in Web and Mobile Development.
          </p>
      </div>

      <div>
        <p style={text} className='aboutText md:w-[550px] lg:w-[600px] 2xl:w-[820px]'>
        Having participated in various projects, I have experience in different roles including UI/UX Designer, Developer, Project Manager, and Quality Assurance Officer but what truly captivated my interest is <b>creating</b> user-centered and visually appealing digital experiences.
        </p>
      </div>

    </div>
  )
}

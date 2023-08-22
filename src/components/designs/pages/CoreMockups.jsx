import { useEffect } from 'react';
import DesignPageInfo from './DesignPageInfo';
import { lazyLoader } from '../../../scripts/LazyLoader';

export default function CoreMockups() {

  useEffect(() => {
    window.scrollTo(0, 0);
    lazyLoader();
  }, []);

  return (
    <div className='project-page'>
      {/* Top part */}
      <DesignPageInfo
        designRef = 'coreMockup'
        title = 'CORE Mockups'
        tool = 'Adobe XD'
        year = '2022'
        btnText = 'VIEW MOCKUPS'
        link = 'https://drive.google.com/drive/folders/19ixPL603pVgvQ2HiHJvi9FOrdjpyPUKi?usp=sharing'
        description = 'Mockup designs for our capstone project, CEAP Online Resources for Education (CORE).'
      />

      {/* Images */}
      <div className='images-grp'>
        <img lazyPic="/images/designs/core-mockups/1.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/designs/core-mockups/2.webp" alt="designPage_image" className='project-img lazyMe'/>
        <img lazyPic="/images/designs/core-mockups/3.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/designs/core-mockups/4.webp" alt="designPage_image" className='project-img lazyMe'/>
        <img lazyPic="/images/designs/core-mockups/5.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/designs/core-mockups/6.webp" alt="designPage_image" className='project-img lazyMe'/>
      </div>
    </div>
  )
}

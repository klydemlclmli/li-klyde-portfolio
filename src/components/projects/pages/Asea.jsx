import { useEffect } from 'react';
import ProjectPageInfo from './ProjectPageInfo';
import { lazyLoader } from '../../../scripts/LazyLoader';

export default function Asea() {

  useEffect(() => {
    lazyLoader();
  }, []);

  return (
    <div className='project-page'>
      {/* Top part */}
      <ProjectPageInfo
        scrollTo = 'projects'
        slideTo = {2}
        title = 'Web-based Appointment System for ASEA iWork Builders Co.'
        role = 'Quality Assurance Officer'
        year = '2021-2022'
        btnText = 'VIEW SITE'
        link = 'https://asea-iwork-builders-co.vercel.app/home'
      />

      {/* Images */}
      <div className='images-grp'>
        <img lazyPic="/images/projects/asea/1.webp" alt="design_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/projects/asea/2.webp" alt="design_image" className='project-img lazyMe'/>
      </div>
    </div>
  )
}

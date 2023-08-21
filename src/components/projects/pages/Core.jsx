import { useEffect } from 'react';
import ProjectPageInfo from './ProjectPageInfo';
import { lazyLoader } from '../../../scripts/LazyLoader';

export default function Core() {

  useEffect(() => {
    window.scrollTo(0, 0);
    lazyLoader();
  }, []);

  return (
    <div className='project-page'>
      {/* Top part */}
      <ProjectPageInfo
        scrollTo = 'projects'
        slideTo = {0}
        title = 'CEAP Online Resources for Education (CORE)'
        role = 'Project Manager, UI/UX Designer'
        year = '2022'
        btnText = 'VIEW SITE'
        link = 'https://ceapcore.azurewebsites.net/'
        description = 'A document management system for the Catholic Association of the Philippines (CEAP).'
      />

      {/* Images */}
      <div className='images-grp'>
        <img lazyPic="/images/projects/core/1.webp" alt="projpage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/projects/core/2.webp" alt="projpage_image" className='project-img lazyMe'/>
        <img lazyPic="/images/projects/core/3.webp" alt="projpage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/projects/core/4.webp" alt="projpage_image" className='project-img lazyMe'/>
        <img lazyPic="/images/projects/core/5.webp" alt="projpage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/projects/core/6.webp" alt="projpage_image" className='project-img lazyMe'/>
      </div>
    </div>
  )
}

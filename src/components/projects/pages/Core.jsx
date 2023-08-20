import { useEffect } from 'react';
import ProjectPageInfo from './ProjectPageInfo';
import { lazyLoader } from '../../../scripts/LazyLoader';

export default function Core() {

  useEffect(() => {
    lazyLoader();
  }, []);

  return (
    <div className='base bg-black text-og-white font-syne font-bold text-[24px] lg:text-[30px] xl:text-[36px] gap-12 2xl:gap-24 p-[30px] pb-[90px] 2xl:pb-[140px] md:px-[80px] 2xl:px-[130px] md:py-[60px]'>
      {/* Top part */}
      <ProjectPageInfo
        scrollTo = 'projects'
        slideTo = {0}
        title = 'CEAP Online Resources for Education (CORE)'
        role = 'Project Manager, UI/UX Designer'
        year = '2022'
        btnText = 'VIEW SITE'
        link = 'https://ceapcore.azurewebsites.net/'
      />

      {/* Images */}
      <div className='flex flex-col items-center md:items-start gap-8 md:gap-12 2xl:gap-24 w-full'>
        <img lazyPic="/images/projects/core/1.webp" alt="design_image" className='project-img lazyMe md:self-end'/>
        <img lazyPic="/images/projects/core/2.webp" alt="design_image" className='project-img lazyMe'/>
        <img lazyPic="/images/projects/core/3.webp" alt="design_image" className='project-img lazyMe md:self-end'/>
        <img lazyPic="/images/projects/core/4.webp" alt="design_image" className='project-img lazyMe'/>
        <img lazyPic="/images/projects/core/5.webp" alt="design_image" className='project-img lazyMe md:self-end'/>
        <img lazyPic="/images/projects/core/6.webp" alt="design_image" className='project-img lazyMe'/>
      </div>
    </div>
  )
}

import { useEffect } from 'react';
import ProjectPageInfo from './ProjectPageInfo';
import { lazyLoader } from '../../../scripts/LazyLoader';

export default function Asea() {

  useEffect(() => {
    lazyLoader();
  }, []);

  return (
    <div className='base bg-black text-og-white font-syne font-bold text-[24px] lg:text-[30px] xl:text-[36px] gap-12 2xl:gap-24 p-[30px] pb-[90px] 2xl:pb-[140px] md:px-[80px] 2xl:px-[130px] md:py-[60px]'>
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
      <div className='flex flex-col items-center md:items-start gap-8 md:gap-12 2xl:gap-24 w-full'>
        <img lazyPic="/images/projects/asea/1.webp" alt="design_image" className='project-img lazyMe md:self-end'/>
        <img lazyPic="/images/projects/asea/2.webp" alt="design_image" className='project-img lazyMe'/>
      </div>
    </div>
  )
}

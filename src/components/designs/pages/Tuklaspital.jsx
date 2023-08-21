import { useEffect } from 'react';
import DesignPageInfo from './DesignPageInfo';
import { lazyLoader } from '../../../scripts/LazyLoader';
import { useLocation } from 'react-router-dom';

export default function Tuklaspital() {

  useEffect(() => {
    lazyLoader();
  }, []);

  return (
    <div className='project-page'>
      {/* Top part */}
      <DesignPageInfo
        designRef = 'tuklaspital'
        title = 'Tuklaspital'
        tool = 'Adobe XD'
        year = '2020'
        btnText = 'VIEW DEMO'
        link = 'https://www.youtube.com/watch?v=drdikpKj6SY&t=438s'
        description = 'A prototype design for a nearest hospital finder mobile application.'
      />

      {/* Images */}
      <div className='images-grp'>
        <div className='flex flex-col gap-6 w-[300px] md:flex-row md:w-auto self-center'>
          <img lazyPic="/images/designs/tuklaspital/1.webp" alt="designPage_image" className='mobile-img lazyMe self-end'/>
          <img lazyPic="/images/designs/tuklaspital/2.webp" alt="designPage_image" className='mobile-img lazyMe'/>
          <img lazyPic="/images/designs/tuklaspital/3.webp" alt="designPage_image" className='mobile-img lazyMe self-end'/>
        </div>
        <div className='flex flex-col gap-6 w-[300px] md:flex-row md:w-auto self-center'>
          <img lazyPic="/images/designs/tuklaspital/4.webp" alt="designPage_image" className='mobile-img lazyMe'/>
          <img lazyPic="/images/designs/tuklaspital/5.webp" alt="designPage_image" className='mobile-img lazyMe self-end'/>
        </div>
      </div>
    </div>
  )
}

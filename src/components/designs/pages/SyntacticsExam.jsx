import { useEffect } from 'react';
import DesignPageInfo from './DesignPageInfo';
import { lazyLoader } from '../../../scripts/LazyLoader';

export default function SyntacticsExam() {

  useEffect(() => {
    window.scrollTo(0, 0);
    lazyLoader();
  }, []);

  return (
    <div className='project-page'>
      {/* Top part */}
      <DesignPageInfo
        designRef = 'exam'
        title = 'Syntactics’ Revamp Online Examination'
        tool = 'Figma'
        year = '2023'
        btnText = 'VIEW DESIGN'
        link = 'https://www.figma.com/file/42jSfvkIm2WrmaHvk1GkVP/Li_OnlineExam_Design_REVISED_V1?type=design&mode=design&t=WEHRSHEp3IZhhWpv-1'
        description = 'A revamped design for the online examination website for my internship company, Syntactics, Inc.'
      />

      {/* Images */}
      <div className='images-grp'>
        <img lazyPic="/images/designs/syntactics-exam/1.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/designs/syntactics-exam/2.webp" alt="designPage_image" className='project-img lazyMe'/>
        <img lazyPic="/images/designs/syntactics-exam/3.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/designs/syntactics-exam/4.webp" alt="designPage_image" className='project-img lazyMe'/>
        <img lazyPic="/images/designs/syntactics-exam/5.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/designs/syntactics-exam/6.webp" alt="designPage_image" className='project-img lazyMe'/>
      </div>
    </div>
  )
}

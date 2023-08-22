import { useEffect } from 'react';
import DesignPageInfo from './DesignPageInfo';
import { lazyLoader } from '../../../scripts/LazyLoader';

export default function SyntacticsExamRevised() {

  useEffect(() => {
    window.scrollTo(0, 0);
    lazyLoader();
  }, []);

  return (
    <div className='project-page'>
      {/* Top part */}
      <DesignPageInfo
        designRef = 'revised'
        title = 'Syntactics’ Revamp Online Examination (Revised)'
        tool = 'Figma'
        year = '2023'
        btnText = 'VIEW DESIGN'
        link = 'https://www.figma.com/file/uakHBO1nNBVsC1dmWlJhAw/Li_OnlineExam_Design_REVISED?type=design&node-id=0%3A1&mode=design&t=yjULIcKmQNY46sfw-1'
        description = 'A revised version of the revamped online examination website design for Syntactics, Inc.'
      />

      {/* Images */}
      <div className='images-grp'>
        <img lazyPic="/images/designs/syntactics-exam-revised/1.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/designs/syntactics-exam-revised/2.webp" alt="designPage_image" className='project-img lazyMe'/>
        <img lazyPic="/images/designs/syntactics-exam-revised/3.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/designs/syntactics-exam-revised/4.webp" alt="designPage_image" className='project-img lazyMe'/>
        <img lazyPic="/images/designs/syntactics-exam-revised/5.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/designs/syntactics-exam-revised/6.webp" alt="designPage_image" className='project-img lazyMe'/>
      </div>
    </div>
  )
}

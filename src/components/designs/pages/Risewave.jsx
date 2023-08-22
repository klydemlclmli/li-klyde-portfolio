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
        designRef = 'risewave'
        title = 'Risewave'
        tool = 'Figma'
        year = '2023'
        btnText = 'VIEW DESIGN'
        link = 'https://www.figma.com/file/PCfuWOk1RNACTUAPRg3JjG/Li_Klyde_RisewaveTemplate?type=design&node-id=0%3A1&mode=design&t=q0GjJr4CfnzZ2y8L-1'
        description = 'A web design for a client, Risewave, during my internship at Syntactics, Inc.'
      />

      {/* Images */}
      <div className='images-grp'>
        <img lazyPic="/images/designs/risewave/1.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/designs/risewave/2.webp" alt="designPage_image" className='project-img lazyMe'/>
        <img lazyPic="/images/designs/risewave/3.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/designs/risewave/4.webp" alt="designPage_image" className='project-img lazyMe'/>
        <img lazyPic="/images/designs/risewave/5.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/designs/risewave/6.webp" alt="designPage_image" className='project-img lazyMe'/>
      </div>
    </div>
  )
}

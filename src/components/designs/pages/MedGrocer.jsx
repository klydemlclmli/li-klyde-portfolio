import { useEffect } from 'react';
import DesignPageInfo from './DesignPageInfo';
import { lazyLoader } from '../../../scripts/LazyLoader';

export default function MedGrocer() {

  useEffect(() => {
    window.scrollTo(0, 0);
    lazyLoader();
  }, []);

  return (
    <div className='project-page'>
      {/* Top part */}
      <DesignPageInfo
        designRef = 'medgrocer'
        title = 'MedGrocer'
        tool = 'Figma'
        year = '2023'
        btnText = 'VIEW DESIGN'
        link = 'https://www.figma.com/file/ozrjPidRSW2rnDjr7fT2PQ/MedGrocer---Week-3-%26-4-(Copy)?type=design&mode=design&t=yjULIcKmQNY46sfw-1'
        description = "An improved website design for a company called MedGrocer as part of KadaKareer's UI/UX Challenge (participated in a group)."
      />

      {/* Images */}
      <div className='images-grp'>
        <img lazyPic="/images/designs/medgrocer/1.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/designs/medgrocer/2.webp" alt="designPage_image" className='project-img lazyMe'/>
        <img lazyPic="/images/designs/medgrocer/3.webp" alt="designPage_image" className='project-img lazyMe xl:self-end'/>
      </div>
    </div>
  )
}

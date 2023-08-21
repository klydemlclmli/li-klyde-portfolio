import { useEffect } from 'react';
import ProjectPageInfo from './ProjectPageInfo';
import { lazyLoader } from '../../../scripts/LazyLoader';

export default function CryptoCause() {

  useEffect(() => {
    window.scrollTo(0, 0);
    lazyLoader();
  }, []);

  return (
    <div className='project-page'>
      {/* Top part */}
      <ProjectPageInfo
        scrollTo = 'projects'
        slideTo = {1}
        title = 'CryptoCause'
        role = 'UI/UX Designer'
        year = '2023'
        btnText = 'VIEW PROJECT'
        link = 'https://github.com/gnrflcthm/smart-contract'
        description = 'A web application implementing smart contract for crowdsourcing funds.'
      />

      {/* Images */}
      <div className='images-grp'>
        <img lazyPic="/images/projects/cryptocause/1.webp" alt="projpage_image" className='project-img lazyMe xl:self-center'/>
      </div>
    </div>
  )
}

import { useEffect } from 'react';
import ProjectPageInfo from './ProjectPageInfo';
import { lazyLoader } from '../../../scripts/LazyLoader';

export default function LoginRegister() {

  useEffect(() => {
    window.scrollTo(0, 0);
    lazyLoader();
  }, []);

  return (
    <div className='project-page'>
      {/* Top part */}
      <ProjectPageInfo
        scrollTo = 'projects'
        slideTo = {3}
        title = 'Login and Register'
        role = 'Developer, UI/UX Designer'
        year = '2023'
        btnText = 'VIEW PROJECT'
        link = 'https://github.com/klydemlclmli/register-login'
        description = 'A simple Registration and Login web application created using React utilizing local storage.'
      />

      {/* Images */}
      <div className='images-grp'>
        <img lazyPic="/images/projects/login-register/1.webp" alt="projpage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/projects/login-register/2.webp" alt="projpage_image" className='project-img lazyMe'/>
        <img lazyPic="/images/projects/login-register/3.webp" alt="projpage_image" className='project-img lazyMe xl:self-end'/>
        <img lazyPic="/images/projects/login-register/4.webp" alt="projpage_image" className='project-img lazyMe'/>
        <img lazyPic="/images/projects/login-register/5.webp" alt="projpage_image" className='project-img lazyMe xl:self-end'/>
      </div>
    </div>
  )
}

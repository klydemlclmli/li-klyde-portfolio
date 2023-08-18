import React, { useRef } from 'react'
import Email from './svgs/Email.jsx';
import CopyEmail from './buttons/CopyEmail.jsx';
import Facebook from './svgs/Facebook.jsx';
import Linkedin from './svgs/Linkedin.jsx';
import Github from './svgs/Github.jsx';
import SocmedButton from './buttons/SocmedButton.jsx';

export default function Footer({sectionIds}) {
  const copyEmailRef = useRef();

  return (
    <div className='base'>
      <div className='h-[5px] w-full bg-ftr-brdr drop-shadow-ftr-shadow animate-pulse'/>

      <div id={sectionIds.contact} className="base font-syne w-full py-[50px] px-[42px] 2xl:px-[130px] pb-20 font-bold text-black gap-[37px] bg-footer drop-shadow-ftr-shadow">
        <div className='base gap-[27px] xl:w-full'>
          <p className='text-[32px] xl:self-start'>
            GET IN TOUCH.
          </p>

          <div className='h-[5px] w-full bg-ftr-line xl:hidden'></div>
        </div>

        <div className='base gap-6'>
          <div className='flex items-center justify-center gap-[7px] md:gap-[14px]'>
            <Email/>
            <p className='text-[17px] md:text-[34px] 2xl:text-[47px]'>klydemalcolmli@gmail.com</p>
            <div className='hidden md:block'>
              <p ref={copyEmailRef} className='opacity-0 absolute text-[17px] text-white translate-y-[-28px] translate-x-[-30px]'>Email copied!</p>
              <CopyEmail copyRef={copyEmailRef} />
            </div>
          </div>

          <div className='flex items-center justify-center gap-[17px]'>
            <div className='h-[7px] max-w-[540px] min-w-[340px] bg-ftr-line hidden xl:block'></div>
            <div className='md:hidden'>
              <CopyEmail copyRef={copyEmailRef}/> 
              <p ref={copyEmailRef} className='opacity-0 absolute text-[12px] text-white translate-y-2 translate-x-[-14px]'>Email copied!</p>
            </div>
            <SocmedButton svg={<Facebook/>}/>
            <SocmedButton svg={<Linkedin/>}/>
            <SocmedButton svg={<Github/>}/>
            <div className='h-[7px] max-w-[540px] min-w-[340px] bg-ftr-line hidden xl:block'></div>
          </div>
        </div>

      </div>
    </div>
  )
}

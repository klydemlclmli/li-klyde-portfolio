import React from 'react'
import Email from './svgs/Email.jsx';

export default function Footer({sectionIds}) {
  return (
    <div id={sectionIds.contact} className="base font-syne w-full py-[50px] px-[42px] font-bold text-black gap-[37px] bg-footer border-t-[5px] border-og-white/70 drop-shadow-ftr-shadow">
      
      <div className='base gap-[27px]'>
        <p className='text-[32px]'>
          GET IN TOUCH.
        </p>

        <div className='h-[5px] w-full bg-ftr-line'></div>
      </div>

      <div children='base gap-6'>

        <div className='flex'>
          <Email/>
        </div>
        
      </div>

    </div>
  )
}

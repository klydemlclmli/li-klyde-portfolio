import React from 'react'
import Button2 from '../buttons/Button2'
import DesignLabel from './DesignLabel'
import { lazyLoader } from '../../scripts/LazyLoader'

export default function Designs({sectionIds}) {

  lazyLoader();

  return (
    <div id={sectionIds.designs} className='base py-[60px] 2xl:py-[100px] 2xl:pb-[170px] md:pb-[90px] px-5 md:px-10 2xl:px-[130px] font-syne text-black font-bold text-[14px] gap-14 2xl:gap-[100px]'>

      <p className='sectionLabel'>
        DESIGNS
      </p>

      <div className='base w-full md:gap-[90px] xl:gap-[120px] 2xl:gap-[170px]'>

        <div className=' flex flex-col md:self-start md:flex-row md:gap-5 drop-shadow-blk-shadow md:drop-shadow-none'>
          <div className='relative'>
            <img src="/images/designs/designHolder.webp" alt="design_holder" className='design-img lazyMe'/>
            <img lazyPic="/images/designs/tuklaspital.webp" alt="design_image" className='design-img lazyMe absolute top-0 left-0'/>
          </div>
          
          <div className='flex flex-col items-end md:gap-2 xl:gap-4 lazyMe'>
            <DesignLabel title='Tuklaspital' tool='Adobe XD'/>
            <div className='mr-5 relative bottom-[62px] md:static md:mr-0'>
              <Button2 text='VIEW'/>
            </div>
          </div>
        </div>

        <div className=' flex flex-col md:self-end md:flex-row-reverse md:gap-5 drop-shadow-blk-shadow md:drop-shadow-none'>
          <div className='relative'>
            <img src="/images/designs/designHolder.webp" alt="design_holder" className='design-img lazyMe'/>
            <img lazyPic="/images/designs/core-mockup.webp" alt="design_image" className='design-img lazyMe absolute top-0 left-0'/>
          </div>
          
          <div className='flex flex-col items-end md:items-start md:gap-2 xl:gap-4 lazyMe'>
            <DesignLabel title='CORE Mockups' tool='Adobe XD'/>
            <div className='mr-5 relative bottom-[62px] md:static md:mr-0'>
              <Button2 text='VIEW'/>
            </div>
          </div>
        </div>

        <div className=' flex flex-col md:self-start md:flex-row md:gap-5 drop-shadow-blk-shadow md:drop-shadow-none'>
          <div className='relative'>
            <img src="/images/designs/designHolder.webp" alt="design_holder" className='design-img lazyMe'/>
            <img lazyPic="/images/designs/risewave.webp" alt="design_image" className='design-img lazyMe absolute top-0 left-0'/>
          </div>
          
          <div className='flex flex-col items-end md:gap-2 xl:gap-4 lazyMe'>
            <DesignLabel title='Risewave' tool='Figma'/>
            <div className='mr-5 relative bottom-[62px] md:static md:mr-0'>
              <Button2 text='VIEW'/>
            </div>
          </div>
        </div>

        <div className=' flex flex-col md:self-end md:flex-row-reverse md:gap-5 drop-shadow-blk-shadow md:drop-shadow-none'>
          <div className='relative'>
            <img src="/images/designs/designHolder.webp" alt="design_holder" className='design-img lazyMe'/>
            <img lazyPic="/images/designs/exam.webp" alt="design_image" className='design-img lazyMe absolute top-0 left-0'/>
          </div>
          
          <div className='flex flex-col items-end md:items-start md:gap-2 xl:gap-4 lazyMe'>
            <DesignLabel title='Syntactics’ Revamp Online Examination' tool='Figma'/>
            <div className='mr-5 relative bottom-[72px] md:static md:mr-0'>
              <Button2 text='VIEW'/>
            </div>
          </div>
        </div>

        <div className=' flex flex-col md:self-start md:flex-row md:gap-5 drop-shadow-blk-shadow md:drop-shadow-none'>
          <div className='relative'>
            <img src="/images/designs/designHolder.webp" alt="design_holder" className='design-img lazyMe'/>
            <img lazyPic="/images/designs/revised.webp" alt="design_image" className='design-img lazyMe absolute top-0 left-0'/>
          </div>
          
          <div className='flex flex-col items-end md:gap-2 xl:gap-4 lazyMe'>
            <DesignLabel title='Syntactics’ Revamp Online Examination (Revised)' tool='Figma'/>
            <div className='mr-5 relative bottom-[82px] md:static md:mr-0'>
              <Button2 text='VIEW'/>
            </div>
          </div>
        </div>

        <div className=' flex flex-col md:self-end md:flex-row-reverse md:gap-5 drop-shadow-blk-shadow md:drop-shadow-none'>
          <div className='relative'>
            <img src="/images/designs/designHolder.webp" alt="design_holder" className='design-img lazyMe'/>
            <img lazyPic="/images/designs/medgrocer.webp" alt="design_image" className='design-img lazyMe absolute top-0 left-0'/>
          </div>
          
          <div className='flex flex-col items-end md:items-start md:gap-2 xl:gap-4 lazyMe'>
            <DesignLabel title='MedGrocer' tool='Figma'/>
            <div className='mr-5 relative bottom-[62px] md:static md:mr-0'>
              <Button2 text='VIEW'/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import BackSVG from '../../svgs/BackSVG';
import ViewLinkBtn from '../../buttons/ViewLinkBtn.jsx';

export default function DesignPageInfo(props) {
  return (
    <div className='base gap-7 2xl:gap-14 w-full'>
        {/* Back Button */}
        <Link to='/' state={{ designRef: props.designRef }} className='flex gap-2 lg:gap-3 items-center w-fit self-start'>
          <BackSVG/>
          <p className='font-semibold text-white'>BACK</p>
        </Link>


        {/* Project Info */}
        <div className='flex flex-col gap-7 2xl:gap-14 w-full'>
          <p className='text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>{props.title}</p>

          <div className='flex flex-col 2xl:flex-row gap-3 md:gap-6 2xl:gap-24'>
            {/* Description */}
            <div className='flex flex-col gap-[7px] 2xl:max-w-[580px]'>
              <p className='text-[12px] md:text-[17px] xl:text-[20px] text-white'>DESCRIPTION</p>
              <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[30px]'>{props.description}</p>
            </div>

            <div className='flex gap-6 md:gap-24'>
              {/* Role */}
              <div className='flex flex-col gap-[7px] 2xl:max-w-[400px]'>
                <p className='text-[12px] md:text-[17px] xl:text-[20px] text-white'>TOOL</p>
                <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-4xl'>{props.tool}</p>
              </div>
              {/* Year */}
              <div className='flex flex-col gap-[7px] min-w-[100px] 2xl:min-w-fit'>
                <p className='text-[12px] md:text-[17px] xl:text-[20px] text-white'>YEAR</p>
                <p className='text-[17px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-4xl'>{props.year}</p>
              </div>
            </div>
          </div>

           {/* View Site button */}
           <div className='flex justify-end w-full'>
              <ViewLinkBtn text={props.btnText} link={props.link}/>
            </div>
        </div>
      </div>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import BackSVG from '../../svgs/BackSVG';
import ViewLinkBtn from '../../buttons/ViewLinkBtn.jsx';

export default function ProjectPageInfo(props) {
  return (
    <div className='base gap-7 2xl:gap-14'>
        {/* Back Button */}
        <Link to='/' state={{ scrollTo: props.scrollTo, slideTo: props.slideTo }} className='flex gap-2 lg:gap-3 items-center w-fit self-start'>
          <BackSVG/>
          <p className='font-semibold text-white'>BACK</p>
        </Link>


        {/* Project Info */}
        <div className='flex flex-col gap-7 2xl:gap-14'>
          <p className='text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>{props.title}</p>

          <div className='flex flex-col md:flex-row gap-3 md:items-center'>
            <div className='flex gap-6 xl:gap-16 2xl:gap-36'>
              {/* Role */}
              <div className='flex flex-col gap-[7px] w-[170px] md:w-[210px] lg:w-[300px] xl:w-max'>
                <p className='text-[12px] md:text-[17px] xl:text-[20px] text-white'>ROLE</p>
                <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-4xl'>{props.role}</p>
              </div>
              {/* Year */}
              <div className='flex flex-col gap-[7px] w-max'>
                <p className='text-[12px] md:text-[17px] xl:text-[20px] text-white'>YEAR</p>
                <p className='text-[17px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-4xl'>{props.year}</p>
              </div>
            </div>

            {/* View Site button */}
            <div className='flex justify-end w-full'>
              <ViewLinkBtn text={props.btnText} link={props.link}/>
            </div>
          </div>
        </div>
      </div>
  )
}

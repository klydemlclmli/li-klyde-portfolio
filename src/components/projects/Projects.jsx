import React from 'react'
import ProjectLabel from './ProjectLabel';
import { lazyLoader } from '../../scripts/LazyLoader';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function Projects({sectionIds}) {
  lazyLoader();

  return (
    <div id={sectionIds.projects} className='base w-full gap-[40px] 2xl:gap-[70px] bg-navy text-white py-[90px] px-[12px] md:px-8 xl:px-20 2xl:px-[130px] z-10'>

      <p className='sectionLabel'>
        PROJECTS
      </p>

      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        loop={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container slider lazyMe"
      >
        <SwiperSlide className='swiper-slide relative'>
          <img src="/images/designs/designHolder.webp" alt="slide_holder" className='swiper-slide-img'/>
          <img lazyPic="/images/projects/core.webp" alt="slide_image" className='swiper-slide-img lazyMe absolute top-0 left-0'/>
          <ProjectLabel label='CEAP Online Resources for Education (CORE)'/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide relative'>
          <img src="/images/designs/designHolder.webp" alt="slide_holder" className='swiper-slide-img'/>
          <img lazyPic="/images/projects/cryptocause.webp" alt="slide_image" className='swiper-slide-img object-left lazyMe absolute top-0 left-0'/>
          <ProjectLabel label='CryptoCause'/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide relative'>
          <img src="/images/designs/designHolder.webp" alt="slide_holder" className='swiper-slide-img'/>
          <img lazyPic="/images/projects/asea.webp" alt="slide_image" className='swiper-slide-img lazyMe absolute top-0 left-0'/>
          <ProjectLabel label='Web-based Appointment System for ASEA iWork Builders Co.'/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide relative'>
          <img src="/images/designs/designHolder.webp" alt="slide_holder" className='swiper-slide-img'/>
          <img lazyPic="/images/projects/login-register.webp" alt="slide_image" className='swiper-slide-img lazyMe absolute top-0 left-0'/>
          <ProjectLabel label='Login and Register'/>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="13" fill="#D9D9D9"/>
            <path d="M16 8L10 13L16 18" stroke="#1C1C1C" stroke-width="2"/>
            </svg>
          </div>
          <div className="swiper-button-next slider-arrow">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="13" transform="rotate(-180 13 13)" fill="#D9D9D9"/>
            <path d="M10 18L16 13L10 8" stroke="#1C1C1C" stroke-width="2"/>
            </svg>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

    </div>
  )
}

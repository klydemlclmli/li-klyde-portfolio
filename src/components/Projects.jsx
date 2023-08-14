import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function Projects({sectionIds}) {
  return (
    <div id={sectionIds.projects} className='base w-full gap-[40px] bg-navy text-white py-[78px] px-14 xl:px-20 2xl:px-[130px] z-10'>

      <p className='sectionLabel'>
        PROJECTS
      </p>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
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
        className="swiper_container"
      >
        <SwiperSlide className='max-w-[500px]'>
          <img src="/images/core.png" alt="slide_image" className='swiper-slide-img'/>
        </SwiperSlide>
        <SwiperSlide className='max-w-[500px]'>
          <img src="/images/bosspaayos.png" alt="slide_image" className='swiper-slide-img'/>
        </SwiperSlide>
        <SwiperSlide className='max-w-[500px]'>
          <img src="/images/asea.png" alt="slide_image" className='swiper-slide-img'/>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FaArrowCircleLeft/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaArrowCircleRight/>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

    </div>
  )
}

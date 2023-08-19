import React from 'react'
import Button from '../buttons/Button.jsx'
import { Routes, Route, Link } from 'react-router-dom'

export default function (props) {
  return (
    <>
        <div className='absolute bottom-[-14px] left-[-14px] md:bottom-[-30px] md:left-[-30px]'>
          <p className='w-[215px] font-syne text-[15px] font-bold pb-[7px] text-white
          md:w-[415px] 2xl:w-[725px] md:text-[28px] 2xl:text-[38px] drop-shadow-btn-shadow'>
            {props.label}
          </p>
          <Button text="VIEW"/>
        </div>

    </>
  )
}

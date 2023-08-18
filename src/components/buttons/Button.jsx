import React from 'react'

export default function Button(props) {
  return (
    <button className='drop-shadow-btn-shadow font-syne text-[14px] text-black font-bold bg-white px-[20px] py-[10px] rounded-[99px]
    md:text-[20px] md:px-[27px] md:py-[14px] border-2 xl:border-4 border-transparent
    hover:transition-hover hover:duration-[300ms] hover:ease-in-out
    active:bg-transparent active:text-white active:border-white
    xl:hover:bg-transparent xl:hover:text-white xl:hover:border-white'>
      {props.text}
    </button>
  )
}

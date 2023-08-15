import React from 'react'

export default function Button(props) {
  return (
    <button className='drop-shadow-btn-shadow font-syne text-[14px] text-black font-bold bg-white px-[20px] py-[10px] rounded-[99px]
    md:text-[20px] md:px-[27px] md:py-[14px]'>
      {props.text}
    </button>
  )
}

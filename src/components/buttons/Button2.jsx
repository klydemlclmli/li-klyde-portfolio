import React from 'react'

export default function Button2(props) {
  return (
    <button className='drop-shadow-blk-shadow font-syne text-[14px] text-black font-bold bg-og-white/50 md:bg-og-white/50 px-[20px] py-[10px] rounded-[99px]
    xl:text-[20px] xl:px-[27px] xl:py-[14px] border-2 xl:border-4 border-transparent
    hover:transition-hover hover:duration-[300ms] hover:ease-in-out
    active:bg-transparent active:text-og-white md:active:text-og-white/50 active:border-og-white/50 active:drop-shadow-btn-shadow
    xl:hover:bg-transparent xl:hover:text-og-white xl:hover:text-og-white/50 xl:hover:border-og-white/50 xl:hover:drop-shadow-btn-shadow'>
      {props.text}
    </button>
  )
}

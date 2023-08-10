import React from 'react'

export default function NavbarBtn(props) {
  return (
    <>
      <div class="group flex flex-col items-center justify-center">
      <a href={props.link} className='group-hover:translate-y-[-4px]
                    group-hover:ease-in-out
                    group-hover:duration-[0.35s]'>{props.label}</a>
        <div class="w-[8px] h-[8px] bg-white lg:bg-black rounded-full opacity-0
                    transition-transform duration-[0.35s]
                    group-hover:transform group-hover:translate-y-[-4px]
                    group-hover:opacity-100
                    group-hover:ease-in-out
                    "></div>
      </div>
    </>
  )
}

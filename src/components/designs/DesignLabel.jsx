import React from 'react'

export default function DesignLabel(props) {
  return (
    <div className='w-[300px] md:w-auto bg-og-white/[0.6] p-5 md:p-[10px] gap-5 md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] drop-shadow-blk-shadow'>
      <div className='flex flex-col w-[155px] md:w-auto'>
        <p className='md:max-w-[240px] lg:max-w-[280px] xl:max-w-[340px] 2xl:max-w-[440px]'>{props.title}</p>
        <p className='font-medium'>Tool used: {props.tool}</p>
      </div>
    </div>
  )
}

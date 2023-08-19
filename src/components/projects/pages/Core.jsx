import React from 'react'
import { Link } from 'react-router-dom'

export default function Core() {
  return (
    <div className='absolute bg-black text-white font-syne text-xl base w-screen h-screen'>
      Test
      <Link to='/' state={{ scrollTo: 'projects', slideTo: 2 }}>
        Back
      </Link>
    </div>
  )
}

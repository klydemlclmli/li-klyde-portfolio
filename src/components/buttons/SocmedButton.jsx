import React from 'react'

export default function SocmedButton(props) {
  return (
    <button onClick={() => window.open(props.link, '_blank')} className='p-[15px] bg-darkest-beige rounded-full active:bg-socmed-hover xl:hover:bg-socmed-hover hover:drop-socmed-hvr hover:transition-hover hover:duration-[300ms] hover:ease-in-out'>
      {props.svg}
    </button>
  )
}

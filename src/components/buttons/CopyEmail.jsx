import React from 'react'

export default function CopyEmail(props) {
  const copyEmail = () => {
    navigator.clipboard.writeText('klydemalcolmli@gmail.com');
    props.copyRef.current.classList.add('myToast');
    props.copyRef.current.classList.remove('myUnToast');
    setTimeout(() => {
      props.copyRef.current.classList.add('myUnToast');
      props.copyRef.current.classList.remove('myToast');
    }, 2500);
  }

  return (
    <button onClick={copyEmail} className='p-[15px] bg-darkest-beige md:bg-white/20 rounded-full active:bg-socmed-hover md:active:bg-white/[0.35] xl:hover:bg-white/[0.35] hover:drop-socmed-hvr hover:transition-hover hover:duration-[300ms] hover:ease-in-out'>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet" className='w-[30px] h-[30px]'>

      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none" className='fill-white '>
      <path d="M764 4895 c-82 -18 -137 -47 -201 -107 -62 -59 -95 -112 -117 -189
      -15 -49 -16 -198 -14 -1511 l3 -1456 30 -44 c87 -123 263 -123 350 0 l30 44 5
      1347 5 1348 30 48 c22 36 45 57 84 77 l53 28 1112 0 c1053 0 1113 1 1151 19
      158 72 167 295 15 381 l-45 25 -1215 2 c-982 1 -1227 -1 -1276 -12z"/>
      <path d="M1570 4030 c-117 -43 -216 -137 -263 -252 l-22 -53 -3 -1564 c-2
      -1387 -1 -1571 13 -1625 41 -161 174 -285 339 -315 83 -15 2409 -15 2492 0
      121 22 229 96 291 200 67 112 63 13 63 1714 0 1002 -4 1555 -11 1584 -28 124
      -117 234 -235 292 l-69 34 -1270 2 c-1244 2 -1271 2 -1325 -17z m2370 -430
      c24 -14 58 -45 75 -68 l30 -44 3 -1331 c2 -940 0 -1343 -8 -1370 -14 -49 -65
      -106 -115 -128 -38 -18 -94 -19 -1043 -19 -884 0 -1007 2 -1040 16 -47 19 -88
      58 -113 106 -19 37 -19 73 -17 1381 l3 1343 27 42 c16 23 39 49 53 58 68 44
      47 43 1100 41 l1000 -2 45 -25z"/>
      </g>
      </svg>

    </button>
  )
}

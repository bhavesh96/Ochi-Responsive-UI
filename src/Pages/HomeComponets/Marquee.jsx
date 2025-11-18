import React from 'react'

const Marquee = () => {
  return (
    <div className='bg-[#004D43] rounded-t-4xl overflow-hidden'>
        <div className='flex h-fit text-[#f0f0f0] text-[40vh] font-[FGSemibold] whitespace-nowrap marquee-content border-block border-2 py-10'>
            <span className='uppercase h-fit leading-[37vh] px-4'>We are ochi</span>
            <span className='uppercase h-fit leading-[37vh] px-4'>We are ochi</span>
            <span className='uppercase h-fit leading-[37vh] px-4'>We are ochi</span>
        </div>
    </div>
  )
}

export default Marquee
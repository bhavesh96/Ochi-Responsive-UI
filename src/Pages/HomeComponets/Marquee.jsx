import React from 'react'

const Marquee = () => {
  return (
    <div className='bg-[#004D43] rounded-t-2xl overflow-hidden'>
        <div className='flex h-fit text-white text-[40vh] xl:text-[60vh] font-[FGSemibold] whitespace-nowrap marquee-content py-18'>
            <span className='uppercase h-fit leading-25 xl:leading-75 px-4'>We are ochi</span>
            <span className='uppercase h-fit leading-25 xl:leading-75 px-4'>We are ochi</span>
            <span className='uppercase h-fit leading-25 xl:leading-75 px-4'>We are ochi</span>
        </div>
    </div>
  )
}

export default Marquee
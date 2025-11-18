import React from 'react'

export const HeroSection = () => {
  return (
    <div className='pt-16  min-h-screen bg-[#f1f1f1]'>
        
        <div className='topHeroPart px-5 flex lg:justify-center flex-col pt-10 md:pt-8 pb-26 xl:px-13 md:min-h-[70vh] font-[FGSemibold] text-[12vh] text-[#212121]'>
            <div className='overflow-hidden leading-[10vh]'>WE CREATE</div>
            
            <div className='flex items-center    overflow-hidden'>
                <div className='w-[9vw] h-[8vh] rounded-md mr-1 translate-y-1 bg-green-500'></div>
                <div className='space-nowrap leading-[10vh]'>EYE-OPENING</div>
            </div>
            
            <div className='overflow-hidden leading-[10vh]'>PRESENTATIONS</div>
        </div>
        
        <hr className='text-gray-400 py-2' />

        <div className='bottemHeroPart px-5 xl:px-13 flex flex-col md:flex-row text-[#212121] font-[NMRegular] gap-7'>
            <div className='bottemLeft flex-1'>Presentation and storytelling agency</div>
            
            <div className='bottemRight md:flex-2 lg:flex-1 flex flex-col md:flex-row gap-7 justify-between'>
                <div className='flex-1'>For innovation teams and global brands</div>
                <a href="#" className='flex md:justify-end flex-1 gap-2 text-[0.9rem] group'>
                    <span className='border group-hover:bg-[#212121] group-hover:text-[#f1f1f1] px-2 py-1 h-fit  rounded-full'>START THE PROJECT</span>
                    <span className='hidden xl:flex h-fit border group-hover:bg-[#212121] group-hover:text-[#f1f1f1] rounded-full p-0.5 '>»»»»</span>
                </a>
            </div>
        </div>

        <marquee behavior="scroll" direction="down" scrollamount="4" scrolldelay='100' className="hidden h-6 mb-10 lg:flex justify-center mt-8 xl:mt-22 overflow-hidden">

            <div className=' h-20 text-center text-gray-600'>Scroll Down</div>
        </marquee>

    </div>
  )
}

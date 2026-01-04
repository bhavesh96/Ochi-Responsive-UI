import React from 'react'

export const HeroSection = () => {
  return (
    <div className='pt-16 h-150 md:h-155 lg:h-170 xl:h-screen bg-[#f1f1f1]'>
        
        <div className='topHeroPart flex flex-col px-5 pb-18 lg:pb-36  pt-10 md:pt-8 lg:pt-18 xl:px-13 md:h-[70vh] lg:h-fit font-[FGSemibold] text-[18vw] md:text-[12vw] lg:text-[9vw] xl:text-[9vw] text-[#212121]'>
            <div className='overflow-hidden leading-[13vw] md:leading-[11vh] lg:leading-[9vh] xl:leading-[14vh]'>WE CREATE</div>
            
            <div className='flex flex-wrap items-center overflow-hidden'>
                <div className='bg-green-600 w-16 h-10 md:h-15 md:w-23 lg:h-17 lg:w-26 xl:h-21 xl:w-35 rounded-md translate-y-1 bg-green-500'></div>
                <div className='whitespace-nowrap ml-3 leading-[13vw] md:leading-[11vh] lg:leading-[9vh] xl:leading-[14vh]'>EYE-OPENING</div>
            </div>
            
            <div className='overflow-hidden leading-[13vw] md:leading-[11vh] lg:leading-[9vh] xl:leading-[14vh]'>PRESENTATIONS</div>
        </div>
        
        <hr className='text-gray-400 py-2' />

        <div className='bottemHeroPart px-5 xl:px-13 flex flex-col md:flex-row text-[#212121] font-[NMRegular] gap-7'>
            <div className='bottemLeft flex-1'>Presentation and storytelling agency</div>
            
            <div className='bottemRight md:flex-2 lg:flex-1 flex flex-col md:flex-row gap-7 justify-between'>
                <div className='flex-1'>For innovation teams and global brands</div>
                <a href="#" className='flex md:justify-end items-center flex-1 text-[0.9rem] '>
                    <div className='flex w-fit gap-2 items-center group'>
                        <span className='border group-hover:bg-[#212121] group-hover:text-[#f1f1f1] px-3 py-1 h-fit  rounded-full'>START THE PROJECT</span>
                        <span className='hidden xl:flex justify-center items-center h-8 border rounded-full group-hover:bg-[#212121] group-hover:text-[#f1f1f1] p-1.5'>
                            <img className='flex group-hover:hidden h-5 rotate-180' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiklEQVR4nO2VXQqAIBAGvUURiM756riB3caIiiKsfHGF2gFf/QbdH2MURSmIc64F+prhAYjAIBoONN77cQufrLWdhheHz4WzXharhOcKFH12XgSK/zkPAiIFx42AWLWTEBBtNS4C4n3OSaDKkGETqDbhOAT2lRqWFSsSfhGQn+0JgaxjPiWgKL9hBmQqkSXLvyD7AAAAAElFTkSuQmCC" alt="down-left-arrow"></img>
                            <img className="hidden group-hover:flex h-5 rotate-180" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVR4nO2VSwqAMAxEewvFK+pxhXqMGdquFaGLIn66aQI1D7KeR5uPc4ZhNCTGOAKYNcM9yR3AIhoeQhgArDl8SylNFt6c0F04yf0slfBagabPzg+B5n/OFwGRhuODgFi380ZAdNR4ERCfcxYCKkuGWUBtwzELFCfVnydWJLwUUNntV4Hacl0JGMZvOADeYdIx1hOdcQAAAABJRU5ErkJggg==" alt="down-left-arrow"></img>
                        </span>
                    </div>
                </a>
            </div>
        </div>

        <marquee behavior="scroll" direction="down" scrollamount="4" scrolldelay='100' className="hidden h-5 mb-10 xl:flex justify-center mt-8 xl:mt-16 overflow-hidden">

            <div className='h-20 text-center text-gray-400'>Scroll Down</div>
        </marquee>

    </div>
  )
}

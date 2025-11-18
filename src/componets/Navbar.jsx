import React, { useMemo } from 'react'

export const Navbar = () => {
  
    const menuList = [
      {text:"Service", link:"#"},
      {text:"Our work", link:"#"},
      {text:"About us", link:"#"},
      {text:"Insights", link:"#"},
      {text:"Contact us", link:"#"}
    ]

  return (
    <div className='Navbar fixed z-20 top-0 left-0 w-full backdrop-blur-md bg-white/10 flex items-center px-5 xl:px-13 py-3 text-[#212121]'>
        <div className='leftSide flex-1 font-[NMRegular2] font-bold text-4xl '>ochi</div>
        {/* large device nav */}
        <div className='rightSide hidden lg:flex flex-1 font-[NMRegular] w-full gap-10 item-center '>
            {menuList.map((menu,index)=>index===4?
            <div key={menu.text+index} className=' flex-grow flex justify-end'>
              <div 
                className="
                  relative
                  before:absolute before:bottom-0 before:left-0
                  before:h-[1px] before:w-full before:bg-black
                  before:origin-left
                  before:transform before:scale-x-0
                  hover:before:scale-x-100
                  before:transition-transform before:duration-[500ms]
                  h-8 overflow-hidden text-center w-fit group
                "
              >
                <div className='group-hover:-translate-y-full transition ease-in-out duration-500 p-2'>{menu.text}</div>
                <div className='group-hover:-translate-y-full transition ease-in-out duration-500 p-2'>{menu.text}</div>
              </div>
            </div>
             :
            <div key={menu.text+index}
              className="
                relative
                before:absolute before:bottom-0 before:left-0
                before:h-[1px] before:w-full before:bg-black
                before:origin-left
                before:transform before:scale-x-0
                hover:before:scale-x-100
                before:transition-transform before:duration-[500ms]
                h-8 overflow-hidden text-center w-fit group
              "
            >
              <div key={menu.text} className='h-8 group-hover:-translate-y-full transition ease-in-out duration-500'>{menu.text}</div>
              <div key={menu.text+"1"} className='h-8 group-hover:-translate-y-full transition ease-in-out duration-500 py-1'>{menu.text}</div>
            </div>
            )}
        </div>
        {/* small device nav */}
        <div className='flex lg:hidden flex-col gap-1.5'>
          <div className='border-b-2 border-[#212121] text-[#212121] w-[25px]'></div>
          <div className='border-b-2 border-[#212121] text-[#212121] w-[25px]'></div>
        </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'

export const EyeVideo = () => {

    const [blackDegree, setBlackDegree] = useState(0)
    const [whiteDegree, setWhiteDegree] = useState(0)
    
    

    useEffect(() => {

        window.addEventListener("mousemove",(e)=>{
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            

            const screenWidth = window.innerWidth/2
            const screenHight = window.innerHeight/2
    
            const deltaX = mouseX - screenWidth
            const deltaY = mouseY - screenHight

            console.log(window.innerHeight,window.innerWidth,mouseX,mouseY)
            
            const angle = Math.atan2(deltaY,deltaX )
        
            const angleDeg = angle * (180 / Math.PI);
            setBlackDegree(angleDeg-180);
        }) 

    },[])
    
    

  return (
    <div className='flex relative justify-center items-center bg-[url("./Photos/Top-Viewbbcbv-1-scaled.jpg")] h-[70vh] md:h-screen w-full bg-cover bg-center'>
        
        <div className='flex gap-[5vw] w-fit h-fit'>
                {/* Left Eye */}
                {/*Left white */}
                <div className='LeftEye bg-white h-[12vw] w-[12vw] rounded-full'>
                    {/*Left black */}
                    <div className='w-full h-fit -translate-1/2 relative top-1/2 left-1/2' style={{transform: `rotate(${blackDegree}deg)` }}>
                        <div className=' h-[8vw] w-[8vw] rounded-full bg-black'>
                            {/*Left small white */}
                            <div className={`w-full h-fit -translate-1/2 relative top-1/2 left-1/2 -rotate-${whiteDegree}`}>
                                <div className=' h-[2vw] w-[2vw] rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Eye */}
                {/*Right white */}
                <div className='RightEye bg-white h-[12vw] w-[12vw] rounded-full'>
                    {/*Right black */}
                    <div className="w-full h-fit -translate-1/2 relative top-1/2 left-1/2" style={{ transform: `rotate(${blackDegree}deg)` }}>
                        <div className=' h-[8vw] w-[8vw] rounded-full bg-black'>
                            {/*Right small white */}
                            <div className={`w-full h-fit -translate-1/2 relative top-1/2 left-1/2 -rotate-${whiteDegree}`}>
                                <div className=' h-[2vw] w-[2vw] rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
        
    </div>
  )
}

import React from 'react'
import { Navbar } from '../componets/Navbar'
import { HeroSection } from "./HomeComponets/HeroSection";
import Marquee from './HomeComponets/marquee';
import { EyeVideo } from './HomeComponets/EyeVideo';

export const Home = () => {
  return (
    <>
        <div className='bg-[#f1f1f1]'>
          <Navbar />
          <HeroSection />
          <Marquee />
          <EyeVideo />
        </div>
    </>
  )
}

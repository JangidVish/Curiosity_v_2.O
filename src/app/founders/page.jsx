import React from 'react'
import { ShootingStars } from "../components/shooting-stars";
import { StarsBackground } from "../components/stars-background";
import { AnimatedTestimonials } from '../components/founders';
import { founders } from '../data/founders';
export const Founders = () => {
  return (
    <>
    {/* <ShootingStars /> */}
    {/* <StarsBackground/> */}
    
    <div className ='flex flex-col justify-center items-center gap-10 w-full min-h-screen bg-gradient-to-b from-black to-red-950 '>
    <h1 className= 'text-4xl text-center'>
      Founders
    </h1> 
    <div className='  justify-center items-center'>
        <AnimatedTestimonials testimonials={founders} autoplay={true} />
    </div>
    </div>
    </>
  )
}

export default Founders;
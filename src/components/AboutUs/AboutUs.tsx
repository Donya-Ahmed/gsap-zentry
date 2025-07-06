import React from 'react'
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle'

export default function AboutUs() {
  return (
    <section className="h-dvh w-screen overflow-hidden relative">
      <div className='flex py-20 flex-col gap-5 items-center'>
        <span className='text-xs lg:text-[10px] text-center font-robert-medium'>Welcome to Zentry</span>
        {/* <h2 className='!text-black animated-title text-center font-zentry'>Discover the world's largest shared adventure</h2> */}
        <AnimatedTitle className="!text-black" text={`Discover the world's largest <br/>shared adventure`} />
      </div>
    </section>
  )
}

import React from 'react'
import VideoCard from '../VideoCard/VideoCard'

export default function Features() {
  return (
   <section className='bg-black pb-52 overflow-hidden w-screen h-100dvh'>
     <div className='container mx-auto px-3 md:px-10 '>
      <div className="font-circular-web px-5 py-32 text-blue-50">
        <p className='text-lg'>Explore the Zentry Universe</p>
        <p className='text-lg opacity-50 max-w-md'>Immerse yourself in an IP-rich product universe where players, agentic AI and blockchain lead the new economic paradigm.</p>
      </div>
      <VideoCard
        videoSrc="/videos/feature-1.mp4"
        title={`Radia<b>n</b>t`}
        description="The game of games app transforming moments across Web2 & Web3 titles into rewards"
      />
     </div>
   </section>
  )
}

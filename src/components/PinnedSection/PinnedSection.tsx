import React from 'react'
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle'

export default function PinnedSection() {
  return (
    <section className='min-h-dvh w-screen relative overflow-hidden bg-black'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
       <AnimatedTitle text="THE UNIVERS<b>E</b> POWERED BY ZENT"/>
      </div>
    </section>
  )
}

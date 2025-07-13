import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainContainer } from '../../App';
gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle({text,className}:{text: string,className?: string}) {

  const titleContainerRef = React.useRef<HTMLDivElement|null>(null);
  useEffect(()=>{

  const ctx= gsap.context(()=>{
    if(!titleContainerRef.current) return;
  gsap.timeline({
  scrollTrigger: {
    trigger: titleContainerRef.current,
    // Remove scroller if not using Locomotive Scroll
    scroller: MainContainer,
    start: "top bottom",
    toggleActions: "play none none reverse",
  }
}).fromTo(
  titleContainerRef.current.querySelectorAll(".animated-word"),
  {
    opacity: 0,
    transform: 'translate3d(10px,51px,-60px) rotateY(60deg) rotateX(-40deg)',
  },
  {
    opacity: 1,
    transform: 'translate3d(0px,0px,0px) rotateY(0deg) rotateX(0deg)',
    ease: "power2.Out",
    stagger:0.1
  }
)
  })
   return ()=> ctx.revert()
  },[])
  return (
    <div ref={titleContainerRef} className={`animated-title ${className}`}>
      {text.split("<br/>").map((part, index) => (
        <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3 tracking-wide'>
            {part.split(" ").map((word,i)=>(<span className='animated-word' dangerouslySetInnerHTML={{__html:word}} key={i}></span>))}

        </div>
      ))}
    </div>
  )
}

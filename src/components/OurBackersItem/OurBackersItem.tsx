import  { ReactNode, useEffect, useRef } from 'react'
import { MainContainer } from '../../App'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export default function OurBackersItem({item,aside}:{item:ReactNode,aside:string}) {
    const itemRef = useRef(null)

  useEffect(() => {
     const el = itemRef.current;

  ScrollTrigger.create({
    trigger: el,
    scroller: MainContainer,
    start: "top 80%",
    end: "top 20%",
    onEnter: () => gsap.to(el, { color: "#EDFF66", duration: 0.3 }),
    onLeaveBack: () => gsap.to(el, { color: "#ffffff", duration: 0.3 }),
    // Optional: If you scroll past and return downward
    onLeave: () => gsap.to(el, { color: "#ffffff", duration: 0.3 }),
    onEnterBack: () => gsap.to(el, { color: "#EDFF66", duration: 0.3 }),
  })
  }, [])
  return (
    <div  className='backers-item '>
      <p className='relative ' ><p className='text-6xl font-zentry special-font uppercase ' ref={itemRef}>{item}</p>
        <aside className='text-[8px] absolute mr-8 right-full top-2 uppercase font-general'>{aside}</aside>
      </p>
    </div>
  )
}
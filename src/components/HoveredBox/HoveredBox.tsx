import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "../TiltCard/TiltCard";
gsap.registerPlugin(ScrollTrigger);
export default function HoveredBox({img}:{img:string}) {
  const elementRef = React.useRef<HTMLDivElement | null>(null);

  const handleMovement = () => {
    if (!elementRef.current) return;
    gsap.to(elementRef.current, {
      scale: 1,
      width: "14rem",
      height: "14rem",
      duration: 0.5,
      ease: "power3.inOut",
    });
  };
  const handleExit = () => {
    if (!elementRef.current) return;
    gsap.to(elementRef.current, {
      scale: 0,
      width: "2.5rem",
      height: "2.5rem",
      duration: 0.5,
      ease: "power3.inOut",
    });
  };
  return (
    <span
      onMouseMove={handleMovement}
      onTouchMove={handleMovement}
      onTouchEnd={handleExit}
      onMouseLeave={handleExit}
      className="bg-black  inline-block w-10 h-10 md:w-14 md:h-14 rounded-lg word relative cursor-pointer "
    >
      <div
        className=" w-10 h-10  overflow-hidden absolute top-0 left-0 origin-center -translate-x-1/2 -translate-y-1/2 scale-0"
        ref={elementRef}
      >
        <TiltCard className=" w-full h-full rounded-lg border-black border-2 overflow-hidden">
          <img
            src={img}
            className="w-full h-full object-cover"
          />
        </TiltCard>
      </div>
    </span>
  );
}

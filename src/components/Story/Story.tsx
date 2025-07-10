import React, { useRef } from "react";
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";
import RoundedClipPath from "../RoundedClipPath/RoundedClipPath";
import Button from "../Button/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Story() {
  const imgFrame = useRef<HTMLImageElement | null>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgFrame.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      imgFrame.current.getBoundingClientRect();
    const posX = clientX - left;
    const posY = clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const rotateX = ((posY - centerY) / centerY) * -25;
    const rotateY = ((posX - centerX) / centerX) * 25;
    gsap.to(imgFrame.current, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 600,
      ease: "power1.inOut",
    });
  };
  const handleMouseLeave = () => {
    if (!imgFrame.current) return;
    gsap.to(imgFrame.current, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  return (
    <section
   
      className=" py-20 w-screen overflow-hidden relative bg-black"
    >
      <div className="flex mt-36 flex-col gap-5 items-center">
        <span className="text-xs lg:text-[10px] text-center font-general !text-blue-50">
          The multiversal ip world
        </span>
        <AnimatedTitle
          className="!text-blue-50 mix-blend-difference relative z-10"
          text={`the st<b>o</b>ry of <br/> a hidden real<b>m</b>`}
        />
      </div>
      <div  onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove} className="relative">
        <div className="rounded-clip h-[70vh] md:h-dvh">
          <div className="story-img-mask">
            <div className="story-img-content">
              <img ref={imgFrame} src="/img/entrance.webp" alt="entrance" />
            </div>
          </div>
        </div>
        <RoundedClipPath />
      </div>
      <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
        <div className="flex h-full w-fit flex-col items-center md:items-start">
          <p
            className=" mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start"
          >
            Where realms converge, lies Zentry and the boundless pillar.
            Discover its secrets and shape your fate amidst infinite
            opportunities.
          </p>
          <Button id="story-id" text="discover prologue" className="mt-5" />
        </div>
      </div>
    </section>
  );
}

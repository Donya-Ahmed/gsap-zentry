import React, { useEffect } from "react";
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainContainer } from "../../App";
gsap.registerPlugin(ScrollTrigger);
export default function AboutUs() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".mask-clip-about", {
        clipPath: "polygon(14% 0, 82% 16%, 80% 92%, 6% 89%)",
        width: "30vw",
        height: "24vh",
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#pendingClip",
            // Remove scroller if not using Locomotive Scroll
            scroller: MainContainer,
            start: "56% center",
            end: "+=900px center",
            scrub: 0.5,
            pin: true,
            onUpdate: (self) => {
              const progress = self.progress;
              if (progress === 1) {
                gsap.set(".mask-clip-about", {
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                  width: "100vw",
                  height: "100vh",
                });
              } else {
                const polygonClipPath = `polygon(
                  ${gsap.utils.interpolate(14, 0, progress)}% 0%,
                  ${gsap.utils.interpolate(82, 100, progress)}% 16%,
                  ${gsap.utils.interpolate(80, 100, progress)}% 92%,
                  ${gsap.utils.interpolate(6, 0, progress)}% 89%
                )`;
                gsap.set(".mask-clip-about", {
                  clipPath: polygonClipPath,
                  width: `${gsap.utils.interpolate(30, 100, progress)}vw`,
                  height: `${gsap.utils.interpolate(24, 100, progress)}vh`,
                });
              }
            },
          },
        });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className=" bg-blue-50 min-h-dvh w-screen overflow-hidden relative">
      <div className="flex mt-36 flex-col gap-5 items-center">
        <span className="text-xs lg:text-[10px] text-center font-general">
          Welcome to Zentry
        </span>
        {/* <h2 className='!text-black animated-title text-center font-zentry'>Discover the world's largest shared adventure</h2> */}
        <AnimatedTitle
          className="!text-black"
          text={`Disc<b>o</b>ver the world's largest <br/>shared <b>a</b>dventure`}
        />
      </div>
      <div id="pendingClip" className="h-dvh relative w-screen">
        <div className="mask-clip-about  mt-10  overflow-hidden  absolute left-1/2 -translate-x-1/2 ">
          <img
            className="absolute inset-0 size-full  object-cover"
            src="/img/about.webp"
            alt="About Us"
          />
        </div>
      </div>
    </section>
  );
}

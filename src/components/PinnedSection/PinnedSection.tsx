import React, { useEffect } from "react";
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";
import Button from "../Button/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainContainer } from "../../App";
import PaginationItem from "../PaginationItem/PaginationItem";
gsap.registerPlugin(ScrollTrigger);

export default function PinnedSection() {
  const pinnedVideoRef = React.useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".pagintion") as HTMLElement[];
      const pargraphs = gsap.utils.toArray(".pagintion p");
      const lineContrainers = gsap.utils.toArray(".lineContrainer");
      const titles = gsap.utils.toArray(".pagintion h4");
      gsap.set(pargraphs, {
        visibility: "hidden",
        opacity: 0.3,
        scaleY: 0,
      });
      gsap.set(lineContrainers, {
        visibility: "hidden",
        opacity: 0,
        height: 0,
      });
      gsap.set(titles, {
        opacity: 0.5,
      });
      ScrollTrigger.create({
        trigger: ".pin-section",
        start: "top 70%",
        // markers:true,
        scroller: MainContainer,
        toggleActions: "play none none reverse",
        animation: gsap.to(".pin-section", {
          backgroundColor: "#EDFF66",
        }),
      });
      let calculatedOffset: number = 0;
      items.forEach((item: HTMLElement, index: number) => {
        if (!item) return;
        const lineConatiner = lineContrainers[index] as HTMLElement;
        const line = item.querySelector(".line");
        const pargraph = item.querySelector("p");
        const title = item.querySelector("h4");
        const t1 = gsap.timeline({ paused: true }).to(line, {
          y: 100,
        });
        const start = `top+=${calculatedOffset} center`;
        const animationDuration = 1000;
        const end = `+=${animationDuration}`;
        const mainConatinerAnimation = gsap
          .timeline({ paused: true })
          .to(lineConatiner, {
            autoAlpha: 1,
            height: "6rem",
            duration: 0.2,
          })
          .to(pargraph, {
            autoAlpha: 1,
            scaleY: 1,
          })
          .to(
            title,
            {
              opacity: 1,
              duration: 0.2,
            },
            "<"
          );
        ScrollTrigger.create({
          trigger: item,
          start,
          end,
          scroller: MainContainer,
          animation: t1,
          scrub: 1,
          onEnter: () => mainConatinerAnimation.play(),
          onLeaveBack: () => mainConatinerAnimation.reverse(),
          onLeave: () => mainConatinerAnimation.reverse(),
          onEnterBack: () => mainConatinerAnimation.play(),
        });
        calculatedOffset += animationDuration;
      });
      ScrollTrigger.create({
        trigger: ".pin-section",
        start: "8% top",
        end: "+=3000 top",
        scrub: 1.2,
        pin: true,
        pinSpacing: true,
        // markers: true,
        scroller: MainContainer,
        toggleActions: "play none none reverse",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="pin-section min-h-[113dvh] w-screen relative overflow-hidden bg-black">
      <div className="flex flex-col ">
       <div className="!items-start !justify-start py-4 flex flex-col gap-4 max-w-2xl">
         <AnimatedTitle
          text="THE UNIVERS<b>E</b> POWERED BY ZENT"
          className=" title-item mt-20 lg:mt-32 !items-start !p-0 !pl-0 aligned-title-left"
        />
        <div className="lg:mx-0 mx-auto pl-10">
          <Button
            text="ENTER VAULT"
            id="vault"
            className="!bg-black !text-white !px-8"
          />
        </div>
       </div>
       <div className="flex   justify-between flex-col  md:flex-row mt-0 md:mt-40">
                <div className="flex items-start  mt-0  lg:mt-0 flex-col pl-8">
          <PaginationItem
            num="01"
            title={"Shaping Zentry Collectively"}
            description={
              "Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by people's imaginations"
            }
          />
          <PaginationItem
            num="02"
            title={"Unlocking Economic Opportunity"}
            description={
              "ZENT, a commodity-based currency that unlocks exclusive benefits, airdrops, quotas, and co-creation within and beyond Zentry ecosystem."
            }
          />
          <PaginationItem
            num="03"
            title={"Sharing Value Accrued"}
            description={
              "ZENT holders thrive as Zentry grows, benefiting from the expansive partnerships, treasury investment and economic activities."
            }
          />
        </div> 
         <div className="size-72 ">
          <video
            ref={pinnedVideoRef}
            className=" object-cover w-full h-full"
            src={`/videos/v2.webm`}
            autoPlay
            muted
            loop
          ></video>
        </div>

       </div>
      </div>
    </section>
  );
}

import React, { useEffect } from "react";
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";
import TiltTitle from "../TiltTitle/TiltTitle";
import { MainContainer } from "../../App";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function CardGallery() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".gallery-card") as HTMLElement[];
      const sortedCards = items.sort((a, b) => {
        const getCardNumber = (el: Element) => {
          const match = el.className.match(/card-(\d+)/);
          return match ? parseInt(match[1], 10) : 0;
        };

        return getCardNumber(a) - getCardNumber(b);
      });
      gsap.set(items, {
        opacity: 0,
        y: 100,
      });
      let calculatedOffset: number = 0;
      for (let i = 0; i < sortedCards.length; i += 2) {
        if (!sortedCards[i]) return;
        const t1 = gsap
          .timeline({ paused: true })
          .to(sortedCards[i], {
            y: 0,
            opacity: 1,
          })
          .to(
            sortedCards[i + 1],
            {
              y: 0,
              opacity: 1,
            },
            "<"
          );
        const start = `top+=${calculatedOffset} center`;
        const animationDuration = 400;
        const end = `+=${animationDuration}`;
        ScrollTrigger.create({
          trigger: sortedCards[i],
          start,
          end,
          scroller: MainContainer,
          animation: t1,
          scrub: 1,
          // markers: true,
          // onEnter: () => t1.play(),
          // onLeaveBack: () => t1.reverse(),
          // onLeave: () => t1.reverse(),
          // onEnterBack: () => t1.play(),
        });
        calculatedOffset += animationDuration;
      }
      // sortedCards.forEach((item: HTMLElement, index: number) => {
      //   if (!item) return;
      //   const t1 = gsap
      //     .timeline({ paused: true })
      //     .to(item, {
      //       y: 0,
      //       opacity: 1,
      //     })
      //     .to(sortedCards[index+1], {
      //       y: 0,
      //       opacity: 1,
      //     },"<");
      //   const start = `top+=${calculatedOffset} center`;
      //   const animationDuration = 500;
      //   const end = `+=${animationDuration}`;
      //   ScrollTrigger.create({
      //     trigger: item,
      //     start,
      //     end,
      //     scroller: MainContainer,
      //     animation: t1,
      //     scrub: 1,
      //     markers: true,
      //     // onEnter: () => t1.play(),
      //     // onLeaveBack: () => t1.reverse(),
      //     // onLeave: () => t1.reverse(),
      //     // onEnterBack: () => t1.play(),
      //   });
      //   calculatedOffset += animationDuration;
      // });
      ScrollTrigger.create({
        trigger: ".gallery-section",
        start: "8% top",
        end: "+=700 top",
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
    <section className="gallery-section relativer min-h-dvh w-screen bg-black overflow-hidden py-20">
      <AnimatedTitle
        text="Ze<b>n</b>try At a <br/>Glan<b>c</b>e"
        className="!text-white aligned-title-left !items-start !p-0 !pl-0 leading-[.9] "
      />
      <div className="container mx-auto px-4 grid grid-cols-2  mt-20 gap-20">
        <div className="col-span-2 lg:col-span-1 pt-40">
          <div className="gallery-card card-0 rounded-xl border-[#dedef259] border-[0.5px] w-[32rem]  ml-auto relative mb-10">
            <div className="absolute top-5  left-5 z-20">
              <h4 className="text-white text-[10px] font-general">Products</h4>
              <h3 className="font-zentry text-7xl text-white">4+</h3>
            </div>
            <video
              autoPlay
              muted
              loop
              className=" w-full h-full object-cover relative left-[50%] -translate-x-1/2"
              src="/videos/card-1@lg.webm"
            />
          </div>
          <div className="gallery-card card-2 rounded-xl bg-[#EDFF66] w-[22rem]  ml-auto relative mb-10 h-80 flex flex-col justify-between ">
            <TiltTitle
              text="30+"
              className=" text-center text-black font-zentry"
              maxFont={200}
            />
            <div className="flex justify-end px-8 pb-4">
              <h4 className="text-black text-[10px] font-general">Partners</h4>
            </div>
          </div>
          <div className="gallery-card card-4 rounded-xl bg-violet-300 w-[32rem]  ml-auto relative mb-10">
            <div className="absolute top-5  left-5 z-20">
              <h4 className="text-black text-[10px] font-general">Treasury</h4>
              <h3 className="font-zentry text-7xl text-black">140M+</h3>
            </div>
            <video autoPlay muted loop src="/videos/card-5@lg.webm" />
            <div className="grid grid-cols-6 absolute bottom-10 w-full  z-20">
              <div className="col-span-2 flex items-center justify-center gap-3">
                <div className="rounded-full bg-black w-5 h-5 "></div>
                <h4 className="text-blue-50 text-[8px] font-general">
                  LIQUID TOKEN
                  <br />
                  70%
                </h4>
              </div>
              <div className="col-span-2 flex items-center justify-center gap-3">
                <div className="rounded-full bg-[#EDFF66] w-5 h-5 "></div>
                <h4 className="text-blue-50 text-[8px] font-general">
                  INVESTMENTS
                  <br />
                  20%
                </h4>
              </div>
              <div className="col-span-2 flex items-center justify-center gap-3">
                <div className="rounded-full bg-[#DFDFF2] w-5 h-5 "></div>
                <h4 className="text-blue-50 text-[8px] font-general">
                  NET ASSETS
                  <br />
                  10%
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className="gallery-card card-1 rounded-xl bg-violet-300 w-[32rem]  mr-auto relative mb-10">
            <div className="absolute top-5  left-1  w-full">
              <h4 className="text-black text-[10px] font-general">Treasury</h4>
              <TiltTitle
                text="500K+"
                className=" text-center text-black font-zentry"
                maxFont={800}
              />
            </div>
            <img
              className=" relative left-[50%] -translate-x-1/2"
              src="/img/gallery-1.webp"
            />
          </div>
          <div className="gallery-card card-3 rounded-xl border-[#dedef259] border-[0.5px] w-[22rem]  mr-auto relative mb-10 h-96 flex flex-col justify-between p-4">
            <div>
              <h4 className="text-blue-50 text-[10px] font-general">
                Products
              </h4>
              <h3 className="font-zentry text-5xl text-blue-50">
                WORLD-CLASS BACKERS
              </h3>
            </div>
            <div className="ml-auto">
              <h4 className="text-blue-50 text-[12px] font-general uppercase">
                coinbase ventures
              </h4>
              <h4 className="text-blue-50 text-[12px] font-general uppercase">
                yzi labs
              </h4>

              <h4 className="text-blue-50 text-[12px] font-general uppercase">
                spartan
              </h4>

              <h4 className="text-blue-50 text-[12px] font-general uppercase">
                longhash
              </h4>

              <h4 className="text-blue-50 text-[12px] font-general uppercase">
                pantera capital
              </h4>

              <h4 className="text-blue-50 text-[12px] font-general uppercase">
                animoca brands
              </h4>
              <h4 className="text-blue-50 text-[12px] font-general uppercase">
                defiance capital
              </h4>
              <h4 className="text-blue-50 text-[12px] font-general uppercase">
                play ventures
              </h4>
              <h4 className="text-blue-50 text-[12px] font-general uppercase">
                skyvision capital
              </h4>
              <h4 className="text-blue-50 text-[12px] font-general uppercase">
                vessel capital
              </h4>
              <h4 className="text-blue-50 text-[12px] font-general uppercase">
                arche fund
              </h4>
              <h4 className="text-blue-50 text-[12px] font-general uppercase">
                synergis
              </h4>
            </div>
          </div>
          <div className="gallery-card card-5 rounded-xl bg-[#D9D9EB] w-[32rem]  mr-auto relative mb-10 h-72 flex flex-col justify-between ">
            <div className=" pt-4 pl-4">
              <h4 className="text-black text-[10px] font-general">
                Revenue generated
              </h4>
              <h4 className="text-black text-[10px] font-general">2024</h4>
            </div>
            <TiltTitle
              text="40M"
              className=" text-center text-black font-zentry"
              maxFont={280}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

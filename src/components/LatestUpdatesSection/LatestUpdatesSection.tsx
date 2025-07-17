import React, { useEffect } from "react";
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";
import Button from "../Button/Button";
import TiltCard from "../TiltCard/TiltCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainContainer } from "../../App";
gsap.registerPlugin(ScrollTrigger);

export default function LatestUpdatesSection() {
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     ScrollTrigger.create({
  //       trigger: ".gallery-section",
  //       start: "top top",
  //       end: "+=600px",
  //       pin: ".left-column-content",
  //       pinSpacing: false,
  //       scroller: MainContainer,
  //       markers: true,
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  return (
    <section className="gallery-section bg-blue-50 w-screen overflow-hidden min-h-dvh relative py-20">
      <div className="container grid grid-cols-2 mx-auto mt-20">
        {/* LEFT COLUMN - PINNED */}
        <div className="col-span-1">
          <div className="left-column-content flex flex-col items-start gap-4">
            <AnimatedTitle
              text="Latest Updates"
              className="!text-black aligned-title-left !items-start !p-0 !pl-0"
            />
            <p className="px-10 w-96">
              Stay updated with the latest news, events, and updates in our
              ecosystem. Be part of our universe's growth and evolution.
            </p>
            <div className="px-10">
              <Button
                text="Read All News"
                className="!bg-black !text-white !rounded-3xl !px-8"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - SCROLLING */}
        <div className="col-span-1 flex flex-col gap-8">
          <div className="cursor-pointer">
            <TiltCard>
              <img
                className="rounded-xl border-black border-2 w-full h-full object-cover"
                src="/img/gallery-2.webp"
                alt="Latest Updates"
              />
            </TiltCard>
            <div className="flex gap-4 mt-4">
              <p className="font-general text-[10px]">09.05.2024</p>
              <p className="w-64 font-circular-web font-[600] ms-8">
                Nexus: Zentry’s Metagame Portal Bridging Human & AI in the Global Play Economy
              </p>
            </div>
          </div>
          <div className="cursor-pointer">
            <TiltCard>
              <img
                className="rounded-xl border-black border-2 w-full h-full object-cover"
                src="/img/gallery-3.webp"
                alt="Latest Updates"
              />
            </TiltCard>
            <div className="flex gap-4 mt-4">
              <p className="font-general text-[10px]">22.11.2024</p>
              <p className="w-64 font-circular-web font-[600] ms-8">
                Zentry Whitepaper: The Blueprint to the Metagame
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

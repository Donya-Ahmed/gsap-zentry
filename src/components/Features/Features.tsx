import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import { TiLocationArrow } from "react-icons/ti";
import TiltCard from "../TiltCard/TiltCard";

export default function Features() {
  return (
    <section className="bg-black pb-52 overflow-hidden w-screen h-100dvh">
      <div className="container mx-auto px-3 md:px-10 ">
        <div className="font-circular-web px-5 py-32 text-blue-50">
          <p className="text-lg">Explore the Zentry Universe</p>
          <p className="text-lg opacity-50 max-w-md">
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>
        <VideoCard
          videoSrc="/videos/feature-1.mp4"
          title={
            <>
              Radia<b>n</b>t
            </>
          }
          description="The game of games app transforming moments across Web2 & Web3 titles into rewards"
        />
        <div className="grid grid-cols-4 grid-rows-3  gap-5 mt-10">
          <TiltCard className="me-32 md:me-0 col-span-full md:col-span-2 md:row-span-2">
            <VideoCard
              videoSrc="/videos/feature-2.mp4"
              title={
                <>
                  Zig<b>m</b>a
                </>
              }
              description="The NFT collection merging Zentry’s IP, AI, and gaming—pushing the boundaries of NFT innovation."
            />
          </TiltCard>
          <TiltCard className="ms-32 md:ms-0 col-span-full md:col-span-2 row-span-1">
            <VideoCard
              videoSrc="/videos/feature-3.mp4"
              title={
                <>
                  N<b>e</b>xus
                </>
              }
              description="The metagame portal uniting humans & AI to play, compete and earn, "
            />
          </TiltCard>
          <TiltCard className="me-32 md:me-0 col-span-full md:col-span-2 row-span-1">
            <VideoCard
              videoSrc="/videos/feature-4.mp4"
              title={
                <>
                  Az<b>u</b>l
                </>
              }
              description="The agent of agents elevating agentic AI experience to be more fun and productive. "
            />
          </TiltCard>
          <TiltCard className="grid-2 border border-white/30">
            <div className="flex size-full flex-col justify-between p-5 bg-violet-300">
              <h2 className="special-font grid-title max-w-64">
                M<b></b>ore Caming S<b>o</b>on
              </h2>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </TiltCard>
          <TiltCard className="grid-2 border border-white/30">
            <div className="flex size-full flex-col justify-between">
              <video
                className="size-full object-center object-cover"
                src="/videos/feature-5.mp4"
                loop
                muted
                autoPlay
              />
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

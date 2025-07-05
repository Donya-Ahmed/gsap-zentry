import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import { TiLocation } from "react-icons/ti";
import gsap from "gsap";

export default function Hero() {
  const totalVideos = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextIndex = (currentIndex + 1) % totalVideos;
  const backgroundVideoRef = useRef<HTMLVideoElement>();
  const [mouseMove,setMouseMove]=useState(false)
  const timeOut=useRef<ReturnType<typeof setTimeout>>()
  const handleMouseMove = (e: MouseEvent) => {
    setMouseMove(true)
    if(timeOut.current){
      clearTimeout(timeOut.current)
    }
    timeOut.current=setTimeout(()=>{
     setMouseMove(false)
     gsap.to(backgroundVideoRef.current,{alpha:0,duration:0.5})
    },1000)
    gsap.to(backgroundVideoRef.current,{alpha:1})
    const { clientX, clientY } = e;
    const maxOffsetX = 200;
    const maxOffsetY = 200;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const constrainedX = Math.min(
      Math.max(clientX, centerX - maxOffsetX),
      centerX + maxOffsetX
    );
    const constrainedY = Math.min(
      Math.max(clientY, centerY - maxOffsetY),
      centerY + maxOffsetY
    );
    const polygonClipPath = `polygon(
  ${Math.max(constrainedX - 100, 0)}px ${Math.max(constrainedY - 100, 0)}px,
  ${Math.min(constrainedX + 100, window.innerWidth)}px ${Math.max(
      constrainedY - 100,
      0
    )}px,
  ${Math.min(constrainedX + 100, window.innerWidth)}px ${Math.min(
      constrainedY + 100,
      window.innerHeight
    )}px,
  ${Math.max(constrainedX - 100, 0)}px ${Math.min(
      constrainedY + 100,
      window.innerHeight
    )}px
  )`;
    backgroundVideoRef.current!.style.clipPath = polygonClipPath;
  };
  const handleNextVideo = () => {
    setCurrentIndex(nextIndex);
    const animatedVideo = `#video-${nextIndex}`;
    const videos = ["#video-0", "#video-1", "#video-2", "#video-3"].filter(
      (v) => v !== animatedVideo
    );
    gsap.set(videos, { zIndex: 20 });
    gsap.set(animatedVideo, { zIndex: 30, width: "16rem", height: "16rem" });
    const currentVedio: HTMLVideoElement | null =
      document.querySelector(animatedVideo);
    if (currentVedio) {
      currentVedio.pause();
      currentVedio.currentTime = 0;
      currentVedio.play();
    }
    gsap.to(animatedVideo, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      width: "100%",
      height: "100%",
    });
  };
  useEffect(() => {
    if (!backgroundVideoRef.current) return;
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section className="realative w-screen h-dvh">
      <div className="realative overflow-hidden h-dvh">
        <div id="video-frame" className="absolute inset-0 h-full w-full">
          <video
            onClick={handleNextVideo}
            ref={backgroundVideoRef}
            className="cursor-pointer absolute z-50 object-cover w-full h-full"
            src={`/videos/hero-${nextIndex}.mp4`}
            autoPlay
            muted
            loop
          ></video>
          {Array.from({ length: totalVideos }, (_, index) => (
            <video
              key={index}
              id={`video-${index}`}
              className="absolute z-10 object-cover w-full h-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
              src={`/videos/hero-${index}.mp4`}
              autoPlay
              muted
              loop
            ></video>
          ))}
        </div>
        <h1 className="special-font absolute z-50 bottom-5 right-10 text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-[900] text-blue-75 font-zentry ">
          g<b>a</b>ming
        </h1>
        <div className="absolute left-10 top-5 flex items-start z-50 gap-3 flex-col">
          <h2 className="special-font  text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-[900] text-blue-75 font-zentry ">
            REDIFI <b>N</b>
          </h2>
          <p className="max-w-64 font-robert-regular mb-5 text-blue-100">
            Enter The Metagame <br />
            Unleash The Play Economy
          </p>
          <Button text="Watch Reailer" leftIcon={<TiLocation />} />
        </div>
      </div>
      <h2 className="special-font absolute  bottom-5 right-10 text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-[900] text-black font-zentry ">
        g<b>a</b>ming
      </h2>
    </section>
  );
}

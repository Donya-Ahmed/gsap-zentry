import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import { TiLocation } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainContainer } from "../../App";

gsap.registerPlugin(ScrollTrigger);

// ✅ Touch device detection helper
const isTouchDevice = () =>
  "ontouchstart" in window || navigator.maxTouchPoints > 0;

export default function Hero() {
  const totalVideos = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextIndex = (currentIndex + 1) % totalVideos;

  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pointermove, setPointerMove] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const handleNextVideo = () => {
    setCurrentIndex(nextIndex);
    const animatedVideo = `#video-${nextIndex}`;
    const videos = ["#video-0", "#video-1", "#video-2", "#video-3"].filter(
      (v) => v !== animatedVideo
    );
    gsap.set(videos, { zIndex: 20 });
    gsap.set(animatedVideo, { zIndex: 30, width: "16rem", height: "16rem" });

    const currentVideo = document.querySelector(animatedVideo) as HTMLVideoElement;
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
      currentVideo.play();
    }

    gsap.to(animatedVideo, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      width: "100%",
      height: "100%",
    });
  };

  // ✅ Pointer interaction logic (desktop) or center clip (touch)
  useEffect(() => {
    const heroSection = heroRef.current;
    const video = backgroundVideoRef.current;

    if (!heroSection || !video) return;

    // 📌 Show polygon in center on touch devices
    const centerClipPath = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const polygonClipPath = `polygon(
        ${centerX - 100}px ${centerY - 100}px,
        ${centerX + 100}px ${centerY - 100}px,
        ${centerX + 100}px ${centerY + 100}px,
        ${centerX - 100}px ${centerY + 100}px
      )`;

      video.style.clipPath = polygonClipPath;
      gsap.to(video, { alpha: 1 });
    };

    if (isTouchDevice()) {
      centerClipPath(); // run once
      window.addEventListener("resize", centerClipPath); // update on resize
      return () => window.removeEventListener("resize", centerClipPath);
    }

    // 📌 Desktop pointer behavior
    const handlePointerMove = (e: PointerEvent) => {
      setPointerMove(true);

      if (timeout.current) clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        setPointerMove(false);
        gsap.to(video, { alpha: 0, duration: 0.5 });
      }, 1000);

      gsap.to(video, { alpha: 1 });

      const clientX = e.clientX || window.innerWidth / 2;
      const clientY = e.clientY || window.innerHeight / 2;

      const maxOffsetX = 300;
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
        ${Math.min(constrainedX + 100, window.innerWidth)}px ${Math.max(constrainedY - 100, 0)}px,
        ${Math.min(constrainedX + 100, window.innerWidth)}px ${Math.min(constrainedY + 100, window.innerHeight)}px,
        ${Math.max(constrainedX - 100, 0)}px ${Math.min(constrainedY + 100, window.innerHeight)}px
      )`;

      video.style.clipPath = polygonClipPath;
    };

    heroSection.addEventListener("pointermove", handlePointerMove);
    heroSection.addEventListener("pointerdown", handlePointerMove);

    return () => {
      heroSection.removeEventListener("pointermove", handlePointerMove);
      heroSection.removeEventListener("pointerdown", handlePointerMove);
    };
  }, []);

  useEffect(() => {
    if (isLoaded === totalVideos) {
      setLoading(false);
      gsap.to(backgroundVideoRef.current, {
        alpha: 1,
        duration: 0.5,
        onComplete: () => {
          backgroundVideoRef.current?.play();
        },
      });
    }
  }, [isLoaded]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("#video-frame", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      });

      gsap.to("#video-frame", {
        scrollTrigger: {
          trigger: "#video-frame",
          start: "center 40%",
          end: "bottom center",
          scroller: MainContainer,
          scrub: true,
        },
        clipPath: "polygon(14% 0, 72% 0, 87% 97%, 0% 96%)",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-blue-50 relative w-screen h-dvh">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-indigo-800 h-dvh w-screen z-50">
          <img className="w-20 h-20" src="/img/logo.png" alt="Loading" />
        </div>
      )}

      <div ref={heroRef} className="z-10 overflow-hidden h-dvh">
        <div id="video-frame" className="relative h-dvh w-screen z-10 overflow-hidden">
          <video
            onClick={handleNextVideo}
            ref={backgroundVideoRef}
            className="cursor-pointer absolute z-40 object-cover w-full h-full"
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
              onLoadedData={() => setIsLoaded((prev) => prev + 1)}
              onError={() => setIsLoaded((prev) => prev + 1)}
            ></video>
          ))}

          <h1 className="special-font absolute z-40 bottom-5 right-10 text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-[900] text-blue-75 font-zentry">
            g<b>a</b>ming
          </h1>

          <div className="absolute left-10 top-5 flex items-start z-40 gap-3 flex-col">
            <h2 className="special-font text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-[900] text-blue-75 font-zentry">
              REDIFI <b>N</b>
            </h2>
            <p className="max-w-64 font-robert-regular mb-5 text-blue-100">
              Enter The Metagame <br />
              Unleash The Play Economy
            </p>
            <Button text="Watch Trailer" leftIcon={<TiLocation />} />
          </div>
        </div>
      </div>

      <h2 className="special-font absolute bottom-5 right-10 text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-[900] text-black font-zentry">
        g<b>a</b>ming
      </h2>
    </section>
  );
}

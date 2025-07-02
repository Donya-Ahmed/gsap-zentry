import React from "react";
import Button from "../Button/Button";
import { TiLocation } from "react-icons/ti";

export default function Hero() {
  return (
    <section className="realative w-screen h-dvh">
      <div className="realative overflow-hidden h-dvh">
        <div className="absolute inset-0 h-full w-full">
          <video
            id="video-frame"
            className="object-cover w-full h-full"
            src="/videos/hero-0.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <h1 className="special-font absolute z-10 bottom-5 right-10 text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-[900] text-blue-75 font-zentry ">
          g<b>a</b>ming
        </h1>
        <div className="absolute left-10 top-5 flex items-start z-10 gap-3 flex-col">
          <h2 className="special-font  text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-[900] text-blue-75 font-zentry ">
           REDIFI <b>N</b>
          </h2>
          <p className="max-w-64 font-robert-regular mb-5 text-blue-100">Enter The Metagame <br/>Unleash The Play Economy</p>
          <Button text="Watch Reailer" leftIcon={<TiLocation/>}/>
        </div>
      </div>
      <h2 className="special-font absolute  bottom-5 right-10 text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-[900] text-black font-zentry ">
        g<b>a</b>ming
      </h2>
    </section>
  );
}

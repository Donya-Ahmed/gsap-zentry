import React from "react";
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";

export default function CardGallery() {
  return (
    <section className="relativer min-h-dvh w-screen bg-black overflow-hidden py-20">
      <AnimatedTitle
        text="Ze<b>n</b>try At a <br/>Glan<b>c</b>e"
        className="!text-white aligned-title-left !items-start !p-0 !pl-0 leading-[.9] "
      />
      <div className="container grid grid-cols-2 mx-auto mt-20">
        <div className="col-span-1 pt-40">
          <div className="card-1 rounded-xl border-white border-2 w-[25rem]  ml-auto relative mb-10">
            <div className="absolute top-5  left-5 z-20">
              <h4 className="text-white text-[10px] font-general">Products</h4>
              <h3 className="font-zentry text-7xl text-white">4+</h3>
            </div>
            <video
              autoPlay
              muted
              loop
              className=" w-full h-full object-cover"
              src="/videos/card-1@lg.webm"
            />
          </div>
          <div className="card-1 rounded-xl bg-violet-300 w-[25rem]  ml-auto relative mb-10">
            <div className="absolute top-5  left-5 z-20">
              <h4 className="text-black text-[10px] font-general">Treasury</h4>
              <h3 className="font-zentry text-7xl text-black">140M+</h3>
            </div>
            <video
              autoPlay
              muted
              loop
              src="/videos/card-5@lg.webm"
            />
              <div className="grid grid-cols-6">
                 <div className="col-span-2 flex items-center justify-center">
                <div className="rounded-full bg-black w-1 h-1 ">
                  <h4 className="text-black text-[8px] font-general">
                    LIQUID TOKEN
                  </h4>
                </div>
              </div>
             </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </section>
  );
}

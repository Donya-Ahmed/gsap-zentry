import React, { ReactNode } from "react";

export default function VideoCard({
  videoSrc,
  title,
  description,
}: {
  videoSrc: string;
  title: ReactNode;
  description: string;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <div className="md:min-h-[55vh] lg:h-full h-96 w-full overflow-hidden relative border border-white/30 rounded">
      <div
        className="absolute size-full"
        onMouseEnter={() => {
          videoRef.current?.play();
        }}
        onMouseLeave={() => {
          videoRef.current?.pause();
        }}
      >
        <video
          ref={videoRef}
          className="object-cover size-full"
          src={videoSrc}
        />
      </div>
      <div className="flex flex-col gap-3 relative z-10 px-5 py-2.5  ">
        <h3 className="special-font grid-title  text-blue-50 ">
          {title}
        </h3>
        <p className="font-circular-web md:text-base text-xs max-w-64 text-blue-50">{description}</p>
      </div>
    </div>
  );
}

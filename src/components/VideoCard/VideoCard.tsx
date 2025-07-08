import React from "react";

export default function VideoCard({
  videoSrc,
  title,
  description,
}: {
  videoSrc: string;
  title: string;
  description: string;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <div className="md:min-h-[55vh] h-96 w-full overflow-hidden relative border border-white/30 rounded">
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
      <div className="flex flex-col gap-3">
        <h3 className="special-font font-zentry md:text-6xl text-black text-4xl">
          {title}
        </h3>
        <p className="font-circular-web md:text-2xl text-lg">{description}</p>
      </div>
    </div>
  );
}

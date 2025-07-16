import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Textfit } from "react-textfit";

export default function TiltTitle({
  text,
  className = "",
  maxFont = 100, // max font size in px
}: {
  text: string;
  className?: string;
  maxFont?: number;
}) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = el.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const x = (e.clientX - centerX) / (bounds.width / 2);
      const y = (e.clientY - centerY) / (bounds.height / 2);

      const rotateX = y * 10;
      const rotateY = -x * 10;

      gsap.to(el, {
        duration: 0.4,
        ease: "power3.out",
        transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      });
    };

    const resetTilt = () => {
      gsap.to(el, {
        duration: 0.6,
        ease: "power3.out",
        transform: "perspective(600px) rotateX(0deg) rotateY(0deg)",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", resetTilt);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className={`inline-block will-change-transform ${className}`}
      style={{ width: "100%", transformStyle: "preserve-3d" }}
    >
      <Textfit mode="single" max={maxFont} style={{ width: "100%" }}>
        {text}
      </Textfit>
    </div>
  );
}

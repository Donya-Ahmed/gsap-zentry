import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Textfit } from "react-textfit";

export default function TiltTitle({
  text,
  className = "",
  maxFont = 100,
}: {
  text: string;
  className?: string;
  maxFont?: number;
}) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;

    // Initial tilt (optional)
    gsap.set(el, {
      transform:
        "perspective(601.517px) rotate(-16.9708deg) rotateY(44.1714deg) rotateX(-19.5987deg)",
    });

    // Mouse & Touch Handler
    const updateTilt = (xPos: number, yPos: number) => {
      const bounds = el.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const x = (xPos - centerX) / (bounds.width / 2);
      const y = (yPos - centerY) / (bounds.height / 2);

      const rotateX = y * 45;
      const rotateY = -x * 45;

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

    // Mouse Events
    const handleMouseMove = (e: MouseEvent) => updateTilt(e.clientX, e.clientY);

    // Touch Events
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateTilt(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    // Event Listeners
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", resetTilt);
    el.addEventListener("touchmove", handleTouchMove, { passive: true });
    el.addEventListener("touchend", resetTilt);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", resetTilt);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", resetTilt);
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className={`inline-block will-change-transform ${className}`}
      style={{ width: "100%", transformStyle: "preserve-3d", lineHeight: 0.9 }}
    >
      <Textfit mode="single" max={maxFont} style={{ width: "100%" }}>
        {text}
      </Textfit>
    </div>
  );
}

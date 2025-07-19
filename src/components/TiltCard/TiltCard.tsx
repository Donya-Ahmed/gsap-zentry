import React from "react";

export default function TiltCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [transformValue, setTransformValue] = React.useState("");
  const elementRef = React.useRef<HTMLDivElement | null>(null);

  const updateTilt = (x: number, y: number) => {
    if (!elementRef.current) return;

    const { left, top, width, height } =
      elementRef.current.getBoundingClientRect();

    const centerX = (x - left) / width;
    const centerY = (y - top) / height;

    const xRotation = (centerY - 0.5) * -25; // invert Y for natural tilt
    const yRotation = (centerX - 0.5) * 25;

    setTransformValue(
      `perspective(700px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(0.95, 0.95, 0.95)`
    );
  };

  const resetTilt = () => setTransformValue("");

  // Mouse handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) =>
    updateTilt(e.clientX, e.clientY);

  // Touch handler
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updateTilt(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      onTouchMove={handleTouchMove}
      onTouchEnd={resetTilt}
      style={{ transform: transformValue, willChange: "transform" }}
      className={className || "transition-transform duration-500 ease-out"}
    >
      {children}
    </div>
  );
}

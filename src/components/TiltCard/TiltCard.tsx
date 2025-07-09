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
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      elementRef.current.getBoundingClientRect();
    const centerX = (clientX - left) / width;
    const centerY = (clientY - top) / height;
    const xRotation = (centerX - 0.5) * 15; // Adjust the multiplier for sensitivity
    const yRotation = (centerY - 0.5) * 15; // Adjust the multiplier for sensitivity
    setTransformValue(
      `perspective(700px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(0.95, 0.95, 0.95)`
    );
  };
  return (
    <div
      ref={elementRef}
      onMouseLeave={() => setTransformValue("")}
      style={{ transform: transformValue }}
      onMouseMove={handleMouseMove}
      className={className||"transition-transform duration-300 ease-out"}
    >
      {children}
    </div>
  );
}

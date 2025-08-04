"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BackgroundEffect() {
  const ref = useRef(null);
  const quickToX = useRef(null);
  const quickToY = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.set(ref.current, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    quickToX.current = gsap.quickTo(ref.current, "x", {
      duration: 0.5,
      ease: "power3.out",
    });
    quickToY.current = gsap.quickTo(ref.current, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    const handleMove = (e) => {
      quickToX.current(e.clientX);
      quickToY.current(e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        quickToX.current(touch.clientX);
        quickToY.current(touch.clientY);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulse {
          0% {
            opacity: 0.85;
            box-shadow: 0 0 100px rgba(255, 111, 28, 0.4);
          }
          100% {
            opacity: 1;
            box-shadow: 0 0 150px rgba(255, 111, 28, 0.6);
          }
        }
      `}</style>
      <div
        ref={ref}
        className="hidden lg:block fixed top-0 left-0 pointer-events-none -z-10 rounded-full w-[60vw] h-[60vw] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(255,155,33,0.688), rgba(255,189,65,0.618))",
          filter: "blur(100px)",
          animation: "pulse 12s ease-in-out infinite alternate",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 150px rgba(255,111,28,0.8)",
        }}
      />
    </>
  );
}

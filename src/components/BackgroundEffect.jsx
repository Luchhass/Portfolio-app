"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BackgroundEffect() {
  const ref = useRef(null);
  const setPosition = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // Başlangıç pozisyonu
    gsap.set(ref.current, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    // Tek setter ile hem x hem y kontrolü
    setPosition.current = gsap.quickSetter(ref.current, "x,y", "px");

    const handleMouseMove = (e) => {
      setPosition.current(`${e.clientX},${e.clientY}`);
    };

    const handleTouchMove = (e) => {
      if (e.touches?.length > 0) {
        const touch = e.touches[0];
        setPosition.current(`${touch.clientX},${touch.clientY}`);
      }
    };

    const handleResize = () => {
      gsap.set(ref.current, {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 -z-10 hidden h-[60vw] w-[60vw] rounded-full will-change-transform animate-pulseGlow lg:block"
      style={{
        background:
          "radial-gradient(circle, rgba(255,155,33,0.688), rgba(255,189,65,0.618))",
        filter: "blur(100px)",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}

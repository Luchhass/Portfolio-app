"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BackgroundEffect() {
  const ref = useRef(null);
  const isMoving = useRef(false);
  const moveTimeout = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.set(ref.current, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      scale: 1,
    });

    const handleMouseMove = (e) => {
      if (!isMoving.current) {
        isMoving.current = true;
        gsap.to(ref.current, {
          scale: 0.8,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      gsap.to(ref.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: "power2.out",
      });

      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }

      moveTimeout.current = setTimeout(() => {
        isMoving.current = false;
        gsap.to(ref.current, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }, 300);
    };

    const handleTouchMove = (e) => {
      if (e.touches?.length > 0) {
        const touch = e.touches[0];

        // Hareket başladığında küçült
        if (!isMoving.current) {
          isMoving.current = true;
          gsap.to(ref.current, {
            scale: 0.7,
            duration: 0.3,
            ease: "power2.out",
          });
        }

        // Pozisyonu güncelle
        gsap.to(ref.current, {
          x: touch.clientX,
          y: touch.clientY,
          duration: 1,
          ease: "power2.out",
        });

        // Timeout'u temizle ve yeniden başlat
        if (moveTimeout.current) {
          clearTimeout(moveTimeout.current);
        }

        moveTimeout.current = setTimeout(() => {
          isMoving.current = false;
          gsap.to(ref.current, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        }, 300);
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

      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
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

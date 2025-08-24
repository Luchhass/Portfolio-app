"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function ContactHero() {
  const containerRef = useRef();
  const imageRef = useRef();
  const textRefs = useRef([]);

  useGSAP(
    () => {
      gsap.set(imageRef.current, { opacity: 0, scale: 0 });
      gsap.set(textRefs.current, {
        x: (index) => (index % 2 === 0 ? "-100vw" : "100vw"),
      });

      const tl = gsap.timeline().delay(2);

      tl.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      }).to(
        textRefs.current,
        {
          x: "0vw",
          duration: 1.35,
          ease: "elastic.out(1.5, 1.5)",
          stagger: 0.1,
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const updateTilt = (rotateX, rotateY) => {
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            rotateX: rotateX * 1.2,
            rotateY: rotateY * 1.2,
            duration: 0.5,
            ease: "power3.out",
            transformPerspective: 1000,
            transformOrigin: "center",
          });
        }

        textRefs.current.forEach((el) => {
          if (el) {
            gsap.to(el, {
              rotateX: rotateX * 0.9,
              rotateY: rotateY * 0.9,
              duration: 0.5,
              ease: "power3.out",
              transformPerspective: 1000,
              transformOrigin: "center",
            });
          }
        });
      };

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xPos = (clientX / innerWidth - 0.5) * 2;
        const yPos = (clientY / innerHeight - 0.5) * 2;
        updateTilt(-yPos * 20, xPos * 20);
      };

      const handleDeviceOrientation = (e) => {
        const { gamma, beta } = e;
        const rotateY = (gamma / 45) * 20;
        const rotateX = -((beta - 45) / 45) * 20;
        updateTilt(rotateX, rotateY);
      };

      window.addEventListener("mousemove", handleMouseMove);
      if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleDeviceOrientation);
      }

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        if (window.DeviceOrientationEvent) {
          window.removeEventListener(
            "deviceorientation",
            handleDeviceOrientation
          );
        }
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative my-32 flex flex-1 justify-center md:my-42 lg:m-0 lg:my-52"
    >
      <div ref={imageRef} className="relative -top-10 ml-32 z-0">
        <Image
          src="/images/contact-page-hero.jpg"
          alt="Scenic coastal view with city skyline"
          width={2024}
          height={2024}
          className="h-38 w-55 rounded-3xl object-cover object-top shadow-2xl md:h-45 md:w-62 lg:h-62 lg:w-89"
          style={{ transform: "rotateZ(-10deg)" }}
        />
      </div>

      <h1 className="absolute left-0 top-13 z-10 text-7xl font-black leading-[0.85] tracking-[-0.07em] text-black dark:text-white md:text-8xl lg:text-9xl">
        <span ref={(el) => (textRefs.current[0] = el)} className="inline-block">
          get in
        </span>
        <br />
        <span
          ref={(el) => (textRefs.current[1] = el)}
          className="ml-16 inline-block md:ml-20 lg:ml-24"
        >
          touch
        </span>
      </h1>
    </section>
  );
}

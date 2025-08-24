"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function ContactHero() {
  const containerRef = useRef();
  const imageRef = useRef();
  const textRef = useRef();

  useGSAP(
    () => {
      gsap.set(".image-animate", { opacity: 0, scale: 0 });
      gsap.set(".text-animate", { x: "-50vw" });

      const tl = gsap.timeline().delay(2);

      tl.to(".image-animate", {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1.5, 1.5)",
      }).to(
        ".text-animate",
        {
          x: "0vw",
          duration: 1.35,
          ease: "elastic.out(1.5, 1.5)",
          stagger: 0.2,
        },
        "-=0.2"
      );

      setTimeout(() => {
        const imageEl = imageRef.current;
        const textContainer = textRef.current;

        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          const xPos = (clientX / innerWidth - 0.5) * 2;
          const yPos = (clientY / innerHeight - 0.5) * 2;

          const rotateY = xPos * 20;
          const rotateX = -yPos * 20;

          gsap.to(imageEl, {
            rotateX: rotateX * 1.2,
            rotateY: rotateY * 1.2,
            duration: 0.5,
            ease: "power3.out",
            transformPerspective: 1000,
            transformOrigin: "center",
          });

          gsap.to(textContainer, {
            rotateX: rotateX * 0.7,
            rotateY: rotateY * 0.7,
            duration: 0.5,
            ease: "power3.out",
            transformPerspective: 1000,
            transformOrigin: "center",
          });
        };

        window.addEventListener("mousemove", handleMouseMove);
      }, 1000);
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative my-32 flex flex-1 justify-center md:my-42 lg:m-0 lg:my-52"
    >
      <div ref={imageRef} className="image-animate relative -top-10 ml-32 z-0">
        <Image
          src="/images/contact-page-hero.jpg"
          alt="Scenic coastal view with city skyline"
          width={2024}
          height={2024}
          className="h-38 w-55 rounded-3xl object-cover object-top shadow-2xl md:h-45 md:w-62 lg:h-62 lg:w-89"
          style={{ transform: "rotateZ(-10deg)" }}
        />
      </div>

      <h1
        ref={textRef}
        className="absolute left-0 top-13 z-10 text-7xl font-black leading-[0.85] tracking-[-0.07em] text-black dark:text-white md:text-8xl lg:text-9xl"
      >
        <span className="text-animate inline-block">get in</span>
        <br />
        <span className="text-animate ml-16 inline-block md:ml-20 lg:ml-24">
          touch
        </span>
      </h1>
    </section>
  );
}

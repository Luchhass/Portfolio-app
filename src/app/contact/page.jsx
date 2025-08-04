"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const container = useRef();
  const imageRef = useRef();
  const textRef = useRef();

  useGSAP(
    () => {
      gsap.set(".image-animate", { opacity: 0, scale: 0 });
      gsap.set(".text-animate", { x: "-100vw", opacity: 0 });
      gsap.set(".text-block", { opacity: 0 });

      const tl = gsap.timeline().delay(1);

      tl.to(".image-animate", {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      })
        .to(
          ".text-animate",
          {
            x: "0vw",
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.2,
          },
          "-=0.2"
        )
        .to(
          ".text-block",
          {
            opacity: 1,
            duration: 0.7,
            ease: "power1.out",
            stagger: 0.1,
          },
          "-=0.7"
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
    { scope: container }
  );

  return (
    <main
      ref={container}
      className="min-h-[100dvh] flex flex-col lg:flex-row lg:gap-22 lg:items-center lg:justify-between m-auto px-8 max-w-[600px] md:px-10 md:max-w-[850px] lg:px-16 lg:max-w-[1200px]"
    >
      {/* Contact Page Hero Section */}
      <section className="flex-1 relative flex justify-center m-auto lg:m-0 my-32 md:my-42 lg:my-52">
        <div
          ref={imageRef}
          className="relative -top-10 ml-32 z-0 image-animate"
        >
          <Image
            src="/images/contact-page-hero.jpg"
            alt="Scenic coastal view with city skyline"
            width={2000}
            height={2000}
            className="w-55 h-38 md:w-62 md:h-45 lg:w-89 lg:h-62 rounded-3xl object-cover shadow-2xl"
            style={{ transform: "rotateZ(-10deg)" }}
          />
        </div>

        <h1
          ref={textRef}
          className="absolute top-13 left-0 z-10 text-black dark:text-white font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-[-0.07em]"
        >
          <span className="text-animate inline-block">get in</span>
          <br />
          <span className="text-animate inline-block ml-16 md:ml-20 lg:ml-24">
            touch
          </span>
        </h1>
      </section>

      {/* Contact Page Form Section */}
      <section className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10 lg:mt-8">
        <div className="flex flex-col gap-4 text-xl md:text-xl lg:text-2xl font-extralight leading-[1.1] text-black dark:text-white">
          <h2 className="text-block">
            I bring your ideas to life with clean, efficient, and modern
            frontend solutions.
          </h2>

          <h2 className="text-block">
            Let’s build fast, responsive, and user-friendly websites tailored
            just for you.
          </h2>

          <p className="text-block text-sm md:text-base font-black">
            Let’s get to work!
          </p>
        </div>

        <div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const container = useRef();
  const heroRef = useRef();

  useGSAP(
    () => {
      gsap.set(".image-animate", { opacity: 0, scale: 0 });
      gsap.set(".text-animate", {
        x: (index) => (index % 2 === 0 ? "-100vw" : "100vw"),
        opacity: 0,
      });
      gsap.set(".description-animate", { opacity: 0 });
      gsap.set(".button-animate", { opacity: 0 });

      const tl = gsap.timeline().delay(1.5);

      tl.to(".image-animate", {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
      })
        .to(
          ".text-animate",
          {
            x: "0vw",
            opacity: 1,
            duration: 1.35,
            ease: "elastic.out(1.5, 1.5)",
            stagger: 0.1,
          },
          "-=0.4"
        )
        .to(
          ".description-animate",
          {
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
          },
          "-=0.9"
        )
        .to(
          ".button-animate",
          {
            opacity: 1,
            duration: 0.2,
            ease: "back.out(1.5)",
            stagger: 0.2,
          },
          "-=0.7"
        );
    },
    { scope: container }
  );

  useGSAP(
    () => {
      const updateTilt = (rotateX, rotateY) => {
        const heroEl = heroRef.current;

        const images = heroEl.querySelectorAll(".image-animate");
        images.forEach((img) => {
          gsap.to(img, {
            rotateX: rotateX * 1.2,
            rotateY: rotateY * 1.2,
            duration: 0.5,
            ease: "power3.out",
            transformPerspective: 1000,
            transformOrigin: "center",
          });
        });

        const texts = heroEl.querySelectorAll(
          ".text-animate, .description-animate"
        );
        texts.forEach((text) => {
          gsap.to(text, {
            rotateX: rotateX * 0.9,
            rotateY: rotateY * 0.9,
            duration: 0.5,
            ease: "power3.out",
            transformPerspective: 1000,
            transformOrigin: "center",
          });
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
    { scope: container }
  );

  return (
    <section
      ref={heroRef}
      className="flex items-center justify-center h-[calc(100dvh-90px)] md:h-[calc(100dvh-106px)] lg:min-h-[100dvh] px-8 md:px-10 lg:px-16"
    >
      <div ref={container} className="relative">
        <div className="relative z-10 flex flex-col gap-6 text-center">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.08em] leading-[0.85] text-black dark:text-white">
            <span className="inline-block ml-26 md:ml-30 lg:ml-34 text-animate">
              what
            </span>
            <br />
            <span className="inline-block text-animate">i build</span>
          </h1>

          <p className="description-animate mx-auto max-w-lg text-xl md:text-2xl font-light text-black dark:text-white">
            I design and build digital products that convert.
          </p>

          <div className="flex flex-col items-center gap-2">
            <Link
              href="/pdf/cv.pdf"
              target="_blank"
              className="relative group overflow-hidden rounded-full bg-[#f37a35] px-12 py-5 text-sm md:text-md font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 button-animate"
            >
              <span className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
              <span className="relative z-10">Check My CV</span>
            </Link>

            <Link
              href="/projects"
              className="relative group overflow-hidden rounded-full bg-[#f37a35] px-12 py-5 text-sm md:text-md font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 button-animate"
            >
              <span className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
              <span className="relative z-10">See My Work</span>
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="image-animate absolute left-[-2rem] top-[-6rem] md:left-[-4rem] md:top-[-7rem] lg:top-[-4rem] w-42 h-46 md:w-60 md:h-68 transform -rotate-12 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/screenshots/Tic-Tac-Toe.png"
              alt="Tic Tac Toe Project"
              width={1920}
              height={879}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="image-animate absolute right-[-1rem] top-[-2rem] md:right-[-6rem] md:top-[-4rem] lg:top-[-3rem] w-44 h-36 md:w-58 md:h-46 transform rotate-15 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/screenshots/Biggy-Burger.png"
              alt="Biggy Burger Project"
              width={1920}
              height={879}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="image-animate absolute right-[-1rem] top-44 md:right-[-4rem] md:top-54 lg:top-64 w-36 h-40 md:w-46 md:h-50 transform -rotate-11 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/screenshots/Calculator.png"
              alt="Calculator Project"
              width={1920}
              height={879}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="image-animate absolute left-[-2rem] top-46 md:left-[-5rem] md:top-58 lg:top-68 w-48 h-38 md:w-62 md:h-48 transform rotate-8 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/screenshots/Shop-Your-Way.png"
              alt="Shop Your Way Project"
              width={1920}
              height={879}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

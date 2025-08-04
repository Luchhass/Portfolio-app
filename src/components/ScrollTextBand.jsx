"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTextBand({ text = "WELCOME", repeat = 7 }) {
  useEffect(() => {
    gsap.to(".welcome-band", {
      xPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".welcome-band",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  const repeatedText = Array(repeat).fill(text).join(" ");

  return (
    <div className="w-full relative overflow-hidden h-[clamp(5rem,15vw,12rem)]">
      <div className="welcome-band text-[#EEEEEE] dark:text-[#0C0C0C] text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-[-0.08em] whitespace-nowrap flex items-center w-max h-full">
        {repeatedText} {repeatedText} {repeatedText}
      </div>
    </div>
  );
}

"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTextBand({ text = "WELCOME", repeat = 7 }) {
  useEffect(() => {
    gsap.to(".welcome-band", {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".welcome-band",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const repeatedText = Array(repeat).fill(text).join(" ");

  return (
    <div
      className="welcome-band text-7xl md:text-8xl lg:text-9xl font-black leading-[1.1] tracking-[-0.08em] whitespace-nowrap text-transparent dark:text-transparent dark:[--stroke-color:#1f1f1f]"
      style={{
        WebkitTextStroke: "2px var(--stroke-color, #E9E9E9)",
        color: "transparent",
      }}
    >
      {repeatedText}
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTextBand({ text = "WELCOME", repeat = 7 }) {
  useEffect(() => {
    gsap.to(".welcome-band", {
      xPercent: -25,
      ease: "none",
      scrollTrigger: {
        trigger: ".welcome-band",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, []);

  const repeatedText = Array(repeat).fill(text).join(" ");

  return (
    <div className="w-full overflow-hidden" style={{ height: "155px" }}>
      <svg
        viewBox="0 0 3000 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[2000px] h-auto"
      >
        <text
          className="welcome-band stroke-[#E9E9E9] dark:stroke-[#1f1f1f] leading-[1.1] tracking-[-0.08em]"
          x="0"
          y="150"
          fontWeight="900"
          fontSize="150"
          fill="none"
          strokeWidth="3"
        >
          {repeatedText}
        </text>
      </svg>
    </div>
  );
}

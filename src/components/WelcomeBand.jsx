"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WelcomeBand() {
  useEffect(() => {
    gsap.to(".welcome-band", {
      x: "-50%",
      scrollTrigger: {
        trigger: ".welcome-band",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.1,
      },
    });
  }, []);

  return (
    <div>
      <div className="w-full overflow-hidden">
        <div
          className="welcome-band text-7xl md:text-8xl lg:text-9xl font-black leading-[1.1] tracking-[-0.08em] whitespace-nowrap"
          style={{
            WebkitTextStroke: "2px #202020",
            WebkitTextFillColor: "transparent",
            textStroke: "2px #202020",
          }}
        >
          WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
        </div>
      </div>
    </div>
  );
}

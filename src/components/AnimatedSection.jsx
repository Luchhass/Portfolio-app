"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSection({ children, animation }) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const el = sectionRef.current;

      const animationConfigs = {
        "card-animation": {
          from: { opacity: 0, scale: 0.3 },
          to: {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          },
        },
        "about-animation": {
          from: { opacity: 0 },
          to: {
            opacity: 1,
            duration: 1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play reverse play reverse",
            },
          },
        },
        "cta-animation": {
          from: { opacity: 0 },
          to: {
            opacity: 1,
            duration: 1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play reverse play reverse",
            },
          },
        },
      };

      const config = animationConfigs[animation];
      if (config) gsap.fromTo(el, config.from, config.to);
    },
    { scope: sectionRef, dependencies: [animation] }
  );

  return <section ref={sectionRef}>{children}</section>;
}

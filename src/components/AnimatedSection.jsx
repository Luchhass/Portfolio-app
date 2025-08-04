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

      if (animation === "card-animation") {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.3 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        ScrollTrigger.refresh();
      }

      if (animation === "about-animation") {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 15%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        ScrollTrigger.refresh();
      }

      if (animation === "cta-animation") {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "top 0%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        ScrollTrigger.refresh();
      }

      ScrollTrigger.refresh();
    },
    { scope: sectionRef, dependencies: [animation] }
  );

  return <section ref={sectionRef}>{children}</section>;
}

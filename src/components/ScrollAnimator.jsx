"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSection({
  children,
  animation,
  as = "section",
}) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const el = sectionRef.current;

      const animationConfigs = {
        "project-card-animations": {
          from: { opacity: 0, scale: 0.3 },
          to: {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "elastic.out(1.5, 1.5)",
            scrollTrigger: {
              trigger: el,
              start: "top 110%",
              end: "bottom 5%",
              toggleActions: "play reverse play reverse",
            },
          },
        },
        "about-paragraph-animations": {
          from: { opacity: 0 },
          to: {
            opacity: 1,
            duration: 1,
            stagger: 0.25,
            ease: "elastic.out(1.5, 1.5)",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          },
        },
        "contact-cta-animations": {
          from: { opacity: 0 },
          to: {
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "elastic.out(1.5, 1.5)",
            scrollTrigger: {
              trigger: el,
              start: "top 65%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          },
        },
        "projects-highlights-animations": {
          from: { opacity: 0 },
          to: {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "elastic.out(1.5, 1.5)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          },
        },
      };

      const config = animationConfigs[animation];

      if (config) {
        gsap.fromTo(el, config.from, config.to);
      }
    },
    { scope: sectionRef, dependencies: [animation] }
  );

  const Tag = as;
  return <Tag ref={sectionRef}>{children}</Tag>;
}

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
            targets: ".about-item",
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
            targets: ".cta-item",
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
            targets: ".highlights-item",
          },
        },
      };

      const config = animationConfigs[animation];

      if (config) {
        let targets;

        if (config.to.targets) {
          const children = el.querySelectorAll(config.to.targets);
          targets = children.length ? children : el;
        } else {
          targets = el;
        }

        gsap.fromTo(targets, config.from, { ...config.to, targets: undefined });
      }
    },
    { scope: sectionRef, dependencies: [animation] }
  );

  return <section ref={sectionRef}>{children}</section>;
}

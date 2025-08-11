"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContactCTA from "@/components/ContactCTA";
import ProjectHighlights from "@/components/ProjectHighlights";
import ScrollTextBand from "@/components/ScrollTextBand";
import Link from "next/link";

export default function Home() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.set(".video-animate", { opacity: 0, scale: 0 });
      gsap.set(".text-animate", {
        x: (index) => (index % 2 === 0 ? "-100vw" : "100vw"),
      });
      gsap.set(".button-animate", { opacity: 0 });

      const tl = gsap.timeline().delay(4.2);

      tl.to(".video-animate", {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      })
        .to(
          ".text-animate",
          {
            x: "0vw",
            duration: 1.35,
            ease: "elastic.out(1.5, 1.5)",
            stagger: 0.1,
          },
          "-=0.4"
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

  return (
    <main ref={container}>
      <section className="h-[calc(100dvh-90px)] md:h-[calc(100dvh-106px)] lg:h-[100dvh] px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8">
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="video-animate relative h-[calc(100%-4rem)] w-screen overflow-hidden rounded-3xl shadow-2xl lg:w-[600px]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/banner.mp4" type="video/mp4" />
              video not supported
            </video>
          </div>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-12 text-center">
            <div className="relative flex h-[calc(100%-4rem)] w-screen flex-col items-center justify-center gap-12 overflow-hidden rounded-3xl lg:w-[600px]">
              <h1 className="pointer-events-none text-6xl font-black leading-[1.1] tracking-[-0.09em] text-white md:text-7xl lg:text-8xl">
                <span className="text-animate inline-block">crafting</span>
                <br />
                <span className="text-animate inline-block">digital</span>
                <br />
                <span className="text-animate inline-block">experiences</span>
              </h1>

              <div className="pointer-events-auto flex flex-col items-center">
                <Link
                  href="/contact"
                  className="button-animate group relative overflow-hidden rounded-full bg-[#f37a35] px-12 py-5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 md:text-md"
                >
                  <span className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
                  <span className="relative z-10">discover my work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <ScrollTextBand text="WELCOME" repeat={7} />
      </section>

      <section className="m-auto max-w-[600px] px-8 md:max-w-[850px] md:px-10 lg:max-w-[1200px] lg:px-16">
        <ProjectHighlights />
      </section>

      <section className="py-32 md:py-42 lg:py-52">
        <ContactCTA />
      </section>
    </main>
  );
}

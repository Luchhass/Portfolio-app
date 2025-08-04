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
      {/* Home Page Hero Section */}
      <section className="h-[calc(100dvh-90px)] md:h-[calc(100dvh-106px)] lg:h-[100dvh] px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="video-animate relative w-screen h-[calc(100%-4rem)] lg:w-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/banner.mp4" type="video/mp4" />
              video not supported
            </video>
          </div>

          <div className="absolute inset-0 flex flex-col gap-12 items-center justify-center text-center pointer-events-none">
            <div className="relative w-screen h-[calc(100%-4rem)] lg:w-[600px] rounded-3xl overflow-hidden flex flex-col gap-12 items-center justify-center">
              <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-[-0.09em] pointer-events-none">
                <span className="text-animate inline-block">crafting</span>
                <br />
                <span className="text-animate inline-block">digital</span>
                <br />
                <span className="text-animate inline-block">experiences</span>
              </h1>

              <div className="flex flex-col items-center pointer-events-auto">
                <Link
                  href="/contact"
                  className="button-animate relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative z-10">discover my work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Band Section */}
      <section>
        <ScrollTextBand text="WELCOME" repeat={7} />
      </section>

      {/* Projects Highlights Section */}
      <section className="m-auto px-8 max-w-[600px] md:px-10 md:max-w-[850px] lg:px-16 lg:max-w-[1200px]">
        <ProjectHighlights />
      </section>

      {/* Contact CTA Section */}
      <section className="py-32 md:py-42 lg:py-52">
        <ContactCTA />
      </section>
    </main>
  );
}

"use client";

import { technologyGroups } from "@/data/technologyGroups";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import GithubStats from "@/components/GithubStats";
import ScrollTextBand from "@/components/ScrollTextBand";
import ContactCTA from "@/components/ContactCTA";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const container = useRef();
  const heroRef = useRef();

  const toggleGroup = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useGSAP(
    () => {
      gsap.set(".image-animate", { opacity: 0, scale: 0 });
      gsap.set(".text-animate", { x: "-100vw", opacity: 0 });
      gsap.set(".description-animate", { opacity: 0 });
      gsap.set(".button-animate", { opacity: 0 });

      const tl = gsap.timeline().delay(1.5);

      tl.to(".image-animate", {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
      })
        .to(
          ".text-animate",
          {
            x: "0vw",
            opacity: 1,
            duration: 1.35,
            ease: "elastic.out(1.5, 1.5)",
            stagger: 0.1,
          },
          "-=0.4"
        )
        .to(
          ".description-animate",
          {
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
          },
          "-=0.9"
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

      const heroEl = heroRef.current;

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xPos = (clientX / innerWidth - 0.5) * 2;
        const yPos = (clientY / innerHeight - 0.5) * 2;

        const rotateY = xPos * 20;
        const rotateX = -yPos * 20;

        const images = heroEl.querySelectorAll(".image-animate");
        images.forEach((img) => {
          gsap.to(img, {
            rotateX: rotateX * 1.2,
            rotateY: rotateY * 1.2,
            duration: 0.5,
            ease: "power3.out",
            transformPerspective: 1000,
            transformOrigin: "center",
          });
        });

        const texts = heroEl.querySelectorAll(
          ".text-animate, .description-animate"
        );
        texts.forEach((text) => {
          gsap.to(text, {
            rotateX: rotateX * 0.9,
            rotateY: rotateY * 0.9,
            duration: 0.5,
            ease: "power3.out",
            transformPerspective: 1000,
            transformOrigin: "center",
          });
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: container }
  );

  return (
    <main ref={container} className="flex flex-col">
      <section
        ref={heroRef}
        className="flex items-center justify-center h-[calc(100dvh-90px)] md:h-[calc(100dvh-106px)] lg:min-h-[100dvh] px-8 md:px-10 lg:px-16"
      >
        <div className="relative">
          <div className="relative z-10 flex flex-col gap-6 text-center">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.08em] leading-[0.85] text-black dark:text-white">
              <span className="inline-block ml-26 md:ml-30 lg:ml-34 text-animate">
                what
              </span>
              <br />
              <span className="inline-block text-animate">i build</span>
            </h1>

            <p className="description-animate mx-auto max-w-lg text-xl md:text-2xl font-light text-black dark:text-white">
              I design and build digital products that convert.
            </p>

            <div className="flex flex-col items-center gap-2">
              <Link
                href="/pdf/cv.pdf"
                target="_blank"
                className="relative group overflow-hidden rounded-full bg-[#f37a35] px-12 py-5 text-sm md:text-md font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 button-animate"
              >
                <span className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
                <span className="relative z-10">Check My CV</span>
              </Link>

              <Link
                href="/projects"
                className="relative group overflow-hidden rounded-full bg-[#f37a35] px-12 py-5 text-sm md:text-md font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 button-animate"
              >
                <span className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
                <span className="relative z-10">See My Work</span>
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0">
            <div className="image-animate absolute left-[-2rem] top-[-6rem] md:left-[-4rem] md:top-[-7rem] w-42 h-46 md:w-60 md:h-68 transform -rotate-12 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/screenshots/Tic-Tac-Toe.png"
                alt="Tic Tac Toe Project"
                width={1920}
                height={879}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="image-animate absolute right-[-1rem] top-[-2rem] md:right-[-6rem] md:top-[-4rem] w-44 h-36 md:w-58 md:h-46 transform rotate-15 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/screenshots/Biggy-Burger.png"
                alt="Biggy Burger Project"
                width={1920}
                height={879}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="image-animate absolute right-[-1rem] top-44 md:right-[-4rem] md:top-54 w-36 h-40 md:w-46 md:h-50 transform -rotate-11 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/screenshots/Calculator.png"
                alt="Calculator Project"
                width={1920}
                height={879}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="image-animate absolute left-[-2rem] top-46 md:left-[-5rem] md:top-58 w-48 h-38 md:w-62 md:h-48 transform rotate-8 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/screenshots/Shop-Your-Way.png"
                alt="Shop Your Way Project"
                width={1920}
                height={879}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <ScrollTextBand text="FURKAN" repeat={7} />
      </section>

      <section className="flex flex-col gap-32 m-auto px-8 max-w-[600px] md:px-10 md:max-w-[850px] lg:px-16 lg:max-w-[1200px]">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
          <div className="text-black dark:text-white max-w-[440px] md:max-w-[520px] lg:max-w-[700px] text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-[-0.08em]">
            <AnimatedSection animation="about-animation">
              <h1 className="text-left text-[#f37a35]">the creator</h1>
            </AnimatedSection>
            <AnimatedSection animation="about-animation">
              <h1 className="text-right">behind code</h1>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="about-animation">
            <h2 className="mb-8 text-xl md:text-2xl lg:text-3xl font-extralight leading-[1.1] text-black dark:text-white">
              I'm a <span className="font-bold">Frontend Developer</span> and a
              final-year Web Design student at Istanbul University. Throughout
              my journey, I've had the opportunity to intern at several
              companies, gaining hands-on experience in building modern and
              responsive web interfaces. To further enhance my skills, I also
              completed a Software Specialization course at Nişantaşı
              University, where I deepened my knowledge of development practices
              and technologies.
              <span className="font-bold">
                Today, I combine creativity with technical expertise to craft
                seamless digital experiences.
              </span>
            </h2>
          </AnimatedSection>
        </div>

        <div>
          <GithubStats username="Luchhass" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-22">
          <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10">
            <AnimatedSection animation="about-animation">
              <h1 className="text-black dark:text-white text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-[-0.08em]">
                technologies
                <br />i use
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="about-animation">
              <h2 className="mb-8 text-xl md:text-2xl lg:text-3xl font-extralight leading-[1.1] text-black dark:text-white">
                The right tools for building exceptional digital experiences.{" "}
                <span className="font-bold">
                  From powerful frameworks to modern design systems, these are
                  the technologies that make innovation possible.
                </span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="flex-1 flex flex-col mt-6 md:mt-8">
            {technologyGroups.map((group, index) => {
              const isOpen = openIndex === index;
              return (
                <AnimatedSection animation="about-animation" key={index}>
                  <div
                    className="group relative cursor-pointer bg-transparent py-3"
                    onClick={() => toggleGroup(index)}
                  >
                    <h1
                      className={`relative z-10 m-0 text-xl md:text-2xl font-black uppercase leading-[1.1] tracking-[-0.08em] transition-colors duration-300 ease-in-out
                ${isOpen ? "text-[#f37a35]" : "group-hover:text-[#f37a35]"}`}
                    >
                      {group.title}
                    </h1>

                    <span
                      className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#f37a35] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                ${isOpen ? "translate-y-2" : "group-hover:translate-y-2"}`}
                    />

                    <div
                      className={`overflow-hidden transition-[height] duration-500 ease-in-out mt-2
                ${isOpen ? "h-28" : "h-0 group-hover:h-28"}`}
                    >
                      <div className="flex flex-wrap gap-4">
                        {group.technologies.map((tech, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 rounded-lg px-4 py-2 shadow-md hover:shadow-lg transform hover:scale-[1.05] transition-transform duration-300 cursor-pointer bg-white dark:bg-[#1f1f1f] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                            style={{ color: tech.color }}
                          >
                            <tech.icon className="text-2xl" />
                            <span className="font-semibold text-gray-900 dark:text-gray-200">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-42 lg:py-52">
        <ContactCTA />
      </section>
    </main>
  );
}

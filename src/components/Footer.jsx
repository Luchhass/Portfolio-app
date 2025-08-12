"use client";

import { socialLinks, navLinks, contactInfo } from "@/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const pathname = usePathname();
  const footerRef = useRef(null);
  const bgRef = useRef(null);
  const orbsRef = useRef([]);
  const waveRef = useRef(null);
  const gradientRef = useRef(null);

  useGSAP(() => {
    const footer = footerRef.current;
    if (!footer) return;

    if (gradientRef.current) {
      gradientRef.current.style.background = `#f37a35`;
    }

    const wave1 = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        invalidateOnRefresh: true,
      },
    });

    wave1.to(".wave-1", {
      y: -80,
      rotation: 3,
      scale: 1.05,
      ease: "none",
      force3D: true,
    });

    const wave2 = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.8,
        invalidateOnRefresh: true,
      },
    });

    wave2.to(".wave-2", {
      y: -120,
      rotation: -2,
      scale: 1.03,
      ease: "none",
      force3D: true,
    });

    const lightTl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    lightTl.to(".light-beam", {
      opacity: 0.6,
      scale: 1.5,
      rotation: 45,
      ease: "none",
    });

    const meshTl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    meshTl.to(".mesh-gradient", {
      rotation: 180,
      scale: 1.2,
      opacity: 0.4,
      ease: "none",
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative flex flex-col justify-between overflow-hidden px-8 py-6 h-[calc(100dvh-90px)] md:h-[calc(100dvh-106px)] md:px-10 md:py-8 lg:px-16 lg:py-8"
    >
      <div ref={bgRef} className="absolute inset-0 z-0">
        <div ref={gradientRef} className="absolute inset-0 bg-[#f37a35]" />

        <div className="wave-1 absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient
                id="waveGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ff8f65" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M0,400 C300,300 600,500 1200,300 L1200,800 L0,800 Z"
              fill="url(#waveGradient1)"
            />
          </svg>
        </div>

        <div className="wave-2 absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient
                id="waveGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ff4500" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ff7043" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M0,350 C400,250 800,450 1200,350 L1200,800 L0,800 Z"
              fill="url(#waveGradient2)"
            />
          </svg>
        </div>

        <div className="light-beam absolute top-0 right-0 w-96 h-96 opacity-10">
          <div className="w-full h-full bg-gradient-conic from-white via-transparent to-transparent rounded-full blur-3xl transform rotate-45" />
        </div>

        <div className="mesh-gradient absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
                radial-gradient(at 80% 0%, hsla(189,100%,56%,0.3) 0px, transparent 50%),
                radial-gradient(at 0% 50%, hsla(355,100%,93%,0.3) 0px, transparent 50%),
                radial-gradient(at 80% 50%, hsla(340,100%,76%,0.3) 0px, transparent 50%),
                radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
                radial-gradient(at 80% 100%, hsla(242,100%,70%,0.3) 0px, transparent 50%),
                radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="absolute inset-0 opacity-5 mix-blend-overlay">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full lg:hidden">
        <h1 className="font-black font-sans uppercase tracking-[-0.05em] leading-[1] md:leading-[0.9] max-w-[350px] md:max-w-[450px] text-white text-4xl md:text-5xl">
          designing with purpose and passion.
        </h1>

        <ul className="flex items-center gap-5">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <li
              key={label}
              className="relative p-2 border border-white rounded-full group"
            >
              <div className="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-150 transition-all duration-500 ease-out"></div>

              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center justify-center"
              >
                <Icon
                  className="fill-current text-white transition-colors duration-500 ease-out"
                  size={20}
                />
              </a>
            </li>
          ))}
        </ul>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-col gap-1 font-black font-sans uppercase tracking-[-0.05em] leading-[1.2] md:leading-[1.4] text-white text-2xl md:text-3xl">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:origin-left after:transition-transform after:duration-300 ${
                    pathname === href
                      ? "after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-1 font-sans tracking-widest text-white">
          <a
            href={`mailto:${contactInfo.email}`}
            className="relative inline-block w-fit after:absolute after:right-0 after:-bottom-0.5 after:h-[1px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="relative inline-block w-fit after:absolute after:right-0 after:-bottom-0.5 after:h-[1px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {contactInfo.phone}
          </a>
        </div>
      </div>

      <div className="relative z-10 hidden lg:flex flex-col h-full">
        <div className="flex items-center justify-between mb-auto">
          <div className="font-bold text-2xl text-white">Furkan Cosar</div>

          <ul className="flex items-center gap-5">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li
                key={label}
                className="relative p-2 border border-white rounded-full group"
              >
                <div className="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-150 transition-all duration-500 ease-out"></div>

                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center justify-center"
                >
                  <Icon
                    className="fill-current text-white transition-colors duration-500 ease-out"
                    size={20}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center flex-1 justify-between">
          <div className="flex-1">
            <h1 className="font-black font-sans uppercase tracking-[-0.05em] max-w-2xl lg:max-w-[680px] text-white text-7xl lg:leading-[0.9]">
              designing with purpose and passion.
            </h1>
          </div>

          <nav aria-label="Footer navigation" className="text-right">
            <ul className="flex flex-col gap-2 font-black font-sans uppercase tracking-[-0.05em] text-white text-4xl lg:leading-[0.9]">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={`relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:origin-right after:transition-transform after:duration-300 ${
                      pathname === href
                        ? "after:scale-x-100"
                        : "after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-end justify-between">
          <div className="ml-auto flex gap-8 font-medium text-lg tracking-wide text-white">
            <a
              href={`mailto:${contactInfo.email}`}
              className="relative inline-block hover:text-opacity-80 transition-opacity duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-full after:scale-x-0 after:bg-white after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {contactInfo.email}
            </a>
            <span>|</span>
            <a
              href={`tel:${contactInfo.phone}`}
              className="relative inline-block hover:text-opacity-80 transition-opacity duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

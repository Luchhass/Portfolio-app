"use client";

import { useState, useEffect, useRef } from "react";
import { socialLinks, navLinks, contactInfo } from "@/data/navigation";
import Link from "next/link";
import gsap from "gsap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    if (!tl.current) {
      tl.current = gsap
        .timeline({ paused: true })
        .fromTo(
          ".hamburger-line-top",
          { rotation: 0, y: -8 },
          {
            rotation: 45,
            y: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          ".hamburger-line-middle",
          {
            opacity: 0,
            duration: 0.2,
            ease: "power2.inOut",
          },
          0
        )
        .fromTo(
          ".hamburger-line-bottom",
          { rotation: 0, y: 8 },
          {
            rotation: -45,
            y: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          ".mobile-menu",
          {
            y: "-1px",
            duration: 1,
            ease: "power2.out",
          },
          0.2
        )
        .from(
          ".nav-item",
          {
            delay: 0.5,
            x: "-100%",
            duration: 1.5,
            ease: "elastic.out(1.5, 1.5)",
            stagger: 0.1,
          },
          "<"
        )
        .from(
          ".contact-item",
          {
            delay: 0.5,
            opacity: 0,
            y: "100%",
            duration: 1.5,
            ease: "elastic.out(1.5, 1.5)",
            stagger: 0.1,
          },
          "<"
        )
        .from(
          ".social-item",
          {
            delay: 0.2,
            opacity: 0,
            duration: 1.5,
            ease: "power1.out",
            stagger: 0.1,
          },
          "<"
        );
    }

    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-40 flex items-center justify-between px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 bg-white dark:bg-black border-b-2 ${
          isMenuOpen
            ? "border-white dark:border-black"
            : "border-gray-200 dark:border-zinc-900"
        }`}
      >
        {/* Logo */}
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white">
          Furkan Cosar
        </div>

        {/* Hamburger Menu Button */}
        <button
          ref={hamburgerRef}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="group relative p-1.5"
          aria-label="Menu"
        >
          <div className="hamburger-container relative w-7 h-7 flex flex-col justify-center items-center">
            <span className="hamburger-line-top absolute block h-0.5 w-7 bg-black dark:bg-white rounded-full transition-all duration-300 ease-out group-hover:w-8 group-hover:-translate-y-2.5 group-hover:bg-slate-900 dark:group-hover:bg-slate-100" />
            <span className="hamburger-line-middle absolute block h-0.5 w-7 bg-black dark:bg-white rounded-full transition-all duration-200 ease-out group-hover:w-5 group-hover:bg-slate-900 dark:group-hover:bg-slate-100" />
            <span className="hamburger-line-bottom absolute block h-0.5 w-7 bg-black dark:bg-white rounded-full transition-all duration-300 ease-out group-hover:w-8 group-hover:translate-y-2.5 group-hover:bg-slate-900 dark:group-hover:bg-slate-100" />
          </div>
        </button>
      </header>

      {/* Hamburger Menu */}
      <div className="mobile-menu -translate-y-full flex flex-col justify-between fixed w-full h-[calc(100dvh-90px)] md:h-[calc(100dvh-105px)] z-30 bg-white dark:bg-black px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 pointer-events-auto">
        <div></div>

        {/* Navigation */}
        <nav aria-label="navigation">
          <ul className="flex flex-col gap-1 text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[1] md:leading-[0.9] lg:leading-[0.8] tracking-[-0.09em]">
            {navLinks.map(({ href, label }) => (
              <li key={label} className="nav-item">
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className=" text-transparent bg-clip-text bg-[linear-gradient(to_left,_theme(colors.black)_50%,_#f37a35_50%)] dark:bg-[linear-gradient(to_left,_theme(colors.white)_50%,_#f37a35_50%)] bg-[length:200%_100%] bg-[position:-100%_0] hover:bg-[position:0_0] transition-[background-position] duration-400 ease-in-out pr-[0.2em]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div></div>

        <div className="mt-8 flex flex-col gap-4 md:flex-row justify-between">
          {/* Contact Details */}
          <div className="flex gap-2 md:flex-col text-sm md:text-base text-black dark:text-white">
            <a
              href={`mailto:${contactInfo.email}`}
              className="relative inline-block contact-item after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-full after:scale-x-0 after:bg-black after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {contactInfo.email}
            </a>
            <span className="contact-item md:hidden">|</span>
            <a
              href={`tel:${contactInfo.phone}`}
              className="relative inline-block contact-item after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-full after:scale-x-0 after:bg-black after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {contactInfo.phone}
            </a>
          </div>

          {/* Social Navigation */}
          <ul className="flex items-center gap-5">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li
                key={label}
                className="social-item relative p-2 border border-black dark:border-white rounded-full group"
              >
                <div className="absolute inset-0 bg-[#f37a35] rounded-full scale-0 group-hover:scale-150 transition-all duration-500 ease-out"></div>

                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center justify-center"
                >
                  <Icon
                    className="fill-current text-black dark:text-white group-hover:text-white transition-colors duration-500 ease-out"
                    size={20}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

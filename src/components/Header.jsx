"use client";

import { useState, useEffect, useRef } from "react";
import { socialLinks, navLinks, contactInfo } from "@/data/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import gsap from "gsap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef(null);

  useEffect(() => {
    if (!tl.current) {
      tl.current = gsap
        .timeline({ paused: true })
        .to(".mobile-menu", {
          y: "0%",
          duration: 1,
          ease: "power2.out",
        })
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 flex items-center justify-between px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 bg-white dark:bg-black border-b-2 ${
          isMenuOpen
            ? "border-white dark:border-black"
            : "border-gray-200 dark:border-zinc-900"
        }`}
      >
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white">
          Furkan Cosar
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="group p-2 transition-all duration-300 hover:scale-110 hover:rotate-90 z-50"
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <IoCloseOutline
              size={24}
              className="text-black dark:text-white transition-all duration-300 group-hover:scale-110"
            />
          ) : (
            <CiMenuBurger
              size={24}
              className="text-black dark:text-white transition-all duration-300 group-hover:scale-110"
            />
          )}
        </button>
      </header>

      <div className="mobile-menu -translate-y-full flex flex-col justify-between fixed w-full h-[calc(100dvh-88px)] md:h-[calc(100dvh-104px)] z-30 bg-white dark:bg-black px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 pointer-events-auto">
        <div></div>

        <nav aria-label="navigation">
          <ul className="flex flex-col gap-1 text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[1] md:leading-[0.9] lg:leading-[0.8] tracking-[-0.09em] text-black dark:text-white">
            {navLinks.map(({ href, label }) => (
              <li key={label} className="nav-item">
                <Link href={href} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div></div>

        <div className="mt-8 flex flex-col gap-2 md:flex-row justify-between">
          <div className="flex gap-2 md:flex-col text-sm md:text-base text-black dark:text-white">
            <a href={`mailto:${contactInfo.email}`} className="contact-item">
              {contactInfo.email}
            </a>
            <span className="contact-item md:hidden">|</span>
            <a href={`tel:${contactInfo.phone}`} className="contact-item">
              {contactInfo.phone}
            </a>
          </div>

          <ul className="flex items-center gap-5">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li
                key={label}
                className="social-item p-2 border border-black dark:border-white rounded-full"
              >
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white"
                >
                  <Icon className="fill-current" size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

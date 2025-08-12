"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { socialLinks, navLinks, contactInfo } from "@/data/navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();
  const containerRef = useRef();
  const pathname = usePathname();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .fromTo(
          ".hamburger-line-top",
          { rotation: 0, y: -8 },
          { rotation: 45, y: 0, duration: 0.4, ease: "power2.inOut" },
          0
        )
        .to(
          ".hamburger-line-middle",
          { opacity: 0, duration: 0.2, ease: "power2.inOut" },
          0
        )
        .fromTo(
          ".hamburger-line-bottom",
          { rotation: 0, y: 8 },
          { rotation: -45, y: 0, duration: 0.4, ease: "power2.inOut" },
          0
        )
        .to(".mobile-menu", { y: "0px", duration: 1, ease: "power2.out" }, 0.2)
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
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      if (!tl.current) return;

      if (isMenuOpen) {
        tl.current.play(0);
        document.body.style.overflow = "hidden";
      } else {
        tl.current.reverse();
        document.body.style.overflow = "";
      }
    },
    { dependencies: [isMenuOpen] }
  );

  useGSAP(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={containerRef}>
      <header
        className={`fixed left-0 top-0 z-40 flex w-full items-center justify-between border-b-2 px-8 py-6 transition-all duration-500 ease-out md:px-10 md:py-8 lg:px-16 lg:py-8 ${
          isMenuOpen
            ? "border-none"
            : "border-gray-200 bg-white dark:border-zinc-900 dark:bg-black lg:border-none lg:bg-transparent lg:dark:bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="text-xl font-light text-black dark:text-white md:text-2xl lg:text-3xl"
        >
          Furkan <span className="text-[#f37a35] font-black">Cosar</span>
        </Link>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="group relative p-1.5"
          aria-label="Menu"
        >
          <div className="hamburger-container relative flex h-7 w-7 flex-col items-center justify-center">
            <span className="hamburger-line-top absolute block h-0.5 w-7 rounded-full bg-black transition-all duration-300 ease-out group-hover:-translate-y-2.5 group-hover:w-8 group-hover:bg-slate-900 dark:bg-white dark:group-hover:bg-slate-100" />
            <span className="hamburger-line-middle absolute block h-0.5 w-7 rounded-full bg-black transition-all duration-200 ease-out group-hover:w-5 group-hover:bg-slate-900 dark:bg-white dark:group-hover:bg-slate-100" />
            <span className="hamburger-line-bottom absolute block h-0.5 w-7 rounded-full bg-black transition-all duration-300 ease-out group-hover:translate-y-2.5 group-hover:w-8 group-hover:bg-slate-900 dark:bg-white dark:group-hover:bg-slate-100" />
          </div>
        </button>
      </header>

      <div className="mobile-menu pointer-events-auto fixed top-0 z-30 flex h-[100dvh] w-full flex-col justify-between -translate-y-full bg-white px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 dark:bg-black">
        <div />

        <nav aria-label="navigation">
          <ul className="flex flex-col gap-1 text-6xl font-black uppercase leading-[1] tracking-[-0.09em] md:text-7xl md:leading-[0.9] lg:text-8xl lg:leading-[0.8]">
            {navLinks.map(({ href, label }) => (
              <li key={label} className="nav-item">
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`pr-[0.2em] transition-[background-position] duration-400 ease-in-out ${
                    pathname === href
                      ? "text-[#f37a35] font-black"
                      : "bg-[length:200%_100%] bg-[position:-100%_0] bg-clip-text text-transparent bg-[linear-gradient(to_left,_theme(colors.black)_50%,_#f37a35_50%)] hover:bg-[position:0_0] dark:bg-[linear-gradient(to_left,_theme(colors.white)_50%,_#f37a35_50%)]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div />

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="flex gap-2 text-sm text-black md:flex-col md:text-base dark:text-white">
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-item relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {contactInfo.email}
            </a>
            <span className="contact-item md:hidden">|</span>
            <a
              href={`tel:${contactInfo.phone}`}
              className="contact-item relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {contactInfo.phone}
            </a>
          </div>

          <ul className="flex items-center gap-5">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li
                key={label}
                className="social-item group relative rounded-full border border-black p-2 dark:border-white"
              >
                <div className="absolute inset-0 scale-0 rounded-full bg-[#f37a35] transition-all duration-500 ease-out group-hover:scale-150" />
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center justify-center"
                >
                  <Icon
                    className="text-black transition-colors duration-500 ease-out group-hover:text-white dark:text-white"
                    size={20}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

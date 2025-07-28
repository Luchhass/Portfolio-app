"use client";

import { useState, useCallback } from "react";
import { socialLinks, navLinks, contactInfo } from "@/data/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 bg-white dark:bg-black border-b-2 border-gray-200 dark:border-zinc-900">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white">
          Furkan Cosar
        </div>

        <button
          onClick={toggleMenu}
          className="group p-2 transition-all duration-300 hover:scale-110 hover:rotate-90"
          aria-label="Menu"
        >
          <CiMenuBurger
            size={24}
            className="text-black dark:text-white transition-all duration-300 group-hover:scale-110"
          />
        </button>
      </header>

      {/* Menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col justify-between h-full px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 bg-white dark:bg-black ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white">
            Furkan Cosar
          </div>

          <button
            onClick={toggleMenu}
            className="group p-2 transition-all duration-300 hover:scale-110 hover:rotate-180"
            aria-label="Close menu"
          >
            <IoCloseOutline
              size={24}
              className="text-black dark:text-white transition-all duration-300 group-hover:scale-110"
            />
          </button>
        </div>

        <nav aria-label="navigation">
          <ul className="flex flex-col gap-1 text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[1] md:leading-[0.9] lg:leading-[0.8] tracking-[-0.09em] text-black dark:text-white">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <Link href={href} onClick={toggleMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col gap-2 md:flex-row justify-between">
          <div className="flex gap-2 md:flex-col text-sm md:text-base text-black dark:text-white">
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <span className="md:hidden">|</span>
            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
          </div>

          <ul className="flex items-center gap-5">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li
                key={label}
                className="p-2 border border-black dark:border-white rounded-full"
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

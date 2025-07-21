"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const socialLinks = [
    { href: "https://www.facebook.com", label: "Facebook", icon: FaFacebook },
    {
      href: "https://www.instagram.com",
      label: "Instagram",
      icon: FaInstagram,
    },
    { href: "https://www.youtube.com", label: "YouTube", icon: FaYoutube },
    { href: "https://www.linkedin.com", label: "LinkedIn", icon: FaLinkedin },
  ];

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/referances", label: "REFERANCES" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white z-40 px-8 py-6 md:px-10 md:py-8">
        <div className="flex items-center justify-between">
          <div className="text-black text-xl md:text-2xl lg:text-3xl font-bold">
            Furkan Cosar
          </div>

          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 transition-colors rounded"
            aria-label="Menu"
          >
            <CiMenuBurger size={24} className="text-black" />
          </button>
        </div>
      </header>

      <div
        className={`h-full flex flex-col justify-between fixed inset-0 bg-white z-50 px-8 py-6 md:px-10 md:py-8 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-black text-xl md:text-2xl lg:text-3xl font-bold">
            Furkan Cosar
          </div>

          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 transition-colors rounded"
            aria-label="Close menu"
          >
            <IoCloseOutline size={24} className="text-black" />
          </button>
        </div>

        <nav aria-label="navigation">
          <ul className="flex flex-col gap-1 text-black font-extrabold uppercase text-5xl md:text-7xl lg:text-8xl">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-2 md:flex-row justify-between mt-8">
          <div>
            <div className="flex gap-2 md:flex-col text-sm md:text-base space-y-1">
              <a href="mailto:furkancosar2005@gmail.com">
                furkancosar2005@gmail.com
              </a>
              <span className="md:hidden">|</span>
              <div className="flex space-x-4">
                <a href="tel:+905061393220">+90 506 139 3220</a>
              </div>
            </div>
          </div>

          <ul className="flex items-center gap-5">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={label} className="border border-black rounded-full p-2">
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon color="black" size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

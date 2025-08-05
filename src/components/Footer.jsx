"use client"

import { socialLinks, navLinks, contactInfo } from "@/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#f37a35] relative flex flex-col justify-between overflow-hidden px-8 py-6 h-[calc(100dvh-90px)] md:h-[calc(100dvh-106px)] md:px-10 md:py-8 lg:px-16 lg:py-8">
      <div className="flex flex-col justify-between h-full lg:hidden">
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

      <div className="hidden lg:flex flex-col h-full">
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

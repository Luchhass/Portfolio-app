"use client";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`bottom-8 right-8 md:right-10 lg:left-[68px] lg:right-auto z-10 group fixed w-[50px] h-[50px] rounded-full bg-[#f37a35] border-none font-semibold flex items-center justify-center shadow-[0px_0px_0px_4px_rgba(243,122,53,0.253)] cursor-pointer transition-all duration-300 overflow-hidden hover:w-[140px] hover:rounded-[50px] hover:bg-[#f37a35] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <svg
        className="w-3 transition-all duration-300 fill-white dark:fill-black group-hover:-translate-y-[200%]"
        viewBox="0 0 384 512"
      >
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>

      <span className="absolute whitespace-nowrap text-white text-sm opacity-0 -bottom-5 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-4">
        Back to Top
      </span>
    </button>
  );
}

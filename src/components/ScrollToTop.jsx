"use client";
import { useState, useEffect } from "react";
import { IoChevronUp } from "react-icons/io5";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 300px scroll sonrası butonu göster
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
      className={`fixed bottom-8 right-8 md:right-10 lg:left-16 lg:right-auto z-20 p-3 rounded-full bg-[#f37a35] text-white shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 group ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      } hover:scale-125 hover:-translate-y-2 active:scale-95 hover:rotate-12`}
      aria-label="Yukarı çık"
    >
      <IoChevronUp
        size={24}
        className="transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-lg"
      />
    </button>
  );
}

import Link from "next/link";

export default function ContactBanner() {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12 py-32 md:py-44 lg:py-56">
      <div className="relative w-fit mx-auto">
        <h1 className="text-center text-7xl md:text-8xl lg:text-9xl font-black leading-[0.8] text-black dark:text-white lowercase tracking-[-0.02em] relative z-1 whitespace-nowrap">
          let's get
          <br />
          to work
        </h1>

        <h1
          className="absolute -top-[0.5px] -left-[1px] text-center text-7xl md:text-8xl lg:text-9xl font-black leading-[0.8] lowercase tracking-[-0.02em] z-3 whitespace-nowrap"
          style={{
            WebkitTextStroke: "1.2px #f37a35",
            color: "transparent",
          }}
        >
          let's get
          <br />
          to work
        </h1>

        <h1
          className="absolute top-[0.3px] left-0  text-center text-7xl md:text-8xl lg:text-9xl font-black leading-[0.8] lowercase tracking-[-0.02em] z-2 whitespace-nowrap"
          style={{
            WebkitTextStroke: "1px #8a8a8a",
            color: "transparent",
          }}
        >
          let's get
          <br />
          to work
        </h1>
      </div>
      // 00. Original
      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md"
      >
        get in touch
      </Link>
      // 01. Ripple + Shimmer Combo
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:bg-[#e06b2e] hover:shadow-[0_0_30px_rgba(243,122,53,0.4)] hover:scale-105 active:scale-95"
      >
        {/* Ripple effect background */}
        <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 origin-center"></span>
        {/* Shimmer effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        {/* Text with subtle animation */}
        <span className="relative z-10 group-hover:scale-105 transition-transform duration-200">
          get in touch
        </span>
      </Link>
      // 02. Triple Layer Animation
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:bg-[#e06b2e] hover:shadow-[0_8px_25px_rgba(243,122,53,0.4)] hover:-translate-y-1 active:scale-95 active:translate-y-0"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-[#ff6b35] to-[#f37a35] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full"></span>
        <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:w-full group-hover:h-full group-hover:scale-150 transition-all duration-600 ease-out"></span>
        <span className="absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700 ease-out"></span>
        <span className="relative z-10 transition-all duration-200 group-hover:scale-105 group-hover:tracking-wide">
          get in touch
        </span>
      </Link>
      // 03. Simple Ripple Wave
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 active:scale-95"
      >
        <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 origin-center"></span>
        <span className="relative z-10">get in touch</span>
      </Link>
      // 04. Pure Glow Effect
      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(243,122,53,0.6)] hover:scale-105 active:scale-95"
      >
        get in touch
      </Link>
      // 05. Shimmer Sweep Only
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        <span className="relative z-10">get in touch</span>
      </Link>
      // 06. Multi-Layer Ripple
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
      >
        <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-400 origin-center"></span>
        <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-110 rounded-full transition-transform duration-600 delay-100 origin-center"></span>
        <span className="relative z-10 group-hover:scale-105 transition-transform duration-200">
          get in touch
        </span>
      </Link>
      // 07. Layered Ripple + Text Wave
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/15 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:w-full group-hover:h-full group-hover:scale-150 transition-all duration-500"></span>
        <span className="relative z-10 group-hover:scale-105 group-hover:tracking-wider transition-all duration-300">
          get in touch
        </span>
      </Link>
      // 08. Border Pulse + Content Shift
      <Link
        href="/contact"
        className="relative bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 border-2 border-transparent hover:border-white/30"
      >
        <span className="relative z-10 group-hover:scale-110 group-hover:font-bold transition-all duration-200">
          get in touch
        </span>
      </Link>
      // 09. Multi-Shadow + Scale
      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md transition-all duration-300 hover:scale-105 hover:shadow-[0_5px_15px_rgba(243,122,53,0.3),0_10px_30px_rgba(243,122,53,0.2)] active:scale-95"
      >
        get in touch
      </Link>
      // 10. Breathing + Shimmer Combo
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:animate-pulse hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800"></span>
        <span className="relative z-10">get in touch</span>
      </Link>
      // 11. Double Ripple + Skew
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 hover:-skew-x-3 hover:shadow-lg active:scale-95 active:skew-x-0"
      >
        <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 origin-center"></span>
        <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-125 rounded-full transition-transform duration-500 delay-150 origin-center"></span>
        <span className="relative z-10">get in touch</span>
      </Link>
      // 14. Premium Combo (Best of All)
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(243,122,53,0.4)] hover:-translate-y-1 active:scale-95 active:translate-y-0"
      >
        <span className="absolute inset-0 bg-white/15 scale-0 group-hover:scale-100 rounded-full transition-transform duration-400 origin-center"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-600"></span>
        <span className="absolute inset-0 border-2 border-white/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 delay-100"></span>
        <span className="relative z-10 group-hover:scale-105 group-hover:tracking-wide transition-all duration-200">
          get in touch
        </span>
      </Link>
      // 15. Text Split Animation
      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "0ms" }}
        >
          g
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "100ms" }}
        >
          e
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "200ms" }}
        >
          t
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "100ms" }}
        >
          {" "}
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "300ms" }}
        >
          i
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "400ms" }}
        >
          n
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "200ms" }}
        >
          {" "}
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "500ms" }}
        >
          t
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "600ms" }}
        >
          o
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "400ms" }}
        >
          u
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "700ms" }}
        >
          c
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "800ms" }}
        >
          h
        </span>
      </Link>
      // 17. Text Shadow Explosion
      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md transition-all duration-300 hover:scale-105 active:scale-95 hover:text-shadow-[2px_2px_8px_rgba(0,0,0,0.5)]"
        style={{ "--tw-text-shadow": "2px 2px 8px rgba(0,0,0,0.5)" }}
      >
        get in touch
      </Link>
      // 26. Text Slide Up/Down
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="block group-hover:-translate-y-full transition-transform duration-300">
          get in touch
        </span>
        <span className="absolute top-full left-1/2 -translate-x-1/2 group-hover:top-1/2 group-hover:-translate-y-1/2 transition-all duration-300">
          contact us!
        </span>
      </Link>
      // 28. Text Rotation
      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="inline-block group-hover:rotate-12 transition-transform duration-300">
          get in touch
        </span>
      </Link>
      // 31. Text Spacing Extreme
      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md transition-all duration-500 hover:tracking-[0.5em] hover:scale-105 active:scale-95"
      >
        get in touch
      </Link>
      // 40. Text Vertical Align
      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="inline-block group-hover:-translate-y-1 transition-transform duration-200">
          get
        </span>
        <span className="inline-block"> in </span>
        <span className="inline-block group-hover:translate-y-1 transition-transform duration-200">
          touch
        </span>
      </Link>
      // 45. Text Flip Animation
      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="inline-block group-hover:rotate-y-180 transition-transform duration-500">
          get in touch
        </span>
      </Link>
      // 47. Text Wave Effect
      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "0ms" }}
        >
          g
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "50ms" }}
        >
          e
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "100ms" }}
        >
          t
        </span>
        <span className="inline-block"> </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "150ms" }}
        >
          i
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "200ms" }}
        >
          n
        </span>
        <span className="inline-block"> </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "250ms" }}
        >
          t
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "300ms" }}
        >
          o
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "350ms" }}
        >
          u
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "400ms" }}
        >
          c
        </span>
        <span
          className="inline-block group-hover:animate-bounce"
          style={{ animationDelay: "450ms" }}
        >
          h
        </span>
      </Link>
      // 48. Magnetic Field Effect
      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_0_4px_rgba(243,122,53,0.3),0_0_0_8px_rgba(243,122,53,0.2),0_0_0_12px_rgba(243,122,53,0.1)] active:scale-95"
      >
        get in touch
      </Link>
      // 49. Text Glitch Effect
      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="group-hover:animate-pulse group-hover:text-shadow-[2px_0_#ff0000,-2px_0_#00ffff] transition-all duration-200">
          get in touch
        </span>
      </Link>
      // 50. Ultimate Premium Button
      <Link
        href="/contact"
        className="relative overflow-hidden bg-gradient-to-r from-[#f37a35] to-[#e06b2e] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_30px_rgba(243,122,53,0.4)] hover:-translate-y-2 active:scale-95 active:translate-y-0"
      >
        <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-400 origin-center"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        <span className="absolute inset-0 border-2 border-white/30 rounded-full scale-0 group-hover:scale-110 transition-transform duration-600 delay-100"></span>
        <span className="relative z-10 group-hover:scale-110 group-hover:tracking-wider group-hover:font-bold transition-all duration-300">
          get in touch
        </span>
      </Link>
    </div>
  );
}

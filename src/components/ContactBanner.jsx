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
      // 02. Pure Glow Effect
      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(243,122,53,0.6)] hover:scale-105 active:scale-95"
      >
        get in touch
      </Link>
      // 03. Shimmer Sweep Only
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        <span className="relative z-10">get in touch</span>
      </Link>
      // 04. Multi-Layer Ripple
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
      // 05. Premium Combo (Best of All)
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
      // 06. Text Slide Up/Down
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
      // 07. Ultimate Premium Button
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
      // 08. Triple Ring Pulse Green
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-400 origin-center"></span>
        <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-110 rounded-full transition-transform duration-600 delay-100 origin-center"></span>
        <span className="absolute inset-0 border-2 border-white/30 rounded-full scale-0 group-hover:scale-125 transition-transform duration-800 delay-200"></span>
        <span className="relative z-10 group-hover:scale-105 transition-transform duration-200">
          get in touch
        </span>
      </Link>
      // 09. Split Slide Effect Gray to Purple/Pink
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 -translate-x-44 group-hover:translate-x-0 transition-transform duration-500"></span>
        <span className="relative z-10 group-hover:scale-105 transition-transform duration-200">
          get in touch
        </span>
      </Link>
      // 10. Shimmer Wave Effect Emerald
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-600 delay-200"></span>
        <span className="relative z-10 group-hover:scale-105 transition-transform duration-200">
          get in touch
        </span>
      </Link>
      // 11. Double Ripple + Glow
      <Link
        href="/contact"
        className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] active:scale-95"
      >
        <span className="absolute inset-0 bg-white/15 scale-0 group-hover:scale-100 rounded-full transition-transform duration-400 origin-center"></span>
        <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-125 rounded-full transition-transform duration-600 delay-150 origin-center"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        <span className="relative z-10 group-hover:scale-105 group-hover:tracking-wide transition-all duration-200">
          get in touch
        </span>
      </Link>
    </div>
  );
}

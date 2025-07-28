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

      <Link
        href="/contact"
        className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md"
      >
        get in touch
      </Link>
    </div>
  );
}

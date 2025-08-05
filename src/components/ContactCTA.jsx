import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function ContactCTA() {
  return (
    <AnimatedSection animation="cta-animation">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
        <div className="relative mx-auto w-fit">
          <h1 className="relative z-1 whitespace-nowrap text-center text-7xl font-black lowercase leading-[0.8] tracking-[-0.02em] text-black dark:text-white md:text-8xl lg:text-9xl">
            let's get
            <br />
            to work
          </h1>

          <h1
            className="absolute -top-[1px] -left-[1px] z-3 whitespace-nowrap text-center text-7xl font-black lowercase leading-[0.8] tracking-[-0.02em] md:text-8xl lg:text-9xl"
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
            className="absolute top-[0.8px] left-0 z-2 whitespace-nowrap text-center text-7xl font-black lowercase leading-[0.8] tracking-[-0.02em] md:text-8xl lg:text-9xl"
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
          className="relative group overflow-hidden rounded-full bg-[#f37a35] px-12 py-5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 md:text-md"
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-1/2">
            get in touch
          </span>
          <span className="absolute left-1/2 top-full -translate-x-1/2 transition-all duration-300 group-hover:top-1/2 group-hover:-translate-y-1/6">
            contact us!
          </span>
        </Link>
      </div>
    </AnimatedSection>
  );
}

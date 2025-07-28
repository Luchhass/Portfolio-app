import Link from "next/link";

export default function ContactBanner() {
  return (
    <Link
      href="/contact"
      className="flex flex-col items-center gap-8 font-sans py-48 md:py-56 lg:py-64"
    >
      <h1
        className="text-center text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[140px] font-black leading-[0.8] text-white"
        style={{
          textShadow: `
            1px 1px 0 #f37a35,
            2px 2px 0 #343434,
            3px 3px 0 #f37a35,
            4px 4px 8px rgba(0,0,0,0.3)
          `,
        }}
      >
        let's get
        <br />
        to work
      </h1>

      <button className="bg-[#f37a35] px-12 py-5 text-xl font-semibold rounded-full text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 md:text-2xl">
        get in touch
      </button>
    </Link>
  );
}

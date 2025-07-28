import ProjectHighlights from "@/components/ProjectHighlights";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-[88px] md:mt-[104px] px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 pt-0 md:pt-0 lg:pt-0">
      <section className="h-[calc(100vh-90px)] md:h-[calc(100vh-106px)] flex items-center justify-center py-6 md:py-8 lg:py-8">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[calc(100%-4rem)] h-[calc(100%-4rem)] lg:w-[600px] lg:max-w-none lg:max-h-none rounded-3xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/your-video.mp4" type="video/mp4" />
              Video desteklenmiyor.
            </video>

            <div className="absolute inset-0 bg-opacity-30 flex flex-col gap-12 items-center justify-center text-center px-4">
              <h1 className="text-white text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-[-0.09em]">
                creativity
                <br />
                masters
                <br />
                at work
              </h1>

              <button className="bg-[#f37a35] text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base">
                discover our work
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProjectHighlights />

      <section className="text-black dark:text-white mt-[88px] md:mt-[104px] px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8">
        <Link
          href="/contact"
          className="flex flex-col gap-8 items-center font-sans py-48 md:py-56 lg:py-64"
        >
          <div>
            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[140px] font-black leading-[0.8] text-center text-white"
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
          </div>

          <button className="bg-[#f37a35] text-white px-12 py-5 rounded-full text-xl md:text-2xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 shadow-lg shadow-orange-500/25">
            get in touch
          </button>
        </Link>
      </section>
    </main>
  );
}

import ContactBanner from "@/components/ContactBanner";
import ProjectHighlights from "@/components/ProjectHighlights";
import WelcomeBand from "@/components/WelcomeBand";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="h-[calc(100dvh-90px)] md:h-[calc(100dvh-106px)] px-8 py-0 md:px-10 lg:px-16">
        <div className="relative w-full h-full flex items-center justify-center py-6 md:py-8 lg:py-8">
          <div className="relative w-screen h-[calc(100%-4rem)] lg:w-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/banner.mp4" type="video/mp4" />
              video not supported
            </video>

            <div className="absolute inset-0 flex flex-col gap-12 items-center justify-center text-center">
              <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-[-0.09em]">
                crafting
                <br />
                digital
                <br />
                experiences
              </h1>

              <div className="flex flex-col items-center">
                <Link
                  href="/contact"
                  className="relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative z-10">discover my work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <WelcomeBand />
      </section>

      <section className="px-8 py-0 md:px-10 lg:px-16">
        <ProjectHighlights />
      </section>

      <section className="px-8 py-0 md:px-10 lg:px-16">
        <ContactBanner />
      </section>
    </main>
  );
}

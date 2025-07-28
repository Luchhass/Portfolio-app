import ContactBanner from "@/components/ContactBanner";
import ProjectHighlights from "@/components/ProjectHighlights";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="h-[calc(100dvh-90px)] md:h-[calc(100dvh-106px)]">
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
              <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-[-0.09em]">
                crafting
                <br />
                digital
                <br />
                experiences
              </h1>

              <Link
                href="/contact"
                className="bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md"
              >
                discover my work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section>
        <ProjectHighlights />
      </section>

      {/* CONTACT REDIRECT SECTION */}
      <section>
        <ContactBanner />
      </section>
    </main>
  );
}

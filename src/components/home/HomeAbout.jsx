import AnimatedSection from "../ScrollAnimator";

export default function HomeAbout() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
      <div className="text-black dark:text-white max-w-[440px] md:max-w-[520px] lg:max-w-[700px] text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-[-0.08em]">
        <AnimatedSection animation="about-paragraph-animations" as="span">
          <h1 className="text-left text-[#f37a35]">the creator</h1>
        </AnimatedSection>

        <AnimatedSection animation="about-paragraph-animations" as="span">
          <h1 className="text-right">behind code</h1>
        </AnimatedSection>
      </div>

      <h2 className="mb-8 text-xl md:text-2xl lg:text-3xl font-extralight leading-[1.1] text-black dark:text-white">
        <AnimatedSection
          animation="about-paragraph-animations"
          as="span"
          className="font-bold"
        >
          I'm a Frontend Developer and a final-year Web Design student at
          Istanbul University.{" "}
        </AnimatedSection>

        <AnimatedSection animation="about-paragraph-animations" as="span">
          Throughout my journey, I've had the opportunity to intern at several
          companies, gaining hands-on experience in building modern and
          responsive web interfaces. To further enhance my skills, I also
          completed a Software Specialization course at Nişantaşı University,
          where I deepened my knowledge of development practices and
          technologies.{" "}
        </AnimatedSection>

        <AnimatedSection
          animation="about-paragraph-animations"
          as="span"
          className="font-bold"
        >
          Today, I combine creativity with technical expertise to craft seamless
          digital experiences.
        </AnimatedSection>
      </h2>
    </div>
  );
}

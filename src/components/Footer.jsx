import Link from "next/link";
import { socialLinks, navLinks, contactInfo } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#f37a35] h-[calc(100dvh-88px)] md:h-[calc(100dvh-104px)] flex flex-col justify-between relative overflow-hidden px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8">
      {/* Mobile layout */}
      <div className="lg:hidden flex flex-col justify-between h-full">
        <h1 className="text-white max-w-[350px] md:max-w-[450px] font-black uppercase text-4xl md:text-5xl font-sans mb-8 leading-[1] md:leading-[0.9] tracking-[-0.05em]">
          designing with purpose and passion.
        </h1>

        <ul className="flex items-center gap-5">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <li
              key={label}
              className="social-item relative p-2 border border-white rounded-full group"
            >
              <div className="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-150 transition-all duration-500 ease-out"></div>

              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center justify-center"
              >
                <Icon
                  className="fill-current text-white transition-colors duration-500 ease-out"
                  size={20}
                />
              </a>
            </li>
          ))}
        </ul>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-col gap-1 text-white font-black uppercase text-2xl md:text-3xl font-sans leading-[1.2] md:leading-[1.4] tracking-[-0.05em]">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-1 text-white tracking-widest font-sans">
          <a
            href={`mailto:${contactInfo.email}`}
            className="relative inline-block w-fit after:absolute after:right-0 after:-bottom-0.5 after:h-[1px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="relative inline-block w-fit after:absolute after:right-0 after:-bottom-0.5 after:h-[1px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {contactInfo.phone}
          </a>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex flex-col h-full">
        <div className="flex justify-between items-center mb-auto">
          <div className="text-white font-bold text-2xl">Furkan Cosar</div>
          <ul className="flex items-center gap-5">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li
                key={label}
                className="social-item relative p-2 border border-white rounded-full group"
              >
                <div className="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-150 transition-all duration-500 ease-out"></div>

                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center justify-center"
                >
                  <Icon
                    className="fill-current text-white transition-colors duration-500 ease-out"
                    size={20}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center flex-1">
          <div className="flex-1">
            <h1 className="text-white max-w-2xl lg:max-w-[680px] font-black uppercase text-7xl font-sans lg:leading-[0.9] tracking-[-0.05em]">
              designing with purpose and passion.
            </h1>
          </div>

          <nav aria-label="Footer navigation" className="text-right">
            <ul className="flex flex-col gap-2 text-white font-black uppercase text-4xl lg:leading-[0.9] tracking-[-0.05em] font-sans">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex gap-8 text-white font-medium text-lg tracking-wide ml-auto">
            <a
              href={`mailto:${contactInfo.email}`}
              className="relative inline-block hover:text-opacity-80 transition-opacity duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-full after:scale-x-0 after:bg-white after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {contactInfo.email}
            </a>
            <span>|</span>
            <a
              href={`tel:${contactInfo.phone}`}
              className="relative inline-block hover:text-opacity-80 transition-opacity duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

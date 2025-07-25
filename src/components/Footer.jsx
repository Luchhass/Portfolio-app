import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook, FaGithub, FaTwitter  } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.instagram.com/luchhass/", label: "Instagram", icon: FaInstagram },
  // { href: "https://www.facebook.com", label: "Facebook", icon: FaFacebook },
  { href: "https://www.linkedin.com/in/furkancosar", label: "LinkedIn", icon: FaLinkedin },
  // { href: "https://www.youtube.com", label: "YouTube", icon: FaYoutube },
  { href: "https://github.com/Luchhass", label: "GitHub", icon: FaGithub },
  { href: "https://x.com/YatoKagura000", label: "Twitter", icon: FaTwitter },
];

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/referances", label: "REFERANCES" },
    { href: "/contact", label: "CONTACT" },
  ];

export default function Footer() {
  return (
    <footer className="bg-[#f37a35] h-[calc(100vh-88px)] md:h-[calc(100vh-104px)] flex flex-col justify-between relative overflow-hidden px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8">
      <div className="lg:hidden flex flex-col justify-between h-full">
        <h1 className="text-white max-w-[350px] md:max-w-[450px] font-extrabold uppercase text-4xl md:text-5xl font-sans mb-8 leading-[1] md:leading-[0.9] tracking-[-0.05em]">
          designing with purpose and passion.
        </h1>

        <ul className="flex items-center gap-5">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <li key={label} className="border border-white rounded-full p-2">
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon color="white" size={20} />
              </a>
            </li>
          ))}
        </ul>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-col gap-1 text-white font-extrabold uppercase text-2xl md:3xl font-sans leading-[1.2] md:leading-[1.4] tracking-[-0.05em]">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-1 text-white tracking-widest font-sans">
          <a href="mailto:furkancosar2005@gmail.com">
            furkancosar2005@gmail.com
          </a>
          <a href="tel:+905061393220">+90 506 139 3220</a>
        </div>
      </div>

      <div className="hidden lg:flex flex-col h-full">
        <div className="flex justify-between items-center mb-auto">
          <div className="text-white font-bold text-2xl">Furkan Cosar</div>

          <ul className="flex items-center gap-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={label} className="border border-white rounded-full p-2">
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon color="white" size={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center flex-1">
          <div className="flex-1">
            <h1 className="text-white lg:max-w-[680px] font-extrabold uppercase text-7xl font-sans max-w-2xl lg:leading-[0.9] tracking-[-0.05em]">
              designing with purpose and passion.
            </h1>
          </div>

          <nav aria-label="Footer navigation" className="text-right">
            <ul className="flex flex-col gap-2 text-white font-extrabold uppercase text-4xl lg:leading-[0.9] tracking-[-0.05em] font-sans">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex gap-8 text-white font-medium text-lg tracking-wide ml-auto">
            <a
              href="mailto:furkancosar2005@gmail.com"
              className="hover:text-opacity-80 transition-opacity duration-300"
            >
              furkancosar2005@gmail.com
            </a>
            <span>|</span>
            <a
              href="tel:+905061393220"
              className="hover:text-opacity-80 transition-opacity duration-300"
            >
              +90 506 139 3220
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

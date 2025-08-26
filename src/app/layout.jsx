import PageIntroAnimation from "@/components/PageIntroAnimation";
import Analytics from "./Analytics";
import Header from "@/components/Header";
import ScrollUpCTA from "@/components/ScrollUpCTA";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Furkan Cosar – Frontend Web Developer",
  description:
    "I'm Furkan Cosar. I design and develop modern, high-performance websites using Next.js, React, GSAP, and Tailwind CSS. I focus on creating interactive, user-friendly, and creative web experiences.",
  keywords: [
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Tailwind CSS Expert",
    "GSAP Animations",
    "Responsive Web Design",
    "UI Developer",
    "Modern Web Development",
    "Istanbul Frontend Developer",
    "User Interface Design",
    "Web Animations",
    "Single Page Applications",
    "Portfolio Website",
    "Interactive Web Design",
    "Professional Web Developer",
    "Furkan Cosar",
    "Creative Frontend Developer",
    "High Performance Web",
  ],
  authors: [{ name: "Furkan Cosar" }],
  creator: "Furkan Cosar",
  publisher: "Furkan Cosar",
  robots: "index, follow",
  canonical: "https://furkancosar.com",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Furkan Cosar – Frontend Web Developer",
    description:
      "I'm Furkan Cosar. I design and develop modern, high-performance websites using Next.js, React, GSAP, and Tailwind CSS. I focus on creating interactive, user-friendly, and creative web experiences.",
    url: "https://furkancosar.com",
    siteName: "Furkan Cosar Portfolio",
    images: [
      {
        url: "https://furkancosar.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Furkan Cosar Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furkan Cosar – Frontend Web Developer",
    description:
      "I'm Furkan Cosar. I design and develop modern, high-performance websites using Next.js, React, GSAP, and Tailwind CSS. I focus on creating interactive, user-friendly, and creative web experiences.",
    images: ["https://furkancosar.com/og-image.jpg"],
    site: "@furkancosar",
    creator: "@furkancosar",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Furkan Cosar",
    url: "https://furkancosar.com",
    sameAs: [
      "https://www.linkedin.com/in/furkancosar/",
      "https://github.com/furkancosar",
      "https://twitter.com/furkancosar",
    ],
    jobTitle: "Frontend Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Furkan Cosar Portfolio",
    },
  },
};

const GA_MEASUREMENT_ID = "G-S92MYFFN7H";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased mt-[90px] md:mt-[106px] lg:mt-0">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <PageIntroAnimation />
        <Analytics />
        <Header />

        <div>
          {children}
          <ScrollUpCTA />
        </div>

        <Footer />
      </body>
    </html>
  );
}

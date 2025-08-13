import PageIntroAnimation from "@/components/PageIntroAnimation";
import Analytics from "./Analytics";
import Header from "@/components/Header";
import ScrollUpCTA from "@/components/ScrollUpCTA";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title:
    "Furkan Cosar – Frontend Web Developer | Next.js, React & Tailwind CSS",
  description:
    "Furkan Cosar is a frontend web developer specializing in modern, responsive, and high-performance websites using Next.js, React, GSAP, and Tailwind CSS. Explore innovative web experiences, UI/UX design, and interactive animations.",
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
    title: "Furkan Cosar · Portfolio Website",
    description:
      "Explore the portfolio of Furkan Cosar, a frontend web developer specializing in modern, animated, and responsive websites using Next.js, React, GSAP, and Tailwind CSS.",
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
    title: "Furkan Cosar · Portfolio Website",
    description:
      "Explore the portfolio of Furkan Cosar, featuring modern, animated, and responsive websites built with Next.js, React, GSAP, and Tailwind CSS.",
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
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>

      <body className="antialiased mt-[90px] md:mt-[106px] lg:mt-0">
        <Analytics />
        <PageIntroAnimation />
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

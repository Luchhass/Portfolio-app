import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntroAnimation from "@/components/PageIntroAnimation";
import "./globals.css";

export const metadata = {
  title: "Furkan Cosar · Portfolio",
  description:
    "Explore the portfolio of Furkan Cosar – a creative web developer crafting modern, responsive, and high-performance websites using Next.js, GSAP, and Tailwind CSS.",
  keywords: [
    "Furkan Cosar",
    "web developer",
    "frontend developer",
    "Next.js portfolio",
    "GSAP animations",
    "Tailwind CSS",
    "responsive design",
  ],
  authors: [{ name: "Furkan Cosar" }],
  creator: "Furkan Cosar",
  publisher: "Furkan Cosar",
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
      "Discover Furkan Cosar's portfolio – showcasing modern, animated, and responsive websites built with Next.js, GSAP, and Tailwind CSS.",
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
      "Discover Furkan Cosar's portfolio – showcasing modern, animated, and responsive websites built with Next.js, GSAP, and Tailwind CSS.",
    images: ["https://furkancosar.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased mt-[90px] md:mt-[106px] lg:mt-0">
        <PageIntroAnimation />
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}

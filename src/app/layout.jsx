import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntroAnimation from "@/components/PageIntroAnimation";
import Analytics from "./Analytics";
import "./globals.css";
import BackgroundEffect from "@/components/BackgroundEffect";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Furkan Cosar - Web Developer | Next.js & React",
  description:
    "I’m Furkan, a frontend developer specializing in creating modern, responsive, and high-performance websites using Next.js, GSAP, and Tailwind CSS. This portfolio showcases my work and expertise in building engaging web experiences.",
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
    "Furkan Cosar",
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
      "This is my portfolio, featuring modern, animated, and responsive websites built with Next.js, GSAP, and Tailwind CSS.",
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
      "This is my portfolio, featuring modern, animated, and responsive websites built with Next.js, GSAP, and Tailwind CSS.",
    images: ["https://furkancosar.com/og-image.jpg"],
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

        <main>
          {/* <BackgroundEffect /> */}
          {children}
          <ScrollToTop />
        </main>

        <Footer />
      </body>
    </html>
  );
}

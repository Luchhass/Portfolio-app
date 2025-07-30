import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntroAnimation from "@/components/PageIntroAnimation";
import "./globals.css";

export const metadata = {
  title: "Portfolio App",
  description: "A portfolio application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased mt-[90px] md:mt-[106px]">
        <PageIntroAnimation />
        <Header />

        <div>{children}</div>

        <Footer />
      </body>
    </html>
  );
}

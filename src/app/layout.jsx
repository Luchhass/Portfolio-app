import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio App",
  description: "A portfolio application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased mt-[90px] md:mt-[106px]">
        <Header />

        {/* px-8 py-6 md:px-10 md:py-8 lg:px-16 lg:py-8 */}
        <div className="px-8 py-0 md:px-10 lg:px-16 ">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}

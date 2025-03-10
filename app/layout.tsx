import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import "glightbox/dist/css/glightbox.min.css";
import { seoData } from "@/lib/seoData";
import Header from "@/components/Header";
import BackgroundDecorationalLines from "@/components/BackgroundDecorationalLines";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: seoData.home.title,
  description: seoData.home.description,
  openGraph: {
    title: seoData.home.title,
    description: seoData.home.description,
  },
  keywords: seoData.home.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-bodyBg font-opensans dark:bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container max-w-[1320px] mx-auto px-5 xl:px-3">
            {/* Header */}
            <Header />
            {children}
          </div>
          <BackgroundDecorationalLines />
        </ThemeProvider>
      </body>
    </html>
  );
}

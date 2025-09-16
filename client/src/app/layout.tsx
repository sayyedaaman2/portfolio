import "./globals.css";
import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Poppins } from "next/font/google";

import { GoogleAnalytics } from '@next/third-parties/google'

import { ThemeProvider } from "@/context/theme-provider";
import Header from "@/components/Header/Header";
import ThemeScript from "@/script/ThemeScript";
import InstallPWA from "@/components/InstallPWA";
import Footer from "@/components/Footer/Footer";
export const metadata: Metadata = {
  title: "Sayyed Aaman | Full-Stack Developer",
  description:
    "Portfolio of Sayyed Aaman – Full-Stack Developer skilled in React, Next.js, Node.js, and Dockerized apps.",
  keywords: [
    "Sayyed Aaman",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio"
  ],
  authors: [{ name: "Sayyed Aaman", url: "https://sayyedaaman.vercel.app" }],
  openGraph: {
    title: "Sayyed Aaman | Full-Stack Developer",
    description: "Explore my projects in React, Node.js, and full-stack development.",
    url: "https://sayyedaaman.vercel.app",
    siteName: "Sayyed Aaman Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Sayyed Aaman Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayyed Aaman | Full-Stack Developer",
    description: "Portfolio showcasing projects in React, Node.js, and more.",
    creator: "@sayyedaaman",
    images: ["/preview.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
      },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg", sizes: "32x32" },
      { url: "/favicon-16x16.svg", type: "image/svg", sizes: "16x16" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon.svg",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  other: {
    "google-site-verification": "6ZjEdYcK3X4BCuzBVWSHJBvtFWnXUtqMctAHxToOF-w",
  },
  manifest: "/manifest.json",
};

const poppinsFont: NextFont = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scrollbar-hide" suppressHydrationWarning>
      <body className={` ${poppinsFont.className} relative min-h-screen grid grid-rows-[1fr_10vh] `} suppressHydrationWarning>
        <ThemeScript />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="row-start-1 row-end-2 grid grid-cols-[minmax(10px,2rem)_1fr_minmax(10px,2rem)] lg:grid-cols-[minmax(1rem,5rem)_1fr_minmax(1rem,5rem)] [&>*:nth-child(1)]:col-start-2 ">
            {children}
          </div>
          <Footer className="row-start-2 row-end-3" />
          <InstallPWA />
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Poppins } from "next/font/google";

import {GoogleAnalytics} from '@next/third-parties/google'

import { ThemeProvider } from "@/context/theme-provider";
import Header from "@/components/Header/Header";
import ThemeScript from "@/script/ThemeScript";
import InstallPWA from "@/components/InstallPWA";
export const metadata: Metadata = {
  title: "Sayyed Aaman",
  description: "PORTFOLIO",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={` ${poppinsFont.className} relative min-h-screen`}>
        <ThemeScript />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="grid grid-cols-[minmax(10px,2rem)_1fr_minmax(10px,2rem)] lg:grid-cols-[minmax(1rem,5rem)_1fr_minmax(1rem,5rem)] [&>*:nth-child(1)]:col-start-2 ">
            {children}
          </div>
          <InstallPWA />
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""}/>
      </body>
    </html>
  );
}

import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import InstallPWA from "@/components/InstallPWA";
import ThemeScript from "@/script/ThemeScript";
import { ThemeProvider } from "@/context/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sayyedaaman.vercel.app"),

  title: {
    default: "Aaman Sayyed | Backend Engineer",
    template: "%s | Aaman Sayyed",
  },

  description:
    "Backend-focused full stack developer building scalable APIs, authentication systems, and production-ready Node.js applications.",

  keywords: [
    "Aaman Sayyed",
    "Backend Engineer",
    "Node.js Developer",
    "Next.js",
    "MongoDB",
    "Express.js",
    "JWT Authentication",
    "REST API",
    "Docker",
    "Full Stack Developer",
  ],

  authors: [
    {
      name: "Aaman Sayyed",
      url: "https://sayyedaaman.vercel.app",
    },
  ],

  creator: "Aaman Sayyed",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sayyedaaman.vercel.app",
    siteName: "Aaman Sayyed Portfolio",

    title: "Aaman Sayyed | Backend Engineer",

    description:
      "Explore scalable backend systems, authentication architecture, and production-focused full stack engineering projects.",

    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Aaman Sayyed Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aaman Sayyed | Backend Engineer",

    description:
      "Backend-focused developer building scalable APIs and production-ready systems.",

    creator: "@sayyedaaman",
    images: ["/preview.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],

    shortcut: "/favicon.svg",
  },

  manifest: "/manifest.json",

  other: {
    "google-site-verification":
      "6ZjEdYcK3X4BCuzBVWSHJBvtFWnXUtqMctAHxToOF-w",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0B0F19] text-white antialiased flex flex-col">
        <ThemeScript />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

          <InstallPWA />
        </ThemeProvider>

        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
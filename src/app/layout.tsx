import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

// Optimize font loading with display swap and preload
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Muhammad Abdullah - Portfolio",
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript & AI-powered solutions. Building scalable web applications with modern technologies.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Software Engineer",
    "Web Developer",
    "Muhammad Abdullah",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Abdullah" }],
  creator: "Muhammad Abdullah",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdullahfalak007.vercel.app",
    title: "Muhammad Abdullah - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript & AI-powered solutions.",
    siteName: "Muhammad Abdullah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Abdullah - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript & AI-powered solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for API domains */}
        <link rel="dns-prefetch" href="https://api.emailjs.com" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/hint.min.css";
import axios from "axios";
import localFont from "next/font/local";
import { PostHogProvider } from "./providers";
import StructuredData from "@/components/StructuredData";
import VisitorBadge from "@/components/analytics/VisitorBadge";
import { FaviconAnimator } from "@/components/FaviconAnimator";
import GooeyToasterClient from "@/components/GooeyToasterClient";

const chromate = localFont({
  src: "./Chromate-Regular.ttf",
  variable: "--font-chromate",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://simmannaidu.dev"),
  title: {
    default: "Simmannaidu Velamala - Full Stack Java Developer",
    template: "%s | Simmannaidu Velamala",
  },
  description:
    "Simmannaidu Velamala is a Full Stack Java Developer specializing in Java, Python, AWS, and modern web technologies. AWS Certified Cloud Practitioner with published research in Computer Vision.",
  keywords: [
    "Simmannaidu Velamala",
    "Full Stack Java Developer",
    "Java Developer",
    "AWS Certified",
    "Python Developer",
    "Software Engineer",
    "Web Developer",
    "Portfolio",
    "ANPR CNN",
    "Mini Bazaar",
    "Cloud Computing",
  ],
  authors: [{ name: "Simmannaidu Velamala", url: "https://github.com/VelamalaSimDeveloper" }],
  creator: "Simmannaidu Velamala",
  publisher: "Simmannaidu Velamala",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://simmannaidu.dev",
    title: "Simmannaidu Velamala - Full Stack Java Developer",
    description:
      "Simmannaidu Velamala is a Full Stack Java Developer specializing in Java, Python, AWS, and modern web technologies.",
    siteName: "Simmannaidu Velamala Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simmannaidu Velamala - Full Stack Java Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simmannaidu Velamala - Full Stack Java Developer",
    description:
      "Simmannaidu Velamala is a Full Stack Java Developer specializing in Java, Python, AWS, and modern web technologies.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://simmannaidu.dev",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  axios.defaults.baseURL = process.env.DOMAIN;

  return (
    <html lang="en">
      <head>
        <StructuredData />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#84cc16" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://simmannaidu.dev" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${chromate.variable} font-sans`}>
        <FaviconAnimator />
        <PostHogProvider>
          <GooeyToasterClient />
          {children}
          <VisitorBadge />
        </PostHogProvider>
      </body>
    </html>
  );
}

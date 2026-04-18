import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from "@/components/ThemeProvider";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jordan Bishop — Software Engineer",
  description:
    "Computer Engineering student at Memorial University. Building full-stack web apps, ML pipelines, and embedded systems.",
  keywords: [
    "Jordan Bishop",
    "Software Engineer",
    "Computer Engineering",
    "Memorial University",
    "Full Stack",
    "AI Engineer",
    "Machine Learning Engineer",
  ],
  authors: [{ name: "Jordan Bishop" }],
  openGraph: { // What will show on a link preivew on social media
    title: "Jordan Bishop — Software Engineer",
    description:
      "Computer Engineering student at Memorial University. Building full-stack web apps, ML pipelines, and embedded systems.",
    type: "website",
    images: 'projects/personal-portfolio.jpg'
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

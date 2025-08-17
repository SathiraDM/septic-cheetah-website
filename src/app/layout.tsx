import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Septic Cheetah - Fast, Reliable and Kinda Dirty | Emergency Septic Services",
  description: "Professional septic tank pumping, repairs & installation. Licensed, insured, same-day service. Call (555) 123-4567 for emergency septic services.",
  keywords: "septic tank pumping, septic installation, septic repairs, emergency septic service, licensed septic company",
  authors: [{ name: "Septic Cheetah LLC" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

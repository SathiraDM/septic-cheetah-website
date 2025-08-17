import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap'
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://septiccheetah.com'),
  title: {
    default: 'Septic Cheetah - Fast, Reliable and Kinda Dirty',
    template: '%s | Septic Cheetah'
  },
  description: 'Professional septic tank pumping, repairs & installation. Licensed, insured, same-day service. Call for emergency septic services.',
  keywords: ['septic tank', 'septic pumping', 'septic installation', 'septic repair', 'emergency septic'],
  authors: [{ name: 'Septic Cheetah' }],
  creator: 'Septic Cheetah',
  publisher: 'Septic Cheetah',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://septiccheetah.com',
    siteName: 'Septic Cheetah',
    title: 'Septic Cheetah - Professional Septic Services',
    description: 'Fast, reliable septic services. Licensed professionals, same-day service available.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Septic Cheetah - Professional Septic Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Septic Cheetah - Professional Septic Services',
    description: 'Fast, reliable septic services. Licensed professionals, same-day service available.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

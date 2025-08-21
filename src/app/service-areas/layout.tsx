import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Areas | Septic Cheetah - Professional Septic Services',
  description: 'We provide professional septic services across multiple counties and cities. Find out if we service your area for septic pumping, cleaning, installation, and repairs.',
  keywords: 'septic service areas, septic pumping locations, septic installation areas, emergency septic services',
};

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

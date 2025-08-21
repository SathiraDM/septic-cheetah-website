import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Septic Cheetah - Local Family Business Serving Central Texas',
  description: 'Learn about Septic Cheetah, a family-owned septic service company serving Austin and Central Texas with fast, reliable, and professional septic services.',
  openGraph: {
    title: 'About Septic Cheetah - Family-Owned Septic Services',
    description: 'Local family business serving Austin & Central Texas with integrity and expertise',
    url: '/about'
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

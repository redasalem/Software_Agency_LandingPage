 import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Provider from "@/components/HOC/Provider";

const font = Rajdhani({
  weight:['300','400','500','600','700'],
  subsets:['latin'],
});

export const metadata: Metadata = {
  title: 'AI Software Solutions | Cutting-Edge Artificial Intelligence for Businesses',
  description:
    'Discover next-generation AI software solutions that drive innovation, efficiency, and growth. Our expert team delivers cutting-edge artificial intelligence services tailored to businesses worldwide.',
  keywords: [
    'AI Software',
    'Artificial Intelligence Solutions',
    'Business Automation',
    'Machine Learning',
    'AI Company',
    'AI Landing Page',
    'Next.js AI',
    'Tailwind AI',
    'TypeScript AI'
  ],
  openGraph: {
    title: 'AI Software Solutions | Cutting-Edge Artificial Intelligence for Businesses',
    description:
      'Unlock the power of AI with innovative solutions designed to transform your business. We deliver machine learning, automation, and custom AI tools.',
    url: 'https://your-ai-company.com',
    siteName: 'AI Software Solutions',
    images: [
      {
        url: 'https://your-ai-company.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Software Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body
        className={`${font.className} antialiased scroll-smooth`}
      >
        <Provider>

        <ResponsiveNav/>
        {children}

        </Provider>
      </body>
    </html>
  );
}

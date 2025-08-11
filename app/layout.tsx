 import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Rajdhani({
  weight:['300','400','500','600','700'],
  subsets:['latin'],
});

 export const metadata: Metadata = {
      title: 'Software Landing Page',
      description: 'This page titled Software Landing Page appears to be a homepage for a software-related site. It likely serves as the main entry point, introducing users to the software product or service. The minimal content—just Home and the title—suggests with a very simple layout'
    };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}

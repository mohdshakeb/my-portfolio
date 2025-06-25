import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Load Outfit font for logo
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// Load Satoshi font as default typography
const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Mohammad Shakeb | Product Designer",
  description: "Portfolio of Mohammad Shakeb, Product Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${outfit.variable} ${satoshi.variable} antialiased font-satoshi bg-white text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}

// app/layout.tsx
import "./globals.css";
import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "BedWellIn",
  description: "This is the Bedwellin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="antialiased font-sans bg-white text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

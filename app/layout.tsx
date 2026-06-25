import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "𝐷𝑒𝑏𝑜𝑗𝑒𝑒𝑡 𝐵𝑎𝑛𝑒𝑟𝑗𝑒𝑒 | 𝐺𝑟𝑎𝑝ℎ𝑖𝑐 𝐷𝑒𝑠𝑖𝑔𝑛𝑒𝑟",
  description: "𝑂𝑓𝑓𝑖𝑐𝑖𝑎𝑙 𝑝𝑜𝑟𝑡𝑓𝑜𝑙𝑖𝑜 𝑜𝑓 𝐷𝑒𝑏𝑜𝑗𝑒𝑒𝑡 𝐵𝑎𝑛𝑒𝑟𝑗𝑒𝑒 𝑠ℎ𝑜𝑤𝑐𝑎𝑠𝑖𝑛𝑔 𝑏𝑟𝑎𝑛𝑑𝑖𝑛𝑔, 𝑙𝑜𝑔𝑜 𝑑𝑒𝑠𝑖𝑔𝑛, 𝑝𝑜𝑠𝑡𝑒𝑟𝑠, 𝑡ℎ𝑢𝑚𝑏𝑛𝑎𝑖𝑙𝑠, 𝐼𝐷 𝑐𝑎𝑟𝑑𝑠, 𝑎𝑛𝑑 𝑐𝑟𝑒𝑎𝑡𝑖𝑣𝑒 𝑣𝑖𝑠𝑢𝑎𝑙 𝑑𝑒𝑠𝑖𝑔𝑛 𝑝𝑟𝑜𝑗𝑒𝑐𝑡𝑠.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mortgage Calculator",
  description: `Calculate your monthly mortgage payments with our easy-to-use calculator.
  Input your loan amount, interest rate, and loan term to get accurate payment estimates. 
  Plan your finances and make informed decisions about your mortgage with our reliable tool.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

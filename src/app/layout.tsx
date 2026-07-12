import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Kaos Muay Thai & Self Defense | Helena's Newest Martial Arts Academy",
  description:
    "Train for fitness, learn real self-defense, and build confidence at Kaos Muay Thai. Founding memberships now available in Helena, MT. Limited to 50 spots.",
  openGraph: {
    title: "Kaos Muay Thai & Self Defense | Helena's Newest Martial Arts Academy",
    description:
      "Train for fitness, learn real self-defense, and build confidence. Founding memberships now available — limited to 50 spots.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Script src="https://app.gymdesk.com/js/widgets.js" />
      </body>
    </html>
  );
}

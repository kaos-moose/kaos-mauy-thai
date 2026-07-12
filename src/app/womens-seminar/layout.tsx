import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Women's Intro to Self-Defense Seminar | KAOSMT Helena, MT",
  description:
    "A beginner-friendly 3-hour Self Defense seminar for women. Learn situational awareness, basic combatives, and how to use the adrenal response. July 11 · 9 AM–Noon · $100.",
  openGraph: {
    title: "Women's Intro to Self-Defense Seminar | KAOSMT",
    description:
      "Learn practical awareness, mindset, and instinctive responses in a beginner-friendly 3-hour seminar. July 11 in Helena, MT.",
    type: "website",
  },
};

export default function WomensSeminarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

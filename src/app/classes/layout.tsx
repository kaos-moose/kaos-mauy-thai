import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Classes | KAOSMT — Helena, MT",
  description:
    "Explore KAOSMT's coach-led programs: Muay Thai, the KAOS Self-Defense System, and Muay Thai Strength & Conditioning. No experience required. Helena, Montana.",
  openGraph: {
    title: "Classes | KAOSMT — Helena, MT",
    description:
      "Coach-led Muay Thai, self-defense, and conditioning programs in Helena, MT. No experience required.",
    type: "website",
  },
};

export default function ClassesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

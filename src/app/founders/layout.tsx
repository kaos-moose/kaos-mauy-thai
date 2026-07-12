import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "KAOSMT Founders Membership | Helena, MT",
  description:
    "Become a KAOSMT founding member — early access, beginner-friendly classes, Muay Thai and Self Defense training. Limited spots available in Helena, MT.",
  openGraph: {
    title: "KAOSMT Founders Membership | Helena, MT",
    description:
      "Early access, founding member recognition, and priority updates. Limited spots available before opening.",
    type: "website",
  },
};

export default function FoundersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import FoundersHeader from "@/components/layout/FoundersHeader";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "KAOSMT Founders Program | Be One of the First 50 | Helena, MT",
  description:
    "Join the KAOSMT Founders Program — locked-in pricing for life, exclusive perks, and permanent Founder status. Only 50 spots. First come, first served.",
  openGraph: {
    title: "KAOSMT Founders Program | Be One of the First 50",
    description:
      "Locked-in pricing, exclusive gear, priority class access, and permanent Founder status. Only 50 spots available in Helena, MT.",
    type: "website",
  },
};

export default function FoundersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FoundersHeader />
      {children}
      <Footer />
    </>
  );
}

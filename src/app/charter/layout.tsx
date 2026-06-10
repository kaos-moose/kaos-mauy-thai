import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "KAOSMT Charter Membership | Helena, MT",
  description:
    "Charter Membership is now open at KAOSMT — discounted pre-opening rates, preview class access, and early schedule placement. Limited to 25 members. Closes July 18th.",
  openGraph: {
    title: "KAOSMT Charter Membership | Helena, MT",
    description:
      "The final pre-opening opportunity. Discounted rates, preview classes, and early schedule access. Limited to 25 members before July 18th.",
    type: "website",
  },
};

export default function CharterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import TrustSection from "@/components/sections/TrustSection";
import FoundingMemberSection from "@/components/sections/FoundingMemberSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSolutionSection />
      <div id="programs">
        <ProgramsSection />
      </div>
      <div id="about">
        <TrustSection />
      </div>
      <FoundingMemberSection />
      <ContactFormSection />
      <div id="faq">
        <FAQSection />
      </div>
      <FinalCTASection />
    </main>
  );
}

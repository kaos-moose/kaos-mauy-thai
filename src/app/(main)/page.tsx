import HeroSection from "@/components/sections/HeroSection";
import WomensSeminarBanner from "@/components/sections/WomensSeminarBanner";
import WhySection from "@/components/sections/WhySection";
import ProgramsSection from "@/components/sections/ProgramsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WomensSeminarBanner />
      <WhySection />
      <div id="programs">
        <ProgramsSection />
      </div>
    </main>
  );
}

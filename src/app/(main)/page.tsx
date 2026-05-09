import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import ProgramsSection from "@/components/sections/ProgramsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhySection />
      <div id="programs">
        <ProgramsSection />
      </div>
    </main>
  );
}

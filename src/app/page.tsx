import { HeroUnifiedStable } from "@/components/industrial/HeroUnifiedStable";
import { SectionContact } from "@/components/industrial/SectionContact";
import { SectionLeistungen } from "@/components/industrial/SectionLeistungen";
import { SectionTrust } from "@/components/industrial/SectionTrust";
import { SectionWarum } from "@/components/industrial/SectionWarum";

export default function HomePage() {
  return (
    <>
      <HeroUnifiedStable />
      <SectionLeistungen />
      <section id="capabilities" className="w-full border-t border-white/10">
        <SectionWarum />
        <SectionTrust />
      </section>
      <SectionContact />
    </>
  );
}

import Image from "next/image";
import { FaqAccordion } from "@/components/industrial/FaqAccordion";
import { faqCompact, faqSection, testimonials, trustSection } from "@/content/site";
import { marcatisPhotos } from "@/content/marcatisPhotos";
import { sectionInset } from "@/components/industrial/sectionInset";

export function SectionTrust() {
  const { micro, detailCut } = marcatisPhotos.trustPrecisionPair;

  return (
    <div className="w-full border-t border-white/10 bg-black">
      <div className={`${sectionInset} min-h-[88svh] py-28 md:min-h-[90svh] md:py-36 lg:py-44`}>
        <p className="font-[family-name:var(--font-mono)] text-[10px] font-semibold tracking-[0.35em] text-m-red">
          [01] — REFERENZEN & PRAXIS
        </p>
        <h2 className="mt-8 max-w-6xl font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-tight text-white md:mt-10 md:text-4xl lg:text-[2.75rem]">
          {trustSection.headline}
        </h2>
        <p className="mt-10 max-w-4xl text-base leading-relaxed text-zinc-500 md:mt-12 md:text-lg md:leading-relaxed">
          {trustSection.intro}
        </p>

        <div className="mt-14 grid gap-px bg-white/10 md:mt-16 md:grid-cols-2 lg:mt-20">
          <div className="relative aspect-[4/3] min-h-[220px] bg-zinc-900 md:min-h-[340px]">
            <Image
              src={micro.src}
              alt={micro.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] min-h-[220px] bg-zinc-900 md:min-h-[340px]">
            <Image
              src={detailCut.src}
              alt={detailCut.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-20 md:mt-24 md:grid-cols-2 md:gap-14 md:pt-24 lg:mt-28 lg:pt-28">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-l border-m-red/40 pl-8 md:pl-10">
              <blockquote className="text-base leading-relaxed text-zinc-300 md:text-lg md:leading-relaxed">
                „{t.quote}“
              </blockquote>
              <figcaption className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600 md:mt-10">
                {t.name} — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="relative left-1/2 mt-24 w-screen -translate-x-1/2 border-t border-zinc-200 bg-paper text-zinc-900 md:mt-28 lg:mt-32">
          <div className={`${sectionInset} py-14 md:py-16 lg:py-20`}>
            <p className="font-[family-name:var(--font-mono)] text-[10px] font-semibold tracking-[0.3em] text-m-red">
              {faqSection.kicker}
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight text-zinc-900 md:mt-5 md:text-3xl">
              {faqSection.title}
            </h3>
            <div className="mt-10 md:mt-12">
              <FaqAccordion items={faqCompact} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

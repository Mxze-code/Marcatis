import Image from "next/image";
import { homeStats, whyMarcatis } from "@/content/site";
import { marcatisPhotos } from "@/content/marcatisPhotos";
import { sectionInset } from "@/components/industrial/sectionInset";

/** Capabilities — KPI, großes Schneid-Motiv, Gravur-Detailpaar, Säulen. */
export function SectionWarum() {
  const wide = marcatisPhotos.capabilitiesCuttingWide;
  const { relief, logo } = marcatisPhotos.capabilitiesReliefAndLogo;

  return (
    <div className="w-full">
      <div className="w-full bg-m-red">
        <div
          className={`${sectionInset} flex min-h-[88svh] flex-col justify-center py-24 md:min-h-[90svh] md:py-32 lg:py-40`}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] font-semibold tracking-[0.35em] text-black/70">
            CAPABILITIES
          </p>
          <h2 className="mt-8 max-w-6xl font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase leading-[1.05] tracking-tight text-black md:mt-10">
            Messbare Substanz.
          </h2>

          <div className="mt-20 grid gap-14 border-t border-black/20 pt-16 md:mt-24 md:grid-cols-3 md:gap-12 md:pt-20 lg:mt-28 lg:pt-24">
            {homeStats.map((s) => (
              <div key={s.title} className="border-l border-black/30 pl-8 md:pl-10">
                <p className="font-[family-name:var(--font-display)] text-[clamp(3.25rem,11vw,6.5rem)] font-bold leading-none tracking-tight text-black">
                  {s.value}
                </p>
                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-black/80">{s.title}</p>
                <p className="mt-5 text-sm leading-relaxed text-black/70 md:mt-6 md:text-base md:leading-relaxed">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-[min(58svh,760px)] w-full bg-black">
        <Image
          src={wide.src}
          alt={wide.alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black"
          aria-hidden
        />
      </div>

      <div className="w-full bg-black">
        <div
          className={`${sectionInset} flex min-h-[90svh] flex-col justify-center py-28 md:py-36 lg:min-h-[92svh] lg:py-44`}
        >
          <h2 className="max-w-6xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,4vw,3.25rem)] font-bold uppercase leading-tight tracking-tight text-white">
            {whyMarcatis.headline}
          </h2>
          <p className="mt-10 max-w-4xl text-base leading-relaxed text-zinc-500 md:mt-12 md:text-lg md:leading-relaxed">
            {whyMarcatis.intro}
          </p>

          <div className="mt-14 grid gap-px bg-white/10 md:mt-16 md:grid-cols-2 lg:mt-20">
            <div className="relative aspect-[4/3] min-h-[240px] bg-zinc-900 md:min-h-[360px]">
              <Image
                src={relief.src}
                alt={relief.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] min-h-[240px] bg-zinc-900 md:min-h-[360px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-px bg-white/10 md:mt-20 md:grid-cols-2 lg:mt-24">
            {whyMarcatis.pillars.map((p) => (
              <div key={p.title} className="bg-black p-10 md:p-14 lg:p-16">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-tight text-white md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-zinc-500 md:mt-8 md:text-base md:leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

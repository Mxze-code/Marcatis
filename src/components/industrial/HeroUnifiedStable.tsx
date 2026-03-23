import Image from "next/image";
import { marcatisPhotos } from "@/content/marcatisPhotos";

/**
 * Dominantes Hero: echtes Marcatis-Laserbild (Photos/image-laser.png), premium & kontrastreich.
 */
export function HeroUnifiedStable() {
  const { src, alt } = marcatisPhotos.hero;

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={92}
        />
        {/* Sehr leicht: Schärfe beibehalten, nur minimal Lesbarkeit unten */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full flex-col justify-end px-5 pb-14 sm:px-8 md:px-10 md:pb-20 lg:px-14 lg:pb-24 xl:px-16 2xl:px-24">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-5 lg:col-span-5 xl:max-w-[42rem]">
            <h1 className="font-[family-name:var(--font-display)] text-[2.6rem] leading-[0.84] tracking-[-0.075em] text-white drop-shadow-[0_22px_85px_rgba(0,0,0,0.85)] sm:text-[3.5rem] md:text-[5.75rem] lg:text-[7.9rem] xl:text-[9.2rem]">
              PRÄZISION,
              <br />
              <span className="text-white/95">
                <span className="block whitespace-nowrap">DIE SICHTBAR</span>
                <span className="block whitespace-nowrap">BLEIBT.</span>
              </span>
            </h1>
          </div>

          <div className="hidden md:block md:col-span-7 lg:col-span-7" />
        </div>
      </div>
    </section>
  );
}

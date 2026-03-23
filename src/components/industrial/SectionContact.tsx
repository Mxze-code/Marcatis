import Image from "next/image";
import Link from "next/link";
import { contactTeaser, company } from "@/content/site";
import { marcatisPhotos } from "@/content/marcatisPhotos";
import { sectionInset } from "@/components/industrial/sectionInset";

export function SectionContact() {
  const ambient = marcatisPhotos.contactAmbient;

  return (
    <section id="contact" className="relative w-full overflow-hidden border-t border-white/10 bg-zinc-950">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(48%,520px)] md:block" aria-hidden>
        <Image
          src={ambient.src}
          alt=""
          fill
          className="object-cover object-center opacity-[0.35]"
          sizes="520px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40" />
      </div>

      <div
        className={`${sectionInset} relative z-10 flex min-h-[85svh] flex-col justify-center gap-16 py-28 md:min-h-[88svh] md:flex-row md:items-center md:justify-between md:gap-12 md:py-36 lg:py-44`}
      >
        <div className="max-w-4xl">
          <p className="font-[family-name:var(--font-mono)] text-[10px] font-semibold tracking-[0.35em] text-m-red">
            [KONTAKT]
          </p>
          <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-white md:mt-10">
            {contactTeaser.headline}
          </h2>
          <p className="mt-10 text-base leading-relaxed text-zinc-500 md:mt-12 md:text-lg md:leading-relaxed">
            {contactTeaser.body}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-6 md:items-end">
          <Link href="/kontakt" className="btn-industrial">
            Projekt anfragen
          </Link>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
            {company.phone} · {company.email}
          </p>
        </div>
      </div>
    </section>
  );
}

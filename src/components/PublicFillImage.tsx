/**
 * Native `<img>` für Dateien unter `public/` (Pfade aus `marcatisPhotos`).
 * `next/image` kann `src` in Edge-Cases (Static Export + basePath, Hydration) anders ausgeben;
 * hier bleibt die URL 1:1 wie im HTML-Export.
 */
/* eslint-disable @next/next/no-img-element -- bewusst kein next/image für öffentliche Asset-Strings */

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function PublicFillImage({ src, alt, className, sizes, priority }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      sizes={sizes}
      decoding={priority ? "sync" : "async"}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      style={{
        // "next/image fill" compatibility:
        // - `inset: 0` instead of individual sides
        // - explicit block rendering
        // - default `object-fit: cover` (all current assets use object-cover)
        position: "absolute",
        inset: 0,
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
}

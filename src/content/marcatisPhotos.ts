/**
 * Offizielle Marcatis-Fotos aus /public/photos/marcatis (Quelle: Projektordner Photos).
 * Zuordnung nach Verfahren — nicht gegen Mischpult austauschen.
 */
const p = (name: string) => `/photos/marcatis/${name}`;

export const marcatisPhotos = {
  hero: {
    src: p("image-laser.png"),
    alt: "Laserbearbeitung bei Marcatis — industrieller Schneidprozess mit hohem Kontrast",
  },
  procedures: {
    laserbeschriftung: {
      src: p("Laserbeschriftung-marcatis-1.jpg"),
      alt: "Laserbeschriftung — industrielle Kennzeichnung auf Metall",
    },
    laserfeinschneiden: {
      src: p("Laserfeinschneiden-marcatis-1.jpg"),
      alt: "Laserfeinschneiden — filigrane Kontur und Kantenqualität",
    },
    gravur: {
      src: p("Lasergravur-marcatis-1.jpg"),
      alt: "Lasergravur — Gravur und Strukturierung auf Werkstückoberfläche",
    },
  },
  capabilitiesCuttingWide: {
    src: p("Laserfeinschneiden-marcatis-4.jpg"),
    alt: "Laserfeinschneiden — Wabengeometrie und präzise Schnittführung",
  },
  capabilitiesReliefAndLogo: {
    relief: {
      src: p("Lasergravur-marcatis-3.jpg"),
      alt: "3D-Lasergravur — reliefartige Oberflächenstruktur",
    },
    logo: {
      src: p("Lasergravur-marcatis-4.jpg"),
      alt: "Lasergravur — präzise Logo- und Symbolgravur auf Metall",
    },
  },
  trustPrecisionPair: {
    micro: {
      src: p("Lasergravur-marcatis-5.jpg"),
      alt: "Feinstgravur — Mikrostruktur und höchste Detailauflösung",
    },
    detailCut: {
      src: p("Laserfeinschneiden-marcatis-5.jpg"),
      alt: "Laserfeinschneiden — Detailaufnahme filigrane Geometrie",
    },
  },
  contactAmbient: {
    src: p("Lasergravur-marcatis-2.jpg"),
    alt: "Lasergravur auf zylindrischem Präzisionsteil",
  },
} as const;

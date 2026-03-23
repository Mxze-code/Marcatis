/** Inhalte aus dem Website-Inventar — strukturiert für die Marcatis Industrial Homepage. */

export const company = {
  legalName: "Marcatis Laserbearbeitung GmbH",
  brand: "Marcatis",
  tagline: "Leidenschaft, die sichtbar bleibt.",
  street: "Zeppelinstraße 6",
  zip: "63741",
  city: "Aschaffenburg",
  country: "Deutschland",
  phone: "+49 6021 438 235 6",
  phoneTel: "+4960214382356",
  mobile: "+49 160 977 332 70",
  mobileTel: "+4916097733270",
  email: "info@marcatis.de",
  managingDirector: "Thomas Kimmel",
  taxNumber: "204/132/50855",
  vatId: "DE 314 552 175",
  registerCourt: "Amtsgericht Aschaffenburg",
  registerNumber: "HRB 14376",
} as const;

/** Top-Navigation — Anker entsprechen Section-IDs auf der Startseite. */
export const nav = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#contact", label: "Kontakt" },
] as const;

/** KPI-Block — Zahlen aus Kernbotschaften / FAQ (keine erfundenen Metriken). */
export const homeStats = [
  {
    value: "10+",
    title: "JAHRE ERFAHRUNG",
    detail: "Leidenschaft für Lasertechnik — moderne Technik und bewährte Prozesse.",
  },
  {
    value: "3",
    title: "KERNVERFAHREN",
    detail: "Beschriftung · Feinschneiden · 3D-Gravur — klar definiert und skalierbar.",
  },
  {
    value: "µm",
    title: "PRÄZISION",
    detail: "Laserfeinschneiden im Mikrometerbereich — gratfreie Kanten, enge Toleranzen.",
  },
] as const;

export const homeHero = {
  kicker: "Industrielle Laserbearbeitung",
  location: "Aschaffenburg",
  subline:
    "Präzision für Metall, Kunststoff und Spezialwerkstoffe — mit moderner Technik und über zehn Jahren Erfahrung.",
  ctaSecondary: "Profil & Kontakt",
} as const;

export const coreServices = [
  {
    id: "laserbeschriftung",
    name: "Laserbeschriftung",
    lead: "Dauerhaft, präzise, rückverfolgbar.",
    body: "Kennzeichnung auf Metallen und Kunststoffen — von Serienfertigung bis Medizintechnik.",
    points: ["Typenschilder · Codes · UDI", "Lackabtrag & Schichten", "Reproduzierbare Parameter"],
  },
  {
    id: "laserfeinschneiden",
    name: "Laserfeinschneiden",
    lead: "Gratfrei. Eng toleriert.",
    body: "Materialscho­nende Schnitte in dünnen Materialien — dort, wo Kanten und Mikrometer zählen.",
    points: ["Mikrometer-Toleranzen", "Federn · Dichtungen · Mikroteile", "Kleinserien mit kurzer Rüstzeit"],
  },
  {
    id: "gravur",
    name: "3D-Lasergravur",
    lead: "Tiefenführung auf komplexen Konturen.",
    body: "Gravuren auf gewölbten oder unregelmäßigen Oberflächen — Alternative zu Schleifen/Erodieren ohne Gefügeverlust.",
    points: ["Werkzeuge & Formeinsätze", "Mikrostrukturen", "Seriennummern auf Krümmungen"],
  },
] as const;

/** Kopfzeilen — Solutions-Section beginnt direkt mit den drei Verfahren. */
export const coreServicesSection = {
  kicker: "[00] — SOLUTIONS",
  title: "Drei Kernverfahren",
  subtitle:
    "Beschriftung, Feinschneiden und 3D-Gravur auf einen Blick — mit einem gemeinsamen Qualitätsmaßstab für Prototyp, Kleinserie und Integration.",
  pointsLabel: "MERKMALE & EINSATZ",
} as const;

export const whyMarcatis = {
  headline: "Capabilities, die in Serie tragen",
  intro:
    "Weniger operative Last, mehr Prozesssicherheit: Wir übersetzen Anforderungen in wiederholbare Laserprozesse — von Muster bis Serie, mit klaren Schnittstellen.",
  pillars: [
    {
      title: "Präzision",
      text: "Mikrometer statt Bauchgefühl — messbare Ergebnisse für anspruchsvolle Geometrien und Kennzeichnung.",
    },
    {
      title: "Verlässlichkeit",
      text: "Termine, Qualität und Kommunikation — damit Ihre Linie und Ihre Kunden ruhig schlafen können.",
    },
    {
      title: "Industrielle Relevanz",
      text: "MES/ERP-Schnittstellen, Serienfertigung, Medizintechnik & Automobil — Erfahrung statt Experiment.",
    },
    {
      title: "Wirtschaftlichkeit",
      text: "ACSYS-Anlagen, stabile Prozesse, attraktive Konditionen — ohne versteckte Komplexität.",
    },
  ],
} as const;

export const trustSection = {
  headline: "Referenzen & Praxis",
  intro:
    "Langfristige Partnerschaften entstehen aus Klarheit, Qualität und belastbarer Kommunikation — über Material, Logistik und Betreuung hinweg.",
} as const;

export const testimonials = [
  {
    quote:
      "Lob für die lokale Partnerschaft, die Beschriftung eines iPads, faire Preise bei Lasergravur und die kompetente Beratung.",
    name: "Peter Kern",
    role: "Kreisleiter Rotkreuz Jugendarbeit",
  },
  {
    quote:
      "Mehrjährige Zusammenarbeit mit hoher Qualität, Liefertreue, Know-how und Flexibilität.",
    name: "Fritz Kiener",
    role: "Geschäftsführer, Beeftec Grillgeräte",
  },
  {
    quote:
      "Enge Zusammenarbeit, kurze Kommunikationswege, Transparenz — Qualität bei Material, Preis, Logistik, Kundenbetreuung und Reklamationen.",
    name: "Martin Lehr",
    role: "Fertigungsleitung, VaW GmbH",
  },
  {
    quote:
      "Vertrauen, Klarheit, Zuverlässigkeit, fachliche Qualität — mit klarer Weiterempfehlung.",
    name: "Alexander Klotz",
    role: "Inhaber, Orange Production",
  },
] as const;

export const contactTeaser = {
  headline: "Nächster Schritt",
  body: "Anforderungen senden — wir prüfen Machbarkeit, nennen Optionen und liefern ein verständliches Angebot. Von Prototyp bis Integration in Ihre Linie.",
} as const;

/** Vollständiges FAQ — inhaltlich an marcatis.de angelehnt. */
export const faqCompact = [
  {
    q: "Welche Materialien können mit Ihren Laserverfahren bearbeitet werden?",
    a: "Wir bearbeiten eine Vielzahl von Materialien — darunter Edelstahl, Aluminium, Messing, Kupfer, Kunststoffe (z. B. ABS, POM, PA), Keramik, Glas, Graphit und Verbundstoffe. Die Auswahl des passenden Lasertyps erfolgt je nach Anwendung und Materialeigenschaft.",
  },
  {
    q: "Wie tief kann mit einem Laser graviert werden?",
    a: "Bei der 3D-Lasergravur sind Gravurtiefen von bis zu mehreren Millimetern möglich — abhängig vom Material und der gewünschten Geometrie. Für Werkzeuggravuren oder Funktionsstrukturen setzen wir leistungsstarke Systeme mit hochpräziser Tiefensteuerung ein.",
  },
  {
    q: "Ist Laserbeschriftung dauerhaft und beständig?",
    a: "Ja. Unsere Laserbeschriftungen sind abriebfest, temperatur- und chemikalienbeständig. Sie eignen sich für industrielle Anwendungen mit hohen Anforderungen an Langlebigkeit, etwa im Maschinenbau, in der Medizintechnik oder der Automobilindustrie.",
  },
  {
    q: "Warum 3-D-Gravur und 3-D-Abtrag?",
    a: "Sie können damit Spannuten oder Elektroden wirtschaftlicher und technisch genauer herstellen — als Alternative zu Schleifen oder Erodieren, ohne Gefügeveränderungen.",
  },
  {
    q: "Welche Dateiformate benötigen Sie?",
    a: "Wir arbeiten mit den gängigen CAD-Formaten wie STEP, DXF, IGES, STL oder PDF. Für Gravuren oder Logos können auch Vektorformate wie AI, EPS oder SVG verwendet werden. Gerne unterstützen wir Sie bei der Datenaufbereitung.",
  },
  {
    q: "Wie genau ist das Laserfeinschneiden?",
    a: "Wir erreichen Schnittspalte und Toleranzen im Bereich von wenigen Mikrometern — je nach Material und Bauteildicke. Die Kanten sind gratfrei und müssen in der Regel nicht nachbearbeitet werden.",
  },
  {
    q: "Warum entlasten wir Sie und Ihr Unternehmen?",
    a: "Weil Sie keine Maschinen, Ressourcen und Mitarbeiter mehr vorhalten müssen.",
  },
  {
    q: "Wie läuft die Zusammenarbeit ab?",
    a: "Sie senden uns Ihre Anforderungen (CAD-Daten, Zeichnungen, Materialangaben), und wir prüfen die technische Machbarkeit. Nach Freigabe erhalten Sie ein individuelles Angebot. Wir fertigen nach Ihren Vorgaben — ob Prototyp, Kleinserie oder Serienproduktion.",
  },
  {
    q: "Können Ihre Laserprozesse in bestehende Produktionslinien integriert werden?",
    a: "Ja. Wir bieten sowohl eigenständige Fertigungsdienstleistungen als auch Beratung und Umsetzung für die Integration von Lasersystemen in automatisierte Fertigungslinien — inklusive Schnittstellen zu MES- und ERP-Systemen.",
  },
  {
    q: "Wie schnell sind Lieferzeiten?",
    a: "Für Standardmaterialien und etablierte Prozesse sind Muster und Kleinserien oft kurzfristig lieferbar. Bei Serienfertigung oder komplexen Anwendungen legen wir Wert auf eine zuverlässige und termintreue Planung — abgestimmt auf Ihren Bedarf.",
  },
] as const;

/** FAQ-Block — Überschriften (an klassischer Startseite). */
export const faqSection = {
  kicker: "PRAXIS",
  title: "FAQ",
} as const;

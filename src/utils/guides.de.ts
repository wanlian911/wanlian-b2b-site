// Leitfäden (Artikel) auf Deutsch (DE)
// Metadaten für die Listen /de/blog/ und Tag-Seiten /de/tags/.
// href verweist auf die tatsächlichen Seiten /de/guides/<slug>/.
import type { Guide } from './guides';

const readTime = (min: string) => `${min} Min. Lesezeit`;

export const guidesDe: Guide[] = [
  {
    title: "Leitfaden Rückflussverhinderung: Rückschlagventile für Trinkwasser",
    description: "Rückflussverhinderung in Trinkwasser- und Brandschutznetzen: Gefahrenklassen, HS41X-Doppelrückschlagventil, Dimensionierung, Druckverlust und Prüfung.",
    href: "/de/guides/backflow-prevention-guide/",
    tocPreview: ["1. Warum Rückflussverhinderung wichtig ist", "2. Gefahrenklassen und Gerätetypen", "3. Funktionsweise der HS41X-Doppelrückschlagventil-Armatur"],
    date: "2026-08",
    category: "Hydraulische Sicherheitstechnik",
    readTime: readTime("8"),
    tags: ["backflow-prevention", "industrial-valves", "fire-protection"]
  },
  {
    title: "Schlauchhaspeln & Hydrantenschränke: Auswahlleitfaden",
    description: "B2B-Leitfaden zur Auswahl von Schlauchhaspeln und Hydrantenschränken: Schlauchlänge, Strahlarten, Schaumlöschung, Werkstoffe und Normen für Einkäufer.",
    href: "/de/guides/fire-hose-reel-cabinet-guide/",
    tocPreview: ["Die Funktion von Schlauchhaspeln und Hydrantenschränken", "Schlauchhaspel oder Hydrantenschrank: Definitionen", "Schlauchlänge, Durchmesser und Druck"],
    date: "2026-08",
    category: "Brandschutz",
    readTime: readTime("7"),
    tags: ["fire-hose-reel", "fire-protection"]
  },
  {
    title: "Löschmonitor auswählen: Manuell vs. automatisch (ZDMS)",
    description: "Leitfaden zur Auswahl von Löschmonitoren: manuelle PS- und automatische ZDMS-Kanonen im Vergleich von Reichweite, Volumenstrom, Erkennung und Reaktionszeit.",
    href: "/de/guides/fire-water-monitor-selection-guide/",
    tocPreview: ["1. Manuelle Löschmonitore (PS-Serie): Bedienersteuerung", "2. Automatische Löschmonitore (ZDMS): Autonome Reaktion", "3. Direktvergleich"],
    date: "2026",
    category: "Brandschutz",
    readTime: readTime("6"),
    tags: ["fire-water-cannon", "fire-protection"]
  },
  {
    title: "Sprinklerventile: Nass-, Sprühflut- und Pre-Action-Systeme",
    description: "Leitfaden zu Sprinklerventilen: ZSFZ-Nassalarm, ZSFM-Sprühflut, ZSFY-Pre-Action und ZSJZ-Strömungswächter – Funktion, Auswahl und Anfrage.",
    href: "/de/guides/fire-sprinkler-system-valves-guide/",
    tocPreview: ["1. Nassanlagen: das Nassalarmventil ZSFZ", "2. Sprühflutanlagen: das Sprühflutventil ZSFM", "3. Vorgesteuerte Anlagen: das Doppeltrigger-Ventil ZSFY"],
    date: "2026",
    category: "Brandschutz",
    readTime: readTime("7"),
    tags: ["sprinkler-systems", "fire-protection"]
  },
  {
    title: "B2B-Armaturenbeschaffung: Brandschutzhersteller prüfen",
    description: "B2B-Checkliste für die Beschaffung von Armaturen: 8-Punkte-Prüfung mit Zertifikaten, Prüfberichten, Mustern, Werksaudit und Warnsignalen für China.",
    href: "/de/guides/b2b-valve-sourcing-checklist/",
    tocPreview: ["8-Punkte-Checkliste zur Verifizierung", "Zusammenfassung der Warnsignale", "So fordern Sie ein verifiziertes Angebot an"],
    date: "2026",
    category: "Beschaffung",
    readTime: readTime("6"),
    tags: ["procurement", "certification", "industrial-valves"]
  },
  {
    title: "UL-gelistete Brandschutzventile auswählen | Leitfaden 2026",
    description: "Erfahren Sie, wie Sie UL-gelistete Brandschutzventile auswählen: Ventiltypen, UL vs. FM, Spezifikationen, Zertifikatsprüfung und Beschaffungscheckliste.",
    href: "/de/guides/how-to-choose-ul-listed-fire-valves/",
    tocPreview: ["1. Was die UL-Listung für Brandschutzventile bedeutet", "2. Brandschutzventiltypen für die konkrete Spezifikation", "3. Wichtige Vergleichsspezifikationen"],
    date: "2026",
    category: "Brandschutz",
    readTime: readTime("7"),
    tags: ["certification", "fire-protection", "industrial-valves"]
  },
  {
    title: "Löschmonitor kaufen: fest, fernbedient oder intelligent?",
    description: "B2B-Leitfaden zur Auswahl von Löschmonitoren: Bauart, Fernsteuerung, Durchfluss, Reichweite, Schaumeignung, Integration und Beschaffungs-Checkliste.",
    href: "/de/guides/fire-water-cannon-buying-guide/",
    tocPreview: ["1. Benötigen Sie tatsächlich einen Löschmonitor?", "2. Fest, fernsteuerbar oder automatisch schwenkend?", "3. Durchfluss und Reichweite auslegen"],
    date: "2026",
    category: "Brandschutz",
    readTime: readTime("6"),
    tags: ["fire-water-cannon", "fire-protection"]
  },
  {
    title: "Sprinkleranlagen: Nass-, Trocken- oder Pre-Action-System?",
    description: "Vergleich von Nass-, Trocken- und Pre-Action-Sprinkleranlagen: Sprinklerköpfe, Komponenten, Normen und B2B-Beschaffungscheckliste für Projekte.",
    href: "/de/guides/fire-sprinkler-system-wet-dry-preaction/",
    tocPreview: ["1. Die drei Systemtypen im Vergleich", "2. Sprinklerköpfe auswählen", "3. Erforderliche BOM-Komponenten"],
    date: "2026",
    category: "Brandschutz",
    readTime: readTime("7"),
    tags: ["sprinkler-systems", "fire-protection"]
  },
  {
    title: "Feuerhydranten auswählen: Leitfaden für B2B-Projekte",
    description: "B2B-Leitfaden zur Auswahl von Feuerhydranten: Bauarten, DN/PN, Anschlüsse, Zertifizierungen und Werkscheckliste für kommunale und industrielle Projekte.",
    href: "/de/guides/how-to-choose-a-fire-hydrant/",
    tocPreview: ["1. Anforderungen an den Hydranten zuerst verstehen", "2. Typen von Feuerhydranten erklärt", "3. Wichtige Spezifikationen im Vergleich"],
    date: "2026",
    category: "Brandschutz",
    readTime: readTime("8"),
    tags: ["fire-hydrant", "fire-protection"]
  },
  {
    title: "Absperrschieber oder Absperrklappe im Brandschutz",
    description: "Absperrschieber oder Absperrklappe im Brandschutz: Durchfluss, Druckverlust und Kosten. Z41X, D71X und DN80 – Auswahlhilfe für B2B-Einkäufer.",
    href: "/de/guides/gate-valve-vs-butterfly-valve-fire-protection/",
    tocPreview: ["1. Funktionsweise: ein schneller Vergleich", "2. Direktvergleich: Absperrschieber vs. Absperrklappe", "3. Einsatzbereiche in Brandschutzsystemen"],
    date: "2026",
    category: "Armaturen",
    readTime: readTime("7"),
    tags: ["industrial-valves", "fire-protection"]
  },
  {
    title: "Steuerarmaturen für Sprinkler: OS&Y, Klappe & Rückschlagventil",
    description: "Steuerarmaturen für Sprinkleranlagen im Vergleich: OS&Y-Schieber, Signal-Absperrklappen und Rückschlagventile. B2B-Spezifikation mit UL/FM-Listung.",
    href: "/de/guides/fire-sprinkler-control-valve-types/",
    tocPreview: ["1. Funktion von Steuerarmaturen für Sprinkleranlagen", "2. OS&Y-Absperrschieber: überwachte Hauptabsperrung", "3. Signal-Absperrklappen für die Abschnittssteuerung"],
    date: "2026-09",
    category: "Brandschutz",
    readTime: readTime("8"),
    tags: ["sprinkler-systems", "fire-protection"]
  },
  {
    title: "Faltenbalg-Absperrschieber: Leitfaden für Dampf & Thermalöl",
    description: "Leitfaden zu Faltenbalg-Absperrschiebern für Dampf und Thermalöl: Doppeldichtung, ANSI-Normen, Nennweiten und B2B-Spezifikationscheckliste für Einkäufer.",
    href: "/de/guides/bellows-seal-gate-valve-guide/",
    tocPreview: ["1. Was ist ein Faltenbalg-Absperrschieber?", "2. Funktionsweise der Doppeldichtung", "3. Einsatzbereiche von Faltenbalg-Armaturen"],
    date: "2026-09",
    category: "Armaturen",
    readTime: readTime("7"),
    tags: ["industrial-valves", "bellows-seal-gate-valve"]
  },
  {
    title: "Druckminderventil 500X: Leitfaden für Wasserversorgung",
    description: "Erfahren Sie, wie hydraulische Druckminderventile arbeiten und wann 500X, F745X oder 100X passen. B2B-Checkliste für Auswahl und Anfrage im Wassernetz.",
    href: "/de/guides/pressure-reducing-valve-guide/",
    tocPreview: ["1. Was ist ein hydraulisches Druckminderventil?", "2. Funktionsweise des selbsttätigen 500X-Druckminderventils", "3. Druckminderung vs. Niveauregelung vs. Schwimmerventil"],
    date: "2026-09",
    category: "Hydraulische Sicherheitstechnik",
    readTime: readTime("8"),
    tags: ["backflow-prevention", "industrial-valves"]
  },
  {
    title: "Rückschlagventile: Typen & Auswahl | Wanlian Fluid",
    description: "Rückschlagventile im Vergleich: Klappe, Gleitkugel HQ41X und Kugel HQ44X – Druckverlust, Wasserschlag, Einbaulage und B2B-Auswahl für Ihre Anfrage.",
    href: "/de/guides/check-valve-types-guide/",
    tocPreview: ["1. Was ist ein Rückschlagventil?", "2. Rückschlagventiltypen im Überblick", "3. Gleitkugel oder Rückschlagklappe"],
    date: "2026-09",
    category: "Armaturen",
    readTime: readTime("8"),
    tags: ["industrial-valves", "backflow-prevention"]
  },
  {
    title: "Feuerlöscher-Auswahl: ABC-Pulver für B2B und Export",
    description: "Leitfaden für B2B-Einkäufer zur Auswahl tragbarer Feuerlöscher: ABC-Pulver, Brandklassen, ISO 7165, Größen, OEM und sichere Exportverpackung.",
    href: "/de/guides/fire-extinguisher-selection-guide/",
    tocPreview: ["1. Warum Feuerlöscher die Beschaffung im Brandschutz anführen", "2. Brandklassen und Löschmittel", "3. ABC-Pulverspezifikationen erklärt"],
    date: "2026-09",
    category: "Brandschutz",
    readTime: readTime("8"),
    tags: ["fire-protection", "procurement"]
  },
  {
    title: "Feuerwehrschlauch kaufen: Größen, Kupplungen & Auswahl",
    description: "B2B-Leitfaden für Flachrollschläuche: Größen 19–400 mm, PVC-Gummierung, Gewebemantel, Storz- und 65-mm-Kupplungen, Strahlrohre und OEM-Lieferung.",
    href: "/de/guides/fire-hose-buying-guide/",
    tocPreview: ["1. Flachrollschlauch oder Schlauchhaspel?", "2. Schlauchaufbau: Gewebemantel, Auskleidung und Kantenabdichtung", "3. Auslegung: Durchmesser, Länge und Anwendungen"],
    date: "2026-09",
    category: "Brandschutz",
    readTime: readTime("8"),
    tags: ["fire-protection", "procurement"]
  },
  {
    title: "Wanlian Fluid vs American AVK: Brandschutz-Lieferant?",
    description: "Wanlian Fluid und American AVK im Vergleich: Produktlinien, Hydranten, Qualität, Kosten und Lieferzeit für Ihre Beschaffung 2026. Jetzt Anbieter wählen.",
    href: "/de/guides/wanlian-fluid-vs-american-avk/",
    tocPreview: ["1. American AVK: Was das Unternehmen tatsächlich ist", "2. Wanlian Fluid: Was das Unternehmen tatsächlich ist", "3. Wie unterscheiden sich die Produktlinien?"],
    date: "2026-09",
    category: "Beschaffung",
    readTime: readTime("9"),
    tags: ["procurement", "fire-hydrant", "industrial-valves"]
  },
  {
    title: "Chinesische Ventil- und Brandschutzlieferanten prüfen",
    description: "Prüfen Sie chinesische Anbieter für Armaturen und Brandschutzausrüstung: ISO-9001-Nachweise, normgerechte Prüfberichte, Drittinspektion und Fälschungswarnzeichen.",
    href: "/de/guides/how-to-verify-chinese-valve-supplier/",
    tocPreview: ["1. Prüfen Sie das Unternehmen, nicht die Broschüre", "2. Stimmen Sie das Produkt auf die Norm Ihrer Bestellung ab", "3. Verlangen Sie Stück- und Drittprüfungen"],
    date: "2026-09",
    category: "Beschaffung",
    readTime: readTime("7"),
    tags: ["procurement", "certification"]
  },
  {
    title: "Hydranten-, Schlauch- und Ventilnormen: AWWA, NFPA, EN, ISO",
    description: "B2B-Leitfaden zu Hydranten-, Feuerwehrschlauch- und Ventilnormen: AWWA C502, NFPA 1961, EN 14384, BS 750, EN 1074 und ISO 5208, für Einkäufer.",
    href: "/de/guides/fire-hydrant-valve-standards-guide/",
    tocPreview: ["1. Die fünf Normenfamilien, denen Sie tatsächlich begegnen", "2. Eine Norm mit einem Prüfbericht abgleichen", "3. Druckstufen und Druckklassen in der Praxis"],
    date: "2026-09",
    category: "Brandschutz",
    readTime: readTime("8"),
    tags: ["fire-protection", "procurement"]
  },
  {
    title: "Leitfaden: CE- & EN-12845-Konformität im Brandschutz",
    description: "CE- und EN-12845-Konformität für Brandschutzausrüstung: Saugwirbelverhinderer, Ventilprüfungen nach EN 12266-1, Storz-Kupplungen und Feuerlöscher.",
    href: "/de/guides/ce-en12845-fire-protection-compliance/",
    tocPreview: ["1. Warum europäische Konformität bei Brandschutzausrüstung zählt", "2. Grundlagen der CE-Kennzeichnung: modellbezogen, nie serienbezogen", "3. EN 12845 und die Pumpensaugseite der Löschwasserversorgung"],
    date: "2026-09",
    category: "Brandschutz",
    readTime: readTime("8"),
    tags: ["certification", "fire-protection"]
  },
  {
    title: "Sprinklerkopf-Auswahl: K-Faktor, Temperatur und Reaktion",
    description: "B2B-Leitfaden zur Auswahl von Sprinklerköpfen: K-Faktor, Durchfluss, Temperatur, Einbaulage, UL-Listung und NFPA 13. Technische Beratung anfordern.",
    href: "/de/guides/fire-sprinkler-head-selection-guide/",
    tocPreview: ["1. Zuerst die Anlagenart, dann den Sprinklerkopf festlegen", "2. K-Faktor und Durchfluss: Wasserversorgung abstimmen", "3. Temperaturklassen und Farbcode der Glasampullen"],
    date: "2026-09",
    category: "Brandschutz",
    readTime: readTime("8"),
    tags: ["sprinkler-systems", "fire-protection"]
  },
  {
    title: "Genutete Brandschutzventile: Nut- oder Flanschverbindung",
    description: "Genutete Brandschutzventile für Sprinkler-Hauptleitungen: Signal-Absperrklappen, OS&Y-Schieber, Edelstahl- und Magnetventile. Montage und B2B-Anfrage.",
    href: "/de/guides/grooved-fire-protection-valves-guide/",
    tocPreview: ["1. Was ist ein genutetes Ventil?", "2. Genutet, geflanscht oder mit Gewinde", "3. Die genutete Ventilfamilie für Brandschutz-Hauptleitungen"],
    date: "2026-09",
    category: "Brandschutz",
    readTime: readTime("8"),
    tags: ["fire-protection", "industrial-valves"]
  },
  {
    title: "Frostschutz- und Anfahrschutz-Hydranten: Einkaufsleitfaden",
    description: "Frostschutz-Trockenrohrhydranten verhindern Einfrieren, Anfahrschutz-Hydranten schließen bei Kollisionen; IoT verbessert die Überwachung. B2B-Checkliste.",
    href: "/de/guides/antifreeze-anti-collision-fire-hydrant-guide/",
    tocPreview: ["1. Warum Hydranten bei Kälte versagen", "2. Funktionsweise von Frostschutz-Trockenrohrhydranten", "3. Wie Anfahrschutz-Hydranten schließen"],
    date: "2026-09",
    category: "Brandschutz",
    readTime: readTime("8"),
    tags: ["fire-hydrant", "fire-protection"]
  },
  {
    title: "Feuerwehr-Einspeisung: Doppelstutzen & Kupplungen",
    description: "Leitfaden zur Feuerwehr-Einspeisung: zwei DN65-Eingänge, DN100-Ausgang, SQS65/KWS65- und Storz-Kupplungen, Regelventil und B2B-Checkliste für B2B-Anfragen.",
    href: "/de/guides/fire-department-connection-siamese-guide/",
    tocPreview: ["1. Was ist eine Feuerwehr-Einspeisung?", "2. Zwei Eingänge, ein Ausgang", "3. Eingangskupplungen und Adapter"],
    date: "2026-09",
    category: "Brandschutz",
    readTime: readTime("8"),
    tags: ["fire-protection", "fire-hydrant"]
  },
  {
    title: "Kommunale Wasser- und Brandschutzinfrastruktur in Lateinamerika",
    description: "Hydranten, Absperrschieber, Feuerwehrschläuche und Rückflussverhinderer für kommunale Netze in Lateinamerika: B2B-Beschaffungsleitfaden 2026.",
    href: "/de/guides/municipal-water-fire-infrastructure-latinamerica/",
    tocPreview: ["1. Was ein kommunaler Wasser- und Brandschutzumfang tatsächlich umfasst", "2. Normen in der Region: Was die Ausschreibung verlangen kann", "3. Wie eine einzige Bestellung das Koordinationsrisiko senkt"],
    date: "2026-09",
    category: "Beschaffung",
    readTime: readTime("8"),
    tags: ["procurement", "fire-hydrant", "industrial-valves"]
  },
  {
    title: "Zertifizierungen für Brandschutzventile in Lateinamerika (2026)",
    description: "UL, FM, AWWA, NOM und NFPA: Zertifizierungsanforderungen für Brandschutzventile in Lateinamerika, Zertifikate prüfen und sicher beschaffen Sie.",
    href: "/de/guides/latinamerica-certification-requirements-fire-valves/",
    tocPreview: ["1. Zertifizierungslandschaft für Brandschutzprojekte in Lateinamerika", "2. Zertifizierung für Zertifizierung: Inhalt und Prüfung", "3. Nach Modell oder Werk: der entscheidende Unterschied"],
    date: "2026-09",
    category: "Beschaffung",
    readTime: readTime("8"),
    tags: ["certification", "procurement", "industrial-valves"]
  },
  {
    title: "Gefälschte Ventile erkennen: Leitfaden für Brandschutz (2026)",
    description: "B2B-Leitfaden für gefälschte Ventile, Zertifikate und Brandschutzausrüstung aus China: Prüfliste, Warnsignale und Lieferantenprüfung vor der Bestellung.",
    href: "/de/guides/detect-fake-valves-fire-equipment-counterfeits/",
    tocPreview: ["1. Warum sich Fälschungen auf diese Kategorie konzentrieren", "2. Die häufigsten Formen von Fälschungen", "3. Prüfliste zur Erkennung in sieben Schritten"],
    date: "2026-09",
    category: "Beschaffung",
    readTime: readTime("8"),
    tags: ["procurement", "certification"]
  },
  {
    title: "Wanlian Fluid vs AVK Latinoamérica: Anbieter vergleichen",
    description: "Wanlian Fluid und AVK Latinoamérica im Vergleich: Armaturen, Hydranten, Schläuche, Qualität, Kosten und Lieferzeiten für Lateinamerika. Jetzt anfragen.",
    href: "/de/guides/wanlian-fluid-vs-avk-latinamerica/",
    tocPreview: ["1. Was AVK Latinoamérica tatsächlich ist", "2. Was Wanlian Fluid tatsächlich ist", "3. Direktvergleich"],
    date: "2026-09",
    category: "Beschaffung",
    readTime: readTime("9"),
    tags: ["procurement", "fire-hydrant", "industrial-valves"]
  },
  {
    title: "Leitfaden: Digitales HLK-Strangregulierventil SP45F",
    description: "Leitfaden zum digitalen HLK-Strangregulierventil SP45F: Druckmesspunkte, digitale Arretierung, Auslegung, Montage und RFQ-Daten für den hydraulischen Abgleich.",
    href: "/de/guides/hvac-digital-balancing-valve-guide/",
    tocPreview: ["1. Was ist ein HLK-Strangregulierventil?", "2. Funktionsweise des digitalen Ventils SP45F", "3. Strangregulierventil oder Druckminderventil?"],
    date: "2026-09",
    category: "HLK & Industriearmaturen",
    readTime: readTime("8"),
    tags: ["industrial-valves", "backflow-prevention"]
  },
  {
    title: "Wanlian Fluid vs CA-FIRE: Brandschutzhersteller vergleichen",
    description: "Wanlian Fluid und CA-FIRE im Vergleich: FM-Sprinkler, Löschmonitore, Hydranten, Alarmventile und Komplettkits für Ihr Projekt. Jetzt Anbieter wählen.",
    href: "/de/guides/wanlian-fluid-vs-ca-fire/",
    tocPreview: ["1. Was CA-FIRE tatsächlich ist", "2. Was Wanlian Fluid tatsächlich ist", "3. Vergleich der Produktlinien"],
    date: "2026-09",
    category: "Beschaffung",
    readTime: readTime("9"),
    tags: ["procurement", "fire-protection"]
  },
  {
    title: "Wanlian Fluid vs Forede: Löschmonitore vergleichen",
    description: "Wanlian Fluid und Forede im Vergleich: Löschmonitore, Löschkanonen, Schaumsysteme, Hydranten und Armaturen für Ihre Beschaffung. Jetzt Anbieter wählen.",
    href: "/de/guides/wanlian-fluid-vs-forede/",
    tocPreview: ["1. Was Forede tatsächlich ist", "2. Was Wanlian Fluid tatsächlich ist", "3. Vergleich der Produktlinien"],
    date: "2026-09",
    category: "Beschaffung",
    readTime: readTime("9"),
    tags: ["procurement", "fire-protection", "fire-water-cannon"]
  },
  {
    title: "Wanlian Fluid vs Zhiyuan Fire: Brandschutz im Vergleich",
    description: "Wanlian Fluid und Zhiyuan Fire im Vergleich: Hydranten, Monitore und Armaturen gegenüber FM200/IG541-Gaslöschung für chinesische Brandschutzprojekte.",
    href: "/de/guides/wanlian-fluid-vs-zhiyuan/",
    tocPreview: ["1. Zhiyuan Fire: Das Unternehmen im Überblick", "2. Wanlian Fluid: Das Unternehmen im Überblick", "3. Gegenüberstellung"],
    date: "2026-09",
    category: "Beschaffung",
    readTime: readTime("9"),
    tags: ["procurement", "fire-protection"]
  },
  {
    title: "Risiken im grenzüberschreitenden Einkauf | Wanlian Fluid",
    description: "Kontrollieren Sie Risiken beim internationalen Einkauf von Armaturen und Brandschutzausrüstung: 8 Risikofamilien, Prüfungen, Zahlungsmodelle und Warnsignale.",
    href: "/de/guides/cross-border-procurement-risk-whitepaper/",
    tocPreview: ["1. Warum grenzüberschreitender Einkauf scheitert: der Risikorahmen", "2. Die acht Risikofamilien", "3. Risiko der Gegenpartei und Authentizität"],
    date: "2026-09",
    category: "Whitepaper",
    readTime: readTime("12"),
    tags: ["procurement", "certification"]
  },
  {
    title: "BOM für Sprinkleranlagen: Beschaffungsleitfaden",
    description: "Vollständige BOM für gewerbliche Sprinkleranlagen: Alarmventile, OS&Y- und Signalventile, Einspeisung, Sprinklerköpfe und Strömungswächter – geprüft.",
    href: "/de/guides/commercial-building-sprinkler-system-bom-guide/",
    tocPreview: ["1. Warum das Sprinklerpaket als ein Gesamtumfang beschafft wird", "2. Die Alarmventilstation: Herzstück der Nassanlage", "3. Überwachte Absperrung: OS&Y- und Signal-Absperrklappen"],
    date: "2026-09",
    category: "Brandschutz",
    readTime: readTime("9"),
    tags: ["sprinkler-systems", "fire-protection", "procurement"]
  },
  {
    title: "Kommunale Löschwasserleitung modernisieren: Ventile & Hydranten",
    description: "Leitfaden für Löschwasserleitungen: Absperrschieber, Hydranten, Feuerwehrschläuche und Kupplungen nach Norm – mit Angebot aus einer Hand und geprüfter Qualität.",
    href: "/de/guides/municipal-fire-water-main-upgrade-guide/",
    tocPreview: ["1. Was die Modernisierung einer Löschwasserleitung umfasst", "2. Absperrschieber: Z41X vs. teleskopische Z41X-T", "3. Hydrantenauswahl nach Klima und Straßenrisiko"],
    date: "2026-09",
    category: "Beschaffung",
    readTime: readTime("8"),
    tags: ["fire-hydrant", "industrial-valves", "procurement"]
  },
  {
    title: "Wanlian Fluid vs Tupy: Brandschutz und Armaturen im Vergleich",
    description: "Wanlian Fluid und Tupy im Vergleich: Duktilgussarmaturen, Hydranten, Alarmventile und Schläuche für Wasser- und Brandschutzprojekte in Lateinamerika.",
    href: "/de/guides/wanlian-fluid-vs-tupy/",
    tocPreview: ["1. Tupy: Das Unternehmen im Überblick", "2. Wanlian Fluid: Das Unternehmen im Überblick", "3. Vergleich der Produktlinien"],
    date: "2026-09",
    category: "Beschaffung",
    readTime: readTime("9"),
    tags: ["procurement", "industrial-valves"]
  },
  {
    title: "Wanlian Fluid vs Mueller: Hydranten und Armaturen im Vergleich",
    description: "Wanlian Fluid und Mueller im Vergleich: Hydranten, Absperrschieber, Normen, Zertifikate, Kosten und Lieferzeit für US-Spezifikationen und Exportprojekte.",
    href: "/de/guides/wanlian-fluid-vs-mueller/",
    tocPreview: ["1. Mueller: Das Unternehmen im Überblick", "2. Wanlian Fluid: Das Unternehmen im Überblick", "3. Vergleich der Produktlinien"],
    date: "2026-09",
    category: "Beschaffung",
    readTime: readTime("10"),
    tags: ["procurement", "fire-hydrant", "industrial-valves"]
  },
  {
    title: "Brandschutzmarkt 2026: Daten, Wachstum & Beschaffung",
    description: "Brandschutzmarkt 2026: sieben unabhängige Schätzungen, regionale Wachstumssignale und konkrete Hinweise für die Beschaffung von Ventilen und Hydranten.",
    href: "/de/guides/fire-protection-market-data-report-2026/",
    tocPreview: ["1. Wie groß ist der Markt – und warum weichen die Zahlen ab?", "2. Regionale Signale: Wo das Wachstum stattfindet", "3. Was die Daten für die Beschaffung bedeuten"],
    date: "2026-09",
    category: "Beschaffung",
    readTime: readTime("8"),
    tags: ["procurement", "fire-protection"]
  }
];

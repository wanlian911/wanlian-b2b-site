// Tags auf Deutsch (DE)
// key = slug (wie tags.ts); die Seiten /de/tags/[slug]/ verwenden diese Texte.
export interface TagDe {
  name: string;
  seoTitle: string;
  description: string;
}

export const tagsDe: Record<string, TagDe> = {
  "fire-protection": { name: "Brandschutz", seoTitle: "Brandschutzausrüstung und -systeme: Ventile, Hydranten und Sprinkler", description: "Das vollständige Brandschutzsortiment von Wanlian Fluid – Hydranten, Sprinklerventile, Feuerlösch-Schlauchhaspeln und -schränke, Feuerlöscher und Löschkanonen – mit B2B-Auswahlleitfäden und Zertifizierungshinweisen." },
  "fire-hydrant": { name: "Feuerhydranten", seoTitle: "Feuerhydranten: Bauarten, Normen und Auswahl", description: "Innenliegende SN65-Hydrantenventile, Überflurhydranten SS100, anprallsichere SSFT100 und intelligente IoT-Hydranten für kommunale und industrielle Brandschutznetze." },
  "sprinkler-systems": { name: "Sprinkleranlagen", seoTitle: "Sprinkleranlagen: Nass-, Sprühflut- und Pre-Action-Ventile", description: "Nassalarmventile, Sprühflutventile, vorgesteuerte Systeme, Sprinklerköpfe und Strömungswächter für den automatischen Brandschutz in Gewerbe- und Industriegebäuden." },
  "fire-water-cannon": { name: "Löschmonitore und Löschkanonen", seoTitle: "Löschmonitore und Löschkanonen: manuell oder automatisch schwenkend", description: "Manuelle PS-Löschmonitore und automatisch nachführende ZDMS-Löschkanonen für großflächige und industrielle Brandbekämpfung – mit Hinweisen zu Reichweite, Durchfluss und Steuerungsintegration." },
  "backflow-prevention": { name: "Rückflussverhinderung", seoTitle: "Rückflussverhinderer und hydraulische Regelventile", description: "HS41X-Rückflussverhinderer gegen Verunreinigung, Druckminderer, Niveauregel- und Magnetventile zum Schutz von Trinkwasser und hydraulischen Anlagen." },
  "industrial-valves": { name: "Industrieventile", seoTitle: "Industrieventile: Absperrschieber, Absperrklappen und Rückschlagventile", description: "Weichdichtende Absperrschieber, Zwischenflansch-Absperrklappen, Kugel-Rückschlagventile und Y-Schmutzfänger für Wasserversorgung, Abwasser, HLK und industrielle Prozessleitungen." },
  "fire-hose-reel": { name: "Feuerlösch-Schlauchhaspeln und Hydrantenschränke", seoTitle: "Feuerlösch-Schlauchhaspeln und Hydrantenschränke: Auswahlleitfaden", description: "JPS0.8-19-Schlauchhaspeln, PSG30-Schaumschränke, SN65-Hydrantenventile und Kupplungsadapter für innenliegende Löschstationen und Bereiche mit Brandgefährdung der Klasse B." },
  "certification": { name: "Zertifizierung und Konformität", seoTitle: "UL-, FM- und CE-Zertifizierung für Armaturen", description: "UL/FM/CE/LPCB-Zertifizierungen für Brandschutzventile und Hydranten verstehen, echte Zertifikate prüfen und Konformitätsanforderungen für Exportmärkte erfüllen." },
  "procurement": { name: "B2B-Beschaffung", seoTitle: "Checkliste zur B2B-Beschaffung von Armaturen und Brandschutzausrüstung", description: "Werksprüfung, Zertifikatskontrolle, Chargenprüfberichte, Musterregelungen und Warnsignale bei der Beschaffung von Armaturen und Brandschutzausrüstung aus China." },
  "bellows-seal-gate-valve": { name: "Faltenbalg-Absperrschieber", seoTitle: "Faltenbalg-Absperrschieber für Dampf und Thermalöl", description: "Metallische Faltenbalg-Absperrschieber mit Doppeldichtung für Dampf, Thermalöl und Heißwasser – geflanschte ANSI-Ausführungen für industrielle Leitungen mit kritischen Emissionen." }
};

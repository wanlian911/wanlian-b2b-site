// Guides (articles) en français
// Métadonnées pour les listes /fr/blog/ et les pages de tags /fr/tags/.
// href pointe vers les pages réelles /fr/guides/<slug>/.
export interface GuideFr {
  title: string;
  description: string;
  href: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

export const guidesFr: GuideFr[] = [
  {
    title: 'Prévention du Reflux dans les Réseaux de Protection Incendie & d’Eau Potable (Guide 2026)',
    description: 'Pourquoi les dispositifs anti-retour sont obligatoires dans les réseaux d’eau à double usage, comment fonctionnent les clapets anti-retour HS41X, le contrôle des connexions croisées et une checklist de sélection pour les acheteurs B2B.',
    href: '/fr/guides/backflow-prevention-guide/',
    date: '2026-08',
    category: 'Sécurité Hydraulique',
    readTime: '8 min de lecture',
    tags: ['backflow-prevention', 'industrial-valves', 'fire-protection']
  },
  {
    title: 'Guide de Sélection des Enrouleurs de Flexible & Armoires Anti-Incendie (2026)',
    description: 'Comment spécifier les enrouleurs de flexible intérieurs, les armoires murales et les unités à mousse : longueur et diamètre du flexible, modes de buse, matériaux d’armoire, choix du type de mousse et conformité pour les feux de classe A/B.',
    href: '/fr/guides/fire-hose-reel-cabinet-guide/',
    date: '2026-08',
    category: 'Protection Incendie',
    readTime: '7 min de lecture',
    tags: ['fire-hose-reel', 'fire-protection']
  },
  {
    title: 'Sélection de Moniteur d’Eau : Manuel vs Suivi Automatique (ZDMS) — Guide',
    description: 'Moniteurs manuels PS vs canons à suivi automatique ZDMS — portée, débit, détection, temps de réponse et comparaison de coût pour la protection industrielle et des grands espaces.',
    href: '/fr/guides/fire-water-monitor-selection-guide/',
    date: '2026',
    category: 'Protection Incendie',
    readTime: '6 min de lecture',
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Vannes pour Réseaux de Gicleurs : un Guide Complet (Mouillé, Déluge & Pré-action)',
    description: 'Comment fonctionnent les vannes d’alarme à mouillé ZSFZ, à déluge ZSFM, à pré-action ZSFY et les signalisateurs de débit ZSJZ — et quand spécifier chacune pour votre réseau de gicleurs.',
    href: '/fr/guides/fire-sprinkler-system-valves-guide/',
    date: '2026',
    category: 'Protection Incendie',
    readTime: '7 min de lecture',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Checklist d’Approvisionnement B2B : Comment Vérifier un Fabricant d’Équipement Incendie',
    description: 'Checklist de diligence en 8 points pour vérifier les fabricants de vannes — certificats, rapports d’essai par lot, audits d’usine, échantillons et signaux d’alerte lors de l’approvisionnement en Chine.',
    href: '/fr/guides/b2b-valve-sourcing-checklist/',
    date: '2026',
    category: 'Approvisionnement',
    readTime: '6 min de lecture',
    tags: ['procurement', 'certification', 'industrial-valves']
  },
  {
    title: 'Comment Choisir des Vannes Incendie Certifiées UL pour Votre Projet (Guide 2026)',
    description: 'Ce que signifie réellement la certification UL, UL vs FM, quels types de vannes sont certifiés, comment vérifier l’authenticité des certificats et une checklist d’approvisionnement pour les acheteurs B2B.',
    href: '/fr/guides/how-to-choose-ul-listed-fire-valves/',
    date: '2026',
    category: 'Protection Incendie',
    readTime: '7 min de lecture',
    tags: ['certification', 'fire-protection', 'industrial-valves']
  },
  {
    title: 'Guide d’Achat des Canons d’Eau Anti-Incendie : Fixe, Télécommandé ou Intelligent ? (2026)',
    description: 'Quand vous avez besoin d’un canon d’eau, fixe vs télécommandé vs à suivi automatique, dimensionnement du débit et de la portée, intégration du contrôle et une checklist d’approvisionnement basée sur le site.',
    href: '/fr/guides/fire-water-cannon-buying-guide/',
    date: '2026',
    category: 'Protection Incendie',
    readTime: '6 min de lecture',
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Systèmes de Gicleurs : à Mouillé, à Sec ou à Pré-action ? (Guide 2026)',
    description: 'Une comparaison pratique des systèmes à mouillé, à sec et à pré-action, comment sélectionner les têtes de gicleurs (coefficient K, température, réponse) et les composants dont votre nomenclature a besoin.',
    href: '/fr/guides/fire-sprinkler-system-wet-dry-preaction/',
    date: '2026',
    category: 'Protection Incendie',
    readTime: '7 min de lecture',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Comment Choisir un Hydrant pour des Projets Municipaux & Industriels (Guide 2026)',
    description: 'Un guide d’approvisionnement pas à pas couvrant les types d’hydrants, les classes de pression, les normes de raccordement, les exigences de certification et la checklist d’usine avant de commander.',
    href: '/fr/guides/how-to-choose-a-fire-hydrant/',
    date: '2026',
    category: 'Protection Incendie',
    readTime: '8 min de lecture',
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Vanne à Boisseau vs Vanne à Papillon pour la Protection Incendie',
    description: 'Comparez les performances d’isolement, l’espace d’installation, la perte de charge, la maintenance et les critères de sélection de projet pour les conduites de protection incendie.',
    href: '/fr/guides/gate-valve-vs-butterfly-valve-fire-protection/',
    date: '2026',
    category: 'Vannes',
    readTime: '7 min de lecture',
    tags: ['industrial-valves', 'fire-protection']
  },
  {
    title: 'Types de Vannes de Contrôle des Gicleurs : OS&Y, Papillon & Anti-Retour',
    description: 'Les services des vannes à boisseau OS&Y, à papillon à signal et anti-retour dans les réseaux de gicleurs, plus un tableau comparatif des vannes de contrôle et une checklist de spécification UL/FM pour les acheteurs B2B.',
    href: '/fr/guides/fire-sprinkler-control-valve-types/',
    date: '2026-09',
    category: 'Protection Incendie',
    readTime: '8 min de lecture',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Guide des Vannes à Boisseau à Joint Membrane : Types à Bride ANSI pour Vapeur & Huile Thermique',
    description: 'Comment fonctionne la double étanchéité à joint membrane soudé, où les vannes à boisseau à joint membrane sont spécifiées, les normes ANSI/GB et une checklist de spécification B2B pour le service vapeur et huile thermique.',
    href: '/fr/guides/bellows-seal-gate-valve-guide/',
    date: '2026-09',
    category: 'Vannes',
    readTime: '7 min de lecture',
    tags: ['industrial-valves', 'bellows-seal-gate-valve']
  },
  {
    title: 'Guide des Réducteurs de Pression : Réducteur Hydraulique 500X & Vannes d’Approvisionnement en Eau (2026)',
    description: 'Comment fonctionnent les réducteurs de pression hydrauliques autopilotés, réducteur 500X vs contrôle de niveau F745X vs vanne à flotteur à distance 100X, installation et une checklist de spécification B2B pour les réseaux d’approvisionnement en eau.',
    href: '/fr/guides/pressure-reducing-valve-guide/',
    date: '2026-09',
    category: 'Sécurité Hydraulique',
    readTime: '8 min de lecture',
    tags: ['backflow-prevention', 'industrial-valves']
  },
  {
    title: 'Types de Clapets Anti-Retour & Guide de Sélection : Bille Glissante vs Battant (2026)',
    description: 'Comparaison des types de clapets anti-retour — battant vs bille glissante HQ41X vs bille sphérique HQ44X : perte de charge, coup de bélier, fermeture sans choc, orientation d’installation et une checklist de spécification B2B.',
    href: '/fr/guides/check-valve-types-guide/',
    date: '2026-09',
    category: 'Vannes',
    readTime: '8 min de lecture',
    tags: ['industrial-valves', 'backflow-prevention']
  },
  {
    title: 'Guide de Sélection des Extincteurs : Poudre Sèche ABC pour Acheteurs B2B (2026)',
    description: 'Comment choisir les extincteurs portatifs pour les projets d’export : classes de feux vs agents extincteurs, spécifications de la poudre sèche ABC, certification ISO 7165 et CCCF, applications et une checklist d’achat usine couvrant OEM, MOQ et emballage de marchandises dangereuses.',
    href: '/fr/guides/fire-extinguisher-selection-guide/',
    date: '2026-09',
    category: 'Protection Incendie',
    readTime: '8 min de lecture',
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Guide d’Achat des Flexibles Anti-Incendie Plat : Tailles, Doublures & Raccords (2026)',
    description: 'Comment acheter du flexible anti-incendie plat pour la lutte incendie et le transfert d’eau industriel : construction du flexible et étanchéité des bords, dimensionnement en diamètre et longueur, normes de raccord Storz/BS336/NIST, buses et une checklist d’usine OEM.',
    href: '/fr/guides/fire-hose-buying-guide/',
    date: '2026-09',
    category: 'Protection Incendie',
    readTime: '8 min de lecture',
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Wanlian Fluid vs American AVK : quel fournisseur d’hydrants et de vannes convient à votre projet 2026 ?',
    description: 'Une comparaison étayée par les données de Wanlian Fluid et American AVK pour l’approvisionnement 2026 : gammes de produits, hydrants AWWA C502, systèmes de qualité, coût et délai — et comment la géographie, le périmètre et la spécification sélectionnent le bon fournisseur.',
    href: '/fr/guides/wanlian-fluid-vs-american-avk/',
    date: '2026-09',
    category: 'Approvisionnement',
    readTime: '9 min de lecture',
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Comment Vérifier un Fournisseur Chinois de Vannes & d’Équipement Incendie en 2026',
    description: 'Checklist de vérification de fournisseur en 5 étapes pour 2026 : contrôles de validité ISO 9001, rapports d’essai assortis à la norme, inspection par un tiers, signaux d’alerte contrefaçon et documentation d’importation.',
    href: '/fr/guides/how-to-verify-chinese-valve-supplier/',
    date: '2026-09',
    category: 'Approvisionnement',
    readTime: '7 min de lecture',
    tags: ['procurement', 'certification']
  },
  {
    title: 'Normes des Hydrants, Flexibles & Vannes Expliquées : AWWA, NFPA, EN & ISO',
    description: 'Guide des normes pour les acheteurs d’hydrants, de flexibles anti-incendie et de vannes : AWWA C502/C515, NFPA 1961, EN 14384, BS 750, EN 1074 et ISO 5208 — avec un processus en 5 contrôles pour acheter un équipement conforme en Chine.',
    href: '/fr/guides/fire-hydrant-valve-standards-guide/',
    date: '2026-09',
    category: 'Protection Incendie',
    readTime: '8 min de lecture',
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Guide de Conformité CE & EN 12845 : Équipements Incendie pour le Marché Européen (2026)',
    description: 'La conformité européenne de protection incendie expliquée pour les acheteurs B2B : exigences d’aspiration de pompe de gicleurs EN 12845, marquage CE au niveau du modèle, essais de vannes EN 12266-1, systèmes de raccordement Storz/BS336/KWS et la frontière ISO 7165 vs CCCF pour les extincteurs.',
    href: '/fr/guides/ce-en12845-fire-protection-compliance/',
    date: '2026-09',
    category: 'Protection Incendie',
    readTime: '8 min de lecture',
    tags: ['certification', 'fire-protection']
  },
  {
    title: 'Guide de Sélection des Têtes de Gicleurs : Coefficient K, Température & Réponse (2026)',
    description: 'Comment sélectionner les têtes de gicleurs : coefficient K et débit (K=80/K=115), classements de température et code couleur des ampoules, réponse rapide vs standard, orientation pendentif/en hauteur/murale/dissimulée et certification UL dans le contexte de la NFPA 13.',
    href: '/fr/guides/fire-sprinkler-head-selection-guide/',
    date: '2026-09',
    category: 'Protection Incendie',
    readTime: '8 min de lecture',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Guide des Vannes de Protection Incendie à Gorge : À Gorge vs Raccords à Bride (2026)',
    description: 'Vannes à extrémités à gorge pour conduites de gicleurs vs à bride : papillon à signal, boisseau OS&Y, boisseau inox et vannes à gorge électromagnétiques, vitesse d’installation, supervision et une checklist B2B.',
    href: '/fr/guides/grooved-fire-protection-valves-guide/',
    date: '2026-09',
    category: 'Protection Incendie',
    readTime: '8 min de lecture',
    tags: ['fire-protection', 'industrial-valves']
  },
  {
    title: 'Guide des Hydrants Antigel & Anti-Collision : Climat Froid & Sécurité (2026)',
    description: 'Hydrants antigel à barillet sec, hydrants anti-collision à boulons de cisaillement et modèles surveillés IoT : protection contre le gel, coupure à l’impact, régulation de pression et une checklist de sélection B2B.',
    href: '/fr/guides/antifreeze-anti-collision-fire-hydrant-guide/',
    date: '2026-09',
    category: 'Protection Incendie',
    readTime: '8 min de lecture',
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Guide du Point de Couplage Sapeurs-Pompiers (Siamois) : Entrées, Raccords & Installation (2026)',
    description: 'Les raccords siamois de point de couplage expliqués : deux entrées DN65 (SQS65/KWS65), sortie à bride DN100, vanne de régulation intégrée, options de raccords Storz et HS, installation et une checklist de spécification B2B.',
    href: '/fr/guides/fire-department-connection-siamese-guide/',
    date: '2026-09',
    category: 'Protection Incendie',
    readTime: '8 min de lecture',
    tags: ['fire-protection', 'fire-hydrant']
  },
  {
    title: 'Infrastructure Municipale d’Eau et de Protection Incendie en Amérique Latine : Guide d’Approvisionnement B2B (2026)',
    description: 'Acheter des hydrants, des vannes à boisseau et des flexibles incendie pour l’infrastructure municipale en Amérique Latine : régimes de normes régionaux, lots en une seule commande, spécification et matrice de sélection.',
    href: '/fr/guides/municipal-water-fire-infrastructure-latinamerica/',
    date: '2026-09',
    category: 'Achats B2B',
    readTime: '8 min de lecture',
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Exigences de Certification des Vannes et Hydrants Incendie dans les Projets d’Amérique Latine (2026)',
    description: 'Ce que signifient UL, FM, AWWA, NOM et ABNT dans un appel d’offres latino-américain, comment ils sont accordés par modèle, comment vérifier les certificats authentiques et la documentation à demander.',
    href: '/fr/guides/latinamerica-certification-requirements-fire-valves/',
    date: '2026-09',
    category: 'Achats B2B',
    readTime: '8 min de lecture',
    tags: ['certification', 'procurement', 'industrial-valves']
  },
  {
    title: 'Comment Détecter les Vannes Falsifiées et les Certificats d’Équipement Incendie Contrefaits (2026)',
    description: 'Un contrôle en sept étapes et un tableau des signaux d’alerte : numéros de série clonés, plaques copiées, corps à paroi mince et certificats UL/FM/AWWA falsifiés lors d’une achat en Chine.',
    href: '/fr/guides/detect-fake-valves-fire-equipment-counterfeits/',
    date: '2026-09',
    category: 'Achats B2B',
    readTime: '8 min de lecture',
    tags: ['procurement', 'certification']
  },
  {
    title: 'Wanlian Fluid vs AVK Latinoamérica : Fournisseur de Vannes et Hydrants pour les Projets LatAm (2026)',
    description: 'Wanlian Fluid vs AVK Latinoamérica (AVK Válvulas, Tarragone) : réseau de distribution, gamme, lots en une seule commande, OEM, structure de coûts et délais — et comment choisir pour votre projet LatAm.',
    href: '/fr/guides/wanlian-fluid-vs-avk-latinamerica/',
    date: '2026-09',
    category: 'Achats B2B',
    readTime: '9 min de lecture',
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Guide Vanne d’Équilibrage Numérique HVAC : Sélection SP45F',
    description: 'Guide vanne d’équilibrage numérique HVAC : points d’essai de pression et verrouillage du SP45F, données RFQ et comparatif — fournisseur usine de Chine.',
    href: '/fr/guides/hvac-digital-balancing-valve-guide/',
    date: '2026-09',
    category: 'HVAC et vannes industrielles',
    readTime: '8 min de lecture',
    tags: ['industrial-valves', 'backflow-prevention']
  },
];

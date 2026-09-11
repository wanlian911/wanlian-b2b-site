// Étiquettes (tags) en français
// key = slug (identique à tags.ts) ; les pages /fr/tags/[slug]/ utilisent ces textes.
export interface TagFr {
  name: string;
  seoTitle: string;
  description: string;
}

export const tagsFr: Record<string, TagFr> = {
  'fire-protection': {
    name: 'Protection Incendie',
    seoTitle: 'Équipements & Systèmes de Protection Incendie : Vannes, Hydrants & Gicleurs',
    description: 'La gamme complète de protection incendie Wanlian — hydrants, vannes de réseaux de gicleurs, enrouleurs de flexible et armoires, extincteurs portatifs et canons d’eau anti-incendie — avec guides d’achat et accompagnement de certification pour les projets B2B.'
  },
  'fire-hydrant': {
    name: 'Hydrants',
    seoTitle: 'Hydrants : Types, Normes & Sélection',
    description: 'Têtes d’hydrant intérieur SN65, hydrants extérieurs SS100, SSFT100 anti-collision et hydrants intelligents IoT pour les réseaux de protection incendie municipaux et industriels.'
  },
  'sprinkler-systems': {
    name: 'Systèmes de Gicleurs',
    seoTitle: 'Systèmes de Gicleurs : Vannes à Mouillé, Déluge & Pré-action',
    description: 'Vannes d’alarme à mouillé, vannes à déluge, systèmes à pré-action, têtes de gicleurs et signalisateurs de débit pour la protection par gicleurs automatiques dans les bâtiments commerciaux et industriels.'
  },
  'fire-water-cannon': {
    name: 'Canons d’Eau Anti-Incendie',
    seoTitle: 'Canons d’Eau & Moniteurs Anti-Incendie : Manuels vs Suivi Automatique',
    description: 'Moniteurs manuels PS et canons à suivi automatique ZDMS pour l’extinction en grands espaces et industrielle, avec conseils sur la portée du jet, le débit et l’intégration du contrôle.'
  },
  'backflow-prevention': {
    name: 'Prévention du Reflux',
    seoTitle: 'Dispositifs Anti-Retour & Vannes de Contrôle Hydraulique',
    description: 'Dispositifs anti-retour anti-pollution HS41X, vannes de réduction de pression, de contrôle de niveau et électromagnétiques pour la protection de l’eau potable et la sécurité hydraulique.'
  },
  'industrial-valves': {
    name: 'Vannes Industrielles',
    seoTitle: 'Vannes Industrielles : Boisseau, Papillon & Clapets Anti-Retour',
    description: 'Vannes à boisseau à siège élastomère, vannes à papillon wafer, clapets anti-retour à bille et filtres en Y pour les canalisations d’approvisionnement en eau, d’assainissement, de CVC et de process industriel.'
  },
  'fire-hose-reel': {
    name: 'Enrouleurs de Flexible & Armoires',
    seoTitle: 'Enrouleurs de Flexible & Armoires Anti-Incendie : Guide de Sélection',
    description: 'Enrouleurs de flexible JPS0.8-19, armoires à mousse PSG30, vannes d’hydrant SN65 et adaptateurs de raccord pour les postes de lutte incendie intérieurs et les zones à danger de classe B.'
  },
  'certification': {
    name: 'Certification & Conformité',
    seoTitle: 'Guide de Certification des Vannes UL, FM, CE',
    description: 'Comprendre la certification UL/FM/CE/LPCB pour les vannes et hydrants incendie, vérifier l’authenticité des certificats, et les exigences de conformité pour les marchés d’export.'
  },
  'procurement': {
    name: 'Approvisionnement B2B',
    seoTitle: 'Checklist d’Approvisionnement Vannes & Équipement Incendie B2B',
    description: 'Vérification d’usine, contrôle des certificats, rapports d’essai par lot, politiques d’échantillon et signaux d’alerte lors de l’approvisionnement en vannes et équipements de protection incendie depuis la Chine.'
  },
  'bellows-seal-gate-valve': {
    name: 'Vannes à Boisseau à Joint Membrane',
    seoTitle: 'Vannes à Boisseau à Joint Membrane pour Vapeur & Huile Thermique',
    description: 'Vannes à boisseau à joint membrane métallique à double étanchéité pour le service vapeur, huile thermique et eau à haute température — types à bride ANSI pour les lignes industrielles critiques aux émissions fugitives.'
  }
};

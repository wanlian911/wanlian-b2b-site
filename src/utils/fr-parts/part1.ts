// products.fr.ts part 1
import type { Product } from '../products';

export const productsFrPart1: Record<string, Product> = {
  'resilient-seat-flanged-gate-valve-z41x': {
    id: '1',
    slug: 'resilient-seat-flanged-gate-valve-z41x',
    name: 'Vanne à Boisseau à Bride, Siège Élastomère, Fonte Ductile (Z41X)',
    category: 'Vannes et Pièces',
    description:
      "La vanne à boisseau à siège élastomère Wanlian Z41X est dotée d'un clapet entièrement encapsulé en caoutchouc pour assurer une étanchéité parfaite et fiable. Idéale pour l'approvisionnement en eau, l'assainissement, les tuyauteries industrielles et les systèmes CVC.",
    features: [
      'Clapet élastomère entièrement encapsulé en caoutchouc EPDM de haute qualité',
      "Le fond plat empêche l'accumulation de saletés et de sédiments",
      "Revêtement époxy non toxique à l'intérieur et à l'extérieur pour résister à la corrosion et à la rouille",
      'Entretien facile, le remplacement du siège peut être effectué en ligne sous pression',
    ],
    specs: {
      'Diamètre nominal': 'DN50 - DN700 (2" to 28")',
      'Pression nominale': '1.0 MPa / 1.6 MPa (PN10 / PN16)',
      'Température de service': '0°C à 80°C',
      'Fluide applicable': 'Eau, liquides non corrosifs, air',
      'Matériau du corps': 'Fonte ductile (QT450-10)',
    },
    materials: {
      'Corps et bonnet': 'Fonte ductile (QT450)',
      'Clapet/disque': 'Fonte ductile + encapsulage EPDM complet',
      'Tige': 'Acier inoxydable (2Cr13 / 304)',
      'Écrou de tige': 'Alliage de bronze',
      'Joints toriques': 'NBR / EPDM auto-serrant',
    },
    dimensions: {
      headers: ['DN (mm)', 'L (mm)', 'D (mm)', 'D1 (mm)', 'D2 (mm)', 'z-Φd (trous)'],
      rows: [
        ['50', '180', '160', '125', '100', '4-Φ18'],
        ['80', '210', '195', '160', '135', '4-Φ18'],
        ['100', '230', '215', '180', '155', '8-Φ18'],
        ['150', '280', '280', '240', '210', '8-Φ23'],
        ['200', '330', '335', '295', '265', '8-Φ23'],
        ['300', '420', '440', '400', '368', '12-Φ23'],
      ],
    },
    image: '/assets/products/resilient-seat-flanged-gate-valve-z41x.webp',
    seoTitle: 'Vanne à Boisseau Z41X Siège Élastomère | Fonte Ductile UL',
    seoDescription:
      'Vanne à boisseau Z41X en fonte ductile à siège élastomère : faible perte de charge, étanchéité parfaite pour systèmes fluides industriels. Prix usine de Quanzhou Wanlian Fluid.',
    faqs: [
      {
        question: 'Quelles tailles sont disponibles pour la vanne à boisseau à siège élastomère Z41X ?',
        answer:
          "De DN50 à DN700 (2 pouces à 28 pouces) en PN10 ou PN16, couvrant les canalisations secondaires jusqu\u2019aux grandes lignes de transport, pour l\u2019approvisionnement en eau, l\u2019assainissement, les services industriels et HVAC.",
      },
      {
        question: 'Comment le Z41X obtient-il une étanchéité parfaite ?',
        answer:
          "L\u2019obturateur est entièrement encapsulé dans un caoutchouc EPDM de haute qualité, de sorte que l\u2019étanchéité ne dépend pas d\u2019un contact métal contre métal comme sur une vanne à boisseau traditionnelle. La conception à fond plat empêche en outre l\u2019accumulation de sédiments au niveau du siège.",
      },
      {
        question: 'Le joint du Z41X peut-il être remplacé sans vidanger la canalisation ?',
        answer:
          "Oui — l\u2019étanchéité élastomère peut être remplacée en ligne sous pression, évitant des arrêts coûteux lors de la maintenance.",
      },
      {
        question: 'Quels fluides et quelles températures le Z41X peut-il traiter ?',
        answer:
          "Eau, liquides non corrosifs et air de 0°C à 80°C, avec un revêtement en résine époxy non toxique à l\u2019intérieur comme à l\u2019extérieur pour la résistance à la corrosion dans les réseaux d\u2019eau potable et industriels.",
      },
    ],
  },
  'indoor-fire-hydrant-head-sn65': {
    id: '2',
    slug: 'indoor-fire-hydrant-head-sn65',
    name: 'Bouche d\u2019Incendie Intérieure SN65',
    category: 'Hydrants et Connexions de Pompe',
    description:
      "Tête d'hydrant intérieur haute pression SN65 en fonte ductile de qualité supérieure. Usinage de précision, raccordement à gorge ou à bride flexible, étanchéité fiable pour les réseaux anti-incendie commerciaux et industriels.",
    features: [
      'Corps en fonte ductile de haute qualité pour une résistance maximale à la pression',
      'Raccordement à gorge flexible pour une installation rapide et fiable',
      'Essais stricts de pression et anti-fuite jusqu\u2019à 2.4 MPa',
      'Revêtement poudre anticorrosion rouge',
    ],
    specs: {
      'Raccordement': 'À gorge / À bride',
      'Taille': 'DN65 (2.5")',
      'Pression de service': '1.6 MPa (232 PSI)',
      'Matériau du corps': 'Fonte ductile',
      'Application': 'Armoires anti-incendie intérieures murales',
    },
    materials: {
      'Corps': 'Fonte ductile (QT400)',
      'Tige de vanne': 'Laiton / Acier inoxydable',
      'Joint de clapet': 'Caoutchouc EPDM',
      'Volant': 'Fonte ductile / Fonte grise',
      'Interface de raccordement': 'Aluminium anodisé / Laiton',
    },
    image: '/assets/products/indoor-fire-hydrant-head-sn65.jpg',
    seoTitle: 'Tête d\u2019Incendie Intérieure SN65 | Fournisseur Prix Usine',
    seoDescription:
      "Tête d'hydrant intérieur SN65 en fonte ductile pour réseaux anti-incendie : 1.6 MPa, raccordement à gorge ou à bride. Direct usine Wanlian, Chine.",
    faqs: [
      {
        question: 'Quels types de raccordement sont disponibles pour la tête d\u2019hydrant intérieur SN65 ?',
        answer:
          "Le SN65 est disponible avec raccordement à gorge ou à bride et une interface de raccord en aluminium anodisé ou en laiton, afin de correspondre à votre norme de raccord de flexible (Storz, HS/BS5912, NIST) à la commande.",
      },
      {
        question: 'Quelle pression la vanne d\u2019hydrant SN65 supporte-t-elle ?',
        answer:
          "Elle est classée pour une pression de service de 1,6 MPa (232 PSI) et est essayée en pression et étanchéité jusqu\u2019à 2,4 MPa, ce qui couvre les systèmes de colonnes d\u2019eau intérieures incendie standards.",
      },
      {
        question: 'Où le SN65 est-il généralement installé ?',
        answer:
          "C\u2019est la vanne de pose murale destinée aux armoires d\u2019incendie intérieures et aux postes de flexible des bâtiments commerciaux et industriels — DN65 (2,5 pouces), adapté aux tailles standard des flexibles de lutte incendie.",
      },
      {
        question: 'Le SN65 peut-il être fourni dans le cadre d\u2019un kit complet de poste intérieur d\u2019incendie ?',
        answer:
          "Oui — il s\u2019accompagne de notre ensemble d\u2019enrouleur de flexible JPS0.8-19, du flexible anti-incendie plat et de la buse à pulvérisation pour former un poste intérieur de lutte incendie complet sur un seul bon de commande.",
      },
    ],
  },
  'wet-alarm-check-valve-zsfz-150': {
    id: '3',
    slug: 'wet-alarm-check-valve-zsfz-150',
    name: 'Clapet Anti-Retour à Alarme à Mouillé ZSFZ 150',
    category: "Gicleurs et Vannes d'Alarme",
    description:
      "Le clapet anti-retour à alarme à mouillé ZSFZ est un composant clé des réseaux de gicleurs automatiques. Il déclenche automatiquement la cloche d'alarme hydraulique et active le pressostat lorsque l'eau circule vers les gicleurs.",
    features: [
      'Structure en fonte grise haute résistance pour le combat d\u2019incendie intensif',
      'Un battant très sensible assure une réponse immédiate de l\u2019alarme',
      "Équipé d'une cloche d'alarme à moteur hydraulique et d'une chambre de retard anti-fausse alarme",
      'Entretien et tests faciles en ligne',
    ],
    specs: {
      'Diamètre nominal': 'DN100 / DN150 / DN200',
      'Pression nominale': '1.6 MPa',
      'Norme': 'GB5135.2 / Norme usine',
      'Matériau du corps': 'Fonte grise / Fonte ductile',
      'Accessoire': 'Pressostat, chambre de retard, cloche',
    },
    materials: {
      'Corps de vanne': 'Fonte grise / Fonte à graphite sphéroïdal',
      'Battant/joint de siège': 'EPDM / NBR caoutchouc haute durabilité',
      'Chambre de retard': 'Fonte grise / Laiton',
      'Cloche d\u2019alarme': 'Alliage d\u2019aluminium / Cuivre',
      'Raccords et tuyaux': 'Acier galvanisé / Laiton',
    },
    image: '/assets/products/wet-alarm-check-valve-zsfz-150.webp',
    seoTitle: 'Clapet Anti-Retour ZSFZ-150 à Alarme à Mouillé | Gicleurs',
    seoDescription:
      "Clapet anti-retour à alarme à mouillé ZSFZ-150 pour réseaux de gicleurs anti-incendie automatiques : fonte ductile durable, réponse d'alarme rapide. Direct usine de Chine.",
    faqs: [
      {
        question: 'Comment la vanne d\u2019alarme à mouillé ZSFZ déclenche-t-elle l\u2019alarme ?',
        answer:
          "Lorsque le débit des gicleurs ouvre le battant, la cloche d\u2019alarme à moteur hydraulique est entraînée en continu, la chambre de retard filtre les surpressions transitoires pour éviter les fausses alarmes et l\u2019interrupteur de pression ferme un contact électrique vers le panneau de contrôle d\u2019alarme incendie.",
      },
      {
        question: 'Le ZSFZ a-t-il besoin d\u2019électricité pour fonctionner ?',
        answer:
          "Non. La vanne elle-même est entièrement hydraulique ; seul le contact de l\u2019interrupteur de pression fournit le signal d\u2019alarme au panneau d\u2019alarme incendie du bâtiment.",
      },
      {
        question: 'Quelles tailles sont disponibles pour le ZSFZ ?',
        answer:
          "DN100, DN150 et DN200 à 1,6 MPa de pression nominale, fabriqués selon GB 5135.2 avec des corps en fonte grise ou en fonte ductile et des joints de battant et de siège en EPDM/NBR.",
      },
      {
        question: 'Le ZSFZ peut-il être maintenu sans vidanger le système ?',
        answer:
          "Oui — il est conçu pour la maintenance en ligne et les essais périodiques, ce qui est essentiel pour les systèmes incendie qui doivent rester protégés en permanence.",
      },
    ],
  },
  'signal-grooved-wafer-butterfly-valve-dn80': {
    id: '4',
    slug: 'signal-grooved-wafer-butterfly-valve-dn80',
    name: 'Vanne à Papillon à Gorge Wafer avec Signal (DN80-PN16)',
    category: 'Vannes et Pièces',
    description:
      "Vanne à papillon wafer à gorge avec signal DN80 PN16 QT450 manuelle à engrenage sans fin. Très adaptée aux réseaux anti-incendie et aux systèmes d'eau industriels où la surveillance de l'état ouvert/fermé de la vanne est requise.",
    features: [
      "Interrupteur de signal électrique intégré pour la surveillance de l'état à distance",
      'Corps wafer compact pour une installation économe en espace',
      'Le réducteur à engrenage sans fin offre une manœuvre fluide et à faible couple',
      'Disque d\u2019étanchéité élastomère durable pour étanchéité bidirectionnelle',
    ],
    specs: {
      'Gammes de taille': 'DN50 - DN300 (2" to 12")',
      'Pression de service': '1.6 MPa (PN16)',
      'Matériau du corps': 'Fonte ductile (QT450)',
      'Joint de disque': 'EPDM / NBR',
      'Raccordement': 'Wafer / À gorge',
    },
    materials: {
      'Corps': 'Fonte ductile (QT450)',
      'Disque': 'Fonte ductile avec revêtement époxy/EPDM',
      'Arbre/tige': 'Acier inoxydable (2Cr13 / 416)',
      'Réducteur à engrenage': 'Fonte grise / Fonte sphéroïdale',
      'Micro-interrupteur': 'Micro-interrupteur étanche haute conductivité',
    },
    image: '/assets/products/signal-grooved-wafer-butterfly-valve-dn80.webp',
    seoTitle: 'Vanne à Papillon Wafer à Signal DN80 | PN16 Incendie',
    seoDescription:
      'Vanne à papillon wafer à signal en fonte ductile QT450, idéale pour le contrôle des réseaux anti-incendie. Interrupteur de surveillance intégré, manœuvre fluide à engrenage.',
  },
  'hydraulic-water-level-control-valve-f745x': {
    id: '6',
    slug: 'hydraulic-water-level-control-valve-f745x',
    name: 'Vanne Hydraulique de Régulation de Niveau d\u2019Eau (F745X)',
    category: 'Sécurité Hydraulique',
    description:
      "La vanne hydraulique de régulation de niveau d'eau F745X maintient automatiquement un niveau prédéfini dans les réservoirs, citernes et châteaux d'eau. Elle empêche le débordement ou les niveaux très bas grâce à une commande pilote hydraulique avancée.",
    features: [
      "Entièrement pilotée par la pression de la tuyauterie, sans alimentation électrique externe",
      'Le mécanisme de fermeture lente et progressive empêche le coup de bélier destructeur',
      "Contrôle de niveau précis, système pilote à flotteur très fiable",
      'Tuyauterie pilote en cuivre/acier inoxydable anticorrosion',
    ],
    specs: {
      'Diamètre nominal': 'DN50 - DN400',
      'Pression de service': '1.0 MPa / 1.6 MPa',
      'Matériau du corps': 'Fonte ductile / Acier fondu',
      'Tuyauterie pilote': 'Acier inoxydable / Cuivre',
      'Vanne pilote': 'Pilote à flotteur en laiton',
    },
    materials: {
      'Corps de vanne principal': 'Fonte ductile (QT450-10)',
      'Ensemble membrane': 'Caoutchouc EPDM renforcé nylon',
      'Tige et ressort': 'Acier inoxydable 304',
      'Vanne pilote à flotteur': 'Alliage de laiton massif',
      'Vannes à aiguille et à bille': 'Acier inoxydable / Laiton',
    },
    image: '/assets/products/adjustable-pressure-reducing-valve-500x.webp',
    seoTitle: 'Vanne Hydraulique de Niveau F745X | Pilote à Flotteur',
    seoDescription:
      "Vanne de régulation de niveau pilote à flotteur F745X automatique pour réservoirs et citernes. Fermeture progressive, sans coup de bélier. Haute durabilité, entretien facile.",
  },
  'smart-electromagnetic-flow-meter': {
    id: '7',
    slug: 'smart-electromagnetic-flow-meter',
    name: 'Débitmètre Électromagnétique Intelligent (DN100)',
    category: 'Sécurité Hydraulique',
    description:
      'Débitmètre électromagnétique intelligent haute précision conçu pour la mesure de débit des liquides conducteurs. Fiabilité élevée, faible consommation, totalement insensible à la densité, à la viscosité ou à la température du fluide.',
    features: [
      'Aucune partie obstruante dans le tube de mesure, perte de charge nulle',
      'Écran LCD rétroéclairé haute résolution avec menu clair en français/anglais',
      "Doté d'une interface de communication numérique RS485 / Modbus",
      'Microprocesseur embarqué 16 bits pour un calcul plus rapide et une forte anti-brouillage',
    ],
    specs: {
      'Gammes de taille': 'DN10 - DN2000',
      'Classe de précision': '0,5 % ou 1,0 %',
      'Pression nominale': '0.6 - 4.0 MPa (sur mesure jusqu\u2019à 70 MPa)',
      "Signal de sortie": 'Impulsion / 4-20mA',
      'Structure': 'Compact (intégré) / Séparé à distance / Immergé',
    },
    materials: {
      'Corps de tube': 'Acier carbone (WCB) / Acier inoxydable 304',
      'Doublure interne': 'PTFE / Caoutchouc chloroprène',
      'Électrodes': 'Acier inoxydable 316L / Hastelloy C',
      'Boîtier-convertisseur': 'Alliage d\u2019aluminium moulé IP65/IP67',
    },
    image: '/assets/products/smart-electromagnetic-flow-meter.webp',
    seoTitle: 'Débitmètre Électromagnétique | MODBUS Digital',
    seoDescription:
      "Débitmètres électromagnétiques numériques haute précision pour l'eau, les eaux usées et les fluides industriels conducteurs. Communication MODBUS supportée. Usine Wanlian.",
  },
  'telescopic-y-strainer-sgl41h': {
    id: '8',
    slug: 'telescopic-y-strainer-sgl41h',
    name: 'Filtre en Y Télescopique (SGL41H)',
    category: 'Vannes et Pièces',
    description:
      "Le filtre en Y télescopique SGL41H est indispensable pour protéger les vannes de régulation hydraulique et les machines de précision contre l'encrassement. Installé en amont pour filtrer les impuretés particules, avec un joint de dilatation intégré pour une installation et un retrait faciles.",
    features: [
      'Combine filtre en Y et joint de dilatation télescopique en un seul corps',
      "Simplifie considérablement l'entretien des vannes et l'installation de la tuyauterie",
      "Tamis filtrant en acier inoxydable haute qualité avec taille de maille personnalisable",
      'Corps en fonte ductile durable avec peinture époxy',
    ],
    specs: {
      'Gammes de taille': 'DN50 - DN600',
      'Pression de service': '1.0 MPa / 1.6 MPa',
      'Matériau du tamis': 'SS304 / SS316',
      'Maille du tamis': '18-30 mailles (eau), 40-100 mailles (vapeur)',
      'Matériau du corps': 'Fonte ductile (QT450)',
    },
    materials: {
      'Corps de filtre': 'Fonte ductile (QT450-10)',
      'Manchon de dilatation': 'Acier carbone / Fonte ductile',
      'Tamis filtrant': 'Acier inoxydable 304 / 316',
      'Joints de tige': 'NBR / Graphite',
      'Boulons télescopiques': 'Acier carbone moyen zingué',
    },
    image: '/assets/products/telescopic-y-strainer-sgl41h.webp',
    seoTitle: 'Filtre en Y Télescopique SGL41H | Tamis SS304',
    seoDescription:
      "Filtre en Y télescopique SGL41H intégré pour tuyauteries industrielles et CVC. Entretien facile, tamis SS304 robuste. Achat direct usine de Chine Wanlian.",
  },
  'anti-collision-pressure-regulating-outdoor-hydrant-ssft100': {
    id: '9',
    slug: 'anti-collision-pressure-regulating-outdoor-hydrant-ssft100',
    name: 'Hydrant Extérieur Anti-Collision à Régulation de Pression (SSFT100/65)',
    category: 'Hydrants et Connexions de Pompe',
    description:
      "Conçu pour éliminer le risque d'importantes fuites d'eau après un accident. En cas de collision routière, les boulons de sécurité spécifiques se cisaillent proprement et la vanne interne coupe automatiquement l'eau immédiatement, permettant des réparations sous pression.",
    features: [
      "L'étanchéité automatique en cas de collision empêche les pertes d'eau importantes et l'inondation",
      "L'appareil de régulation de pression intégré permet un débit d'eau progressif et fluide",
      "Équipé d'un système d'auto-vidange automatique pour empêcher le gel en hiver",
      "Coût d'entretien très faible : il suffit de remplacer les boulons de sécurité et de redémarrer",
    ],
    specs: {
      'Diamètre nominal': 'DN100 / DN150',
      'Pression nominale': '1.6 MPa',
      'Raccordement d\u2019entrée': 'À bride',
      'Sorties': '2x 65mm (KWS65) + 1x 100mm (DN100)',
      'Matériau du corps': 'Fonte ductile QT450',
    },
    materials: {
      'Corps d\u2019hydrant': 'Fonte ductile QT450',
      'Siège de vanne inférieur': 'Alliage de laiton massif / recouvert EPDM',
      'Boulons de cisaillement': 'Acier carbone moyen zingué (calibré spécialement)',
      'Ressorts': 'Acier inoxydable 304',
      'Bouchons et interfaces': 'Alliage d\u2019aluminium anodisé / Laiton',
    },
    image: '/assets/products/anti-collision-pressure-regulating-outdoor-hydrant-ssft100.webp',
    seoTitle: 'Hydrant Extérieur Anti-Collision SSFT100 | Régulateur',
    seoDescription:
      "Hydrant anti-collision à régulation de pression SSFT100 avec double arrêt de sécurité pour la protection incendie municipale et industrielle. Prix usine Wanlian.",
    faqs: [
      {
        question: 'Comment l\u2019hydrant SSFT100 coupe-t-il l\u2019eau après une collision avec un véhicule ?',
        answer:
          "Les boulons de cisaillement spécialisés sont calibrés pour céder sous l\u2019impact. Une fois coupés, la vanne interne se ferme automatiquement et obture l\u2019hydrant, stoppant la fuite d\u2019eau pour que les réparations puissent être effectuées alors que la canalisation reste sous pression.",
      },
      {
        question: 'À quoi sert le dispositif de régulation de pression intégré ?',
        answer:
          "Il assure un débit d\u2019eau progressif et régulier à l\u2019ouverture des sorties, réduisant les chocs de débit et le coup de bélier pendant que les véhicules d\u2019incendie se remplissent depuis l\u2019hydrant.",
      },
      {
        question: 'Quelles normes de sortie utilise le SSFT100 ?',
        answer:
          "Deux sorties DN65 avec interfaces KWS65 plus une sortie DN100 (configuration DN100/65, corps de tailles DN100 et DN150 à 1,6 MPa) ; d\u2019autres normes de raccord de sortie peuvent être spécifiées pour votre marché.",
      },
      {
        question: 'Combien d\u2019entretien un hydrant anti-collision nécessite-t-il après un impact ?',
        answer:
          "Très peu — les boulons de cisaillement sont simplement remplacés et l\u2019hydrant est remis en service. La vanne inférieure et la canalisation restent opérationnelles, ce qui minimise le coût de la réparation et la durée de coupure.",
      },
    ],
  },
  'iot-smart-ground-fire-hydrant-ss100zn': {
    id: '10',
    slug: 'iot-smart-ground-fire-hydrant-ss100zn',
    name: 'Hydrant Sol Intelligent IoT (SS100/65-1.6ZN)',
    category: 'Hydrants et Connexions de Pompe',
    description:
      "Équipement anti-incendie intelligent de nouvelle génération pour les smart cities. Intègre des micro-capteurs IoT pour fournir des données d'état en temps réel, un suivi anti-vol, une surveillance d'inclinaison, une détection de pression du réseau et des alarmes de vol d'eau illégal.",
    features: [
      'Transmission sans fil IoT en temps réel via réseaux cellulaires (NB-IoT/4G)',
      'Alerte immédiate en cas d\u2019usage d\u2019eau illégal, d\u2019ouverture de vanne ou de collision de véhicule',
      'Surveillance continue de la pression et du débit pour prévenir la défaillance des réseaux',
      "Conception à ultra-faible consommation avec assistance solaire en option",
    ],
    specs: {
      'Communication': 'NB-IoT / LTE-M / GPRS',
      'Capteurs inclus': 'Inclinaison/vibration, capteur de pression, état de vanne',
      'Source d\u2019alimentation': 'Batterie lithium (5 ans) + assistance solaire',
      'Norme du corps': 'GB4452-2011',
    },
    materials: {
      'Corps d\u2019hydrant': 'Fonte ductile QT450',
      'Capsule module IoT': 'ABS renforcé anti-choc IP68',
      'Sonde/capteur d\u2019eau': 'Acier inoxydable 316',
      'Tige inférieure/siège de vanne': 'Acier inoxydable / Laiton',
    },
    image: '/assets/products/overground-fire-hydrant-ss100.webp',
    seoTitle: 'Hydrant Intelligent IoT SS100ZN | Surveillance Temps Réel',
    seoDescription:
      "Système de surveillance d'hydrant intelligent IoT. Pression d'eau, inclinaison et vol d'eau détectés en temps réel. Idéal pour l'intégration des réseaux incendie municipaux intelligents.",
    faqs: [
      {
        question: 'Quelles données l\u2019hydrant intelligent IoT surveille-t-il en temps réel ?',
        answer:
          "Pression et débit d\u2019eau de la canalisation, état ouvert/fermé de la vanne, inclinaison et vibrations (détection de collision) et alarmes de prélèvement d\u2019eau illégal — transmis sans fil par réseau cellulaire (NB-IoT, LTE-M ou GPRS).",
      },
      {
        question: 'Comment l\u2019hydrant intelligent SS100ZN est-il alimenté ?',
        answer:
          "Par une batterie lithium intégrée à durée de vie de conception de cinq ans, avec une assistance solaire optionnelle pour les installations isolées ou difficiles d\u2019accès. Aucun câble externe n\u2019est requis.",
      },
      {
        question: 'Quelle est la norme du corps de l\u2019hydrant intelligent ?',
        answer:
          "Le corps de l\u2019hydrant est fabriqué selon GB 4452-2011 en fonte ductile QT450, avec le module IoT dans une capsule ABS anti-chocs classée IP68 et une sonde d\u2019eau en acier inoxydable 316.",
      },
      {
        question: 'L\u2019hydrant intelligent peut-il s\u2019intégrer à une plateforme de surveillance municipale ?',
        answer:
          "Oui — il transmet des données cellulaires standard qui peuvent être acheminées vers votre plateforme SCADA ou ville intelligente ; nous coordonnons le format des données et la logique d\u2019alarme lors de la spécification du projet.",
      },
    ],
  },
  'glass-bulb-fire-sprinkler-zst': {
    id: '11',
    slug: 'glass-bulb-fire-sprinkler-zst',
    name: 'Gicleur à Ampoule Vitrée (Série ZST)',
    category: "Gicleurs et Vannes d'Alarme",
    description:
      'Gicleurs anti-incendie automatiques de précision équipés d\u2019une ampoule vitrée très sensible. Idéaux pour hôtels, centres commerciaux, résidences et entrepôts industriels pour détecter et éteindre les feux instantanément.',
    features: [
      'Châssis en alliage de cuivre haute résistance forgé avec précision pour la durabilité',
      'L\u2019ampoule vitrée à liquide organique très sensible assure une réponse rapide',
      'Les joints toriques de qualité supérieure résistant au vieillissement empêchent les fuites pendant des décennies',
      'Surface polie et chromée pour un aspect décoratif élégant',
    ],
    specs: {
      'Diamètre nominal': 'DN15 (R1/2") / DN20 (R3/4")',
      'Coefficient de débit': 'K=80 ±4 / K=115 ±9',
      'Types de réponse': 'Réponse standard (ampoule 5mm) / Réponse rapide (ampoule 3mm)',
      "Plages de température": '57°C / 68°C / 79°C / 93°C / 141°C',
      'Types disponibles': 'Pendentif (suspendu), vertical (en hauteur), mural',
    },
    materials: {
      'Châssis du corps': 'Laiton forgé de précision (H59-1)',
      'Ampoule vitrée': 'Ampoule vitrée importée Job / Day-Impex',
      'Élément d\u2019étanchéité': 'Joint torique en acier inoxydable avec couche téflon',
      'Déflecteur/éclaboussure': 'Alliage de cuivre / Acier inoxydable',
    },
    image: '/assets/products/glass-bulb-fire-sprinkler-zst.webp',
    seoTitle: 'Gicleur à Ampoule Vitrée ZST | Automatique',
    seoDescription:
      'Gicleurs anti-incendie automatiques à ampoule vitrée série ZST. Haute sensibilité, châssis en laiton anticorrosion. Prix usine Wanlian, Chine.',
    faqs: [
      {
        question: 'Comment choisir entre les gicleurs K=80 et K=115 ?',
        answer:
          "K=80 (K=80±4) est le choix standard pour la plupart des salles à danger léger ou ordinaire ; K=115 (K=115±9) fournit un débit plus élevé lorsque la densité de calcul est plus forte. Votre calcul hydraulique du réseau de gicleurs fixe le coefficient K et le débit requis à la pression de service.",
      },
      {
        question: 'Quelles classes de température sont disponibles pour les gicleurs ZST ?',
        answer:
          "Ampoules vitrées de 57°C, 68°C, 79°C, 93°C et 141°C avec le code couleur standard des ampoules, afin que le gicleur s\u2019ouvre dans la plage de température exigée par votre classe de danger.",
      },
      {
        question: 'Quelle est la différence entre ampoules à réponse rapide et à réponse standard ?',
        answer:
          "Les gicleurs à réponse rapide utilisent une ampoule de 3 mm et réagissent plus vite — à privilégier là où la rapidité d\u2019action compte ; les gicleurs à réponse standard utilisent une ampoule de 5 mm et constituent le choix polyvalent par défaut.",
      },
      {
        question: 'Quelles orientations sont disponibles dans la gamme ZST ?',
        answer:
          "Modèles ZST pendants, dressés (en position verticale) et muraux, ainsi que les variantes murale horizontale (T-ZSTBS) et dissimulée encastrée (ZSTDY) pour les installations sous plafond fini — corps en laiton forgé de précision avec ampoules vitrées importées, en DN15/DN20.",
      },
    ],
  },
};

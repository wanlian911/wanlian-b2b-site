// products.fr.ts part 2
import type { Product } from '../products';

export const productsFrPart2: Record<string, Product> = {
  'auto-tracking-jet-suppression-cannon-zdms': {
    id: '12',
    slug: 'auto-tracking-jet-suppression-cannon-zdms',
    name: 'Canon d\u2019Incendie à Suivi Automatique par Jet (Série ZDMS)',
    category: "Canons d'Incendie",
    description:
      "Canon d'eau anti-incendie intelligent conçu pour les grands espaces à plafond haut tels que les aéroports, centres commerciaux, halls d'exposition et entrepôts. Il utilise des capteurs infrarouges et ultraviolets multi-bandes pour détecter, suivre et éteindre les feux automatiquement en 30 secondes.",
    features: [
      'Entièrement autonome : détection de la source de feu, positionnement et projection automatiques',
      'Combine la détection infrarouge et ultraviolette pour une précision maximale sur la flamme',
      "Le jet concentré à grande portée éteint efficacement les feux en quelques secondes",
      'Prise en main à distance manuelle via PC/application mobile ou armoire centrale',
    ],
    specs: {
      "Débit nominal": '5L/s, 10L/s, 20L/s, 30L/s (sur mesure jusqu\u2019à 150L/s)',
      'Pression de service': '0.6 - 0.8 MPa',
      'Amplitude de rotation': 'Horizontal 360°, Vertical -90° à +30°',
      'Rayon de surveillance': '40m - 65m',
      'Anti-explosion': 'Exde II BT4 Gb (optionnel)',
    },
    materials: {
      'Ensemble du corps': 'Alliage d\u2019aluminium moulé à haute résistance',
      'Tube de voie hydraulique': 'Acier inoxydable 304',
      'Boîtier de capteur': 'ABS technique haute résistance anti-UV IP66',
      'Tête de buse': 'Acier inoxydable 316',
    },
    image: '/assets/products/auto-tracking-jet-suppression-cannon-zdms.webp',
    seoTitle: 'Canon d\u2019Eau ZDMS à Suivi Automatique | Détection IR/UV',
    seoDescription:
      "Canon anti-incendie intelligent ZDMS à suivi automatique. Détection de flamme IR/UV multi-bandes, extinction autonome rapide. Meilleur choix pour la protection intérieure de grands espaces.",
    faqs: [
      {
        question: 'Quelle zone un canon ZDMS peut-il surveiller et en combien de temps détecte-t-il l\u2019incendie ?',
        answer:
          "De la détection de l\u2019allumage jusqu\u2019au jet orienté, la séquence s\u2019achève en moins de 30 secondes : les capteurs infrarouge et ultraviolet multi-bandes localisent la flamme, la tourelle la suit et la buse projette l\u2019eau automatiquement, sur un rayon de surveillance de 40 à 65 m.",
      },
      {
        question: 'Quels capteurs utilise le canon à suivi automatique ZDMS ?',
        answer:
          "Il combine la détection infrarouge multi-bandes et la détection ultraviolette de la flamme, ce qui réduit les fausses alarmes dues à la soudure, à l\u2019éclairage ou au rayonnement solaire par rapport aux capteurs à bande unique. Le boîtier de capteur est en ABS résistant aux UV, classé IP66.",
      },
      {
        question: 'Quel débit et quelle pression de fonctionnement offre le ZDMS ?',
        answer:
          "Rotation horizontale complète de 360° et plage verticale de -90° à +30°, avec des débits nominaux de 5/10/20/30 L/s (sur mesure jusqu\u2019à 150 L/s) à 0,6–0,8 MPa.",
      },
      {
        question: 'Un canon ZDMS anti-explosion est-il disponible pour les sites pétrochimiques ?',
        answer:
          "Oui — une version anti-explosion Ex de II BT4 Gb est disponible pour les parcs de réservoirs, les usines et autres zones à risque, avec les mêmes performances de détection et de suivi.",
      },
    ],
  },
  'deluge-alarm-valve-zsfm': {
    id: '13',
    slug: 'deluge-alarm-valve-zsfm',
    name: 'Groupe de Vanne à Déluge et Alarme (Série ZSFM)',
    category: "Gicleurs et Vannes d'Alarme",
    description:
      "La vanne à déluge et alarme ZSFM est un clapet à membrane. Elle s'appuie sur l'équilibre de pression de la membrane pour contrôler l'ouverture de la vanne et peut être intégrée à divers réseaux de détection incendie pour former des systèmes complets de déluge ou de projection d'eau.",
    features: [
      "Conception d'équilibre de chambre de pression haute précision pour une ouverture instantanée",
      'Construction en fonte ductile robuste garantissant une tenue en pression prolongée',
      'Inclut une cloche d\u2019alarme hydraulique et un interrupteur de retour de pression',
      'Supporte la déclenchement à distance mécanique, pneumatique ou électrique',
    ],
    specs: {
      'Gammes de taille': 'DN50 - DN300',
      'Pression de service': '1.6 MPa',
      'Pression d\u2019essai': '3.2 MPa (corps 6.4 MPa)',
      'Électrovanne': 'DC24V / 0.5A',
      'Type de raccordement': 'À bride / À gorge',
    },
    materials: {
      'Corps de vanne principal': 'Fonte ductile (QT450-10)',
      'Membrane/joint': 'Caoutchouc NBR renforcé de fils de nylon',
      'Pilote électromagnétique': 'Laiton massif / Acier inoxydable 304',
      'Tuyaux et garnitures': 'Acier inoxydable / Laiton',
    },
    image: '/assets/products/deluge-alarm-valve-zsfm.webp',
    seoTitle: 'Vanne à Déluge ZSFM DN50-DN300 PN16',
    seoDescription:
      'Vanne à déluge et alarme à membrane ZSFM, DN50-DN300 PN16, électrovanne DC24V. Corps en fonte ductile avec cloche d\u2019alarme et pressostat. Devis usine sur demande.',
    faqs: [
      {
        question: 'Comment la vanne à déluge et alarme ZSFM garde-t-elle le système fermé jusqu\u2019à la détection d\u2019un incendie ?',
        answer:
          "Le ZSFM est une vanne à membrane qui reste fermée sous la pression du système grâce à l'équilibre de pression de la membrane. Lorsque le réseau de détection incendie envoie un signal, la pression de la chambre à membrane est libérée et la vanne s'ouvre instantanément, inondant chaque buse ouverte de la zone de déluge.",
      },
      {
        question: 'Quelles gammes de tailles et classes de pression couvre le ZSFM ?',
        answer:
          'Le groupe de vanne à déluge et alarme ZSFM couvre DN50 à DN300 avec une pression de service de 1.6 MPa et une pression d\u2019essai de 3.2 MPa (essai du corps 6.4 MPa). Les raccordements à bride et à gorge sont tous disponibles.',
      },
      {
        question: 'Quels déclenchements à distance peuvent ouvrir la vanne à déluge ZSFM ?',
        answer:
          'La vanne supporte les déclenchements à distance mécaniques, pneumatiques et électriques. L\u2019option électrique utilise un pilote électromagnétique DC24V / 0.5A, de sorte que le groupe de vanne peut être intégré à la plupart des panneaux de contrôle d\u2019alarme incendie.',
      },
      {
        question: 'Que comprend le groupe complet de vanne à déluge et alarme ZSFM ?',
        answer:
          "Le groupe comprend la vanne principale en fonte ductile (QT450-10) avec membrane NBR renforcée de nylon, une cloche d'alarme hydraulique, un interrupteur de retour de pression et des garnitures en acier inoxydable ou laiton pour les connexions d'alarme et de rejet.",
      },
    ],
  },
  'pre-action-alarm-system-zsfy': {
    id: '14',
    slug: 'pre-action-alarm-system-zsfy',
    name: 'Système de Déluge à Pré-action et Alarme (Série ZSFY)',
    category: "Gicleurs et Vannes d'Alarme",
    description:
      "La vanne à pré-action ZSFY combine les avantages des systèmes de gicleurs à mouillé et à sec. Les canalisations restent remplies d'air en état normal pour éviter toute fuite accidentelle d'eau et sont inondées rapidement en eau dès la détection d'un incendie.",
    features: [
      "Déclenchement double signal : requiert à la fois le signal d'alarme incendie et le pressostat pour éviter tout rejet accidentel",
      'Parfaite pour les salles très sensibles : bibliothèques, archives, laboratoires d\u2019informatique et musées',
      'Appareils de maintien de pression et d\u2019alimentation en air intégrés',
      'Accessoires en laiton et acier inoxydable anticorrosion',
    ],
    specs: {
      'Gammes de taille': 'DN80 - DN250',
      'Pression nominale': '1.6 MPa',
      'Pression d\u2019air côté système': '0.03 - 0.05 MPa',
      'Mode de déclenchement': 'Pneumatique / Électrique / Manuel',
      'Matériau du corps': 'Fonte ductile QT450',
    },
    materials: {
      'Corps et bonnet': 'Fonte ductile (QT450-10)',
      'Battant interne': 'Bronze / Fonte sphéroïdale recouverte EPDM',
      'Chambre à membrane': 'NBR renforcé',
      'Kit de garnitures': 'Tuyauterie galvanisée / Alliages de cuivre',
    },
    image: '/assets/products/pre-action-alarm-system-zsfy.jpg',
    seoTitle: 'Système de Vanne à Alarme ZSFY à Pré-action | Double Protection',
    seoDescription:
      'Groupe de vanne à gicleurs ZSFY à pré-action haute sécurité. Conception de double déclenchement fiable. Empêche les dégâts des eaux dans musées, archives et data centers.',
    faqs: [
      {
        question: 'Pourquoi choisir un système à pré-action pour data centers, archives ou musées ?',
        answer:
          "La tuyauterie reste remplie d\u2019air (0,03 à 0,05 MPa) en conditions normales, si bien qu\u2019une rupture accidentelle ne peut noyer les biens protégés. L\u2019eau n\u2019est libérée que lorsque le déclenchement à double signal confirme l\u2019incendie.",
      },
      {
        question: 'Comment le déclenchement à double signal du ZSFY empêche-t-il un écoulement accidentel ?',
        answer:
          "La vanne exige deux signaux indépendants — un signal d\u2019alarme incendie et une variation de pression — avant que la chambre à membrane ne se libère et n\u2019inonde le système. Un seul dysfonctionnement ne peut déclencher l\u2019ouverture.",
      },
      {
        question: 'Quelles tailles et quelles options de déclenchement sont disponibles pour le ZSFY ?',
        answer:
          "De DN80 à DN250 à 1,6 MPa, avec déclenchement pneumatique, électrique ou manuel, et dispositifs intégrés de maintien de pression et de réapprovisionnement en air dans le groupe de vannes.",
      },
      {
        question: 'Quels matériaux rendent le ZSFY résistant à la corrosion ?',
        answer:
          "Corps et bonnet en fonte ductile QT450, battant en bronze ou en fonte à graphite sphéroïdal habillé EPDM, chambre à membrane en caoutchouc NBR renforcé, ainsi que des accessoires en laiton et en acier inoxydable sur l\u2019ensemble de la garniture.",
      },
    ],
  },
  'suction-vortex-preventer-en12845': {
    id: '15',
    slug: 'suction-vortex-preventer-en12845',
    name: 'Dispositif Anti-Vortex d\u2019Aspiration en Acier Inoxydable Austénitique',
    category: 'Sécurité Hydraulique',
    description:
      'Conçu strictement selon la norme européenne EN12845 et la norme chinoise GB50974-2014. Installé à l\u2019entrée d\u2019aspiration des pompes à l\u2019intérieur des réservoirs ou citernes pour éliminer les vortex liquides et empêcher l\u2019entraînement d\u2019air.',
    features: [
      'Empêche l\u2019entraînement d\u2019air pour éliminer la cavitation et les dommages mécaniques de la pompe',
      "Permet de vidanger entièrement le volume de la citerne jusqu'à des profondeurs très faibles (100mm)",
      'Fabriqué en acier inoxydable austénitique de qualité supérieure (SS304/SS316) pour une performance anticorrosion supérieure',
      'Conception extrêmement solide et simple, sans entretien',
    ],
    specs: {
      'Gammes de taille': 'DN50 - DN1000',
      'Matériau': 'SS304 / SS316',
      'Norme de conformité': 'EN12845 / GB50974-2014',
      "Exigence sanitaire": 'GB/T17219',
    },
    materials: {
      'Plaque anti-vortex': 'Acier inoxydable austénitique 304 / 316',
      'Pieds de support internes': 'Acier inoxydable 304',
      'Fixations et boulons': 'Acier inoxydable 304',
    },
    image: '/assets/products/suction-vortex-preventer-en12845.webp',
    seoTitle: 'Dispositif Anti-Vortex d\u2019Aspiration EN12845 | SS304/SS316',
    seoDescription:
      'Dispositif anti-vortex d\u2019aspiration EN12845 en SS304/SS316 haute efficacité. Élimine les vortex, protège les pompes de la cavitation, augmente l\u2019utilisation de la capacité des citernes.',
  },
  'anti-pollution-backflow-preventer-hs41x': {
    id: '16',
    slug: 'anti-pollution-backflow-preventer-hs41x',
    name: 'Dispositif Anti-Retour Anti-Pollution (HS41X-16)',
    category: 'Sécurité Hydraulique',
    description:
      "Le dispositif anti-retour anti-pollution HS41X est une vanne de sécurité de l'eau avancée composée de deux clapets anti-retour en série et d'une cavité de drainage. Il empêche strictement le reflux du fluide pour protéger les réseaux d'eau potable contre la pollution.",
    features: [
      'Deux clapets anti-retour indépendants garantissent une coupure absolue du reflux',
      'La vanne de vidange automatique centrale évacue immédiatement l\u2019eau si la pression amont baisse',
      'Conception à faible perte de charge avec canalisations fluides optimales',
      "L'encapsulation du siège en EPDM assure une longue durée de vie et une étanchéité complète",
    ],
    specs: {
      'Diamètre nominal': 'DN50 - DN600',
      'Pression nominale': '1.0 MPa / 1.6 MPa / 2.5 MPa',
      'Matériau du corps': 'Fonte ductile / Acier fondu / Acier inoxydable',
      'Fluide applicable': 'Eau potable, eau de boisson',
      'Température de service': '0°C à 80°C',
    },
    materials: {
      'Corps et bonnet': 'Fonte ductile QT450',
      'Disques de clapet anti-retour': 'Acier inoxydable 304 / recouvert EPDM',
      'Vanne de vidange intermédiaire': 'Laiton massif / Acier inoxydable 304',
      'Ressorts principaux': 'Acier inoxydable 304',
    },
    image: '/assets/products/anti-pollution-backflow-preventer-hs41x.webp',
    seoTitle: 'Dispositif Anti-Retour HS41X Anti-Pollution | Eau Potable',
    seoDescription:
      'Dispositif anti-retour anti-pollution HS41X durable. Double clapet anti-retour avec cavité de drainage automatique intermédiaire. Garantit la sécurité du réseau d\u2019eau potable.',
  },
  'foam-fire-hydrant-cabinet-psg30': {
    id: '17',
    slug: 'foam-fire-hydrant-cabinet-psg30',
    name: 'Armoire à Hydrant à Mousse (Série PSG30)',
    category: "Armoires d'Incendie et Interfaces",
    description:
      "Une unité de lutte incendie à mousse basse expansion, hautement efficace et consolidée. Elle regroupe un réservoir, un proportionneur de concentré de mousse, un enrouleur de flexible et une buse à mousse spécialisée dans une armoire murale. Exceptionnellement puissante pour les feux de carburants, produits chimiques et solvants.",
    features: [
      'Génère et projette une mousse basse expansion épaisse pour étouffer les feux chimiques et les feux d\u2019hydrocarbures',
      "La structure d'armoire consolidée permet une mise en œuvre immédiate en cas d'urgence",
      'Équipée d\u2019un proportionneur de mousse en laiton anticorrosion',
      'Enrouleur de flexible très souple avec longueurs personnalisables jusqu\u2019à 30 mètres',
    ],
    specs: {
      'Modèle': 'PSG30',
      'Concentré de mousse': '3% AFFF (mousse aqueuse filmogène)',
      'Pression de service': '0.5 - 0.8 MPa',
      "Portée du jet": '≥6 mètres',
      'Expansion de la mousse': '≥4.5',
    },
    materials: {
      'Boîtier d\u2019armoire': 'Acier carbone laminé à froid avec revêtement poudre rouge anti-UV',
      'Réservoir de mousse': 'Polyéthylène haute densité / Fibre de verre',
      'Proportionneur et buse': 'Alliage de laiton massif / Aluminium à haute résistance',
      'Flexible': 'Caoutchouc EPDM renforcé de polyester haute ténacité',
    },
    image: '/assets/products/foam-fire-hydrant-cabinet-psg30.webp',
    seoTitle: 'Armoire à Hydrant à Mousse PSG30 | 3% AFFF',
    seoDescription:
      'Armoire à hydrant à mousse PSG30 avec réservoir 3% AFFF, efficace contre les feux de classe B (carburants et produits chimiques). Fourniture export depuis Wanlian Fluid, Chine.',
    faqs: [
      {
        question: 'Qu\u2019est-ce que l\u2019armoire à hydrant à mousse PSG30 ?',
        answer:
          "Le PSG30 est une unité de lutte incendie à mousse basse expansion murale qui regroupe un réservoir de concentré de mousse, un proportionneur, un enrouleur de flexible et une buse à mousse dans une seule armoire, offrant une réponse immédiate aux feux de carburants, de produits chimiques et de solvants.",
      },
      {
        question: 'Quel type de mousse et quelles performances utilise le PSG30 ?',
        answer:
          "L'armoire fonctionne avec un concentré de mousse 3% AFFF (mousse aqueuse filmogène), avec un ratio d'expansion d'au moins 4,5, une portée du jet d'au moins 6 mètres et une pression de service de 0,5 à 0,8 MPa.",
      },
      {
        question: 'Contre quels types de feux le PSG30 est-il conçu ?',
        answer:
          "Il est conçu pour les feux de classe B impliquant carburants, produits chimiques et solvants, où la mousse étouffe le feu plus rapidement que l'eau seule.",
      },
      {
        question: 'Quelle est la longueur de l\u2019enrouleur du PSG30 et quels matériaux sont utilisés ?',
        answer:
          "L'enrouleur de flexible est souple et peut être personnalisé jusqu'à 30 mètres. Le boîtier est en acier carbone laminé à froid avec revêtement poudre rouge anti-UV ; le réservoir de mousse est en HDPE ou fibre de verre, et le proportionneur et la buse en alliage de laiton ou aluminium à haute résistance.",
      },
    ],
  },
  'manual-fire-water-cannon-ps': {
    id: '18',
    slug: 'manual-fire-water-cannon-ps',
    name: 'Canon d\u2019Eau Anti-Incendie Manuel (Série PS)',
    category: "Canons d'Incendie",
    description:
      "Moniteur d'eau anti-incendie manuel à haute capacité conçu pour délivrer de grands volumes d'eau ou de mousse sur de longues portées. Très adapté aux sites pétrochimiques, parcs de réservoirs à huile, entrepôts, ports et camions-pompe.",
    features: [
      "Prend en charge à la fois le jet droit à forte concentration et le pulvérisation large en brouillard",
      'La manœuvre entièrement manuelle par levier offre un pointage fluide et rapide',
      "Équipé d'un mécanisme d'engrenage à auto-verrouillage sécurisé permettant la projection sans surveillance",
      'Construction en alliage d\u2019aluminium ou bronze très durable résistant aux intempéries marines sévères',
    ],
    specs: {
      'Gamme de débit': '20 L/S - 200 L/S',
      'Portée maximale du jet': '50 - 110 mètres',
      'Pression nominale': '0.8 - 1.2 MPa',
      'Amplitude de rotation': 'Horizontal 360°, Vertical -30° à +70°',
      'Bride d\u2019entrée': 'DN100 / DN150 / DN200',
    },
    materials: {
      'Corps du moniteur': 'Alliage d\u2019aluminium T6 anodisé dur / Bronze',
      'Raccordements pivotants': 'Roulements à billes en acier inoxydable double rangée',
      'Poignées de verrouillage': 'Acier inoxydable / Laiton',
      'Bout de buse': 'Alliage durci de précision',
    },
    image: '/assets/products/manual-fire-water-cannon-ps.webp',
    seoTitle: 'Moniteur d\u2019Eau Manuel Série PS | Grande Portée',
    seoDescription:
      'Canon d\u2019eau anti-incendie manuel PS à grand débit. Supporte la projection d\u2019eau et de mousse. Construction robuste, adapté aux stockages industriels et sites pétrochimiques.',
    faqs: [
      {
        question: 'Quelle portée du jet le moniteur d\u2019eau manuel PS atteint-il ?',
        answer:
          "De 50 à 110 m de portée du jet selon le débit sélectionné (20–200 L/s) et la pression d\u2019entrée (0,8–1,2 MPa), avec un jet droit à forte concentration et un pulvérisage en brouillard large disponibles.",
      },
      {
        question: 'Le moniteur PS peut-il appliquer de la mousse en plus de l\u2019eau ?',
        answer:
          "Oui — il est conçu pour l\u2019application de l\u2019eau comme de la mousse, raison pour laquelle il est utilisé dans les parcs de réservoirs, les ports et les zones pétrochimiques pour la protection des feux de classe B.",
      },
      {
        question: 'Comment viser et maintenir en position le moniteur PS ?',
        answer:
          "Un levier manuel offre un réglage de visée fluide et rapide, et un mécanisme d\u2019engrenage auto-bloquant maintient la position choisie, si bien que le canon peut projeter sans surveillance une fois réglé.",
      },
      {
        question: 'Quelles brides d\u2019entrée sont disponibles pour la série PS ?',
        answer:
          "Brides d\u2019entrée DN100, DN150 et DN200, avec une rotation horizontale de 360° et une plage verticale de -30° à +70°, en alliage d\u2019aluminium T6 anodisé durci ou en bronze pour la résistance aux conditions marines.",
      },
    ],
  },
  'water-flow-indicator-zsjz': {
    id: '19',
    slug: 'water-flow-indicator-zsjz',
    name: 'Signalisateur de Débit d\u2019Eau à Palette (Série ZSJZ)',
    category: "Gicleurs et Vannes d'Alarme",
    description:
      "Le signalisateur de débit ZSJZ est un élément critique des réseaux de gicleurs à mouillé automatiques. Installé sur la canalisation d'alimentation de branche, il détecte le débit d'eau et convertit l'énergie cinétique de l'eau en alertes de signal électrique.",
    features: [
      'Micro-interrupteur flexible à forte conductivité électrique et longue durée de vie',
      "Circuit de retard ajustable intégré (2-60 secondes) pour filtrer les fluctuations du coup de bélier et éviter les fausses alarmes",
      'Supporte les installations à collier (montage collier), filetées ou à bride/à gorge',
      'La palette se plie en douceur sans obstruer la canalisation principale d\u2019eau',
    ],
    specs: {
      'Gammes de taille': 'DN50 - DN200',
      'Pression de service': '1.2 MPa / 1.6 MPa',
      'Sensibilité de l\u2019interrupteur': '15 < Q < 37.5 L/min (seuil de déclenchement)',
      'Signal de sortie': 'DC24V / 3A (contacts secs SPDT)',
    },
    materials: {
      'Boîtier de collier': 'Fonte ductile (QT450-10)',
      'Palette': 'Polymère flexible / Acier inoxydable',
      'Boîtier électrique': 'ABS technique ignifugé IP54',
      'Circuit de minuterie de retard': 'PCB à état solide scellé',
    },
    image: '/assets/products/water-flow-indicator-zsjz.png',
    seoTitle: 'Signalisateur de Débit ZSJZ à Palette | Alarme Gicleurs',
    seoDescription:
      'Signalisateur de débit d\u2019eau anti-incendie ZSJZ à collier et à bride. Circuit de retard temporel ajustable. Détection très sensible pour réseaux de gicleurs à mouillé automatiques.',
  },
  'telescopic-resilient-seat-gate-valve-z41x-t': {
    id: '20',
    slug: 'telescopic-resilient-seat-gate-valve-z41x-t',
    name: 'Vanne à Boisseau à Siège Élastomère Télescopique',
    category: 'Vannes et Pièces',
    description:
      "Combine la fermeture étanche parfaite d'une vanne à boisseau à siège élastomère avec un manchon télescopique de dilatation intégré. Parfaite pour les lignes d'approvisionnement en eau, anti-incendie et CVC, permettant une installation facile, un réglage de la dilatation thermique des canalisations et un remplacement rapide de la vanne.",
    features: [
      'Double fonction : fermeture du fluide étanche parfaite + compensation de dilatation de la tuyauterie',
      'Clapet entièrement encapsulé en caoutchouc EPDM pour une fuite nulle',
      "Le joint de dilatation télescopique simplifie l'installation et le remplacement de la vanne",
      'Revêtement époxy non toxique à l\u2019intérieur et à l\u2019extérieur',
    ],
    specs: {
      'Diamètre nominal': 'DN50 - DN600',
      'Pression nominale': '1.0 MPa / 1.6 MPa',
      'Course télescopique': '± 25mm (compensation de dilatation)',
      'Matériau du corps': 'Fonte ductile QT450',
      'Fluide applicable': 'Eau, eaux usées, eau anti-incendie',
    },
    materials: {
      'Corps et bonnet principaux': 'Fonte ductile (QT450-10)',
      'Manchon télescopique': 'Acier carbone Q235 / Fonte ductile',
      'Cœur du clapet': 'Fonte ductile QT450 entièrement recouvert de caoutchouc EPDM',
      'Garnitures d\u2019étanchéité': 'NBR / Laiton / Acier inoxydable',
    },
    image: '/assets/products/telescopic-resilient-seat-gate-valve-z41x-t.webp',
    seoTitle: 'Vanne à Boisseau Z41X-T Télescopique | Prix Usine',
    seoDescription:
      'Vanne à boisseau à siège élastomère télescopique intégrée. Clapet entièrement encapsulé EPDM, fonte ductile QT450. Idéale pour les canalisations nécessitant une compensation de dilatation.',
    faqs: [
      {
        question: 'Quelle est la fonction du manchon télescopique intégré ?',
        answer:
          "Il assure une compensation de dilatation de ±25 mm en absorbant les mouvements thermiques et les tassements de la canalisation, sans mettre le corps de vanne en contrainte — et il permet de remplacer la vanne sans découper la conduite.",
      },
      {
        question: 'En quoi le Z41X-T diffère-t-il d\u2019une vanne à boisseau à siège élastomère classique ?',
        answer:
          "Il combine étanchéité parfaite (sans bulle) et compensation de dilatation de la canalisation dans un seul élément : vous installez une seule vanne au lieu d\u2019une vanne associée à un joint de dilatation séparé.",
      },
      {
        question: 'Quelles tailles et quelles pressions sont disponibles pour la vanne à boisseau télescopique ?',
        answer:
          "De DN50 à DN600 à 1,0 ou 1,6 MPa, en fonte ductile QT450 avec un obturateur entièrement encapsulé EPDM, pour les lignes d\u2019approvisionnement en eau, d\u2019incendie et HVAC.",
      },
      {
        question: 'Quels fluides conviennent au Z41X-T ?',
        answer:
          "Eau, eaux usées et eau d\u2019incendie. Le revêtement époxy non toxique à l\u2019intérieur comme à l\u2019extérieur le maintient apte au service de l\u2019eau potable comme aux lignes d\u2019assainissement.",
      },
    ],
  },
  'adjustable-pressure-reducing-valve-500x': {
    id: '21',
    slug: 'adjustable-pressure-reducing-valve-500x',
    name: 'Réducteur de Pression Hydraulique Réglable (500X)',
    category: 'Sécurité Hydraulique',
    description:
      "Réducteur de pression hydraulique réglable Wanlian 500X. Réduit automatiquement une pression d'entrée plus élevée à une pression aval constante et plus basse, quel que soient les fluctuations de débit ou les variations de pression d'entrée.",
    features: [
      'Maintient automatiquement une pression aval stable via le système pilote hydraulique',
      'Totalement autopilotée, aucune alimentation électrique externe requise',
      'Conception de fermeture lente et fluide évite les surpressions et le coup de bélier',
      'Corps en fonte ductile robuste avec pilote et raccords en laiton anticorrosion',
    ],
    specs: {
      'Diamètre nominal': 'DN20 - DN600 (3/4" to 24")',
      'Régulation de pression': '0.1 MPa à 1.6 MPa',
      'Pression nominale': '1.0 MPa / 1.6 MPa / 2.5 MPa',
      'Norme de conception': 'ANSI / JIS / GB',
      'Matériau du corps': 'Fonte ductile (QT450-10)',
    },
    materials: {
      'Corps de vanne principal': 'Fonte ductile (QT450-10)',
      'Membrane': 'EPDM haute élasticité renforcé de nylon',
      'Tige interne': 'Acier inoxydable 304',
      'Pilote réglable': 'Alliage de laiton forgé massif',
      'Tubes et raccords': 'Cuivre / Acier inoxydable 304',
    },
    image: '/assets/products/pressure-reducing-valve-500x-dn50.webp',
    seoTitle: 'Réducteur de Pression Hydraulique 500X | Alimentation en Eau',
    seoDescription:
      'Réducteur de pression hydraulique autopiloté 500X industriel. Construction en fonte ductile haute durabilité. Conceptions OEM et sur mesure disponibles.',
    faqs: [
      {
        question: 'Le réducteur de pression 500X a-t-il besoin d\u2019électricité ?',
        answer:
          "Non. Il est entièrement auto-régulé : un système pilote hydraulique perçoit la pression en aval et module la vanne principale, de sorte qu\u2019il fonctionne partout où existe une pression de réseau — sans alimentation externe ni système de commande.",
      },
      {
        question: 'Quelle plage de pression en aval le 500X peut-il maintenir ?',
        answer:
          "La pression aval réglée est ajustable de 0,1 MPa à 1,6 MPa via l\u2019ensemble pilote, en maintenant une valeur stable malgré les variations de débit ou de pression d\u2019entrée, sur les classes d\u2019entrée PN10, PN16 et PN25.",
      },
      {
        question: 'Quelles tailles sont disponibles pour le 500X ?',
        answer:
          "De DN20 à DN600 (3/4 pouce à 24 pouces) en fonte ductile QT450-10, avec membrane EPDM renforcée de nylon, tige interne en acier inoxydable 304 et pilote en laiton forgé massif — conçu selon ANSI, JIS ou GB selon vos besoins.",
      },
      {
        question: 'Comment le 500X empêche-t-il le coup de bélier ?',
        answer:
          "La vanne principale se ferme lentement et en douceur grâce à la membrane pilotée, évitant les surpressions brutales qu\u2019une fermeture rapide peut créer dans les longues canalisations d\u2019eau.",
      },
    ],
  },
  'fire-hydrant-hose-coupling-adapter-hs': {
    id: '22',
    slug: 'fire-hydrant-hose-coupling-adapter-hs',
    name: 'Adaptateur de Raccord de Flexible d\u2019Hydrant en Aluminium (Série HS)',
    category: "Armoires d'Incendie et Interfaces",
    description:
      "Adaptateurs de raccord de flexible anti-incendie en aluminium haute résistance de la série HS Wanlian. Conçus avec des filetages internes auto-étanches pour offrir une connexion rapide et sans fuite entre hydrants, flexibles et buses.",
    features: [
      'Usiné en alliage d\u2019aluminium léger et haute résistance',
      'Structure de raccordement rapide flexible permettant le couplage immédiat du flexible',
      'Les joints en caoutchouc auto-étanches durables empêchent les fuites même sous forte vibration',
      'Filetages internes/externes standards pour compatibilité avec les réseaux anti-incendie mondiaux',
    ],
    specs: {
      'Gammes de taille': 'DN50 / DN65 (2" to 2.5")',
      'Filetage de raccordement': 'Filetage interne 2,5 pouces',
      'Pression de service': '1.6 MPa (232 PSI)',
      'Matériau': 'Alliage d\u2019aluminium anodisé',
      'Norme': 'GB12514 / Norme usine',
    },
    materials: {
      'Corps du raccord': 'Alliage d\u2019aluminium anodisé dur de grade T6',
      'Collier de verrouillage': 'Alliage d\u2019aluminium anodisé / Zinc',
      'Joint de filetage interne': 'Caoutchouc auto-étanche EPDM',
      'Bague de fixation': 'Acier inoxydable',
    },
    image: '/assets/products/fire-hydrant-hose-coupling-adapter-hs.jpg',
    seoTitle: 'Adaptateur de Raccord de Flexible HS | Prix Usine Aluminium',
    seoDescription:
      'Adaptateurs de raccord de flexible d\u2019hydrant en alliage d\u2019aluminium haute durabilité. Connexion rapide à verrouillage, étanchéité fiable, compatible avec les filetages anti-incendie internationaux.',
  },
};

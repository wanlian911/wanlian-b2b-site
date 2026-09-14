// products.fr.ts part 5 - slugs 44-46 (nouveaux : hydrant sous-terrain, clapet d'alarme sec, gicleur ESFR)
import type { Product } from "../products";

export const productsFrPart5: Record<string, Product> = {
  "underground-fire-hydrant-sa": {
    id: "44",
    slug: "underground-fire-hydrant-sa",
    name: "Hydrant Incendie Souterrain (Série SA)",
    category: "Hydrants et Connexions de Pompe",
    description: "L'hydrant incendie souterrain SA de Wanlian est installé à niveau du sol, ce qui garde le corps protégé sous terre contre le gel hivernal et les impacts de véhicules. Il offre deux sorties KWS65 (65 mm ou combinaison 65/80 mm) pour les camions-pompiers et les lignes de tuyaux, ce qui en fait le choix standard pour les réseaux de protection incendie municipaux et industriels en climat froid.",
    features: [
      "Installation souterraine à niveau du sol protégeant le corps du froid et des chocs",
      "Deux sorties KWS65 (options 65/80 mm) avec bouchons retenus par chaîne pour un branchement rapide",
      "Corps en fonte ductile haute résistance avec revêtement poudre rouge anticorrosion complet",
      "Vanne inférieure à siège en laiton pour une fermeture fiable et un entretien réduit",
      "Variante anti-gel avec drainage disponible pour les régions très froides"
    ],
    specs: {
      "Diamètre nominal d'entrée": "DN100 / DN150",
      "Configuration des sorties": "2 x 65 mm (KWS65), option 65 + 80 mm",
      "Pression nominale": "1,6 MPa (PN16)",
      "Hauteur installée": "0,71 - 0,92 m (selon modèle, avec coude)",
      "Matériau du corps": "Fonte ductile QT450",
      "Application": "Voiries municipales, réseaux d'incendie extérieur en climat froid"
    },
    materials: {
      "Corps de l'hydrant": "Fonte ductile (QT450)",
      "Sorties et bonnette": "Fonte ductile, revêtement poudre rouge",
      "Vanne inférieure": "Siège laiton / joint EPDM",
      "Bouchons": "Fonte / alliage de zinc avec chaîne de sécurité"
    },
    image: "/assets/products/underground-fire-hydrant-sa.webp",
    seoTitle: "Hydrant Souterrain SA DN100/DN150 | Anti-Gel",
    seoDescription: "Hydrant souterrain série SA avec deux sorties KWS65, corps en fonte ductile, 1,6 MPa. Installation à niveau du sol contre le gel pour réseaux municipaux et industriels. Direct usine Wanlian.",
    faqs: [
      { question: "Quel est l'hydrant souterrain SA par rapport à un hydrant surélevé (SS) ?", answer: "L'hydrant SA est installé presque entièrement sous le niveau : seules la bonnette et les bouchons des sorties dépassent du sol, ce qui protège le corps du gel hivernal et des chocs de véhicules. L'hydrant surélevé SS se dresse entièrement au-dessus du sol. Choisissez le SA pour les climats froids et les voiries à fort trafic." },
      { question: "Quelles tailles de sorties propose l'hydrant souterrain SA ?", answer: "Le standard est deux sorties KWS de 65 mm, avec une combinaison 65 + 80 mm disponible sur les modèles DN150, compatible avec la plupart des filetages internationaux de raccords de camions-pompiers (KWS / BS336 / NIST sur demande)." },
      { question: "Quelle est la hauteur installée de l'hydrant SA ?", answer: "La hauteur installée, coude compris, va d'environ 0,71 m sur le SA100/65 de petit corps jusqu'à 0,92 m sur les modèles SA150, ce qui permet de l'adapter à la courbure locale de la voirie et à la profondeur de gel." },
      { question: "L'hydrant SA va-t-il geler en hiver ?", answer: "Comme le corps de la vanne reste dans le sol, l'hydrant SA est bien plus résistant au gel que les types surélevés ; une variante anti-gel avec drainage est disponible pour les régions très froides afin de garantir que la colonne se vide complètement après chaque utilisation." }
    ]
  },
  "dry-alarm-valve-zsfc": {
    id: "45",
    slug: "dry-alarm-valve-zsfc",
    name: "Clapet d'Alarme Sec (Série ZSFC)",
    category: "Gicleurs et Vannes d'Alarme",
    description: "Le clapet d'alarme sec ZSFC est la vanne de contrôle principale des systèmes de gicleurs à tuyauterie sèche (dry-pipe) et à pré-action. Il reste fermé sous la pression d'air (ou d'azote) sur le côté système tandis que le côté eau reste plein, et s'ouvre automatiquement lorsqu'un gicleur actionné libère l'air du système, laissant l'eau remplir la tuyauterie sèche jusqu'au gicleur en décharge. Idéal pour les bâtiments non chauffés, les entrepôts en climat froid et les systèmes à pré-action.",
    features: [
      "Membrane actionnée par la pression d'air pour un état fermé fiable dans les systèmes secs et à pré-action",
      "Ouverture instantanée dès que l'air du système est libéré par un gicleur actionné",
      "Mécanisme d'alarme intégré avec chambre de retard et cloche d'alarme hydraulique pour une alerte précoce",
      "Corps en fonte ductile haute résistance conçu pour le cycle complet de pression du système sec",
      "Connexions à bride disponibles en DN100 - DN200"
    ],
    specs: {
      "Gamme de tailles": "DN100 / DN150 / DN200 (ZSFC100 / ZSFC150 / ZSFC200)",
      "Pression nominale": "1,6 MPa (PN16)",
      "Côté système": "Air / Azote (0,03 - 0,05 MPa typique)",
      "Type de connexion": "Flangé",
      "Accessoire": "Chambre de retard, cloche d'alarme hydraulique, manomètres"
    },
    materials: {
      "Corps du clapet": "Fonte ductile (QT450)",
      "Clapet / Siège": "Fonte ductile recouverte EPDM / NBR",
      "Chambre de retard": "Fonte / laiton",
      "Cloche d'alarme": "Alliage d'aluminium",
      "Fitting et tuyauteries": "Acier galvanisé / laiton"
    },
    image: "/assets/products/dry-alarm-valve-zsfc.webp",
    seoTitle: "Clapet d'Alarme Sec ZSFC DN100-DN200 | Système Sec de Gicleurs",
    seoDescription: "Clapet d'alarme sec ZSFC pour systèmes à tuyauterie sèche et à pré-action, DN100-DN200, 1,6 MPa, avec chambre de retard et cloche d'alarme hydraulique. Fonte ductile. Direct usine Wanlian.",
    faqs: [
      { question: "Quelle est la différence entre un clapet d'alarme sec et un clapet d'alarme humide (ZSFZ) ?", answer: "Un clapet d'alarme humide protège un système dont les tuyaux sont toujours pleins d'eau. Un clapet d'alarme sec (ZSFC) protège un système à tuyauterie sèche dont le côté eau est plein mais le réseau est maintenu sous pression d'air et vide d'eau, donc il reste fermé jusqu'à ce qu'un gicleur s'ouvre et libère l'air. Utilisez le ZSFC là où l'espace protégé peut geler ou où une double protection à pré-action est requise." },
      { question: "En quelles tailles le clapet d'alarme sec ZSFC est-il disponible ?", answer: "Le ZSFC est disponible en DN100, DN150 et DN200 (modèles ZSFC100 / ZSFC150 / ZSFC200) avec un classement nominal de 1,6 MPa et des connexions à bride, couvrant la majorité des installations à tuyauterie sèche et à pré-action." },
      { question: "Quels dispositifs d'alarme sont fournis avec le clapet ZSFC ?", answer: "Le groupe de clapets comprend la chambre de retard, une cloche d'alarme hydraulique et des manomètres d'entrée et de sortie, afin que l'opérateur puisse vérifier à la fois la pression d'air sur le côté système et la pression d'eau sur le côté alimentation." },
      { question: "Peut-on utiliser le ZSFC dans un système à pré-action ?", answer: "Oui. Le clapet d'alarme sec ZSFC est utilisé comme vanne de contrôle d'eau dans les systèmes à pré-action, travaillant avec un dispositif de contrôle à pré-action, de sorte que l'eau n'entre dans la tuyauterie sèche qu'après activation à la fois du gicleur et du système de détection." }
    ]
  },
  "esfr-sprinkler-head": {
    id: "46",
    slug: "esfr-sprinkler-head",
    name: "Gicleur ESFR de Suppression Précoce à Réponse Rapide",
    category: "Gicleurs et Vannes d'Alarme",
    description: "Les gicleurs ESFR (Early Suppression Fast Response) délivrent un très fort débit d'eau avec une réponse thermique rapide, conçus pour supprimer ou maîtriser les incendies sévères en stockage de grande hauteur, entrepôts et grandes installations industrielles. Un grand déflecteur à fort coefficient de débit et une ampoule en verre de 74 °C offrent la couverture et la vitesse de réaction exigées par NFPA 13 / GB 50084 pour la protection du stockage.",
    features: [
      "Fort taux de décharge (coefficient K selon NFPA 13) pour abattre les incendies de stockage à croissance rapide",
      "Fonctionnement à réponse rapide avec ampoule en verre de 74 °C pour une suppression précoce",
      "Grand déflecteur pour une distribution d'eau large et uniforme sous les rayonnages",
      "Orientations pendante (PY) et verticale (UY) pour les configurations de rayonnage et de stockage ouvert",
      "Construction en laiton forgé durable, conditionnement de 50 pièces par boîte pour les approvisionnements de projets"
    ],
    specs: {
      "Série de modèles": "ESFR-202 / ESFR-242 / ESFR-363, ZSTX-161",
      "Classement de température": "74 °C (165 °F)",
      "Orientation": "Pendante (PY) / Verticale (UY)",
      "Connexion filetée": "R1/2\" / R3/4\" NPT",
      "Conditionnement": "50 pièces / boîte",
      "Application": "Stockage de grande hauteur, entrepôts, installations industrielles"
    },
    materials: {
      "Châssis du corps": "Laiton forgé (H59)",
      "Ampoule en verre": "Verre à réponse rapide de 74 °C",
      "Déflecteur": "Acier inoxydable / alliage de cuivre, schéma de fort débit"
    },
    image: "/assets/products/esfr-sprinkler-head.webp",
    seoTitle: "Gicleur ESFR 74 °C | Stockage de Grande Hauteur et Entrepôts",
    seoDescription: "Gicleur ESFR de suppression précoce à réponse rapide, ampoule en verre de 74 °C, pendante et verticale, fort débit pour la protection incendie des entrepôts et du stockage de grande hauteur. Prix d'usine Wanlian.",
    faqs: [
      { question: "Qu'est-ce qui distingue un gicleur ESFR d'un gicleur incendie standard ?", answer: "Les gicleurs ESFR (early suppression fast response) sont conçus pour projeter un très grand volume d'eau rapidement afin d'abattre les incendies à croissance rapide. Ils utilisent un fort coefficient K et une ampoule à réponse rapide de 74 °C, et sont dimensionnés pour le stockage de grande hauteur et les entrepôts où les gicleurs standard ne suffisent pas." },
      { question: "Quel classement de température utilise ce ESFR ?", answer: "Tous les modèles ESFR de cette gamme utilisent une ampoule en verre à réponse rapide de 74 °C (165 °F), le classement standard pour les environnements de stockage et industriels." },
      { question: "Les gicleurs ESFR sont-ils disponibles en orientations pendante et verticale ?", answer: "Oui. La série est proposée en orientations pendante (PY, vers le bas) et verticale (UY, vers le haut), afin de s'adapter aux configurations de pulvérisation ouverte et aux environnements de rayonnage." },
      { question: "À quoi servent les gicleurs ESFR ?", answer: "Les gicleurs ESFR protègent le stockage de grande hauteur, les entrepôts, les centres de distribution et les grandes installations industrielles, et sont le type de tête de référence lorsque les critères de protection du stockage de NFPA 13 / GB 50084 s'appliquent." }
    ]
  }
};

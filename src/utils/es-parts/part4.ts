// products.es.ts part 4 - slugs 44-46 (nuevos: hidrante subterráneo, válvula de alarma seca, rociador ESFR)
import type { Product } from '../products';

export const productsEsPart4: Record<string, Product> = {
  'underground-fire-hydrant-sa': {
    id: '44',
    slug: 'underground-fire-hydrant-sa',
    name: 'Hidrante Contra Incendios Subterráneo (Serie SA)',
    category: 'Hidrantes y Conexiones de Bomba',
    description: 'El hidrante subterráneo SA de Wanlian se instala a ras de suelo, manteniendo el cuerpo protegido bajo tierra para resistir el congelamiento invernal y los impactos de vehículos. Ofrece dos salidas KWS65 (65mm o combinación 65/80mm) para camiones bombero y líneas de manguera, siendo la opción estándar para redes de protección contra incendios municipales y de parques industriales en climas fríos.',
    features: [
      'Instalación subterránea a ras de suelo que mantiene el cuerpo protegido del frío y de los impactos',
      'Dos salidas KWS65 (opciones 65/80mm) con tapones retenidos por cadena para conexión rápida',
      'Cuerpo de hierro dúctil de alta resistencia con recubrimiento en polvo rojo anticorrosivo completo',
      'Válvula inferior de asiento de latón para un cierre fiable y bajo mantenimiento',
      'Variante antidrenaje/contra congelamiento disponible para regiones muy frías'
    ],
    specs: {
      'Diámetro Nominal de Entrada': 'DN100 / DN150',
      'Configuración de Salidas': '2 x 65mm (KWS65), opción 65 + 80mm',
      'Presión Nominal': '1.6 MPa (PN16)',
      'Altura Instalada': '0.71 - 0.92 m (según modelo, con codo)',
      'Material del Cuerpo': 'Hierro Dúctil QT450',
      'Aplicación': 'Vías municipales, redes de incendio al aire libre en climas fríos'
    },
    materials: {
      'Cuerpo del Hidrante': 'Hierro Dúctil (QT450)',
      'Salidas y Tapa': 'Hierro dúctil, recubierto en polvo rojo',
      'Válvula Inferior': 'Asiento de latón / sello EPDM',
      'Tapones': 'Hierro fundido / aleación de zinc con cadena de seguridad'
    },
    image: '/assets/products/underground-fire-hydrant-sa.webp',
    seoTitle: 'Hidrante Subterráneo SA DN100/DN150 | Anticongelante',
    seoDescription: 'Hidrante subterráneo serie SA con dos salidas KWS65, cuerpo de hierro dúctil, 1.6 MPa. Instalación a ras contra congelamiento para redes municipales e industriales. Directo de fábrica Wanlian.',
    faqs: [
      { question: '¿En qué se diferencia el hidrante subterráneo SA de un hidrante sobre ras (SS)?', answer: 'El hidrante SA se instala casi por completo bajo la rasante: solo la tapa y los tapones de salida sobresalen del suelo, por lo que el cuerpo queda protegido del congelamiento invernal y de los impactos de vehículos. El hidrante sobre ras SS se levanta por completo. Elija SA para climas fríos y vías de alto tránsito.' },
      { question: '¿Qué tamaños de salida ofrece el hidrante subterráneo SA?', answer: 'El estándar son dos salidas KWS de 65mm, con una combinación 65 + 80mm disponible en los modelos DN150, compatible con la mayoría de roscas internacionales de acople de camiones bombero (KWS / BS336 / NIST bajo pedido).' },
      { question: '¿Cuál es la altura instalada del hidrante SA?', answer: 'La altura instalada incluyendo el codo va de unos 0.71m en el SA100/65 de cuerpo pequeño hasta 0.92m en los modelos SA150, de modo que puede ajustarse a la pendiente de la vía y a la profundidad de congelación local.' },
      { question: '¿El hidrante SA se congela en invierno?', answer: 'Como el cuerpo de la válvula permanece en el suelo, el hidrante SA es mucho más resistente al escarcha que los tipos sobre ras, y está disponible en variante antiderrame para regiones muy frías que garantiza que el barril se drene por completo tras cada uso.' }
    ]
  },
  'dry-alarm-valve-zsfc': {
    id: '45',
    slug: 'dry-alarm-valve-zsfc',
    name: 'Válvula de Alarma Tipo Seco (Serie ZSFC)',
    category: 'Rociadores y Válvulas de Alarma',
    description: 'La válvula de alarma tipo seco ZSFC es la válvula de control central de los sistemas de rociadores de tubería seca (dry-pipe) y preacción. Permanece cerrada por la presión de aire (o nitrógeno) en el lado del sistema mientras el lado del agua se mantiene lleno, y se abre automáticamente cuando un rociador activado libera el aire del sistema, dejando que el agua llene la tubería seca y alcance el rociador en descarga. Ideal para edificios no calefactados, almacenes en climas fríos y sistemas de preacción.',
    features: [
      'Clapeta operada por presión de aire para un estado cerrado fiable en sistemas secos y de preacción',
      'Apertura instantánea cuando se libera el aire del sistema por un rociador activado',
      'Mecanismo de alarma integrado con cámara de retardo y gong de alarma hidráulica para aviso temprano',
      'Cuerpo de hierro dúctil de alta resistencia diseñado para el ciclo completo de presión del sistema seco',
      'Conexiones con brida disponibles en DN100 - DN200'
    ],
    specs: {
      'Rango de Tamaño': 'DN100 / DN150 / DN200 (ZSFC100 / ZSFC150 / ZSFC200)',
      'Presión Nominal': '1.6 MPa (PN16)',
      'Lado del Sistema': 'Aire / Nitrógeno (0.03 - 0.05 MPa típico)',
      'Tipo de Conexión': 'Flangulado',
      'Accesorio': 'Cámara de Retardo, Gong de Alarma Hidráulica, Manómetros'
    },
    materials: {
      'Cuerpo de la Válvula': 'Hierro Dúctil (QT450)',
      'Clapeta / Asiento': 'Hierro Dúctil Cubierto EPDM / NBR',
      'Cámara de Retardo': 'Hierro fundido / Latón',
      'Gong de Alarma': 'Aleación de Aluminio',
      'Accesorios y Tuberías': 'Acero galvanizado / Latón'
    },
    image: '/assets/products/dry-alarm-valve-zsfc.webp',
    seoTitle: 'Válvula de Alarma Seca ZSFC DN100-DN200 | Sistema Seco de Rociadores',
    seoDescription: 'Válvula de alarma tipo seco ZSFC para sistemas de tubería seca y preacción, DN100-DN200, 1.6 MPa, con cámara de retardo y gong de alarma hidráulica. Hierro dúctil. Directo de fábrica Wanlian.',
    faqs: [
      { question: '¿Cuál es la diferencia entre una válvula de alarma seca y una de alarma húmeda (ZSFZ)?', answer: 'Una válvula de alarma húmeda protege un sistema cuyas tuberías están siempre llenas de agua. Una válvula de alarma seca (ZSFC) protege un sistema de tubería seca cuyo lado de agua está lleno pero la red se mantiene bajo presión de aire y vacía de agua, por lo que permanece cerrada hasta que un rociador se abre y libera el aire. Úselo donde el espacio protegido pueda congelarse o donde se requiera protección dual de preacción.' },
      { question: '¿En qué tamaños está disponible la válvula de alarma seca ZSFC?', answer: 'La ZSFC está disponible en DN100, DN150 y DN200 (modelos ZSFC100 / ZSFC150 / ZSFC200) con una clasificación nominal de 1.6 MPa y conexiones flanguladas, cubriendo la mayoría de instalaciones de tubería seca y preacción.' },
      { question: '¿Qué dispositivos de alarma incluye la válvula ZSFC?', answer: 'El grupo de válvulas incluye la cámara de retardo, un gong de alarma hidráulica y manómetros de entrada y salida, de modo que el operador pueda confirmar a la vez la presión de aire en el lado del sistema y la presión de agua en el lado de alimentación.' },
      { question: '¿Se puede usar la ZSFC en un sistema de preacción?', answer: 'Sí. La válvula de alarma seca ZSFC se usa como válvula de control de agua en los sistemas de preacción, trabajando con un dispositivo de control de preacción, de modo que el agua solo entra en la tubería seca después de que actúen tanto el rociador como el sistema de detección.' }
    ]
  },
  'esfr-sprinkler-head': {
    id: '46',
    slug: 'esfr-sprinkler-head',
    name: 'Rociador ESFR de Respuesta Rápida de Supresión Temprana',
    category: 'Rociadores y Válvulas de Alarma',
    description: 'Los rociadores ESFR (Early Suppression Fast Response) entregan un muy alto caudal de agua con respuesta térmica rápida, diseñados para suprimir o controlar incendios severos en almacenamiento de gran altura, almacenes y grandes instalaciones industriales. Un deflector grande de ingeniería con alto coeficiente de flujo y un bulbo de vidrio de 74°C ofrecen la cobertura y la velocidad de reacción requeridas por NFPA 13 / GB 50084 para la protección de almacenamiento.',
    features: [
      'Alta tasa de descarga (coeficiente K según NFPA 13) para abatir incendios de almacenamiento de crecimiento rápido',
      'Operación de respuesta rápida con bulbo de vidrio de 74°C para supresión temprana',
      'Grande deflector de ingeniería para una distribución amplia y uniforme de agua bajo estanterías',
      'Orientaciones suspendidas (PY) y verticales (UY) para configuraciones de estantería y almacenamiento abierto',
      'Construcción de latón forjado duradera, empacado de 50 piezas por caja para suministro de proyectos'
    ],
    specs: {
      'Serie de Modelo': 'ESFR-202 / ESFR-242 / ESFR-363, ZSTX-161',
      'Clasificación de Temperatura': '74°C (165°F)',
      'Orientación': 'Pendo (PY) / Vertical (UY)',
      'Conexión Roscada': 'R1/2" / R3/4" NPT',
      'Empaque': '50 piezas / caja',
      'Aplicación': 'Almacenamiento de Gran Altura, Almacenes, Instalaciones Industriales'
    },
    materials: {
      'Marco del Cuerpo': 'Latón Forjado (H59)',
      'Bulbo de Vidrio': 'Vidrio de Respuesta Rápida de 74°C',
      'Deflector': 'Acero inoxidable / aleación de cobre, patrón de alto flujo'
    },
    image: '/assets/products/esfr-sprinkler-head.webp',
    seoTitle: 'Rociador ESFR 74°C | Almacenamiento de Gran Altura y Almacenes',
    seoDescription: 'Rociador ESFR de supresión temprana con respuesta rápida, bulbo de vidrio de 74°C, pendo y vertical, alto caudal para protección contra incendios de almacenes y almacenamiento de gran altura. Precio de fábrica de Wanlian.',
    faqs: [
      { question: '¿Qué diferencia a un rociador ESFR de un rociador de incendio estándar?', answer: 'Los rociadores ESFR (early suppression fast response) están diseñados para arrojar un gran volumen de agua rápidamente para abatir incendios de crecimiento rápido. Usan un alto coeficiente K y un bulbo de respuesta rápida de 74°C, y se dimensionan para almacenamiento de gran altura y almacenes donde los rociadores estándar no son suficientes.' },
      { question: '¿Qué clasificación de temperatura usa este ESFR?', answer: 'Todos los modelos ESFR de esta gama usan un bulbo de vidrio de respuesta rápida de 74°C (165°F), la clasificación estándar para entornos de almacenamiento e industriales.' },
      { question: '¿Están disponibles los rociadores ESFR en orientaciones suspendida y vertical?', answer: 'Sí. La serie se ofrece en orientación suspendida (PY, colgante hacia abajo) y vertical (UY, hacia arriba), de modo que puede ajustarse a configuraciones de rociado abierto y entornos de estantería.' },
      { question: '¿Para qué se usan los rociadores ESFR?', answer: 'Los rociadores ESFR protegen almacenamiento de gran altura, almacenes, centros de distribución y grandes instalaciones industriales, y son el tipo de cabezal de referencia cuando se aplican los criterios de protección de almacenamiento de NFPA 13 / GB 50084.' }
    ]
  }
};

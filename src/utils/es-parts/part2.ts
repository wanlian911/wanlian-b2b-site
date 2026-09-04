// products.es.ts part 2 - slugs 16-29
import type { Product } from '../products';

export const productsEsPart2: Record<string, Product> = {
  'anti-pollution-backflow-preventer-hs41x': {
    id: '16',
    slug: 'anti-pollution-backflow-preventer-hs41x',
    name: 'Dispositivo Anti-Retorno Antipolución (HS41X-16)',
    category: 'Seguridad Hidráulica',
    description: 'El dispositivo anti-retorno antipolución HS41X es una válvula avanzada de seguridad hídrica compuesta por dos válvulas de retención conectadas en serie y una cavidad de drenaje. Impide estrictamente el reflujo del medio para proteger las redes de agua potable contra la contaminación.',
    features: [
      'Dos válvulas de retención independientes que garantizan el corte absoluto del reflujo',
      'Válvula de drenaje automática central que evacúa el agua de inmediato si desciende la presión aguas arriba',
      'Diseño de baja pérdida de carga con canales de fluido optimizados',
      'Asiento encapsulado en EPDM que asegura larga vida útil y sellado completo'
    ],
    specs: {
      'Diámetro Nominal': 'DN50 - DN600',
      'Presión Nominal': '1.0 MPa / 1.6 MPa / 2.5 MPa',
      'Material del Cuerpo': 'Hierro dúctil / Acero fundido / Acero inoxidable',
      'Medio Aplicable': 'Agua potable y agua de consumo humano',
      'Temperatura de Trabajo': '0°C a 80°C'
    },
    materials: {
      'Cuerpo y Tapa': 'Hierro dúctil QT450',
      'Discos de Retención': 'Acero inoxidable 304 recubierto de EPDM',
      'Válvula de Drenaje Intermedia': 'Latón macizo / Acero inoxidable 304',
      'Resortes Principales': 'Acero inoxidable 304'
    },
    image: '/assets/products/anti-pollution-backflow-preventer-hs41x.webp',
    seoTitle: 'Dispositivo Anti-Retorno Antipolución HS41X | Agua Potable',
    seoDescription: 'Dispositivo anti-retorno antipolución HS41X con doble válvula de retención y drenaje automático para agua potable. Precio de fábrica Wanlian Fluid China.'
  },
  'foam-fire-hydrant-cabinet-psg30': {
    id: '17',
    slug: 'foam-fire-hydrant-cabinet-psg30',
    name: 'Gabinete de Hidrante de Espuma (Serie PSG30)',
    category: 'Gabinetes Contra Incendios e Interfaces',
    description: 'Unidad contra incendios de espuma de baja expansión, altamente eficiente y consolidada. Integra en un gabinete mural un tanque de almacenamiento, dosificador de espumógeno, carrete de manguera y boquilla de espuma especializada. Excepcionalmente eficaz contra incendios de combustibles, químicos y solventes.',
    features: [
      'Genera y proyecta espuma de baja expansión para sofocar incendios de químicos e hidrocarburos',
      'Estructura de gabinete integrada que permite operación inmediata en emergencias',
      'Incluye dosificador de espuma de latón resistente a la corrosión',
      'Carrete de manguera muy flexible con longitudes personalizables de hasta 30 metros'
    ],
    specs: {
      'Modelo': 'PSG30',
      'Concentrado de Espuma': '3% AFFF (espuma formadora de película acuosa)',
      'Presión de Trabajo': '0.5 - 0.8 MPa',
      'Alcance del Chorro': '≥6 metros',
      'Expansión de la Espuma': '≥4.5'
    },
    materials: {
      'Carcasa del Gabinete': 'Acero al carbono laminado en frío con recubrimiento en polvo rojo anti-UV',
      'Tanque de Almacenamiento de Espuma': 'Polietileno de alta densidad / Fibra de vidrio',
      'Dosificador y Boquilla': 'Aleación de latón macizo / Aluminio de servicio pesado',
      'Manguera': 'Caucho EPDM reforzado con poliéster de alta tenacidad'
    },
    image: '/assets/products/foam-fire-hydrant-cabinet-psg30.webp',
    seoTitle: 'Gabinete de Hidrante de Espuma PSG30 | 3% AFFF',
    seoDescription: 'Gabinete de hidrante de espuma PSG30 con espumógeno AFFF 3% para fuegos clase B de combustibles, químicos y solventes. Precio de fábrica de Wanlian Fluid China.',
    faqs: [
      {
        question: '¿Qué es el gabinete de hidrante de espuma PSG30?',
        answer: 'El PSG30 es una unidad contra incendios de espuma de baja expansión para montaje en pared que integra en un solo gabinete un tanque de almacenamiento de espumógeno, dosificador, carrete de manguera y boquilla de espuma, ofreciendo respuesta inmediata ante incendios de combustibles, químicos y solventes.'
      },
      {
        question: '¿Qué tipo de espuma y qué rendimiento ofrece el PSG30?',
        answer: 'El gabinete opera con concentrado de espuma AFFF al 3% (espuma formadora de película acuosa), con una relación de expansión de espuma de al menos 4.5, un alcance de chorro de al menos 6 metros y una presión de trabajo de 0.5 a 0.8 MPa.'
      },
      {
        question: '¿Para qué tipos de incendio está diseñado el PSG30?',
        answer: 'Está diseñado para incendios clase B que involucran combustibles, químicos y solventes, donde la espuma sofoca el fuego más rápido que el agua sola.'
      },
      {
        question: '¿De qué longitud es el carrete del PSG30 y qué materiales se utilizan?',
        answer: 'El carrete de manguera es flexible y puede personalizarse hasta 30 metros. La carcasa del gabinete es de acero al carbono laminado en frío con recubrimiento en polvo rojo anti-UV; el tanque de espuma es de HDPE o fibra de vidrio, y el dosificador y la boquilla son de aleación de latón o aluminio de servicio pesado.'
      }
    ]
  },
  'manual-fire-water-cannon-ps': {
    id: '18',
    slug: 'manual-fire-water-cannon-ps',
    name: 'Cañón de Agua Extintor Manual (Serie PS)',
    category: 'Cañones de Agua Extintores',
    description: 'Cañón monitor de agua contra incendios manual de servicio pesado, diseñado para descargar grandes volúmenes de agua o espuma a largas distancias. Muy adecuado para plantas petroquímicas, parques de tanques de almacenamiento de hidrocarburos, almacenes, puertos y camiones de bomberos.',
    features: [
      'Admite tanto chorro recto de alta concentración como rocío tipo niebla de amplia cobertura',
      'Operación totalmente manual por palanca que permite una orientación rápida y suave',
      'Mecanismo de engranaje autoblocante y seguro que permite la descarga sin operador',
      'Construcción en aleación de aluminio o bronce de alta durabilidad, resistente a condiciones climáticas marinas severas'
    ],
    specs: {
      'Rango de Caudal': '20 L/S - 200 L/S',
      'Alcance Máximo del Chorro': '50 - 110 metros',
      'Presión Nominal': '0.8 - 1.2 MPa',
      'Rango de Rotación': 'Horizontal 360°, Vertical -30° a +70°',
      'Brida de Entrada': 'DN100 / DN150 / DN200'
    },
    materials: {
      'Cuerpo del Monitor': 'Aleación de aluminio anodizado duro T6 / Bronce',
      'Juntas Giratorias': 'Rodamientos de bolas de acero inoxidable de doble fila',
      'Perillas de Fijación': 'Acero inoxidable / Latón',
      'Punta de la Boquilla': 'Aleación endurecida de precisión'
    },
    image: '/assets/products/manual-fire-water-cannon-ps.webp',
    seoTitle: 'Cañón Monitor de Agua Manual Serie PS | Largo Alcance',
    seoDescription: 'Cañón de agua extintor manual de alto caudal para agua y espuma, de construcción pesada para plantas petroquímicas y almacenes. Precio de fábrica Wanlian Fluid.'
  },
  'water-flow-indicator-zsjz': {
    id: '19',
    slug: 'water-flow-indicator-zsjz',
    name: 'Indicador de Flujo de Agua Tipo Paleta (Serie ZSJZ)',
    category: 'Rociadores y Válvulas de Alarma',
    description: 'El indicador de flujo de agua ZSJZ es un elemento crítico en los sistemas automáticos de rociadores tipo húmedo. Se instala en la tubería de suministro derivada para detectar el flujo de agua y convertir la energía cinética del agua en alertas de señal eléctrica.',
    features: [
      'Microinterruptor flexible de alta conductividad eléctrica y larga vida útil',
      'Circuito de retardo ajustable incorporado (2-60 segundos) que filtra las fluctuaciones por golpe de ariete y evita falsas alarmas',
      'Soporta instalaciones tipo silla (montaje en abrazadera), roscada o con brida/ranurada',
      'La paleta se flexiona suavemente sin obstruir el canal principal de agua'
    ],
    specs: {
      'Rango de Tamaños': 'DN50 - DN200',
      'Presión de Trabajo': '1.2 MPa / 1.6 MPa',
      'Sensibilidad del Interruptor': '15 < Q < 37.5 L/min (umbral de disparo)',
      'Salida de Señal': 'DC24V / 3A (contactos secos SPDT)'
    },
    materials: {
      'Cuerpo de la Silla': 'Hierro dúctil (QT450-10)',
      'Paleta': 'Polímero flexible / Acero inoxidable',
      'Caja Eléctrica': 'ABS técnico ignífugo IP54',
      'Circuito de Retardo': 'PCB de estado sólido sellada'
    },
    image: '/assets/products/water-flow-indicator-zsjz.png',
    seoTitle: 'Indicador de Flujo de Agua ZSJZ Tipo Paleta | Alarma',
    seoDescription: 'Indicador de flujo de agua ZSJZ tipo silla o brida para sistemas de rociadores, con retardo ajustable y detección sensible. Precio de fábrica de Wanlian.'
  },
  'telescopic-resilient-seat-gate-valve-z41x-t': {
    id: '20',
    slug: 'telescopic-resilient-seat-gate-valve-z41x-t',
    name: 'Válvula de Compuerta Telescópica de Asiento Elástico',
    category: 'Válvulas y Piezas',
    description: 'Combina el robusto cierre hermético de una válvula de compuerta de asiento elástico con un manguito de expansión telescópico integrado. Ideal para líneas de suministro de agua, protección contra incendios y HVAC, ya que facilita la instalación, compensa la dilatación térmica de la tubería y permite reemplazar la válvula rápidamente.',
    features: [
      'Doble función: cierre hermético del fluido + compensación de expansión de la tubería',
      'Cuña totalmente encapsulada en caucho EPDM para cero fugas',
      'La junta de expansión telescópica simplifica la instalación y el reemplazo de la válvula',
      'Recubrimiento interior y exterior de resina epoxi no tóxica'
    ],
    specs: {
      'Diámetro Nominal': 'DN50 - DN600',
      'Presión Nominal': '1.0 MPa / 1.6 MPa',
      'Rango Telescópico': '±25mm (compensación de expansión)',
      'Material del Cuerpo': 'Hierro dúctil QT450',
      'Medio Aplicable': 'Agua, aguas residuales, agua contra incendios'
    },
    materials: {
      'Cuerpo Principal y Tapa': 'Hierro dúctil (QT450-10)',
      'Manguito Telescópico': 'Acero al carbono Q235 / Hierro dúctil',
      'Núcleo de la Cuña': 'Hierro dúctil QT450 totalmente recubierto de caucho EPDM',
      'Prensaestopas': 'NBR / Latón / Acero inoxidable'
    },
    image: '/assets/products/telescopic-resilient-seat-gate-valve-z41x-t.webp',
    seoTitle: 'Válvula de Compuerta Telescópica Z41X-T | Precio de Fábrica',
    seoDescription: 'Válvula de compuerta telescópica Z41X-T de asiento elástico, cuña EPDM y cuerpo QT450 para tuberías con compensación de expansión. Precio de fábrica Wanlian.'
  },
  'adjustable-pressure-reducing-valve-500x': {
    id: '21',
    slug: 'adjustable-pressure-reducing-valve-500x',
    name: 'Válvula Reductora de Presión Ajustable Hidráulica (500X)',
    category: 'Seguridad Hidráulica',
    description: 'La válvula reductora de presión ajustable de accionamiento hidráulico 500X de Wanlian reduce automáticamente una presión de entrada elevada a una presión aguas abajo estable y menor, independientemente de las fluctuaciones de caudal o de las variaciones de la presión de entrada.',
    features: [
      'Mantiene automáticamente una presión aguas abajo estable mediante un sistema piloto hidráulico',
      'Totalmente autooperada, sin necesidad de energía eléctrica externa',
      'Diseño de cierre lento y suave que evita sobrepresiones y golpes de ariete',
      'Cuerpo de hierro dúctil de servicio pesado con piloto y accesorios de latón resistentes a la corrosión'
    ],
    specs: {
      'Diámetro Nominal': 'DN20 - DN600 (3/4" a 24")',
      'Ajuste de Presión': '0.1 MPa a 1.6 MPa',
      'Presión Nominal': '1.0 MPa / 1.6 MPa / 2.5 MPa',
      'Norma de Diseño': 'ANSI / JIS / GB',
      'Material del Cuerpo': 'Hierro dúctil (QT450-10)'
    },
    materials: {
      'Cuerpo de la Válvula Principal': 'Hierro dúctil (QT450-10)',
      'Diafragma': 'EPDM de alta elasticidad reforzado con nailon',
      'Vástago Interno': 'Acero inoxidable 304',
      'Piloto Ajustable': 'Aleación de latón forjado macizo',
      'Tuberías y Accesorios': 'Cobre / Acero inoxidable 304'
    },
    image: '/assets/products/adjustable-pressure-reducing-valve-500x.webp',
    seoTitle: 'Válvula Reductora de Presión 500X | Suministro de Agua',
    seoDescription: 'Válvula reductora de presión hidráulica autooperada 500X en hierro dúctil, con opciones OEM y diseño personalizado. Precio de fábrica Wanlian Fluid China.'
  },
  'fire-hydrant-hose-coupling-adapter-hs': {
    id: '22',
    slug: 'fire-hydrant-hose-coupling-adapter-hs',
    name: 'Adaptador de Acople de Manguera de Hidrante en Aluminio (Serie HS)',
    category: 'Gabinetes Contra Incendios e Interfaces',
    description: 'Los adaptadores de acople de manguera contra incendios de aluminio de alta resistencia de la serie HS de Wanlian están diseñados con rosca interna autosellante para brindar una conexión rápida y sin fugas entre hidrantes, mangueras y boquillas.',
    features: [
      'Fabricados en aleación de aluminio liviana y de alta resistencia',
      'Estructura de conexión rápida que permite acoplar la manguera de inmediato',
      'Empaques de caucho autosellantes y duraderos que evitan fugas incluso bajo alta vibración',
      'Rosca interna/externa estándar para compatibilidad con redes contra incendios a nivel mundial'
    ],
    specs: {
      'Rango de Tamaños': 'DN50 / DN65 (2" a 2.5")',
      'Rosca de Conexión': 'Rosca interna de 2.5 pulgadas',
      'Presión de Trabajo': '1.6 MPa (232 PSI)',
      'Material': 'Aleación de aluminio anodizado',
      'Norma': 'GB12514 / Norma de fábrica'
    },
    materials: {
      'Cuerpo del Acople': 'Aleación de aluminio anodizado duro grado T6',
      'Tuerca de Fijación': 'Aleación de aluminio anodizado / Zinc',
      'Sello de Rosca Interna': 'Caucho EPDM autosellante',
      'Anillo de Aseguramiento': 'Acero inoxidable'
    },
    image: '/assets/products/fire-hydrant-hose-coupling-adapter-hs.jpg',
    seoTitle: 'Adaptador de Acople HS de Aluminio | Precio de Fábrica',
    seoDescription: 'Adaptador de acople de manguera de hidrante contra incendios en aluminio anodizado, de conexión rápida y sellado fiable. Precio de fábrica de Wanlian Fluid.'
  },
  'wafer-type-butterfly-valve-d71x': {
    id: '23',
    slug: 'wafer-type-butterfly-valve-d71x',
    name: 'Válvula de Mariposa tipo Wafer de Hierro Dúctil con Revestimiento de Caucho (D71X)',
    category: 'Válvulas y Piezas',
    description: 'Válvula de mariposa manual estándar tipo wafer con robusto revestimiento de caucho. Ideal para el aislamiento bidireccional de fluidos con baja fricción en sistemas HVAC, tratamiento de agua y tuberías industriales.',
    features: [
      'Revestimiento de caucho vulcanizado resistente a la corrosión (EPDM/NBR) para sellado hermético',
      'Diseño tipo wafer compacto y liviano que se instala fácilmente entre bridas estándar',
      'Palanca manual ergonómica de múltiples posiciones para apertura/cierre rápidos',
      'Disco pulido de acero inoxidable o hierro dúctil que minimiza la resistencia al flujo'
    ],
    specs: {
      'Rango de Tamaños': 'DN50 - DN200 (2" a 8")',
      'Presión de Trabajo': '1.0 MPa / 1.6 MPa',
      'Material del Cuerpo': 'Hierro dúctil QT450 / Hierro fundido',
      'Material del Revestimiento': 'EPDM / NBR / PTFE',
      'Norma de Conexión': 'ANSI / DIN / JIS / GB tipo wafer'
    },
    materials: {
      'Cuerpo de la Válvula': 'Hierro dúctil QT450',
      'Asiento/Revestimiento del Cuerpo': 'Caucho EPDM / NBR totalmente vulcanizado',
      'Disco Interno': 'Acero inoxidable 304 / 316 pulido',
      'Vástago/Eje': 'Acero inoxidable 416 / 2Cr13',
      'Palanca Manual': 'Aluminio fundido a presión / Hierro esferoidal'
    },
    image: '/assets/products/wafer-type-butterfly-valve-d71x.webp',
    seoTitle: 'Válvula de Mariposa Wafer D71X | Revestida en Caucho',
    seoDescription: 'Válvula de mariposa tipo wafer D71X en hierro dúctil con revestimiento EPDM y palanca manual para control de agua industrial. Precio de fábrica Wanlian.'
  },
  'overground-fire-hydrant-ss100': {
    id: '24',
    slug: 'overground-fire-hydrant-ss100',
    name: 'Hidrante Exterior Anticongelante (SS100/65)',
    category: 'Hidrantes y Conexiones de Bomba',
    description: 'Hidrante contra incendios exterior DN100 de hierro dúctil, diseñado con un mecanismo automático de drenaje antihielo altamente efectivo que garantiza un suministro de agua confiable a alta presión en redes contra incendios municipales y de almacenes en climas fríos.',
    features: [
      'Drenaje automático de columna seca tras el cierre que evita la congelación y rotura del hidrante',
      'Construcción de pared gruesa en hierro fundido/hierro dúctil que resiste impactos físicos en exteriores',
      'Salidas dobles con asiento de latón y tapas ciegas resistentes a la intemperie de gran durabilidad',
      'Base bridada subterránea estándar para conexión sencilla'
    ],
    specs: {
      'Diámetro Nominal': 'DN100 (4")',
      'Presión de Trabajo': '1.6 MPa',
      'Presión de Prueba': '2.4 MPa',
      'Configuración de Salidas': '2 salidas de 65mm + 1 salida de 100mm',
      'Medio Aplicable': 'Agua, mezcla de espuma contra incendios'
    },
    materials: {
      'Columna del Hidrante': 'Hierro dúctil QT450 de servicio pesado',
      'Cabezal de Válvula Inferior': 'Totalmente encapsulado en caucho EPDM',
      'Dispositivo de Drenaje': 'Acero inoxidable 304 / Latón',
      'Vástago de Operación': 'Acero inoxidable / Acero al carbono medio',
      'Tapas Ciegas': 'Hierro fundido / Aluminio con cadena'
    },
    image: '/assets/products/overground-fire-hydrant-ss100.webp',
    seoTitle: 'Hidrante Exterior SS100 Anticongelante | Listado UL',
    seoDescription: 'Hidrante exterior de alta presión SS100 con drenaje antihielo y cuerpo de hierro dúctil para suministro de agua municipal. Precio de fábrica Wanlian China.'
  },
  'fire-hose-reel-jpso8-19': {
    id: '25',
    slug: 'fire-hose-reel-jpso8-19',
    name: 'Equipo de Carrete de Manguera Contra Incendios en Acero al Carbono (JPS0.8-19)',
    category: 'Gabinetes Contra Incendios e Interfaces',
    description: 'El equipo de carrete de manguera contra incendios de acero al carbono de la serie JPS está diseñado para la extinción rápida de incendios en interiores. Incluye manguera PVC tipo layflat muy flexible, boquilla de rociado de latón/aleación y carrete giratorio de montaje de servicio pesado.',
    features: [
      'Soporte giratorio de montaje en acero al carbono resistente con rotación de 180°',
      'Manguera flexible de PVC de alta resistencia y resistente a la abrasión que evita dobleces',
      'Boquilla de rociado ergonómica con chorro recto y dispersión tipo niebla de amplia cobertura',
      'Operación manual extremadamente sencilla, apta para ocupantes del edificio sin formación profesional'
    ],
    specs: {
      'Longitud de la Manguera': '20m / 25m / 30m',
      'Diámetro Interior de la Manguera': '19mm (3/4")',
      'Presión de Trabajo': '0.8 MPa / 1.0 MPa',
      'Alcance del Chorro': '≥ 6 metros',
      'Norma Aplicable': 'GB15090 / XF180'
    },
    materials: {
      'Disco del Carrete': 'Chapa de acero al carbono con pintura epoxi roja',
      'Codo/Brazo Giratorio': 'Latón macizo / Acero de servicio pesado',
      'Manguera': 'Mezcla NBR/PVC con refuerzo de poliéster multitrenzado',
      'Pistola/Boquilla de Rociado': 'Latón / Aluminio mecanizado de precisión'
    },
    image: '/assets/products/fire-hose-reel-jpso8-19.jpg',
    seoTitle: 'Carrete de Manguera JPS0.8-19 | Acero al Carbono',
    seoDescription: 'Carrete de manguera contra incendios JPS0.8-19 para interiores, con manguera PVC de hasta 30 m y soporte mural giratorio. Precio de fábrica de Wanlian Fluid.'
  },
  'spherical-ball-check-valve-hq44x': {
    id: '26',
    slug: 'spherical-ball-check-valve-hq44x',
    name: 'Válvula de Retención de Bola Esférica en Hierro Fundido (HQ44X-16)',
    category: 'Válvulas y Piezas',
    description: 'La válvula de retención esférica HQ44X está diseñada para aplicaciones de alto caudal y antiobstrucción. Equipada con una esfera rodante recubierta de caucho que asegura un cierre silencioso unidireccional y el bloqueo total del reflujo.',
    features: [
      'Cuerpo de hierro fundido nodular esferoidal que ofrece resistencia superior a la tracción y los impactos',
      'Canal interior de paso total antiobstrucción que minimiza las pérdidas por fricción del fluido',
      'Bola de hierro encapsulada en EPDM que garantiza un sellado confiable y larga vida útil',
      'Bajo caudal de arranque y cierre sin golpe totalmente silencioso'
    ],
    specs: {
      'Rango de Tamaños': 'DN50 - DN400 (2" a 16")',
      'Presión de Trabajo': '1.6 MPa (PN16)',
      'Material del Cuerpo': 'Hierro fundido nodular / Hierro dúctil',
      'Sello de Asiento/Bola': 'EPDM / NBR',
      'Norma de Prueba': 'GB/T13927'
    },
    materials: {
      'Cuerpo de la Válvula': 'Hierro fundido nodular (QT450-10)',
      'Bola Rodante': 'Núcleo de hierro fundido con EPDM totalmente vulcanizado',
      'Anillo de Sellado': 'Caucho EPDM / NBR',
      'Tornillos de Fijación': 'Acero al carbono / Acero inoxidable'
    },
    image: '/assets/products/spherical-ball-check-valve-hq44x.webp',
    seoTitle: 'Válvula de Retención de Bola HQ44X | Hierro Nodular',
    seoDescription: 'Válvula de retención de bola esférica HQ44X-16 con bola rodante recubierta de EPDM, antiobstrucción y baja pérdida de presión. Precio de fábrica Wanlian.'
  },
  'flange-manual-bellows-gate-valve': {
    id: '27',
    slug: 'flange-manual-bellows-gate-valve',
    name: 'Válvula de Compuerta Manual con Brida y Sello de Fuelle',
    category: 'Válvulas y Piezas',
    description: 'Válvula de compuerta manual con sello de fuelle en acero forjado/fundido. La doble barrera de sellado (fuelle + empaquetadura) garantiza cero emisiones fugitivas. Diseñada específicamente para tuberías de aceite térmico, agua a alta temperatura y vapor.',
    features: [
      'Sello de fuelle metálico de alta durabilidad que evita cualquier fuga de vapor o fluido',
      'Sistema de doble sellado (empaquetadura + fuelle) que previene emisiones accidentales',
      'Cuerpo de acero forjado/fundido que soporta condiciones extremas de esfuerzo mecánico y temperatura',
      'Cumple estrictamente con las normas internacionales (GB, ANSI, DIN, JIS)'
    ],
    specs: {
      'Rango de Tamaños': 'DN15 - DN300 (1/2" a 12")',
      'Presión de Trabajo': '1.6 - 4.0 MPa (Clase 150/300)',
      'Temperatura de Trabajo': '-29°C a 425°C',
      'Material del Cuerpo': 'Acero forjado (A105) / Acero fundido (WCB)',
      'Medio': 'Aceite térmico, vapor, agua a alta temperatura'
    },
    materials: {
      'Cuerpo de la Válvula': 'Acero al carbono (WCB) / Acero forjado (A105)',
      'Fuelle': 'Acero inoxidable 304 / 316Ti',
      'Sello del Disco': 'Stellite / Aleación dura SS304',
      'Volante': 'Hierro dúctil / Acero fundido',
      'Tuerca del Yugo': 'Aleación de cobre'
    },
    image: '/assets/products/flange-manual-bellows-gate-valve.webp',
    seoTitle: 'Válvula de Compuerta con Sello de Fuelle | Proveedor',
    seoDescription: 'Válvula de compuerta con brida y sello de fuelle para vapor y aceite térmico a alta temperatura, sin fugas según DIN, ANSI y GB. Precio de fábrica Wanlian.'
  },
  'groove-solenoid-control-gate-valve-gkzf1': {
    id: '28',
    slug: 'groove-solenoid-control-gate-valve-gkzf1',
    name: 'Válvula de Compuerta de Control por Solenoide con Conexión Ranurada (GKZF-1)',
    category: 'Seguridad Hidráulica',
    description: 'Válvula de compuerta de control GKZF-1 de 8 pulgadas en hierro dúctil, accionada por solenoide, que integra control electromagnético y conexión ranurada para el control automático del flujo de agua en redes municipales y contra incendios.',
    features: [
      'Extremos ranurados que permiten una instalación rápida, flexible y de muy bajo costo',
      'Mecanismo de apertura y cierre controlado directamente por piloto de solenoide',
      'Cuerpo robusto de hierro dúctil clasificado a 300 PSI para sistemas de agua a alta presión',
      'Alta capacidad de respuesta, ideal para el control automático de redes de agua contra incendios'
    ],
    specs: {
      'Rango de Tamaños': 'DN50 - DN300 (2" a 12")',
      'Voltaje del Solenoide': 'AC220V / DC24V',
      'Presión de Trabajo': '300 PSI (2.0 MPa)',
      'Material del Cuerpo': 'Hierro dúctil QT450',
      'Conexión de Extremos': 'Ranurada / Con brida'
    },
    materials: {
      'Cuerpo Principal': 'Hierro dúctil (QT450-10)',
      'Núcleo de la Cuña': 'Hierro dúctil totalmente encapsulado en EPDM',
      'Piloto de Solenoide': 'Acero inoxidable 304 / Latón',
      'Vástago y Resortes': 'Acero inoxidable 304',
      'Empaques de Sello': 'EPDM / NBR'
    },
    image: '/assets/products/groove-solenoid-control-gate-valve-gkzf1.jpg',
    seoTitle: 'Válvula de Compuerta de Solenoide GKZF-1 | 300 PSI',
    seoDescription: 'Válvula de compuerta de control por solenoide GKZF-1 (DN50-DN300, 300 PSI (2.0 MPa), AC220V/DC24V) para agua contra incendios. Precio de fábrica Wanlian.',
    faqs: [
      {
        question: '¿Para qué se utiliza la válvula de compuerta de control por solenoide GKZF-1?',
        answer: 'La GKZF-1 es una válvula de compuerta de hierro dúctil con control piloto por solenoide integrado, diseñada para el control automático del flujo de agua en redes municipales de suministro y contra incendios.'
      },
      {
        question: '¿Qué tamaños y presiones nominales están disponibles en la GKZF-1?',
        answer: 'La GKZF-1 cubre de DN50 a DN300 (2 a 12 pulgadas) con una presión de trabajo de 300 PSI (2.0 MPa). El cuerpo es de hierro dúctil QT450 con cuña totalmente encapsulada en EPDM.'
      },
      {
        question: '¿Qué opciones de voltaje de solenoide admite la GKZF-1?',
        answer: 'El piloto de solenoide está disponible en AC220V o DC24V, lo que permite la integración directa con sistemas de control de edificios, municipales o contra incendios.'
      },
      {
        question: '¿Por qué elegir conexiones ranuradas para la GKZF-1?',
        answer: 'Los extremos ranurados permiten una instalación rápida, flexible y económica en comparación con las uniones bridadas. La válvula también está disponible con extremos bridados para proyectos que los requieran.'
      }
    ]
  },
  'fire-hose-pvc-rubber-lining-8-65': {
    id: '29',
    slug: 'fire-hose-pvc-rubber-lining-8-65',
    name: 'Manguera Contra Incendios Layflat con Revestimiento de Caucho PVC (Modelo 8-65)',
    category: 'Gabinetes Contra Incendios e Interfaces',
    description: 'La manguera contra incendios layflat de Wanlian con revestimiento de caucho PVC está diseñada para extinción de incendios, trasiego industrial de agua y protección contra incendios aeroportuaria. Flexible, portátil y duradera, con refuerzo textil en las esquinas y sellado de bordes tejidos para una larga vida útil.',
    features: [
      'Instalación sencilla con acoples estándar de manguera contra incendios',
      'Flexible y portátil para un despliegue rápido',
      'Construcción tejida duradera con refuerzo en las esquinas',
      'Reciclable y fácil de operar',
      'Longitud, diámetro y logotipo personalizables (OEM)'
    ],
    specs: {
      'Rango de Tamaños': 'Diámetro interior de 19mm - 400mm',
      'Modelo': '8-65 (tamaño de acople estándar)',
      'Material': 'Revestimiento de caucho PVC',
      'Capacidad de Carga': '50 - 200 kN',
      'Aplicación': 'Fuegos clase A y B, protección contra incendios aeroportuaria, trasiego industrial de agua',
      'Sellado de Bordes': 'Sellado de bordes tejidos'
    },
    materials: {
      'Cuerpo de la Manguera': 'Fibra sintética tejida con revestimiento de caucho PVC',
      'Acoples': 'Acoples estándar de aluminio / latón para manguera contra incendios'
    },
    image: '/assets/products/fire-hose-pvc-rubber-lining-8-65.jpg',
    seoTitle: 'Manguera Layflat de Caucho PVC | Contra Incendios',
    seoDescription: 'Manguera contra incendios layflat con revestimiento de caucho PVC para extinción y trasiego de agua, de cubierta tejida duradera. Precio de fábrica Wanlian.',
    faqs: [
      {
        question: '¿Cuál es la diferencia entre esta manguera layflat y un carrete de manguera contra incendios?',
        answer: 'Esta es la manguera en sí: una línea de suministro flexible que se aplana al vaciarse y se vende por metros, y que conecta bombas, hidrantes o boquillas. Un carrete de manguera es un equipo fijo de gabinete con la manguera enrollada en un tambor y conectada permanentemente al suministro del edificio. Las estaciones interiores con carrete se cubren con nuestros productos de carretes y gabinetes contra incendios.'
      },
      {
        question: '¿Qué tamaños y longitudes están disponibles para la manguera layflat?',
        answer: 'Los diámetros interiores van de 19mm a 400mm, siendo la configuración Modelo 8-65 (tamaño de acople estándar de 65mm) la línea contra incendios más común. La longitud, el diámetro y el logotipo son personalizables para pedidos OEM.'
      },
      {
        question: '¿Qué acoples son compatibles con esta manguera?',
        answer: 'Se suministra con acoples estándar de aluminio o latón para manguera contra incendios, y el sistema de rosca de conexión puede adaptarse a su mercado (Storz, BS336, NIST, KWS o rosca de 65mm) bajo pedido.'
      },
      {
        question: '¿Para qué aplicaciones está diseñada la manguera?',
        answer: 'Extinción de incendios clase A y B, protección contra incendios aeroportuaria y trasiego industrial de agua. El revestimiento de caucho PVC es apto para agua limpia y mezclas de espuma; la construcción tejida soporta una capacidad de carga de 50-200 kN. Confirme la presión de trabajo para su diámetro exacto con nuestros ingenieros antes de realizar el pedido.'
      }
    ]
  }
};

// Guías (artículos) en español — M3
// Meta data para las listas /es/blog/ y páginas de etiqueta /es/tags/.
// href apunta a las páginas reales /es/guides/<slug>/.
import type { Guide } from './guides';

const readTime = (min: string) => `${min} min de lectura`;

export const guidesEs: Guide[] = [
  {
    title: 'Prevención de Reflujo en Redes Contra Incendios y Agua Potable (2026)',
    description: 'Por qué los dispositivos anti-retorno son obligatorios en redes de doble uso, cómo funcionan las dobles retenciones HS41X, control de conexiones cruzadas y lista de selección para compradores B2B.',
    href: '/es/guides/backflow-prevention-guide/',
    tocPreview: ["1. Por Qué Importa la Prevención de Reflujo","2. Clases de Riesgo y Tipos de Dispositivos","3. Cómo Funciona el Conjunto de Doble Retención HS41X"],
    date: '2026-08',
    category: 'Seguridad Hidráulica',
    readTime: readTime('8'),
    tags: ['backflow-prevention', 'industrial-valves', 'fire-protection']
  },
  {
    title: 'Guía de Carretes y Gabinetes Contra Incendios (2026)',
    description: 'Cómo especificar carretes de manguera interiores, gabinetes de pared y unidades de espuma: largo y diámetro de manguera, modos de boquilla, materiales y cumplimiento para fuegos Clase A/B.',
    href: '/es/guides/fire-hose-reel-cabinet-guide/',
    tocPreview: ["1. El Papel de los Carretes de Manguera y los Gabinetes Contra Incendios","2. Carrete de Manguera vs Gabinete Contra Incendios: Definiciones","3. Largo de Manguera, Diámetro y Presión"],
    date: '2026-08',
    category: 'Protección Contra Incendios',
    readTime: readTime('7'),
    tags: ['fire-hose-reel', 'fire-protection']
  },
  {
    title: 'Selección de Cañón Monitor: Manual vs Automático (ZDMS)',
    description: 'Monitores manuales PS vs cañones ZDMS de seguimiento automático: alcance, caudal, detección, tiempo de respuesta y comparación de costos para protección industrial y de grandes espacios.',
    href: '/es/guides/fire-water-monitor-selection-guide/',
    tocPreview: ["1. Monitores Manuales (Serie PS): Control del Operador","2. Monitores de Seguimiento Automático (ZDMS): Respuesta Autónoma","3. Comparación Directa"],
    date: '2026',
    category: 'Protección Contra Incendios',
    readTime: readTime('6'),
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Válvulas para Sistemas de Rociadores: Guía Completa (Húmedo, Diluvio y Preacción)',
    description: 'Cómo funcionan las válvulas de alarma tipo húmedo ZSFZ, de diluvio ZSFM, de preacción ZSFY y los indicadores de flujo ZSJZ — y cuándo especificar cada una para su sistema de rociadores.',
    href: '/es/guides/fire-sprinkler-system-valves-guide/',
    tocPreview: ["1. Sistemas de Tubería Húmeda: La Válvula de Alarma Tipo Húmedo ZSFZ","2. Sistemas de Diluvio: La Válvula de Diluvio ZSFM","3. Sistemas de Preacción: La Válvula de Doble Disparo ZSFY"],
    date: '2026',
    category: 'Protección Contra Incendios',
    readTime: readTime('7'),
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Lista de Verificación B2B: Cómo Verificar un Fabricante de Equipos Contra Incendios',
    description: 'Lista de 8 puntos para verificar fabricantes de válvulas: certificados, informes de prueba por lote, auditorías de fábrica, muestras y señales de alerta al comprar en China.',
    href: '/es/guides/b2b-valve-sourcing-checklist/',
    tocPreview: ["La Lista de Verificación de los 8 Puntos","Resumen de Señales de Alerta","Cómo Solicitar una Cotización Verificada"],
    date: '2026',
    category: 'Compras B2B',
    readTime: readTime('6'),
    tags: ['procurement', 'certification', 'industrial-valves']
  },
  {
    title: 'Cómo Elegir Válvulas Contra Incendios Certificadas UL (Guía 2026)',
    description: 'Qué significa realmente el listado UL, UL vs FM, qué tipos de válvulas están listadas, cómo verificar certificados genuinos y una lista de compra para compradores B2B.',
    href: '/es/guides/how-to-choose-ul-listed-fire-valves/',
    tocPreview: ["1. Qué Significa el Listado UL para Válvulas Contra Incendios","2. Tipos de Válvulas Contra Incendios que Realmente Especificará","3. Especificaciones Clave para Comparar"],
    date: '2026',
    category: 'Protección Contra Incendios',
    readTime: readTime('7'),
    tags: ['certification', 'fire-protection', 'industrial-valves']
  },
  {
    title: 'Guía de Compra de Cañones de Agua: ¿Fijo, Remoto o Inteligente? (2026)',
    description: 'Cuándo necesita un cañón de agua, fijo vs remoto vs seguimiento automático, dimensionamiento de caudal y alcance, integración de control y lista de compra por sitio.',
    href: '/es/guides/fire-water-cannon-buying-guide/',
    tocPreview: ["1. ¿Realmente Necesita un Cañón Monitor?","2. ¿Fijo, Remoto o de Seguimiento Automático?","3. Dimensionamiento: Caudal y Alcance"],
    date: '2026',
    category: 'Protección Contra Incendios',
    readTime: readTime('6'),
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Sistemas de Rociadores: ¿Húmedo, Seco o de Preacción? (Guía 2026)',
    description: 'Comparación práctica de sistemas húmedos, secos y de preacción; cómo seleccionar rociadores (factor K, temperatura, respuesta) y los componentes que necesita su lista de materiales.',
    href: '/es/guides/fire-sprinkler-system-wet-dry-preaction/',
    tocPreview: ["1. Los tres tipos de sistema comparados","2. Cómo elegir los cabezales de rociador","3. Los componentes que necesita su BOM"],
    date: '2026',
    category: 'Protección Contra Incendios',
    readTime: readTime('7'),
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Cómo Elegir un Hidrante Contra Incendios para Proyectos Municipales e Industriales (2026)',
    description: 'Guía de compra paso a paso: tipos de hidrante, clases de presión, normas de conexión, requisitos de certificación y la lista de verificación de fábrica antes de ordenar.',
    href: '/es/guides/how-to-choose-a-fire-hydrant/',
    tocPreview: ["1. Comprenda Primero el Requisito de su Hidrante","2. Tipos de Hidrantes Contra Incendios Explicados","3. Especificaciones Clave para Comparar"],
    date: '2026',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Válvula de Compuerta vs Válvula de Mariposa para Protección Contra Incendios',
    description: 'Compare rendimiento de cierre, espacio de instalación, pérdida de presión, mantenimiento y criterios de selección para tuberías de protección contra incendios.',
    href: '/es/guides/gate-valve-vs-butterfly-valve-fire-protection/',
    tocPreview: ["1. Cómo Funcionan: Una Comparación Rápida","2. Cara a Cara: Compuerta vs Mariposa","3. Dónde Va Cada Válvula en los Sistemas de Protección Contra Incendios"],
    date: '2026',
    category: 'Válvulas',
    readTime: readTime('7'),
    tags: ['industrial-valves', 'fire-protection']
  },
  {
    title: 'Tipos de Válvulas de Control para Rociadores: OS&Y, Mariposa y Retención',
    description: 'Compuertas OS&Y, mariposas señalizadoras y retenciones en sistemas de rociadores, más una tabla comparativa y lista de especificación UL/FM para compradores B2B.',
    href: '/es/guides/fire-sprinkler-control-valve-types/',
    tocPreview: ["1. Qué Hacen las Válvulas de Control para Rociadores","2. Válvulas de Compuerta OS&Y: Aislamiento Principal Supervisado","3. Mariposas Señalizadoras para el Control de Sección"],
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Guía de Válvulas de Compuerta con Sello de Fuelle: Tipos con Brida ANSI para Vapor y Aceite Térmico',
    description: 'Cómo funciona el doble sello con fuelle soldado, dónde se especifican, normas ANSI/GB y lista de especificación B2B para servicios de vapor y aceite térmico.',
    href: '/es/guides/bellows-seal-gate-valve-guide/',
    tocPreview: ["1. ¿Qué Es una Válvula de Compuerta de Sello de Fuelle?","2. Cómo Funciona el Doble Sello","3. Dónde Se Especifican las Válvulas de Fuelle"],
    date: '2026-09',
    category: 'Válvulas',
    readTime: readTime('7'),
    tags: ['industrial-valves', 'bellows-seal-gate-valve']
  },
  {
    title: 'Guía de Válvulas Reductoras de Presión: PRV Hidráulica 500X y Válvulas de Agua (2026)',
    description: 'Cómo funcionan las reductoras hidráulicas auto-operadas, 500X vs control de nivel F745X vs flotador remoto 100X, instalación y lista de especificación B2B para redes de agua.',
    href: '/es/guides/pressure-reducing-valve-guide/',
    tocPreview: ["1. ¿Qué Es una Válvula Reductora de Presión Hidráulica?","2. Cómo Funciona la PRV 500X Auto-Operada","3. PRV vs Control de Nivel vs Válvula de Flotador"],
    date: '2026-09',
    category: 'Seguridad Hidráulica',
    readTime: readTime('8'),
    tags: ['backflow-prevention', 'industrial-valves']
  },
  {
    title: 'Tipos de Válvulas de Retención y Selección: Bola Deslizante vs Clapeta (2026)',
    description: 'Tipos comparados: oscilante vs HQ41X de bola deslizante vs HQ44X de bola esférica: pérdida de carga, golpe de ariete, cierre sin golpe, orientación de instalación y lista B2B.',
    href: '/es/guides/check-valve-types-guide/',
    tocPreview: ["1. ¿Qué Es una Válvula de Retención?","2. Tipos de Válvulas de Retención de un Vistazo","3. Bola Deslizante vs Clapeta"],
    date: '2026-09',
    category: 'Válvulas',
    readTime: readTime('8'),
    tags: ['industrial-valves', 'backflow-prevention']
  },
  {
    title: 'Guía de Selección de Extintores: Polvo Químico Seco ABC para Compradores B2B (2026)',
    description: 'Cómo elegir extintores portátiles para exportación: clases de fuego vs agentes, especificaciones ABC, ISO 7165 y CCCF, aplicaciones y lista de compra de fábrica (OEM, MOQ, mercancía peligrosa).',
    href: '/es/guides/fire-extinguisher-selection-guide/',
    tocPreview: ["1. Por Qué los Extintores Lideran el Abastecimiento de Protección Contra Incendios","2. Clases de Fuego y Agentes Extintores","3. Especificaciones del Polvo Químico Seco ABC Explicadas"],
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Guía de Compra de Manguera Plana Contra Incendios: Tamaños, Revestimientos y Acoples (2026)',
    description: 'Cómo comprar manguera plana para bomberos y transferencia industrial: construcción y sellado de bordes, dimensionamiento de diámetro y largo, normas Storz/BS336/NIST y lista OEM.',
    href: '/es/guides/fire-hose-buying-guide/',
    tocPreview: ["1. Manguera Plana Contra Incendios vs Carrete de Manguera","2. Construcción de la Manguera: Cubierta, Forro y Sellado de Bordes","3. Dimensionamiento: Diámetro, Largo y Aplicaciones"],
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Wanlian Fluid vs American AVK: ¿Qué Proveedor de Hidrantes y Válvulas Encaja en su Proyecto 2026?',
    description: 'Comparación basada en datos para compras 2026: líneas de producto, hidrantes AWWA C502, sistemas de calidad, costo y plazo — y cómo la geografía, el alcance y la especificación eligen al proveedor.',
    href: '/es/guides/wanlian-fluid-vs-american-avk/',
    tocPreview: ["1. American AVK: Qué Es Realmente","2. Wanlian Fluid: Qué Es Realmente","3. ¿Cómo Se Comparan Sus Líneas de Producto?"],
    date: '2026-09',
    category: 'Compras B2B',
    readTime: readTime('9'),
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Cómo Verificar un Proveedor Chino de Válvulas y Equipos Contra Incendios en 2026',
    description: 'Lista de verificación en 5 pasos: validez de ISO 9001, informes de prueba por norma, inspección de terceros, señales de falsificación y documentación de importación.',
    href: '/es/guides/how-to-verify-chinese-valve-supplier/',
    tocPreview: ["1. Verifique la empresa, no el folleto","2. Haga coincidir el producto con la norma de su OC","3. Exija pruebas por unidad y de terceros"],
    date: '2026-09',
    category: 'Compras B2B',
    readTime: readTime('7'),
    tags: ['procurement', 'certification']
  },
  {
    title: 'Normas de Hidrantes, Mangueras y Válvulas Explicadas: AWWA, NFPA, EN e ISO',
    description: 'Guía de normas para compradores: AWWA C502/C515, NFPA 1961, EN 14384, BS 750, EN 1074 e ISO 5208 — con un proceso de 5 verificaciones para comprar equipos conformes desde China.',
    href: '/es/guides/fire-hydrant-valve-standards-guide/',
    tocPreview: ["1. Las Cinco Familias de Normas que Realmente Encontrará","2. Cómo Contrastar una Norma con un Informe de Prueba","3. Qué Significan en la Práctica las Clases de Presión"],
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Guía de Cumplimiento CE y EN 12845: Equipos Contra Incendios para el Mercado Europeo (2026)',
    description: 'Cumplimiento europeo explicado para compradores B2B: succión de bombas EN 12845, marcado CE por modelo, ensayos EN 12266-1, acoples Storz/BS336/KWS y límites ISO 7165 vs CCCF.',
    href: '/es/guides/ce-en12845-fire-protection-compliance/',
    tocPreview: ["1. Por Qué el Cumplimiento Europeo Importa en Equipos Contra Incendios","2. Fundamentos del Marcado CE: A Nivel de Modelo, Nunca de Serie","3. EN 12845 y el Paquete de Succión de Bombas Contra Incendios"],
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['certification', 'fire-protection']
  },
  {
    title: 'Guía de Selección de Rociadores: Factor K, Temperatura y Respuesta (2026)',
    description: 'Cómo seleccionar rociadores: factor K y caudal (K=80/K=115), clasificaciones de temperatura y color del bulbo, respuesta rápida vs estándar, orientación y listado UL en contexto NFPA 13.',
    href: '/es/guides/fire-sprinkler-head-selection-guide/',
    tocPreview: ["1. Empiece por el Tipo de Sistema, Después el Cabezal","2. Factor K y Caudal: Cómo Hacer Coincidir la Entrega de Agua","3. Clasificaciones de Temperatura y Código de Colores del Bulbo"],
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Válvulas Ranuradas Contra Incendios: Ranurado vs Brida (2026)',
    description: 'Válvulas ranuradas para montantes de rociadores: mariposa señalizadora, compuerta OS&Y, inoxidable y solenoide. Comparativa vs brida y lista de verificación B2B.',
    href: '/es/guides/grooved-fire-protection-valves-guide/',
    tocPreview: ["1. ¿Qué es una Válvula de Extremo Ranurado?","2. Ranurado vs Brida vs Roscado","3. La Familia de Válvulas Ranuradas para Montantes de Incendio"],
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['fire-protection', 'industrial-valves']
  },
  {
    title: 'Hidrantes Anticongelantes y Anticolisión: Guía de Compra (2026)',
    description: 'Hidrantes de barril seco con drenaje antihielo automático, hidrantes anticolisión de perno de corte y modelos con monitoreo IoT para redes municipales e industriales.',
    href: '/es/guides/antifreeze-anti-collision-fire-hydrant-guide/',
    tocPreview: ["1. Por Qué Fallan los Hidrantes en Clima Frío","2. Cómo Funcionan los Hidrantes Anticongelantes (Barril Seco)","3. Cómo Se Cerran los Hidrantes Anticolisión"],
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Conexión para Bomberos (FDC): Tomas Siamesas y Montaje (2026)',
    description: 'Conexión para bomberos (FDC): entradas siamesas DN65, salida bridada DN100, válvula de control integrada, acoples Storz/HS, instalación y checklist B2B.',
    href: '/es/guides/fire-department-connection-siamese-guide/',
    tocPreview: ["1. ¿Qué Es una Conexión para Bomberos?","2. Dos Entradas, Una Salida","3. Normas de Acople de Entrada y Adaptadores"],
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Infraestructura Municipal de Agua y Contra Incendios en América Latina: Guía de Abastecimiento B2B (2026)',
    description: 'Cómo comprar hidrantes, válvulas de compuerta y mangueras contra incendios para infraestructura municipal en América Latina: regímenes de normas regionales, paquetes en una sola orden, documentación de especificación y matriz de selección.',
    href: '/es/guides/municipal-water-fire-infrastructure-latinamerica/',
    tocPreview: ["1. Qué Incluye Realmente un Alcance Municipal de Agua e Incendios","2. Regímenes de Normas de la Región: Lo que Puede Exigir la Licitación","3. Cómo una Sola Orden de Compra Reduce el Riesgo de Coordinación"],
    date: '2026-09',
    category: 'Compras B2B',
    readTime: readTime('8'),
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Requisitos de Certificación para Válvulas e Hidrantes Contra Incendios en Proyectos de América Latina (2026)',
    description: 'Qué significan UL, FM, AWWA, NOM y ABNT en una licitación contra incendios de América Latina, cómo se otorgan por modelo, cómo verificar certificados genuinos y la documentación por modelo a solicitar.',
    href: '/es/guides/latinamerica-certification-requirements-fire-valves/',
    tocPreview: ["1. El Panorama de Certificación para Proyectos Contra Incendios en Latinoamérica","2. Certificación por Certificación: Qué Es y Cómo Verificarla","3. Por Modelo vs por Planta: la Distinción que Importa"],
    date: '2026-09',
    category: 'Compras B2B',
    readTime: readTime('8'),
    tags: ['certification', 'procurement', 'industrial-valves']
  },
  {
    title: 'Cómo Detectar Válvulas Falsas y Certificados Contra Incendios Contrahechos (Guía de compra 2026)',
    description: 'Un checklist de siete pasos y una tabla de señales de alerta para identificar números de serie clonados, placas copiadas, fundiciones de pared delgada y certificados UL/FM/AWWA falsificados al abastecerse en China.',
    href: '/es/guides/detect-fake-valves-fire-equipment-counterfeits/',
    tocPreview: ["1. Por qué los falsificados se concentran en esta categoría","2. Las formas comunes de los falsos","3. Un checklist de detección en siete pasos"],
    date: '2026-09',
    category: 'Compras B2B',
    readTime: readTime('8'),
    tags: ['procurement', 'certification']
  },
  {
    title: 'Wanlian Fluid vs AVK Latinoamérica: Proveedor de Válvulas e Hidrantes para Proyectos de LatAm (2026)',
    description: 'Wanlian Fluid vs AVK Latinoamérica (AVK Válvulas, Tarragona): red de distribución, gama de productos, paquetes en una sola orden, OEM, estructura de costos y plazos — y cómo elegir para su proyecto en LatAm.',
    href: '/es/guides/wanlian-fluid-vs-avk-latinamerica/',
    tocPreview: ["1. Quién Es Realmente AVK Latinoamérica","2. Quién Es Wanlian Fluid","3. Comparación Detallada"],
    date: '2026-09',
    category: 'Compras B2B',
    readTime: readTime('9'),
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Guía: Válvula de Equilibrado Digital HVAC SP45F (Selección)',
    description: 'Guía de válvula de equilibrado digital HVAC SP45F: puntos de prueba de presión, bloqueo digital, datos RFQ y comparación con reductoras. Cotización en 12 h.',
    href: '/es/guides/hvac-digital-balancing-valve-guide/',
    tocPreview: ["1. ¿Qué es una válvula de equilibrado HVAC?","2. Cómo funciona la válvula digital SP45F","3. Válvula de equilibrado vs válvula reductora de presión"],
    date: '2026-09',
    category: 'HVAC y válvulas industriales',
    readTime: '8 min de lectura',
    tags: ['industrial-valves', 'backflow-prevention']
  },
  {
    title: 'Wanlian Fluid vs Zhiyuan Fire: Proveedores de Protección Contra Incendios a Base de Agua vs Gaseosa (2026)',
    description: 'Wanlian Fluid vs Zhiyuan Fire para 2026: hidrantes, cañones y válvulas vs supresión gaseosa FM200/IG541 — ¿qué fabricante chino de equipos de incendio encaja en su proyecto?',
    href: '/es/guides/wanlian-fluid-vs-zhiyuan/',
    tocPreview: ["1. Zhiyuan Fire: Qué Son Realmente","2. Wanlian Fluid: Qué Somos Realmente","3. Comparación Detallada"],
    date: '2026-09',
    category: 'Compras B2B',
    readTime: readTime('9'),
    tags: ['procurement', 'fire-protection']
  },
  {
    title: 'Control de Riesgo en Compras Transfronterizas: Whitepaper para Compradores B2B (2026) | Wanlian Fluid',
    description: 'Cómo controlar el riesgo de compras transfronterizas de equipo de protección contra incendio e infraestructura de agua: 8 familias de riesgo, controles previos al envío y señales de alarma.',
    href: '/es/guides/cross-border-procurement-risk-whitepaper/',
    tocPreview: ["1. Por Qué Fallan las Compras Transfronterizas: El Marco de Riesgo","2. Las Ocho Familias de Riesgo","3. Riesgo de Contraparte y Autenticidad"],
    date: '2026-09',
    category: 'Whitepaper',
    readTime: readTime('12'),
    tags: ['procurement', 'certification']
  }
];

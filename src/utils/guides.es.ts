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
    date: '2026-08',
    category: 'Seguridad Hidráulica',
    readTime: readTime('8'),
    tags: ['backflow-prevention', 'industrial-valves', 'fire-protection']
  },
  {
    title: 'Guía de Carretes y Gabinetes Contra Incendios (2026)',
    description: 'Cómo especificar carretes de manguera interiores, gabinetes de pared y unidades de espuma: largo y diámetro de manguera, modos de boquilla, materiales y cumplimiento para fuegos Clase A/B.',
    href: '/es/guides/fire-hose-reel-cabinet-guide/',
    date: '2026-08',
    category: 'Protección Contra Incendios',
    readTime: readTime('7'),
    tags: ['fire-hose-reel', 'fire-protection']
  },
  {
    title: 'Selección de Cañón Monitor: Manual vs Automático (ZDMS)',
    description: 'Monitores manuales PS vs cañones ZDMS de seguimiento automático: alcance, caudal, detección, tiempo de respuesta y comparación de costos para protección industrial y de grandes espacios.',
    href: '/es/guides/fire-water-monitor-selection-guide/',
    date: '2026',
    category: 'Protección Contra Incendios',
    readTime: readTime('6'),
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Válvulas para Sistemas de Rociadores: Guía Completa (Húmedo, Diluvio y Preacción)',
    description: 'Cómo funcionan las válvulas de alarma tipo húmedo ZSFZ, de diluvio ZSFM, de preacción ZSFY y los indicadores de flujo ZSJZ — y cuándo especificar cada una para su sistema de rociadores.',
    href: '/es/guides/fire-sprinkler-system-valves-guide/',
    date: '2026',
    category: 'Protección Contra Incendios',
    readTime: readTime('7'),
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Lista de Verificación B2B: Cómo Verificar un Fabricante de Equipos Contra Incendios',
    description: 'Lista de 8 puntos para verificar fabricantes de válvulas: certificados, informes de prueba por lote, auditorías de fábrica, muestras y señales de alerta al comprar en China.',
    href: '/es/guides/b2b-valve-sourcing-checklist/',
    date: '2026',
    category: 'Compras B2B',
    readTime: readTime('6'),
    tags: ['procurement', 'certification', 'industrial-valves']
  },
  {
    title: 'Cómo Elegir Válvulas Contra Incendios Certificadas UL (Guía 2026)',
    description: 'Qué significa realmente el listado UL, UL vs FM, qué tipos de válvulas están listadas, cómo verificar certificados genuinos y una lista de compra para compradores B2B.',
    href: '/es/guides/how-to-choose-ul-listed-fire-valves/',
    date: '2026',
    category: 'Protección Contra Incendios',
    readTime: readTime('7'),
    tags: ['certification', 'fire-protection', 'industrial-valves']
  },
  {
    title: 'Guía de Compra de Cañones de Agua: ¿Fijo, Remoto o Inteligente? (2026)',
    description: 'Cuándo necesita un cañón de agua, fijo vs remoto vs seguimiento automático, dimensionamiento de caudal y alcance, integración de control y lista de compra por sitio.',
    href: '/es/guides/fire-water-cannon-buying-guide/',
    date: '2026',
    category: 'Protección Contra Incendios',
    readTime: readTime('6'),
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Sistemas de Rociadores: ¿Húmedo, Seco o de Preacción? (Guía 2026)',
    description: 'Comparación práctica de sistemas húmedos, secos y de preacción; cómo seleccionar rociadores (factor K, temperatura, respuesta) y los componentes que necesita su lista de materiales.',
    href: '/es/guides/fire-sprinkler-system-wet-dry-preaction/',
    date: '2026',
    category: 'Protección Contra Incendios',
    readTime: readTime('7'),
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Cómo Elegir un Hidrante Contra Incendios para Proyectos Municipales e Industriales (2026)',
    description: 'Guía de compra paso a paso: tipos de hidrante, clases de presión, normas de conexión, requisitos de certificación y la lista de verificación de fábrica antes de ordenar.',
    href: '/es/guides/how-to-choose-a-fire-hydrant/',
    date: '2026',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Válvula de Compuerta vs Válvula de Mariposa para Protección Contra Incendios',
    description: 'Compare rendimiento de cierre, espacio de instalación, pérdida de presión, mantenimiento y criterios de selección para tuberías de protección contra incendios.',
    href: '/es/guides/gate-valve-vs-butterfly-valve-fire-protection/',
    date: '2026',
    category: 'Válvulas',
    readTime: readTime('7'),
    tags: ['industrial-valves', 'fire-protection']
  },
  {
    title: 'Tipos de Válvulas de Control para Rociadores: OS&Y, Mariposa y Retención',
    description: 'Compuertas OS&Y, mariposas señalizadoras y retenciones en sistemas de rociadores, más una tabla comparativa y lista de especificación UL/FM para compradores B2B.',
    href: '/es/guides/fire-sprinkler-control-valve-types/',
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Guía de Válvulas de Compuerta con Sello de Fuelle: Tipos con Brida ANSI para Vapor y Aceite Térmico',
    description: 'Cómo funciona el doble sello con fuelle soldado, dónde se especifican, normas ANSI/GB y lista de especificación B2B para servicios de vapor y aceite térmico.',
    href: '/es/guides/bellows-seal-gate-valve-guide/',
    date: '2026-09',
    category: 'Válvulas',
    readTime: readTime('7'),
    tags: ['industrial-valves', 'bellows-seal-gate-valve']
  },
  {
    title: 'Guía de Válvulas Reductoras de Presión: PRV Hidráulica 500X y Válvulas de Agua (2026)',
    description: 'Cómo funcionan las reductoras hidráulicas auto-operadas, 500X vs control de nivel F745X vs flotador remoto 100X, instalación y lista de especificación B2B para redes de agua.',
    href: '/es/guides/pressure-reducing-valve-guide/',
    date: '2026-09',
    category: 'Seguridad Hidráulica',
    readTime: readTime('8'),
    tags: ['backflow-prevention', 'industrial-valves']
  },
  {
    title: 'Tipos de Válvulas de Retención y Selección: Bola Deslizante vs Clapeta (2026)',
    description: 'Tipos comparados: oscilante vs HQ41X de bola deslizante vs HQ44X de bola esférica: pérdida de carga, golpe de ariete, cierre sin golpe, orientación de instalación y lista B2B.',
    href: '/es/guides/check-valve-types-guide/',
    date: '2026-09',
    category: 'Válvulas',
    readTime: readTime('8'),
    tags: ['industrial-valves', 'backflow-prevention']
  },
  {
    title: 'Guía de Selección de Extintores: Polvo Químico Seco ABC para Compradores B2B (2026)',
    description: 'Cómo elegir extintores portátiles para exportación: clases de fuego vs agentes, especificaciones ABC, ISO 7165 y CCCF, aplicaciones y lista de compra de fábrica (OEM, MOQ, mercancía peligrosa).',
    href: '/es/guides/fire-extinguisher-selection-guide/',
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Guía de Compra de Manguera Plana Contra Incendios: Tamaños, Revestimientos y Acoples (2026)',
    description: 'Cómo comprar manguera plana para bomberos y transferencia industrial: construcción y sellado de bordes, dimensionamiento de diámetro y largo, normas Storz/BS336/NIST y lista OEM.',
    href: '/es/guides/fire-hose-buying-guide/',
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Wanlian Fluid vs American AVK: ¿Qué Proveedor de Hidrantes y Válvulas Encaja en su Proyecto 2026?',
    description: 'Comparación basada en datos para compras 2026: líneas de producto, hidrantes AWWA C502, sistemas de calidad, costo y plazo — y cómo la geografía, el alcance y la especificación eligen al proveedor.',
    href: '/es/guides/wanlian-fluid-vs-american-avk/',
    date: '2026-09',
    category: 'Compras B2B',
    readTime: readTime('9'),
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Cómo Verificar un Proveedor Chino de Válvulas y Equipos Contra Incendios en 2026',
    description: 'Lista de verificación en 5 pasos: validez de ISO 9001, informes de prueba por norma, inspección de terceros, señales de falsificación y documentación de importación.',
    href: '/es/guides/how-to-verify-chinese-valve-supplier/',
    date: '2026-09',
    category: 'Compras B2B',
    readTime: readTime('7'),
    tags: ['procurement', 'certification']
  },
  {
    title: 'Normas de Hidrantes, Mangueras y Válvulas Explicadas: AWWA, NFPA, EN e ISO',
    description: 'Guía de normas para compradores: AWWA C502/C515, NFPA 1961, EN 14384, BS 750, EN 1074 e ISO 5208 — con un proceso de 5 verificaciones para comprar equipos conformes desde China.',
    href: '/es/guides/fire-hydrant-valve-standards-guide/',
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Guía de Cumplimiento CE y EN 12845: Equipos Contra Incendios para el Mercado Europeo (2026)',
    description: 'Cumplimiento europeo explicado para compradores B2B: succión de bombas EN 12845, marcado CE por modelo, ensayos EN 12266-1, acoples Storz/BS336/KWS y límites ISO 7165 vs CCCF.',
    href: '/es/guides/ce-en12845-fire-protection-compliance/',
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['certification', 'fire-protection']
  },
  {
    title: 'Guía de Selección de Rociadores: Factor K, Temperatura y Respuesta (2026)',
    description: 'Cómo seleccionar rociadores: factor K y caudal (K=80/K=115), clasificaciones de temperatura y color del bulbo, respuesta rápida vs estándar, orientación y listado UL en contexto NFPA 13.',
    href: '/es/guides/fire-sprinkler-head-selection-guide/',
    date: '2026-09',
    category: 'Protección Contra Incendios',
    readTime: readTime('8'),
    tags: ['sprinkler-systems', 'fire-protection']
  }
];

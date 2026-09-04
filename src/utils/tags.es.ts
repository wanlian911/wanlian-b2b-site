// Etiquetas (tags) en español — M3
// key = slug (igual que tags.ts); las páginas /es/tags/[slug]/ usan estos textos.
export interface TagEs {
  name: string;
  seoTitle: string;
  description: string;
}

export const tagsEs: Record<string, TagEs> = {
  'fire-protection': {
    name: 'Protección Contra Incendios',
    seoTitle: 'Equipos y Sistemas de Protección Contra Incendios: Válvulas, Hidrantes y Rociadores',
    description: 'La gama completa Wanlian de protección contra incendios — hidrantes, válvulas para sistemas de rociadores, carretes y gabinetes, extintores portátiles y cañones de agua — con guías de compra y orientación de certificación para proyectos B2B.'
  },
  'fire-hydrant': {
    name: 'Hidrantes Contra Incendios',
    seoTitle: 'Hidrantes Contra Incendios: Tipos, Normas y Selección',
    description: 'Bocas de hidrante interiores SN65, hidrantes de columna SS100, anticolisión SSFT100 e hidrantes inteligentes IoT para redes municipales e industriales de protección contra incendios.'
  },
  'sprinkler-systems': {
    name: 'Sistemas de Rociadores',
    seoTitle: 'Sistemas de Rociadores: Válvulas de Húmedo, Diluvio y Preacción',
    description: 'Válvulas de alarma tipo húmedo, válvulas de diluvio, sistemas de preacción, rociadores e indicadores de flujo para protección automática por rociadores en edificios comerciales e industriales.'
  },
  'fire-water-cannon': {
    name: 'Cañones de Agua Contra Incendios',
    seoTitle: 'Cañones y Monitores de Agua Contra Incendios: Manual vs Seguimiento Automático',
    description: 'Monitores de incendio manuales PS y cañones ZDMS de seguimiento automático para supresión en grandes espacios e industria, con orientación de alcance de chorro, caudal e integración de control.'
  },
  'backflow-prevention': {
    name: 'Prevención de Reflujo',
    seoTitle: 'Dispositivos Anti-Retorno y Válvulas de Control Hidráulico',
    description: 'Dispositivos anti-retorno HS41X, válvulas reductoras de presión, de control de nivel y solenoide para protección de agua potable y seguridad hidráulica.'
  },
  'industrial-valves': {
    name: 'Válvulas Industriales',
    seoTitle: 'Válvulas Industriales: Compuerta, Mariposa y Retención',
    description: 'Válvulas de compuerta con asiento elástico, mariposas tipo wafer, retenciones de bola y coladores en Y para suministro de agua, alcantarillado, HVAC y tuberías de proceso industrial.'
  },
  'fire-hose-reel': {
    name: 'Carretes y Gabinetes Contra Incendios',
    seoTitle: 'Carretes de Manguera y Gabinetes Contra Incendios: Guía de Selección',
    description: 'Carretes de manguera JPS0.8-19, gabinetes de espuma PSG30, válvulas SN65 y adaptadores de acople para estaciones interiores de extinción y áreas de riesgo Clase B.'
  },
  certification: {
    name: 'Certificación y Cumplimiento',
    seoTitle: 'Guía de Certificación de Válvulas: UL, FM, CE, LPCB',
    description: 'Entender la certificación UL/FM/CE/LPCB para válvulas e hidrantes contra incendios, verificar certificados genuinos y los requisitos de cumplimiento para mercados de exportación.'
  },
  procurement: {
    name: 'Compras B2B',
    seoTitle: 'Lista de Verificación de Abastecimiento B2B de Válvulas y Equipos Contra Incendios',
    description: 'Verificación de fábricas, revisión de certificados, informes de prueba por lote, políticas de muestra y señales de alerta al abastecerse de válvulas y equipos de protección contra incendios en China.'
  },
  'bellows-seal-gate-valve': {
    name: 'Válvulas de Compuerta con Sello de Fuelle',
    seoTitle: 'Válvulas de Compuerta con Sello de Fuelle para Vapor y Aceite Térmico',
    description: 'Válvulas de compuerta de fuelle metálico con doble sellado para vapor, aceite térmico y agua a alta temperatura — tipos con brida ANSI para líneas industriales críticas en emisiones fugitivas.'
  }
};

// Tags em português (PT-BR)
// key = slug (igual a tags.ts); as páginas /pt/tags/[slug]/ usam estes textos.
export interface TagPt {
  name: string;
  seoTitle: string;
  description: string;
}

export const tagsPt: Record<string, TagPt> = {
  "fire-protection": {
    name: "Proteção contra Incêndio",
    seoTitle: "Equipamentos e Sistemas de Proteção contra Incêndio: Válvulas, Hidrantes e Rociadores",
    description: "A linha completa de proteção contra incêndio da Wanlian — hidrantes, válvulas de sistemas de rociadores, carretes e armários contra incêndio, extintores portáteis e canhões monitora — com guias de compra e orientação sobre certificações para projetos B2B."
  },
  "fire-hydrant": {
    name: "Hidrantes contra Incêndio",
    seoTitle: "Hidrantes contra Incêndio: Tipos, Normas e Seleção",
    description: "Cabeças de hidrante interno SN65, hidrantes de coluna SS100, hidrantes anti-colisão SSFT100 e hidrantes inteligentes IoT para redes municipais e industriais de proteção contra incêndio."
  },
  "sprinkler-systems": {
    name: "Sistemas de Rociadores",
    seoTitle: "Sistemas de Rociadores: Válvulas de Alarme, Dilúvio e Pré-ação",
    description: "Válvulas de alarme do tipo molhada, válvulas de dilúvio, sistemas de pré-ação, rociadores e indicadores de vazão para proteção automática em edifícios comerciais e industriais."
  },
  "fire-water-cannon": {
    name: "Canhões Monitora de Incêndio",
    seoTitle: "Canhões Monitora e Monitores contra Incêndio: Manual vs Rastreamento Automático",
    description: "Monitores manuais PS e canhões de rastreamento automático ZDMS para supressão de incêndio em grandes espaços e instalações industriais, com orientação sobre alcance do jato, vazão e integração de controle."
  },
  "backflow-prevention": {
    name: "Prevenção de Refluxo",
    seoTitle: "Dispositivos Anti-Retorno e Válvulas de Controle Hidráulico",
    description: "Dispositivos anti-retorno anti-poluição HS41X, válvulas redutoras de pressão, de controle de nível e por solenoide para proteção da água potável e segurança hidráulica."
  },
  "industrial-valves": {
    name: "Válvulas Industriais",
    seoTitle: "Válvulas Industriais: Gaveta, Borboleta e Retenção",
    description: "Válvulas de gaveta com assento elástico, válvulas borboleta tipo wafer, válvulas de retenção de esfera e filtros em Y para abastecimento de água, esgoto, HVAC e tubulações de processo industrial."
  },
  "fire-hose-reel": {
    name: "Carretes de Mangueira e Armários contra Incêndio",
    seoTitle: "Carretes de Mangueira e Armários contra Incêndio: Guia de Seleção",
    description: "Carretes de mangueira JPS0.8-19, armários de espuma PSG30, válvulas de hidrante SN65 e adaptadores de acoplamento para estações internas de combate a incêndio e áreas de risco Classe B."
  },
  "certification": {
    name: "Certificação e Conformidade",
    seoTitle: "Guia de Certificação de Válvulas: UL, FM, CE e LPCB",
    description: "Entenda as certificações UL/FM/CE/LPCB para válvulas e hidrantes contra incêndio, verifique certificados autênticos e conheça os requisitos de conformidade para mercados de exportação."
  },
  "procurement": {
    name: "Compras B2B",
    seoTitle: "Checklist de Compras B2B de Válvulas e Equipamentos contra Incêndio",
    description: "Verificação da fábrica, conferência de certificados, laudos de teste por lote, políticas de amostras e sinais de alerta ao comprar válvulas e equipamentos de proteção contra incêndio da China."
  },
  "bellows-seal-gate-valve": {
    name: "Válvulas de Gaveta com Vedação por Diafragma",
    seoTitle: "Válvulas de Gaveta com Vedação por Diafragma para Vapor e Óleo Térmico",
    description: "Válvulas de gaveta com vedação por diafragma metálico e vedação dupla para vapor, óleo térmico e água em alta temperatura — tipos flangeados ANSI para linhas industriais críticas quanto a emissões fugitivas."
  }
};

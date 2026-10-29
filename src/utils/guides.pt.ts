// Guias (artigos) em português (PT-BR)
// Meta data para as listas /pt/blog/ e páginas de tag /pt/tags/.
// href aponta para as páginas reais /pt/guides/<slug>/.
import type { Guide } from './guides';

const readTime = (min: string) => `${min} min de leitura`;
const category = {
  fire: 'Proteção contra Incêndio',
  hydraulic: 'Segurança Hidráulica',
  procurement: 'Compras B2B',
  valves: 'Válvulas',
  hvac: 'HVAC e Válvulas Industriais',
  whitepaper: 'Whitepaper'
} as const;

export const guidesPt: Guide[] = [
  {
    title: 'Guia de Dimensionamento e Seleção de Válvulas de Dilúvio',
    description: 'Como funciona a válvula de dilúvio ZSFM: dimensionamento, vazão, tempo de disparo, acionamento, layout, ensaios e dados para RFQ.',
    href: '/pt/guides/deluge-valve-selection-guide/',
    tocPreview: ["1. Quando um sistema precisa de proteção por dilúvio", "2. Como funciona o grupo de válvula de dilúvio ZSFM", "3. Escolhendo o método de acionamento"],
    date: '2026-10',
    category: 'Proteção contra Incêndio',
    readTime: readTime('9'),
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'AWWA C509 vs EN 14461: Guia de Hidrantes',
    description: 'Compare hidrantes AWWA C509 e EN 14461: pressão, saídas, materiais, ensaios de tipo e como especificar um hidrante aceito pela AHJ.',
    href: '/pt/guides/awwa-c509-vs-en-14461-fire-hydrants/',
    tocPreview: ["1. Qual norma sua especificação realmente exige", "2. Pressão nominal e profundidade de instalação", "3. Configuração das saídas e padrões de união"],
    date: '2026-10',
    category: 'Proteção contra Incêndio',
    readTime: readTime('9'),
    tags: ['fire-hydrant', 'procurement']
  },
  {
    title: 'Sucção de Bomba e Reservatório de Incêndio',
    description: 'Dimensionamento do reservatório, duas sucções, vórtice, escorva e controle de nível para sucção de bomba contra incêndio.',
    href: '/pt/guides/fire-pump-suction-water-tank-guide/',
    tocPreview: ["1. De onde vem o volume de água contra incêndio", "2. Dimensionamento da reserva de água contra incêndio", "3. Regra das duas sucções e penetrações no reservatório"],
    date: '2026-10',
    category: 'Proteção contra Incêndio',
    readTime: readTime('9'),
    tags: ['fire-protection', 'industrial-valves']
  },
  {
    title: 'Como Comparar Cotações de Fornecedores Chineses',
    description: 'Guia B2B para RFQs de válvulas na China: especificações, diferenças de cotação, custos ocultos, avaliação e verificações antes do pedido.',
    href: '/pt/guides/china-valve-supplier-quote-guide/',
    tocPreview: ["1. Por que duas cotações para a mesma válvula diferem", "2. Como redigir uma RFQ para obter cotações precisas", "3. Como ler a cotação linha a linha"],
    date: '2026-10',
    category: 'Compras B2B',
    readTime: readTime('9'),
    tags: ['procurement', 'certification']
  },
  {
    title: 'Guia de sistemas de espuma por dilúvio (2026)',
    description: 'Sistemas de espuma e água para riscos de classe B: válvula de dilúvio, proporcionamento, concentrados, dispositivos de descarga e testes em campo.',
    href: '/pt/guides/foam-deluge-system-guide/',
    tocPreview: ["1. Quando a espuma supera a água", "2. Anatomia de um sistema de espuma por dilúvio", "3. Comparação das opções de proporcionamento"],
    date: '2026-10',
    category: 'Proteção contra Incêndio',
    readTime: readTime('9'),
    tags: ['fire-protection', 'sprinkler-systems']
  },
  {
    title: 'Prevenção de Refluxo em Redes de Proteção contra Incêndio e Água Potável (Guia 2026)',
    description: 'Por que dispositivos anti-retorno são obrigatórios em redes de uso duplo, como funcionam as válvulas de retenção dupla HS41X, controle de conexões cruzadas e checklist de seleção para compradores B2B.',
    cardTitle: 'Guia de Prevenção de Refluxo',
    cardDescription: 'Quando as redes de água potável precisam de conjuntos de dupla retenção e como o HS41X protege contra o reflujo.',
    href: '/pt/guides/backflow-prevention-guide/', date: '2026-08', category: category.hydraulic, readTime: readTime('8'),
    tocPreview: ['1. Por que a Prevenção de Refluxo Importa', '2. Classes de Risco e Tipos de Dispositivos', '3. Como o Conjunto de Retenção Dupla HS41X Funciona'],
    tags: ['backflow-prevention', 'industrial-valves', 'fire-protection']
  },
  {
    title: 'Guia de Seleção de Carrete de Mangueira e Armário contra Incêndio (2026)',
    description: 'Como especificar carretes de mangueira, armários de parede e unidades de espuma: comprimento e diâmetro da mangueira, modos do bocal, materiais do armário, seleção de espuma e conformidade para incêndios Classe A/B.',
    cardTitle: 'Guia de Seleção de Carretéis de Mangueira e Armários Contra Incêndio',
    cardDescription: 'Carretéis JPS0.8-19, armários de espuma PSG30 e válvulas de hidrante SN65 — o que um posto de combate a incêndio interno completo precisa.',
    href: '/pt/guides/fire-hose-reel-cabinet-guide/', date: '2026-08', category: category.fire, readTime: readTime('7'),
    tocPreview: ['O Papel dos Carretes de Mangueira e Armários', 'Carrete de Mangueira vs Armário contra Incêndio: Definições', 'Comprimento, Diâmetro e Pressão da Mangueira'],
    tags: ['fire-hose-reel', 'fire-protection']
  },
  {
    title: 'Seleção de Monitor contra Incêndio: Manual vs Rastreamento Automático (ZDMS)',
    description: 'Monitores manuais PS vs canhões ZDMS de rastreamento automático — alcance, vazão, detecção, tempo de resposta e comparação de custos para proteção industrial e de grandes espaços.',
    cardTitle: 'Seleção de Canhões Monitora: Manual vs. Rastreamento Automático',
    cardDescription: 'Monitores manuais PS vs. canhões de rastreamento automático ZDMS — vazão, alcance, controle e opções à prova de explosão.',
    href: '/pt/guides/fire-water-monitor-selection-guide/', date: '2026', category: category.fire, readTime: readTime('6'),
    tocPreview: ['1. Monitores Manuais (Série PS): Controle do Operador', '2. Monitores de Rastreamento Automático (ZDMS): Resposta Autônoma', '3. Comparação Direta'],
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Válvulas para Sistemas de Rociadores: Guia Completo (Molhado, Dilúvio e Pré-ação)',
    description: 'Como funcionam as válvulas de alarme molhada ZSFZ, de dilúvio ZSFM, de pré-ação ZSFY e os indicadores de vazão ZSJZ — e quando especificar cada uma no seu sistema de rociadores.',
    href: '/pt/guides/fire-sprinkler-system-valves-guide/', date: '2026', category: category.fire, readTime: readTime('7'),
    tocPreview: ['1. Sistemas Molhados: a Válvula de Alarme ZSFZ', '2. Sistemas de Dilúvio: a Válvula ZSFM', '3. Sistemas de Pré-ação: a Válvula ZSFY de Duplo Acionamento'],
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Checklist de Compras B2B: Como Verificar um Fabricante de Equipamentos contra Incêndio',
    description: 'Checklist de diligência em 8 pontos para verificar fabricantes de válvulas — certificados, laudos de teste por lote, auditorias de fábrica, amostras e sinais de alerta ao comprar da China.',
    href: '/pt/guides/b2b-valve-sourcing-checklist/', date: '2026', category: category.procurement, readTime: readTime('6'),
    tocPreview: ['Checklist de Verificação em 8 Pontos', 'Resumo dos Sinais de Alerta', 'Como Solicitar uma Cotação Verificada'],
    tags: ['procurement', 'certification', 'industrial-valves']
  },
  {
    title: 'Como Escolher Válvulas de Incêndio Listadas pela UL para seu Projeto (Guia 2026)',
    description: 'O que a listagem UL realmente significa, UL vs FM, quais tipos de válvula são listados, como verificar certificados autênticos e checklist de compras para compradores B2B.',
    href: '/pt/guides/how-to-choose-ul-listed-fire-valves/', date: '2026', category: category.fire, readTime: readTime('7'),
    tocPreview: ['1. O que significa a listagem UL para válvulas de incêndio', '2. Tipos de válvulas de incêndio que você realmente especificará', '3. Especificações principais para comparar'],
    tags: ['certification', 'fire-protection', 'industrial-valves']
  },
  {
    title: 'Guia de Compra de Canhão Monitora de Incêndio: Fixo, Remoto ou Inteligente? (2026)',
    description: 'Quando você precisa de um canhão monitora, escolha entre fixo, remoto e rastreamento automático, dimensione vazão e alcance, integre o controle e use um checklist de compras baseado no local.',
    cardTitle: 'Guia de Compra de Canhões Monitora Contra Incêndio',
    cardDescription: 'Fixo, remoto ou inteligente? Alcance do jato, vazão e fatores de instalação para supressão de incêndio em grandes espaços.',
    href: '/pt/guides/fire-water-cannon-buying-guide/', date: '2026', category: category.fire, readTime: readTime('6'),
    tocPreview: ['1. Você Realmente Precisa de um Canhão Monitora?', '2. Fixo, Remoto ou Rastreamento Automático?', '3. Dimensionando Vazão e Alcance'],
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Sistemas de Rociadores: Molhado, Seco ou Pré-ação? (Guia 2026)',
    description: 'Comparação prática de sistemas molhado, seco e de pré-ação, como selecionar cabeças de rociador (fator K, temperatura, resposta) e os componentes necessários no seu BOM.',
    cardTitle: 'Sistemas de Rociadores: Molhado, Seco ou de Pré-Ação?',
    cardDescription: 'Compare as configurações de sistemas de rociadores molhado, seco e de pré-ação conforme a classe de risco do seu prédio.',
    href: '/pt/guides/fire-sprinkler-system-wet-dry-preaction/', date: '2026', category: category.fire, readTime: readTime('7'),
    tocPreview: ['1. Os três tipos de sistemas comparados', '2. Escolhendo cabeças de rociador', '3. Os componentes que seu BOM precisa'],
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Como Escolher um Hidrante contra Incêndio para Projetos Municipais e Industriais (Guia 2026)',
    description: 'Guia de compras passo a passo sobre tipos de hidrante, classes de pressão, normas de conexão, requisitos de certificação e checklist da fábrica antes do pedido.',
    cardTitle: 'Como Escolher um Hidrante Contra Incêndio',
    cardDescription: 'Interno vs. exterior, coluna seca vs. molhada, normas de saída e classes de pressão para projetos municipais e industriais.',
    href: '/pt/guides/how-to-choose-a-fire-hydrant/', date: '2026', category: category.fire, readTime: readTime('8'),
    tocPreview: ['1. Entenda primeiro sua necessidade de hidrante', '2. Tipos de hidrantes contra incêndio', '3. Especificações principais para comparar'],
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Válvula de Gaveta vs Válvula Borboleta para Proteção contra Incêndio',
    description: 'Compare desempenho de bloqueio, espaço de instalação, perda de carga, manutenção e critérios de seleção para tubulações de proteção contra incêndio.',
    cardTitle: 'Válvula de Gaveta vs. Válvula Borboleta para Proteção Contra Incêndio',
    cardDescription: 'Vedação, vazão, perda de carga e custo comparados para escolher a válvula de isolamento correta para ramais de incêndio e redes de água.',
    href: '/pt/guides/gate-valve-vs-butterfly-valve-fire-protection/', date: '2026', category: category.valves, readTime: readTime('7'),
    tocPreview: ['1. Como funcionam: uma comparação rápida', '2. Comparação direta: gaveta vs borboleta', '3. Onde cada válvula se encaixa nos sistemas de proteção contra incêndio'],
    tags: ['industrial-valves', 'fire-protection']
  },
  {
    title: 'Tipos de Válvulas de Controle de Rociadores: OS&Y, Borboleta e Retenção',
    description: 'Funções das válvulas de gaveta OS&Y, borboleta com sinal e retenção em sistemas de rociadores, além de tabela comparativa e checklist de especificação UL/FM para compradores B2B.',
    cardTitle: 'Tipos de Válvulas de Controle de Redes de Rociadores: OS&Y, Borboleta e Retenção',
    cardDescription: 'O papel de cada válvula de controle em uma rede de rociadores e como as válvulas OS&Y, borboleta e de retenção trabalham juntas.',
    href: '/pt/guides/fire-sprinkler-control-valve-types/', date: '2026-09', category: category.fire, readTime: readTime('8'),
    tocPreview: ['1. O Que as Válvulas de Controle de Rociadores Fazem', '2. Válvulas de Gaveta OS&Y: Isolamento Principal Monitorado', '3. Válvulas Borboleta com Sinal para Controle de Seções'],
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Guia da Válvula de Gaveta com Vedação por Diafragma: Tipos Flangeados ANSI para Vapor e Óleo Térmico',
    description: 'Como funciona a vedação dupla por diafragma soldado, onde válvulas de gaveta com diafragma são especificadas, normas ANSI/GB e checklist B2B para vapor e óleo térmico.',
    href: '/pt/guides/bellows-seal-gate-valve-guide/', date: '2026-09', category: category.valves, readTime: readTime('7'),
    tocPreview: ['1. O que é uma válvula de gaveta com vedação por diafragma (bellows)?', '2. Como funciona a vedação dupla', '3. Onde as válvulas com diafragma são especificadas'],
    tags: ['industrial-valves', 'bellows-seal-gate-valve']
  },
  {
    title: 'Guia da Válvula Redutora de Pressão: PRV Hidráulica 500X e Válvulas de Abastecimento (2026)',
    description: 'Como funcionam as válvulas redutoras de pressão hidráulicas autopilotadas, 500X PRV vs F745X de controle de nível vs 100X de flutuador remoto, instalação e checklist B2B para redes de abastecimento.',
    cardTitle: 'Guia de Válvulas Redutoras de Pressão: PRV Hidráulico 500X',
    cardDescription: "Como as redutoras pilotadas protegem equipamentos a jusante, regulam a pressão e evitam o martelo d'água.",
    href: '/pt/guides/pressure-reducing-valve-guide/', date: '2026-09', category: category.hydraulic, readTime: readTime('8'),
    tocPreview: ['1. O que é uma válvula redutora de pressão hidráulica?', '2. Como funciona a válvula 500X autopilotada', '3. Redutora vs. controle de nível vs. flutuador'],
    tags: ['backflow-prevention', 'industrial-valves']
  },
  {
    title: 'Tipos de Válvulas de Retenção e Guia de Seleção: Esfera Deslizante vs Clapeta (2026)',
    description: 'Tipos de válvula de retenção comparados — clapeta vs esfera deslizante HQ41X vs esfera esférica HQ44X: perda de carga, martelo d’água, fechamento sem impacto, orientação de instalação e checklist B2B.',
    cardTitle: 'Tipos de Válvulas de Retenção e Guia de Seleção',
    cardDescription: 'Retenção de esfera deslizante vs. clapeta oscilante — perda de carga, comportamento no fechamento e as aplicações ideais de cada tipo.',
    href: '/pt/guides/check-valve-types-guide/', date: '2026-09', category: category.valves, readTime: readTime('8'),
    tocPreview: ['1. O que é uma Válvula de Retenção?', '2. Visão Geral dos Tipos de Válvula de Retenção', '3. Esfera Deslizante vs Clapeta Oscilante'],
    tags: ['industrial-valves', 'backflow-prevention']
  },
  {
    title: 'Guia de Seleção de Extintores: Pó Químico ABC para Compradores B2B (2026)',
    description: 'Como escolher extintores portáteis para projetos de exportação: classes de fogo e agentes extintores, especificações do pó ABC, certificações ISO 7165 e CCCF, aplicações e checklist de fábrica com OEM, MOQ e embalagem para produtos perigosos.',
    cardTitle: 'Guia de Compra de Extintores: Pó Químico ABC',
    cardDescription: 'Cobertura das classes A/B/C/E, classificações ISO 7165 e embalagem de exportação B2B para extintores portáteis.',
    href: '/pt/guides/fire-extinguisher-selection-guide/', date: '2026-09', category: category.fire, readTime: readTime('8'),
    tocPreview: ['1. Por que Extintores Lideram as Compras de Proteção contra Incêndio', '2. Classes de Fogo e Agentes Extintores', '3. Especificações do Pó Químico ABC Explicadas'],
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Guia de Compra de Mangueira de Incêndio Plana: Tamanhos, Revestimentos e Acoplamentos (2026)',
    description: 'Como comprar mangueira de incêndio plana para combate a incêndio e transferência industrial de água: construção e selagem das bordas, dimensionamento, normas de acoplamento Storz/BS336/NIST, bocais e checklist de fábrica OEM.',
    href: '/pt/guides/fire-hose-buying-guide/', date: '2026-09', category: category.fire, readTime: readTime('8'),
    tocPreview: ['1. Mangueira de Incêndio Plana vs Carrete de Mangueira', '2. Construção da Mangueira: Gaine, Revestimento e Selagem das Bordas', '3. Dimensionamento: Diâmetro, Comprimento e Aplicações'],
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Wanlian Fluid vs American AVK: Qual Fornecedor de Hidrantes e Válvulas se Encaixa no seu Projeto 2026?',
    description: 'Comparação baseada em dados entre Wanlian Fluid e American AVK para compras em 2026: linhas de produtos, hidrantes AWWA C502, sistemas de qualidade, custo e prazo de entrega — e como escolher pelo escopo e especificação.',
    href: '/pt/guides/wanlian-fluid-vs-american-avk/', date: '2026-09', category: category.procurement, readTime: readTime('9'),
    tocPreview: ['1. American AVK: o que a empresa realmente é', '2. Wanlian Fluid: o que a empresa realmente é', '3. Como as linhas de produtos se comparam?'],
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Como Verificar um Fornecedor Chinês de Válvulas e Equipamentos contra Incêndio em 2026',
    description: 'Checklist de verificação de fornecedores em 5 etapas para 2026: validade da ISO 9001, laudos de teste conforme as normas, inspeção de terceiros, sinais de falsificação e documentação de importação.',
    href: '/pt/guides/how-to-verify-chinese-valve-supplier/', date: '2026-09', category: category.procurement, readTime: readTime('7'),
    tocPreview: ['1. Verifique a empresa, não o folheto', '2. Relacione o produto à norma do seu pedido de compra', '3. Exija testes por unidade e de terceiros'],
    tags: ['procurement', 'certification']
  },
  {
    title: 'Normas de Hidrantes, Mangueiras e Válvulas: AWWA, NFPA, EN e ISO',
    description: 'Guia de normas para compradores de hidrantes, mangueiras e válvulas: AWWA C502/C515, NFPA 1961, EN 14384, BS 750, EN 1074 e ISO 5208 — com processo de 5 verificações para comprar equipamentos conformes da China.',
    cardTitle: 'Normas de Hidrantes, Mangueiras e Válvulas Explicadas',
    cardDescription: 'AWWA C502, NFPA 1961, EN 14384, BS 750 — qual norma se aplica ao seu pedido e como verificar a conformidade.',
    href: '/pt/guides/fire-hydrant-valve-standards-guide/', date: '2026-09', category: category.fire, readTime: readTime('8'),
    tocPreview: ['1. As Cinco Famílias de Normas que Você Realmente Vai Encontrar', '2. Como Ler uma Norma Diante de um Laudo de Teste', '3. O Que Significam as Classes de Pressão na Prática'],
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Guia de Conformidade CE e EN 12845: Equipamentos contra Incêndio para o Mercado Europeu (2026)',
    description: 'Conformidade europeia para compradores B2B: requisitos de sucção da bomba de rociadores EN 12845, marcação CE por modelo, testes de válvulas EN 12266-1, conexões Storz/BS336/KWS e limite entre ISO 7165 e CCCF para extintores.',
    href: '/pt/guides/ce-en12845-fire-protection-compliance/', date: '2026-09', category: category.fire, readTime: readTime('8'),
    tocPreview: ['1. Por que a conformidade europeia importa para o equipamento contra incêndio', '2. Bases do selo CE: por modelo, nunca por série', '3. EN 12845 e o pacote de sucção da bomba de incêndio'],
    tags: ['certification', 'fire-protection']
  },
  {
    title: 'Guia de Seleção de Rociadores contra Incêndio: Fator K, Temperatura e Resposta (2026)',
    description: 'Como selecionar rociadores: fator K e vazão (K=80/K=115), classes de temperatura e código de cores dos bulbos, resposta rápida ou padrão, orientação pendente/upright/parede lateral/embutida e listagem UL no contexto da NFPA 13.',
    href: '/pt/guides/fire-sprinkler-head-selection-guide/', date: '2026-09', category: category.fire, readTime: readTime('8'),
    tocPreview: ['1. Comece Pelo Tipo de Sistema, Depois pelo Rociador', '2. Fator K e Vazão: Adequando o Fornecimento de Água', '3. Classes de Temperatura e Código de Cores dos Bulbos'],
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Guia de Válvulas Ranuradas contra Incêndio: Conexões Ranuradas vs Flangeadas (2026)',
    description: 'Válvulas de extremidade ranurada para redes principais de rociadores vs flangeadas: borboleta com sinal, gaveta OS&Y, válvulas ranuradas de inox e solenoide, velocidade de instalação, supervisão e checklist B2B.',
    href: '/pt/guides/grooved-fire-protection-valves-guide/', date: '2026-09', category: category.fire, readTime: readTime('8'),
    tocPreview: ['1. O Que É uma Válvula de Extremidade Ranurada?', '2. Ranurada vs Flangeada vs Roscada', '3. A Família de Válvulas Ranuradas para Redes Principais'],
    tags: ['fire-protection', 'industrial-valves']
  },
  {
    title: 'Guia de Hidrantes Anticongelantes e Anti-Colisão: Clima Frio e Segurança (2026)',
    description: 'Hidrantes anticongelantes de coluna seca, hidrantes anti-colisão com parafuso de cisalhamento e modelos monitorados por IoT: proteção contra congelamento, fechamento por impacto, regulagem de pressão e checklist B2B.',
    href: '/pt/guides/antifreeze-anti-collision-fire-hydrant-guide/', date: '2026-09', category: category.fire, readTime: readTime('8'),
    tocPreview: ['1. Por que os Hidrantes Falham no Clima Frio', '2. Como Funcionam os Hidrantes Anticongelantes (Coluna Seca)', '3. Como os Hidrantes Anti-Colisão Se Fecham'],
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Guia da Conexão de Bombeiros (Siamese): Entradas, Acoplamentos e Instalação (2026)',
    description: 'Conexões siamesas de bombeiros: duas entradas DN65 (SQS65/KWS65), saída flangeada DN100, válvula de controle integrada, opções de acoplamento Storz e HS, instalação e checklist B2B.',
    href: '/pt/guides/fire-department-connection-siamese-guide/', date: '2026-09', category: category.fire, readTime: readTime('8'),
    tocPreview: ['1. O que é uma Conexão de Bombeiros?', '2. Duas Entradas, Uma Saída', '3. Normas de Acoplamento de Entrada e Adaptadores'],
    tags: ['fire-protection', 'fire-hydrant']
  },
  {
    title: 'Infraestrutura Municipal de Água e Incêndio na América Latina: Guia de Compras B2B (2026)',
    description: 'Compra de hidrantes, válvulas de gaveta e mangueiras para infraestrutura municipal de água e incêndio na América Latina: regimes de normas regionais, pacotes em um pedido, documentação e matriz de seleção.',
    href: '/pt/guides/municipal-water-fire-infrastructure-latinamerica/', date: '2026-09', category: category.procurement, readTime: readTime('8'),
    tocPreview: ['1. O que realmente inclui um projeto municipal de água e incêndio', '2. Normas na região: o que a licitação pode exigir', '3. Como um único pedido reduz o risco de coordenação'],
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Requisitos de Certificação para Válvulas e Hidrantes contra Incêndio em Projetos Latino-Americanos (2026)',
    description: 'O que UL, FM, AWWA, NOM e ABNT significam em uma licitação latino-americana, como são concedidos por modelo, como verificar certificados autênticos e quais documentos solicitar por modelo.',
    href: '/pt/guides/latinamerica-certification-requirements-fire-valves/', date: '2026-09', category: category.procurement, readTime: readTime('8'),
    tocPreview: ['1. Cenário de certificações para projetos de incêndio na América Latina', '2. Certificação por certificação: o que é e como verificar', '3. Por modelo versus por fábrica: a distinção importante'],
    tags: ['certification', 'procurement', 'industrial-valves']
  },
  {
    title: 'Como Detectar Válvulas Falsas e Certificados Falsificados de Equipamentos contra Incêndio (Guia 2026)',
    description: 'Checklist de detecção em sete etapas e tabela de sinais de alerta para identificar números de série clonados, plaquetas copiadas, fundições de parede fina e certificados UL/FM/AWWA falsificados ao comprar da China.',
    href: '/pt/guides/detect-fake-valves-fire-equipment-counterfeits/', date: '2026-09', category: category.procurement, readTime: readTime('8'),
    tocPreview: ['1. Por que as Falsificações se Concentram nessa Categoria', '2. As Formas Mais Comuns de Falsificações', '3. Uma Checklist de Detecção em Sete Etapas'],
    tags: ['procurement', 'certification']
  },
  {
    title: 'Wanlian Fluid vs AVK Latinoamérica: Fornecedor de Válvulas e Hidrantes para Projetos LatAm (2026)',
    description: 'Wanlian Fluid vs AVK Latinoamérica (AVK Válvulas, Tarragona): cobertura de distribuição, linha de produtos, kits em um pedido, OEM, estrutura de custos e prazo de entrega — e como escolher para seu projeto LatAm.',
    href: '/pt/guides/wanlian-fluid-vs-avk-latinamerica/', date: '2026-09', category: category.procurement, readTime: readTime('9'),
    tocPreview: ['1. Quem é, de fato, a AVK Latinoamérica', '2. Quem é a Wanlian Fluid', '3. Comparação lado a lado'],
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Guia de Válvula de Balanceamento Digital HVAC: Seleção SP45F (2026)',
    description: 'Guia da válvula de balanceamento digital HVAC: como os dois pontos de teste de pressão e a trava digital do SP45F apoiam o comissionamento hidrônico, além de dados para RFQ e comparação de válvulas.',
    href: '/pt/guides/hvac-digital-balancing-valve-guide/', date: '2026-09', category: category.hvac, readTime: readTime('8'),
    tocPreview: ['1. O que é uma válvula de balanceamento HVAC?', '2. Como funciona a válvula digital SP45F', '3. Válvula de balanceamento vs. válvula redutora de pressão'],
    tags: ['industrial-valves', 'backflow-prevention']
  },
  {
    title: 'Wanlian Fluid vs CA-FIRE: Qual Fabricante Chinês de Proteção contra Incêndio se Encaixa no seu Projeto 2026?',
    description: 'Wanlian Fluid vs CA-FIRE em 2026: rociadores aprovados pela FM, monitores, hidrantes, válvulas de alarme e kits completos — qual fabricante chinês atende ao seu projeto.',
    href: '/pt/guides/wanlian-fluid-vs-ca-fire/', date: '2026-09', category: category.procurement, readTime: readTime('9'),
    tocPreview: ['1. CA-FIRE: o que a empresa realmente é', '2. Wanlian Fluid: o que a empresa realmente é', '3. Como as linhas de produtos se comparam?'],
    tags: ['procurement', 'fire-protection']
  },
  {
    title: 'Wanlian Fluid vs Forede: Escolha um Fabricante Chinês de Monitores e Equipamentos contra Incêndio (2026)',
    description: 'Wanlian Fluid vs Forede em 2026: monitores, canhões de água, sistemas de espuma, hidrantes e válvulas — qual fabricante chinês de equipamentos contra incêndio atende ao seu projeto?',
    href: '/pt/guides/wanlian-fluid-vs-forede/', date: '2026-09', category: category.procurement, readTime: readTime('9'),
    tocPreview: ['1. Forede: o que a empresa realmente é', '2. Wanlian Fluid: o que realmente somos', '3. Comparação das linhas de produtos'],
    tags: ['procurement', 'fire-protection', 'fire-water-cannon']
  },
  {
    title: 'Wanlian Fluid vs Zhiyuan Fire: Fornecedores de Proteção contra Incêndio à Base de Água vs Gás (2026)',
    description: 'Wanlian Fluid vs Zhiyuan Fire em 2026: hidrantes, monitores e válvulas vs supressão por gás FM200/IG541 — qual fornecedor chinês de equipamentos contra incêndio atende ao seu projeto?',
    href: '/pt/guides/wanlian-fluid-vs-zhiyuan/', date: '2026-09', category: category.procurement, readTime: readTime('9'),
    tocPreview: ['1. Zhiyuan Fire: quem realmente é', '2. Wanlian Fluid: quem realmente somos', '3. Comparação lado a lado'],
    tags: ['procurement', 'fire-protection']
  },
  {
    title: 'Controle de Riscos em Compras Internacionais: Whitepaper para Compradores B2B (2026)',
    description: 'Como controlar riscos em compras internacionais de equipamentos de infraestrutura contra incêndio e água: 8 famílias de risco, controles pré-embarque, estruturas de pagamento e checklist de sinais de alerta.',
    href: '/pt/guides/cross-border-procurement-risk-whitepaper/', date: '2026-09', category: category.whitepaper, readTime: readTime('12'),
    tocPreview: ['1. Por que as Compras Internacionais Falham: a Estrutura de Risco', '2. As Oito Famílias de Risco', '3. Risco de Contraparte e Autenticidade'],
    tags: ['procurement', 'certification']
  },
  {
    title: 'BOM de Sistema de Rociadores para Edifício Comercial: Guia Completo de Compras (2026)',
    description: 'BOM completo para um sistema de rociadores comercial: grupos de válvula de alarme, válvulas OS&Y e de sinal, siamesa, rociadores e indicadores de vazão — um pacote, um pedido, verificado.',
    href: '/pt/guides/commercial-building-sprinkler-system-bom-guide/', date: '2026-09', category: category.fire, readTime: readTime('9'),
    tocPreview: ['1. Por que o pacote de rociadores é adquirido como um único escopo', '2. O grupo de válvula de alarme: o coração do sistema molhado', '3. Separação monitorada: válvulas OS&Y e borboletas de sinal'],
    tags: ['sprinkler-systems', 'fire-protection', 'procurement']
  },
  {
    title: 'Modernização da Rede Municipal de Água contra Incêndio: Pacote de Válvulas, Hidrantes e Mangueiras (2026)',
    description: 'Modernização de redes municipais contra incêndio: válvulas de isolamento, hidrantes anticongelantes, mangueiras e acoplamentos, normas do mercado de destino e como um pacote consolidado reduz os riscos da licitação.',
    href: '/pt/guides/municipal-fire-water-main-upgrade-guide/', date: '2026-09', category: category.procurement, readTime: readTime('8'),
    tocPreview: ['1. O que uma modernização da rede de incêndio realmente inclui', '2. Válvulas de isolamento: Z41X vs. Z41X-T telescópica', '3. Seleção de hidrantes por clima e risco viário'],
    tags: ['fire-hydrant', 'industrial-valves', 'procurement']
  },
  {
    title: 'Wanlian Fluid vs Tupy: Equipamentos contra Incêndio e Válvulas de Ferro Fundido Dúctil para Projetos LatAm (2026)',
    description: 'Wanlian Fluid vs Tupy em 2026: válvulas de ferro fundido dúctil, hidrantes, válvulas de alarme e mangueiras — qual fornecedor atende ao seu projeto latino-americano de água e incêndio?',
    href: '/pt/guides/wanlian-fluid-vs-tupy/', date: '2026-09', category: category.procurement, readTime: readTime('9'),
    tocPreview: ['1. Tupy: o que a empresa realmente é', '2. Wanlian Fluid: o que realmente somos', '3. Como as linhas de produtos se comparam?'],
    tags: ['procurement', 'industrial-valves']
  },
  {
    title: 'Wanlian Fluid vs Mueller: Compras de Hidrantes e Válvulas para Projetos com Especificação dos EUA (2026)',
    description: 'Wanlian Fluid vs Mueller em 2026: hidrantes, válvulas de gaveta, normas, certificação, custo e prazo de entrega — qual fornecedor atende ao seu projeto com especificação dos EUA ou de exportação?',
    href: '/pt/guides/wanlian-fluid-vs-mueller/', date: '2026-09', category: category.procurement, readTime: readTime('10'),
    tocPreview: ['1. Mueller: quem é de fato', '2. Wanlian Fluid: quem somos de fato', '3. Como as linhas de produtos se comparam?'],
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Mercado de Proteção contra Incêndio 2026: Dados, Crescimento e Sinais de Compras (Relatório)',
    description: 'Dados do mercado de proteção contra incêndio em 2026: comparação de sete estimativas independentes, sinais de crescimento regional e o que os números significam para a compra de válvulas, hidrantes e equipamentos.',
    href: '/pt/guides/fire-protection-market-data-report-2026/', date: '2026-09', category: category.procurement, readTime: readTime('8'),
    tocPreview: ['1. Qual é o Tamanho do Mercado — e Por Que os Números Divergem', '2. Sinais Regionais: Onde Está o Crescimento', '3. O Que os Dados Significam para as Compras'],
    tags: ['procurement', 'fire-protection']
  }
];

// products.pt.ts part 2 - slugs 16-30
import type { Product } from '../products';

export const productsPtPart2: Record<string, Product> = {
  'anti-pollution-backflow-preventer-hs41x': {
    id: '16',
    slug: 'anti-pollution-backflow-preventer-hs41x',
    name: 'Dispositivo Anti-Retorno Antipoluição (HS41X-16)',
    category: 'Segurança Hidráulica',
    description: 'O dispositivo anti-retorno antipoluição HS41X é uma válvula avançada de segurança hídrica composta por duas válvulas de retenção conectadas em série e uma cavidade de drenagem. Impede estritamente o reflujo do meio para proteger as redes de água potável contra a poluição.',
    features: [
      'Duplas válvulas de retenção independentes garantem o corte absoluto do reflujo',
      'Válvula de drenagem automática central que evacua a água imediatamente se a pressão a montante cair',
      'Design de baixa perda de carga com canais de fluido otimizados',
      'Encapsulamento EPDM do assento garante longa vida útil e vedação completa'
    ],
    specs: {
      'Diâmetro Nominal': 'DN50 - DN600',
      'Pressão Nominal': '1.0 MPa / 1.6 MPa / 2.5 MPa',
      'Material do Corpo': 'Ductile Iron / Cast Steel / Stainless Steel',
      'Meio Aplicável': 'Drinking Water, Potable Water',
      'Temperatura de Trabalho': '0°C to 80°C'
    },
    materials: {
      'Corpo e Tampa': 'Ductile Iron QT450',
      'Discos de Retenção': 'Stainless Steel 304 / EPDM covered',
      'Válvula de Dreno Intermediária': 'Solid Brass / Stainless Steel 304',
      'Molas Principais': 'Stainless Steel 304'
    },
    image: '/assets/products/anti-pollution-backflow-preventer-hs41x.webp',
    seoTitle: 'Dispositivo Anti-Retorno Antipoluição HS41X | Água Potável',
    seoDescription: 'Dispositivo anti-retorno antipoluição HS41X com dupla válvula de retenção e dreno automático para redes de água potável. Preço de fábrica Wanlian Fluid, China.'
  },
  'foam-fire-hydrant-cabinet-psg30': {
    id: '17',
    slug: 'foam-fire-hydrant-cabinet-psg30',
    name: 'Armário de Hidrante de Espuma (Série PSG30)',
    category: 'Armários de Incêndio e Interfaces',
    description: 'Unidade de combate a incêndio com espuma de baixa expansão, altamente eficiente e compacta. Integra em um armário de parede um tanque de armazenamento, dosificador de concentrado de espuma, carrete de mangueira e bocal de espuma especializado. Excepcionalmente eficaz contra incêndios de combustíveis, químicos e solventes.',
    features: [
      'Gera e projeta espuma pesada de baixa expansão para abafar incêndios químicos e de óleos',
      'Estrutura de armário integrada permite operação imediata em emergências',
      'Equipado com dosificador de espuma em latão resistente à corrosão',
      'Carrete de mangueira altamente flexível com comprimentos personalizados de até 30 metros'
    ],
    specs: {
      'Modelo': 'PSG30',
      'Concentrado de Espuma': '3% AFFF (Aqueous Film Forming Foam)',
      'Pressão de Trabalho': '0.5 - 0.8 MPa',
      'Alcance do Jato': '≥6 metros',
      'Expansão da Espuma': '≥4.5'
    },
    materials: {
      'Carcaça do Armário': 'Cold-Rolled Carbon Steel with Anti-UV Red Powder Coating',
      'Tanque de Armazenamento de Espuma': 'High Density Polyethylene / Fiberglass',
      'Dosificador e Bocal': 'Solid Brass Alloy / Heavy Duty Aluminum',
      'Mangueira': 'EPDM Rubber Reinforced with High-tensile Polyester'
    },
    image: '/assets/products/foam-fire-hydrant-cabinet-psg30.webp',
    seoTitle: 'Armário de Hidrante de Espuma PSG30 | 3% AFFF',
    seoDescription: 'Armário de hidrante de espuma PSG30 com concentrado AFFF 3% para incêndios classe B de combustíveis, químicos e solventes. Preço de fábrica Wanlian Fluid, China.',
    faqs: [
      {
        question: 'O que é o armário de hidrante de espuma PSG30?',
        answer: 'O PSG30 é uma unidade de combate a incêndio de espuma de baixa expansão de instalação em parede que integra em um único armário o tanque de armazenamento de concentrado de espuma, o dosificador, o carrete de mangueira e o bocal de espuma, garantindo resposta imediata a incêndios de combustíveis, químicos e solventes.'
      },
      {
        question: 'Qual o tipo de espuma e o desempenho do PSG30?',
        answer: 'O armário opera com concentrado AFFF de 3% (espuma formadora de película aquosa), com razão de expansão de espuma de pelo menos 4.5, alcance do jato de pelo menos 6 metros e pressão de trabalho de 0.5 a 0.8 MPa.'
      },
      {
        question: 'Para quais tipos de incêndio o PSG30 foi projetado?',
        answer: 'Ele foi projetado para incêndios classe B envolvendo combustíveis, químicos e solventes, onde a espuma abafa o fogo mais rápido do que a água sozinha.'
      },
      {
        question: 'Qual o comprimento do carrete do PSG30 e quais materiais são utilizados?',
        answer: 'O carrete de mangueira é flexível e pode ser personalizado até 30 metros. A carcaça do armário é de aço carbono laminado a frio com revestimento em pó vermelho anti-UV; o tanque de espuma é de PEAD ou fibra de vidro, e o dosificador e o bocal são de liga de latão ou alumínio de alta resistência.'
      }
    ]
  },
  'manual-fire-water-cannon-ps': {
    id: '18',
    slug: 'manual-fire-water-cannon-ps',
    name: 'Canhão Monitora Contra Incêndio Manual (Série PS) — Aponte Uma Vez, Trave e Saia',
    category: 'Canhões Monitora de Incêndio',
    description: "O incêndio não espera você segurar aquela mangueira. Uma pessoa parada na linha, segurando o recuo hora após hora, dentro do calor de um incêndio em tanque, é o risco que o monitora elimina.\n\nO monitora PS projeta de 20 a 200 L/s entre 50 e 110 metros. A alavanca manual mira, um puxão transforma o jato reto em neblina e o mecanismo de engrenagem de autotranca mantém a mira sem operador — assim, você mira uma vez, trava e sai da zona.\n\n0.8-1.2 MPa, rotação horizontal de 360°, vertical de -30° a +70°, entrada de DN100 a DN200. Alumínio T6 anodizado duro ou bronze para serviço marinho e ar salino. Para pátios petroquímicos, pátios de tanques, aeroportos, armazéns, caminhões de bombeiros e combate a incêndio marítimo.",
    features: [
      'Suporta tanto jato reto de alta concentração quanto neblina de ampla cobertura',
      'Operação totalmente manual por alavanca que oferece mira suave e rápida',
      'Equipado com mecanismo de engrenagem de autotranca seguro para permitir pulverização sem operador',
      'Construção em liga de alumínio ou bronze de alta durabilidade resiste a condições marinas severas'
    ],
    specs: {
      'Faixa de Vazão': '20 L/S - 200 L/S',
      'Alcance Máximo do Jato': '50 - 110 meters',
      'Pressão Nominal': '0.8 - 1.2 MPa',
      'Faixa de Rotação': 'Horizontal 360°, Vertical -30° to +70°',
      'Flange de Entrada': 'DN100 / DN150 / DN200'
    },
    materials: {
      'Corpo do Monitora': 'T6 Hard-Anodized Aluminum Alloy / Bronze',
      'Juntas Giratórias': 'Stainless Steel Ball Bearings Double Row',
      'Volantes de Fixação': 'Stainless Steel / Brass',
      'Ponta do Bocal': 'Precision Hardened Alloy'
    },
    image: '/assets/products/manual-fire-water-cannon-ps-overlay.png',
    infographic: '/assets/products/manual-fire-water-cannon-ps-infographic.svg',
    seoTitle: 'Canhão Monitora de Água Manual PS | Longo Alcance',
    seoDescription: 'Canhão monitora de água manual PS de alto fluxo para água e espuma, construção pesada para áreas petroquímicas e armazéns. Preço de fábrica Wanlian.',
    faqs: [
      {
        question: 'Qual alcance de jato o monitora manual PS entrega?',
        answer: 'Distância de jato de 50 a 110 m conforme a vazão selecionada (20 a 200 L/s) e a pressão de entrada (0.8 a 1.2 MPa), com jato reto de alta concentração e padrão de neblina de ampla cobertura disponíveis.'
      },
      {
        question: 'O monitora PS pode aplicar espuma além de água?',
        answer: 'Sim — ele é projetado tanto para aplicação de água quanto de espuma, motivo pelo qual é usado em pátios de tanques, portos e pátios petroquímicos para proteção contra incêndios classe B.'
      },
      {
        question: 'Como o monitora PS é mirado e mantido em posição?',
        answer: 'A alavanca manual oferece mira suave e rápida, e o mecanismo de engrenagem de autotranca mantém a posição selecionada, de modo que o canhão pode pulverizar sem operador uma vez ajustado.'
      },
      {
        question: 'Quais tamanhos de flange de entrada estão disponíveis para a série PS?',
        answer: 'Flanges de entrada DN100, DN150 e DN200, com rotação horizontal de 360° e faixa vertical de -30° a +70°, em liga de alumínio T6 anodizada dura ou bronze para resistência ao clima marinho.'
      }
    ]
  },
  'water-flow-indicator-zsjz': {
    id: '19',
    slug: 'water-flow-indicator-zsjz',
    name: 'Indicador de Vazão de Água Tipo Pá (Série ZSJZ)',
    category: 'Rociadores e Válvulas de Alarme',
    description: 'O indicador de vazão de água ZSJZ é um elemento crítico nos sistemas automáticos de rociadores do tipo molhado. É instalado no tubo de alimentação derivado para detectar o fluxo de água e converter a energia cinética da água em alertas de sinal elétrico.',
    features: [
      'Microinterruptor flexível de alta condutividade elétrica e longa vida útil',
      "Circuito de retardo ajustável incorporado (2-60 segundos) que filtra as flutuações do martelo d'água e evita falsos alarmes",
      'Suporta instalações tipo saco (encaixe), roscada ou com flange/ranurada',
      'A pá flexiona suavemente sem obstruir o canal principal de água'
    ],
    specs: {
      'Faixa de Tamanhos': 'DN50 - DN200',
      'Pressão de Trabalho': '1.2 MPa / 1.6 MPa',
      'Sensibilidade do Interruptor': '15 < Q < 37.5 L/min (Trigger threshold)',
      'Saída de Sinal': 'DC24V / 3A (Dry Contacts SPDT)'
    },
    materials: {
      'Carcaça Tipo Saco': 'Ductile Iron (QT450-10)',
      'Pá do Indicador': 'Flexible Polymer / Stainless Steel',
      'Caixa Elétrica': 'Fire-Retardant Engineered ABS IP54',
      'Circuito do Retardador': 'Solid State PCB Sealed'
    },
    image: '/assets/products/water-flow-indicator-zsjz.png',
    seoTitle: 'Indicador de Vazão de Água ZSJZ | Alarme',
    seoDescription: 'Indicador de vazão de água ZSJZ tipo saco ou flange para sistemas de rociadores, com retardo ajustável e detecção sensível. Preço de fábrica Wanlian, China.'
  },
  'telescopic-resilient-seat-gate-valve-z41x-t': {
    id: '20',
    slug: 'telescopic-resilient-seat-gate-valve-z41x-t',
    name: 'Válvula de Gaveta Telescópica de Assento Elástico',
    category: 'Válvulas e Peças',
    description: 'Combina o robusto fechamento estanque de uma válvula de gaveta de assento elástico com um manguito telescópico de expansão integrado. Ideal para linhas de abastecimento de água, combate a incêndio e HVAC, permitindo instalação fácil, compensação da dilatação térmica da tubulação e troca rápida da válvula.',
    features: [
      'Função dupla: fechamento estanque do fluido + compensação de expansão da tubulação',
      'Cunha totalmente encapsulada em borracha EPDM para vazamento zero',
      'Junta de expansão telescópica simplifica a instalação e a substituição da válvula',
      'Revestimento em resina epóxi não tóxica por dentro e por fora'
    ],
    specs: {
      'Diâmetro Nominal': 'DN50 - DN600',
      'Pressão Nominal': '1.0 MPa / 1.6 MPa',
      'Faixa Telescópica': '± 25mm (Expansion compensation)',
      'Material do Corpo': 'Ductile Iron QT450',
      'Meio Aplicável': 'Water, Sewage, Firefighting water'
    },
    materials: {
      'Corpo Principal e Tampa': 'Ductile Iron (QT450-10)',
      'Manguito Telescópico': 'Carbon Steel Q235 / Ductile Iron',
      'Núcleo da Cunha': 'Ductile Iron QT450 with EPDM rubber fully coated',
      'Prensaestopas': 'NBR / Brass / Stainless Steel'
    },
    image: '/assets/products/telescopic-resilient-seat-gate-valve-z41x-t.webp',
    seoTitle: 'Válvula de Gaveta Telescópica Z41X-T | Fábrica',
    seoDescription: 'Válvula de gaveta telescópica Z41X-T de assento elástico, cunha EPDM e corpo QT450 com compensação de expansão. Preço de fábrica direto da Wanlian Fluid, China.',
    faqs: [
      {
        question: 'O que faz o manguito telescópico integrado?',
        answer: 'Ele fornece compensação de expansão de ±25 mm, absorvendo o movimento térmico e o assentamento da tubulação para que o corpo da válvula não fique sob esforço — e permite substituir a válvula sem cortar o tubo.'
      },
      {
        question: 'Como o Z41X-T difere de uma válvula de gaveta de assento elástico padrão?',
        answer: 'Ele combina o fechamento estanque e a compensação de expansão da tubulação em uma única unidade, de modo que você instala uma válvula em vez de uma válvula mais uma junta de expansão separada.'
      },
      {
        question: 'Quais tamanhos e pressões estão disponíveis para a válvula de gaveta telescópica?',
        answer: 'DN50 a DN600 a 1.0 ou 1.6 MPa, em ferro fundido dúctil QT450 com cunha totalmente encapsulada em EPDM, para linhas de abastecimento de água, combate a incêndio e HVAC.'
      },
      {
        question: 'Quais meios são adequados para o Z41X-T?',
        answer: 'Água, esgoto e água de combate a incêndio. O revestimento epóxi não tóxico por dentro e por fora mantém a válvula adequada tanto para serviço de água potável quanto para linhas de drenagem.'
      }
    ]
  },
  'adjustable-pressure-reducing-valve-500x': {
    id: '21',
    slug: 'adjustable-pressure-reducing-valve-500x',
    name: 'Válvula Redutora de Pressão Ajustável Hidráulica (500X)',
    category: 'Segurança Hidráulica',
    description: 'Válvula redutora de pressão ajustável de acionamento hidráulico 500X da Wanlian. Reduz automaticamente uma pressão de entrada mais alta para uma pressão a jusante estável e menor, independentemente das flutuações de vazão ou das variações da pressão de entrada.',
    features: [
      'Mantém automaticamente a pressão a jusante estável por meio de um sistema de piloto hidráulico',
      'Totalmente autooperada, sem necessidade de energia elétrica externa',
      'Design de fechamento lento e suave que evita picos de pressão e martelo d\'água',
      'Corpo de ferro fundido dúctil de serviço pesado com piloto e conexões de latão resistentes à corrosão'
    ],
    specs: {
      'Diâmetro Nominal': 'DN20 - DN600 (3/4\" to 24\")',
      'Ajuste de Pressão': '0.1 MPa to 1.6 MPa',
      'Pressão Nominal': '1.0 MPa / 1.6 MPa / 2.5 MPa',
      'Norma de Projeto': 'ANSI / JIS / GB',
      'Material do Corpo': 'Ductile Iron (QT450-10)'
    },
    materials: {
      'Corpo da Válvula Principal': 'Ductile Iron (QT450-10)',
      'Diafragma': 'Nylon Reinforced High Elastic EPDM',
      'Haste Interna': 'Stainless Steel 304',
      'Piloto Ajustável': 'Solid Forged Brass Alloy',
      'Tubos e Conexões': 'Copper / Stainless Steel 304'
    },
    image: '/assets/products/pressure-reducing-valve-500x-dn50.webp',
    seoTitle: 'Válvula Redutora de Pressão 500X | Abastecimento',
    seoDescription: 'Válvula redutora de pressão hidráulica autooperada 500X em ferro fundido dúctil, com opções OEM e projeto personalizado. Preço de fábrica Wanlian Fluid, China.',
    faqs: [
      {
        question: 'A válvula redutora de pressão 500X precisa de eletricidade?',
        answer: 'Não. É totalmente autooperada: um sistema de piloto hidráulico detecta a pressão a jusante e modula a válvula principal, de modo que funciona em qualquer lugar onde exista pressão na tubulação — sem alimentação externa nem sistema de controle.'
      },
      {
        question: 'Qual faixa de pressão a jusante o 500X pode manter?',
        answer: 'A pressão a jusante pré-estabelecida é ajustável de 0.1 MPa a 1.6 MPa por meio do conjunto do piloto, mantendo um valor estável apesar das mudanças de vazão ou da variação da pressão de entrada, com classes de entrada PN10, PN16 e PN25.'
      },
      {
        question: 'Quais tamanhos estão disponíveis para o 500X?',
        answer: 'DN20 a DN600 (3/4 a 24 polegadas) em ferro fundido dúctil QT450-10 com diafragma de EPDM reforçado com nylon, haste interna de aço inoxidável 304 e piloto de latão forjado maciço — projetada conforme ANSI, JIS ou GB, conforme necessário.'
      },
      {
        question: 'Como o 500X previne o martelo d\'água?',
        answer: 'A válvula principal fecha lentamente e de forma uniforme por meio do diafragma controlado pelo piloto, evitando os picos repentinos de pressão que válvulas de fechamento rápido podem gerar em adutoras de água longas.'
      }
    ]
  },
  'fire-hydrant-hose-coupling-adapter-hs': {
    id: '22',
    slug: 'fire-hydrant-hose-coupling-adapter-hs',
    name: 'Adaptador de Acoplamento de Mangueira de Hidrante em Alumínio (Série HS)',
    category: 'Armários de Incêndio e Interfaces',
    description: 'Os adaptadores de acoplamento de mangueira contra incêndio em alumínio de alta resistência da série HS da Wanlian possuem rosca interna autovedante para conexão rápida e sem vazamentos entre hidrantes, mangueiras e bocais.',
    features: [
      'Fabricado em liga de alumínio leve e de alta resistência',
      'Estrutura de conexão rápida permite acoplar a mangueira imediatamente',
      'Juntas de borracha autovedantes e duráveis evitam vazamentos mesmo sob alta vibração',
      'Rosca interna/externa padrão para compatibilidade com redes contra incêndio em todo o mundo'
    ],
    specs: {
      'Faixa de Tamanhos': 'DN50 / DN65 (2" to 2.5")',
      'Rosca de Conexão': '2.5-Inch Internal Thread',
      'Pressão de Trabalho': '1.6 MPa (232 PSI)',
      'Material': 'Anodized Aluminum Alloy',
      'Norma': 'GB12514 / Factory Standard'
    },
    materials: {
      'Corpo do Acoplamento': 'T6 Grade Hard-Anodized Aluminum Alloy',
      'Porca de Fixação': 'Anodized Aluminum Alloy / Zinc',
      'Vedação da Rosca Interna': 'EPDM Self-sealing Rubber',
      'Anel de Fixação': 'Stainless Steel'
    },
    image: '/assets/products/fire-hydrant-hose-coupling-adapter-hs.jpg',
    seoTitle: 'Adaptador de Acoplamento HS em Alumínio | Fábrica',
    seoDescription: 'Adaptador de acoplamento de mangueira de hidrante em alumínio anodizado, conexão rápida e vedação confiável para redes contra incêndio. Fábrica Wanlian Fluid, China.'
  },
  'wafer-type-butterfly-valve-d71x': {
    id: '23',
    slug: 'wafer-type-butterfly-valve-d71x',
    name: 'Válvula Borboleta Tipo Wafer de Ferro Fundido Dúctil Revestida de Borracha (D71X)',
    category: 'Válvulas e Peças',
    description: 'Válvula borboleta manual padrão tipo wafer com revestimento de borracha robusto. Ideal para isolamento bidirecional de fluidos com baixa fricção em sistemas HVAC, tratamento de água e tubulações industriais.',
    features: [
      'Revestimento de borracha vulcanizada resistente à corrosão (EPDM/NBR) para vedação estanque',
      'Design tipo wafer compacto e leve que se instala facilmente entre flanges padrão',
      'Alavanca manual ergonômica com múltiplas posições para abertura e fechamento rápidos',
      'Disco polido de aço inox ou ferro fundido dúctil minimiza a resistência ao fluxo'
    ],
    specs: {
      'Faixa de Tamanhos': 'DN50 - DN200 (2" to 8")',
      'Pressão de Trabalho': '1.0 MPa / 1.6 MPa',
      'Material do Corpo': 'Ductile Iron QT450 / Cast Iron',
      'Material do Revestimento': 'EPDM / NBR / PTFE',
      'Norma de Conexão': 'ANSI / DIN / JIS / GB tipo wafer'
    },
    materials: {
      'Corpo da Válvula': 'Ductile Iron QT450',
      'Assento/Revestimento do Corpo': 'Fully Vulcanized EPDM / NBR Rubber',
      'Disco Interno': 'Polished Stainless Steel 304 / 316',
      'Haste/Eixo': 'Stainless Steel 416 / 2Cr13',
      'Alavanca Manual': 'Die-cast Aluminum / Spheroidal Iron'
    },
    image: '/assets/products/wafer-type-butterfly-valve-d71x.webp',
    seoTitle: 'Válvula Borboleta Wafer D71X | Revestida EPDM',
    seoDescription: 'Válvula borboleta tipo wafer D71X em ferro fundido dúctil com revestimento EPDM e alavanca manual para controle de água industrial. Fábrica Wanlian Fluid, China.'
  },
  'overground-fire-hydrant-ss100': {
    id: '24',
    slug: 'overground-fire-hydrant-ss100',
    name: 'Hidrante Externo Anticongelante (SS100/65)',
    category: 'Hidrantes e Conexões de Bomba',
    description: 'Hidrante contra incêndio externo DN100 em ferro fundido dúctil, projetado com mecanismo automático de drenagem anticongelante altamente eficaz para fornecer água confiável sob alta pressão em redes municipais e de armazéns em climas frios.',
    features: [
      'Drenagem automática do corpo seco após o fechamento evita congelamento e ruptura',
      'Construção de parede espessa em ferro fundido/ferro fundido dúctil resiste a impactos externos',
      'Duas saídas com assento de latão e tampas cegas resistentes às intempéries',
      'Base flangeada subterrânea padrão para conexão simples'
    ],
    specs: {
      'Diâmetro Nominal': 'DN100 (4")',
      'Pressão de Trabalho': '1.6 MPa',
      'Pressão de Teste': '2.4 MPa',
      'Configuração das Saídas': '2x 65mm Outlets + 1x 100mm Outlet',
      'Meio Aplicável': 'Water, Fire foam mixture'
    },
    materials: {
      'Coluna do Hidrante': 'Heavy Duty Ductile Iron QT450',
      'Cabeça da Válvula Inferior': 'EPDM Rubber fully encapsulated',
      'Dispositivo de Drenagem': 'Stainless Steel 304 / Brass',
      'Haste de Operação': 'Stainless Steel / Medium Carbon Steel',
      'Tampas Cegas': 'Cast Iron / Aluminum with chain'
    },
    image: '/assets/products/overground-fire-hydrant-ssf100-65-1-6.webp',
    seoTitle: 'Hidrante Externo SS100 Anticongelante | UL',
    seoDescription: 'Hidrante externo de alta pressão SS100 com drenagem anticongelante e corpo de ferro fundido dúctil para redes municipais de água. Fábrica Wanlian Fluid, China.',
    faqs: [
      {
        question: 'Como o hidrante SS100 evita o congelamento em climas frios?',
        answer: 'O SS100 usa um mecanismo automático de drenagem após o fechamento: quando a haste é fechada, o corpo acima da linha de congelamento drena por gravidade, evitando que a água retida congele e rompa a coluna. É uma opção padrão para hidrantes externos municipais e de pátios em regiões frias.'
      },
      {
        question: 'Quais saídas o SS100/65 oferece?',
        answer: 'Duas saídas DN65 (2.5 polegadas) com tampas cegas resistentes às intempéries e uma saída DN100 (4 polegadas). Os padrões de acoplamento das saídas (KWS, BS336, Storz etc.) são definidos conforme o mercado de destino no pedido.'
      },
      {
        question: 'Qual é a classe de pressão do hidrante SS100?',
        answer: 'Pressão de trabalho de 1.6 MPa e pressão de teste de 2.4 MPa, em uma coluna de serviço pesado de ferro fundido dúctil (QT450) resistente a impactos externos.'
      },
      {
        question: 'Quais materiais são usados nos componentes internos do SS100?',
        answer: 'A cabeça da válvula inferior é totalmente encapsulada em borracha EPDM para vedação estanque, o dispositivo de drenagem é de aço inox 304 ou latão, e a haste de operação é de aço inox ou aço carbono médio.'
      }
    ]
  },
  'fire-hose-reel-jpso8-19': {
    id: '25',
    slug: 'fire-hose-reel-jpso8-19',
    name: 'Conjunto de Carretel de Mangueira Contra Incêndio em Aço Carbono (JPS0.8-19)',
    category: 'Armários de Incêndio e Interfaces',
    description: 'O conjunto de carretel de mangueira contra incêndio em aço carbono da série JPS foi projetado para combate rápido a incêndios internos. Inclui mangueira PVC layflat flexível, bocal de pulverização em latão/liga e carretel giratório com suporte reforçado.',
    features: [
      'Suporte giratório de montagem em aço carbono resistente com rotação de 180°',
      'Mangueira flexível de PVC de alta resistência e abrasão que evita dobras',
      'Bocal ergonômico com jato reto e dispersão em neblina de ampla cobertura',
      'Operação manual extremamente simples, adequada a ocupantes sem treinamento profissional'
    ],
    specs: {
      'Comprimento da Mangueira': '20m / 25m / 30m',
      'Diâmetro Interno da Mangueira': '19mm (3/4")',
      'Pressão de Trabalho': '0.8 MPa / 1.0 MPa',
      'Alcance do Jato': '≥ 6 metros',
      'Norma Aplicável': 'GB15090 / XF180'
    },
    materials: {
      'Disco do Carretel': 'Carbon Steel Plate with red epoxy spray',
      'Cotovelo/Braço Giratório': 'Solid Brass / Heavy Duty Steel',
      'Mangueira': 'NBR / PVC blend, multi-braided polyester reinforcement',
      'Pistola/Bocal de Pulverização': 'Precision machined Brass / Aluminum'
    },
    image: '/assets/products/fire-hose-reel-jpso8-19.jpg',
    seoTitle: 'Carretel de Mangueira JPS0.8-19 | Aço Carbono',
    seoDescription: 'Carretel de mangueira contra incêndio JPS0.8-19 para interiores, com mangueira PVC de até 30 m e suporte mural giratório. Fábrica Wanlian Fluid, China.'
  },
  'spherical-ball-check-valve-hq44x': {
    id: '26',
    slug: 'spherical-ball-check-valve-hq44x',
    name: 'Válvula de Retenção de Esfera em Ferro Fundido (HQ44X-16)',
    category: 'Válvulas e Peças',
    description: 'A válvula de retenção esférica HQ44X foi projetada para aplicações de alta vazão e não obstrução. Equipada com esfera rolante revestida de borracha, garante fechamento silencioso unidirecional e bloqueio total do reflujo.',
    features: [
      'Corpo de ferro fundido nodular dúctil oferece alta resistência à tração e a impactos',
      'Canal interno de passagem total e antiobstrução minimiza perdas por fricção',
      'Esfera de ferro encapsulada em EPDM garante vedação confiável e longa vida útil',
      'Baixa vazão de partida e fechamento totalmente silencioso sem golpe'
    ],
    specs: {
      'Faixa de Tamanhos': 'DN50 - DN400 (2" to 16")',
      'Pressão de Trabalho': '1.6 MPa (PN16)',
      'Material do Corpo': 'Nodular Cast Iron / Ductile Iron',
      'Vedação do Assento/Esfera': 'EPDM / NBR',
      'Norma de Teste': 'GB/T13927'
    },
    materials: {
      'Corpo da Válvula': 'Nodular Cast Iron (QT450-10)',
      'Esfera Rolante': 'Cast Iron Core with fully vulcanized EPDM',
      'Anel de Vedação': 'EPDM / NBR Rubber',
      'Parafusos de Fixação': 'Carbon Steel / Stainless Steel'
    },
    image: '/assets/products/spherical-ball-check-valve-hq44x.webp',
    seoTitle: 'Válvula de Retenção de Esfera HQ44X | QT450',
    seoDescription: 'Válvula de retenção de esfera HQ44X-16 com esfera revestida de EPDM, design antiobstrução e baixa perda de carga para água e esgoto. Fábrica Wanlian Fluid, China.',
    faqs: [
      {
        question: 'Por que escolher uma válvula de retenção de esfera em vez de uma de clapeta?',
        answer: 'A HQ44X possui canal de passagem total antiobstrução e esfera rolante revestida de EPDM que assenta silenciosamente sem impacto, proporcionando menor perda de carga e menos martelo d\'água que os modelos de clapeta ou oscilantes em descargas de bombas e adutoras.'
      },
      {
        question: 'A HQ44X pode obstruir com água suja ou esgoto?',
        answer: 'Ela foi projetada para serviço antiobstrução: a esfera rolante acompanha o caminho do fluxo e o canal aberto não retém detritos, sendo adequada para descarga de bombas, drenagem, água bruta e água limpa.'
      },
      {
        question: 'Quais tamanhos e pressões estão disponíveis para a HQ44X?',
        answer: 'De DN50 a DN400 (2 a 16 polegadas) em PN16, em ferro fundido nodular QT450-10 com vedação de esfera e assento em EPDM/NBR, testada conforme GB/T 13927.'
      },
      {
        question: 'Como a HQ44X fecha silenciosamente?',
        answer: 'A baixa vazão de partida e a geometria da esfera rolante permitem que ela assente gradualmente no assento à medida que a vazão cai, produzindo fechamento silencioso sem impacto.'
      }
    ]
  },
  'flange-manual-bellows-gate-valve': {
    id: '27',
    slug: 'flange-manual-bellows-gate-valve',
    name: 'Válvula de Gaveta Manual Flangeada com Vedação por Fole',
    category: 'Válvulas e Peças',
    description: 'Válvula de gaveta manual com vedação por fole em aço forjado/fundido. A dupla barreira de vedação (fole + gaxeta) garante zero emissão fugitiva. Projetada para tubulações de óleo térmico, água de alta temperatura e vapor.',
    features: [
      'Vedação por fole metálico de alta durabilidade evita qualquer vazamento de vapor ou fluido',
      'Sistema de vedação dupla (gaxeta + fole) impede emissões acidentais',
      'Corpo de aço forjado/fundido suporta condições extremas de esforço e temperatura',
      'Atende rigorosamente às normas internacionais (GB, ANSI, DIN, JIS)'
    ],
    specs: {
      'Faixa de Tamanhos': 'DN15 - DN300 (1/2" to 12")',
      'Pressão de Trabalho': '1.6 - 4.0 MPa (Class 150/300)',
      'Temperatura de Trabalho': '-29°C to 425°C',
      'Material do Corpo': 'Forged Steel (A105) / Cast Steel (WCB)',
      'Meio': 'Thermal Oil, Steam, High-Temperature Water'
    },
    materials: {
      'Corpo da Válvula': 'Carbon Steel (WCB) / Forged Steel (A105)',
      'Fole': 'Stainless Steel 304 / 316Ti',
      'Vedação do Disco': 'Stellite / SS304 Hard Alloy',
      'Volante': 'Ductile Iron / Cast Steel',
      'Porca do Jugo': 'Copper Alloy'
    },
    image: '/assets/products/flange-manual-bellows-gate-valve.webp',
    seoTitle: 'Válvula de Gaveta com Fole | Fornecedor B2B',
    seoDescription: 'Válvula de gaveta flangeada com vedação por fole para vapor e óleo térmico em alta temperatura, sem vazamentos. Fornecedor de fábrica Wanlian, China.'
  },
  'groove-solenoid-control-gate-valve-gkzf1': {
    id: '28',
    slug: 'groove-solenoid-control-gate-valve-gkzf1',
    name: 'Válvula de Gaveta de Controle por Solenoide com Conexão Ranurada (GKZF-1)',
    category: 'Segurança Hidráulica',
    description: 'Válvula de gaveta de controle GKZF-1 de 8 polegadas em ferro fundido dúctil, acionada por solenoide, que integra controle eletromagnético e conexão ranurada para controle automático do fluxo de água em redes municipais e contra incêndio.',
    features: [
      'Extremidades ranuradas permitem instalação rápida, flexível e de baixo custo',
      'Mecanismo de abertura e fechamento controlado diretamente por piloto de solenoide',
      'Corpo robusto de ferro fundido dúctil classificado a 300 PSI para sistemas de alta pressão',
      'Alta resposta, ideal para controle automático de redes de água contra incêndio'
    ],
    specs: {
      'Faixa de Tamanhos': 'DN50 - DN300 (2" to 12")',
      'Tensão do Solenoide': 'AC220V / DC24V',
      'Pressão de Trabalho': '300 PSI (2.0 MPa)',
      'Material do Corpo': 'Ductile Iron QT450',
      'Conexão das Extremidades': 'Grooved / Flanged'
    },
    materials: {
      'Corpo Principal': 'Ductile Iron (QT450-10)',
      'Núcleo da Cunha': 'Ductile Iron fully EPDM encapsulated',
      'Piloto de Solenoide': 'Stainless Steel 304 / Brass',
      'Haste e Molas': 'Stainless Steel 304',
      'Juntas de Vedação': 'EPDM / NBR'
    },
    image: '/assets/products/groove-solenoid-control-gate-valve-gkzf1.jpg',
    seoTitle: 'Válvula de Gaveta Solenoide GKZF-1 | 300 PSI',
    seoDescription: 'Válvula de gaveta de controle por solenoide GKZF-1, DN50-DN300, 300 PSI e AC220V/DC24V para água contra incêndio. Fábrica Wanlian Fluid, China.',
    faqs: [
      {
        question: 'Para que serve a válvula de gaveta de controle por solenoide GKZF-1?',
        answer: 'A GKZF-1 é uma válvula de gaveta em ferro fundido dúctil com controle piloto por solenoide integrado, projetada para controle automático do fluxo de água em redes municipais e contra incêndio.'
      },
      {
        question: 'Quais tamanhos e classes de pressão estão disponíveis na GKZF-1?',
        answer: 'A GKZF-1 cobre DN50 a DN300 (2 a 12 polegadas), com pressão de trabalho de 300 PSI (2.0 MPa). O corpo é de ferro fundido dúctil QT450 com cunha totalmente encapsulada em EPDM.'
      },
      {
        question: 'Quais opções de tensão o solenoide da GKZF-1 aceita?',
        answer: 'O piloto de solenoide está disponível em AC220V ou DC24V, permitindo integração direta com sistemas de controle predial, municipais ou contra incêndio.'
      },
      {
        question: 'Por que escolher conexões ranuradas para a GKZF-1?',
        answer: 'As extremidades ranuradas permitem instalação rápida, flexível e econômica em comparação com uniões flangeadas. A válvula também está disponível com extremidades flangeadas.'
      }
    ]
  },
  'fire-hose-pvc-rubber-lining-8-65': {
    id: '29',
    slug: 'fire-hose-pvc-rubber-lining-8-65',
    name: 'Mangueira Layflat Contra Incêndio com Revestimento de Borracha PVC (Modelo 8-65)',
    category: 'Armários de Incêndio e Interfaces',
    description: 'Mangueira layflat contra incêndio da Wanlian com revestimento de borracha PVC, projetada para combate a incêndio, transferência industrial de água e proteção aeroportuária. Flexível, portátil e durável, com reforço têxtil nos cantos e vedação de bordas tecida.',
    features: [
      'Instalação simples com acoplamentos padrão de mangueira contra incêndio',
      'Flexível e portátil para implantação rápida',
      'Construção tecida durável com reforço nos cantos',
      'Reciclável e fácil de operar',
      'Comprimento, diâmetro e logotipo personalizáveis (OEM)'
    ],
    specs: {
      'Faixa de Tamanhos': '19mm - 400mm inner diameter',
      'Modelo': '8-65 (standard coupling size)',
      'Material': 'PVC Rubber Lining',
      'Capacidade de Carga': '50 - 200 kN',
      'Aplicação': 'Class A & B Fires, Airport Fire Protection, Industrial Water Transfer',
      'Vedação das Bordas': 'Woven Edge Sealing'
    },
    materials: {
      'Corpo da Mangueira': 'Woven Synthetic Fiber with PVC Rubber Lining',
      'Acoplamentos': 'Standard Aluminum / Brass Fire Hose Couplings'
    },
    image: '/assets/products/fire-hose-pvc-rubber-lining-8-65.jpg',
    seoTitle: 'Mangueira Layflat PVC | Mangueira Contra Incêndio',
    seoDescription: 'Mangueira layflat contra incêndio com revestimento de borracha PVC para combate e transferência de água, capa tecida durável. Fábrica Wanlian Fluid, China.',
    faqs: [
      {
        question: 'Qual é a diferença entre esta mangueira layflat e um conjunto de carretel?',
        answer: 'Esta é a mangueira propriamente dita: uma linha flexível de abastecimento que fica plana quando drenada e é vendida por comprimento, conectando bombas, hidrantes ou bocais. Um carretel é um equipamento fixo de armário com a mangueira enrolada em um tambor e conectada permanentemente ao abastecimento do edifício.'
      },
      {
        question: 'Quais tamanhos e comprimentos estão disponíveis para a mangueira layflat?',
        answer: 'Os diâmetros internos variam de 19mm a 400mm, sendo o Modelo 8-65 (acoplamento padrão de 65mm) a linha contra incêndio mais comum. Comprimento, diâmetro e logotipo são personalizáveis para pedidos OEM.'
      },
      {
        question: 'Quais acoplamentos são compatíveis com esta mangueira?',
        answer: 'Ela é fornecida com acoplamentos padrão de alumínio ou latão para mangueira contra incêndio, e o sistema de rosca pode ser adaptado ao seu mercado (Storz, BS336, NIST, KWS ou rosca de 65mm) mediante pedido.'
      },
      {
        question: 'Para quais aplicações a mangueira foi projetada?',
        answer: 'Combate a incêndios de classe A e B, proteção aeroportuária e transferência industrial de água. O revestimento de borracha PVC é adequado para água limpa e mistura de espuma; confirme a pressão de trabalho do diâmetro escolhido com nossos engenheiros antes do pedido.'
      }
    ]
  },
};

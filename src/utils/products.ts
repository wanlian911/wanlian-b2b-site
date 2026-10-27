export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  materials?: Record<string, string>;
  dimensions?: {
    headers: string[];
    rows: string[][];
  };
  image: string;
  gallery?: string[];
  infographic?: string;
  seoTitle: string;
  seoDescription: string;
  faqs?: { question: string; answer: string }[];
  video?: {
    src: string;
    poster?: string;
    duration?: string;
    uploadDate?: string;
    description?: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'resilient-seat-flanged-gate-valve-z41x',
    name: 'Ductile Iron Resilient Seat Flanged Gate Valve (Z41X)',
    category: 'Valves & Parts',
    description: 'Wanlian Z41X Resilient Seated Gate Valve is designed with a fully rubber-encapsulated wedge to ensure a reliable bubble-tight sealing. Ideal for water supply, sewage, industrial pipelines, and HVAC systems.',
    features: [
      'Resilient wedge fully encapsulated with high-grade EPDM rubber',
      'Flat bottom design prevents dirt and sediment accumulation',
      'Non-toxic epoxy resin coating inside and out for corrosion and rust resistance',
      'Easy maintenance — sealing replacement procedure and applicable conditions available in technical documentation on request'
    ],
    specs: {
      'Nominal Diameter': 'DN50 - DN700 (2" to 28")',
      'Nominal Pressure': '1.0 MPa / 1.6 MPa (PN10 / PN16)',
      'Working Temperature': '0°C to 80°C',
      'Applicable Medium': 'Water, Non-corrosive Liquids, Air',
      'Body Material': 'Ductile Iron (QT450-10)'
    },
    materials: {
      'Body & Bonnet': 'Ductile Iron (QT450)',
      'Wedge/Disc': 'Ductile Iron + EPDM Fully Encapsulated',
      'Stem': 'Stainless Steel (2Cr13 / 304)',
      'Stem Nut': 'Bronze Alloy',
      'O-Rings': 'NBR / EPDM Self-tightening'
    },
    dimensions: {
      headers: ['DN (mm)', 'L (mm)', 'D (mm)', 'D1 (mm)', 'D2 (mm)', 'z-Φd (Holes)'],
      rows: [
        ['50', '180', '160', '125', '100', '4-Φ18'],
        ['80', '210', '195', '160', '135', '4-Φ18'],
        ['100', '230', '215', '180', '155', '8-Φ18'],
        ['150', '280', '280', '240', '210', '8-Φ23'],
        ['200', '330', '335', '295', '265', '8-Φ23'],
        ['300', '420', '440', '400', '368', '12-Φ23']
      ]
    },
    image: '/assets/products/resilient-seat-flanged-gate-valve-z41x.webp',
    seoTitle: 'Z41X Resilient Seat Gate Valve | EPDM Lined Ductile Iron',
    seoDescription: 'Ductile iron resilient seat gate valve Z41X: low pressure drop, bubble-tight seal for industrial fluid systems. Factory price from Quanzhou Wanlian Fluid.',
    faqs: [
      { question: 'What sizes are available for the Z41X resilient seat gate valve?', answer: 'DN50 to DN700 (2 inch to 28 inch) at PN10 or PN16, covering branch lines up to large transmission mains in water supply, sewage, industrial and HVAC service.' },
      { question: 'How does the Z41X achieve a bubble-tight seal?', answer: 'The wedge is fully encapsulated in high-grade EPDM rubber, so sealing does not depend on metal-to-metal contact like a traditional gate valve. The flat-bottom design also prevents sediment buildup at the seat.' },
      { question: 'Can the Z41X seal be replaced without draining the line?', answer: 'The sealing replacement procedure, applicable conditions and safety limits are documented for this valve type; we can provide the technical documentation on request.' },
      { question: 'What media and temperatures can the Z41X handle?', answer: 'Water, non-corrosive liquids and air from 0°C to 80°C, with a non-toxic epoxy resin coating inside and out for corrosion resistance in potable and industrial networks.' }
    ]
  }
];
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
    seoTitle: 'Resilient Seated Gate Valve Z41X | Ductile Iron PN10/PN16',
    seoDescription: 'Z41X resilient seated gate valve, ductile iron QT450, EPDM encapsulated wedge, PN10/PN16, DN50-DN700. 100% pressure tested. Get factory direct quote.',
  },
];

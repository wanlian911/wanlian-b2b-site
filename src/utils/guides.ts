export interface Guide {
  title: string;
  description: string;
  href: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

// 内容工厂单一数据源:新增指南只需在此追加一条
export const guides: Guide[] = [
  {
    title: 'Backflow Prevention in Fire Protection & Potable Water Networks (2026 Guide)',
    description: 'Why backflow preventers are mandatory in dual-purpose water networks, how HS41X double check valves work, cross-connection control and a selection checklist for B2B buyers.',
    href: '/guides/backflow-prevention-guide/',
    date: '2026-08',
    category: 'Hydraulic Safety',
    readTime: '8 min read',
    tags: ['backflow-prevention', 'industrial-valves', 'fire-protection']
  },
  {
    title: 'Fire Hose Reel & Fire Cabinet Selection Guide (2026)',
    description: 'How to specify indoor fire hose reels, wall cabinets and foam units: hose length and diameter, nozzle modes, cabinet materials, foam type selection and compliance for Class A/B fires.',
    href: '/guides/fire-hose-reel-cabinet-guide/',
    date: '2026-08',
    category: 'Fire Protection',
    readTime: '7 min read',
    tags: ['fire-hose-reel', 'fire-protection']
  },
  {
    title: 'Fire Water Monitor Selection: Manual vs Auto-Tracking (ZDMS) Guide',
    description: 'Manual PS monitors vs auto-tracking ZDMS cannons — range, flow, detection, response time and cost comparison for industrial and large-space protection.',
    href: '/guides/fire-water-monitor-selection-guide/',
    date: '2026',
    category: 'Fire Protection',
    readTime: '6 min read',
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Fire Sprinkler System Valves: A Complete Guide (Wet, Deluge & Pre-action)',
    description: 'How ZSFZ wet alarm, ZSFM deluge, ZSFY pre-action valves and ZSJZ flow indicators work — and when to specify each for your sprinkler system.',
    href: '/guides/fire-sprinkler-system-valves-guide/',
    date: '2026',
    category: 'Fire Protection',
    readTime: '7 min read',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'B2B Valve Sourcing Checklist: How to Verify a Fire Equipment Manufacturer',
    description: '8-point diligence checklist for verifying valve manufacturers — certificates, batch test reports, factory audits, samples and red flags when sourcing from China.',
    href: '/guides/b2b-valve-sourcing-checklist/',
    date: '2026',
    category: 'Procurement',
    readTime: '6 min read',
    tags: ['procurement', 'certification', 'industrial-valves']
  },
  {
    title: 'How to Choose UL Listed Fire Valves for Your Project (2026 Guide)',
    description: 'What UL listing really means, UL vs FM, which valve types are listed, how to verify genuine certificates and a procurement checklist for B2B buyers.',
    href: '/guides/how-to-choose-ul-listed-fire-valves/',
    date: '2026',
    category: 'Fire Protection',
    readTime: '7 min read',
    tags: ['certification', 'fire-protection', 'industrial-valves']
  },
  {
    title: 'Fire Water Cannon Buying Guide: Fixed, Remote or Smart? (2026)',
    description: 'When you need a water cannon, fixed vs remote vs auto-tracking, sizing flow and range, control integration and a site-based procurement checklist.',
    href: '/guides/fire-water-cannon-buying-guide/',
    date: '2026',
    category: 'Fire Protection',
    readTime: '6 min read',
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Fire Sprinkler Systems: Wet, Dry or Pre-action? (2026 Guide)',
    description: 'A practical comparison of wet, dry and pre-action systems, how to select sprinkler heads (K-factor, temperature, response) and the components your BOM needs.',
    href: '/guides/fire-sprinkler-system-wet-dry-preaction/',
    date: '2026',
    category: 'Fire Protection',
    readTime: '7 min read',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'How to Choose a Fire Hydrant for Municipal & Industrial Projects (2026 Guide)',
    description: 'A step-by-step procurement guide covering hydrant types, pressure classes, connection standards, certification requirements and the factory checklist before you order.',
    href: '/guides/how-to-choose-a-fire-hydrant/',
    date: '2026',
    category: 'Fire Protection',
    readTime: '8 min read',
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Gate Valve vs Butterfly Valve for Fire Protection',
    description: 'Compare shut-off performance, installation space, pressure loss, maintenance and project selection criteria for fire protection pipelines.',
    href: '/guides/gate-valve-vs-butterfly-valve-fire-protection/',
    date: '2026',
    category: 'Valves',
    readTime: '7 min read',
    tags: ['industrial-valves', 'fire-protection']
  },
  {
    title: 'Fire Sprinkler Control Valve Types: OS&Y, Butterfly & Check Valves',
    description: 'OS&Y gate, signal butterfly and check valve duties in sprinkler systems, plus a control valve comparison table and a UL/FM specification checklist for B2B buyers.',
    href: '/guides/fire-sprinkler-control-valve-types/',
    date: '2026-09',
    category: 'Fire Protection',
    readTime: '8 min read',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Bellows Seal Gate Valve Guide: ANSI Flanged Types for Steam & Thermal Oil',
    description: 'How the welded bellows double seal works, where bellows gate valves are specified, ANSI/GB standards and a B2B specification checklist for steam and thermal oil service.',
    href: '/guides/bellows-seal-gate-valve-guide/',
    date: '2026-09',
    category: 'Valves',
    readTime: '7 min read',
    tags: ['industrial-valves', 'bellows-seal-gate-valve']
  },
  {
    title: 'Pressure Reducing Valve Guide: 500X Hydraulic PRV & Water Supply Valves (2026)',
    description: 'How self-operated hydraulic pressure reducing valves work, 500X PRV vs F745X level control vs 100X remote float valve, installation and a B2B specification checklist for water supply networks.',
    href: '/guides/pressure-reducing-valve-guide/',
    date: '2026-09',
    category: 'Hydraulic Safety',
    readTime: '8 min read',
    tags: ['backflow-prevention', 'industrial-valves']
  },
  {
    title: 'Check Valve Types & Selection Guide: Sliding Ball vs Swing Check (2026)',
    description: 'Check valve types compared — swing vs HQ41X sliding ball vs HQ44X spherical ball: head loss, water hammer, non-slam closing, installation orientation and a B2B specification checklist.',
    href: '/guides/check-valve-types-guide/',
    date: '2026-09',
    category: 'Valves',
    readTime: '8 min read',
    tags: ['industrial-valves', 'backflow-prevention']
  },
  {
    title: 'Fire Extinguisher Selection Guide: ABC Dry Powder for B2B Buyers (2026)',
    description: 'How to choose portable fire extinguishers for export projects: fire classes vs extinguishing agents, ABC dry powder specifications, ISO 7165 and CCCF certification, applications and a factory buying checklist covering OEM, MOQ and dangerous-goods packaging.',
    href: '/guides/fire-extinguisher-selection-guide/',
    date: '2026-09',
    category: 'Fire Protection',
    readTime: '8 min read',
    tags: ['fire-protection', 'procurement']
  }
];

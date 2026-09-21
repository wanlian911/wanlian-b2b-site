export interface Guide {
  title: string;
  description: string;
  href: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  // 列表卡片露出的目录预览:取自该指南页 toc 数组的前 3 条 label
  tocPreview?: string[];
}

// 内容工厂单一数据源:新增指南只需在此追加一条
export const guides: Guide[] = [
  {
    title: 'Backflow Prevention in Fire Protection & Potable Water Networks (2026 Guide)',
    description: 'Why backflow preventers are mandatory in dual-purpose water networks, how HS41X double check valves work, cross-connection control and a selection checklist for B2B buyers.',
    href: '/guides/backflow-prevention-guide/',
    tocPreview: ["Why Backflow Prevention Matters","Hazard Classes and Device Types","How the HS41X Double Check Assembly Works"],
    date: '2026-08',
    category: 'Hydraulic Safety',
    readTime: '8 min read',
    tags: ['backflow-prevention', 'industrial-valves', 'fire-protection']
  },
  {
    title: 'Fire Hose Reel & Fire Cabinet Selection Guide (2026)',
    description: 'How to specify indoor fire hose reels, wall cabinets and foam units: hose length and diameter, nozzle modes, cabinet materials, foam type selection and compliance for Class A/B fires.',
    href: '/guides/fire-hose-reel-cabinet-guide/',
    tocPreview: ["The Role of Hose Reels and Cabinets","Hose Reel vs Fire Cabinet: Definitions","Hose Length, Diameter and Pressure"],
    date: '2026-08',
    category: 'Fire Protection',
    readTime: '7 min read',
    tags: ['fire-hose-reel', 'fire-protection']
  },
  {
    title: 'Fire Water Monitor Selection: Manual vs Auto-Tracking (ZDMS) Guide',
    description: 'Manual PS monitors vs auto-tracking ZDMS cannons — range, flow, detection, response time and cost comparison for industrial and large-space protection.',
    href: '/guides/fire-water-monitor-selection-guide/',
    tocPreview: ["1. Manual Monitors (PS Series): Operator Control","2. Auto-Tracking Monitors (ZDMS): Autonomous Response","3. Head-to-Head Comparison"],
    date: '2026',
    category: 'Fire Protection',
    readTime: '6 min read',
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Fire Sprinkler System Valves: A Complete Guide (Wet, Deluge & Pre-action)',
    description: 'How ZSFZ wet alarm, ZSFM deluge, ZSFY pre-action valves and ZSJZ flow indicators work — and when to specify each for your sprinkler system.',
    href: '/guides/fire-sprinkler-system-valves-guide/',
    tocPreview: ["1. Wet-Pipe Systems: The ZSFZ Wet Alarm Valve","2. Deluge Systems: The ZSFM Deluge Valve","3. Pre-Action Systems: The ZSFY Dual-Trigger Valve"],
    date: '2026',
    category: 'Fire Protection',
    readTime: '7 min read',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'B2B Valve Sourcing Checklist: How to Verify a Fire Equipment Manufacturer',
    description: '8-point diligence checklist for verifying valve manufacturers — certificates, batch test reports, factory audits, samples and red flags when sourcing from China.',
    href: '/guides/b2b-valve-sourcing-checklist/',
    tocPreview: ["The 8-Point Verification Checklist","Red Flags Summary","How to Request a Verified Quote"],
    date: '2026',
    category: 'Procurement',
    readTime: '6 min read',
    tags: ['procurement', 'certification', 'industrial-valves']
  },
  {
    title: 'How to Choose UL Listed Fire Valves for Your Project (2026 Guide)',
    description: 'What UL listing really means, UL vs FM, which valve types are listed, how to verify genuine certificates and a procurement checklist for B2B buyers.',
    href: '/guides/how-to-choose-ul-listed-fire-valves/',
    tocPreview: ["1. What UL Listing Means for Fire Valves","2. Fire Valve Types You Will Actually Specify","3. Key Specifications to Compare"],
    date: '2026',
    category: 'Fire Protection',
    readTime: '7 min read',
    tags: ['certification', 'fire-protection', 'industrial-valves']
  },
  {
    title: 'Fire Water Cannon Buying Guide: Fixed, Remote or Smart? (2026)',
    description: 'When you need a water cannon, fixed vs remote vs auto-tracking, sizing flow and range, control integration and a site-based procurement checklist.',
    href: '/guides/fire-water-cannon-buying-guide/',
    tocPreview: ["1. Do You Actually Need a Water Cannon?","2. Fixed, Remote or Auto-Tracking?","3. Sizing Flow and Range"],
    date: '2026',
    category: 'Fire Protection',
    readTime: '6 min read',
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Fire Sprinkler Systems: Wet, Dry or Pre-action? (2026 Guide)',
    description: 'A practical comparison of wet, dry and pre-action systems, how to select sprinkler heads (K-factor, temperature, response) and the components your BOM needs.',
    href: '/guides/fire-sprinkler-system-wet-dry-preaction/',
    tocPreview: ["1. The Three System Types Compared","2. Choosing Sprinkler Heads","3. The Components Your BOM Needs"],
    date: '2026',
    category: 'Fire Protection',
    readTime: '7 min read',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'How to Choose a Fire Hydrant for Municipal & Industrial Projects (2026 Guide)',
    description: 'A step-by-step procurement guide covering hydrant types, pressure classes, connection standards, certification requirements and the factory checklist before you order.',
    href: '/guides/how-to-choose-a-fire-hydrant/',
    tocPreview: ["1. Understand Your Hydrant Requirement First","2. Fire Hydrant Types Explained","3. Key Specifications to Compare"],
    date: '2026',
    category: 'Fire Protection',
    readTime: '8 min read',
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Gate Valve vs Butterfly Valve for Fire Protection',
    description: 'Compare shut-off performance, installation space, pressure loss, maintenance and project selection criteria for fire protection pipelines.',
    href: '/guides/gate-valve-vs-butterfly-valve-fire-protection/',
    tocPreview: ["1. How They Work: A Quick Comparison","2. Head-to-Head: Gate vs Butterfly","3. Where Each Valve Belongs in Fire Protection Systems"],
    date: '2026',
    category: 'Valves',
    readTime: '7 min read',
    tags: ['industrial-valves', 'fire-protection']
  },
  {
    title: 'Fire Sprinkler Control Valve Types: OS&Y, Butterfly & Check Valves',
    description: 'OS&Y gate, signal butterfly and check valve duties in sprinkler systems, plus a control valve comparison table and a UL/FM specification checklist for B2B buyers.',
    href: '/guides/fire-sprinkler-control-valve-types/',
    tocPreview: ["1. What Fire Sprinkler Control Valves Do","2. OS&Y Gate Valves: Monitored Main Isolation","3. Signal Butterfly Valves for Section Control"],
    date: '2026-09',
    category: 'Fire Protection',
    readTime: '8 min read',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Bellows Seal Gate Valve Guide: ANSI Flanged Types for Steam & Thermal Oil',
    description: 'How the welded bellows double seal works, where bellows gate valves are specified, ANSI/GB standards and a B2B specification checklist for steam and thermal oil service.',
    href: '/guides/bellows-seal-gate-valve-guide/',
    tocPreview: ["1. What Is a Bellows Seal Gate Valve?","2. How the Double Seal Works","3. Where Bellows Valves Are Specified"],
    date: '2026-09',
    category: 'Valves',
    readTime: '7 min read',
    tags: ['industrial-valves', 'bellows-seal-gate-valve']
  },
  {
    title: 'Pressure Reducing Valve Guide: 500X Hydraulic PRV & Water Supply Valves (2026)',
    description: 'How self-operated hydraulic pressure reducing valves work, 500X PRV vs F745X level control vs 100X remote float valve, installation and a B2B specification checklist for water supply networks.',
    href: '/guides/pressure-reducing-valve-guide/',
    tocPreview: ["1. What Is a Hydraulic Pressure Reducing Valve?","2. How a Self-Operated 500X PRV Works","3. PRV vs Level Control vs Float Valve"],
    date: '2026-09',
    category: 'Hydraulic Safety',
    readTime: '8 min read',
    tags: ['backflow-prevention', 'industrial-valves']
  },
  {
    title: 'Check Valve Types & Selection Guide: Sliding Ball vs Swing Check (2026)',
    description: 'Check valve types compared — swing vs HQ41X sliding ball vs HQ44X spherical ball: head loss, water hammer, non-slam closing, installation orientation and a B2B specification checklist.',
    href: '/guides/check-valve-types-guide/',
    tocPreview: ["1. What Is a Check Valve?","2. Check Valve Types at a Glance","3. Sliding Ball vs Swing Check"],
    date: '2026-09',
    category: 'Valves',
    readTime: '8 min read',
    tags: ['industrial-valves', 'backflow-prevention']
  },
  {
    title: 'Fire Extinguisher Selection Guide: ABC Dry Powder for B2B Buyers (2026)',
    description: 'How to choose portable fire extinguishers for export projects: fire classes vs extinguishing agents, ABC dry powder specifications, ISO 7165 and CCCF certification, applications and a factory buying checklist covering OEM, MOQ and dangerous-goods packaging.',
    href: '/guides/fire-extinguisher-selection-guide/',
    tocPreview: ["1. Why Fire Extinguishers Lead Fire-Protection Sourcing","2. Fire Classes and Extinguishing Agents","3. ABC Dry Powder Specifications Explained"],
    date: '2026-09',
    category: 'Fire Protection',
    readTime: '8 min read',
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Layflat Fire Hose Buying Guide: Sizes, Linings & Couplings (2026)',
    description: 'How to buy layflat fire hose for firefighting and industrial water transfer: hose construction and edge sealing, diameter and length sizing, Storz/BS336/NIST coupling standards, nozzles and an OEM factory checklist.',
    href: '/guides/fire-hose-buying-guide/',
    tocPreview: ["1. Layflat Fire Hose vs Fire Hose Reel","2. Hose Construction: Jacket, Lining & Edge Sealing","3. Sizing: Diameter, Length & Applications"],
    date: '2026-09',
    category: 'Fire Protection',
    readTime: '8 min read',
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Wanlian Fluid vs American AVK: Which Fire Hydrant & Valve Supplier Fits Your 2026 Project?',
    description: 'A data-backed comparison of Wanlian Fluid and American AVK for 2026 procurement: product lines, AWWA C502 hydrants, quality systems, cost and lead time — and how geography, scope and spec pick the right supplier.',
    href: '/guides/wanlian-fluid-vs-american-avk/',
    tocPreview: ["1. American AVK: What They Actually Are","2. Wanlian Fluid: What They Actually Are","3. How Do Their Product Lines Compare?"],
    date: '2026-09',
    category: 'Procurement',
    readTime: '9 min read',
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'How to Verify a Chinese Valve & Fire-Equipment Supplier in 2026',
    description: '5-step supplier verification checklist for 2026: ISO 9001 validity checks, standard-matched test reports, third-party inspection, counterfeit red flags and import documentation.',
    href: '/guides/how-to-verify-chinese-valve-supplier/',
    tocPreview: ["1. Verify the Company, Not the Brochure","2. Match the Product to the Standard on Your PO","3. Demand Per-Unit & Third-Party Testing"],
    date: '2026-09',
    category: 'Procurement',
    readTime: '7 min read',
    tags: ['procurement', 'certification']
  },
  {
    title: 'Fire Hydrant, Fire Hose & Valve Standards Explained: AWWA, NFPA, EN & ISO',
    description: 'Standards guide for fire hydrant, fire hose and valve buyers: AWWA C502/C515, NFPA 1961, EN 14384, BS 750, EN 1074 and ISO 5208 — with a 5-check process for buying compliant equipment from China.',
    href: '/guides/fire-hydrant-valve-standards-guide/',
    tocPreview: ["1. The Five Standards Families You Will Actually Meet","2. How to Read a Standard Against a Test Report","3. What Pressure Ratings & Classes Mean in Practice"],
    date: '2026-09',
    category: 'Fire Protection',
    readTime: '8 min read',
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'CE & EN 12845 Compliance Guide: Fire Equipment for the European Market (2026)',
    description: 'European fire protection compliance explained for B2B buyers: EN 12845 sprinkler pump-suction requirements, model-level CE marking, EN 12266-1 valve testing, Storz/BS336/KWS connection systems and the ISO 7165 vs CCCF boundary for extinguishers.',
    href: '/guides/ce-en12845-fire-protection-compliance/',
    tocPreview: ["1. Why European Compliance Matters for Fire Equipment","2. CE Marking Basics: Model-Level, Never Series-Level","3. EN 12845 and the Fire Pump Suction Package"],
    date: '2026-09',
    category: 'Fire Protection',
    readTime: '8 min read',
    tags: ['certification', 'fire-protection']
  },
  {
    title: 'Fire Sprinkler Head Selection Guide: K-Factor, Temperature & Response (2026)',
    description: 'How to select fire sprinkler heads: K-factor and flow (K=80/K=115), temperature ratings and bulb colour coding, quick vs standard response, pendent/upright/sidewall/concealed orientation and UL listing in the NFPA 13 context.',
    href: '/guides/fire-sprinkler-head-selection-guide/',
    tocPreview: ["1. Start With the System Type, Then the Head","2. K-Factor and Flow: Matching Water Delivery","3. Temperature Ratings and Bulb Colour Coding"],
    date: '2026-09',
    category: 'Fire Protection',
    readTime: '8 min read',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Grooved Fire Protection Valves Guide: Grooved vs Flanged Connections (2026)',
    description: 'Grooved end valves for fire sprinkler mains vs flanged: signal butterfly, OS&Y gate, stainless and solenoid grooved valves, installation speed, supervision and a B2B checklist.',
    href: '/guides/grooved-fire-protection-valves-guide/',
    tocPreview: ["1. What Is a Grooved-End Valve?","2. Grooved vs Flanged vs Threaded","3. The Grooved Valve Family for Fire Mains"],
    date: '2026-09',
    category: 'Fire Protection',
    readTime: '8 min read',
    tags: ['fire-protection', 'industrial-valves']
  },
  {
    title: 'Antifreeze & Anti-Collision Fire Hydrants Guide: Cold Climate & Safety (2026)',
    description: 'Dry-barrel antifreeze hydrants, shear-bolt anti-collision hydrants and IoT-monitored models: freezing protection, impact shut-off, pressure regulation and a B2B selection checklist.',
    href: '/guides/antifreeze-anti-collision-fire-hydrant-guide/',
    tocPreview: ["1. Why Hydrants Fail in Cold Weather","2. How Antifreeze (Dry-Barrel) Hydrants Work","3. How Anti-Collision Hydrants Shut Off"],
    date: '2026-09',
    category: 'Fire Protection',
    readTime: '8 min read',
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Fire Department Connection (Siamese) Guide: Inlets, Couplings & Installation (2026)',
    description: 'Fire department siamese connections explained: twin DN65 inlets (SQS65/KWS65), DN100 flanged outlet, integrated control valve, Storz and HS coupling options, installation and a B2B specification checklist.',
    href: '/guides/fire-department-connection-siamese-guide/',
    tocPreview: ["1. What Is a Fire Department Connection?","2. Twin Inlets, One Outlet","3. Inlet Coupling Standards and Adapters"],
    date: '2026-09',
    category: 'Fire Protection',
    readTime: '8 min read',
    tags: ['fire-protection', 'fire-hydrant']
  },
  {
    title: 'Municipal Water & Fire Infrastructure in Latin America: A B2B Procurement Guide (2026)',
    description: 'Procuring fire hydrants, gate valves and fire hose for municipal water & fire infrastructure across Latin America: regional standards regimes, one-PO packages, spec documentation and a selection matrix.',
    href: '/guides/municipal-water-fire-infrastructure-latinamerica/',
    tocPreview: ["1. What a Municipal Water & Fire Scope Actually Includes","2. Standards Regimes in the Region: What the Tender May Require","3. How a Single Purchase Order Reduces Coordination Risk"],
    date: '2026-09',
    category: 'Procurement',
    readTime: '8 min read',
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Certification Requirements for Fire Valves & Hydrants in Latin American Projects (2026)',
    description: 'What UL, FM, AWWA, NOM and ABNT mean in a Latin American fire tender, how they are granted per model, how to verify genuine certificates and the per-model documentation to request.',
    href: '/guides/latinamerica-certification-requirements-fire-valves/',
    tocPreview: ["1. The Certification Landscape for LatAm Fire Projects","2. Certification by Certification: What It Is and How to Verify","3. Per-Model vs Per-Plant: The Distinction That Matters"],
    date: '2026-09',
    category: 'Procurement',
    readTime: '8 min read',
    tags: ['certification', 'procurement', 'industrial-valves']
  },
  {
    title: 'How to Detect Fake Valves & Counterfeit Fire Equipment Certificates (2026 Buyer Guide)',
    description: 'A seven-step detection checklist and red-flags table to spot cloned serials, copied nameplates, thin-wall castings and forged UL/FM/AWWA certificates when sourcing fire equipment from China.',
    href: '/guides/detect-fake-valves-fire-equipment-counterfeits/',
    tocPreview: ["1. Why Counterfeits Concentrate in This Category","2. The Common Forms of Fakes","3. A Seven-Step Detection Checklist"],
    date: '2026-09',
    category: 'Procurement',
    readTime: '8 min read',
    tags: ['procurement', 'certification']
  },
  {
    title: 'Wanlian Fluid vs AVK Latinoamérica: Fire Valve & Hydrant Supplier for LatAm Projects (2026)',
    description: 'Wanlian Fluid vs AVK Latinoamérica (AVK Válvulas, Tarragona): distribution footprint, product range, one-PO kits, OEM, cost structure and lead time — and how to choose for your LatAm project.',
    href: '/guides/wanlian-fluid-vs-avk-latinamerica/',
    tocPreview: ["1. Who AVK Latinoamérica Actually Is","2. Who Wanlian Fluid Is","3. Side-by-Side Comparison"],
    date: '2026-09',
    category: 'Procurement',
    readTime: '9 min read',
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'HVAC Digital Balancing Valve Guide: SP45F Selection (2026)',
    description: 'HVAC digital balancing valve guide: how SP45F dual pressure test points and digital lock support hydronic commissioning, plus RFQ data and a balancing valve comparison.',
    href: '/guides/hvac-digital-balancing-valve-guide/',
    tocPreview: ["1. What Is an HVAC Balancing Valve?","2. How the SP45F Digital Valve Works","3. Balancing Valve vs Pressure Reducing Valve"],
    date: '2026-09',
    category: 'HVAC & Industrial Valves',
    readTime: '8 min read',
    tags: ['industrial-valves', 'backflow-prevention']
  },
  {
    title: 'Wanlian Fluid vs CA-FIRE: Which Chinese Fire Protection Manufacturer Fits Your 2026 Project?',
    description: 'Wanlian Fluid vs CA-FIRE compared for 2026: FM-approved sprinklers, fire monitors, hydrants, alarm valves & full fire kits — which Chinese fire manufacturer fits your project.',
    href: '/guides/wanlian-fluid-vs-ca-fire/',
    tocPreview: ["1. CA-FIRE: What They Actually Are","2. Wanlian Fluid: What They Actually Are","3. How Do Their Product Lines Compare?"],
    date: '2026-09',
    category: 'Procurement',
    readTime: '9 min read',
    tags: ['procurement', 'fire-protection']
  },
  {
    title: 'Wanlian Fluid vs Forede: Choosing a Chinese Fire Monitor & Equipment Manufacturer (2026)',
    description: 'Wanlian Fluid vs Forede compared for 2026: fire monitors, water cannons, foam systems, hydrants & valves — which Chinese fire equipment manufacturer fits your project?',
    href: '/guides/wanlian-fluid-vs-forede/',
    tocPreview: ["1. Forede: What They Actually Are","2. Wanlian Fluid: What We Actually Are","3. How Do Their Product Lines Compare?"],
    date: '2026-09',
    category: 'Procurement',
    readTime: '9 min read',
    tags: ['procurement', 'fire-protection', 'fire-water-cannon']
  }
];

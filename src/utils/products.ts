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
  infographic?: string;
  seoTitle: string;
  seoDescription: string;
  faqs?: { question: string; answer: string }[];
  // 产品视频教程(可选):文件放入 public/videos/ 后配置即自动渲染 + 输出 VideoObject JSON-LD
  video?: {
    src: string; // 如 /videos/<slug>.mp4
    poster?: string; // 如 /videos/<slug>-poster.webp,缺省用产品图
    duration?: string; // ISO 8601,如 PT2M10S
    uploadDate?: string; // YYYY-MM-DD
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
      'Easy maintenance, sealing replacement can be done on-line under pressure'
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
    seoTitle: 'Z41X Resilient Seat Gate Valve | UL Listed Ductile Iron',
    seoDescription: 'Ductile iron resilient seat gate valve Z41X: low pressure drop, bubble-tight seal for industrial fluid systems. Factory price from Quanzhou Wanlian Fluid.',
    faqs: [
      { question: 'What sizes are available for the Z41X resilient seat gate valve?', answer: 'DN50 to DN700 (2 inch to 28 inch) at PN10 or PN16, covering branch lines up to large transmission mains in water supply, sewage, industrial and HVAC service.' },
      { question: 'How does the Z41X achieve a bubble-tight seal?', answer: 'The wedge is fully encapsulated in high-grade EPDM rubber, so sealing does not depend on metal-to-metal contact like a traditional gate valve. The flat-bottom design also prevents sediment buildup at the seat.' },
      { question: 'Can the Z41X seal be replaced without draining the line?', answer: 'Yes — the resilient sealing can be replaced on-line under pressure, avoiding costly shutdowns during maintenance.' },
      { question: 'What media and temperatures can the Z41X handle?', answer: 'Water, non-corrosive liquids and air from 0°C to 80°C, with a non-toxic epoxy resin coating inside and out for corrosion resistance in potable and industrial networks.' }
    ]
  },
  {
    id: '2',
    slug: 'indoor-fire-hydrant-head-sn65',
    name: 'Indoor Fire Hydrant Head SN65',
    category: 'Hydrants & Pump Connections',
    description: 'Premium Ductile Iron SN65 High-Pressure Indoor Fire Hydrant Valve. Precision-machined, flexible grooved or flanged connection, and reliable sealing for commercial and industrial firefighting pipelines.',
    features: [
      'High-grade ductile iron body for maximum pressure resistance',
      'Flexible grooved connection for fast and reliable installation',
      'Strict pressure and anti-leakage testing up to 2.4 MPa',
      'Red anti-corrosive powder coating'
    ],
    specs: {
      'Connection': 'Grooved / Flanged',
      'Size': 'DN65 (2.5")',
      'Working Pressure': '1.6 MPa (232 PSI)',
      'Body Material': 'Ductile Iron',
      'Application': 'Indoor Wall-Mounted Fire Cabinets'
    },
    materials: {
      'Body': 'Ductile Iron (QT400)',
      'Valve Stem': 'Brass / Stainless Steel',
      'Disc Seal': 'EPDM Rubber',
      'Handwheel': 'Ductile Iron / Cast Iron',
      'Coupling Interface': 'Anodized Aluminum / Brass'
    },
    image: '/assets/products/indoor-fire-hydrant-head-sn65.jpg',
    seoTitle: 'SN65 Indoor Fire Hydrant Valve | Factory Price Supplier',
    seoDescription: 'Ductile iron SN65 indoor fire hydrant head for fire protection pipelines: 1.6 MPa rating, grooved or flanged connections. Factory direct from Wanlian.',
    faqs: [
      { question: 'What connection types are available for the SN65 indoor hydrant head?', answer: 'The SN65 is available with grooved or flanged connections and an anodized aluminum or brass coupling interface, so it can be matched to your hose coupling standard (Storz, HS/BS5912, NIST) at order time.' },
      { question: 'What pressure does the SN65 hydrant valve support?', answer: 'It is rated for 1.6 MPa (232 PSI) working pressure and is pressure and anti-leakage tested up to 2.4 MPa, which covers standard indoor fire standpipe systems.' },
      { question: 'Where is the SN65 typically installed?', answer: 'It is the wall-mounted valve for indoor fire cabinets and hose stations in commercial and industrial buildings — DN65 (2.5 inch) matching standard firefighting hose sizes.' },
      { question: 'Can the SN65 be supplied as part of a complete indoor fire station kit?', answer: 'Yes — it pairs with our JPS0.8-19 hose reel set, layflat fire hose and spray nozzle to form a complete indoor firefighting station on a single purchase order.' }
    ]
  },
  {
    id: '3',
    slug: 'wet-alarm-check-valve-zsfz-150',
    name: 'Wet Alarm Check Valve ZSFZ 150',
    category: 'Sprinklers & Alarm Valves',
    description: 'ZSFZ Wet Alarm Check Valve is a key component of automatic sprinkler systems. It automatically sounds the hydraulic alarm gong and triggers the pressure switch when water flows to the sprinklers.',
    features: [
      'High-strength cast iron structure for heavy-duty firefighting',
      'Highly sensitive clapper ensures immediate alarm response',
      'Equipped with water motor alarm gong and retard chamber to prevent false alarms',
      'Easy on-line maintenance and testing'
    ],
    specs: {
      'Nominal Diameter': 'DN100 / DN150 / DN200',
      'Nominal Pressure': '1.6 MPa',
      'Standard': 'GB5135.2 / Factory Standard',
      'Body Material': 'Cast Iron / Ductile Iron',
      'Accessory': 'Pressure Switch, Delay Chamber, Gong'
    },
    materials: {
      'Valve Body': 'Cast Iron / Spheroidal Graphite Iron',
      'Clapper/Seat Seal': 'EPDM / NBR High Durability Rubber',
      'Retard Chamber': 'Cast Iron / Brass',
      'Alarm Gong': 'Aluminum Alloy / Copper',
      'Fittings & Pipes': 'Galvanized Steel / Brass'
    },
    image: '/assets/products/wet-alarm-check-valve-zsfz-150.webp',
    seoTitle: 'ZSFZ-150 Wet Alarm Check Valve | Sprinkler System',
    seoDescription: 'ZSFZ-150 wet alarm check valve for automatic fire sprinkler systems: durable ductile iron, fast alarm response, high reliability. Factory direct from China.',
    faqs: [
      { question: 'How does the ZSFZ wet alarm valve sound the alarm?', answer: 'When sprinkler flow opens the clapper, the water motor alarm gong is driven continuously, the retard chamber filters out transient surges to prevent false alarms, and the pressure switch closes an electrical contact to the fire alarm control panel.' },
      { question: 'Does the ZSFZ need electrical power to operate?', answer: 'No. The valve itself is fully hydraulic; only the pressure switch contact provides the alarm signal to the building fire alarm panel.' },
      { question: 'What sizes are available for the ZSFZ?', answer: 'DN100, DN150 and DN200 at 1.6 MPa nominal pressure, manufactured to GB 5135.2 with cast iron or ductile iron bodies and EPDM/NBR clapper and seat seals.' },
      { question: 'Can the ZSFZ be maintained without draining the system?', answer: 'Yes — it is designed for on-line maintenance and periodic testing, which is critical for fire systems that must remain protected around the clock.' }
    ]
  },
  {
    id: '4',
    slug: 'signal-grooved-wafer-butterfly-valve-dn80',
    name: 'Signal Butterfly Valve (DN80 PN16) — Reports Its Own Position to Your Panel',
    category: 'Valves & Parts',
    description: "The most dangerous valve is the one you can't see. When the control room thinks the main is open and it is closed, the fire meets a shut valve. Walking the line to check takes an hour, and nobody does it.\n\nThis valve reports its own position. A waterproof microswitch flips the open or closed status to your panel the moment the handwheel moves, so the operator 500 meters away never walks down the line to check. One quarter turn of the worm gear handwheel, low torque, bi-directional EPDM or NBR sealing.\n\nQT450 wafer body, compact enough for tight riser spaces, DN50 to DN300 at PN16, 100% shell and seat pressure tested per GB/T 13927 or EN 12266-1. For fire mains, water supply, and industrial lines where position matters.",
    features: [
      'Integrated electrical signal switch for remote status monitoring',
      'Compact wafer body design for space-saving installation',
      'Worm gear operator offers smooth, low-torque operation',
      'Durable resilient sealing disk for bi-directional sealing'
    ],
    specs: {
      'Size Range': 'DN50 - DN300 (2" to 12")',
      'Working Pressure': '1.6 MPa (PN16)',
      'Body Material': 'Ductile Iron (QT450)',
      'Disk Seal': 'EPDM / NBR',
      'End Connection': 'Wafer / Grooved'
    },
    materials: {
      'Body': 'Ductile Iron (QT450)',
      'Disc': 'Ductile Iron with Epoxy/EPDM Coating',
      'Shaft/Stem': 'Stainless Steel (2Cr13 / 416)',
      'Gear Operator': 'Cast Iron / Spheroidal Iron',
      'Microswitch': 'Highly Conductive Waterproof Microswitch'
    },
    image: '/assets/products/signal-grooved-wafer-butterfly-valve-dn80-overlay.png',
    infographic: '/assets/products/signal-grooved-wafer-butterfly-valve-dn80-infographic.svg',
    seoTitle: 'DN80 Signal Wafer Butterfly Valve | PN16 Fire System',
    seoDescription: 'Ductile Iron QT450 Signal Wafer Butterfly Valve. Perfect for firefighting water system control. Integrated monitoring switch, smooth worm gear operation.'
  },
  {
    id: '6',
    slug: 'hydraulic-water-level-control-valve-f745x',
    name: 'Hydraulic Water Level Control Valve (F745X)',
    category: 'Hydraulic Safety',
    description: 'F745X Hydraulic Water Level Control Valve automatically maintains a preset water level in reservoirs, water tanks, and water towers. It prevents overflow or extremely low water levels using advanced hydraulic pilot control.',
    features: [
      'Driven entirely by pipeline pressure, no external electric power required',
      'Smooth, slow-closing mechanism prevents destructive water hammer',
      'Accurate level control, highly reliable float pilot system',
      'Corrosion-resistant copper/stainless steel pilot piping'
    ],
    specs: {
      'Nominal Diameter': 'DN50 - DN400',
      'Working Pressure': '1.0 MPa / 1.6 MPa',
      'Body Material': 'Ductile Iron / Cast Steel',
      'Pilot Piping': 'Stainless Steel / Copper',
      'Pilot Valve': 'Brass float pilot'
    },
    materials: {
      'Main Valve Body': 'Ductile Iron (QT450-10)',
      'Diaphragm Assembly': 'Nylon Reinforced EPDM Rubber',
      'Stem & Spring': 'Stainless Steel 304',
      'Float Pilot Valve': 'Solid Brass Alloy',
      'Needle & Ball Valves': 'Stainless Steel / Brass'
    },
    image: '/assets/products/adjustable-pressure-reducing-valve-500x.webp',
    seoTitle: 'F745X Hydraulic Level Control Valve | Float Pilot',
    seoDescription: 'Automatic float pilot level control valve F745X for water reservoirs and tanks. Smooth closing, no water hammer. High durability, easy maintenance.'
  },
  {
    id: '7',
    slug: 'smart-electromagnetic-flow-meter',
    name: 'Smart Electromagnetic Flow Meter (DN100)',
    category: 'Hydraulic Safety',
    description: 'High-precision smart electromagnetic flow meter designed for conductive liquid flow measurement. High reliability, low power consumption, and completely unaffected by fluid density, viscosity, or temperature.',
    features: [
      'No obstructing parts in the measuring tube, zero pressure loss',
      'High contrast backlit LCD display with clear Chinese/English menu',
      'Equipped with RS485 / Modbus digital communication interface',
      '16-bit embedded microprocessor for faster computing and strong anti-interference'
    ],
    specs: {
      'Size Range': 'DN10 - DN2000',
      'Accuracy Class': '0.5% or 1.0%',
      'Nominal Pressure': '0.6 - 4.0 MPa (Customizable up to 70 MPa)',
      'Signal Output': 'Pulse / 4-20mA',
      'Structure': 'Compact (Integral) / Remote Split / Submersible'
    },
    materials: {
      'Tube Body': 'Carbon Steel (WCB) / Stainless Steel 304',
      'Internal Liner': 'PTFE / Polychloroprene Rubber',
      'Electrodes': 'Stainless Steel 316L / Hastelloy C',
      'Enclosure Converter': 'Die-cast Aluminum Alloy IP65/IP67'
    },
    image: '/assets/products/smart-electromagnetic-flow-meter.webp',
    seoTitle: 'Electromagnetic Flow Meter Supplier | Digital MODBUS',
    seoDescription: 'Digital high accuracy electromagnetic flow meters for water, sewage, and conductive industrial fluid measurement. MODBUS communication supported.'
  },
  {
    id: '8',
    slug: 'telescopic-y-strainer-sgl41h',
    name: 'Telescopic Y-Strainer (SGL41H)',
    category: 'Valves & Parts',
    description: 'Telescopic Y-Strainer SGL41H is essential for protecting hydraulic water control valves and precision machinery from clogging. It is installed at the inlet end to filter out particulate impurities, with an integrated expansion joint for easy installation and removal.',
    features: [
      'Combines Y-strainer and telescopic expansion joint in one body',
      'Greatly simplifies valve maintenance and pipeline installation',
      'High-grade stainless steel filter screen with customizable mesh size',
      'Durable ductile iron body with epoxy painting'
    ],
    specs: {
      'Size Range': 'DN50 - DN600',
      'Working Pressure': '1.0 MPa / 1.6 MPa',
      'Screen Material': 'SS304 / SS316',
      'Screen Mesh': '18-30 mesh (Water), 40-100 mesh (Steam)',
      'Body Material': 'Ductile Iron (QT450)'
    },
    materials: {
      'Filter Body': 'Ductile Iron (QT450-10)',
      'Expansion Sleeve': 'Carbon Steel / Ductile Iron',
      'Filter Screen': 'Stainless Steel 304 / 316',
      'Stem Seals': 'NBR / Graphite',
      'Telescopic Bolts': 'Medium Carbon Steel Zinc Plated'
    },
    image: '/assets/products/telescopic-y-strainer-sgl41h.webp',
    seoTitle: 'SGL41H Telescopic Y Strainer | SS304 Screen',
    seoDescription: 'Integrated Telescopic Y Strainer SGL41H for industrial water and HVAC pipelines. Easy maintenance, solid SS304 screen. Buy directly from China factory.'
  },
  {
    id: '9',
    slug: 'anti-collision-pressure-regulating-outdoor-hydrant-ssft100',
    name: 'Self-Closing Anti-Collision Fire Hydrant (SSFT100/65) — Bolt-Shear Shutdown, Pressurized Repair',
    category: 'Hydrants & Pump Connections',
    description: 'When a truck hits a standard fire hydrant, the street floods for days and the whole main has to go down for repairs. The SSFT100/65 is built for that exact moment.\n\nIn a collision, two calibrated safety bolts shear cleanly and the internal valve shuts the water off immediately. The hydrant stands, the outlet stays dry, and your network keeps its pressure. When it is time to repair, the crew pulls the two sheared bolts and fits two new ones. No draining the line, no digging up a flanged valve.\n\nA built-in pressure regulating device gives progressive, smooth discharge at the outlets, and the automatic self-draining system keeps it frost-safe in winter. Ductile iron QT450 body, DN100/DN150, PN16, 2×KWS65 plus one DN100 outlet, hydrostatically tested to 2.4 MPa per GB 4452.',
    features: [
      'Automatic sealing upon collision prevents severe water loss and flooding',
      'Built-in pressure regulating device allows progressive and smooth water discharge',
      'Equipped with automatic self-draining system to prevent freezing in winter',
      'Very low maintenance cost: simply replace safety bolts and restart'
    ],
    specs: {
      'Nominal Diameter': 'DN100 / DN150',
      'Nominal Pressure': '1.6 MPa',
      'Inlet Connection': 'Flanged',
      'Outlets': '2x 65mm (KWS65) + 1x 100mm (DN100)',
      'Body Material': 'Ductile Iron QT450'
    },
    materials: {
      'Hydrant Body': 'Ductile Iron QT450',
      'Lower Valve Seat': 'Solid Brass Alloy / EPDM covered',
      'Shear Bolts': 'Medium Carbon Steel Zinc Plated (Specialized Calibrated)',
      'Springs': 'Stainless Steel 304',
      'Caps & Interfaces': 'Anodized Aluminum Alloy / Brass'
    },
    image: '/assets/products/anti-collision-pressure-regulating-outdoor-hydrant-ssft100-overlay.png',
    infographic: '/assets/products/anti-collision-pressure-regulating-outdoor-hydrant-ssft100-infographic.svg',
    seoTitle: 'SSFT100 Anti-Collision Outdoor Fire Hydrant | Pressure Regulating',
    seoDescription: 'SSFT100 anti-collision, pressure-regulating fire hydrant with double safety shut-off for municipal and industrial fire protection. Factory price from Wanlian.',
    faqs: [
      { question: 'How does the SSFT100 shut off water after a vehicle collision?', answer: 'The specialized shear bolts are calibrated to break under impact. Once sheared, the internal valve closes automatically and seals the hydrant, stopping the water gush so repairs can be made with the pipeline still pressurized.' },
      { question: 'What does the built-in pressure-regulating device do?', answer: 'It provides progressive, smooth water discharge when the outlets are opened, reducing flow surges and water hammer while fire engines fill from the hydrant.' },
      { question: 'What outlet standards does the SSFT100 use?', answer: 'Two DN65 outlets with KWS65 interfaces plus one DN100 outlet (DN100/65 configuration, DN100 and DN150 body sizes at 1.6 MPa); other outlet coupling standards can be specified for your market.' },
      { question: 'How much maintenance does an anti-collision hydrant need after an impact?', answer: 'Very little — the shear bolts are simply replaced and the hydrant is restarted. The lower valve and the pipeline stay in service, keeping the repair cost and outage time minimal.' }
    ]
  },
  {
    id: '10',
    slug: 'iot-smart-ground-fire-hydrant-ss100zn',
    name: 'IoT Smart Ground Fire Hydrant (SS100/65-1.6ZN)',
    category: 'Hydrants & Pump Connections',
    description: 'Next-generation smart city firefighting equipment. Integrates IoT micro-sensors to provide real-time status data, anti-theft tracking, tilt monitoring, pipeline water pressure detection, and illegal water-theft alarms.',
    features: [
      'Real-time IoT wireless transmission via cellular networks (NB-IoT/4G)',
      'Immediate alert for illegal water usage, valve opening, or vehicle collisions',
      'Continuous water pressure and flow rate monitoring to prevent pipelines failure',
      'Ultra-low power design with solar power assist options'
    ],
    specs: {
      'Communication': 'NB-IoT / LTE-M / GPRS',
      'Sensors Included': 'Tilt/Vibration, Pressure Sensor, Valve Status',
      'Power Source': 'Li-thium battery (5-year life) + Solar assist',
      'Body Standard': 'GB4452-2011'
    },
    materials: {
      'Hydrant Body': 'Ductile Iron QT450',
      'IoT Module Capsule': 'Reinforced Impact-Resistant ABS IP68',
      'Water Probe / Sensor': 'Stainless Steel 316',
      'Lower Stem / Valve Seat': 'Stainless Steel / Brass'
    },
    image: '/assets/products/overground-fire-hydrant-ss100.webp',
    seoTitle: 'SS100ZN Smart IoT Fire Hydrant | Real-Time Monitoring',
    seoDescription: 'IoT smart fire hydrant monitoring system. Real-time water pressure, tilt and water theft detection. Perfect for smart municipal fire system integration.',
    faqs: [
      { question: 'What data does the IoT smart hydrant monitor in real time?', answer: 'Pipeline water pressure and flow, valve open/close status, tilt and vibration (collision detection) and illegal water-use alarms — transmitted wirelessly over cellular networks (NB-IoT, LTE-M or GPRS).' },
      { question: 'How is the SS100ZN smart hydrant powered?', answer: 'By a built-in lithium battery with a five-year design life, with optional solar power assist for remote or hard-to-access installations. No external wiring is required.' },
      { question: 'What is the body standard of the smart hydrant?', answer: 'The hydrant body is manufactured to GB 4452-2011 in ductile iron QT450, with the IoT module in an impact-resistant ABS capsule rated IP68 and a stainless steel 316 water probe.' },
      { question: 'Can the smart hydrant integrate with a municipal monitoring platform?', answer: 'Yes — it transmits standard cellular data that can be forwarded to your SCADA or smart-city platform; we coordinate the data format and alarm logic during project specification.' }
    ]
  },
  {
    id: '11',
    slug: 'glass-bulb-fire-sprinkler-zst',
    name: 'Glass Bulb Fire Sprinkler (ZST Series)',
    category: 'Sprinklers & Alarm Valves',
    description: 'Precision-engineered automatic fire sprinklers featuring highly sensitive glass bulb. Ideal for hotels, commercial malls, residential complexes, and industrial warehouses to detect and suppress fires instantly.',
    features: [
      'High-strength copper alloy framework precision forged for durability',
      'Highly sensitive organic liquid glass bulb ensures quick response',
      'Premium aging-resistant O-ring seals prevent leakage over decades',
      'Polished and chrome-plated surface for a sleek decorative appearance'
    ],
    specs: {
      'Nominal Diameter': 'DN15 (R1/2") / DN20 (R3/4")',
      'Flow Coefficient': 'K=80 ±4 / K=115 ±9',
      'Response Types': 'Standard Response (5mm bulb) / Quick Response (3mm bulb)',
      'Temp Ratings': '57°C / 68°C / 79°C / 93°C / 141°C',
      'Types Available': 'Pendent (下垂), Upright (直立), Sidewall (边墙)'
    },
    materials: {
      'Body Frame': 'Precision Forged Brass (H59-1)',
      'Glass Bulb': 'German Imported Job / Day-Impex Glass Bulb',
      'Sealing Element': 'Stainless Steel O-Ring with Teflon Layer',
      'Deflector/Splat': 'Copper Alloy / Stainless Steel'
    },
    image: '/assets/products/glass-bulb-fire-sprinkler-zst.webp',
    seoTitle: 'ZST Glass Bulb Fire Sprinkler Head | Automatic',
    seoDescription: 'Glass bulb automatic fire sprinklers ZST series. High sensitivity, corrosion resistant brass frame. Factory price from Wanlian China.',
    faqs: [
      { question: 'How do I choose between K=80 and K=115 sprinkler heads?', answer: 'K=80 (K=80±4) is the standard choice for most light and ordinary hazard rooms; K=115 (K=115±9) delivers higher flow where the design density is higher. Your sprinkler hydraulic calculation sets the required K-factor and flow at operating pressure.' },
      { question: 'What temperature ratings are available for ZST sprinklers?', answer: '57°C, 68°C, 79°C, 93°C and 141°C glass bulb ratings with standard bulb colour coding, so the head opens within the temperature band your hazard class requires.' },
      { question: 'What is the difference between quick response and standard response bulbs?', answer: 'Quick response heads use a 3 mm bulb and react faster — preferred where fast action matters; standard response heads use a 5 mm bulb and are the general-purpose default.' },
      { question: 'Which orientations are available in the ZST family?', answer: 'Pendent, upright and sidewall ZST models, plus the horizontal sidewall (T-ZSTBS) and recessed concealed (ZSTDY) variants for finished-ceiling installations — precision forged brass bodies with imported glass bulbs in DN15/DN20.' }
    ]
  },
  {
    id: '12',
    slug: 'auto-tracking-jet-suppression-cannon-zdms',
    name: 'Auto-Tracking Fire Cannon (ZDMS Series) — Detects, Tracks and Extinguishes on Its Own',
    category: 'Extinguishing Water Cannons',
    description: 'Fires in large high-ceiling spaces start when nobody is watching. By the time a person spots the flame it has already grown, and a hand-held hose may not reach a thirty-metre ceiling.\n\nThe ZDMS watches for you. Multi-band infrared and ultraviolet sensors detect the flame, the cannon locks on and tracks the fire as it moves, then delivers a high-range concentrated jet that knocks it down. Fully automatic: detection, positioning and discharge, with manual remote override from PC, mobile APP or the central cabinet whenever you want a human in the loop.\n\nRated flows from 5 to 30 L/s, customizable up to 150 L/s at 0.6-0.8 MPa. Horizontal 360°, vertical -90° to +30°, monitoring radius 40-65 m. Explosion-proof versions (Exde II BT4 Gb) are available for petrochemical plants and tank farms. For airports, exhibition centres, large warehouses, marine firefighting and anywhere the ceiling is too high for a hose.',
    features: [
      'Fully autonomous: auto fire-source detection, positioning and jetting',
      'Combines infrared and ultraviolet sensing for maximum flame accuracy',
      'High-range concentrated jet spray effectively suppresses fires in seconds',
      'Supports manual remote override via PC/Mobile APP or central cabinet'
    ],
    specs: {
      'Rated Flow': '5L/s, 10L/s, 20L/s, 30L/s (Customizable up to 150L/s)',
      'Working Pressure': '0.6 - 0.8 MPa',
      'Rotation Range': 'Horizontal 360°, Vertical -90° to +30°',
      'Monitoring Radius': '40m - 65m',
      'Explosion Proof': 'Exde II BT4 Gb (Optional)'
    },
    materials: {
      'Body Assembly': 'Die-cast Heavy Duty Aluminum Alloy',
      'Waterway Tube': 'Stainless Steel 304',
      'Sensor Enclosure': 'Anti-UV High Strength Engineered ABS IP66',
      'Nozzle Head': 'Stainless Steel 316'
    },
    image: '/assets/products/auto-tracking-jet-suppression-cannon-zdms-overlay.png',
    infographic: '/assets/products/auto-tracking-jet-suppression-cannon-zdms-infographic.svg',
    seoTitle: 'ZDMS Automatic Tracking Fire Water Cannon | IR/UV Detection',
    seoDescription: 'Smart auto-tracking fire monitor ZDMS. Multi-band IR/UV flame detection, rapid autonomous suppression. Best choice for large spatial indoor protection.',
    faqs: [
      { question: 'How quickly does the ZDMS cannon detect and extinguish a fire?', answer: 'From ignition detection to directed jet, the sequence completes within 30 seconds: multi-band infrared and ultraviolet sensors locate the flame, the turret tracks it, and the nozzle discharges automatically.' },
      { question: 'What sensors does the auto-tracking cannon use?', answer: 'It combines multi-band infrared with ultraviolet flame detection, which reduces false alarms from welding, lighting and solar radiation compared with single-band sensors. The sensor enclosure is UV-resistant ABS rated IP66.' },
      { question: 'What area can one ZDMS cannon monitor?', answer: 'A monitoring radius of 40 to 65 m with full 360° horizontal rotation and -90° to +30° vertical range, rated flows of 5/10/20/30 L/s (customizable up to 150 L/s) at 0.6–0.8 MPa.' },
      { question: 'Is an explosion-proof ZDMS available for petrochemical sites?', answer: 'Yes — an Ex de II BT4 Gb explosion-proof version is available for tank farms, plants and other hazardous zones, with the same detection and tracking performance.' }
    ]
  },
  {
    id: '13',
    slug: 'deluge-alarm-valve-zsfm',
    name: 'Deluge Alarm Valve Group (ZSFM Series)',
    category: 'Sprinklers & Alarm Valves',
    description: 'ZSFM Deluge Alarm Valve is a diaphragm-type check valve. It relies on diaphragm pressure balance to control valve opening, and can be integrated with various fire detection networks to form complete deluge or water spray systems.',
    features: [
      'High-precision pressure chamber balance design for instant opening',
      'Heavy duty ductile iron construction ensures prolonged pressure holding',
      'Includes hydraulic alarm gong and pressure feedback switch',
      'Supports mechanical, pneumatic, or electrical remote trigger'
    ],
    specs: {
      'Size Range': 'DN50 - DN300',
      'Working Pressure': '1.6 MPa',
      'Testing Pressure': '3.2 MPa (Shell 6.4 MPa)',
      'Solenoid Valve': 'DC24V / 0.5A',
      'Connection Type': 'Flanged / Grooved'
    },
    materials: {
      'Main Valve Body': 'Ductile Iron (QT450-10)',
      'Diaphragm / Seal': 'Nylon Thread Reinforced NBR Rubber',
      'Solenoid Pilot': 'Solid Brass / Stainless Steel 304',
      'Pipes & Trims': 'Stainless Steel / Brass'
    },
    image: '/assets/products/deluge-alarm-valve-zsfm.webp',
    seoTitle: 'ZSFM Deluge Alarm Valve DN50-DN300 PN16',
    seoDescription: 'ZSFM diaphragm deluge alarm valve, DN50-DN300 PN16, DC24V solenoid. Ductile iron body with alarm gong and pressure switch. Factory quotation on request.',
    faqs: [
      { question: 'How does the ZSFM deluge alarm valve keep the system closed until a fire is detected?', answer: 'The ZSFM is a diaphragm-type valve that stays closed under system pressure through diaphragm pressure balance. When a fire detection network sends a signal, the diaphragm chamber pressure is released and the valve opens instantly, flooding every open nozzle in the deluge zone.' },
      { question: 'What size range and pressure ratings does the ZSFM cover?', answer: 'The ZSFM deluge alarm valve group covers DN50 to DN300 with a working pressure of 1.6 MPa and a testing pressure of 3.2 MPa (shell test 6.4 MPa). Flanged and grooved connections are both available.' },
      { question: 'Which remote triggers can open the ZSFM deluge valve?', answer: 'The valve supports mechanical, pneumatic and electrical remote triggers. The electrical option uses a DC24V / 0.5A solenoid pilot, so the valve group can be integrated with most fire alarm control panels.' },
      { question: 'What does the complete ZSFM deluge alarm valve group include?', answer: 'The group includes the ductile iron (QT450-10) main valve with a nylon-reinforced NBR diaphragm, a hydraulic alarm gong, a pressure feedback switch, and stainless steel or brass trims for alarm and discharge connections.' }
    ]
  },
  {
    id: '14',
    slug: 'pre-action-alarm-system-zsfy',
    name: 'Pre-action Deluge Alarm System (ZSFY Series)',
    category: 'Sprinklers & Alarm Valves',
    description: 'ZSFY Pre-action Valve combines the advantages of both wet and dry sprinkler systems. The piping remains air-filled under normal status to avoid accidental water leaks, and is flooded rapidly with water upon fire detection.',
    features: [
      'Dual-signal trigger: requires both fire alarm and pressure switch signals to prevent accidental discharge',
      'Perfect for highly critical rooms: libraries, archives, computer labs, and museums',
      'Integrated pressure-maintaining and air-feeding devices',
      'Corrosion resistant brass and stainless steel accessories'
    ],
    specs: {
      'Size Range': 'DN80 - DN250',
      'Nominal Pressure': '1.6 MPa',
      'System Side Air Pressure': '0.03 - 0.05 MPa',
      'Trigger Mode': 'Pneumatic / Electric / Manual',
      'Body Material': 'Ductile Iron QT450'
    },
    materials: {
      'Body & Bonnet': 'Ductile Iron (QT450-10)',
      'Internal Clapper': 'Bronze / Spheroidal Iron EPDM covered',
      'Diaphragm Chamber': 'Reinforced NBR',
      'Trim Pack': 'Galvanized Piping / Copper Alloys'
    },
    image: '/assets/products/pre-action-alarm-system-zsfy.jpg',
    seoTitle: 'ZSFY Pre-Action Alarm Valve System | Dual Protection',
    seoDescription: 'High safety Pre-action sprinkler valve group ZSFY. Dual-trigger failsafe design. Prevents water damage in museums, archives and data centers.',
    faqs: [
      { question: 'Why use pre-action for data centers, archives or museums?', answer: 'The piping stays air-filled (0.03–0.05 MPa) under normal conditions, so an accidental pipe break cannot dump water on the protected assets. Water is released only when the dual-signal trigger confirms a fire.' },
      { question: 'How does the ZSFY dual-signal trigger prevent accidental discharge?', answer: 'The valve requires two independent signals — a fire alarm signal and a pressure change — before the diaphragm chamber releases and floods the system. A single malfunction cannot trigger discharge.' },
      { question: 'What sizes and trigger options are available for the ZSFY?', answer: 'DN80 to DN250 at 1.6 MPa, with pneumatic, electric or manual trigger options, and integrated pressure-maintaining and air-feeding devices in the group.' },
      { question: 'What materials make the ZSFY corrosion resistant?', answer: 'Ductile iron QT450 body and bonnet, EPDM-covered bronze or spheroidal iron clapper, reinforced NBR diaphragm chamber, and brass and stainless steel accessories throughout the trim.' }
    ]
  },
  {
    id: '15',
    slug: 'suction-vortex-preventer-en12845',
    name: 'Austenitic Stainless Steel Suction Vortex Preventer',
    category: 'Hydraulic Safety',
    description: 'Designed strictly according to European Standard EN12845 and Chinese GB50974-2014. It is installed at the suction inlet of water pumps inside reservoirs or tanks to eliminate liquid vortexes and prevent air entrainment.',
    features: [
      'Prevents air entrainment to eliminate pump cavitation and mechanical damage',
      'Allows the water tank volume to be fully drained down to extremely low depths (100mm)',
      'Crafted with premium austenitic stainless steel (SS304/SS316) for superior rust-proof performance',
      'Extremely solid and simple design, maintenance-free'
    ],
    specs: {
      'Size Range': 'DN50 - DN1000',
      'Material': 'SS304 / SS316',
      'Compliance Standard': 'EN12845 / GB50974-2014',
      'Sanitary Requirement': 'GB/T17219'
    },
    materials: {
      'Vortex Plate': 'Austenitic Stainless Steel 304 / 316',
      'Internal Support Legs': 'Stainless Steel 304',
      'Fasteners & Bolts': 'Stainless Steel 304'
    },
    image: '/assets/products/suction-vortex-preventer-en12845.webp',
    seoTitle: 'EN12845 Suction Vortex Preventer | SS304/SS316',
    seoDescription: 'High efficiency SS304/SS316 Suction Vortex Preventer EN12845. Eliminates vortexes, protects water pumps from cavitation, increases tank capacity utilization.'
  },
  {
    id: '16',
    slug: 'anti-pollution-backflow-preventer-hs41x',
    name: 'Anti-Pollution Backflow Preventer (HS41X-16)',
    category: 'Hydraulic Safety',
    description: 'HS41X Anti-pollution Backflow Preventer is an advanced water security valve consisting of two series-connected check valves and a drainage cavity. It strictly prevents medium backflow to protect drinking water networks from pollution.',
    features: [
      'Double independent check valves ensure absolute backflow cutoff',
      'Central automatic drain valve drains water immediately if upstream pressure drops',
      'Low head loss design with optimal fluid channels',
      'EPDM seat encapsulation ensures long life and complete sealing'
    ],
    specs: {
      'Nominal Diameter': 'DN50 - DN600',
      'Nominal Pressure': '1.0 MPa / 1.6 MPa / 2.5 MPa',
      'Body Material': 'Ductile Iron / Cast Steel / Stainless Steel',
      'Applicable Medium': 'Drinking Water, Potable Water',
      'Working Temperature': '0°C to 80°C'
    },
    materials: {
      'Body & Bonnet': 'Ductile Iron QT450',
      'Check Valve Discs': 'Stainless Steel 304 / EPDM covered',
      'Intermediate Drain Valve': 'Solid Brass / Stainless Steel 304',
      'Main Springs': 'Stainless Steel 304'
    },
    image: '/assets/products/anti-pollution-backflow-preventer-hs41x.webp',
    seoTitle: 'HS41X Anti-Pollution Backflow Preventer | Potable Water',
    seoDescription: 'Durable Anti-pollution backflow preventer HS41X. Double check valves with intermediate automatic drainage cavity. Ensures potable water network safety.'
  },
  {
    id: '17',
    slug: 'foam-fire-hydrant-cabinet-psg30',
    name: 'Foam Fire Hydrant Cabinet (PSG30 Series)',
    category: 'Fire Cabinets & Interfaces',
    description: 'A highly efficient and consolidated low-expansion foam firefighting unit. It packages a storage tank, foam concentrate proportioner, hose reel, and specialized foam nozzle into a wall-mounted cabinet. Exceptionally powerful for fuel, chemical, and solvent fires.',
    features: [
      'Generates and sprays heavy low-expansion foam to smother chemical and oil fires',
      'Consolidated cabinet structure enables immediate operation in emergencies',
      'Equipped with corrosion-resistant brass foam proportioner',
      'Highly flexible hose reel with customized lengths up to 30 meters'
    ],
    specs: {
      'Model': 'PSG30',
      'Foam Concentrate': '3% AFFF (Aqueous Film Forming Foam)',
      'Working Pressure': '0.5 - 0.8 MPa',
      'Jet Range': '≥6 meters',
      'Foam Expansion': '≥4.5'
    },
    materials: {
      'Cabinet Housing': 'Cold-Rolled Carbon Steel with Anti-UV Red Powder Coating',
      'Foam Storage Tank': 'High Density Polyethylene / Fiberglass',
      'Proportioner & Nozzle': 'Solid Brass Alloy / Heavy Duty Aluminum',
      'Hose Pipe': 'EPDM Rubber Reinforced with High-tensile Polyester'
    },
    image: '/assets/products/foam-fire-hydrant-cabinet-psg30.webp',
    seoTitle: 'PSG30 Foam Fire Hydrant Cabinet | 3% AFFF',
    seoDescription: 'PSG30 foam fire hydrant cabinet with 3% AFFF tank, effective against Class B fuel and chemical fires. Export supply from Wanlian Fluid China.',
    faqs: [
      { question: 'What is the PSG30 foam fire hydrant cabinet?', answer: 'The PSG30 is a wall-mounted, low-expansion foam firefighting unit that packages a foam concentrate storage tank, proportioner, hose reel and foam nozzle in one cabinet, giving immediate response to fuel, chemical and solvent fires.' },
      { question: 'What foam type and performance does the PSG30 use?', answer: 'The cabinet works with 3% AFFF (aqueous film forming foam) concentrate, with a foam expansion ratio of at least 4.5, a jet range of at least 6 meters and a working pressure of 0.5 to 0.8 MPa.' },
      { question: 'Which types of fires is the PSG30 designed for?', answer: 'It is designed for Class B fires involving fuels, chemicals and solvents, where foam smothers the fire faster than water alone.' },
      { question: 'How long is the PSG30 hose reel and what materials are used?', answer: 'The hose reel is flexible and can be customized up to 30 meters. The cabinet housing is cold-rolled carbon steel with anti-UV red powder coating; the foam tank is HDPE or fiberglass, and the proportioner and nozzle are brass alloy or heavy-duty aluminum.' }
    ]
  },
  {
    id: '18',
    slug: 'manual-fire-water-cannon-ps',
    name: 'Manual Fire Water Monitor (PS Series) — Aim Once, Lock It, Walk Away',
    category: 'Extinguishing Water Cannons',
    description: "The fire doesn't wait for you to hold that hose. A person standing on a line against the recoil, hour after hour, inside the heat of a tank fire, is the risk the monitor removes.\n\nThe PS monitor throws 20 to 200 L/s 50 to 110 meters. The hand lever aims it, one pull changes straight jet to fog, and the self-locking gear holds your aim unmanned, so the operator aims once, locks it, and gets out of the zone.\n\n0.8-1.2 MPa, horizontal 360°, vertical -30° to +70°, DN100 to DN200 inlet. T6 hard anodized aluminum or bronze for marine and salt-air service. For petrochemical yards, tank farms, airports, warehouses, fire trucks and marine firefighting.",
    features: [
      'Supports both high-concentration straight jet stream and broad fog spray',
      'Fully manual hand-lever operation offers smooth and quick aiming',
      'Equipped with a secure self-locking gear mechanism to allow unmanned spraying',
      'Highly durable aluminum alloy or bronze construction resists severe marine weather'
    ],
    specs: {
      'Flow Range': '20 L/S - 200 L/S',
      'Max Jet Distance': '50 - 110 meters',
      'Rated Pressure': '0.8 - 1.2 MPa',
      'Rotation Range': 'Horizontal 360°, Vertical -30° to +70°',
      'Inlet Flange': 'DN100 / DN150 / DN200'
    },
    materials: {
      'Monitor Body': 'T6 Hard-Anodized Aluminum Alloy / Bronze',
      'Swivel Joints': 'Stainless Steel Ball Bearings Double Row',
      'Locking Knobs': 'Stainless Steel / Brass',
      'Nozzle Tip': 'Precision Hardened Alloy'
    },
    image: '/assets/products/manual-fire-water-cannon-ps-overlay.png',
    infographic: '/assets/products/manual-fire-water-cannon-ps-infographic.svg',
    seoTitle: 'PS Series Manual Fire Water Monitor | Long Range',
    seoDescription: 'High volume manual fire water cannon PS. Supports water and foam spray. Heavy-duty construction, suitable for industrial storage and petrochemical yards.',
    faqs: [
      { question: 'What jet range does the PS manual monitor deliver?', answer: '50 to 110 m of jet distance depending on the selected flow (20–200 L/s) and inlet pressure (0.8–1.2 MPa), with both a high-concentration straight jet and a broad fog spray pattern available.' },
      { question: 'Can the PS monitor apply foam as well as water?', answer: 'Yes — it is designed for both water and foam application, which is why it is used on tank farms, harbours and petrochemical yards for Class B fire protection.' },
      { question: 'How is the PS monitor aimed and held in position?', answer: 'A manual hand lever gives smooth, quick aiming, and a self-locking gear mechanism holds the selected position so the cannon can spray unmanned once set.' },
      { question: 'What inlet flange sizes are available for the PS series?', answer: 'DN100, DN150 and DN200 inlet flanges, with 360° horizontal rotation and -30° to +70° vertical range, in hard-anodized T6 aluminum alloy or bronze for marine weather resistance.' }
    ]
  },
  {
    id: '19',
    slug: 'water-flow-indicator-zsjz',
    name: 'Vane Type Water Flow Indicator (ZSJZ Series)',
    category: 'Sprinklers & Alarm Valves',
    description: 'ZSJZ Water Flow Indicator is a critical element in automatic wet sprinkler systems. It is installed at the branch supply pipe to detect water flow and convert the kinetic energy of water into electrical signal alerts.',
    features: [
      'Flexible microswitch with high electrical conductivity and long service life',
      'Built-in adjustable delay circuit (2-60 seconds) to filter out water hammer fluctuations and prevent false alarms',
      'Supports saddle (saddle-mount), thread, or flanged/grooved installations',
      'Vane blade flexes smoothly without obstructing the main water channel'
    ],
    specs: {
      'Size Range': 'DN50 - DN200',
      'Working Pressure': '1.2 MPa / 1.6 MPa',
      'Switch Sensitivity': '15 < Q < 37.5 L/min (Trigger threshold)',
      'Signal Output': 'DC24V / 3A (Dry Contacts SPDT)'
    },
    materials: {
      'Saddle Housing': 'Ductile Iron (QT450-10)',
      'Vane Blade': 'Flexible Polymer / Stainless Steel',
      'Electrical Box': 'Fire-Retardant Engineered ABS IP54',
      'Delay Timer Circuit': 'Solid State PCB Sealed'
    },
    image: '/assets/products/water-flow-indicator-zsjz.png',
    seoTitle: 'ZSJZ Vane Water Flow Indicator | Sprinkler Alarm',
    seoDescription: 'Saddle and Flange type fire water flow indicator ZSJZ. Adjustable time delay circuit. Highly sensitive detection for automatic wet sprinkler systems.'
  },
  {
    id: '20',
    slug: 'telescopic-resilient-seat-gate-valve-z41x-t',
    name: 'Telescopic Resilient Seat Gate Valve',
    category: 'Valves & Parts',
    description: 'Combining the robust bubble-tight shutoff of a resilient seated gate valve with a built-in telescopic expansion sleeve. Perfect for water supply, firefighting, and HVAC lines, allowing easy installation, pipe thermal expansion adjustment, and fast valve replacement.',
    features: [
      'Dual function: bubble-tight fluid shutoff + pipeline expansion compensation',
      'Fully EPDM rubber encapsulated wedge for zero leakage',
      'Telescopic expansion joint simplifies valve installation and replacement',
      'Non-toxic epoxy resin coating inside and out'
    ],
    specs: {
      'Nominal Diameter': 'DN50 - DN600',
      'Nominal Pressure': '1.0 MPa / 1.6 MPa',
      'Telescopic Range': '± 25mm (Expansion compensation)',
      'Body Material': 'Ductile Iron QT450',
      'Applicable Medium': 'Water, Sewage, Firefighting water'
    },
    materials: {
      'Main Body & Bonnet': 'Ductile Iron (QT450-10)',
      'Telescopic Sleeve': 'Carbon Steel Q235 / Ductile Iron',
      'Wedge Core': 'Ductile Iron QT450 with EPDM rubber fully coated',
      'Sealing Glands': 'NBR / Brass / Stainless Steel'
    },
    image: '/assets/products/telescopic-resilient-seat-gate-valve-z41x-t.webp',
    seoTitle: 'Z41X-T Telescopic Resilient Seat Gate Valve | Factory Price',
    seoDescription: 'Integrated Telescopic Resilient Seated Gate Valve. Fully EPDM encapsulated wedge, ductile iron QT450. Ideal for pipelines requiring expansion compensation.',
    faqs: [
      { question: 'What does the built-in telescopic sleeve do?', answer: 'It provides ±25 mm expansion compensation, absorbing pipe thermal movement and settlement so the valve body is not stressed — and it allows the valve to be replaced without cutting the pipe.' },
      { question: 'How is the Z41X-T different from a standard resilient seat gate valve?', answer: 'It combines bubble-tight shutoff and pipeline expansion compensation in one unit, so you install one valve instead of a valve plus a separate expansion joint.' },
      { question: 'What sizes and pressures are available for the telescopic gate valve?', answer: 'DN50 to DN600 at 1.0 or 1.6 MPa, in ductile iron QT450 with a fully EPDM-encapsulated wedge, for water supply, firefighting and HVAC lines.' },
      { question: 'Which media are suitable for the Z41X-T?', answer: 'Water, sewage and firefighting water. The non-toxic epoxy coating inside and out keeps it suitable for potable service as well as drainage lines.' }
    ]
  },
  {
    id: '21',
    slug: 'adjustable-pressure-reducing-valve-500x',
    name: 'Hydraulic Adjustable Pressure Reducing Valve (500X)',
    category: 'Hydraulic Safety',
    description: 'Wanlian 500X Hydraulic Operated Adjustable Pressure Reducing Valve. Automatically reduces a higher inlet pressure to a steady lower downstream pressure, regardless of flow fluctuations or inlet pressure variations.',
    features: [
      'Maintains stable downstream pressure automatically via hydraulic pilot system',
      'Completely self-operated, no external electrical power required',
      'Smooth slow-closing design avoids high pressure surges and water hammer',
      'Heavy-duty ductile iron body with corrosion-resistant brass pilot and fittings'
    ],
    specs: {
      'Nominal Diameter': 'DN20 - DN600 (3/4" to 24")',
      'Pressure Adjustment': '0.1 MPa to 1.6 MPa',
      'Nominal Pressure': '1.0 MPa / 1.6 MPa / 2.5 MPa',
      'Design Standard': 'ANSI / JIS / GB',
      'Body Material': 'Ductile Iron (QT450-10)'
    },
    materials: {
      'Main Valve Body': 'Ductile Iron (QT450-10)',
      'Diaphragm': 'Nylon Reinforced High Elastic EPDM',
      'Internal Stem': 'Stainless Steel 304',
      'Adjustable Pilot': 'Solid Forged Brass Alloy',
      'Tubes & Fittings': 'Copper / Stainless Steel 304'
    },
    image: '/assets/products/pressure-reducing-valve-500x-dn50.webp',
    seoTitle: '500X Hydraulic Pressure Reducing Valve | Water Supply',
    seoDescription: 'Industrial hydraulic self-operated pressure reducing valve 500X. High durability ductile iron construction. OEM and custom designs available.',
    faqs: [
      { question: 'Does the 500X pressure reducing valve need electricity?', answer: 'No. It is fully self-operated: a hydraulic pilot system senses downstream pressure and modulates the main valve, so it works anywhere pipe pressure exists — no external power or control system required.' },
      { question: 'What downstream pressure range can the 500X maintain?', answer: 'The set downstream pressure is adjustable from 0.1 MPa to 1.6 MPa via the pilot assembly, holding a steady value despite flow changes or inlet pressure variation across PN10, PN16 and PN25 inlet ratings.' },
      { question: 'What sizes are available for the 500X?', answer: 'DN20 to DN600 (3/4 inch to 24 inch) in ductile iron QT450-10 with a nylon-reinforced EPDM diaphragm, stainless steel 304 internal stem and solid forged brass pilot — designed to ANSI, JIS or GB as required.' },
      { question: 'How does the 500X prevent water hammer?', answer: 'The main valve closes slowly and smoothly through the pilot-controlled diaphragm, avoiding the sudden pressure surges that fast-closing valves can create in long water mains.' }
    ]
  },
  {
    id: '22',
    slug: 'fire-hydrant-hose-coupling-adapter-hs',
    name: 'Aluminum Firefighting Hydrant Hose Coupling Adapter (HS Series)',
    category: 'Fire Cabinets & Interfaces',
    description: 'Wanlian HS series high-strength aluminum firefighting hose coupling adapters. Engineered with self-sealing internal threads to provide a fast, leakage-free connection between hydrants, hoses, and nozzles.',
    features: [
      'Machined from lightweight and high-strength aluminum alloy',
      'Flexible rapid-connect structure enables immediate hose coupling',
      'Durable self-sealing rubber gaskets prevent leaks even under high vibration',
      'Standard internal/external threads for global firefighting pipelines compatibility'
    ],
    specs: {
      'Size Range': 'DN50 / DN65 (2" to 2.5")',
      'Connection Thread': '2.5-Inch Internal Thread',
      'Working Pressure': '1.6 MPa (232 PSI)',
      'Material': 'Anodized Aluminum Alloy',
      'Standard': 'GB12514 / Factory Standard'
    },
    materials: {
      'Coupling Body': 'T6 Grade Hard-Anodized Aluminum Alloy',
      'Locking Gland': 'Anodized Aluminum Alloy / Zinc',
      'Internal Thread Seal': 'EPDM Self-sealing Rubber',
      'Fastening Ring': 'Stainless Steel'
    },
    image: '/assets/products/fire-hydrant-hose-coupling-adapter-hs.jpg',
    seoTitle: 'HS Fire Hose Coupling Adapter | Aluminum Factory Price',
    seoDescription: 'High durability aluminum alloy fire hydrant hose coupling adapters. Quick-lock connection, reliable sealing, compatible with international fire threads.'
  },
  {
    id: '23',
    slug: 'wafer-type-butterfly-valve-d71x',
    name: 'Ductile Iron Rubber Lined Wafer Butterfly Valve (D71X)',
    category: 'Valves & Parts',
    description: 'Standard manual wafer type butterfly valve featuring robust rubber lining. Ideal for low-friction bi-directional fluid isolation in HVAC, water processing, and industrial plumbing lines.',
    features: [
      'Corrosion-resistant vulcanized rubber liner (EPDM/NBR) for bubble-tight seal',
      'Compact and lightweight wafer design fits easily between standard flanges',
      'Ergonomic multi-position hand lever allows fast opening/closing operations',
      'Polished stainless steel or ductile iron disc minimizes flow resistance'
    ],
    specs: {
      'Size Range': 'DN50 - DN200 (2" to 8")',
      'Working Pressure': '1.0 MPa / 1.6 MPa',
      'Body Material': 'Ductile Iron QT450 / Cast Iron',
      'Lining Material': 'EPDM / NBR / PTFE',
      'Connection Standard': 'ANSI / DIN / JIS / GB Wafer'
    },
    materials: {
      'Valve Body': 'Ductile Iron QT450',
      'Body Seat/Liner': 'Fully Vulcanized EPDM / NBR Rubber',
      'Internal Disc': 'Polished Stainless Steel 304 / 316',
      'Stem / Shaft': 'Stainless Steel 416 / 2Cr13',
      'Hand Lever': 'Die-cast Aluminum / Spheroidal Iron'
    },
    image: '/assets/products/wafer-type-butterfly-valve-d71x.webp',
    seoTitle: 'D71X Wafer Butterfly Valve | Rubber Lined PN16',
    seoDescription: 'Ductile Iron Wafer Butterfly Valve D71X with EPDM rubber lining. Manual lever operation, smooth flow, cost-effective industrial water control.'
  },
  {
    id: '24',
    slug: 'overground-fire-hydrant-ss100',
    name: 'Overground Antifreeze Fire Hydrant (SS100/65)',
    category: 'Hydrants & Pump Connections',
    description: 'Ductile Iron DN100 Overground Fire Hydrant. Engineered with highly effective automatic frost-drainage mechanism, providing reliable high-pressure water supply in cold-climate outdoor municipal and warehouse firefighting pipeline networks.',
    features: [
      'Automatic post-closing dry-barrel drainage avoids hydrant freezing and rupture',
      'Cast iron/ductile iron thick-wall construction resists outdoor physical impacts',
      'Double brass-seated outlets with highly durable weather-proof blank caps',
      'Standard underground flanged base for easy connection'
    ],
    specs: {
      'Nominal Diameter': 'DN100 (4")',
      'Working Pressure': '1.6 MPa',
      'Testing Pressure': '2.4 MPa',
      'Outlets Config': '2x 65mm Outlets + 1x 100mm Outlet',
      'Applicable Medium': 'Water, Fire foam mixture'
    },
    materials: {
      'Hydrant Column': 'Heavy Duty Ductile Iron QT450',
      'Lower Valve Head': 'EPDM Rubber fully encapsulated',
      'Drainage Device': 'Stainless Steel 304 / Brass',
      'Operating Stem': 'Stainless Steel / Medium Carbon Steel',
      'Blank Caps': 'Cast Iron / Aluminum with chain'
    },
    image: '/assets/products/overground-fire-hydrant-ssf100-65-1-6.webp',
    seoTitle: 'SS100 Overground Fire Hydrant | Antifreeze UL Listed',
    seoDescription: 'High-pressure overground fire hydrant SS100 with frost-drainage. Heavy duty ductile iron body. Approved for municipal water supply and forest safety.',
    faqs: [
      { question: 'How does the SS100 hydrant prevent freezing in cold climates?', answer: 'The SS100 uses an automatic post-closing drainage mechanism: after the operating stem is closed, the barrel above the frost line drains by gravity, so the body does not trap water that could freeze and rupture the column. It is the standard choice for outdoor municipal and yard hydrants in cold regions.' },
      { question: 'What outlets does the SS100/65 provide?', answer: 'Two DN65 (2.5 inch) outlets with weather-proof blank caps plus one DN100 (4 inch) outlet. Outlet coupling standards (KWS, BS336, Storz, etc.) are specified per destination market at order time.' },
      { question: 'What is the pressure rating of the SS100 hydrant?', answer: 'Working pressure 1.6 MPa with a testing pressure of 2.4 MPa, in a heavy-duty ductile iron (QT450) column that resists outdoor physical impact.' },
      { question: 'What materials are used in the SS100 internals?', answer: 'The lower valve head is EPDM rubber fully encapsulated for bubble-tight shut-off, the drainage device is stainless steel 304 or brass, and the operating stem is stainless or medium carbon steel.' }
    ]
  },
  {
    id: '25',
    slug: 'fire-hose-reel-jpso8-19',
    name: 'Carbon Steel Fire Hose Reel Accessories Set (JPS0.8-19)',
    category: 'Fire Cabinets & Interfaces',
    description: 'JPS series carbon steel fire hose reel set designed for rapid indoor fire suppression. Includes highly flexible layflat PVC hose, brass/alloy spray nozzle, and heavy-duty swivel mount reel.',
    features: [
      'Sturdy carbon steel rotary mounting bracket supports 180° swing rotation',
      'High strength, abrasion-resistant PVC flexible fire hose resists kinking',
      'Ergonomic spray nozzle supports straight jet stream and wide fog dispersion',
      'Extremely easy manual operation, suitable for non-professional building occupants'
    ],
    specs: {
      'Hose Length': '20m / 25m / 30m',
      'Hose Inner Diameter': '19mm (3/4")',
      'Working Pressure': '0.8 MPa / 1.0 MPa',
      'Spray Jet Range': '≥ 6 meters',
      'Applicable Standard': 'GB15090 / XF180'
    },
    materials: {
      'Reel Disc': 'Carbon Steel Plate with red epoxy spray',
      'Swivel Elbow / Arm': 'Solid Brass / Heavy Duty Steel',
      'Hose pipe': 'NBR / PVC blend, multi-braided polyester reinforcement',
      'Spray Gun / Nozzle': 'Precision machined Brass / Aluminum'
    },
    image: '/assets/products/fire-hose-reel-jpso8-19.jpg',
    seoTitle: 'JPS0.8-19 Fire Hose Reel | Carbon Steel',
    seoDescription: 'Premium indoor fire hose reel assembly with 30m durable PVC hose and rotary wall mount bracket. Easy operation firefighting cabinet accessory.'
  },
  {
    id: '26',
    slug: 'spherical-ball-check-valve-hq44x',
    name: 'Spherical Cast Iron Ball Check Valve (HQ44X-16)',
    category: 'Valves & Parts',
    description: 'HQ44X Spherical Check Valve designed for high flow and anti-blocking applications. Equipped with a rubber-covered rolling sphere to ensure single-directional quiet closure and complete backflow block.',
    features: [
      'Spheroidal nodular cast iron body provides superior tensile and impact strength',
      'Internal non-blocking full flow channel minimizes fluid friction losses',
      'EPDM encapsulated iron ball ensures reliable sealing and long service life',
      'Low start-up flow and completely silent non-slam closing'
    ],
    specs: {
      'Size Range': 'DN50 - DN400 (2" to 16")',
      'Working Pressure': '1.6 MPa (PN16)',
      'Body Material': 'Nodular Cast Iron / Ductile Iron',
      'Seat/Ball Seal': 'EPDM / NBR',
      'Testing Standard': 'GB/T13927'
    },
    materials: {
      'Valve Body': 'Nodular Cast Iron (QT450-10)',
      'Rolling Ball': 'Cast Iron Core with fully vulcanized EPDM',
      'Sealing Ring': 'EPDM / NBR Rubber',
      'Fastening Screws': 'Carbon Steel / Stainless Steel'
    },
    image: '/assets/products/spherical-ball-check-valve-hq44x.webp',
    seoTitle: 'HQ44X Ball Check Valve | Nodular Cast Iron',
    seoDescription: 'Factory price Spherical Check Valve HQ44X-16. Non-clogging EPDM rubber rolling ball design. Low pressure loss, ideal for water sewage pump pipelines.',
    faqs: [
      { question: 'Why choose a spherical ball check valve over a swing check?', answer: 'The HQ44X has a full-flow non-blocking channel and a rolling EPDM-covered sphere that seats quietly without slamming, giving lower head loss and less water hammer than flap or swing designs in high-flow pump discharge and water mains.' },
      { question: 'Will the HQ44X clog with dirty water or sewage?', answer: 'It is designed for anti-blocking service: the rolling ball follows the flow path and the open channel does not trap debris, which is why it suits pump discharge, drainage and raw-water service as well as clean water.' },
      { question: 'What sizes and pressures are available for the HQ44X?', answer: 'DN50 to DN400 (2 inch to 16 inch) at PN16, in nodular cast iron QT450-10 with EPDM/NBR ball and seat sealing, tested to GB/T 13927.' },
      { question: 'How does the HQ44X close quietly?', answer: 'The low start-up flow and the rolling-sphere geometry let the ball settle onto the seat gradually as flow drops, producing a silent non-slam closure instead of the impact shock of a clapper hitting the seat.' }
    ]
  },
  {
    id: '27',
    slug: 'flange-manual-bellows-gate-valve',
    name: 'Flanged Manual Bellows Seal Gate Valve',
    category: 'Valves & Parts',
    description: 'Forged/Cast steel manual bellows seal gate valve. Double sealing barrier (bellows + packing) ensures zero fugitive leakage. Specifically designed for thermal oil, high-temperature water, and steam pipelines.',
    features: [
      'High-durability metal bellows seal prevents any steam or fluid leak',
      'Double sealing system (packing + bellows) prevents accidental emission',
      'Forged/Cast steel body holds extreme mechanical and temperature pressure',
      'Conforms strictly to international standards (GB, ANSI, DIN, JIS)'
    ],
    specs: {
      'Size Range': 'DN15 - DN300 (1/2" to 12")',
      'Working Pressure': '1.6 - 4.0 MPa (Class 150/300)',
      'Working Temperature': '-29°C to 425°C',
      'Body Material': 'Forged Steel (A105) / Cast Steel (WCB)',
      'Medium': 'Thermal Oil, Steam, High-Temperature Water'
    },
    materials: {
      'Valve Body': 'Carbon Steel (WCB) / Forged Steel (A105)',
      'Bellows': 'Stainless Steel 304 / 316Ti',
      'Valve Disc Seal': 'Stellite / SS304 Hard Alloy',
      'Handwheel': 'Ductile Iron / Cast Steel',
      'Yoke Nut': 'Copper Alloy'
    },
    image: '/assets/products/flange-manual-bellows-gate-valve.webp',
    seoTitle: 'Flanged Bellows Seal Gate Valve Supplier',
    seoDescription: 'High quality metal bellows seal gate valves for high temperature thermal oil and steam pipelines. Leak-free design. Approved by DIN, ANSI and GB.'
  },
  {
    id: '28',
    slug: 'groove-solenoid-control-gate-valve-gkzf1',
    name: 'Groove Solenoid Control Gate Valve (GKZF-1)',
    category: 'Hydraulic Safety',
    description: '8-Inch Ductile Iron Solenoid Operated Groove Control Valve GKZF-1. Highly integrated electromagnetic control and grooved connection gate valve for automatic municipal and firefighting water flow control.',
    features: [
      'Grooved ends enable fast, flexible, and extremely cost-saving installation',
      'Direct solenoid pilot-controlled opening and closing mechanism',
      'Robust ductile iron body rated at 300 PSI for high water pressure systems',
      'Highly responsive, ideal for firefighting water network automatic control'
    ],
    specs: {
      'Size Range': 'DN50 - DN300 (2" to 12")',
      'Solenoid Voltage': 'AC220V / DC24V',
      'Working Pressure': '300 PSI (2.0 MPa)',
      'Body Material': 'Ductile Iron QT450',
      'End Connection': 'Grooved / Flanged'
    },
    materials: {
      'Main Body': 'Ductile Iron (QT450-10)',
      'Wedge Core': 'Ductile Iron fully EPDM encapsulated',
      'Solenoid Pilot': 'Stainless Steel 304 / Brass',
      'Stem & Springs': 'Stainless Steel 304',
      'Seal Gaskets': 'EPDM / NBR'
    },
    image: '/assets/products/groove-solenoid-control-gate-valve-gkzf1.jpg',
    seoTitle: 'GKZF-1 Grooved Solenoid Control Gate Valve 300PSI',
    seoDescription: 'GKZF-1 grooved solenoid control gate valve, DN50-DN300, 300 PSI (2.0 MPa), AC220V/DC24V, ductile iron, ideal for municipal and fire water control systems.',
    faqs: [
      { question: 'What is the GKZF-1 grooved solenoid control gate valve used for?', answer: 'The GKZF-1 is a ductile iron gate valve with an integrated solenoid pilot control, designed for automatic water flow control in municipal water supply and firefighting networks.' },
      { question: 'What sizes and pressure ratings are available for the GKZF-1?', answer: 'The GKZF-1 covers DN50 to DN300 (2 inch to 12 inch) with a working pressure of 300 PSI (2.0 MPa). The body is ductile iron QT450 with a fully EPDM-encapsulated wedge.' },
      { question: 'What solenoid voltage options does the GKZF-1 support?', answer: 'The solenoid pilot is available in AC220V or DC24V, allowing direct integration with building, municipal or firefighting control systems.' },
      { question: 'Why choose grooved connections for the GKZF-1?', answer: 'Grooved ends enable fast, flexible and cost-saving installation compared with flanged joints. The valve is also available with flanged ends for projects that require them.' }
    ]
  },
  {
    id: '29',
    slug: 'fire-hose-pvc-rubber-lining-8-65',
    name: 'PVC Rubber Lining Layflat Fire Hose (Model 8-65)',
    category: 'Fire Cabinets & Interfaces',
    description: 'Wanlian layflat fire hose with PVC rubber lining, designed for firefighting, industrial water transfer and airport fire protection. Flexible, portable and durable with woven corner reinforcement and woven edge sealing for long service life.',
    features: [
      'Easy installation with standard fire hose couplings',
      'Flexible and portable for fast deployment',
      'Durable woven construction with corner reinforcement',
      'Recyclable and easy to operate',
      'Customizable length, diameter and logo (OEM)'
    ],
    specs: {
      'Size Range': '19mm - 400mm inner diameter',
      'Model': '8-65 (standard coupling size)',
      'Material': 'PVC Rubber Lining',
      'Bearing Capacity': '50 - 200 kN',
      'Application': 'Class A & B Fires, Airport Fire Protection, Industrial Water Transfer',
      'Edge Sealing': 'Woven Edge Sealing'
    },
    materials: {
      'Hose Body': 'Woven Synthetic Fiber with PVC Rubber Lining',
      'Couplings': 'Standard Aluminum / Brass Fire Hose Couplings'
    },
    image: '/assets/products/fire-hose-pvc-rubber-lining-8-65.jpg',
    seoTitle: 'PVC Rubber Lining Layflat Fire Hose | Fire Fighting Hose',
    seoDescription: 'Layflat fire hose with PVC rubber lining for firefighting and industrial water transfer: durable woven jacket, customizable sizes. Factory price from Wanlian.',
    faqs: [
      { question: 'What is the difference between this layflat fire hose and a fire hose reel unit?', answer: 'This is the hose itself — a flexible supply line that folds flat when drained and is bought by the length, connecting pumps, hydrants or nozzles. A fire hose reel is a fixed cabinet appliance with hose pre-wound on a drum and permanently connected to the building supply. Indoor reel stations are covered by our fire hose reel and cabinet products.' },
      { question: 'What sizes and lengths are available for the layflat fire hose?', answer: 'Inner diameters range from 19mm to 400mm, with the Model 8-65 configuration (standard 65mm coupling size) as the common firefighting line. Length, diameter and logo are customizable for OEM orders.' },
      { question: 'Which couplings fit this fire hose?', answer: 'It is supplied with standard aluminum or brass fire hose couplings, and the connection thread system can be matched to your market — Storz, BS336, NIST, KWS or 65mm thread — on request.' },
      { question: 'What applications is the hose designed for?', answer: 'Class A and B firefighting, airport fire protection and industrial water transfer. The PVC rubber lining suits clear water and foam mixture media; the woven construction carries a 50-200 kN bearing capacity. Confirm the pressure rating for your exact diameter with our engineers before ordering.' }
    ]
  },
  {
    id: '30',
    slug: 'adjustable-pistol-grip-fire-nozzle',
    name: 'Adjustable Pistol Grip Firefighting Nozzle',
    category: 'Fire Cabinets & Interfaces',
    description: 'Professional adjustable pistol grip fire nozzle in aluminum alloy with variable flow control (150-500 LPM) and multiple spray patterns from straight stream to fog. Ergonomic grip with no-recoil operation for reliable firefighting use.',
    features: [
      'Adjustable spray patterns: straight stream to wide fog',
      'Variable flow control 150-500 LPM',
      'Ergonomic pistol grip with finger contours for secure hold',
      'Lightweight aluminum alloy with durable construction',
      'Easy operation, no recoil design'
    ],
    specs: {
      'Size': '1.5" / 2" / 2.5" inlet',
      'Flow Range': '150 - 500 LPM',
      'Material': 'Aluminum Alloy',
      'Model': 'QLD6.0/8III-B Series',
      'Application': 'Fire Fighting, Industrial Fire Protection',
      'Customization': 'Logo & Graphic Design (OEM)'
    },
    materials: {
      'Body': 'Aluminum Alloy',
      'Adjustment Ring': 'Aluminum / High Impact Plastic',
      'Grip': 'High Impact Rubber Coating'
    },
    image: '/assets/products/adjustable-pistol-grip-fire-nozzle.jpg',
    seoTitle: 'Adjustable Pistol Grip Fire Nozzle | 150-500LPM',
    seoDescription: 'Professional adjustable fire hose nozzle with pistol grip. Variable flow and spray patterns, aluminum alloy body. Factory price from Wanlian Fluid Equipment.',
    faqs: [
      { question: 'What flow rates and spray patterns does this nozzle deliver?', answer: 'Flow is adjustable from 150 to 500 LPM with multiple spray patterns ranging from straight stream to wide fog, letting the operator switch between reach and heat shielding without changing nozzles.' },
      { question: 'Which hose sizes does the nozzle fit?', answer: 'It is available with 1.5", 2" and 2.5" inlets. The 2.5" version mates directly with 65mm (Model 8-65) layflat hose lines and with Storz or threaded couplings via the matching adapter.' },
      { question: 'What material is the nozzle body made of?', answer: 'The body is aluminum alloy with an aluminum or high-impact plastic adjustment ring and a high-impact rubber coated pistol grip — lightweight, corrosion resistant and comfortable for extended operation.' },
      { question: 'Can the nozzle be customized with my branding?', answer: 'Yes, logo and graphic design customization (OEM) is available on the nozzle body.' }
    ]
  },
  {
    id: '31',
    slug: 'abc-dry-powder-fire-extinguisher-5kg',
    name: 'ABC Dry Powder Fire Extinguisher (5kg)',
    category: 'Fire Cabinets & Interfaces',
    description: 'Portable 5kg ABC dry powder fire extinguisher with ISO 7165 certification. Effective against Class A (solids), B (liquids), C (gases) and E (electrical) fires. Carbon steel cylinder with pressure gauge and safety pin, suitable for residential, office and commercial use.',
    features: [
      'ISO 7165 certified portable dry powder extinguisher',
      'Multi-purpose: Class A, B, C and E fire coverage',
      'Carbon steel cylinder with anti-corrosion red coating',
      'Pressure gauge with color-coded ready indicator',
      'Available in 3kg / 4kg / 5kg net weight options'
    ],
    specs: {
      'Capacity': '5kg (3kg / 4kg options available)',
      'Standard': 'ISO 7165 / CCCF',
      'Extinguishing Agent': 'ABC Dry Powder (90% active content)',
      'Fire Classes': 'Class A (Solids), B (Liquids), C (Gases), E (Electrical)',
      'Discharge Time': '8 - 15 seconds',
      'Cylinder Material': 'Carbon Steel',
      'Warranty': '1 Year'
    },
    materials: {
      'Cylinder': 'Carbon Steel',
      'Valve Assembly': 'Brass',
      'Discharge Hose': 'PVC with Plastic Nozzle'
    },
    image: '/assets/products/abc-dry-powder-fire-extinguisher-5kg.webp',
    seoTitle: '5kg ABC Dry Powder Fire Extinguisher | ISO 7165',
    seoDescription: 'Portable ABC dry powder fire extinguisher 5kg with ISO 7165 certification. Suitable for Class A/B/C/E fires. Factory price from Wanlian Fluid Equipment.',
    faqs: [
      { question: 'Which fire classes does the ABC dry powder extinguisher cover?', answer: 'It covers Class A (solids), Class B (flammable liquids), Class C (flammable gases) and Class E (electrical) fires — the standard multi-purpose coverage for commercial and industrial buildings. It is not the right unit for Class F cooking-oil fires (wet chemical) or Class D metal fires (specialist powder).' },
      { question: 'What does ISO 7165 / CCCF mean on this unit?', answer: 'ISO 7165 is the international performance standard for portable fire extinguishers, covering construction, testing and marking. CCCF is the China Compulsory Certification for fire products and qualifies the unit for the Chinese market — it is not an export certificate by itself. For export, certificates are confirmed for the exact model and destination.' },
      { question: 'What sizes and discharge performance are available?', answer: 'The unit is available in 3kg, 4kg and 5kg net agent weights with a discharge time of roughly 8-15 seconds on the 5kg model. The ABC powder is specified at 90% active content.' },
      { question: 'How do I check that the extinguisher is still serviceable?', answer: 'The color-coded pressure gauge on the carbon steel cylinder shows the charged state — keep the needle in the green zone and the safety pin intact. A one-year warranty covers the unit.' },
      { question: 'Can I order extinguishers with my own label (OEM)?', answer: 'Yes. Cylinder color, label and language can be customized, and MOQ, artwork and transport packaging requirements (dangerous-goods classification) are confirmed on quotation.' }
    ]
  },
  {
    id: '32',
    slug: 'sqd100-1-6-fire-pump-adapter',
    name: 'SQD100-1.6 Fire Pump Adapter (Siamese Connection)',
    category: 'Hydrants & Pump Connections',
    description: 'SQD100-1.6 fire department siamese connection with twin DN65 inlets (SQS65 / KWS65) and DN100 flanged outlet. Powder coated ductile iron body with integrated control valve for reliable fire pump water supply connection.',
    features: [
      'Twin inlet design for dual fire engine water supply',
      'Integrated control valve with handwheel for flow regulation',
      'Powder coated corrosion resistant finish',
      'Safety cables on caps prevent loss during operation',
      'Compact design suitable for airport and municipal fire protection'
    ],
    specs: {
      'Model': 'SQD100-1.6',
      'Inlet': '2 × DN65 (2.5") with caps (SQS65 / KWS65)',
      'Outlet': 'DN100 (4") Flanged',
      'Pressure Rating': '1.6 MPa',
      'Length': '120 mm',
      'Finish': 'Powder Coated Red'
    },
    materials: {
      'Body': 'Ductile Iron / Cast Iron',
      'Handwheel Stem': 'Brass / Stainless Steel',
      'Safety Cables': 'Braided Steel'
    },
    image: '/assets/products/sqd100-1-6-fire-pump-adapter.webp',
    seoTitle: 'SQD100-1.6 Fire Pump Adapter Siamese Connection',
    seoDescription: 'SQD100-1.6 fire department siamese connection: twin DN65 inlets, DN100 flanged outlet, powder-coated body for reliable fire pump supply. Factory direct.',
    faqs: [
      { question: 'What is the difference between SQS65 and KWS65 inlet caps on the siamese?', answer: 'They follow different international coupling standards for fire engines. SQS65 matches the international fire-service pattern and KWS65 the German pattern — specify the standard used by your fire department so the inlets are directly compatible with its appliances.' },
      { question: 'Can two fire engines supply the SQD100 at the same time?', answer: 'Yes. The twin DN65 inlets allow simultaneous connection of two fire engines, combining their flow into the single DN100 flanged outlet for high-capacity pump supply.' },
      { question: 'Does the SQD100 include a flow control valve?', answer: 'Yes — an integrated control valve with handwheel is built into the powder-coated ductile iron body for flow regulation, with braided steel safety cables on the caps to prevent loss during operation.' },
      { question: 'What is the pressure rating and size of the SQD100-1.6?', answer: 'Rated 1.6 MPa in a compact 120 mm body — suitable for airport, industrial yard and municipal fire protection pump connections where space is limited.' }
    ]
  },
  {
    id: '33',
    slug: 'sp45f-flange-digital-balancing-valve',
    name: 'SP45F Flange Digital Balancing Valve',
    category: 'Valves & Parts',
    description: 'SP45F flanged digital balancing valve in nodular cast iron (QT450) with digital lock display for precise HVAC hydraulic balancing. Y-pattern globe structure with dual pressure test points for accurate flow measurement.',
    features: [
      'Digital lock display for precise flow balancing',
      'Dual pressure test points for accurate measurement',
      'Nodular cast iron (QT450) body for durability',
      'Y-pattern globe structure with low pressure loss',
      'Suitable for HVAC and water regulation systems'
    ],
    specs: {
      'Size Range': 'DN50 - DN300',
      'Material': 'Nodular Cast Iron (QT450)',
      'Pressure': 'Medium Pressure',
      'Media': 'Water, Oil, Gas',
      'Structure': 'Balancing Valve (Y-Pattern Globe)',
      'Media Temperature': 'Normal Temperature',
      'Warranty': '1 Year',
      'Customization': 'OEM / ODM'
    },
    materials: {
      'Valve Body': 'Nodular Cast Iron (QT450)',
      'Handwheel': 'Ductile Iron',
      'Test Points': 'Stainless Steel'
    },
    image: '/assets/products/sp45f-flange-digital-balancing-valve.webp',
    seoTitle: 'SP45F Flange Digital Balancing Valve | HVAC Balancing Valve',
    seoDescription: 'SP45F digital balancing valve DN50-DN300 with digital lock and test points for precise HVAC hydraulic balancing. QT450 ductile iron. Factory price from Wanlian.'
  },
  {
    id: '34',
    slug: 'z85x-stainless-steel-grooved-gate-valve',
    name: 'Z85X Stainless Steel Grooved Gate Valve',
    category: 'Valves & Parts',
    description: 'Z85X stainless steel clamp-type non-rising stem grooved gate valve for water service. Cast 316 stainless steel (CF8M) body with grooved ends for fast installation. Suitable for gas, oil and water pipelines requiring corrosion resistance.',
    features: [
      'Cast 316 stainless steel (CF8M) body for corrosion resistance',
      'Grooved clamp connection for fast, easy installation',
      'Non-rising stem design with manual operation',
      'Suitable for gas, oil and water media',
      'OEM / OBM customization support'
    ],
    specs: {
      'Model': 'Z85X',
      'Size Range': 'DN40 - DN300 (2" - 12")',
      'Material': 'Stainless Steel (CF8M)',
      'Media': 'Gas, Oil, Water',
      'Operation': 'Manual (Non-Rising Stem)',
      'Structure': 'Gate Valve',
      'Warranty': '1 Year',
      'Customization': 'OEM / OBM'
    },
    materials: {
      'Valve Body': 'Cast 316 Stainless Steel (CF8M)',
      'Stem': 'Stainless Steel',
      'Handwheel': 'Ductile Iron / Stainless Steel'
    },
    image: '/assets/products/z85x-stainless-steel-grooved-gate-valve.webp',
    seoTitle: 'Z85X Stainless Steel Grooved Gate Valve | CF8M',
    seoDescription: 'Z85X stainless steel grooved gate valve DN40-DN300 with CF8M body for gas, oil and water pipelines. Corrosion resistant with fast clamp installation. Factory price.'
  },
  {
    id: '35',
    slug: 'brass-gate-valve-z15w-16t',
    name: 'ANSI Forged Brass Gate Valve (Z15W-16T)',
    category: 'Valves & Parts',
    description: 'Z15W-16T forged brass gate valve with NPT threaded connection, manual operated for oil and water applications. Compact design with reliable sealing, widely used in water supply, HVAC and industrial pipelines.',
    features: [
      'Forged brass body with sand-cast texture for durability',
      'NPT threaded ends for quick and leak-free installation',
      'Non-rising stem design with red handwheel',
      'Rated 200 WOG (Water, Oil, Gas)',
      'OEM / ODM customization available'
    ],
    specs: {
      'Size Range': 'DN15 - DN100 (1/2" - 4")',
      'Pressure': 'PN1.6 MPa (200 WOG)',
      'Material': 'Forged Brass',
      'Connection': 'NPT Thread',
      'Media': 'Oil, Water',
      'Operation': 'Manual',
      'Temperature': 'Normal Temperature',
      'Warranty': '1 Year',
      'Standard': 'ANSI'
    },
    materials: {
      'Valve Body': 'Forged Brass',
      'Stem': 'Brass',
      'Handwheel': 'Cast Iron with Red Paint'
    },
    image: '/assets/products/brass-gate-valve-z15w-16t.webp',
    seoTitle: 'Z15W-16T Forged Brass Gate Valve | NPT Thread',
    seoDescription: 'ANSI forged brass gate valve Z15W-16T with NPT threaded ends for oil and water systems. PN1.6MPa, manual operation. Factory price from Wanlian Fluid.'
  },
  {
    id: '36',
    slug: 'stainless-steel-fire-extinguisher-box',
    name: 'Stainless Steel Fire Extinguisher Box (with Hose Reel)',
    category: 'Fire Cabinets & Interfaces',
    description: 'Customized stainless steel fire extinguisher box with integrated fire hose reel storage. Powder coated finish with viewing window, suitable for airport, commercial and industrial fire protection installations.',
    features: [
      'Stainless steel 304 / 201 construction with powder coating',
      'Recessed door with clear viewing window',
      'Stores fire hose reel or fire extinguisher',
      'Durable, portable and easy to install',
      'Red or silver color options, fully customizable (OEM)'
    ],
    specs: {
      'Material': 'Stainless Steel 304 / 201 / Iron',
      'Type': 'Fire Extinguisher Box / Fire Hose Reel Cabinet',
      'Function': 'Storage of fire reel hose or fire extinguisher',
      'Application': 'Airport Fire Protection, Commercial Buildings',
      'Color': 'Red, Silver',
      'Bearing Capacity': '15 - 30 kN',
      'Finish': 'Powder Coating',
      'Customization': 'Size & Logo (OEM)'
    },
    materials: {
      'Cabinet Body': 'Stainless Steel 304 / 201',
      'Viewing Window': 'Tempered Glass / Plastic',
      'Latch': 'Stainless Steel'
    },
    image: '/assets/products/stainless-steel-fire-extinguisher-box.jpg',
    seoTitle: 'Stainless Steel Fire Extinguisher Box with Hose Reel',
    seoDescription: 'Custom stainless steel fire extinguisher box with fire hose reel storage: powder coated, durable for airports and commercial fire protection. Factory price.'
  },
  {
    id: '37',
    slug: 'remote-control-float-valve-100x',
    name: 'Stainless Steel Remote Control Float Valve (100X-16P)',
    category: 'Hydraulic Safety',
    description: '100X-16P remote control float valve in cast stainless steel (CF8), flanged connection for automatic water level control in water tanks and reservoirs. Hydraulic operated with pilot float control for reliable level regulation.',
    features: [
      'Stainless steel CF8 body for corrosion resistance',
      'Hydraulic float pilot control for automatic level regulation',
      'Flanged connection DN40-DN300 for easy installation',
      'Wide operating temperature range -50°C to 100°C',
      'OEM / ODM customization available'
    ],
    specs: {
      'Model': '100X-16P',
      'Size Range': 'DN40 - DN300',
      'Pressure': '0 - 1.0 MPa (0 - 10 bar)',
      'Material': 'Stainless Steel (CF8)',
      'Connection': 'Flanged',
      'Media': 'Water',
      'Operation': 'Hydraulic (Float Pilot Controlled)',
      'Temperature': '-50°C to 100°C',
      'Warranty': '1 Year'
    },
    materials: {
      'Valve Body': 'Cast Stainless Steel (CF8)',
      'Pilot & Tubing': 'Stainless Steel',
      'Top Valve': 'Ball Valve with Plastic Handle'
    },
    image: '/assets/products/remote-control-float-valve-100x.webp',
    seoTitle: '100X-16P Stainless Steel Remote Control Float Valve',
    seoDescription: '100X-16P remote control float valve in stainless steel CF8, DN40-DN300 flanged. Hydraulic pilot operated for automatic water level control. Factory price.'
  },
  {
    id: '38',
    slug: 'ul-fm-resilient-seat-osy-gate-valve',
    name: 'UL/FM Fire Protection Resilient Seated OS&Y Gate Valve',
    category: 'Valves & Parts',
    description: 'UL and FM certified resilient seated OS&Y (Outside Screw and Yoke) gate valve with grooved ends for fire protection systems. Nodular cast iron body with rising stem indicator for clear open/closed position visibility.',
    features: [
      'UL and FM certified for fire protection service',
      'OS&Y rising stem design with clear position indication',
      'Grooved-end connections for fast mechanical coupling',
      'Nodular cast iron body with resilient seat for drip-tight closure',
      'OEM / ODM customization available'
    ],
    specs: {
      'Size Range': '2" - 10" (DN50 - DN250)',
      'Material': 'Nodular Cast Iron',
      'Connection': 'Grooved Ends',
      'Media': 'Water',
      'Operation': 'Manual (OS&Y Rising Stem)',
      'Structure': 'Gate Valve',
      'Temperature': 'Normal Temperature',
      'Certification': 'UL / FM Listed',
      'Customization': 'OEM / ODM'
    },
    materials: {
      'Valve Body': 'Nodular Cast Iron',
      'Stem': 'Brass / Stainless Steel',
      'Seat': 'Resilient (EPDM)',
      'Handwheel': 'Ductile Iron'
    },
    image: '/assets/products/ul-fm-resilient-seat-osy-gate-valve.webp',
    seoTitle: 'UL/FM Resilient Seated OS&Y Gate Valve | Grooved Ends',
    seoDescription: 'UL/FM listed resilient seated OS&Y gate valve with grooved ends for fire protection systems. Nodular cast iron, rising stem. Factory price from Wanlian Fluid.',
    faqs: [
      { question: 'Is this OS&Y gate valve really UL and FM listed?', answer: 'The model is listed for fire protection service. We confirm the exact listed model, certificate number and coverage per order, and the certificates travel with the documentation — always verify the number at the issuing body before acceptance.' },
      { question: 'Why specify grooved ends for fire mains?', answer: 'Grooved ends use mechanical couplings instead of welding or bolting: faster installation, field alignment of the pipe run, and much quicker valve replacement — the standard choice for sprinkler and standpipe mains.' },
      { question: 'What does the rising stem of an OS&Y valve indicate?', answer: 'The OS&Y (outside screw and yoke) rising stem shows valve position at a glance — fully raised means open, lowered means closed — which matters for monitored main isolation in fire systems.' },
      { question: 'What size range is available for the UL/FM OS&Y valve?', answer: '2 inch to 10 inch (DN50 to DN250) in nodular cast iron with an EPDM resilient seat for drip-tight closure, with OEM/ODM customization available.' }
    ]
  },
  {
    id: '39',
    slug: 'metal-fire-extinguisher-box-red',
    name: 'Metal Fire Extinguisher Box / Hose Reel Cabinet (Red)',
    category: 'Fire Cabinets & Interfaces',
    description: 'Customized metal fire extinguisher box with fire hose reel storage, powder coated red with operating instructions printed on the door. Suitable for airport, commercial and industrial fire protection installations.',
    features: [
      'Red powder coated metal construction',
      'Stores fire hose reel or fire extinguisher',
      'Operating instruction panel on the door',
      'Durable, easy installation and easy operation',
      'Customizable structure, size and logo (OEM)'
    ],
    specs: {
      'Material': 'Stainless Steel 304 / 201 / Iron',
      'Type': 'Fire Extinguisher Box / Fire Hose Reel Cabinet',
      'Application': 'Airport Fire Protection, Commercial Buildings',
      'Color': 'Red Powder Coating',
      'Inner Diameter': '350mm',
      'Length': '500mm',
      'Customization': 'Structure & Logo (OEM)'
    },
    materials: {
      'Cabinet Body': 'Metal (Iron / Stainless Steel)',
      'Door Glass': 'Tempered Glass',
      'Lock': 'Brass / Zinc Alloy'
    },
    image: '/assets/products/metal-fire-extinguisher-box-red.jpg',
    seoTitle: 'Metal Fire Extinguisher Box with Hose Reel Cabinet | Red',
    seoDescription: 'Customized metal fire extinguisher box with fire hose reel storage, red powder coated with instruction panel. Airport and commercial fire protection. Factory price.'
  },
  {
    id: '40',
    slug: 'horizontal-sidewall-fire-sprinkler-t-zstbs',
    name: 'Horizontal Sidewall Fire Sprinkler (T-ZSTBS)',
    category: 'Sprinklers & Alarm Valves',
    description: 'Horizontal sidewall fire sprinkler (T-ZSTBS) with chrome plated finish and red 68°C glass bulb. Designed for wall-mounted installation along the perimeter of rooms, providing fast response fire suppression coverage.',
    features: [
      'Horizontal sidewall design for perimeter coverage',
      'Red glass bulb 68°C (155°F) temperature rating',
      'Chrome plated polished finish',
      'Compact deflector with directional water distribution',
      'Suitable for light and ordinary hazard occupancies'
    ],
    specs: {
      'Model': 'T-ZSTBS',
      'Temperature Rating': '68°C (155°F)',
      'Bulb Color': 'Red (Q5 response)',
      'Material': 'Chrome Plated Brass / Stainless Steel',
      'Connection': '1/2" NPT Threaded',
      'Response': 'Standard Response',
      'Application': 'Fire Sprinkler Systems (Light / Ordinary Hazard)'
    },
    materials: {
      'Frame': 'Chrome Plated Brass',
      'Bulb': 'Glass (Red Liquid, 68°C)',
      'Deflector': 'Metal with Directional Notches'
    },
    image: '/assets/products/horizontal-sidewall-fire-sprinkler-t-zstbs.png',
    seoTitle: 'Horizontal Sidewall Fire Sprinkler T-ZSTBS | 68°C',
    seoDescription: 'Horizontal sidewall fire sprinkler T-ZSTBS with 68°C red glass bulb, chrome plated finish for wall-mounted fire suppression. Factory price from Wanlian Fluid.'
  },
  {
    id: '41',
    slug: 'd381x-16q-grooved-butterfly-valve',
    name: 'D381X-16Q Grooved Butterfly Valve (Worm Gear)',
    category: 'Valves & Parts',
    description: 'D381X-16Q grooved-end butterfly valve with worm gear operator for fire and water pipelines. Nodular cast iron (QT450) body with electrophoretic coating, PN16 pressure rating and signal lock option for status indication.',
    features: [
      'Worm gear operator with handwheel for smooth control',
      'Grooved ends for fast mechanical coupling installation',
      'Nodular cast iron (QT450) body with electrophoretic coating',
      'Signal locking device option for open/closed status indication',
      'Suitable for fire protection and water pipelines'
    ],
    specs: {
      'Model': 'D381X',
      'Size Range': 'DN50 - DN300',
      'Material': 'Nodular Cast Iron (QT450)',
      'Pressure': 'PN16',
      'Connection': 'Grooved Ends',
      'Operation': 'Worm Gear with Handwheel',
      'Bearing Capacity': '10 - 50 kN',
      'Coating': 'Electrophoretic',
      'Customization': 'OEM'
    },
    materials: {
      'Valve Body': 'Nodular Cast Iron (QT450)',
      'Disc': 'Ductile Iron / Stainless Steel',
      'Seat': 'EPDM Rubber Lining',
      'Operator': 'Cast Iron Worm Gear Box'
    },
    image: '/assets/products/d381x-16q-grooved-butterfly-valve.webp',
    seoTitle: 'D381X-16Q Grooved Butterfly Valve | PN16 Worm Gear',
    seoDescription: 'D381X-16Q grooved butterfly valve DN50-DN300 with worm gear operator for fire and water pipelines. QT450 ductile iron, PN16. Factory price from Wanlian.'
  },
  {
    id: '42',
    slug: 'zstdy-concealed-fire-sprinkler',
    name: 'ZSTDY Concealed Fire Sprinkler (Recessed)',
    category: 'Sprinklers & Alarm Valves',
    description: 'ZSTDY concealed (recessed) fire sprinkler with electroplated chrome finish and decorative cover plate for high-end ceiling installations. Stainless steel construction with 68°C red glass bulb, UL listed.',
    features: [
      'Concealed design with decorative cover plate for premium ceilings',
      'Electroplated chrome finish, stainless steel construction',
      '68°C (155°F) red glass bulb temperature rating',
      'Thread & gasket sealing for leak-free installation',
      'UL listed, ideal for high-end ceiling applications'
    ],
    specs: {
      'Model': 'ZSTDY',
      'Size Range': 'DN15 - DN20 (1/2" - 3/4")',
      'Material': 'Stainless Steel',
      'Temperature Rating': '68°C (155°F)',
      'Finish': 'Electroplated Chrome',
      'Certification': 'UL Listed',
      'Application': 'Concealed Ceiling Fire Sprinkler Systems'
    },
    materials: {
      'Sprinkler Body': 'Stainless Steel',
      'Bulb': 'Glass (Red Liquid, 68°C)',
      'Escutcheon / Cover': 'Brass with Chrome Finish'
    },
    image: '/assets/products/zstdy-concealed-fire-sprinkler.webp',
    seoTitle: 'ZSTDY Concealed Fire Sprinkler | Recessed Chrome',
    seoDescription: 'ZSTDY concealed fire sprinkler DN15-DN20 with decorative cover for high-end ceilings. Chrome electroplated stainless steel, UL listed. Factory price from Wanlian.'
  },
  {
    id: '43',
    slug: 'storz-coupling-2-5inch-aluminum',
    name: 'Aluminum Storz Fire Coupling (2.5" · German Standard) — Locks in One Hand, Stays Dry',
    category: 'Fire Cabinets & Interfaces',
    description: 'A leaking hose joint buys the fire seconds. Threaded joints take two people and a wrench, and they drip at the seal while the line is under pressure.\n\nThe Storz coupling locks in one hand. A quarter turn seats the self-sealing gasket and locks the joint, no tool, no drip. Under 1.6 MPa the seam stays dry, clear water or foam, and the line is ready to throw.\n\nAluminum, brass or chrome, 2.5 inch (65 mm) German standard, barbed for lay-flat hose, factory pre-fitted or loose. For fire departments, marine lines, and any 65 mm line set from hydrant to nozzle.',
    features: [
      'German standard Storz quick-connect design',
      'Self-sealing edge for leak-free connection',
      'Aluminum construction with optional brass/chrome plating',
      'Suitable for water and foam mixture media',
      'Easy installation, durable and portable'
    ],
    specs: {
      'Size': '2.5" (DN50 / DN65 / DN80 / DN100 / DN150)',
      'Material': 'Aluminum (Brass / Chrome Plated options)',
      'Pressure': '1.6 MPa',
      'Standard': 'German Storz Standard',
      'Maximum Range': '28m',
      'Applicable Medium': 'Clear Water and Foam Mixture',
      'Connection': 'Storz Quick Connect with Barbs'
    },
    materials: {
      'Coupling Body': 'Aluminum Alloy',
      'Gasket': 'Self-Sealing Rubber',
      'Options': 'Brass / Chrome Plated'
    },
    image: '/assets/products/storz-coupling-2-5inch-aluminum-overlay.png',
    infographic: '/assets/products/storz-coupling-2-5inch-aluminum-infographic.svg',
    seoTitle: '2.5" Aluminum Storz Coupling | German Standard',
    seoDescription: 'German standard Storz fire hose coupling 2.5" in aluminum with self-sealing edge for water and foam firefighting. 1.6MPa. Factory price from Wanlian Fluid.',
    faqs: [
      { question: 'Which hose and connection systems does the Storz coupling suit?', answer: 'It is a German-standard Storz quick-connect coupling with a self-sealing edge, used for hose-to-hose and hose-to-nozzle connections with clear water and foam mixture media. Hydrant outlet threads (such as BS336, NIST or KWS) need the matching adapter — the coupling itself is the quick-connect interface.' },
      { question: 'What pressure rating and sizes are available?', answer: 'Working pressure is 1.6 MPa, in sizes covering 2.5" (DN50 / DN65 / DN80 / DN100 / DN150), in aluminum with optional brass or chrome plating.' },
      { question: 'Does the coupling come with barbs for hose fitting?', answer: 'Yes — the Storz connection uses quick-connect with barbs for attaching to layflat hose ends, and can be supplied factory-fitted or loose depending on the order.' },
      { question: 'Can it be used with the Model 8-65 layflat fire hose?', answer: 'Yes. The 2.5" size matches the Model 8-65 (65mm) hose configuration — pair it with our layflat fire hose and adjustable pistol grip nozzles for a complete line set.' }
    ]
  },
  {
    id: '44',
    slug: 'underground-fire-hydrant-sa',
    name: 'Underground Fire Hydrant (SA Series)',
    category: 'Hydrants & Pump Connections',
    description: 'Wanlian SA series underground fire hydrant is installed flush with the ground, keeping the valve body protected in the soil to resist winter freezing and vehicle impact. It provides two KWS65 outlets (65mm or a 65/80mm combination) for fire engines and hose lines, making it the standard choice for cold-climate municipal roads, industrial parks and warehouse fire protection networks.',
    features: [
      'Flush underground installation keeps the body frost-protected and collision-resistant',
      'Two KWS65 outlets (65/80mm options) with chain-retained caps for fast engine connection',
      'Heavy-duty ductile iron body with full red anti-corrosive powder coating',
      'Brass-seated lower valve for reliable shutoff and low maintenance',
      'Anti-freeze drainage variant available for very cold regions'
    ],
    specs: {
      'Nominal Inlet': 'DN100 / DN150',
      'Outlet Config': '2 x 65mm (KWS65), 65 + 80mm option',
      'Nominal Pressure': '1.6 MPa (PN16)',
      'Installed Height': '0.71 - 0.92 m (model dependent, incl. elbow)',
      'Body Material': 'Ductile Iron QT450',
      'Application': 'Municipal roads, cold-climate outdoor fire networks'
    },
    materials: {
      'Hydrant Body': 'Ductile Iron (QT450)',
      'Outlets & Bonnet': 'Ductile Iron, red powder coated',
      'Lower Valve': 'Brass Seat / EPDM Seal',
      'Caps': 'Cast Iron / Zinc Alloy with safety chain'
    },
    image: '/assets/products/underground-fire-hydrant-sa.webp',
    seoTitle: 'SA Underground Fire Hydrant DN100/DN150 | Antifreeze',
    seoDescription: 'SA series underground fire hydrant with two KWS65 outlets, ductile iron body, 1.6 MPa. Antifreeze flush installation for municipal and industrial fire networks. Factory direct from Wanlian.',
    faqs: [
      { question: 'How is the SA underground hydrant different from an overground (SS) hydrant?', answer: 'The SA hydrant is installed mostly below grade — only the bonnet and outlet caps break through the ground surface — so the body stays protected from winter freezing and vehicle impact. The overground SS hydrant stands fully on top of grade. Choose SA for cold climates and high-traffic roads.' },
      { question: 'What outlet sizes does the SA underground hydrant offer?', answer: 'Standard is two 65mm KWS outlets, with a 65 + 80mm combination available on the DN150 models, matching most international fire engine coupling threads (KWS / BS336 / NIST on request).' },
      { question: 'What is the installed height of the SA hydrant?', answer: 'Installed height including the elbow ranges from about 0.71m on the SA100/65 small body up to 0.92m on the SA150 models, so it can be matched to local road camber and frost-depth requirements.' },
      { question: 'Will the SA hydrant freeze in winter?', answer: 'Because the valve body sits in the ground, the SA hydrant is far more frost-resistant than overground types, and an anti-freeze drainage variant is available for very cold regions to ensure the barrel drains completely after each use.' }
    ]
  },
  {
    id: '45',
    slug: 'dry-alarm-valve-zsfc',
    name: 'Dry Alarm Valve (ZSFC Series)',
    category: 'Sprinklers & Alarm Valves',
    description: 'The ZSFC dry alarm valve is the core control valve for dry-pipe and pre-action sprinkler systems. It stays closed by air (or nitrogen) pressure on the system side while the water side is held full, and opens automatically when an actuated sprinkler releases the system air, letting water fill the dry piping and reach the discharging sprinkler. Ideal for unheated buildings, cold-climate warehouses and pre-action systems.',
    features: [
      'Air-pressure operated clapper for a reliable closed state in dry and pre-action systems',
      'Instant opening when system air is released by an actuated sprinkler',
      'Integrated alarm mechanism with delay chamber and water-motor gong for early warning',
      'Heavy-duty ductile iron body rated for the full dry-pipe pressure cycle',
      'Flanged connections available in DN100 - DN200'
    ],
    specs: {
      'Size Range': 'DN100 / DN150 / DN200 (ZSFC100 / ZSFC150 / ZSFC200)',
      'Nominal Pressure': '1.6 MPa (PN16)',
      'System Side': 'Air / Nitrogen (0.03 - 0.05 MPa typical)',
      'Connection Type': 'Flanged',
      'Accessory': 'Delay Chamber, Water-Motor Alarm Gong, Pressure Gauges'
    },
    materials: {
      'Valve Body': 'Ductile Iron (QT450)',
      'Clapper / Seat': 'EPDM / NBR Covered Ductile Iron',
      'Delay Chamber': 'Cast Iron / Brass',
      'Alarm Gong': 'Aluminum Alloy',
      'Trim & Fittings': 'Galvanized Steel / Brass'
    },
    image: '/assets/products/dry-alarm-valve-zsfc.webp',
    seoTitle: 'ZSFC Dry Alarm Valve DN100-DN200 | Dry Sprinkler System',
    seoDescription: 'ZSFC dry alarm valve for dry-pipe and pre-action sprinkler systems, DN100-DN200, 1.6 MPa, with delay chamber and water-motor alarm gong. Ductile iron. Factory direct from Wanlian.',
    faqs: [
      { question: 'What is the difference between a dry alarm valve and a wet alarm valve (ZSFZ)?', answer: 'A wet alarm valve protects a system whose pipes are always full of water. A dry alarm valve (ZSFC) protects a dry-pipe system whose water side is full but the pipe network is held under air pressure and empty of water, so it stays shut until a sprinkler opens and releases the air. Use ZSFC where the protected space can freeze or where pre-action dual-protection is required.' },
      { question: 'What sizes is the ZSFC dry alarm valve available in?', answer: 'The ZSFC is available in DN100, DN150 and DN200 (models ZSFC100 / ZSFC150 / ZSFC200) with a 1.6 MPa nominal rating and flanged connections, covering the majority of dry-pipe and pre-action installations.' },
      { question: 'What alarm devices come with the ZSFC valve?', answer: 'The valve group includes the delay chamber, a water-motor alarm gong, and inlet and outlet pressure gauges so operators can confirm both the air pressure on the system side and water pressure on the supply side at a glance.' },
      { question: 'Can the ZSFC be used in a pre-action system?', answer: 'Yes. The ZSFC dry alarm valve is used as the water control valve in pre-action systems, working with a pre-action control device so water only enters the dry piping after both the sprinkler and the detection system actuate.' }
    ]
  },
  {
    id: '46',
    slug: 'esfr-sprinkler-head',
    name: 'ESFR Early Suppression Fast Response Sprinkler',
    category: 'Sprinklers & Alarm Valves',
    description: 'ESFR (Early Suppression Fast Response) sprinklers deliver very high water discharge with fast thermal response, engineered to suppress or control severe fires in high-pile storage, warehouses and large industrial facilities. A large engineered deflector with a high flow coefficient and a 74°C glass bulb give the coverage and reaction speed required by NFPA 13 / GB 50084 for storage protection.',
    features: [
      'High discharge rate (K-factor per NFPA 13) to knock down fast-growing storage fires',
      'Fast-response operation with a 74°C glass bulb for early suppression',
      'Large engineered deflector for wide, uniform water distribution under racking',
      'Pendent and upright (PY / UY) orientations for rack and open-storage layouts',
      'Durable forged brass construction, packed 50 pcs per box for project supply'
    ],
    specs: {
      'Model Series': 'ESFR-202 / ESFR-242 / ESFR-363, ZSTX-161',
      'Temperature Rating': '74°C (165°F)',
      'Orientation': 'Pendent (PY) / Upright (UY)',
      'Thread Connection': 'R1/2" / R3/4" NPT',
      'Packing': '50 pcs / box',
      'Application': 'High-Pile Storage, Warehouses, Industrial Facilities'
    },
    materials: {
      'Body Frame': 'Forged Brass (H59)',
      'Glass Bulb': '74°C Fast-Response Glass',
      'Deflector': 'Stainless / Copper Alloy, High-Flow Pattern'
    },
    image: '/assets/products/esfr-sprinkler-head.webp',
    seoTitle: 'ESFR Sprinkler Head 74°C | Warehouse High-Pile Storage',
    seoDescription: 'ESFR early suppression fast response sprinkler, 74°C glass bulb, pendent and upright, high discharge for warehouse and high-pile storage fire protection. Factory price from Wanlian.',
    faqs: [
      { question: 'What makes an ESFR sprinkler different from a standard fire sprinkler?', answer: 'ESFR (early suppression fast response) sprinklers are designed to throw a very large volume of water quickly to knock down fast-growing fires. They use a high K-factor and a fast-response 74°C bulb, and are sized for high-pile storage and warehouses where standard sprinklers are not sufficient.' },
      { question: 'What temperature rating does this ESFR use?', answer: 'All the ESFR models in this range use a 74°C (165°F) fast-response glass bulb, the standard rating for storage and industrial environments.' },
      { question: 'Are the ESFR sprinklers available in pendent and upright orientations?', answer: 'Yes. The series is offered in pendent (PY, hanging down) and upright (UY, facing up) orientations so it can be matched to open-spray storage layouts and rack environments.' },
      { question: 'What are ESFR sprinklers used for?', answer: 'ESFR sprinklers protect high-pile storage, warehouses, distribution centers and large industrial facilities, and are the go-to head type where NFPA 13 / GB 50084 storage-protection criteria apply.' }
    ]
  }
];

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
  seoTitle: string;
  seoDescription: string;
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
    image: 'https://s.alicdn.com/@sc04/kf/H484c5fb59c5c4816bab9e792877e6395g/Wanlian-Z41X-16Q-OEM-ODM-Customized-Ductile.jpg?hasNWGrade=1',
    seoTitle: 'Resilient Seat Gate Valve Z41X | Wanlian Fluid Equipment',
    seoDescription: 'High quality Ductile Iron Resilient Seated Gate Valve Z41X for industrial fluid systems. Low pressure drop, bubble-tight seal. Contact Quanzhou Wanlian Fluid for factory price.'
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
    image: 'https://s.alicdn.com/@sc04/kf/Hafe69f2538c44327956335b67a911b16I/17-Bar-Ductile-Iron-Flexible-Indoor-Fire.jpg?v=20260729',
    seoTitle: 'Indoor Fire Hydrant Valve SN65 Manufacturer | Wanlian Fluid',
    seoDescription: 'Ductile Iron SN65 Indoor Fire Hydrant Head for fire protection pipelines. 1.6 MPa pressure rating with grooved or flanged connection options. Contact Wanlian Fluid for product details and quotation.'
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
    image: 'https://s.alicdn.com/@sc04/kf/H82d57eb132e942ecba6023697838d6afn/Water-Alarm-Valves-ZSFZ-150-Flexible-Cast.png?hasNWGrade=1',
    seoTitle: 'Wet Alarm Check Valve ZSFZ 150 | Sprinkler System | Wanlian Fluid',
    seoDescription: 'Professional Wet Alarm Valve ZSFZ 150 for automatic fire sprinkler systems. High durability, reliable performance, fast alarm response. Buy directly from China manufacturer.'
  },
  {
    id: '4',
    slug: 'signal-grooved-wafer-butterfly-valve-dn80',
    name: 'Signal Grooved Wafer Butterfly Valve (DN80-PN16)',
    category: 'Valves & Parts',
    description: 'DN80 PN16 QT450 Manual Worm Gear Signal Grooved Wafer Butterfly Valve. Highly suitable for firefighting pipelines and industrial water systems where valve open/close status monitoring is required.',
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
    image: 'https://s.alicdn.com/@sc04/kf/Hcea4a853dc38450e9cea034d8a2e29fez/Fire-Fighting-DN80-PN16-QT450-Manual-Worm.jpg?hasNWGrade=1',
    seoTitle: 'Signal Wafer Butterfly Valve DN80 PN16 | Wanlian Fluid',
    seoDescription: 'Ductile Iron QT450 Signal Wafer Butterfly Valve. Perfect for firefighting water system control. Integrated monitoring switch, smooth worm gear operation.'
  },
  {
    id: '5',
    slug: 'sliding-ball-check-valve-hq41x',
    name: 'Sliding Ball Check Valve (HQ41X-16)',
    category: 'Valves & Parts',
    description: 'The HQ41X Sliding Ball Check Valve uses a rubber-coated sphere as its valve disk. The ball rolls up and down on the internal guides with fluid flow, ensuring low pressure loss, quiet closure, and no water hammer.',
    features: [
      'Full-port design ensures 50% less head loss than swing check valves',
      'Rubber-covered steel ball prevents clogging and ensures bubble-tight seal',
      'Can be installed both horizontally and vertically',
      'Excellent for sewage, municipal drainage, and submersible pump networks'
    ],
    specs: {
      'Nominal Diameter': 'DN50 - DN350',
      'Nominal Pressure': '1.0 MPa / 1.6 MPa',
      'Body Material': 'Cast Iron / Ductile Iron / Cast Steel',
      'Ball Material': 'Steel Core with NBR Coating',
      'Working Temperature': '0°C to 80°C'
    },
    materials: {
      'Body & Bonnet': 'Cast Iron (HT200) / Spheroidal Iron (QT450)',
      'Rolling Ball': 'Carbon Steel Core + NBR Fully Covered',
      'Guides/Slides': 'Integrated Spheroidal Slices',
      'Bonnet Gasket': 'EPDM / High Temperature Asbestos'
    },
    image: 'https://s.alicdn.com/@sc04/kf/H2b9da3a8472e47d69ad52aeb5c436811g/Wanlian-HQ44X-16-Factory-Direct-Easy-Installation.jpg?hasNWGrade=1',
    seoTitle: 'Sliding Ball Check Valve HQ41X | Low Pressure Loss | Wanlian Fluid',
    seoDescription: 'Reliable sliding ball check valve HQ41X for sewage and water pipelines. Low head loss, non-clogging rolling ball design, quiet closing.'
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
    image: 'https://s.alicdn.com/@sc04/kf/H7cdb5264c72447e8b7c744342168553eJ/Wanlian-500X-DN20-ANSI-JIS-Hydraulic-Operated.jpg?hasNWGrade=1',
    seoTitle: 'Hydraulic Level Control Valve F745X | Float Pilot | Wanlian Fluid',
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
    image: '/assets/02_valves_parts/valves_p18.png?v=20260729',
    seoTitle: 'Electromagnetic Flow Meter Manufacturer | Wanlian Fluid',
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
    image: 'https://s.alicdn.com/@sc04/kf/H74fea4ebfe674c69b187eb9d73b2115cP.jpg_720x720q50.jpg?v=20260729',
    seoTitle: 'Telescopic Y Strainer SGL41H | Wanlian Fluid Equipment',
    seoDescription: 'Integrated Telescopic Y Strainer SGL41H for industrial water and HVAC pipelines. Easy maintenance, solid SS304 screen. Buy directly from China factory.'
  },
  {
    id: '9',
    slug: 'anti-collision-pressure-regulating-outdoor-hydrant-ssft100',
    name: 'Anti-Collision Pressure-Regulating Outdoor Fire Hydrant (SSFT100/65)',
    category: 'Hydrants & Pump Connections',
    description: 'Designed to eliminate the risk of massive water gushes after accidents. In the event of a traffic collision, the specialized safety bolts shear cleanly, and the internal valve automatically shuts off water immediately, allowing pressurized repairs.',
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
    image: 'https://s.alicdn.com/@sc04/kf/H4424c6c6fd7547c79fef5c3a059b9903K/China-Factory-Price-Cast-Iron-Outdoor-Fire.png?v=20260729',
    seoTitle: 'Anti-collision Outdoor Fire Hydrant SSFT100 | Wanlian Fluid',
    seoDescription: 'Anti-collision and pressure-regulating outdoor fire hydrant SSFT100 with a double safety shut-off mechanism for fire protection applications. Contact Wanlian Fluid for product details and quotation.'
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
    image: 'https://s.alicdn.com/@sc04/kf/Hb43a022225244971882361e97ac2efcdL/Wanlian-SS100-65-1-6-Overground-Fire.png?hasNWGrade=1',
    seoTitle: 'Smart IoT Fire Hydrant SS100ZN | Quanzhou Wanlian Fluid',
    seoDescription: 'IoT smart fire hydrant monitoring system. Real-time water pressure, tilt and water theft detection. Perfect for smart municipal fire system integration.'
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
    image: '/assets/05_sprinklers_alarms/sprinkler_p32_head_white.png',
    seoTitle: 'Automatic Fire Sprinkler Head ZST | Wanlian Fire Protection',
    seoDescription: 'Glass bulb automatic fire sprinklers ZST series. High sensitivity, corrosion resistant brass frame. Factory price from Wanlian China.'
  },
  {
    id: '12',
    slug: 'auto-tracking-jet-suppression-cannon-zdms',
    name: 'Auto-Tracking Jet Suppression Fire Cannon (ZDMS Series)',
    category: 'Extinguishing Water Cannons',
    description: 'A smart intelligent fire water cannon designed for large high-ceiling spaces like airports, malls, exhibition centers, and warehouses. It utilizes multi-band infrared and ultraviolet sensors to automatically detect, track, and extinguish fires within 30 seconds.',
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
    image: '/assets/06_extinguishing_cannons/cannon_p45.png?v=20260729',
    seoTitle: 'Automatic Tracking Fire Water Cannon ZDMS | Wanlian Fluid',
    seoDescription: 'Smart auto-tracking fire monitor ZDMS. Multi-band IR/UV flame detection, rapid autonomous suppression. Best choice for large spatial indoor protection.'
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
    image: 'https://s.alicdn.com/@sc04/kf/HTB1q4J9bEzrK1RjSspm763OdFXa1.png?v=20260729',
    seoTitle: 'Deluge Alarm Valve Group ZSFM | China Wanlian Fluid',
    seoDescription: 'Diaphragm-operated deluge alarm valve ZSFM. Highly reliable, fast response times. Ideal for deluge, water mist, and foam firefighting system setups.'
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
    image: 'https://s.alicdn.com/@sc04/kf/H2857379540b7417c83f169d67ff70ab3a.png_300x300.jpg?v=20260729',
    seoTitle: 'Pre-action Alarm Valve System ZSFY | Dual Protection | Wanlian',
    seoDescription: 'High safety Pre-action sprinkler valve group ZSFY. Dual-trigger failsafe design. Prevents water damage in museums, archives and data centers.'
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
    image: '/assets/02_valves_parts/valves_p21.png?v=20260729',
    seoTitle: 'Stainless Steel Vortex Preventer EN12845 | Wanlian Fluid',
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
    image: 'https://s.alicdn.com/@sc04/kf/Hf04635479fce444aa71ba23a2199f99cX.jpg_200x200.jpg?v=20260729',
    seoTitle: 'Backflow Preventer Valve HS41X | Drinking Water Protection | Wanlian',
    seoDescription: 'Durable Anti-pollution backflow preventer HS41X. Double check valves with intermediate automatic drainage cavity. Ensures potable water network safety.'
  },
  {
    id: '17',
    slug: 'foam-fire-hydrant-cabinet-psg30',
    name: 'Foam Fire Hydrant Cabinet (PSG30 Series)',
    category: 'Extinguishing Water Cannons',
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
    image: '/assets/06_extinguishing_cannons/cannon_p42.png?v=20260729',
    seoTitle: 'Foam Fire Hydrant Cabinet PSG30 | Wanlian Fire Protection',
    seoDescription: 'Consolidated Foam Fire Cabinet PSG30 with 3% AFFF foam tank. Highly effective against fuel and chemical class B fires. Buy directly from China manufacturer.'
  },
  {
    id: '18',
    slug: 'manual-fire-water-cannon-ps',
    name: 'Manual Fire Water Cannon (PS Series)',
    category: 'Extinguishing Water Cannons',
    description: 'Heavy duty manual fire water monitor designed to deliver massive volumes of water or foam over long ranges. Highly suitable for petrochemical yards, oil storage tank farms, warehouses, harbors, and fire trucks.',
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
    image: 'https://sc02.alicdn.com/kf/A192331c7a7d948a6927a9221489369dcz.png',
    seoTitle: 'Manual Fire Water Monitor PS Series | Long Range | Wanlian Fluid',
    seoDescription: 'High volume manual fire water cannon PS. Supports water and foam spray. Heavy-duty construction, suitable for industrial storage and petrochemical yards.'
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
    image: 'https://sc02.alicdn.com/kf/A463ac39a948d44a391017ca222837de2B.png?v=20260729',
    seoTitle: 'Vane Water Flow Indicator ZSJZ | Sprinkler Alarm | Wanlian Fluid',
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
    image: '/assets/02_valves_parts/valves_p4_telescopic_white.png',
    seoTitle: 'Telescopic Resilient Wedge Gate Valve | Quanzhou Wanlian Fluid',
    seoDescription: 'Integrated Telescopic Resilient Seated Gate Valve. Fully EPDM encapsulated wedge, ductile iron QT450. Ideal for pipelines requiring expansion compensation.'
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
    image: 'https://s.alicdn.com/@sc04/kf/H7cdb5264c72447e8b7c744342168553eJ/Wanlian-500X-DN20-ANSI-JIS-Hydraulic-Operated.jpg?hasNWGrade=1',
    seoTitle: 'Hydraulic Pressure Reducing Valve 500X | Wanlian Fluid',
    seoDescription: 'Industrial hydraulic self-operated pressure reducing valve 500X. High durability ductile iron construction. OEM and custom designs available.'
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
    image: 'https://s.alicdn.com/@sc04/kf/H80d61ef3659d492db259a9a170394377l/Wanlian-DN50-DN65-HS-Aluminum-Firefighting-Hydrant.jpg_480x480.jpg?hasNWGrade=1',
    seoTitle: 'Aluminum Fire Hose Coupling Adapter HS | Wanlian Fire Equipment',
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
    image: 'https://s.alicdn.com/@sc04/kf/H44ae8049dbff42aab010d30c9a73a78fA/Professional-Customization-Wanlian-D71X-Ductile-Iron-Cast.jpg?hasNWGrade=1',
    seoTitle: 'D71X Wafer Rubber Lined Butterfly Valve | Wanlian Fluid',
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
    image: 'https://s.alicdn.com/@sc04/kf/Hb43a022225244971882361e97ac2efcdL/Wanlian-SS100-65-1-6-Overground-Fire.png?hasNWGrade=1',
    seoTitle: 'Overground Antifreeze Outdoor Fire Hydrant SS100 | Wanlian',
    seoDescription: 'High-pressure overground fire hydrant SS100 with frost-drainage. Heavy duty ductile iron body. Approved for municipal water supply and forest safety.'
  },
  {
    id: '25',
    slug: 'fire-hose-reel-jpso8-19',
    name: 'Carbon Steel Fire Hose Reel Accessories Set (JPS0.8-19)',
    category: 'Extinguishing Water Cannons',
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
    image: 'https://s.alicdn.com/@sc04/kf/H7e8afe00dc9243bcae6dd3f7590f88422/Wanlian-JPSO-8-19-Carbon-Steel-Fire.png_480x480.jpg?hasNWGrade=1',
    seoTitle: 'Carbon Steel Fire Hose Reel JPS0.8-19 | Wanlian Fire Protection',
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
    image: 'https://s.alicdn.com/@sc04/kf/H2b9da3a8472e47d69ad52aeb5c436811g/Wanlian-HQ44X-16-Factory-Direct-Easy-Installation.jpg?hasNWGrade=1',
    seoTitle: 'Spherical Nodular Cast Iron Ball Check Valve HQ44X | Wanlian',
    seoDescription: 'Factory price Spherical Check Valve HQ44X-16. Non-clogging EPDM rubber rolling ball design. Low pressure loss, ideal for water sewage pump pipelines.'
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
    image: 'https://s.alicdn.com/@sc04/kf/Hedd5699c17ee45eca887ef5561523c41A/Flange-Manual-Bellows-Gate-Valve-Forged-Steel.jpg?hasNWGrade=1',
    seoTitle: 'Flanged Bellows Seal Gate Valve Manufacturer | Wanlian Fluid',
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
    image: 'https://s.alicdn.com/@sc04/kf/Hd4e3e3d2418845a7aafb239d26d3832eg/Groove-Control-Valve-Wanlian-GKZF-1-8.jpg_480x480.jpg?hasNWGrade=1',
    seoTitle: 'Solenoid Operated Groove Control Gate Valve GKZF-1 | Wanlian',
    seoDescription: 'Ductile iron 300PSI solenoid control valve GKZF-1. Grooved connection for easy installation. Highly responsive automated fire protection control.'
  }
];

// Industry glossary (EN + ES definitions in one source).
// Each entry carries an authoritative one-to-three sentence definition intended to be
// cited by AI assistants, plus a link to the most relevant Wanlian guide for depth.
// Definitions are technical/standards-accurate; nothing here asserts a Wanlian
// certification beyond ISO 9001.

export interface GlossaryTerm {
  id: string; // anchor
  term: string; // EN
  termEs: string; // ES
  category: 'Valves' | 'Fire Hydrants' | 'Sprinklers' | 'Fire Hose' | 'Certification & Standards' | 'Testing & Procurement';
  definition: string; // EN
  definitionEs: string; // ES
  href: string; // EN guide to link (root path, no locale prefix)
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'resilient-seated-gate-valve',
    term: 'Resilient Seated Gate Valve (RSGV)',
    termEs: 'Válvula de compuerta de asiento elástico (RSGV)',
    category: 'Valves',
    definition:
      'A full-bore gate valve whose wedge is encapsulated in a flexible elastomer (typically EPDM) that seats against a metal body, giving bubble-tight shut-off with low operating torque and no repacking. RSGVs are the dominant isolation valve in water, wastewater and fire mains and are specified under AWWA C515 (US), ISO 5208 and EN 1074.',
    definitionEs:
      'Válvula de compuerta de paso total cuyo cuña está encapsulada en un elastómero flexible (típicamente EPDM) que asienta contra un cuerpo metálico, logrando cierre hermético sin goteo con poco par de accionamiento y sin repaquetado. Las RSGV son la válvula de aislamiento predominante en redes de agua, alcantarillado e incendios y se especifican bajo AWWA C515 (EE. UU.), ISO 5208 y EN 1074.',
    href: '/guides/gate-valve-vs-butterfly-valve-fire-protection/'
  },
  {
    id: 'awwa-c515',
    term: 'AWWA C515',
    termEs: 'AWWA C515',
    category: 'Certification & Standards',
    definition:
      'The American Water Works Association standard for ductile iron resilient seated gate valves. It defines materials, dimensions, operating torque, pressure and flow requirements and the mandatory shell and seat testing for water and wastewater gate valves in North American specifications.',
    definitionEs:
      'La norma de la American Water Works Association para válvulas de compuerta de asiento elástico de hierro dúctil. Define materiales, dimensiones, par de accionamiento, requisitos de presión y caudal y las pruebas obligatorias de carcasa y asiento para válvulas de agua y alcantarillado en especificaciones de América del Norte.',
    href: '/guides/fire-hydrant-valve-standards-guide/'
  },
  {
    id: 'dry-barrel-fire-hydrant',
    term: 'Dry-Barrel Fire Hydrant',
    termEs: 'Hidrante de barril seco',
    category: 'Fire Hydrants',
    definition:
      'An underground fire hydrant that stays empty below ground level; the barrel fills with water only when a port is opened, which keeps water out of the barrel in cold climates so it does not freeze. Dry-barrel hydrants are the standard for frost-protected municipal networks and are specified under AWWA C502 (US) and EN 14384 (Europe).',
    definitionEs:
      'Hidrante subterráneo que permanece vacío por debajo del nivel del suelo; el barril se llena de agua solo cuando se abre una toma, lo que mantiene el agua fuera del barril en climas fríos para que no se congele. Los hidrantes de barril seco son el estándar para redes municipales protegidas del congelamiento y se especifican bajo AWWA C502 (EE. UU.) y EN 14384 (Europa).',
    href: '/guides/antifreeze-anti-collision-fire-hydrant-guide/'
  },
  {
    id: 'awwa-c502',
    term: 'AWWA C502',
    termEs: 'AWWA C502',
    category: 'Certification & Standards',
    definition:
      'The AWWA standard for dry-barrel fire hydrants. It specifies the design, materials, operating pressure (typically 125–250 psi), flow capacity and the required pressure and leakage testing for hydrants used in municipal fire and water supply networks across North America.',
    definitionEs:
      'La norma de AWWA para hidrantes de barril seco. Especifica el diseño, materiales, presión de operación (típicamente 125–250 psi), capacidad de caudal y las pruebas de presión y fuga requeridas para hidrantes usados en redes municipales de agua e incendio en América del Norte.',
    href: '/guides/fire-hydrant-valve-standards-guide/'
  },
  {
    id: 'ul-listing',
    term: 'UL Listing',
    termEs: 'Listado UL',
    category: 'Certification & Standards',
    definition:
      'A safety certification issued by Underwriters Laboratories after a product is tested against a named standard and the factory is assessed. A listed valve or sprinkler may be specified in buildings where the code or insurer requires it; listing applies to a specific product and model, not to a whole company.',
    definitionEs:
      'Una certificación de seguridad emitida por Underwriters Laboratories (UL) después de que un producto se prueba contra una norma nombrada y la fábrica se evalúa. Una válvula o rociador listado puede especificarse en edificios donde el reglamento o el asegurador lo exige; el listado aplica a un producto y modelo específicos, no a toda la empresa.',
    href: '/guides/how-to-choose-ul-listed-fire-valves/'
  },
  {
    id: 'fm-approval',
    term: 'FM Approval',
    termEs: 'Aprobación FM',
    category: 'Certification & Standards',
    definition:
      'An approval from FM Global (now FM Global / FM Approvals) based on performance and durability testing beyond minimum-code requirements. FM approval is frequently specified by large insurers and industrial projects; like UL, it is granted per product and per model.',
    definitionEs:
      'Una aprobación de FM Global basada en pruebas de rendimiento y durabilidad por encima de los requisitos mínimos de reglamento. La aprobación FM es frecuentemente especificada por grandes aseguradoras y proyectos industriales; al igual que UL, se otorga por producto y por modelo.',
    href: '/guides/how-to-choose-ul-listed-fire-valves/'
  },
  {
    id: 'k-factor',
    term: 'K-Factor (Sprinkler)',
    termEs: 'Factor K (rociador)',
    category: 'Sprinklers',
    definition:
      'A number describing a sprinkler’s flow rate at a given pressure, expressed as the discharge coefficient. Flow (gpm) equals K multiplied by the square root of pressure (psi); common ratings are K=5.6, K=80 and K=115. The K-factor, together with the hazard classification from NFPA 13, drives head spacing and layout.',
    definitionEs:
      'Un número que describe el caudal de un rociador a una presión dada, expresado como coeficiente de descarga. El caudal (gpm) es igual a K multiplicado por la raíz cuadrada de la presión (psi); los valores comunes son K=5.6, K=80 y K=115. El factor K, junto con la clasificación de riesgo según NFPA 13, determina el espaciamiento y la disposición de los cabezales.',
    href: '/guides/fire-sprinkler-head-selection-guide/'
  },
  {
    id: 'quick-response',
    term: 'Quick-Response vs Standard-Response',
    termEs: 'Respuesta rápida vs respuesta estándar',
    category: 'Sprinklers',
    definition:
      'A classification of sprinkler head by how quickly its thermal element activates. Quick-response heads (RTI < 51 °C·s^½) detect a developing fire earlier and are generally required in high-hazard and occupant-protected areas; standard-response heads suit most ordinary-hazard commercial systems.',
    definitionEs:
      'Una clasificación de cabezal de rociador según la velocidad con que activa su elemento térmico. Los cabezales de respuesta rápida (RTI < 51 °C·s^½) detectan un incendio en desarrollo antes y por lo general se exigen en áreas de alto riesgo o con personas; los de respuesta estándar convienen en la mayoría de sistemas comerciales de riesgo ordinario.',
    href: '/guides/fire-sprinkler-head-selection-guide/'
  },
  {
    id: 'preaction',
    term: 'Pre-action System',
    termEs: 'Sistema de preacción',
    category: 'Sprinklers',
    definition:
      'A dry sprinkler system in which the piping is kept dry and two independent signals are required before water enters the lines — typically a fire-alarm trigger plus a separate sprinkler-activation. It protects areas where water damage from an accidental leak is the main risk, such as data centers and archives.',
    definitionEs:
      'Sistema de rociadores seco en el que la tubería se mantiene seca y se requieren dos señales independientes antes de que el agua ingrese a las líneas — típicamente una activación de alarma contra incendios más una activación de rociador aparte. Protege áreas donde el daño por agua de una fuga accidental es el principal riesgo, como centros de datos y archivos.',
    href: '/guides/fire-sprinkler-system-wet-dry-preaction/'
  },
  {
    id: 'deluge',
    term: 'Deluge System',
    termEs: 'Sistema de diluvio',
    category: 'Sprinklers',
    definition:
      'A dry system with open (non-draining) nozzles, supplied through a deluge valve that opens on a detection signal so that all open heads discharge at once. Deluge systems address flash-fire and high-hazard industrial processes, paired with the deluge alarm valve group.',
    definitionEs:
      'Sistema seco con boquillas abiertas, alimentado por una válvula de diluvio que se abre ante una señal de detección, de modo que todas las boquillas abiertas descargan a la vez. Los sistemas de diluvio atienden procesos industriales de alto riesgo e incendio instantáneo, y se emparejan con el grupo de válvula de alarma de diluvio.',
    href: '/guides/fire-sprinkler-system-valves-guide/'
  },
  {
    id: 'backflow-prevention',
    term: 'Backflow Prevention (Double Check)',
    termEs: 'Prevención de reflujo (doble retención)',
    category: 'Valves',
    definition:
      'Devices installed where a potable supply could be contaminated by reverse flow from a cross connection. The most common type is a double check valve assembly of two independent check valves with a testable connection; it is mandatory at hose connections, irrigation and most industrial cross connections.',
    definitionEs:
      'Dispositivos instalados donde el suministro de agua potable podría contaminarse por flujo inverso desde una conexión cruzada. El tipo más común es un conjunto de doble retención con dos válvulas de retención independientes y una conexión a prueba; es obligatorio en tomas de manguera, riego y la mayoría de conexiones cruzadas industriales.',
    href: '/guides/backflow-prevention-guide/'
  },
  {
    id: 'pressure-reducing-valve',
    term: 'Pressure Reducing Valve (PRV)',
    termEs: 'Válvula reductora de presión (PRV)',
    category: 'Valves',
    definition:
      'A valve that automatically reduces a high supply pressure to a constant lower set pressure downstream. Hydraulic self-operated PRVs (such as the 500X) protect fire mains and building risers from overpressure and water-hammer while keeping the downstream set point stable.',
    definitionEs:
      'Válvula que reduce automáticamente una presión de suministro alta a una presión inferior constante aguas abajo. Las PRV hidráulicas auto-operadas (como la 500X) protegen las redes y montantes de incendio del sobrepresionamiento y del golpe de ariete manteniendo estable el punto de consigna aguas abajo.',
    href: '/guides/pressure-reducing-valve-guide/'
  },
  {
    id: 'osy',
    term: 'OS&Y (Outside Screw and Yoke)',
    termEs: 'OS&Y (vástago exterior y horquilla)',
    category: 'Valves',
    definition:
      'A valve bonnet arrangement with the operating stem outside the pipe and a yoke that raises the stem as the valve opens, so its position is visible. OS&Y gate valves are the classic heavy-duty fire and main isolation valve; the stem seal is outside the fluid path.',
    definitionEs:
      'Un arreglo de bonete con el vástago de operación fuera de la tubería y una horquilla que eleva el vástago al abrir, de modo que su posición es visible. Las válvulas de compuerta OS&Y son la clásica válvula de aislamiento pesada para incendio y redes; el sello del vástago está fuera de la vía del fluido.',
    href: '/guides/fire-sprinkler-control-valve-types/'
  },
  {
    id: 'pn-ansi-flange',
    term: 'PN and ANSI Flange Ratings',
    termEs: 'Clasificación de bridas PN y ANSI',
    category: 'Certification & Standards',
    definition:
      'Two flange-rating systems: PN (Pressure Nominal, metric, e.g. PN10/PN16) follows EN/DIN, while ANSI/ASME class ratings (Class 150/300) follow US and most of the Americas. A valve’s flange face must match the system standard and rating — mixing PN and ANSI faces on the same line is a common specification error.',
    definitionEs:
      'Dos sistemas de clasificación de bridas: PN (presion nominal, métrico, p. ej. PN10/PN16) sigue EN/DIN, mientras que las clases ANSI/ASME (Class 150/300) siguen a EE. UU. y a la mayor parte de América. La cara de la brida de una válvula debe coincidir con la norma y la clase del sistema — mezclar caras PN y ANSI en la misma línea es un error de especificación común.',
    href: '/guides/fire-hydrant-valve-standards-guide/'
  },
  {
    id: 'nps',
    term: 'Nominal Diameter (DN / NPS)',
    termEs: 'Diámetro nominal (DN / NPS)',
    category: 'Certification & Standards',
    definition:
      'A size designation that does not equal the pipe’s physical bore. DN (diamètre nominal) is the metric designation (DN80, DN100); NPS (nominal pipe size) is the US designation (3", 4"). DN and NPS sizes map to each other for selection but the flange dimensions differ by standard.',
    definitionEs:
      'Una designación de tamaño que no equivale al diámetro físico de la tubería. DN (diámetro nominal) es la designación métrica (DN80, DN100); NPS (tamaño nominal de tubería) es la designación de EE. UU. (3", 4"). Los tamaños DN y NPS se corresponden para la selección, pero las dimensiones de brida difieren según la norma.',
    href: '/guides/fire-hydrant-valve-standards-guide/'
  },
  {
    id: 'fire-department-connection',
    term: 'Fire Department Connection (FDC / Siamese)',
    termEs: 'Conexión para bomberos (FDC / siamesa)',
    category: 'Fire Hydrants',
    definition:
      'A connection on a building or system that lets the fire department pump water in through its hoses. A siamese FDC typically has two DN65 (2.5") inlets and a DN100 flanged outlet, and is the entry point for deluge and sprinkler systems.',
    definitionEs:
      'Conexión en un edificio o sistema que permite al cuerpo de bomberos inyectar agua por sus mangueras. Una FDC siamesa suele tener dos entradas DN65 (2.5") y una salida bridada DN100, y es el punto de entrada para sistemas de diluvio y rociadores.',
    href: '/guides/fire-department-connection-siamese-guide/'
  },
  {
    id: 'storz-coupling',
    term: 'Storz Coupling',
    termEs: 'Acople Storz',
    category: 'Fire Hose',
    definition:
      'A bayonet-style universal fire coupling sized to the hose diameter (Storz 2, 3, 4, 5) that can be connected without tools and seals automatically when turned. It is the dominant international hose coupling standard, alongside US NIST and British BS336.',
    definitionEs:
      'Un acople universal tipo bayoneta para mangueras, dimensionado por el diámetro de la manguera (Storz 2, 3, 4, 5), que se conecta sin herramientas y sella automáticamente al girarlo. Es la norma de acoples internacional predominante, junto con NIST (EE. UU.) y BS336 (Reino Unido).',
    href: '/guides/fire-hose-buying-guide/'
  },
  {
    id: 'nfpa-1961',
    term: 'NFPA 1961 (Fire Hose)',
    termEs: 'NFPA 1961 (manguera contra incendios)',
    category: 'Fire Hose',
    definition:
      'The NFPA standard for fire hose. It defines construction (jacket, liner, coupling), the rated working pressure (commonly 150 or 250 psi), and the required factory and periodic testing. A compliant attack hose pairs a high-strength fabric jacket with a vulcanized rubber lining.',
    definitionEs:
      'La norma NFPA para mangueras contra incendios. Define la construcción (funda, revestimiento, acople), la presión de trabajo calibrada (comúnmente 150 o 250 psi) y las pruebas de fábrica y periódicas requeridas. Una manguera de ataque conforme combina una funda de tejido de alta resistencia con un revestimiento de caucho vulcanizado.',
    href: '/guides/fire-hose-buying-guide/'
  },
  {
    id: 'nfpa-13',
    term: 'NFPA 13 (Sprinkler Systems)',
    termEs: 'NFPA 13 (sistemas de rociadores)',
    category: 'Sprinklers',
    definition:
      'The NFPA standard for the installation of automatic sprinkler systems. It sets hazard classifications, head spacing and K-factor rules, required piping and valves, and the system types (wet, dry, deluge, preaction) for commercial and industrial buildings.',
    definitionEs:
      'La norma NFPA para la instalación de sistemas de rociadores automáticos. Establece las clasificaciones de riesgo, el espaciamiento de cabezales y las reglas de factor K, la tubería y las válvulas requeridas, y los tipos de sistema (húmedo, seco, diluvio, preacción) para edificios comerciales e industriales.',
    href: '/guides/fire-sprinkler-system-wet-dry-preaction/'
  },
  {
    id: 'nom-mexico',
    term: 'NOM / NR (Mexico)',
    termEs: 'NOM / NR (México)',
    category: 'Certification & Standards',
    definition:
      'Mexico’s Official Mexican Standards (NOM) and the NR (Norma de Riesgo / fire) regime govern fire-protection products in the Mexican market, with certification through designated authorities. A LatAm tender in Mexico may require NOM conformity for hydrants and fire equipment; compliance is confirmed per model.',
    definitionEs:
      'Las Normas Oficiales Mexicanas (NOM) y el régimen NR (de riesgo/incendio) regulan los productos de protección contra incendios en el mercado mexicano, con certificación a través de autoridades designadas. Una licitación en México puede exigir conformidad NOM para hidrantes y equipos contra incendios; el cumplimiento se confirma por modelo.',
    href: '/guides/latinamerica-certification-requirements-fire-valves/'
  },
  {
    id: 'shell-pressure-test',
    term: 'Shell Pressure & Air-Leakage Test',
    termEs: 'Prueba de presión de carcasa y de fuga de aire',
    category: 'Testing & Procurement',
    definition:
      'Two per-unit tests that verify a valve or hydrant before shipment: a hydrostatic shell test that checks the body against leakage or deformation at an over-pressure, and an air-leakage test that confirms the valve seals bubble-tight in service position. Records per serial number are the primary evidence of a genuine manufacturer.',
    definitionEs:
      'Dos pruebas por unidad que verifican una válvula o hidrante antes del envío: una prueba hidrostática de carcasa que comprueba el cuerpo contra fugas o deformación a sobre-presión, y una prueba de fuga de aire que confirma que la válvula sella herméticamente en posición de servicio. Los registros por número de serie son la evidencia principal de un fabricante genuino.',
    href: '/guides/how-to-verify-chinese-valve-supplier/'
  }
];

export const GLOSSARY_CATEGORIES: GlossaryTerm['category'][] = [
  'Valves',
  'Fire Hydrants',
  'Sprinklers',
  'Fire Hose',
  'Certification & Standards',
  'Testing & Procurement'
];

// products.es.ts part 1 - slugs 1-15
import type { Product } from '../products';

export const productsEsPart1: Record<string, Product> = {
  'resilient-seat-flanged-gate-valve-z41x': {
    id: '1',
    slug: 'resilient-seat-flanged-gate-valve-z41x',
    name: 'Válvula de Compuerta con Brida, Asiento Elástico, Hierro Dúctil (Z41X)',
    category: 'Válvulas y Piezas',
    description: 'La válvula de compuerta con asiento elástico Wanlian Z41X incorpora una cuña totalmente encapsulada en caucho para garantizar un sellado hermético fiable. Ideal para suministro de agua, aguas residuales, tuberías industriales y sistemas HVAC.',
    features: [
      'Cuña elástica totalmente encapsulada en caucho EPDM de alta calidad',
      'Diseño de fondo plano que evita la acumulación de suciedad y sedimentos',
      'Recubrimiento de resina epoxi no tóxico interior y exterior para resistencia a la corrosión y oxidación',
      'Fácil mantenimiento: el reemplazo del sellado puede realizarse en línea bajo presión'
    ],
    specs: {
      'Diámetro Nominal': 'DN50 - DN700 (2" a 28")',
      'Presión Nominal': '1.0 MPa / 1.6 MPa (PN10 / PN16)',
      'Temperatura de Trabajo': '0°C a 80°C',
      'Medio Aplicable': 'Agua, líquidos no corrosivos, aire',
      'Material del Cuerpo': 'Hierro dúctil (QT450-10)'
    },
    materials: {
      'Cuerpo y Tapa': 'Hierro dúctil (QT450)',
      'Cuña/Disco': 'Hierro dúctil + EPDM totalmente encapsulado',
      'Vástago': 'Acero inoxidable (2Cr13 / 304)',
      'Tuerca del Vástago': 'Aleación de bronce',
      'Anillos O (O-Rings)': 'NBR / EPDM autoajustables'
    },
    dimensions: {
      headers: ['DN (mm)', 'L (mm)', 'D (mm)', 'D1 (mm)', 'D2 (mm)', 'z-Φd (Agujeros)'],
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
    seoTitle: 'Válvula de Compuerta Z41X de Asiento Elástico | Hierro Dúctil',
    seoDescription: 'Válvula de compuerta Z41X de hierro dúctil con asiento elástico: sellado hermético para sistemas industriales. Precio de fábrica de Quanzhou Wanlian Fluid.'
  },
  'indoor-fire-hydrant-head-sn65': {
    id: '2',
    slug: 'indoor-fire-hydrant-head-sn65',
    name: 'Hidrante Interior Contra Incendios SN65',
    category: 'Hidrantes y Conexiones de Bomba',
    description: 'Válvula de hidrante interior de alta presión SN65 en hierro dúctil de primera calidad. Mecanizado de precisión, conexión flexible ranurada o con brida y sellado fiable para tuberías contra incendios comerciales e industriales.',
    features: [
      'Cuerpo de hierro dúctil de alta calidad para máxima resistencia a la presión',
      'Conexión ranurada flexible para instalación rápida y fiable',
      'Pruebas estrictas de presión y estanqueidad hasta 2.4 MPa',
      'Recubrimiento en polvo anticorrosivo de color rojo'
    ],
    specs: {
      'Conexión': 'Ranurada / Con brida',
      'Tamaño': 'DN65 (2.5")',
      'Presión de Trabajo': '1.6 MPa (232 PSI)',
      'Material del Cuerpo': 'Hierro dúctil',
      'Aplicación': 'Gabinetes contra incendios interiores montados en pared'
    },
    materials: {
      'Cuerpo': 'Hierro dúctil (QT400)',
      'Vástago de la Válvula': 'Latón / Acero inoxidable',
      'Sello del Disco': 'Caucho EPDM',
      'Volante': 'Hierro dúctil / Hierro fundido',
      'Interfaz de Acople': 'Aluminio anodizado / Latón'
    },
    image: '/assets/products/indoor-fire-hydrant-head-sn65.jpg',
    seoTitle: 'Hidrante Interior SN65 para Incendios | Precio de Fábrica',
    seoDescription: 'Hidrante interior SN65 de hierro dúctil para tuberías contra incendios: 1.6 MPa, conexión ranurada o con brida. Venta directa de fábrica desde Wanlian Fluid.'
  },
  'wet-alarm-check-valve-zsfz-150': {
    id: '3',
    slug: 'wet-alarm-check-valve-zsfz-150',
    name: 'Válvula de Alarma Tipo Húmedo ZSFZ 150',
    category: 'Rociadores y Válvulas de Alarma',
    description: 'La válvula de alarma tipo húmedo ZSFZ es un componente clave de los sistemas automáticos de rociadores. Activa automáticamente el gong de alarma hidráulica y dispara el presostato cuando el agua fluye hacia los rociadores.',
    features: [
      'Estructura de alta resistencia en hierro fundido para protección contra incendios de alto rendimiento',
      'Clapeta de alta sensibilidad que garantiza una respuesta inmediata de alarma',
      'Equipada con gong de alarma hidráulica y cámara de retardo para evitar falsas alarmas',
      'Mantenimiento y pruebas fáciles en línea'
    ],
    specs: {
      'Diámetro Nominal': 'DN100 / DN150 / DN200',
      'Presión Nominal': '1.6 MPa',
      'Norma': 'GB5135.2 / Norma de fábrica',
      'Material del Cuerpo': 'Hierro fundido / Hierro dúctil',
      'Accesorios': 'Presostato, cámara de retardo, gong'
    },
    materials: {
      'Cuerpo de la Válvula': 'Hierro fundido / Fundición esferoidal de grafito',
      'Sello de Clapeta/Asiento': 'Caucho EPDM / NBR de alta durabilidad',
      'Cámara de Retardo': 'Hierro fundido / Latón',
      'Gong de Alarma': 'Aleación de aluminio / Cobre',
      'Accesorios y Tuberías': 'Acero galvanizado / Latón'
    },
    image: '/assets/products/wet-alarm-check-valve-zsfz-150.webp',
    seoTitle: 'Válvula de Alarma Tipo Húmedo ZSFZ-150 | Rociadores',
    seoDescription: 'Válvula de alarma tipo húmedo ZSFZ-150 para sistemas de rociadores: hierro dúctil y respuesta rápida de alarma. Venta directa de fábrica desde China.'
  },
  'signal-grooved-wafer-butterfly-valve-dn80': {
    id: '4',
    slug: 'signal-grooved-wafer-butterfly-valve-dn80',
    name: 'Válvula de Mariposa Tipo Wafer Ranurada con Señal (DN80-PN16)',
    category: 'Válvulas y Piezas',
    description: 'Válvula de mariposa tipo wafer ranurada con señal DN80 PN16, cuerpo QT450 y operador de tornillo sinfín manual. Ideal para tuberías contra incendios y sistemas de agua industriales donde se requiere monitoreo del estado abierto/cerrado de la válvula.',
    features: [
      'Interruptor de señal eléctrico integrado para monitoreo remoto del estado',
      'Cuerpo tipo wafer compacto para instalación que ahorra espacio',
      'Operador de tornillo sinfín que ofrece operación suave y de bajo torque',
      'Disco de sellado elástico duradero para sellado bidireccional'
    ],
    specs: {
      'Rango de Tamaños': 'DN50 - DN300 (2" a 12")',
      'Presión de Trabajo': '1.6 MPa (PN16)',
      'Material del Cuerpo': 'Hierro dúctil (QT450)',
      'Sello del Disco': 'EPDM / NBR',
      'Conexión de Extremos': 'Wafer / Ranurada'
    },
    materials: {
      'Cuerpo': 'Hierro dúctil (QT450)',
      'Disco': 'Hierro dúctil con recubrimiento epoxi/EPDM',
      'Eje/Vástago': 'Acero inoxidable (2Cr13 / 416)',
      'Operador de Engranaje': 'Hierro fundido / Fundición esferoidal',
      'Microinterruptor': 'Microinterruptor hermético de alta conductividad'
    },
    image: '/assets/products/signal-grooved-wafer-butterfly-valve-dn80.webp',
    seoTitle: 'Válvula de Mariposa Wafer con Señal DN80 | PN16',
    seoDescription: 'Válvula de mariposa tipo wafer con señal en hierro dúctil QT450 para sistemas de agua contra incendios: monitoreo integrado y operación suave.'
  },
  'sliding-ball-check-valve-hq41x': {
    id: '5',
    slug: 'sliding-ball-check-valve-hq41x',
    name: 'Válvula de Retención de Bola Deslizante (HQ41X-16)',
    category: 'Válvulas y Piezas',
    description: 'La válvula de retención de bola deslizante HQ41X utiliza una esfera recubierta de caucho como obturador. La bola rueda sobre guías internas siguiendo el flujo del fluido, garantizando baja pérdida de presión, cierre silencioso y ausencia de golpe de ariete.',
    features: [
      'Diseño de paso total: 50% menos pérdida de carga que las válvulas de retención de clapeta',
      'Bola de acero recubierta de caucho que evita obstrucciones y asegura un sellado hermético',
      'Puede instalarse tanto en posición horizontal como vertical',
      'Excelente para aguas residuales, drenaje municipal y redes de bombas sumergibles'
    ],
    specs: {
      'Diámetro Nominal': 'DN50 - DN350',
      'Presión Nominal': '1.0 MPa / 1.6 MPa',
      'Material del Cuerpo': 'Hierro fundido / Hierro dúctil / Acero fundido',
      'Material de la Bola': 'Núcleo de acero con recubrimiento NBR',
      'Temperatura de Trabajo': '0°C a 80°C'
    },
    materials: {
      'Cuerpo y Tapa': 'Hierro fundido (HT200) / Fundición esferoidal (QT450)',
      'Bola Rodante': 'Núcleo de acero al carbono + recubrimiento total NBR',
      'Guías/Deslizadores': 'Segmentos esferoidales integrados',
      'Junta de la Tapa': 'EPDM / Asbesto de alta temperatura'
    },
    image: '/assets/products/spherical-ball-check-valve-hq44x.webp',
    seoTitle: 'Válvula de Retención de Bola HQ41X | Baja Pérdida de Carga',
    seoDescription: 'Válvula de retención de bola deslizante HQ41X para aguas residuales y agua: baja pérdida de carga, anti-obstrucción y cierre sin golpe de ariete.'
  },
  'hydraulic-water-level-control-valve-f745x': {
    id: '6',
    slug: 'hydraulic-water-level-control-valve-f745x',
    name: 'Válvula de Control Hidráulico de Nivel de Agua (F745X)',
    category: 'Seguridad Hidráulica',
    description: 'La válvula de control de nivel de agua F745X mantiene automáticamente el nivel predefinido en reservorios, tanques y torres de agua. Evita desbordes o niveles extremadamente bajos mediante control piloto hidráulico avanzado.',
    features: [
      'Accionada íntegramente por la presión de la tubería: no requiere energía eléctrica externa',
      'Mecanismo de cierre lento y suave que evita el golpe de ariete destructivo',
      'Control de nivel preciso con sistema piloto de flotador de alta fiabilidad',
      'Tubería piloto de cobre/acero inoxidable resistente a la corrosión'
    ],
    specs: {
      'Diámetro Nominal': 'DN50 - DN400',
      'Presión de Trabajo': '1.0 MPa / 1.6 MPa',
      'Material del Cuerpo': 'Hierro dúctil / Acero fundido',
      'Tubería Piloto': 'Acero inoxidable / Cobre',
      'Válvula Piloto': 'Piloto de flotador de latón'
    },
    materials: {
      'Cuerpo Principal de la Válvula': 'Hierro dúctil (QT450-10)',
      'Conjunto de Diafragma': 'Caucho EPDM reforzado con nailon',
      'Vástago y Resorte': 'Acero inoxidable 304',
      'Válvula Piloto de Flotador': 'Aleación maciza de latón',
      'Válvulas de Aguja y de Bola': 'Acero inoxidable / Latón'
    },
    image: '/assets/products/adjustable-pressure-reducing-valve-500x.webp',
    seoTitle: 'Válvula de Control de Nivel F745X | Piloto de Flotador',
    seoDescription: 'Válvula automática de control de nivel F745X con piloto de flotador para reservorios y tanques de agua: cierre suave sin golpe de ariete, alta durabilidad.'
  },
  'smart-electromagnetic-flow-meter': {
    id: '7',
    slug: 'smart-electromagnetic-flow-meter',
    name: 'Medidor de Caudal Electromagnético Inteligente (DN100)',
    category: 'Seguridad Hidráulica',
    description: 'Medidor de caudal electromagnético inteligente de alta precisión diseñado para la medición de líquidos conductivos. Alta fiabilidad, bajo consumo de energía y totalmente inmune a la densidad, viscosidad o temperatura del fluido.',
    features: [
      'Sin partes obstructivas en el tubo de medición: cero pérdida de presión',
      'Pantalla LCD retroiluminada de alto contraste con menú bilingüe claro (chino/inglés)',
      'Equipado con interfaz de comunicación digital RS485 / Modbus',
      'Microprocesador integrado de 16 bits para cómputo más rápido y fuerte anti-interferencia'
    ],
    specs: {
      'Rango de Tamaños': 'DN10 - DN2000',
      'Clase de Precisión': '0.5% o 1.0%',
      'Presión Nominal': '0.6 - 4.0 MPa (Personalizable hasta 70 MPa)',
      'Salida de Señal': 'Pulso / 4-20mA',
      'Estructura': 'Compacta (integral) / Remota dividida / Sumergible'
    },
    materials: {
      'Cuerpo del Tubo': 'Acero al carbono (WCB) / Acero inoxidable 304',
      'Revestimiento Interno': 'PTFE / Caucho de policloropreno',
      'Electrodos': 'Acero inoxidable 316L / Hastelloy C',
      'Convertidor/Carcasa': 'Aleación de aluminio fundido a presión IP65/IP67'
    },
    image: '/assets/products/smart-electromagnetic-flow-meter.webp',
    seoTitle: 'Medidor de Caudal Electromagnético Inteligente | MODBUS',
    seoDescription: 'Medidor de caudal electromagnético digital de alta precisión para fluidos industriales conductivos, con comunicación MODBUS. Venta de fábrica desde China.'
  },
  'telescopic-y-strainer-sgl41h': {
    id: '8',
    slug: 'telescopic-y-strainer-sgl41h',
    name: 'Colador en Y Telescópico (SGL41H)',
    category: 'Válvulas y Piezas',
    description: 'El colador en Y telescópico SGL41H es esencial para proteger las válvulas de control hidráulico y la maquinaria de precisión contra obstrucciones. Se instala en el extremo de entrada para filtrar impurezas particuladas e integra una junta de expansión que facilita la instalación y extracción.',
    features: [
      'Combina el colador en Y y la junta de expansión telescópica en una sola pieza',
      'Simplifica enormemente el mantenimiento de válvulas y la instalación de tuberías',
      'Filtro de acero inoxidable de alta calidad con tamaño de malla personalizable',
      'Cuerpo de hierro dúctil duradero con pintura epoxi'
    ],
    specs: {
      'Rango de Tamaños': 'DN50 - DN600',
      'Presión de Trabajo': '1.0 MPa / 1.6 MPa',
      'Material de la Malla': 'SS304 / SS316',
      'Malla del Filtro': '18-30 mesh (Agua), 40-100 mesh (Vapor)',
      'Material del Cuerpo': 'Hierro dúctil (QT450)'
    },
    materials: {
      'Cuerpo del Filtro': 'Hierro dúctil (QT450-10)',
      'Manguito de Expansión': 'Acero al carbono / Hierro dúctil',
      'Malla Filtrante': 'Acero inoxidable 304 / 316',
      'Sellos del Vástago': 'NBR / Grafito',
      'Pernos Telescópicos': 'Acero al carbono medio con zincado'
    },
    image: '/assets/products/telescopic-y-strainer-sgl41h.webp',
    seoTitle: 'Colador en Y Telescópico SGL41H | Malla SS304',
    seoDescription: 'Colador en Y telescópico integrado SGL41H para tuberías industriales de agua y HVAC: fácil mantenimiento y malla SS304. Precio de fábrica desde China.'
  },
  'anti-collision-pressure-regulating-outdoor-hydrant-ssft100': {
    id: '9',
    slug: 'anti-collision-pressure-regulating-outdoor-hydrant-ssft100',
    name: 'Hidrante Exterior Anticolisión con Regulador de Presión (SSFT100/65)',
    category: 'Hidrantes y Conexiones de Bomba',
    description: 'Diseñado para eliminar el riesgo de grandes fugas de agua tras accidentes. En caso de colisión vehicular, los pernos de seguridad especializados se cortan limpiamente y la válvula interna corta el agua automáticamente de inmediato, permitiendo reparaciones bajo presión.',
    features: [
      'Sellado automático ante colisiones que evita pérdidas severas de agua e inundaciones',
      'Dispositivo regulador de presión integrado que permite una descarga de agua progresiva y suave',
      'Sistema de autodrenaje automático para evitar el congelamiento en invierno',
      'Costo de mantenimiento muy bajo: basta reemplazar los pernos de seguridad y reiniciar'
    ],
    specs: {
      'Diámetro Nominal': 'DN100 / DN150',
      'Presión Nominal': '1.6 MPa',
      'Conexión de Entrada': 'Con brida',
      'Salidas': '2x 65mm (KWS65) + 1x 100mm (DN100)',
      'Material del Cuerpo': 'Hierro dúctil QT450'
    },
    materials: {
      'Cuerpo del Hidrante': 'Hierro dúctil QT450',
      'Asiento Inferior de la Válvula': 'Aleación maciza de latón / recubierto de EPDM',
      'Pernos de Corte': 'Acero al carbono medio zincado (calibración especializada)',
      'Resortes': 'Acero inoxidable 304',
      'Tapas e Interfaces': 'Aleación de aluminio anodizado / Latón'
    },
    image: '/assets/products/anti-collision-pressure-regulating-outdoor-hydrant-ssft100.webp',
    seoTitle: 'Hidrante Exterior Anticolisión SSFT100 | Regulador de Presión',
    seoDescription: 'Hidrante anticolisión con regulador de presión SSFT100, doble cierre de seguridad para protección municipal e industrial. Precio de fábrica de Wanlian.'
  },
  'iot-smart-ground-fire-hydrant-ss100zn': {
    id: '10',
    slug: 'iot-smart-ground-fire-hydrant-ss100zn',
    name: 'Hidrante Exterior Inteligente IoT (SS100/65-1.6ZN)',
    category: 'Hidrantes y Conexiones de Bomba',
    description: 'Equipo contra incendios de siguiente generación para ciudades inteligentes. Integra microsensores IoT que brindan datos de estado en tiempo real, seguimiento antirrobo, monitoreo de inclinación, detección de presión de agua en la tubería y alarmas contra el robo ilegal de agua.',
    features: [
      'Transmisión inalámbrica IoT en tiempo real vía redes celulares (NB-IoT/4G)',
      'Alerta inmediata ante uso ilegal de agua, apertura de válvula o colisiones vehiculares',
      'Monitoreo continuo de presión y caudal para prevenir fallas en la tubería',
      'Diseño de ultra bajo consumo con opciones de asistencia de energía solar'
    ],
    specs: {
      'Comunicación': 'NB-IoT / LTE-M / GPRS',
      'Sensores Incluidos': 'Inclinación/Vibración, sensor de presión, estado de la válvula',
      'Fuente de Alimentación': 'Batería de litio (5 años de vida útil) + asistencia solar',
      'Norma del Cuerpo': 'GB4452-2011'
    },
    materials: {
      'Cuerpo del Hidrante': 'Hierro dúctil QT450',
      'Cápsula del Módulo IoT': 'ABS IP68 reforzado resistente a impactos',
      'Sonda/Sensor de Agua': 'Acero inoxidable 316',
      'Vástago Inferior/Asiento de Válvula': 'Acero inoxidable / Latón'
    },
    image: '/assets/products/overground-fire-hydrant-ss100.webp',
    seoTitle: 'Hidrante IoT SS100ZN | Monitoreo en Tiempo Real',
    seoDescription: 'Hidrante inteligente IoT con monitoreo en tiempo real de presión, inclinación y detección de robo de agua para redes municipales inteligentes.'
  },
  'glass-bulb-fire-sprinkler-zst': {
    id: '11',
    slug: 'glass-bulb-fire-sprinkler-zst',
    name: 'Rociador de Bulbo de Vidrio Contra Incendios (Serie ZST)',
    category: 'Rociadores y Válvulas de Alarma',
    description: 'Rociadores automáticos contra incendios de ingeniería de precisión con bulbo de vidrio de alta sensibilidad. Ideales para hoteles, centros comerciales, conjuntos residenciales y almacenes industriales para detectar y suprimir incendios al instante.',
    features: [
      'Estructura de aleación de cobre de alta resistencia, forjada con precisión para máxima durabilidad',
      'Bulbo de vidrio de líquido orgánico de alta sensibilidad que asegura una respuesta rápida',
      'Sellos O-ring premium resistentes al envejecimiento que evitan fugas durante décadas',
      'Superficie pulida y cromada para una apariencia decorativa elegante'
    ],
    specs: {
      'Diámetro Nominal': 'DN15 (R1/2") / DN20 (R3/4")',
      'Coeficiente de Caudal': 'K=80 ±4 / K=115 ±9',
      'Tipos de Respuesta': 'Respuesta estándar (bulbo de 5mm) / Respuesta rápida (bulbo de 3mm)',
      'Temperaturas Nominales': '57°C / 68°C / 79°C / 93°C / 141°C',
      'Tipos Disponibles': 'Colgante, Vertical, De pared'
    },
    materials: {
      'Marco del Cuerpo': 'Latón forjado de precisión (H59-1)',
      'Bulbo de Vidrio': 'Bulbo de vidrio importado alemán Job / Day-Impex',
      'Elemento de Sellado': 'Anillo O de acero inoxidable con capa de teflón',
      'Deflector': 'Aleación de cobre / Acero inoxidable'
    },
    image: '/assets/products/glass-bulb-fire-sprinkler-zst.webp',
    seoTitle: 'Rociador de Bulbo de Vidrio ZST | Automático',
    seoDescription: 'Rociadores automáticos de bulbo de vidrio serie ZST: alta sensibilidad y marco de latón resistente a la corrosión. Precio de fábrica desde Wanlian (China).'
  },
  'auto-tracking-jet-suppression-cannon-zdms': {
    id: '12',
    slug: 'auto-tracking-jet-suppression-cannon-zdms',
    name: 'Cañón de Agua Extintor de Supresión por Chorro con Seguimiento Automático (Serie ZDMS)',
    category: 'Cañones de Agua Extintores',
    description: 'Cañón de agua contra incendios inteligente diseñado para grandes espacios de techo alto como aeropuertos, centros comerciales, centros de exposiciones y almacenes. Utiliza sensores infrarrojos y ultravioleta multibanda para detectar, rastrear y extinguir incendios automáticamente en menos de 30 segundos.',
    features: [
      'Totalmente autónomo: detección, posicionamiento y descarga automática del foco de incendio',
      'Combina sensores infrarrojos y ultravioleta para máxima precisión contra llamas',
      'Chorro concentrado de largo alcance que suprime incendios en segundos',
      'Admite control remoto manual vía PC/App móvil o gabinete central'
    ],
    specs: {
      'Caudal Nominal': '5L/s, 10L/s, 20L/s, 30L/s (Personalizable hasta 150L/s)',
      'Presión de Trabajo': '0.6 - 0.8 MPa',
      'Rango de Giro': 'Horizontal 360°, vertical -90° a +30°',
      'Radio de Monitoreo': '40m - 65m',
      'A Prueba de Explosión': 'Exde II BT4 Gb (Opcional)'
    },
    materials: {
      'Ensamblaje del Cuerpo': 'Aleación de aluminio de alta resistencia fundida a presión',
      'Tubo de la Vía de Agua': 'Acero inoxidable 304',
      'Carcasa del Sensor': 'ABS técnico de alta resistencia anti-UV IP66',
      'Boquilla': 'Acero inoxidable 316'
    },
    image: '/assets/products/auto-tracking-jet-suppression-cannon-zdms.webp',
    seoTitle: 'Cañón de Agua ZDMS de Seguimiento Automático | IR/UV',
    seoDescription: 'Cañón monitor ZDMS con seguimiento automático: detección IR/UV multibanda y supresión autónoma en segundos para grandes espacios interiores.'
  },
  'deluge-alarm-valve-zsfm': {
    id: '13',
    slug: 'deluge-alarm-valve-zsfm',
    name: 'Grupo de Válvula de Diluvio con Alarma (Serie ZSFM)',
    category: 'Rociadores y Válvulas de Alarma',
    description: 'La válvula de diluvio con alarma ZSFM es una válvula de retención tipo diafragma. Controla la apertura mediante el balance de presión del diafragma y puede integrarse con diversas redes de detección de incendios para formar sistemas completos de diluvio o rociado de agua.',
    features: [
      'Diseño de balance de presión de cámara de alta precisión para apertura instantánea',
      'Construcción robusta de hierro dúctil que garantiza retención prolongada de presión',
      'Incluye gong de alarma hidráulica y presostato de retroalimentación',
      'Admite disparo remoto mecánico, neumático o eléctrico'
    ],
    specs: {
      'Rango de Tamaños': 'DN50 - DN300',
      'Presión de Trabajo': '1.6 MPa',
      'Presión de Prueba': '3.2 MPa (Carcasa 6.4 MPa)',
      'Válvula de Solenoide': 'DC24V / 0.5A',
      'Tipo de Conexión': 'Con brida / Ranurada'
    },
    materials: {
      'Cuerpo Principal de la Válvula': 'Hierro dúctil (QT450-10)',
      'Diafragma/Sello': 'Caucho NBR reforzado con hilo de nailon',
      'Piloto de Solenoide': 'Latón macizo / Acero inoxidable 304',
      'Tuberías y Accesorios': 'Acero inoxidable / Latón'
    },
    image: '/assets/products/deluge-alarm-valve-zsfm.webp',
    seoTitle: 'Válvula de Diluvio con Alarma ZSFM | DN50-DN300 PN16',
    seoDescription: 'Válvula de diluvio con alarma tipo diafragma ZSFM, DN50-DN300 PN16 y solenoide DC24V. Cuerpo de hierro dúctil con gong y presostato. Cotización de fábrica.',
    faqs: [
      {
        question: '¿Cómo mantiene cerrado el sistema la válvula de diluvio ZSFM hasta que se detecta un incendio?',
        answer: 'La ZSFM es una válvula tipo diafragma que permanece cerrada bajo la presión del sistema mediante el balance de presión del diafragma. Cuando la red de detección de incendios envía una señal, la presión de la cámara del diafragma se libera y la válvula se abre al instante, inundando todas las boquillas abiertas de la zona de diluvio.'
      },
      {
        question: '¿Qué rango de tamaños y clases de presión cubre la ZSFM?',
        answer: 'El grupo de válvula de diluvio ZSFM cubre de DN50 a DN300, con presión de trabajo de 1.6 MPa y presión de prueba de 3.2 MPa (prueba de carcasa 6.4 MPa). Están disponibles conexiones con brida y ranuradas.'
      },
      {
        question: '¿Qué disparos remotos pueden abrir la válvula de diluvio ZSFM?',
        answer: 'La válvula admite disparos remotos mecánicos, neumáticos y eléctricos. La opción eléctrica utiliza un piloto de solenoide DC24V / 0.5A, por lo que el grupo de válvulas puede integrarse con la mayoría de los paneles de control de alarma contra incendios.'
      },
      {
        question: '¿Qué incluye el grupo completo de válvula de diluvio con alarma ZSFM?',
        answer: 'El grupo incluye la válvula principal de hierro dúctil (QT450-10) con diafragma NBR reforzado con nailon, un gong de alarma hidráulica, un presostato de retroalimentación y accesorios de acero inoxidable o latón para las conexiones de alarma y descarga.'
      }
    ]
  },
  'pre-action-alarm-system-zsfy': {
    id: '14',
    slug: 'pre-action-alarm-system-zsfy',
    name: 'Sistema de Alarma de Preacción (Serie ZSFY)',
    category: 'Rociadores y Válvulas de Alarma',
    description: 'La válvula de preacción ZSFY combina las ventajas de los sistemas de rociadores húmedos y secos. La tubería permanece llena de aire en estado normal para evitar fugas de agua accidentales y se inunda rápidamente con agua al detectarse un incendio.',
    features: [
      'Disparo de doble señal: requiere señales de alarma de incendio y del presostato para evitar descargas accidentales',
      'Perfecta para salas críticas: bibliotecas, archivos, salas de cómputo y museos',
      'Dispositivos integrados de mantenimiento de presión y alimentación de aire',
      'Accesorios de latón y acero inoxidable resistentes a la corrosión'
    ],
    specs: {
      'Rango de Tamaños': 'DN80 - DN250',
      'Presión Nominal': '1.6 MPa',
      'Presión de Aire del Lado del Sistema': '0.03 - 0.05 MPa',
      'Modo de Disparo': 'Neumático / Eléctrico / Manual',
      'Material del Cuerpo': 'Hierro dúctil QT450'
    },
    materials: {
      'Cuerpo y Tapa': 'Hierro dúctil (QT450-10)',
      'Clapeta Interna': 'Bronce / Hierro esferoidal recubierto de EPDM',
      'Cámara de Diafragma': 'NBR reforzado',
      'Kit de Accesorios': 'Tubería galvanizada / Aleaciones de cobre'
    },
    image: '/assets/products/pre-action-alarm-system-zsfy.jpg',
    seoTitle: 'Sistema de Válvula de Preacción ZSFY | Doble Protección',
    seoDescription: 'Grupo de válvula de preacción ZSFY de alta seguridad con doble disparo a prueba de fallos, previene daños por agua en museos, archivos y centros de datos.'
  },
  'suction-vortex-preventer-en12845': {
    id: '15',
    slug: 'suction-vortex-preventer-en12845',
    name: 'Preventor de Vórtice de Succión de Acero Inoxidable Austenítico (EN12845)',
    category: 'Seguridad Hidráulica',
    description: 'Diseñado estrictamente según la norma europea EN12845 y la norma china GB50974-2014. Se instala en la entrada de succión de las bombas de agua dentro de reservorios o tanques para eliminar los vórtices del líquido y evitar la entrada de aire.',
    features: [
      'Evita la entrada de aire para eliminar la cavitación de la bomba y los daños mecánicos',
      'Permite vaciar completamente el tanque de agua hasta profundidades extremadamente bajas (100mm)',
      'Fabricado en acero inoxidable austenítico premium (SS304/SS316) con rendimiento superior anticorrosión',
      'Diseño extremadamente sólido y simple, sin mantenimiento'
    ],
    specs: {
      'Rango de Tamaños': 'DN50 - DN1000',
      'Material': 'SS304 / SS316',
      'Norma de Cumplimiento': 'EN12845 / GB50974-2014',
      'Requisito Sanitario': 'GB/T17219'
    },
    materials: {
      'Placa de Vórtice': 'Acero inoxidable austenítico 304 / 316',
      'Patas de Soporte Internas': 'Acero inoxidable 304',
      'Fijaciones y Pernos': 'Acero inoxidable 304'
    },
    image: '/assets/products/suction-vortex-preventer-en12845.webp',
    seoTitle: 'Preventor de Vórtice EN12845 | SS304/SS316',
    seoDescription: 'Preventor de vórtice de succión EN12845 en SS304/SS316: elimina vórtices, protege las bombas contra cavitación y optimiza la capacidad del tanque.'
  }
};

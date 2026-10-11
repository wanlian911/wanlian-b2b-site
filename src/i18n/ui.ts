// Chrome（UI 层）文案字典：en / es 双语，类型检查保证双语言键完整。
// href 一律存“裸 EN 路径”，渲染时由组件调用 safeHref() 按当前语言改写，
// 目标语言页面尚未翻译时自动回退到该语言首页，避免死链。

import type { Locale } from './locales';

export interface NavItem {
  name: string;
  href: string;
}

export interface UIStrings {
  nav: NavItem[];
  header: {
    alibabaStore: string;
    inquireNow: string;
    language: string;
    tagline: string;
    languageLabel: Record<Locale, string>;
    // 导航「Products」下拉菜单
    allProducts: string;
    categoriesTitle: string;
    solutionsTitle: string;
    // 页头产品搜索
    search: {
      ariaLabel: string;
      placeholder: string;
      loading: string;
      noResults: string; // 含占位符 {q}
      viewAll: string;
      inquiry: string;
      error: string; // 索引拉取失败时的降级提示
    };
  };
  footer: {
    companyName: string;
    companyDesc: string;
    tagline: string;
    quickLinksTitle: string;
    quickLinks: NavItem[];
    productSeriesTitle: string;
    productSeries: NavItem[];
    solutionsTitle: string;
    solutions: NavItem[];
    resourcesTitle: string;
    resources: NavItem[];
    contactTitle: string;
    contact: {
      emailLabel: string;
      phoneLabel: string;
      addressLabel: string;
      addressValue: string;
    };
    bottom: {
      linkedin: string;
      alibaba: string;
      blog: string;
      privacy: string;
      terms: string;
      support: string;
    };
    subscribeTitle: string;
    subscribeDesc: string;
    subscribePlaceholder: string;
    subscribeButton: string;
    subscribeSuccess: string;
    subscribeVerify: string;
    subscribeError: string;
    copyright: string;
  };
  whatsapp: {
    ariaLabel: string;
    tooltip: string;
    defaultMessage: string;
  };
  inquiry: {
    fullName: string;
    email: string;
    company: string;
    country: string;
    countryPlaceholder: string;
    product: string;
    productCol: string;
    expectedPrice: string;
    quantity: string;
    expectedPricePlaceholder: string;
    quantityPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    verifyRequired: string;
    submitFailed: string;
    successTitle: string;
    successBody: string;
    successWhatsappHint: string;
    chatWhatsapp: string;
    sendAnother: string;
    waFollowupMessage: string;
  };
  lead: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: [string, string, string];
    cardTitle: string;
    fullName: string;
    email: string;
    phone: string;
    phonePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    verifyRequired: string;
    submitFailed: string;
    privacyNote: string;
    successTitle: string;
    successBody: string;
    successWhatsappHint: string;
    chatWhatsapp: string;
    sendAnother: string;
    waFollowupMessage: string;
    floatLabel: string;
    close: string;
  };
  notFound: {
    title: string;
    description: string;
    heading: string;
    body: string;
    backHome: string;
    browseProducts: string;
    contactUs: string;
  };
}

const en: UIStrings = {
  nav: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products/' },
    { name: 'Applications', href: '/applications/' },
    { name: 'Certificates', href: '/certificates/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'About Us', href: '/about/' },
    { name: 'Contact Us', href: '/contact/' },
  ],
  header: {
    alibabaStore: 'Alibaba Store',
    inquireNow: 'Inquire Now',
    language: 'Language',
    tagline: 'Manufacturer & Exporter of Fluid Equipment',
    languageLabel: { en: 'English', es: 'Español', ru: 'Русский', fr: 'Français', ar: 'العربية', pt: 'Português', de: 'Deutsch', tr: 'Türkçe' },
    allProducts: 'All Products',
    categoriesTitle: 'Categories',
    solutionsTitle: 'Solutions',
    search: {
      ariaLabel: 'Search products',
      placeholder: 'Search product, model or size…',
      loading: 'Searching…',
      noResults: 'No products match "{q}". Try a model code (e.g. Z41X, SN65), a size (e.g. DN50) or a material — or send us an inquiry.',
      viewAll: 'View all products',
      inquiry: "Can't find what you need? Send an inquiry",
      error: 'Search is temporarily unavailable. Browse the full catalog or send us an inquiry instead.'
    }
  },
  footer: {
    companyName: 'WANLIAN FLUID',
    companyDesc:
      'Quanzhou Wanlian Fluid Equipment Co., Ltd. manufactures and exports valves, fire protection equipment, hydraulic control products and fluid system components from its own production lines in Quanzhou, Fujian, with selected items produced by qualified manufacturing partners. Valve bodies are CNC-machined in-house and every unit is shell pressure and air-leakage tested before shipment, under an ISO 9001 quality management system.',
    tagline: '"Flow Far, Link Global."',
    subscribeTitle: 'Stay Updated',
    subscribeDesc: 'New products, guides and factory news. No spam, unsubscribe anytime.',
    subscribePlaceholder: 'you@company.com',
    subscribeButton: 'Subscribe',
    subscribeSuccess: 'Subscribed — thank you!',
    subscribeVerify: 'Please complete the verification check before sending.',
    subscribeError: 'Submission failed. Please try again.',
    quickLinksTitle: 'Quick Links',
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'Products Center', href: '/products/' },
      { name: 'Applications', href: '/applications/' },
      { name: 'About Us', href: '/about/' },
      { name: 'Blog', href: '/blog/' },
      { name: 'Contact & Inquiry', href: '/contact/' },
    ],
    productSeriesTitle: 'Product Series',
    productSeries: [
      { name: 'Valves & Parts', href: '/products/#category=Valves%20%26%20Parts' },
      { name: 'Hydrants & Pump Connections', href: '/products/#category=Hydrants%20%26%20Pump%20Connections' },
      { name: 'Sprinklers & Alarm Valves', href: '/products/#category=Sprinklers%20%26%20Alarm%20Valves' },
      { name: 'Extinguishing Water Cannons', href: '/products/#category=Extinguishing%20Water%20Cannons' },
    ],
    solutionsTitle: 'Product Solutions',
    solutions: [
      { name: 'UL Listed Fire Valves', href: '/ul-fire-valves/' },
      { name: 'Fire Water Cannon', href: '/fire-water-cannon/' },
      { name: 'Fire Sprinkler Systems', href: '/fire-sprinkler-systems/' },
    ],
    resourcesTitle: 'Resources',
    resources: [
      { name: 'Sourcing Guide', href: '/sourcing-guide/' },
      { name: 'Industry Whitepaper', href: '/whitepaper/' },
      { name: 'FAQ', href: '/faq/' },
      { name: 'Glossary', href: '/glossary/' },
      { name: 'Cost Estimator', href: '/cost-calculator/' },
    ],
    contactTitle: 'Contact Us',
    contact: {
      emailLabel: 'Email:',
      phoneLabel: 'Phone:',
      addressLabel: 'Address:',
      addressValue: 'Quanzhou, Fujian, China',
    },
    bottom: {
      linkedin: 'LinkedIn',
      alibaba: 'Alibaba Store',
      blog: 'Blog',
      privacy: 'Privacy',
      terms: 'Terms',
      support: 'Support',
    },
    copyright: '© {year} Quanzhou Wanlian Fluid Equipment Co., Ltd. All Rights Reserved.',
  },
  whatsapp: {
    ariaLabel: 'Contact us on WhatsApp',
    tooltip: 'Contact Us',
    defaultMessage: 'Hi, I am interested in your valves and firefighting equipment.',
  },
  inquiry: {
    fullName: 'Full Name *',
    email: 'Email Address *',
    company: 'Company Name',
    country: 'Country/Region *',
    countryPlaceholder: 'Select Country/Region',
    product: 'Product of Interest',
    productCol: 'Product of Interest',
    expectedPrice: 'Expected Price',
    quantity: 'Order Quantity',
    expectedPricePlaceholder: 'e.g. USD 120 / unit',
    quantityPlaceholder: 'e.g. 500',
    message: 'Message & Specific Requirements *',
    messagePlaceholder:
      'Please describe your requirements, quantity, and any customization needed...',
    send: 'Send Inquiry Now',
    sending: 'Sending...',
    verifyRequired: 'Please complete the verification check before sending.',
    submitFailed: 'Submission failed. Please try again or contact us via WhatsApp.',
    successTitle: 'Inquiry Sent Successfully!',
    successBody:
      'Thank you for your inquiry. Our sales and engineering team will review your requirements and reply within 12 hours.',
    successWhatsappHint: 'Prefer instant chat? Reach us directly on WhatsApp:',
    chatWhatsapp: 'Chat on WhatsApp',
    sendAnother: '← Send Another Inquiry',
    waFollowupMessage:
      'Hi, I just submitted an inquiry on wanlian911.com and would like a quick follow-up.',
  },
  lead: {
    eyebrow: 'Lead Capture',
    title: 'Leave Your Contact — We Follow Up',
    body:
      'Not ready to write a full inquiry? Leave your name and a phone number or e-mail, and our sales team will reach out with product information, documentation and a quotation exactly when you need it.',
    bullets: [
      'Reply within 12 hours, 7 days a week',
      'WhatsApp, e-mail or phone — your choice',
      'Your details are used only for your follow-up, no spam',
    ],
    cardTitle: 'Leave Your Contact Details',
    fullName: 'Full Name *',
    email: 'E-mail Address *',
    phone: 'Phone / WhatsApp',
    phonePlaceholder: '+1 555 123 4567',
    message: 'Product or Requirement (Optional)',
    messagePlaceholder: 'e.g. gate valves DN50-300, quantity, destination port...',
    submit: 'Leave My Contact Info',
    sending: 'Sending...',
    verifyRequired: 'Please complete the verification check before sending.',
    submitFailed: 'Submission failed. Please try again or contact us via WhatsApp.',
    privacyNote: 'We use your details only to follow up on your request. No spam, no sharing.',
    successTitle: 'Contact Info Received!',
    successBody:
      'Thank you. Our sales team will contact you within 12 hours with product information and quotation options.',
    successWhatsappHint: 'Prefer instant chat? Reach us directly on WhatsApp:',
    chatWhatsapp: 'Chat on WhatsApp',
    sendAnother: '← Leave Another Contact',
    waFollowupMessage:
      'Hi, I just left my contact details on wanlian911.com and would like a quick follow-up.',
    floatLabel: 'Leave Contact',
    close: 'Close',
  },
  notFound: {
    title: '404 - Page Not Found | Wanlian Fluid Equipment',
    description:
      'The page you are looking for was not found. Explore Wanlian Fluid industrial valves and fire protection equipment.',
    heading: 'Page Not Found',
    body: 'The page you are looking for may have been moved, renamed, or no longer exists. Explore our certified valves and fire protection catalog instead.',
    backHome: 'Back to Home',
    browseProducts: 'Browse Products',
    contactUs: 'Contact Us',
  },
};

const es: UIStrings = {
  nav: [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/products/' },
    { name: 'Aplicaciones', href: '/applications/' },
    { name: 'Certificados', href: '/certificates/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Sobre Nosotros', href: '/about/' },
    { name: 'Contacto', href: '/contact/' },
  ],
  header: {
    alibabaStore: 'Tienda Alibaba',
    inquireNow: 'Solicitar Cotización',
    language: 'Idioma',
    tagline: 'Fabricante y Exportador de Equipos de Fluidos',
    languageLabel: { en: 'English', es: 'Español', ru: 'Русский', fr: 'Français', ar: 'العربية' },
    allProducts: 'Todos los productos',
    categoriesTitle: 'Categorías',
    solutionsTitle: 'Soluciones',
    search: {
      ariaLabel: 'Buscar productos',
      placeholder: 'Buscar producto, modelo o tamaño…',
      loading: 'Buscando…',
      noResults: 'No hay productos que coincidan con "{q}". Pruebe con un código de modelo (p. ej. Z41X, SN65), un tamaño (p. ej. DN50) o un material — o envíenos una consulta.',
      viewAll: 'Ver todos los productos',
      inquiry: '¿No encuentra lo que necesita? Envíe una consulta',
      error: 'La búsqueda no está disponible temporalmente. Consulte el catálogo completo o envíenos una consulta.'
    }
  },
  footer: {
    companyName: 'WANLIAN FLUID',
    companyDesc:
      'Quanzhou Wanlian Fluid Equipment Co., Ltd. fabrica y exporta válvulas, equipos de protección contra incendios, productos de control hidráulico y componentes para sistemas de fluidos desde sus propias líneas de producción en Quanzhou, Fujian, con artículos seleccionados producidos por socios de fabricación cualificados. Los cuerpos de válvula se mecanizan por CNC en la propia planta y cada unidad se somete a pruebas de presión de cuerpo y de estanqueidad al aire antes del envío, bajo un sistema de gestión de calidad ISO 9001.',
    tagline: '"Flow Far, Link Global."',
    subscribeTitle: 'Manténgase Informado',
    subscribeDesc: 'Nuevos productos, guías y noticias de la fábrica. Sin spam, cancele cuando quiera.',
    subscribePlaceholder: 'usted@empresa.com',
    subscribeButton: 'Suscribirse',
    subscribeSuccess: '¡Suscrito — gracias!',
    subscribeVerify: 'Complete la verificación antes de enviar.',
    subscribeError: 'Error al enviar. Inténtelo de nuevo.',
    quickLinksTitle: 'Enlaces Rápidos',
    quickLinks: [
      { name: 'Inicio', href: '/' },
      { name: 'Centro de Productos', href: '/products/' },
      { name: 'Aplicaciones', href: '/applications/' },
      { name: 'Sobre Nosotros', href: '/about/' },
      { name: 'Blog', href: '/blog/' },
      { name: 'Contacto y Consultas', href: '/contact/' },
    ],
    productSeriesTitle: 'Series de Productos',
    productSeries: [
      { name: 'Válvulas y Piezas', href: '/products/#category=V%C3%A1lvulas%20y%20Piezas' },
      { name: 'Hidrantes y Conexiones de Bomba', href: '/products/#category=Hidrantes%20y%20Conexiones%20de%20Bomba' },
      { name: 'Rociadores y Válvulas de Alarma', href: '/products/#category=Rociadores%20y%20V%C3%A1lvulas%20de%20Alarma' },
      { name: 'Cañones de Agua Extintores', href: '/products/#category=Ca%C3%B1ones%20de%20Agua%20Extintores' },
    ],
    solutionsTitle: 'Soluciones de Producto',
    solutions: [
      { name: 'Válvulas Contra Incendios UL', href: '/ul-fire-valves/' },
      { name: 'Cañón Monitor Contra Incendios', href: '/fire-water-cannon/' },
      { name: 'Sistemas de Rociadores', href: '/fire-sprinkler-systems/' },
    ],
    resourcesTitle: 'Recursos',
    resources: [
      { name: 'Guía de Abastecimiento', href: '/sourcing-guide/' },
      { name: 'Documento de Referencia', href: '/whitepaper/' },
      { name: 'Preguntas Frecuentes', href: '/faq/' },
      { name: 'Glosario', href: '/glossary/' },
      { name: 'Calculadora de Costos', href: '/cost-calculator/' },
    ],
    contactTitle: 'Contacto',
    contact: {
      emailLabel: 'Correo:',
      phoneLabel: 'Teléfono:',
      addressLabel: 'Dirección:',
      addressValue: 'Quanzhou, Fujian, China',
    },
    bottom: {
      linkedin: 'LinkedIn',
      alibaba: 'Tienda Alibaba',
      blog: 'Blog',
      privacy: 'Privacidad',
      terms: 'Términos',
      support: 'Soporte',
    },
    copyright: '© {year} Quanzhou Wanlian Fluid Equipment Co., Ltd. Todos los derechos reservados.',
  },
  whatsapp: {
    ariaLabel: 'Contáctenos por WhatsApp',
    tooltip: 'Contáctenos',
    defaultMessage: 'Hola, estoy interesado en sus válvulas y equipos contra incendios.',
  },
  inquiry: {
    fullName: 'Nombre Completo *',
    email: 'Correo Electrónico *',
    company: 'Empresa',
    country: 'País/Región *',
    countryPlaceholder: 'Seleccione país/región',
    product: 'Producto de Interés',
    productCol: 'Producto de Interés',
    expectedPrice: 'Precio Esperado',
    quantity: 'Cantidad Pedida',
    expectedPricePlaceholder: 'p. ej. USD 120 / ud',
    quantityPlaceholder: 'p. ej. 500',
    message: 'Mensaje y Requisitos Específicos *',
    messagePlaceholder:
      'Describa sus requisitos, cantidades y cualquier personalización necesaria...',
    send: 'Enviar Consulta',
    sending: 'Enviando...',
    verifyRequired: 'Por favor complete la verificación antes de enviar.',
    submitFailed: 'Error al enviar. Por favor intente nuevamente o contáctenos por WhatsApp.',
    successTitle: '¡Consulta Enviada con Éxito!',
    successBody:
      'Gracias por su consulta. Nuestro equipo de ventas e ingeniería revisará sus requisitos y le responderá en un plazo de 12 horas.',
    successWhatsappHint: '¿Prefiere chat instantáneo? Contáctenos directamente por WhatsApp:',
    chatWhatsapp: 'Chatear por WhatsApp',
    sendAnother: '← Enviar Otra Consulta',
    waFollowupMessage:
      'Hola, acabo de enviar una consulta en wanlian911.com y deseo un seguimiento rápido.',
  },
  lead: {
    eyebrow: 'Deje su Contacto',
    title: 'Déjese Contactar — Nosotros Le Llamamos',
    body:
      '¿Aún no está listo para enviar una consulta completa? Deje su nombre y un número de teléfono o correo electrónico, y nuestro equipo de ventas le contactará con información de productos, documentación y cotización cuando la necesite.',
    bullets: [
      'Respuesta en 12 horas, los 7 días de la semana',
      'WhatsApp, correo o teléfono — usted elige',
      'Sus datos se usan solo para su seguimiento, sin spam',
    ],
    cardTitle: 'Deje sus Datos de Contacto',
    fullName: 'Nombre Completo *',
    email: 'Correo Electrónico *',
    phone: 'Teléfono / WhatsApp',
    phonePlaceholder: '+34 600 123 456',
    message: 'Producto o Requisito (Opcional)',
    messagePlaceholder: 'p. ej. válvulas de compuerta DN50-300, cantidad, puerto de destino...',
    submit: 'Dejar mi Contacto',
    sending: 'Enviando...',
    verifyRequired: 'Por favor complete la verificación antes de enviar.',
    submitFailed: 'Error al enviar. Por favor intente nuevamente o contáctenos por WhatsApp.',
    privacyNote: 'Usamos sus datos solo para seguir su solicitud. Sin spam, sin compartirlas.',
    successTitle: '¡Datos de Contacto Recibidos!',
    successBody:
      'Gracias. Nuestro equipo de ventas le contactará en un plazo de 12 horas con información de productos y opciones de cotización.',
    successWhatsappHint: '¿Prefiere chat instantáneo? Contáctenos directamente por WhatsApp:',
    chatWhatsapp: 'Chatear por WhatsApp',
    sendAnother: '← Dejar Otro Contacto',
    waFollowupMessage:
      'Hola, acabo de dejar mis datos de contacto en wanlian911.com y deseo un seguimiento rápido.',
    floatLabel: 'Dejar Contacto',
    close: 'Cerrar',
  },
  notFound: {
    title: '404 - Página No Encontrada | Wanlian Fluid Equipment',
    description:
      'La página que busca no fue encontrada. Explore las válvulas industriales y equipos de protección contra incendios de Wanlian Fluid.',
    heading: 'Página No Encontrada',
    body: 'La página que busca pudo haber sido movida, renombrada o ya no existe. Explore nuestro catálogo certificado de válvulas y protección contra incendios.',
    backHome: 'Volver al Inicio',
    browseProducts: 'Ver Productos',
    contactUs: 'Contacto',
  },
};

const ru: UIStrings = {
  nav: [
    { name: 'Главная', href: '/' },
    { name: 'Продукция', href: '/products/' },
    { name: 'Применение', href: '/applications/' },
    { name: 'Сертификаты', href: '/certificates/' },
    { name: 'Блог', href: '/blog/' },
    { name: 'О компании', href: '/about/' },
    { name: 'Контакты', href: '/contact/' },
  ],
  header: {
    alibabaStore: 'Магазин на Alibaba',
    inquireNow: 'Запросить цену',
    language: 'Язык',
    tagline: 'Производитель и экспортёр оборудования для жидкостных систем',
    languageLabel: { en: 'English', es: 'Español', ru: 'Русский', fr: 'Français', ar: 'العربية' },
    allProducts: 'Весь каталог',
    categoriesTitle: 'Категории',
    solutionsTitle: 'Решения',
    search: {
      ariaLabel: 'Поиск по продукции',
      placeholder: 'Поиск продукции, модели или размера…',
      loading: 'Поиск…',
      noResults: 'По запросу "{q}" ничего не найдено. Попробуйте модель (напр. Z41X, SN65), размер (напр. DN50) или материал — или отправьте запрос.',
      viewAll: 'Смотреть весь каталог',
      inquiry: 'Не нашли нужное? Отправьте запрос',
      error: 'Поиск временно недоступен. Посмотрите весь каталог или отправьте запрос.'
    }
  },
  footer: {
    companyName: 'WANLIAN FLUID',
    companyDesc:
      'Quanzhou Wanlian Fluid Equipment Co., Ltd. производит и экспортирует клапаны, противопожарное оборудование, гидравлическую регулирующую арматуру и компоненты жидкостных систем на собственных производственных линиях в Цюаньчжоу (Фуцзянь); отдельные позиции выпускаются квалифицированными производственными партнёрами. Корпуса клапанов обрабатываются на станках с ЧПУ на собственном производстве, каждая единица проходит испытания на прочность корпуса и герметичность перед отгрузкой в рамках системы менеджмента качества ISO 9001.',
    tagline: '"Flow Far, Link Global."',
    subscribeTitle: 'Будьте в Курсе',
    subscribeDesc: 'Новые продукты, гайды и новости фабрики. Без спама, отписка в один клик.',
    subscribePlaceholder: 'вы@компания.com',
    subscribeButton: 'Подписаться',
    subscribeSuccess: 'Вы подписаны — спасибо!',
    subscribeVerify: 'Пройдите проверку перед отправкой.',
    subscribeError: 'Ошибка отправки. Попробуйте ещё раз.',
    quickLinksTitle: 'Быстрые ссылки',
    quickLinks: [
      { name: 'Главная', href: '/' },
      { name: 'Каталог продукции', href: '/products/' },
      { name: 'Применение', href: '/applications/' },
      { name: 'О компании', href: '/about/' },
      { name: 'Блог', href: '/blog/' },
      { name: 'Контакты и запросы', href: '/contact/' },
    ],
    productSeriesTitle: 'Серии продукции',
    productSeries: [
      { name: 'Запорная арматура и детали', href: '/products/#category=%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0%20%D0%B8%20%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D0%B8' },
      { name: 'Гидранты и насосные соединения', href: '/products/#category=%D0%93%D0%B8%D0%B4%D1%80%D0%B0%D0%BD%D1%82%D1%8B%20%D0%B8%20%D0%BD%D0%B0%D1%81%D0%BE%D1%81%D0%BD%D1%8B%D0%B5%20%D1%81%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F' },
      { name: 'Спринклеры и сигнальные клапаны', href: '/products/#category=%D0%A1%D0%BF%D1%80%D0%B8%D0%BD%D0%BA%D0%BB%D0%B5%D1%80%D1%8B%20%D0%B8%20%D1%81%D0%B8%D0%B3%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BA%D0%BB%D0%B0%D0%BF%D0%B0%D0%BD%D1%8B' },
      { name: 'Лафетные стволы пожаротушения', href: '/products/#category=%D0%9B%D0%B0%D1%84%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D1%81%D1%82%D0%B2%D0%BE%D0%BB%D1%8B%20%D0%BF%D0%BE%D0%B6%D0%B0%D1%80%D0%BE%D1%82%D1%83%D1%88%D0%B5%D0%BD%D0%B8%D1%8F' },
    ],
    solutionsTitle: 'Решения по продукции',
    solutions: [
      { name: 'Пожарные клапаны с сертификацией UL', href: '/ul-fire-valves/' },
      { name: 'Пожарный лафетный ствол', href: '/fire-water-cannon/' },
      { name: 'Спринклерные системы пожаротушения', href: '/fire-sprinkler-systems/' },
    ],
    resourcesTitle: 'Ресурсы',
    resources: [
      { name: 'Руководство по закупкам', href: '/sourcing-guide/' },
      { name: 'Отраслевой документ', href: '/whitepaper/' },
      { name: 'Часто задаваемые вопросы', href: '/faq/' },
      { name: 'Глоссарий', href: '/glossary/' },
      { name: 'Калькулятор стоимости', href: '/cost-calculator/' },
    ],
    contactTitle: 'Контакты',
    contact: {
      emailLabel: 'E-mail:',
      phoneLabel: 'Телефон:',
      addressLabel: 'Адрес:',
      addressValue: 'Цюаньчжоу, Фуцзянь, Китай',
    },
    bottom: {
      linkedin: 'LinkedIn',
      alibaba: 'Магазин на Alibaba',
      blog: 'Блог',
      privacy: 'Конфиденциальность',
      terms: 'Условия',
      support: 'Поддержка',
    },
    copyright: '© {year} Quanzhou Wanlian Fluid Equipment Co., Ltd. Все права защищены.',
  },
  whatsapp: {
    ariaLabel: 'Свяжитесь с нами в WhatsApp',
    tooltip: 'Связаться с нами',
    defaultMessage: 'Здравствуйте! Меня интересуют ваши клапаны и противопожарное оборудование.',
  },
  inquiry: {
    fullName: 'Полное имя *',
    email: 'Адрес электронной почты *',
    company: 'Название компании',
    country: 'Страна/регион *',
    countryPlaceholder: 'Выберите страну/регион',
    product: 'Интересующая продукция',
    productCol: 'Интересующая продукция',
    expectedPrice: 'Ожидаемая цена',
    quantity: 'Количество',
    expectedPricePlaceholder: 'напр. 120 USD / шт',
    quantityPlaceholder: 'напр. 500',
    message: 'Сообщение и конкретные требования *',
    messagePlaceholder:
      'Опишите ваши требования, количество и необходимую кастомизацию...',
    send: 'Отправить запрос',
    sending: 'Отправка...',
    verifyRequired: 'Пожалуйста, пройдите проверку перед отправкой.',
    submitFailed: 'Ошибка отправки. Попробуйте снова или свяжитесь с нами через WhatsApp.',
    successTitle: 'Запрос успешно отправлен!',
    successBody:
      'Спасибо за ваш запрос. Наша команда продаж и инженеров рассмотрит требования и ответит в течение 12 часов.',
    successWhatsappHint: 'Предпочитаете мгновенный чат? Свяжитесь с нами напрямую в WhatsApp:',
    chatWhatsapp: 'Чат в WhatsApp',
    sendAnother: '← Отправить ещё один запрос',
    waFollowupMessage:
      'Здравствуйте! Я только что отправил запрос на wanlian911.com и хотел бы получить быстрый ответ.',
  },
  lead: {
    eyebrow: 'Оставьте контакты',
    title: 'Оставьте контакты — мы сами свяжемся',
    body:
      'Пока не готовы оформить полный запрос? Оставьте имя и номер телефона или e-mail — наша команда продаж свяжется с вами с информацией о продукции, документацией и ценой, когда это будет нужно.',
    bullets: [
      'Ответ в течение 12 часов, 7 дней в неделю',
      'WhatsApp, e-mail или телефон — на ваш выбор',
      'Контакты используются только для вашей заявки, без спама',
    ],
    cardTitle: 'Оставьте ваши контактные данные',
    fullName: 'Полное имя *',
    email: 'Адрес электронной почты *',
    phone: 'Телефон / WhatsApp',
    phonePlaceholder: '+7 900 123-45-67',
    message: 'Продукция или требования (необязательно)',
    messagePlaceholder: 'напр. запорные клапаны DN50–300, количество, порт назначения...',
    submit: 'Оставить мои контакты',
    sending: 'Отправка...',
    verifyRequired: 'Пожалуйста, пройдите проверку перед отправкой.',
    submitFailed: 'Ошибка отправки. Попробуйте снова или свяжитесь с нами через WhatsApp.',
    privacyNote:
      'Ваши данные используются только для связи по вашей заявке. Без спама, без передачи третьим лицам.',
    successTitle: 'Контакты получены!',
    successBody:
      'Спасибо. Наша команда продаж свяжется с вами в течение 12 часов с информацией о продукции и вариантами ценового предложения.',
    successWhatsappHint: 'Предпочитаете мгновенный чат? Свяжитесь с нами напрямую в WhatsApp:',
    chatWhatsapp: 'Чат в WhatsApp',
    sendAnother: '← Оставить ещё контакты',
    waFollowupMessage:
      'Здравствуйте! Я только что оставил свои контакты на wanlian911.com и хотел бы получить быстрый ответ.',
    floatLabel: 'Оставить контакты',
    close: 'Закрыть',
  },
  notFound: {
    title: '404 — Страница не найдена | Wanlian Fluid Equipment',
    description:
      'Запрашиваемая страница не найдена. Ознакомьтесь с промышленными клапанами и противопожарным оборудованием Wanlian Fluid.',
    heading: 'Страница не найдена',
    body: 'Возможно, страница была перемещена, переименована или больше не существует. Ознакомьтесь с нашим каталогом сертифицированных клапанов и противопожарного оборудования.',
    backHome: 'На главную',
    browseProducts: 'Смотреть продукцию',
    contactUs: 'Связаться с нами',
  },
};

const fr: UIStrings = {
  nav: [
    { name: 'Accueil', href: '/' },
    { name: 'Produits', href: '/products/' },
    { name: 'Applications', href: '/applications/' },
    { name: 'Certificats', href: '/certificates/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'À Propos', href: '/about/' },
    { name: 'Contact', href: '/contact/' },
  ],
  header: {
    alibabaStore: 'Boutique Alibaba',
    inquireNow: 'Demander un Devis',
    language: 'Langue',
    tagline: 'Fabricant et Exportateur d\'Équipements Fluides',
    languageLabel: { en: 'English', es: 'Español', ru: 'Русский', fr: 'Français', ar: 'العربية' },
    allProducts: 'Tous les produits',
    categoriesTitle: 'Catégories',
    solutionsTitle: 'Solutions',
    search: {
      ariaLabel: 'Rechercher des produits',
      placeholder: 'Rechercher un produit, un modèle ou une taille…',
      loading: 'Recherche…',
      noResults: 'Aucun produit ne correspond à « {q} ». Essayez un code de modèle (ex. Z41X, SN65), une taille (ex. DN50) ou un matériau — ou envoyez-nous une demande.',
      viewAll: 'Voir tous les produits',
      inquiry: 'Vous ne trouvez pas ? Envoyez une demande',
      error: 'La recherche est temporairement indisponible. Parcourez le catalogue complet ou envoyez-nous une demande.'
    }
  },
  footer: {
    companyName: 'WANLIAN FLUID',
    companyDesc:
      "Quanzhou Wanlian Fluid Equipment Co., Ltd. fabrique et exporte des vannes, des équipements de protection incendie, des produits de régulation hydraulique et des composants de systèmes fluides depuis ses propres lignes de production à Quanzhou, Fujian, certains articles étant fabriqués par des partenaires de fabrication qualifiés. Les corps de vanne sont usinés par CNC en interne et chaque unité est contrôlée par essai de pression du corps et d'étanchéité à l'air avant expédition, dans le cadre d'un système de management de la qualité ISO 9001.",
    tagline: '"Flow Far, Link Global."',
    subscribeTitle: 'Restez Informé',
    subscribeDesc: "Nouveaux produits, guides et actualités de l'usine. Sans spam, désinscription à tout moment.",
    subscribePlaceholder: 'vous@entreprise.com',
    subscribeButton: "S'abonner",
    subscribeSuccess: "Inscription confirmée — merci !",
    subscribeVerify: "Veuillez compléter la vérification avant l'envoi.",
    subscribeError: "Échec de l'envoi. Veuillez réessayer.",
    quickLinksTitle: 'Liens Rapides',
    quickLinks: [
      { name: 'Accueil', href: '/' },
      { name: "Centre de Produits", href: '/products/' },
      { name: 'Applications', href: '/applications/' },
      { name: 'À Propos', href: '/about/' },
      { name: 'Blog', href: '/blog/' },
      { name: 'Contact & Demande', href: '/contact/' },
    ],
    productSeriesTitle: 'Séries de Produits',
    productSeries: [
      { name: 'Vannes et Pièces', href: '/products/#category=Vannes%20et%20Pi%C3%A8ces' },
      { name: 'Hydrants et Connexions de Pompe', href: '/products/#category=Hydrants%20et%20Connexions%20de%20Pompe' },
      { name: "Gicleurs et Vannes d'Alarme", href: "/products/#category=Gicleurs%20et%20Vannes%20d'Alarme" },
      { name: "Canons d'Incendie", href: "/products/#category=Canons%20d'Incendie" },
    ],
    solutionsTitle: 'Solutions Produit',
    solutions: [
      { name: 'Vannes Incendie Certifiées UL', href: '/ul-fire-valves/' },
      { name: "Canon d'Incendie", href: '/fire-water-cannon/' },
      { name: 'Systèmes de Gicleurs', href: '/fire-sprinkler-systems/' },
    ],
    resourcesTitle: 'Ressources',
    resources: [
      { name: "Guide d'approvisionnement", href: '/sourcing-guide/' },
      { name: 'Livre blanc sectoriel', href: '/whitepaper/' },
      { name: 'Questions Fréquentes', href: '/faq/' },
      { name: 'Glossaire', href: '/glossary/' },
      { name: "Estimateur de coûts", href: '/cost-calculator/' },
    ],
    contactTitle: 'Contact',
    contact: {
      emailLabel: 'E-mail :',
      phoneLabel: 'Téléphone :',
      addressLabel: 'Adresse :',
      addressValue: 'Quanzhou, Fujian, Chine',
    },
    bottom: {
      linkedin: 'LinkedIn',
      alibaba: 'Boutique Alibaba',
      blog: 'Blog',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      support: 'Support',
    },
    copyright: '© {year} Quanzhou Wanlian Fluid Equipment Co., Ltd. Tous droits réservés.',
  },
  whatsapp: {
    ariaLabel: 'Contactez-nous sur WhatsApp',
    tooltip: 'Contactez-nous',
    defaultMessage:
      "Bonjour, je suis intéressé par vos vannes et votre équipement de protection incendie.",
  },
  inquiry: {
    fullName: 'Nom complet *',
    email: 'Adresse e-mail *',
    company: 'Nom de la société',
    country: 'Pays/Région *',
    countryPlaceholder: 'Sélectionner le pays/région',
    product: "Produit d'intérêt",
    productCol: "Produit d'intérêt",
    expectedPrice: 'Prix Attendu',
    quantity: 'Quantité Commandée',
    expectedPricePlaceholder: 'ex. 120 USD / u',
    quantityPlaceholder: 'ex. 500',
    message: 'Message et exigences spécifiques *',
    messagePlaceholder:
      "Veuillez décrire vos exigences, la quantité et toute personnalisation nécessaire...",
    send: 'Envoyer la Demande',
    sending: 'Envoi...',
    verifyRequired: "Veuillez d'abord effectuer la vérification avant d'envoyer.",
    submitFailed:
      "L'envoi a échoué. Veuillez réessayer ou nous contacter via WhatsApp.",
    successTitle: 'Demande envoyée avec succès !',
    successBody:
      "Merci pour votre demande. Notre équipe commerciale et technique examinera vos exigences et vous répondra sous 12 heures.",
    successWhatsappHint:
      'Préférez-vous le chat instantané ? Contactez-nous directement sur WhatsApp :',
    chatWhatsapp: 'Discuter sur WhatsApp',
    sendAnother: '← Envoyer une autre demande',
    waFollowupMessage:
      "Bonjour, je viens de soumettre une demande sur wanlian911.com et souhaiterais un suivi rapide.",
  },
  lead: {
    eyebrow: 'Laissez vos Coordonnées',
    title: 'Laissez vos coordonnées — Nous vous rappelons',
    body:
      "Pas encore prêt à rédiger une demande complète ? Laissez votre nom et un numéro de téléphone ou une adresse e-mail, notre équipe commerciale vous recontactera avec les informations produits, la documentation et un devis quand vous en aurez besoin.",
    bullets: [
      'Réponse sous 12 h, 7 jours sur 7',
      'WhatsApp, e-mail ou téléphone — votre choix',
      'Vos coordonnées servent uniquement à votre demande, sans spam',
    ],
    cardTitle: 'Laissez vos coordonnées',
    fullName: 'Nom complet *',
    email: 'Adresse e-mail *',
    phone: 'Téléphone / WhatsApp',
    phonePlaceholder: '+33 6 12 34 56 78',
    message: 'Produit ou exigence (facultatif)',
    messagePlaceholder: "p. ex. vannes à boisseau DN50-300, quantité, port de destination...",
    submit: 'Laisser mes coordonnées',
    sending: 'Envoi...',
    verifyRequired: "Veuillez d'abord effectuer la vérification avant d'envoyer.",
    submitFailed: "L'envoi a échoué. Veuillez réessayer ou nous contacter via WhatsApp.",
    privacyNote: "Vos coordonnées ne servent qu'à traiter votre demande. Pas de spam, pas de partage.",
    successTitle: 'Coordonnées bien reçues !',
    successBody:
      "Merci. Notre équipe commerciale vous recontactera sous 12 heures avec les informations produits et les options de devis.",
    successWhatsappHint: "Préférez-vous le chat instantané ? Contactez-nous directement sur WhatsApp :",
    chatWhatsapp: 'Discuter sur WhatsApp',
    sendAnother: '← Laisser d’autres coordonnées',
    waFollowupMessage:
      "Bonjour, je viens de laisser mes coordonnées sur wanlian911.com et souhaiterais un suivi rapide.",
    floatLabel: 'Laisser coordonnées',
    close: 'Fermer',
  },
  notFound: {
    title: '404 - Page Introuvable | Wanlian Fluid Equipment',
    description:
      "La page que vous recherchez est introuvable. Découvrez les vannes industrielles et l'équipement de protection incendie de Wanlian Fluid.",
    heading: 'Page Introuvable',
    body:
      "La page que vous recherchez a peut-être été déplacée, renommée ou n'existe plus. Découvrez plutôt notre catalogue certifié de vannes et de protection incendie.",
    backHome: "Retour à l'Accueil",
    browseProducts: 'Voir les Produits',
    contactUs: 'Contactez-nous',
  },
};

const ar: UIStrings = {
  nav: [
    { name: 'الرئيسية', href: '/' },
    { name: 'المنتجات', href: '/products/' },
    { name: 'التطبيقات', href: '/applications/' },
    { name: 'الشهادات', href: '/certificates/' },
    { name: 'المدونة', href: '/blog/' },
    { name: 'من نحن', href: '/about/' },
    { name: 'اتصل بنا', href: '/contact/' },
  ],
  header: {
    alibabaStore: 'متجر علي بابا',
    inquireNow: 'اطلب عرض سعر',
    language: 'اللغة',
    tagline: 'صانع ومصدّر معدات السوائل',
    languageLabel: { en: 'English', es: 'Español', ru: 'Русский', fr: 'Français', ar: 'العربية' },
    allProducts: 'جميع المنتجات',
    categoriesTitle: 'الفئات',
    solutionsTitle: 'الحلول',
    search: {
      ariaLabel: 'البحث في المنتجات',
      placeholder: 'ابحث عن منتج أو موديل أو مقاس…',
      loading: 'جارٍ البحث…',
      noResults: 'لا توجد منتجات مطابقة لـ "{q}". جرّب رمز الموديل (مثل Z41X أو SN65) أو المقاس (مثل DN50) أو المادة — أو أرسل استفسارًا.',
      viewAll: 'عرض جميع المنتجات',
      inquiry: 'لم تجد ما تحتاجه؟ أرسل استفسارك',
      error: 'البحث غير متاح مؤقتًا. تصفح الكتالوج الكامل أو أرسل استفسارك.'
    }
  },
  footer: {
    companyName: 'WANLIAN FLUID',
    companyDesc:
      'شركة قوانتشو وانليان للمعدات السائلة المحدودة (Quanzhou Wanlian Fluid Equipment Co., Ltd.) تصنع وتصّدر الصمامات ومعدات الحماية من الحريق ومنتجات التحكم الهيدروليكي ومكونات أنظمة السوائل من خطوط إنتاجها الخاصة في قوانتشو، فوجيان، مع إنتاج مختارات من قبل شركاء تصنيع مؤهلين. يتم تشغيل أجسام الصمامات بواسطة CNC داخل المصنع وتخضع كل وحدة لاختبار ضغط الغلاف واختبار التسرب الهوائي قبل الشحن، وفق نظام إدارة جودة ISO 9001.',
    tagline: '"Flow Far, Link Global."',
    subscribeTitle: 'ابق على اطلاع',
    subscribeDesc: 'منتجات جديدة وأدلة وأخبار المصنع — بدون رسائل مزعجة، وإلغاء الاشتراك في أي وقت.',
    subscribePlaceholder: 'you@company.com',
    subscribeButton: 'اشترك',
    subscribeSuccess: 'تم الاشتراك — شكراً!',
    subscribeVerify: 'أكمل التحقق قبل الإرسال.',
    subscribeError: 'فشل الإرسال. حاول مرة أخرى.',
    quickLinksTitle: 'روابط سريعة',
    quickLinks: [
      { name: 'الرئيسية', href: '/' },
      { name: 'مركز المنتجات', href: '/products/' },
      { name: 'التطبيقات', href: '/applications/' },
      { name: 'من نحن', href: '/about/' },
      { name: 'المدونة', href: '/blog/' },
      { name: 'اتصال واستفسار', href: '/contact/' },
    ],
    productSeriesTitle: 'سلاسل المنتجات',
    productSeries: [
      { name: 'صمامات وقطع الغيار', href: '/products/#category=%D8%B5%D9%85%D8%A7%D9%85%D8%A7%D8%AA%20%D9%88%D9%82%D8%B7%D8%B9%20%D8%A7%D9%84%D8%BA%D9%8A%D8%A7%D8%B1' },
      { name: 'خلاط الحريق واتصالات المضخات', href: '/products/#category=%D8%AE%D9%84%D8%A7%D8%B7%20%D8%A7%D9%84%D8%AD%D8%B1%D9%8A%D9%82%20%D9%88%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%B6%D8%AE%D8%A7%D8%AA' },
      { name: 'رؤوس رش الحريق وصمامات الإنذار', href: '/products/#category=%D8%B1%D8%A4%D9%88%D8%B3%20%D8%B1%D8%B4%20%D8%A7%D9%84%D8%AD%D8%B1%D9%8A%D9%82%20%D9%88%D8%B5%D9%85%D8%A7%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%86%D8%B0%D8%A7%D8%B1' },
      { name: 'مدافع مياه الإطفاء', href: '/products/#category=%D9%85%D8%AF%D8%A7%D9%81%D8%B9%20%D9%85%D9%8A%D8%A7%D9%87%20%D8%A7%D9%84%D8%A5%D8%B7%D9%81%D8%A7%D8%A1' },
    ],
    solutionsTitle: 'حلول المنتجات',
    solutions: [
      { name: 'صمامات حريق UL', href: '/ul-fire-valves/' },
      { name: 'مدفع مياه حريق', href: '/fire-water-cannon/' },
      { name: 'أنظمة رش الحريق', href: '/fire-sprinkler-systems/' },
    ],
    resourcesTitle: 'الموارد',
    resources: [
      { name: 'دليل التوريد', href: '/sourcing-guide/' },
      { name: 'الورقة البيضاء القطاعية', href: '/whitepaper/' },
      { name: 'الأسئلة الشائعة', href: '/faq/' },
      { name: 'المسرد', href: '/glossary/' },
      { name: 'حاسبة التكاليف', href: '/cost-calculator/' },
    ],
    contactTitle: 'اتصل بنا',
    contact: {
      emailLabel: 'البريد:',
      phoneLabel: 'الهاتف:',
      addressLabel: 'العنوان:',
      addressValue: 'Quanzhou, Fujian, China',
    },
    bottom: {
      linkedin: 'LinkedIn',
      alibaba: 'متجر علي بابا',
      blog: 'المدونة',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      support: 'الدعم',
    },
    copyright: '© {year} Quanzhou Wanlian Fluid Equipment Co., Ltd. جميع الحقوق محفوظة.',
  },
  whatsapp: {
    ariaLabel: 'تواصل معنا عبر واتساب',
    tooltip: 'اتصل بنا',
    defaultMessage: 'مرحباً، أنا مهتم بصماماتكم ومعدات الإطفاء.',
  },
  inquiry: {
    fullName: 'الاسم الكامل *',
    email: 'البريد الإلكتروني *',
    company: 'اسم الشركة',
    country: 'الدولة/المنطقة *',
    countryPlaceholder: 'اختر الدولة/المنطقة',
    product: 'المنتج المطلوب',
    productCol: 'المنتج المطلوب',
    expectedPrice: 'السعر المتوقع',
    quantity: 'الكمية المطلوبة',
    expectedPricePlaceholder: 'مثال: 120 دولار/وحدة',
    quantityPlaceholder: 'مثال: 500',
    message: 'الرسالة والمتطلبات المحددة *',
    messagePlaceholder:
      'يرجى وصف متطلباتكم، الكمية، وأي تخصيص مطلوب...',
    send: 'أرسل الاستفسار الآن',
    sending: 'جارٍ الإرسال...',
    verifyRequired: 'يرجى إكمال التحقق قبل الإرسال.',
    submitFailed: 'فشل الإرسال. حاول مرة أخرى أو تواصل معنا عبر واتساب.',
    successTitle: 'تم إرسال الاستفسار بنجاح!',
    successBody:
      'شكراً لاستفساركم. سيستعرض فريق المبيعات والهندسة لدينا متطلباتكم ويرد خلال 12 ساعة.',
    successWhatsappHint: 'تفضّل المحادثة الفورية؟ تواصل معنا مباشرة عبر واتساب:',
    chatWhatsapp: 'تواصل عبر واتساب',
    sendAnother: '→ أرسل استفساراً آخر',
    waFollowupMessage:
      'مرحبا، لقد أرسلت استفسارا على wanlian911.com وأرغب بمتابعة سريعة.',
  },
  lead: {
    eyebrow: 'اترك بيانات التواصل',
    title: 'اترك بياناتك — سنتواصل معك',
    body:
      'لست مستعدا بعد لكتابة استفسار كامل؟ اترك اسمك ورقم هاتف أو بريد إلكتروني، وسيتواصل معك فريق المبيعات لدينا بمعلومات المنتجات والوثائق وعرض السعر عندما تحتاجها.',
    bullets: [
      'رد خلال 12 ساعة، طوال أيام الأسبوع',
      'واتساب أو بريد إلكتروني أو هاتف — اختيارك',
      'تستخدم بياناتك لمتابعة طلبك فقط، بدون رسائل مزعجة',
    ],
    cardTitle: 'اترك بيانات التواصل الخاصة بك',
    fullName: 'الاسم الكامل *',
    email: 'البريد الإلكتروني *',
    phone: 'الهاتف / واتساب',
    phonePlaceholder: '+971 50 123 4567',
    message: 'المنتج أو المتطلب (اختياري)',
    messagePlaceholder: 'مثال: صمامات بوابة DN50-300، الكمية، ميناء الوجهة...',
    submit: 'اترك بياناتي',
    sending: 'جارٍ الإرسال...',
    verifyRequired: 'يرجى إكمال التحقق قبل الإرسال.',
    submitFailed: 'فشل الإرسال. حاول مرة أخرى أو تواصل معنا عبر واتساب.',
    privacyNote: 'نستخدم بياناتك لمتابعة طلبك فقط. لا رسائل مزعجة، لا مشاركة.',
    successTitle: 'تم استلام بيانات التواصل!',
    successBody: 'شكرا. سيتواصل معك فريق المبيعات خلال 12 ساعة بمعلومات المنتجات وخيارات التسعير.',
    successWhatsappHint: 'تفضل المحادثة الفورية؟ تواصل معنا مباشرة عبر واتساب:',
    chatWhatsapp: 'تواصل عبر واتساب',
    sendAnother: '→ اترك بيانات أخرى',
    waFollowupMessage:
      'مرحبا، لقد تركت بيانات التواصل الخاصة بي على wanlian911.com وأرغب بمتابعة سريعة.',
    floatLabel: 'اترك بياناتك',
    close: 'إغلاق',
  },
  notFound: {
    title: '404 - الصفحة غير موجودة | Wanlian Fluid',
    description:
      'الصفحة التي تبحث عنها غير موجودة. استكشف صمامات Wanlian الصناعية ومعدات الحماية من الحريق.',
    heading: 'الصفحة غير موجودة',
    body: 'قد تكون الصفحة التي تبحث عنها قد نُقلت أو أعيدت تسميتها أو لم تعد موجودة. استكشف كتالوج صماماتنا والحماية من الحريق المعتمد بدلاً من ذلك.',
    backHome: 'العودة للرئيسية',
    browseProducts: 'تصفح المنتجات',
    contactUs: 'اتصل بنا',
  },
};

const pt: UIStrings = {
  nav: [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/products/' },
    { name: 'Aplicações', href: '/applications/' },
    { name: 'Certificados', href: '/certificates/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Sobre Nós', href: '/about/' },
    { name: 'Contato', href: '/contact/' },
  ],
  header: {
    alibabaStore: 'Loja Alibaba',
    inquireNow: 'Solicitar Cotação',
    language: 'Idioma',
    tagline: 'Fabricante e Exportador de Equipamentos de Fluidos',
    languageLabel: { en: 'English', es: 'Español', ru: 'Русский', fr: 'Français', ar: 'العربية', pt: 'Português', de: 'Deutsch', tr: 'Türkçe' },
    allProducts: 'Todos os produtos',
    categoriesTitle: 'Categorias',
    solutionsTitle: 'Soluções',
    search: {
      ariaLabel: 'Pesquisar produtos',
      placeholder: 'Pesquisar produto, modelo ou tamanho…',
      loading: 'Pesquisando…',
      noResults: 'Nenhum produto encontrado para "{q}". Tente um código de modelo (ex: Z41X, SN65), tamanho (ex: DN50) ou material — ou envie uma consulta.',
      viewAll: 'Ver todos os produtos',
      inquiry: 'Não encontrou o que precisa? Envie uma consulta',
      error: 'A pesquisa está temporariamente indisponível. Consulte o catálogo completo ou envie uma consulta.'
    }
  },
  footer: {
    companyName: 'WANLIAN FLUID',
    companyDesc:
      'A Quanzhou Wanlian Fluid Equipment Co., Ltd. fabrica e exporta válvulas, equipamentos de proteção contra incêndio, produtos de controle hidráulico e componentes de sistemas de fluidos a partir de suas próprias linhas de produção em Quanzhou, Fujian, com itens selecionados produzidos por parceiros de fabricação qualificados. Os corpos de válvula são usinados em CNC na própria planta e cada unidade é submetida a testes de pressão de corpo e estanqueidade a ar antes do envio, sob um sistema de gestão da qualidade ISO 9001.',
    tagline: '"Flow Far, Link Global."',
    subscribeTitle: 'Fique Informado',
    subscribeDesc: 'Novos produtos, guias e notícias da fábrica. Sem spam, cancele quando quiser.',
    subscribePlaceholder: 'voce@empresa.com',
    subscribeButton: 'Assinar',
    subscribeSuccess: 'Inscrição confirmada — obrigado!',
    subscribeVerify: 'Complete a verificação antes de enviar.',
    subscribeError: 'Falha ao enviar. Tente novamente.',
    quickLinksTitle: 'Links Rápidos',
    quickLinks: [
      { name: 'Início', href: '/' },
      { name: 'Central de Produtos', href: '/products/' },
      { name: 'Aplicações', href: '/applications/' },
      { name: 'Sobre Nós', href: '/about/' },
      { name: 'Blog', href: '/blog/' },
      { name: 'Contato e Consultas', href: '/contact/' },
    ],
    productSeriesTitle: 'Linha de Produtos',
    productSeries: [
      { name: 'Válvulas e Peças', href: '/products/#category=V%C3%A1lvulas%20e%20Pe%C3%A7as' },
      { name: 'Hidrantes e Conexões de Bomba', href: '/products/#category=Hidrantes%20e%20Conex%C3%B5es%20de%20Bomba' },
      { name: 'Rociadores e Válvulas de Alarme', href: '/products/#category=Rociadores%20e%20V%C3%A1lvulas%20de%20Alarme' },
      { name: 'Canhões Monitora de Incêndio', href: '/products/#category=Canh%C3%B5es%20Monitora%20de%20Inc%C3%AAndio' },
    ],
    solutionsTitle: 'Soluções de Produto',
    solutions: [
      { name: 'Válvulas Contra Incêndio UL', href: '/ul-fire-valves/' },
      { name: 'Canhão Monitora de Incêndio', href: '/fire-water-cannon/' },
      { name: 'Sistemas de Rociadores', href: '/fire-sprinkler-systems/' },
    ],
    resourcesTitle: 'Recursos',
    resources: [
      { name: 'Guia de Aquisição', href: '/sourcing-guide/' },
      { name: 'Documento Técnico', href: '/whitepaper/' },
      { name: 'Perguntas Frequentes', href: '/faq/' },
      { name: 'Glossário', href: '/glossary/' },
      { name: 'Calculadora de Custos', href: '/cost-calculator/' },
    ],
    contactTitle: 'Contato',
    contact: {
      emailLabel: 'E-mail:',
      phoneLabel: 'Telefone:',
      addressLabel: 'Endereço:',
      addressValue: 'Quanzhou, Fujian, China',
    },
    bottom: {
      linkedin: 'LinkedIn',
      alibaba: 'Loja Alibaba',
      blog: 'Blog',
      privacy: 'Privacidade',
      terms: 'Termos',
      support: 'Suporte',
    },
    copyright: '© {year} Quanzhou Wanlian Fluid Equipment Co., Ltd. Todos os direitos reservados.',
  },
  whatsapp: {
    ariaLabel: 'Fale conosco no WhatsApp',
    tooltip: 'Fale Conosco',
    defaultMessage: 'Olá, tenho interesse nas suas válvulas e equipamentos contra incêndio.',
  },
  inquiry: {
    fullName: 'Nome Completo *',
    email: 'E-mail *',
    company: 'Empresa',
    country: 'País/Região *',
    countryPlaceholder: 'Selecione país/região',
    product: 'Produto de Interesse',
    productCol: 'Produto de Interesse',
    expectedPrice: 'Preço Esperado',
    quantity: 'Quantidade Pedida',
    expectedPricePlaceholder: 'ex.: USD 120 / un',
    quantityPlaceholder: 'ex.: 500',
    message: 'Mensagem e Requisitos Específicos *',
    messagePlaceholder: 'Descreva seus requisitos, quantidade e eventuais personalizações...',
    send: 'Enviar Consulta Agora',
    sending: 'Enviando...',
    verifyRequired: 'Complete a verificação antes de enviar.',
    submitFailed: 'Falha no envio. Tente novamente ou fale conosco pelo WhatsApp.',
    successTitle: 'Consulta Enviada com Sucesso!',
    successBody:
      'Obrigado pela sua consulta. Nossa equipe comercial e de engenharia analisará seus requisitos e responderá em até 12 horas.',
    successWhatsappHint: 'Prefere chat instantâneo? Fale conosco direto pelo WhatsApp:',
    chatWhatsapp: 'Chamar no WhatsApp',
    sendAnother: '← Enviar Outra Consulta',
    waFollowupMessage:
      'Olá, acabei de enviar uma consulta no wanlian911.com e gostaria de um acompanhamento rápido.',
  },
  lead: {
    eyebrow: 'Deixe seu Contato',
    title: 'Deixe seu Contato — Nós Retornamos',
    body:
      'Ainda não está pronto para escrever uma consulta completa? Deixe seu nome e um telefone ou e-mail, e nossa equipe comercial entrará em contato com informações do produto, documentação e cotação exatamente quando você precisar.',
    bullets: [
      'Resposta em até 12 horas, 7 dias por semana',
      'WhatsApp, e-mail ou telefone — você escolhe',
      'Seus dados são usados apenas para o seu acompanhamento, sem spam',
    ],
    cardTitle: 'Deixe seus Dados de Contato',
    fullName: 'Nome Completo *',
    email: 'E-mail *',
    phone: 'Telefone / WhatsApp',
    phonePlaceholder: '+55 11 91234 5678',
    message: 'Produto ou Requisito (Opcional)',
    messagePlaceholder: 'ex.: válvulas de gaveta DN50-300, quantidade, porto de destino...',
    submit: 'Deixar Meu Contato',
    sending: 'Enviando...',
    verifyRequired: 'Complete a verificação antes de enviar.',
    submitFailed: 'Falha no envio. Tente novamente ou fale conosco pelo WhatsApp.',
    privacyNote: 'Usamos seus dados apenas para acompanhar sua solicitação. Sem spam, sem compartilhamento.',
    successTitle: 'Dados de Contato Recebidos!',
    successBody:
      'Obrigado. Nossa equipe comercial entrará em contato em até 12 horas com informações do produto e opções de cotação.',
    successWhatsappHint: 'Prefere chat instantâneo? Fale conosco direto pelo WhatsApp:',
    chatWhatsapp: 'Chamar no WhatsApp',
    sendAnother: '← Deixar Outro Contato',
    waFollowupMessage:
      'Olá, acabei de deixar meus dados de contato no wanlian911.com e gostaria de um acompanhamento rápido.',
    floatLabel: 'Deixar Contato',
    close: 'Fechar',
  },
  notFound: {
    title: '404 - Página Não Encontrada | Wanlian Fluid Equipment',
    description:
      'A página que você procura não foi encontrada. Explore as válvulas industriais e equipamentos de proteção contra incêndio da Wanlian Fluid.',
    heading: 'Página Não Encontrada',
    body:
      'A página que você procura pode ter sido movida, renomeada ou deixado de existir. Explore nosso catálogo de válvulas certificadas e de proteção contra incêndio.',
    backHome: 'Voltar ao Início',
    browseProducts: 'Ver Produtos',
    contactUs: 'Fale Conosco',
  },
};

const de: UIStrings = {
  nav: [
    { name: 'Startseite', href: '/' },
    { name: 'Produkte', href: '/products/' },
    { name: 'Anwendungen', href: '/applications/' },
    { name: 'Zertifikate', href: '/certificates/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Über Uns', href: '/about/' },
    { name: 'Kontakt', href: '/contact/' },
  ],
  header: {
    alibabaStore: 'Alibaba-Shop',
    inquireNow: 'Jetzt Anfragen',
    language: 'Sprache',
    tagline: 'Hersteller & Exporteur von Industriearmaturen und Brandschutzausrüstung',
    languageLabel: { en: 'English', es: 'Español', ru: 'Русский', fr: 'Français', ar: 'العربية', pt: 'Português', de: 'Deutsch', tr: 'Türkçe' },
    allProducts: 'Alle Produkte',
    categoriesTitle: 'Kategorien',
    solutionsTitle: 'Lösungen',
    search: {
      ariaLabel: 'Produkte durchsuchen',
      placeholder: 'Produkt, Modell oder Nennweite suchen…',
      loading: 'Suche läuft…',
      noResults: 'Keine Produkte für "{q}" gefunden. Versuchen Sie einen Modellcode (z.B. Z41X, SN65), eine Nennweite (z.B. DN50) oder senden Sie uns eine Anfrage.',
      viewAll: 'Alle Produkte anzeigen',
      inquiry: 'Nicht gefunden, was Sie suchen? Anfrage senden',
      error: 'Die Suche ist vorübergehend nicht verfügbar. Durchsuchen Sie den Gesamtkatalog oder kontaktieren Sie uns direkt.'
    }
  },
  footer: {
    companyName: 'WANLIAN FLUID',
    companyDesc:
      'Quanzhou Wanlian Fluid Equipment Co., Ltd. fertigt und exportiert Armaturen, Brandschutzausrüstung, hydraulische Regelprodukte und Fluidsystemkomponenten aus eigenen Produktionslinien in Quanzhou, Fujian, ergänzt durch qualifizierte Fertigungspartner. Die Ventilkörper werden im eigenen Haus CNC-bearbeitet und jede Einheit wird vor dem Versand einer Gehäusedruck- und Dichtheitsprüfung nach ISO 9001 unterzogen.',
    tagline: '"Flow Far, Link Global."',
    subscribeTitle: 'Bleiben Sie Informiert',
    subscribeDesc: 'Neue Produkte, technische Leitfäden und Werksneuigkeiten. Kein Spam, jederzeit kündbar.',
    subscribePlaceholder: 'ihre.email@unternehmen.de',
    subscribeButton: 'Abonnieren',
    subscribeSuccess: 'Anmeldung bestätigt — vielen Dank!',
    subscribeVerify: 'Bitte bestätigen Sie die Verifizierung vor dem Absenden.',
    subscribeError: 'Übermittlung fehlgeschlagen. Bitte erneut versuchen.',
    quickLinksTitle: 'Direktlinks',
    quickLinks: [
      { name: 'Startseite', href: '/' },
      { name: 'Produktübersicht', href: '/products/' },
      { name: 'Anwendungsbereiche', href: '/applications/' },
      { name: 'Über Uns', href: '/about/' },
      { name: 'Fachblog', href: '/blog/' },
      { name: 'Kontakt & Anfragen', href: '/contact/' },
    ],
    productSeriesTitle: 'Produktserien',
    productSeries: [
      { name: 'Industrieventile & Schmutzfänger', href: '/products/#category=Industrieventile%20%26%20Schmutzf%C3%A4nger' },
      { name: 'Hydranten & Pumpenanschlüsse', href: '/products/#category=Hydranten%20%26%20Pumpenanschl%C3%BCsse' },
      { name: 'Sprinkler & Alarmventile', href: '/products/#category=Sprinkler%20%26%20Alarmventile' },
      { name: 'Löschmonitore & Kanonen', href: '/products/#category=L%C3%B6schmonitore%20%26%20L%C3%B6schkanonen' },
    ],
    solutionsTitle: 'Systemlösungen',
    solutions: [
      { name: 'UL-zertifizierte Brandschutzventile', href: '/ul-fire-valves/' },
      { name: 'Feuerlöschmonitore & Großraumschutz', href: '/fire-water-cannon/' },
      { name: 'Automatische Sprinklersysteme', href: '/fire-sprinkler-systems/' },
    ],
    resourcesTitle: 'Ressourcen',
    resources: [
      { name: 'Technischer Einkaufsratgeber', href: '/sourcing-guide/' },
      { name: 'B2B-Risiko-Whitepaper', href: '/whitepaper/' },
      { name: 'Fachbegriffe-Glossar', href: '/glossary/' },
      { name: 'Kostenrechner', href: '/cost-calculator/' },
      { name: 'Häufige Fragen (FAQ)', href: '/faq/' },
    ],
    contactTitle: 'Kontakt',
    contact: {
      emailLabel: 'E-Mail:',
      phoneLabel: 'Telefon:',
      addressLabel: 'Adresse:',
      addressValue: 'Quanzhou, Fujian, China',
    },
    bottom: {
      linkedin: 'LinkedIn',
      alibaba: 'Alibaba-Shop',
      blog: 'Blog',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
    },
    copyright: '© 2026 Quanzhou Wanlian Fluid Equipment Co., Ltd. Alle Rechte vorbehalten.',
    icp: '',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
  },
  whatsapp: {
    ariaLabel: 'Kontaktieren Sie uns auf WhatsApp',
    tooltip: 'WhatsApp-Kontakt',
    defaultMessage: 'Hallo, ich interessiere mich für Ihre Industrie- und Brandschutzarmaturen.',
  },
  inquiry: {
    fullName: 'Vollständiger Name *',
    email: 'E-Mail *',
    company: 'Unternehmen',
    country: 'Land/Region *',
    countryPlaceholder: 'Land/Region auswählen',
    product: 'Gewünschtes Produkt',
    productCol: 'Gewünschtes Produkt',
    expectedPrice: 'Zielpreis',
    quantity: 'Bedarfsmenge',
    expectedPricePlaceholder: 'z.B. 120 EUR / Stk.',
    quantityPlaceholder: 'z.B. 500',
    message: 'Nachricht und Spezifikationen *',
    messagePlaceholder: 'Beschreiben Sie Nennweite, Druckstufe, Normen und individuelle Anforderungen...',
    send: 'Anfrage Jetzt Absenden',
    sending: 'Wird gesendet…',
    verifyRequired: 'Bitte Verifizierung vor dem Absenden abschließen.',
    submitFailed: 'Übermittlung fehlgeschlagen. Bitte erneut versuchen oder WhatsApp nutzen.',
    successTitle: 'Anfrage Erfolgreich Übermittelt!',
    successBody:
      'Vielen Dank für Ihre Anfrage. Unser Vertriebs- und Ingenieurteam prüft Ihre Spezifikationen und antwortet innerhalb von 12 Stunden.',
    successWhatsappHint: 'Bevorzugen Sie direkten Chat? Kontaktieren Sie uns auf WhatsApp:',
    chatWhatsapp: 'Auf WhatsApp Chatten',
    sendAnother: '← Weitere Anfrage Senden',
    waFollowupMessage:
      'Hallo, ich habe gerade eine Anfrage auf wanlian911.com eingereicht und bitte um kurze Rückmeldung.',
  },
  lead: {
    eyebrow: 'Kontaktaufnahme',
    title: 'Kontaktdaten Hinterlassen — Wir Melden Uns',
    body:
      'Sie möchten noch keine detaillierte Anfrage schreiben? Hinterlassen Sie Ihren Namen und Telefonnummer oder E-Mail — unser Vertriebsteam meldet sich mit Produktdaten, Dokumenten und Preisoptionen.',
    bullets: [
      'Rückmeldung innerhalb von 12 Stunden, an 7 Tagen die Woche',
      'WhatsApp, E-Mail oder Telefon — ganz nach Wunsch',
      'Ihre Daten werden ausschließlich zur Bearbeitung verwendet, kein Spam',
    ],
    cardTitle: 'Ihre Kontaktdaten',
    fullName: 'Vollständiger Name *',
    email: 'E-Mail-Adresse *',
    phone: 'Telefon / WhatsApp',
    phonePlaceholder: '+49 170 1234567',
    message: 'Produkt oder Anforderung (Optional)',
    messagePlaceholder: 'z.B. Absperrschieber DN50-300, Menge, Bestimmungshafen...',
    submit: 'Kontaktinfo Hinterlassen',
    sending: 'Wird gesendet…',
    verifyRequired: 'Bitte Verifizierung abschließen.',
    submitFailed: 'Übermittlung fehlgeschlagen. Bitte erneut versuchen oder WhatsApp nutzen.',
    privacyNote: 'Wir nutzen Ihre Daten ausschließlich für diese Anfrage. Kein Spam, keine Weitergabe.',
    successTitle: 'Kontaktdaten Erhalten!',
    successBody:
      'Vielen Dank. Unser Vertriebsteam meldet sich innerhalb von 12 Stunden mit Produktunterlagen und Angebotsoptionen.',
    successWhatsappHint: 'Bevorzugen Sie direkten Chat? Kontaktieren Sie uns auf WhatsApp:',
    chatWhatsapp: 'Auf WhatsApp Chatten',
    sendAnother: '← Weitere Kontaktdaten Hinterlassen',
    waFollowupMessage:
      'Hallo, ich habe gerade meine Kontaktdaten auf wanlian911.com hinterlassen und bitte um zeitnahe Kontaktaufnahme.',
    floatLabel: 'Direktanfrage',
    close: 'Schließen',
  },
  notFound: {
    title: '404 - Seite Nicht Gefunden | Wanlian Fluid Equipment',
    description:
      'Die gewünschte Seite wurde nicht gefunden. Entdecken Sie zertifizierte Industriearmaturen und Brandschutztechnik von Wanlian Fluid.',
    heading: 'Seite Nicht Gefunden',
    body:
      'Die aufgerufene Seite existiert leider nicht oder wurde verschoben. Durchsuchen Sie unser zertifiziertes Sortiment an Industrie- und Brandschutzventilen.',
    backHome: 'Zur Startseite',
    browseProducts: 'Produkte Entdecken',
    contactUs: 'Kontakt Aufnehmen',
  },
};

const tr: UIStrings = {
  nav: [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Ürünler', href: '/products/' },
    { name: 'Uygulamalar', href: '/applications/' },
    { name: 'Sertifikalar', href: '/certificates/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Hakkımızda', href: '/about/' },
    { name: 'İletişim', href: '/contact/' },
  ],
  header: {
    alibabaStore: 'Alibaba Mağazası',
    inquireNow: 'Teklif Alın',
    language: 'Dil',
    tagline: 'Endüstriyel Vana ve Yangın Güvenlik Ekipmanları Üreticisi ve İhracatçısı',
    languageLabel: { en: 'English', es: 'Español', ru: 'Русский', fr: 'Français', ar: 'العربية', pt: 'Português', de: 'Deutsch', tr: 'Türkçe' },
    allProducts: 'Tüm Ürünler',
    categoriesTitle: 'Kategoriler',
    solutionsTitle: 'Çözümler',
    search: {
      ariaLabel: 'Ürünleri arayın',
      placeholder: 'Ürün adı, model veya anma çapı arayın…',
      loading: 'Aranıyor…',
      noResults: '"{q}" ile eşleşen ürün bulunamadı. Bir model kodu (örn. Z41X, SN65) veya çap (örn. DN50) deneyin ya da bize bir talep gönderin.',
      viewAll: 'Tüm ürünleri görüntüleyin',
      inquiry: 'Aradığınızı bulamadınız mı? Talep gönderin',
      error: 'Arama geçici olarak kullanılamıyor. Kataloğu inceleyin veya doğrudan bizimle iletişime geçin.'
    }
  },
  footer: {
    companyName: 'WANLIAN FLUID',
    companyDesc:
      'Quanzhou Wanlian Fluid Equipment Co., Ltd., Quanzhou, Fujian\'daki kendi üretim hatlarında vanalar, yangın koruma ekipmanları, hidrolik kontrol ürünleri ve akışkan sistem bileşenleri üretmekte ve ihraç etmektedir. Vana gövdeleri bünyemizde CNC ile işlenmekte ve her bir ünite sevkiyat öncesinde ISO 9001 kalite yönetim sistemi kapsamında gövde basıncı ve sızdırmazlık testinden geçirilmektedir.',
    tagline: '"Flow Far, Link Global."',
    subscribeTitle: 'Güncel Kalın',
    subscribeDesc: 'Yeni ürünler, teknik kılavuzlar ve fabrika haberleri. Spam yok, dilediğiniz zaman abonelikten çıkabilirsiniz.',
    subscribePlaceholder: 'eposta@sirketiniz.com',
    subscribeButton: 'Abone Ol',
    subscribeSuccess: 'Abonelik onaylandı — teşekkür ederiz!',
    subscribeVerify: 'Lütfen göndermeden önce doğrulama kontrolünü tamamlayın.',
    subscribeError: 'Gönderim başarısız oldu. Lütfen tekrar deneyin.',
    quickLinksTitle: 'Hızlı Bağlantılar',
    quickLinks: [
      { name: 'Ana Sayfa', href: '/' },
      { name: 'Ürün Merkezi', href: '/products/' },
      { name: 'Uygulama Alanları', href: '/applications/' },
      { name: 'Hakkımızda', href: '/about/' },
      { name: 'Teknik Blog', href: '/blog/' },
      { name: 'İletişim & Teklif', href: '/contact/' },
    ],
    productSeriesTitle: 'Ürün Serileri',
    productSeries: [
      { name: 'Endüstriyel Vanalar & Pislik Tutucular', href: '/products/#category=End%C3%BCstriyel%20Vanalar%20%26%20Pislik%20Tutucular' },
      { name: 'Yangın Hidrantları & Pompa Bağlantıları', href: '/products/#category=Yang%C4%B1n%20Hidrantlar%C4%B1%20%26%20Pompa%20Ba%C4%9Flant%C4%B1lar%C4%B1' },
      { name: 'Yangın Sprinkleri & Alarm Vanaları', href: '/products/#category=Yang%C4%B1n%20Sprinkleri%20%26%20Alarm%20Vanalar%C4%B1' },
      { name: 'Yangın Monitörleri & Su Topları', href: '/products/#category=Yang%C4%B1n%20Monit%C3%B6rleri%20%26%20Su%20Toplar%C4%B1' },
    ],
    solutionsTitle: 'Sistem Çözümleri',
    solutions: [
      { name: 'UL Listeli Yangın Vanaları', href: '/ul-fire-valves/' },
      { name: 'Yangın Monitörleri & Geniş Alan Koruması', href: '/fire-water-cannon/' },
      { name: 'Otomatik Yangın Sprinkler Sistemleri', href: '/fire-sprinkler-systems/' },
    ],
    resourcesTitle: 'Kaynaklar',
    resources: [
      { name: 'Teknik Satın Alma Rehberi', href: '/sourcing-guide/' },
      { name: 'B2B Risk Raporu (Whitepaper)', href: '/whitepaper/' },
      { name: 'Endüstriyel Terimler Sözlüğü', href: '/glossary/' },
      { name: 'Maliyet Hesaplayıcı', href: '/cost-calculator/' },
      { name: 'Sıkça Sorulan Sorular (SSS)', href: '/faq/' },
    ],
    contactTitle: 'İletişim',
    contact: {
      emailLabel: 'E-posta:',
      phoneLabel: 'Telefon:',
      addressLabel: 'Adres:',
      addressValue: 'Quanzhou, Fujian, Çin',
    },
    bottom: {
      linkedin: 'LinkedIn',
      alibaba: 'Alibaba Mağazası',
      blog: 'Blog',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Koşulları',
    },
    copyright: '© 2026 Quanzhou Wanlian Fluid Equipment Co., Ltd. Tüm hakları saklıdır.',
    icp: '',
    privacy: 'Gizlilik',
    terms: 'Koşullar',
  },
  whatsapp: {
    ariaLabel: 'WhatsApp üzerinden bizimle iletişime geçin',
    tooltip: 'WhatsApp Destek',
    defaultMessage: 'Merhaba, endüstriyel vanalarınız ve yangın koruma ekipmanlarınızla ilgileniyorum. Lütfen ürün kataloğu ve fiyat listesi gönderin.',
  },
  inquiry: {
    fullName: 'Ad Soyad *',
    email: 'İş E-postası *',
    company: 'Şirket Adı',
    country: 'Ülke / Bölge *',
    countryPlaceholder: 'Ülke/bölge seçin',
    product: 'İlgilenilen Ürün',
    productCol: 'İlgilenilen Ürün',
    expectedPrice: 'Hedef Fiyat',
    quantity: 'Talep Miktarı',
    expectedPricePlaceholder: 'örn. 120 USD / adet',
    quantityPlaceholder: 'örn. 500 adet',
    message: 'Proje Özellikleri ve Talepler *',
    messagePlaceholder: 'Anma çapı, basınç sınıfı (PN10/16/25), flanş standardı, akışkan cinsi ve sertifikasyon taleplerini belirtin...',
    send: 'Talebi Hemen Gönderin',
    sending: 'Gönderiliyor…',
    verifyRequired: 'Lütfen göndermeden önce doğrulamayı tamamlayın.',
    submitFailed: 'Gönderim başarısız oldu. Lütfen tekrar deneyin veya WhatsApp ile iletişime geçin.',
    successTitle: 'Talebiniz Başarıyla Gönderildi!',
    successBody:
      'Talebiniz için teşekkür ederiz. Mühendislik ve ihracat ekibimiz gereksinimlerinizi inceleyerek 12 saat içinde size dönüş yapacaktır.',
    successWhatsappHint: 'Anlık mesajlaşmayı mı tercih edersiniz? WhatsApp üzerinden doğrudan ulaşın:',
    chatWhatsapp: 'WhatsApp ile Sohbet Edin',
    sendAnother: '← Başka Bir Talep Gönder',
    waFollowupMessage:
      'Merhaba, wanlian911.com üzerinden az önce bir teklif talebi gönderdim ve hızlı geri dönüş rica ediyorum.',
  },
  lead: {
    eyebrow: 'Hızlı İletişim',
    title: 'İletişim Bilgilerinizi Bırakın — Size Ulaşalım',
    body:
      'Ayrıntılı bir teklif formu doldurmaya vaktiniz yok mu? Adınızı ve telefon numaranızı veya e-postanızı bırakın; ihracat ekibimiz teknik katalog ve fiyat seçenekleriyle sizinle iletişime geçsin.',
    bullets: [
      'Haftanın 7 günü, 12 saat içinde geri dönüş',
      'WhatsApp, e-posta veya telefon — tercihiniz',
      'Bilgileriniz yalnızca talebiniz için kullanılır, spam gönderilmez',
    ],
    cardTitle: 'İletişim Bilgilerinizi Bırakın',
    fullName: 'Ad Soyad *',
    email: 'E-posta Adresi *',
    phone: 'Telefon / WhatsApp',
    phonePlaceholder: '+90 532 123 4567',
    message: 'Ürün veya Gereksinim (İsteğe Bağlı)',
    messagePlaceholder: 'örn. Sürgülü vana DN50-300, miktar, teslimat limanı...',
    submit: 'Bilgilerimi Bırak',
    sending: 'Gönderiliyor…',
    verifyRequired: 'Lütfen doğrulamayı tamamlayın.',
    submitFailed: 'Gönderim başarısız oldu. Lütfen tekrar deneyin veya WhatsApp kullanın.',
    privacyNote: 'Bilgileriniz yalnızca talebinizi yanıtlamak için kullanılır. Paylaşılmaz.',
    successTitle: 'İletişim Bilgileriniz Alındı!',
    successBody:
      'Teşekkür ederiz. Satış ekibimiz 12 saat içinde ürün bilgileri ve teklif seçenekleriyle sizinle iletişime geçecektir.',
    successWhatsappHint: 'Anlık mesajlaşmayı mı tercih edersiniz? WhatsApp üzerinden doğrudan ulaşın:',
    chatWhatsapp: 'WhatsApp ile Sohbet Edin',
    sendAnother: '← Başka İletişim Bilgisi Bırak',
    waFollowupMessage:
      'Merhaba, wanlian911.com sitesine iletişim bilgilerimi bıraktım ve bilgi rica ediyorum.',
    floatLabel: 'Hızlı Teklif',
    close: 'Kapat',
  },
  notFound: {
    title: '404 - Sayfa Bulunamadı | Wanlian Fluid Equipment',
    description:
      'Aradığınız sayfa bulunamadı. Wanlian Fluid\'in sertifikalı endüstriyel vana ve yangın güvenlik ekipmanı kataloğunu inceleyin.',
    heading: 'Sayfa Bulunamadı',
    body:
      'Aradığınız sayfa taşınmış, adı değiştirilmiş veya kaldırılmış olabilir. Sertifikalı endüstriyel ve yangın vanaları ürün yelpazemizi inceleyebilirsiniz.',
    backHome: 'Ana Sayfaya Dön',
    browseProducts: 'Ürünleri İnceleyin',
    contactUs: 'Bizimle İletişime Geçin',
  },
};

export const ui: Record<Locale, UIStrings> = { en, es, ru, fr, ar, pt, de, tr };

/** 按语言取字典；缺省回退 en（保证接口容错）。 */
export function t(locale: Locale): UIStrings {
  return ui[locale] ?? ui.en;
}

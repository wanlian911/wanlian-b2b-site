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
    tagline: 'Professional B2B Fluid Equipment Supplier',
    languageLabel: { en: 'English', es: 'Español' },
  },
  footer: {
    companyName: 'WANLIAN FLUID',
    companyDesc:
      'Quanzhou Wanlian Fluid Equipment Co., Ltd. is a professional fluid-equipment enterprise integrating R&D, sales and service, with production carried out at cooperative manufacturing bases in accordance with the ISO9001 Quality Management System.',
    tagline: '"Flow Far, Link Global."',
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
      { name: 'Gate Valve Series', href: '/products/#category=Gate%20Valves' },
      { name: 'Check Valve Series', href: '/products/#category=Check%20Valves' },
      { name: 'Butterfly Valve Series', href: '/products/#category=Butterfly%20Valves' },
      { name: 'Fire Protection Series', href: '/products/#category=Firefighting%20Equipment' },
    ],
    solutionsTitle: 'Product Solutions',
    solutions: [
      { name: 'UL Listed Fire Valves', href: '/ul-fire-valves/' },
      { name: 'Fire Water Cannon', href: '/fire-water-cannon/' },
      { name: 'Fire Sprinkler Systems', href: '/fire-sprinkler-systems/' },
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
    tagline: 'Proveedor Profesional B2B de Equipos de Fluidos',
    languageLabel: { en: 'English', es: 'Español' },
  },
  footer: {
    companyName: 'WANLIAN FLUID',
    companyDesc:
      'Quanzhou Wanlian Fluid Equipment Co., Ltd. es una empresa profesional de equipos de fluidos que integra I+D, ventas y servicio, con producción realizada en bases de fabricación cooperativas conforme al Sistema de Gestión de Calidad ISO9001.',
    tagline: '"Flow Far, Link Global."',
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
      { name: 'Serie Válvulas de Compuerta', href: '/products/#category=Gate%20Valves' },
      { name: 'Serie Válvulas de Retención', href: '/products/#category=Check%20Valves' },
      { name: 'Serie Válvulas de Mariposa', href: '/products/#category=Butterfly%20Valves' },
      { name: 'Serie Protección Contra Incendios', href: '/products/#category=Firefighting%20Equipment' },
    ],
    solutionsTitle: 'Soluciones de Producto',
    solutions: [
      { name: 'Válvulas Contra Incendios UL', href: '/ul-fire-valves/' },
      { name: 'Cañón Monitor Contra Incendios', href: '/fire-water-cannon/' },
      { name: 'Sistemas de Rociadores', href: '/fire-sprinkler-systems/' },
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

export const ui: Record<Locale, UIStrings> = { en, es };

/** 按语言取字典；缺省回退 en（保证接口容错）。 */
export function t(locale: Locale): UIStrings {
  return ui[locale] ?? ui.en;
}

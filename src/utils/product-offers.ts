// Offer Schema 统一常量与生成器（B2B 询盘制：PriceSpecification 询价描述，零具体价格）
// 依据：wanlian911_SEO修复总交付包_20260911 / patch_offer_schema
import { LOCALE_PREFIX, type Locale } from '../i18n/locales';

export const OFFER_SELLER = {
  '@type': 'Organization',
  name: 'Quanzhou Wanlian Fluid Equipment Co., Ltd.',
  url: 'https://wanlian911.com/about/'
};

export const OFFER_PRICE_SPEC = {
  '@type': 'PriceSpecification',
  priceCurrency: 'USD',
  value: {
    '@type': 'QuantitativeValue',
    minValue: 0
  },
  description: 'Price available on request (B2B inquiry / quotation based on specification, quantity and destination port).'
};

// 14 个页面带有从该页 FAQ 原文提取的 MOQ / lead time 描述（交付包 _master_mapping.csv has_mrqo_desc=Y）
export const OFFER_MOQ_DESCRIPTIONS: Record<string, string> = {
  'resilient-seat-flanged-gate-valve-z41x': 'Standard MOQ is typically 20 units per model for stock sizes, with production lead times of 15-30 days depending on quantity and customization. Sample orders are available for pre-shipment testing. Price on request.',
  'telescopic-resilient-seat-gate-valve-z41x-t': 'Standard MOQ is typically 20 units per model for stock sizes, with production lead times of 15-30 days depending on quantity and customization. Sample orders are available for pre-shipment testing. Price on request.',
  'flange-manual-bellows-gate-valve': 'Standard MOQ is typically 20 units per model for stock sizes, with production lead times of 15-30 days depending on quantity and customization. Sample orders are available for pre-shipment testing. Price on request.',
  'z85x-stainless-steel-grooved-gate-valve': 'Standard MOQ is typically 20 units per model for stock sizes, with production lead times of 15-30 days depending on quantity and customization. Sample orders are available for pre-shipment testing. Price on request.',
  'brass-gate-valve-z15w-16t': 'Standard MOQ is typically 20 units per model for stock sizes, with production lead times of 15-30 days depending on quantity and customization. Sample orders are available for pre-shipment testing. Price on request.',
  'ul-fm-resilient-seat-osy-gate-valve': 'Standard MOQ is typically 20 units per model for stock sizes, with production lead times of 15-30 days depending on quantity and customization. Sample orders are available for pre-shipment testing. Price on request.',
  'd381x-16q-grooved-butterfly-valve': 'Standard MOQ is typically 20 units per model for stock sizes, with production lead times of 15-30 days depending on quantity and customization. Sample orders are available for pre-shipment testing. Price on request.',
  'wafer-type-butterfly-valve-d71x': 'Standard MOQ is typically 20 units per model for stock sizes, with production lead times of 15-30 days depending on quantity and customization. Sample orders are available for pre-shipment testing. Price on request.',
  'signal-grooved-wafer-butterfly-valve-dn80': 'Standard MOQ is typically 20 units per model for stock sizes, with production lead times of 15-30 days depending on quantity and customization. Sample orders are available for pre-shipment testing. Price on request.',
  'sliding-ball-check-valve-hq41x': 'Standard MOQ is typically 20 units per model for stock sizes, with production lead times of 15-30 days depending on quantity and customization. Sample orders are available for pre-shipment testing. Price on request.',
  'spherical-ball-check-valve-hq44x': 'Standard MOQ is typically 20 units per model for stock sizes, with production lead times of 15-30 days depending on quantity and customization. Sample orders are available for pre-shipment testing. Price on request.',
  'telescopic-y-strainer-sgl41h': 'Standard MOQ is typically 20 units per model for stock sizes, with production lead times of 15-30 days depending on quantity and customization. Sample orders are available for pre-shipment testing. Price on request.',
  'sp45f-flange-digital-balancing-valve': 'Standard MOQ is typically 20 units per model for stock sizes, with production lead times of 15-30 days depending on quantity and customization. Sample orders are available for pre-shipment testing. Price on request.',
  'ul-fire-valves': 'MOQ depends on valve type and size — typically 10–20 units per model for stock sizes, with production lead times of 15–30 days. Sample orders are available for pre-shipment testing Price on request.'
};

/**
 * 生成产品页 Offer 对象：url 指向该页真实专属询盘链接 /{locale}/contact/?product=<产品名>。
 * name 与页面 JSON-LD 的 Product.name 一致；slug 用于匹配 14 条 MOQ 描述（仅 EN 页，文案取自 EN 页 FAQ 原文）。
 */
export function buildOffer(name: string, locale: Locale, slug?: string) {
  const prefix = LOCALE_PREFIX[locale];
  const offer: Record<string, unknown> = {
    '@type': 'Offer',
    url: `https://wanlian911.com${prefix}/contact/?product=${encodeURIComponent(name)}`,
    availability: 'http://schema.org/InStock',
    priceCurrency: 'USD',
    priceSpecification: OFFER_PRICE_SPEC,
    seller: OFFER_SELLER
  };
  const moqDesc = locale === 'en' && slug ? OFFER_MOQ_DESCRIPTIONS[slug] : undefined;
  if (moqDesc) offer.description = moqDesc;
  return offer;
}

// 页头产品搜索索引 endpoint：构建时按语言预渲染紧凑 JSON（/search-index/<locale>.json，双扩展名强制 .json 输出）。
// 条目仅含客户端匹配所需字段：
//   n = 本地化产品名 / c = 本地化分类 / i = 缩略图 / u = 本地化产品页 URL / q = 小写匹配字段
// q 由「名称 + 分类 + slug + 规格键值 + 特性」拼成，覆盖型号（Z41X）、口径（DN50）、压力（PN16）、材质等常见查询词。
// 数据源与各语言产品页同源（fr 为 42 条，其余 45 条），保证索引不指向不存在的页面。
import type { APIRoute } from 'astro';
import { SUPPORTED_LOCALES, localizePath, type Locale } from '../../i18n/locales';
import { products, type Product } from '../../utils/products';
import { productsEs } from '../../utils/products.es';
import { productsRu } from '../../utils/products.ru';
import { productsFr } from '../../utils/products.fr';
import { productsAr } from '../../utils/products.ar';

const productsByLocale: Record<Locale, Product[]> = {
  en: products,
  es: productsEs,
  ru: productsRu,
  fr: productsFr,
  ar: productsAr
};

// 阿拉伯语去掉变音符号（tashkeel），查询端做同样归一化以提升命中率
const stripDiacritics = (s: string) => s.replace(/[\u0610-\u061A\u064B-\u065F\u0670]/g, '');

function haystack(p: Product): string {
  const specEntries = p.specs ? Object.entries(p.specs).map(([k, v]) => `${k} ${v}`).join(' ') : '';
  return stripDiacritics(
    [p.name, p.category, p.slug, specEntries, (p.features ?? []).slice(0, 4).join(' ')].join(' ')
  ).toLowerCase();
}

export function getStaticPaths() {
  return SUPPORTED_LOCALES.map((locale) => ({ params: { locale } }));
}

export const GET: APIRoute = ({ params }) => {
  const locale = (SUPPORTED_LOCALES as string[]).includes(params.locale ?? '')
    ? (params.locale as Locale)
    : 'en';
  const list = productsByLocale[locale];
  const entries = list.map((p) => ({
    n: p.name,
    c: p.category,
    i: p.image,
    u: localizePath(`/products/${p.slug}/`, locale),
    q: haystack(p)
  }));
  return new Response(JSON.stringify(entries), {
    headers: { 'content-type': 'application/json; charset=utf-8' }
  });
};

// Locale 常量与路径工具
// EN 始终位于根路径（SEO 资产零回归）；非默认语言（es…）使用 /xx/ 前缀子目录。

export type Locale = 'en' | 'es';

export const DEFAULT_LOCALE: Locale = 'en';
export const SUPPORTED_LOCALES: Locale[] = ['en', 'es'];

/** 语言在 URL 中的目录前缀：en 无前缀，其余语言带 /xx 前缀。 */
export const LOCALE_PREFIX: Record<Locale, string> = {
  en: '',
  es: '/es',
};

/** 根据当前路径推导语言。 */
export function localeFromPath(pathname: string): Locale {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
}

/** 为指定语言生成带前缀的路径（en 保持原样）。 */
export function localizePath(pathname: string, locale: Locale): string {
  if (locale === 'en') return pathname === '' ? '/' : pathname;
  const base = pathname === '/' || pathname === '' ? '/' : pathname;
  return `${LOCALE_PREFIX.es}${base}`;
}

/** 去掉语言前缀，返回该页面在 en（根路径）下的地址。 */
export function stripLocale(pathname: string, locale: Locale): string {
  if (locale === 'en') return pathname === '' ? '/' : pathname;
  const rest = pathname.replace(/^\/es\/?/, '');
  return rest === '' ? '/' : `/${rest}`;
}

/**
 * 已提供西语版本的页面（前缀匹配）。'/' 仅精确匹配首页；
 * 其余条目（如 '/products/'）前缀匹配，覆盖该前缀下全部子路径（含动态产品页）。
 * M2 覆盖：产品库、静态页、5 个系统 hub 页。guides/tags/blog 留 M3。
 * 用于避免语言切换/页脚链接指向尚未翻译的 404 页面。
 */
const ES_PREFIXES: string[] = [
  '/',
  '/products/',
  '/about/',
  '/certificates/',
  '/applications/',
  '/contact/',
  '/privacy/',
  '/terms/',
  '/backflow-prevention/',
  '/fire-hydrant-systems/',
  '/fire-sprinkler-systems/',
  '/fire-water-cannon/',
  '/ul-fire-valves/',
];

/** 目标路径在 es 下是否已有真实页面（EN 恒真；容忍无尾斜杠与 hash/query）。 */
export function isTranslated(pathname: string, locale: Locale): boolean {
  if (locale === 'en') return true;
  const clean = pathname.split(/[?#]/)[0];
  const norm = clean.endsWith('/') ? clean : `${clean}/`;
  if (norm === '/') return true;
  return ES_PREFIXES.some(prefix => prefix !== '/' && norm.startsWith(prefix));
}

/** 为指定语言生成安全链接：目标语言无此页时回退到该语言首页（保留原 hash）。 */
export function safeHref(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  const [clean, ...hashParts] = path.split('#');
  const hash = hashParts.length ? `#${hashParts.join('#')}` : '';
  const target = isTranslated(clean, locale) ? localizePath(clean, locale) : localizePath('/', locale);
  return hash ? `${target}${hash}` : target;
}

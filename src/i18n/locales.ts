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
 * 已提供西语版本的页面（精确匹配根路径集合）。
 * M1：仅首页；M2 起随翻译进度扩充（/products/、/about/ …）。
 * 用于避免语言切换/页脚链接指向尚未翻译的 404 页面。
 */
const ES_PAGES_EXACT: string[] = ['/'];

/** 目标路径在 es 下是否已有真实页面。 */
export function isTranslated(pathname: string, locale: Locale): boolean {
  if (locale === 'en') return true;
  return ES_PAGES_EXACT.includes(pathname);
}

/** 为指定语言生成安全链接：目标语言无此页时回退到该语言首页。 */
export function safeHref(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return isTranslated(path, locale) ? localizePath(path, locale) : localizePath('/', locale);
}

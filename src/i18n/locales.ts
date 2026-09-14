// Locale 常量与路径工具（N 语言驱动）
// 默认语言（en）始终位于根路径（SEO 资产零回归）；其他语言使用 /xx/ 前缀子目录。
// 新增语言只需：1) 扩展 Locale 类型  2) 在下方映射表中登记  3) 提供页面与字典。

export type Locale = 'en' | 'es' | 'ru' | 'fr' | 'ar';

export const DEFAULT_LOCALE: Locale = 'en';

export const SUPPORTED_LOCALES: Locale[] = ['en', 'es', 'ru', 'fr', 'ar'];

/** 非默认语言（URL 带前缀）。 */
export const PREFIXED_LOCALES: Locale[] = SUPPORTED_LOCALES.filter(locale => locale !== DEFAULT_LOCALE);

/** 语言自称（用于语言切换器与 hreflang 提示）。 */
export const LOCALE_LABEL: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  ru: 'Русский',
  fr: 'Français',
  ar: 'العربية',
};

/** 书写方向（RTL 语言预留）。 */
export const LOCALE_DIR: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  es: 'ltr',
  ru: 'ltr',
  fr: 'ltr',
  ar: 'rtl',
};

/** hreflang 值。 */
export const LOCALE_HREFLANG: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  ru: 'ru',
  fr: 'fr',
  ar: 'ar',
};

/** 语言在 URL 中的目录前缀：默认语言无前缀，其余带 /xx 前缀。 */
export const LOCALE_PREFIX: Record<Locale, string> = {
  en: '',
  es: '/es',
  ru: '/ru',
  fr: '/fr',
  ar: '/ar',
};

/** 根据当前路径推导语言。 */
export function localeFromPath(pathname: string): Locale {
  for (const locale of PREFIXED_LOCALES) {
    const prefix = LOCALE_PREFIX[locale];
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return locale;
  }
  return DEFAULT_LOCALE;
}

/** 为指定语言生成带前缀的路径（默认语言保持原样）。 */
export function localizePath(pathname: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return pathname === '' ? '/' : pathname;
  const base = pathname === '/' || pathname === '' ? '/' : pathname;
  return `${LOCALE_PREFIX[locale]}${base}`;
}

/** 去掉语言前缀，返回该页面在默认语言（根路径）下的地址。 */
export function stripLocale(pathname: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return pathname === '' ? '/' : pathname;
  const prefix = LOCALE_PREFIX[locale];
  const rest = pathname.replace(new RegExp(`^${prefix}/?`), '');
  return rest === '' ? '/' : `/${rest}`;
}

/**
 * 各语言已提供翻译的页面（前缀匹配）。
 * '/' 仅精确匹配首页；其余条目（如 '/products/'）前缀匹配，覆盖该前缀下全部子路径。
 * 用于避免语言切换/页脚链接指向尚未翻译的 404 页面，并驱动 hreflang 输出。
 */
const TRANSLATED_PREFIXES: Record<Locale, string[]> = {
  en: ['/'],
  es: [
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
    '/guides/',
    '/blog/',
    '/tags/',
    '/sourcing-guide/',
    '/whitepaper/',
    '/glossary/',
    '/cost-calculator/',
  ],
  ru: [
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
    '/guides/',
    '/blog/',
    '/tags/',
    '/sourcing-guide/',
    '/whitepaper/',
    '/glossary/',
    '/cost-calculator/',
  ],
  // FR 全量：核心 14 页 + 29 指南 + blog/tags + 内容工厂静态页。
  fr: [
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
    '/guides/',
    '/blog/',
    '/tags/',
    '/sourcing-guide/',
    '/whitepaper/',
    '/glossary/',
    '/cost-calculator/',
  ],
  // AR 全量：核心 14 页 + 29 篇指南 + blog/tags + 内容工厂静态页（RTL）。
  ar: [
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
    '/guides/',
    '/blog/',
    '/tags/',
    '/sourcing-guide/',
    '/whitepaper/',
    '/glossary/',
    '/cost-calculator/',
  ],
};

/**
 * 该语言是否已上线（至少有一个翻译页面）。
 * 用于语言切换器：语言上线后自动出现在切换列表中（含未翻译页面回退首页的链接）。
 */
export function isLocaleActive(locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  return (TRANSLATED_PREFIXES[locale] ?? []).length > 0;
}

/** 已上线的语言列表（默认语言始终在列）。 */
export function activeLocales(): Locale[] {
  return SUPPORTED_LOCALES.filter(isLocaleActive);
}

/** 目标路径在该语言下是否已有真实页面（默认语言恒真；容忍无尾斜杠与 hash/query）。 */
export function isTranslated(pathname: string, locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  const clean = pathname.split(/[?#]/)[0];
  const norm = clean.endsWith('/') ? clean : `${clean}/`;
  const prefixes = TRANSLATED_PREFIXES[locale] ?? [];
  if (norm === '/') return prefixes.includes('/');
  return prefixes.some(prefix => prefix !== '/' && norm.startsWith(prefix));
}

/** 为指定语言生成安全链接：目标语言无此页时回退到该语言首页（保留原 hash）。 */
export function safeHref(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  const [clean, ...hashParts] = path.split('#');
  const hash = hashParts.length ? `#${hashParts.join('#')}` : '';
  const target = isTranslated(clean, locale) ? localizePath(clean, locale) : localizePath('/', locale);
  return hash ? `${target}${hash}` : target;
}

/**
 * 某页面当前已有哪些语言版本（含默认语言）——用于 hreflang 与语言切换器。
 * 以“默认语言路径”为基准判断各语言是否已翻译该页。
 */
export function availableLocalesFor(pathname: string, current: Locale): Locale[] {
  const enPath = stripLocale(pathname, current);
  return SUPPORTED_LOCALES.filter(
    locale => locale === DEFAULT_LOCALE || locale === current || isTranslated(enPath, locale)
  );
}

/** 该页面在各语言下的绝对路径（未翻译的语言回退到该语言首页）。 */
export function localeHrefFor(enPath: string, locale: Locale): string {
  return isTranslated(enPath, locale) ? localizePath(enPath, locale) : localizePath('/', locale);
}

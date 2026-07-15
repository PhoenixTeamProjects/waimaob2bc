export type Locale = 'zh' | 'en';

export const defaultLocale: Locale = 'zh';

export const locales: Locale[] = ['zh', 'en'];

export const localeLabels: Record<Locale, string> = {
  zh: '中文',
  en: 'English'
};

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh';
}

export function stripLocaleFromPath(pathname: string) {
  if (pathname === '/en') {
    return '/';
  }

  if (pathname.startsWith('/en/')) {
    return pathname.replace(/^\/en/, '') || '/';
  }

  return pathname || '/';
}

export function localizePath(path: string, locale: Locale) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (locale === 'zh') {
    return normalizedPath;
  }

  if (normalizedPath === '/') {
    return '/en/';
  }

  return `/en${normalizedPath}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'zh' ? 'en' : 'zh';
}

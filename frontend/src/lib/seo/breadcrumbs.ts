import { localizePath, type Locale } from '@/config/i18n';
import { siteConfig } from '@/config/site';
import { getRoutePage } from '@/data/route-pages';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

function normalizePath(path: string) {
  if (path === '/') {
    return '/';
  }

  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
}

function getParentPath(path: string) {
  const segments = normalizePath(path)
    .replace(/^\/|\/$/g, '')
    .split('/')
    .filter(Boolean);

  if (segments.length <= 1) {
    return null;
  }

  return `/${segments.slice(0, -1).join('/')}/`;
}

function resolveRouteTitle(path: string, locale: Locale) {
  try {
    return getRoutePage(path, locale).title;
  } catch {
    return null;
  }
}

export function getBreadcrumbs(
  path: string,
  locale: Locale,
  currentLabel?: string
): BreadcrumbItem[] {
  const normalizedPath = normalizePath(path);
  const homeLabel = locale === 'zh' ? '首页' : 'Home';
  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: homeLabel,
      href: localizePath('/', locale)
    }
  ];

  const parentPath = getParentPath(normalizedPath);
  const parentLabel = parentPath ? resolveRouteTitle(parentPath, locale) : null;

  if (parentPath && parentLabel) {
    breadcrumbs.push({
      label: parentLabel,
      href: localizePath(parentPath, locale)
    });
  }

  const resolvedCurrentLabel =
    currentLabel ?? resolveRouteTitle(normalizedPath, locale) ?? normalizedPath;

  breadcrumbs.push({
    label: resolvedCurrentLabel,
    href: localizePath(normalizedPath, locale)
  });

  return breadcrumbs;
}

export function createBreadcrumbStructuredData(
  path: string,
  locale: Locale,
  currentLabel?: string
) {
  const breadcrumbs = getBreadcrumbs(path, locale, currentLabel);

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: new URL(item.href, siteConfig.url).toString()
    }))
  };
}

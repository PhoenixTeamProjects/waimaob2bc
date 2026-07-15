import type { Metadata } from 'next';
import type { Locale } from '@/config/i18n';
import { siteConfig } from '@/config/site';

export function createMetadata(params: {
  title?: string;
  description?: string;
  path?: string;
  locale?: Locale;
}): Metadata {
  const locale = params.locale || 'zh';
  const title = params.title
    ? `${params.title} | ${siteConfig.name}`
    : locale === 'zh'
      ? siteConfig.title
      : 'Phoenix Foreign Trade Practitioner';
  const description =
    params.description ||
    (locale === 'zh'
      ? siteConfig.description
      : 'Phoenix personal brand website for foreign trade practice, AI practice, website building, training and consulting.');
  const path = params.path || '/';
  const canonicalPath = path === '/en/' ? '/en/' : path;
  const url = new URL(canonicalPath, siteConfig.url).toString();
  const normalizedPath = path.startsWith('/en/')
    ? path.replace(/^\/en/, '') || '/'
    : path;
  const zhPath = normalizedPath === '/' ? '/' : normalizedPath;
  const enPath = zhPath === '/' ? '/en/' : `/en${zhPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'zh-CN': new URL(zhPath, siteConfig.url).toString(),
        en: new URL(enPath, siteConfig.url).toString(),
        'x-default': new URL(zhPath, siteConfig.url).toString()
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: locale === 'zh' ? ['en_US'] : ['zh_CN']
    }
  };
}

import { siteConfig } from '@/config/site';
import type { Locale } from '@/config/i18n';

export function createContactPageStructuredData(path: string, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: locale === 'zh' ? '联系 Phoenix' : 'Contact Phoenix',
    description:
      locale === 'zh'
        ? '用于课程咨询、企业内训、一对一辅导、外贸运营、AI实战、建站和商务合作咨询。'
        : 'For course inquiries, corporate training, one-on-one consulting, foreign-trade operations, AI practice, website building and cooperation.',
    inLanguage: locale === 'zh' ? 'zh-CN' : 'en',
    url: new URL(path, siteConfig.url).toString(),
    about: {
      '@type': 'Person',
      name: 'Phoenix',
      url: siteConfig.url
    }
  };
}

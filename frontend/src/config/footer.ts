import { getHeaderCta, getMainNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import type { Locale } from '@/config/i18n';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export function getFooterBrand(locale: Locale) {
  return {
    name: siteConfig.name,
    subtitle: locale === 'zh' ? '外贸实战操盘手' : 'Foreign Trade Practitioner',
    description:
      locale === 'zh'
        ? '真实做外贸，真实做独立站，真实研究 AI，把每天正在做的事情、踩过的坑和有效方法整理出来。'
        : 'Real foreign-trade work, real websites and real AI practice, organized into practical notes, cases and training.',
    email: 'support@waimaob2bc.com',
    phone: '18191027863',
    cta: getHeaderCta(locale)
  };
}

export function getFooterSections(locale: Locale): FooterSection[] {
  const nav = getMainNavigation(locale);
  const coreLinks = nav.filter((item) =>
    ['/', '/en/', '/foreign-trade/', '/en/foreign-trade/', '/ai-practice/', '/en/ai-practice/', '/website/', '/en/website/', '/training/', '/en/training/', '/projects/', '/en/projects/', '/about/', '/en/about/'].includes(item.href)
  );
  const foreignTrade = nav.find((item) => item.href.endsWith('/foreign-trade/'))?.children ?? [];
  const ai = nav.find((item) => item.href.endsWith('/ai-practice/'))?.children ?? [];
  const website = nav.find((item) => item.href.endsWith('/website/'))?.children ?? [];
  const training = nav.find((item) => item.href.endsWith('/training/'))?.children ?? [];
  const contact = nav.find((item) => item.href.endsWith('/contact/'));
  const cta = getHeaderCta(locale);

  return [
    {
      title: locale === 'zh' ? '核心栏目' : 'Core',
      links: coreLinks.map(({ label, href }) => ({ label, href }))
    },
    {
      title: locale === 'zh' ? '外贸运营' : 'Foreign Trade',
      links: foreignTrade.map(({ label, href }) => ({ label, href }))
    },
    {
      title: locale === 'zh' ? 'AI 与建站' : 'AI & Website',
      links: [...ai, ...website].map(({ label, href }) => ({ label, href }))
    },
    {
      title: locale === 'zh' ? '课程与咨询' : 'Training & Contact',
      links: [
        ...training.map(({ label, href }) => ({ label, href })),
        ...(contact ? [{ label: contact.label, href: contact.href }] : []),
        cta
      ]
    }
  ];
}


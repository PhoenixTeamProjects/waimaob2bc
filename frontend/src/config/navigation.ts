import { localizePath, type Locale } from '@/config/i18n';

export interface NavigationItemBase {
  label: Record<Locale, string>;
  href: string;
  children?: NavigationItemBase[];
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

const mainNavigationBase: NavigationItemBase[] = [
  { label: { zh: '首页', en: 'Home' }, href: '/' },
  {
    label: { zh: '外贸运营', en: 'Foreign Trade' },
    href: '/foreign-trade/',
    children: [
      { label: { zh: '客户开发', en: 'Customer Development' }, href: '/foreign-trade/customer-development/' },
      { label: { zh: '阿里国际站', en: 'Alibaba.com' }, href: '/foreign-trade/alibaba/' },
      { label: { zh: '海关数据', en: 'Customs Data' }, href: '/foreign-trade/customs-data/' },
      { label: { zh: '社媒获客', en: 'Social Leads' }, href: '/foreign-trade/social-media-leads/' },
      { label: { zh: 'SOHO实战', en: 'SOHO Practice' }, href: '/foreign-trade/soho/' }
    ]
  },
  {
    label: { zh: 'AI实战', en: 'AI Practice' },
    href: '/ai-practice/',
    children: [
      { label: { zh: 'AI工作流', en: 'AI Workflows' }, href: '/ai-practice/workflows/' },
      { label: { zh: 'AI Agent', en: 'AI Agent' }, href: '/ai-practice/agents/' },
      { label: { zh: 'AI自动化', en: 'AI Automation' }, href: '/ai-practice/automation/' },
      { label: { zh: 'AI工具实测', en: 'AI Tool Tests' }, href: '/ai-practice/tools/' }
    ]
  },
  {
    label: { zh: '建站', en: 'Website' },
    href: '/website/',
    children: [
      { label: { zh: '外贸独立站', en: 'B2B Website' }, href: '/website/b2b-website/' },
      { label: { zh: 'Next.js建站', en: 'Next.js' }, href: '/website/nextjs/' },
      { label: { zh: 'WordPress建站', en: 'WordPress' }, href: '/website/wordpress/' },
      { label: { zh: 'CMS与后台', en: 'CMS & Admin' }, href: '/website/cms-admin/' },
      { label: { zh: '建站实战', en: 'Website Cases' }, href: '/website/cases/' }
    ]
  },
  {
    label: { zh: '课程培训', en: 'Training' },
    href: '/training/',
    children: [
      { label: { zh: '外贸实战课程', en: 'Foreign Trade Course' }, href: '/training/foreign-trade/' },
      { label: { zh: 'AI实战课程', en: 'AI Practice Course' }, href: '/training/ai-practice/' },
      { label: { zh: '建站实战课程', en: 'Website Course' }, href: '/training/website/' },
      { label: { zh: '企业内训', en: 'Corporate Training' }, href: '/training/corporate/' }
    ]
  },
  { label: { zh: '项目案例', en: 'Projects' }, href: '/projects/' },
  { label: { zh: '关于我', en: 'About' }, href: '/about/' },
  { label: { zh: '联系我', en: 'Contact' }, href: '/contact/' }
];

function localizeNavigationItem(item: NavigationItemBase, locale: Locale): NavigationItem {
  return {
    label: item.label[locale],
    href: localizePath(item.href, locale),
    children: item.children?.map((child) => localizeNavigationItem(child, locale))
  };
}

export function getMainNavigation(locale: Locale): NavigationItem[] {
  return mainNavigationBase.map((item) => localizeNavigationItem(item, locale));
}

export function getHeaderCta(locale: Locale) {
  return {
    label: locale === 'zh' ? '课程咨询' : 'Course Inquiry',
    href: `${localizePath('/contact/', locale)}?type=course`
  };
};

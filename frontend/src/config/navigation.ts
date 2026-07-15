export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  { label: '首页', href: '/' },
  {
    label: '外贸运营',
    href: '/foreign-trade/',
    children: [
      { label: '客户开发', href: '/foreign-trade/customer-development/' },
      { label: '阿里国际站', href: '/foreign-trade/alibaba/' },
      { label: '海关数据', href: '/foreign-trade/customs-data/' },
      { label: '社媒获客', href: '/foreign-trade/social-media-leads/' },
      { label: 'SOHO实战', href: '/foreign-trade/soho/' }
    ]
  },
  {
    label: 'AI实战',
    href: '/ai-practice/',
    children: [
      { label: 'AI工作流', href: '/ai-practice/workflows/' },
      { label: 'AI Agent', href: '/ai-practice/agents/' },
      { label: 'AI自动化', href: '/ai-practice/automation/' },
      { label: 'AI工具实测', href: '/ai-practice/tools/' }
    ]
  },
  {
    label: '建站',
    href: '/website/',
    children: [
      { label: '外贸独立站', href: '/website/b2b-website/' },
      { label: 'Next.js建站', href: '/website/nextjs/' },
      { label: 'WordPress建站', href: '/website/wordpress/' },
      { label: 'CMS与后台', href: '/website/cms-admin/' },
      { label: '建站实战', href: '/website/cases/' }
    ]
  },
  {
    label: '课程培训',
    href: '/training/',
    children: [
      { label: '外贸实战课程', href: '/training/foreign-trade/' },
      { label: 'AI实战课程', href: '/training/ai-practice/' },
      { label: '建站实战课程', href: '/training/website/' },
      { label: '企业内训', href: '/training/corporate/' }
    ]
  },
  { label: '项目案例', href: '/projects/' },
  { label: '关于我', href: '/about/' },
  { label: '联系我', href: '/contact/' }
];

export const headerCta = {
  label: '课程咨询',
  href: '/contact/?type=course'
};

import type { Topic } from '@/types/content';

export const siteConfig = {
  name: 'Phoenix',
  title: 'Phoenix 外贸实战操盘手',
  description:
    '面向国内外贸从业者、企业负责人和 AI 实战学习者的个人品牌、实战博客、课程与咨询网站。',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://waimaob2bc.com',
  tagline: '真实、实战、一线、持续执行、持续测试'
};

export const topics: Topic[] = [
  {
    key: 'foreign-trade-ops',
    title: '外贸运营',
    href: '/blog/?topic=foreign-trade-ops',
    description: '客户开发、平台运营、询盘跟进、SOHO 与外贸一线执行复盘。'
  },
  {
    key: 'social-media',
    title: '社媒获客',
    href: '/foreign-trade/social-media-leads/',
    description: '海外社媒获客、内容运营、账号资产与 B2B 线索沉淀方法。'
  },
  {
    key: 'ai-practice',
    title: 'AI 实战',
    href: '/blog/?topic=ai-practice',
    description: 'AI 工作流、Agent、自动化和企业真实应用测试。'
  },
  {
    key: 'ai-website',
    title: '建站',
    href: '/website/',
    description: '外贸独立站、Next.js、WordPress、CMS、后台与建站实战记录。'
  },
  {
    key: 'training',
    title: '课程培训',
    href: '/training/',
    description: '企业内训、一对一咨询和外贸/AI/建站实战课程入口。'
  }
];

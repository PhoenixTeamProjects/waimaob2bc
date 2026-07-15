import { siteConfig } from '@/config/site';
import { routePages } from '@/data/route-pages';

export interface SeoRoute {
  path: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly';
  priority: number;
}

export const fixedSeoRoutes: SeoRoute[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/blog/', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/about/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact/', changeFrequency: 'monthly', priority: 0.75 }
];

export const topicSeoRoutes: SeoRoute[] = routePages.map((page) => ({
  path: page.path,
  changeFrequency: 'weekly',
  priority:
    page.path === '/foreign-trade/' ||
    page.path === '/ai-practice/' ||
    page.path === '/website/' ||
    page.path === '/training/' ||
    page.path === '/projects/'
      ? 0.85
      : 0.7
}));

export const seoRoutes: SeoRoute[] = [...fixedSeoRoutes, ...topicSeoRoutes];

export function toAbsoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function toEnglishPath(path: string) {
  return path === '/' ? '/en/' : `/en${path}`;
}

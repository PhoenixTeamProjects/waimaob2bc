import { siteConfig } from '@/config/site';
import type { ProjectCase } from '@/types/content';

export function createProjectCollectionStructuredData(
  projects: ProjectCase[],
  path: string,
  locale: 'zh' | 'en'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: locale === 'zh' ? '项目案例' : 'Projects',
    description:
      locale === 'zh'
        ? 'Phoenix 的真实项目、网站项目、SOHO 项目、AI 建站项目和外贸运营案例。'
        : 'Phoenix’s real projects, website projects, SOHO projects, AI website projects and foreign-trade operation cases.',
    inLanguage: locale === 'zh' ? 'zh-CN' : 'en',
    url: new URL(path, siteConfig.url).toString(),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.title,
        url: new URL(`${path}${project.slug}/`, siteConfig.url).toString()
      }))
    }
  };
}

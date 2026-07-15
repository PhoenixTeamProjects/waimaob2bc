import { siteConfig } from '@/config/site';
import type { Locale } from '@/config/i18n';
import type { Course } from '@/types/content';

export function createCourseCollectionStructuredData(
  courses: Course[],
  path: string,
  locale: Locale
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: locale === 'zh' ? '课程培训' : 'Training',
    description:
      locale === 'zh'
        ? 'Phoenix 的外贸实战课程、AI实战课程、建站实战课程、企业内训和咨询服务。'
        : 'Phoenix’s foreign-trade courses, AI practice courses, website courses, corporate training and consulting services.',
    inLanguage: locale === 'zh' ? 'zh-CN' : 'en',
    url: new URL(path, siteConfig.url).toString(),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: courses.length,
      itemListElement: courses.map((course, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: course.title,
        url: new URL(`${path}${course.slug}/`, siteConfig.url).toString()
      }))
    }
  };
}

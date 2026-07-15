import { siteConfig } from '@/config/site';
import type { Post } from '@/types/content';

export function createArticleStructuredData(post: Post, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: post.locale === 'zh' ? 'zh-CN' : 'en',
    author: {
      '@type': 'Person',
      name: 'Phoenix',
      url: siteConfig.url
    },
    publisher: {
      '@type': 'Person',
      name: 'Phoenix',
      url: siteConfig.url
    },
    mainEntityOfPage: new URL(path, siteConfig.url).toString(),
    keywords: post.tags.join(', ')
  };
}

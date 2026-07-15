import type { Locale } from '@/config/i18n';
import { postSources } from '@/data/posts';
import type { Post, PostSource, TopicKey } from '@/types/content';

function toLocalizedPost(source: PostSource, locale: Locale): Post {
  return {
    slug: source.slug,
    title: source.title[locale],
    excerpt: source.excerpt[locale],
    body: source.body[locale],
    type: source.type,
    typeLabel: source.typeLabel[locale],
    topic: source.topic,
    tags: source.tags,
    publishedAt: source.publishedAt,
    updatedAt: source.updatedAt,
    readingMinutes: source.readingMinutes,
    locale
  };
}

export function getPostSources(): PostSource[] {
  return [...postSources].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPosts(locale: Locale = 'zh'): Post[] {
  return getPostSources().map((post) => toLocalizedPost(post, locale));
}

export function getPostsByTopic(topic: TopicKey, locale: Locale = 'zh'): Post[] {
  return getPosts(locale).filter((post) => post.topic === topic);
}

export function getPostBySlug(slug: string, locale: Locale = 'zh'): Post | undefined {
  const source = postSources.find((post) => post.slug === slug);
  return source ? toLocalizedPost(source, locale) : undefined;
}

export function getPostSlugs() {
  return postSources.map((post) => post.slug);
}

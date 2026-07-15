import type { Locale } from '@/config/i18n';

export type TopicKey =
  | 'foreign-trade-ops'
  | 'social-media'
  | 'ai-practice'
  | 'website'
  | 'training';

export type ContentTypeKey =
  | 'practice-note'
  | 'how-to'
  | 'tool-test'
  | 'project-review'
  | 'opinion'
  | 'case-note'
  | 'pitfall-note';

export type LocalizedValue<T> = Record<Locale, T>;

export interface Topic {
  key: TopicKey;
  title: string;
  href: string;
  description: string;
}

export interface PostSource {
  slug: string;
  title: LocalizedValue<string>;
  excerpt: LocalizedValue<string>;
  body: LocalizedValue<string[]>;
  type: ContentTypeKey;
  typeLabel: LocalizedValue<string>;
  topic: TopicKey;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  type: ContentTypeKey;
  typeLabel: string;
  topic: TopicKey;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  locale: Locale;
}

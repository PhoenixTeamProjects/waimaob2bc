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

export type ProjectStatusKey = 'planned' | 'in-progress' | 'completed' | 'paused';

export type ProjectTypeKey =
  | 'website'
  | 'soho'
  | 'ai-website'
  | 'foreign-trade-ops'
  | 'training';

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

export interface ProjectSource {
  slug: string;
  title: LocalizedValue<string>;
  summary: LocalizedValue<string>;
  type: ProjectTypeKey;
  typeLabel: LocalizedValue<string>;
  status: ProjectStatusKey;
  statusLabel: LocalizedValue<string>;
  tags: string[];
  startedAt?: string;
  publishedAt?: string;
  problem: LocalizedValue<string>;
  process: LocalizedValue<string[]>;
  result: LocalizedValue<string>;
  review: LocalizedValue<string>;
}

export interface ProjectCase {
  slug: string;
  title: string;
  summary: string;
  type: ProjectTypeKey;
  typeLabel: string;
  status: ProjectStatusKey;
  statusLabel: string;
  tags: string[];
  startedAt?: string;
  publishedAt?: string;
  problem: string;
  process: string[];
  result: string;
  review: string;
  locale: Locale;
}

import { posts } from '@/data/posts';
import type { Post, TopicKey } from '@/types/content';

export function getPosts(): Post[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostsByTopic(topic: TopicKey): Post[] {
  return getPosts().filter((post) => post.topic === topic);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

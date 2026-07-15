import { notFound } from 'next/navigation';
import { PostArticle } from '@/components/ui/PostArticle';
import { getPostBySlug, getPostSlugs } from '@/lib/content/posts';
import { createMetadata } from '@/lib/seo/metadata';

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'en');

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/en/blog/${post.slug}/`,
    locale: 'en'
  });
}

export default async function EnglishBlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'en');

  if (!post) {
    notFound();
  }

  return <PostArticle post={post} locale="en" />;
}

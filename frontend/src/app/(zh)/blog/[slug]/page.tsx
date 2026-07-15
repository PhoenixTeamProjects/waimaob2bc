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
  const post = getPostBySlug(slug, 'zh');

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`
  });
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'zh');

  if (!post) {
    notFound();
  }

  return <PostArticle post={post} locale="zh" />;
}

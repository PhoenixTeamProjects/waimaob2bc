import Link from 'next/link';
import type { Locale } from '@/config/i18n';
import type { Post } from '@/types/content';

export function PostList({ posts, locale }: { posts: Post[]; locale: Locale }) {
  const blogPrefix = locale === 'zh' ? '/blog' : '/en/blog';
  const readLabel = locale === 'zh' ? '阅读全文' : 'Read article';
  const minuteLabel = locale === 'zh' ? '分钟阅读' : 'min read';

  return (
    <div className="post-list">
      {posts.map((post) => (
        <article className="post-card" key={post.slug}>
          <p className="meta">
            {post.publishedAt} · {post.typeLabel} · {post.readingMinutes} {minuteLabel}
          </p>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <p className="tag-row">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </p>
          <Link className="text-link" href={`${blogPrefix}/${post.slug}/`}>
            {readLabel}
          </Link>
        </article>
      ))}
    </div>
  );
}

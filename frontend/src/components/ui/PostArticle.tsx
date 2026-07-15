import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/ui/JsonLd';
import { localizePath, type Locale } from '@/config/i18n';
import { createArticleStructuredData } from '@/lib/seo/article';
import {
  createBreadcrumbStructuredDataFromItems,
  getBreadcrumbs
} from '@/lib/seo/breadcrumbs';
import type { Post } from '@/types/content';

export function PostArticle({ post, locale }: { post: Post; locale: Locale }) {
  const path = `${localizePath('/blog/', locale)}${post.slug}/`;
  const breadcrumbs = [
    ...getBreadcrumbs('/blog/', locale, locale === 'zh' ? '实战博客' : 'Practical Blog'),
    {
      label: post.title,
      href: path
    }
  ];

  return (
    <article className="section page-section">
      <JsonLd
        data={[
          createBreadcrumbStructuredDataFromItems(breadcrumbs),
          createArticleStructuredData(post, path)
        ]}
      />
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <header className="article-header">
          <p className="eyebrow">{post.typeLabel}</p>
          <h1>{post.title}</h1>
          <p className="hero-lead">{post.excerpt}</p>
          <p className="meta">
            {post.publishedAt} · {post.readingMinutes}{' '}
            {locale === 'zh' ? '分钟阅读' : 'min read'}
          </p>
          <p className="tag-row">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </p>
        </header>

        <div className="article-body prose-card">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="prose-card route-note">
          <p>
            {locale === 'zh'
              ? '这篇文章目前用于验证博客内容模型和页面结构。后续会接入后台，由 Phoenix 提供真实材料后再持续更新。'
              : 'This article currently validates the blog content model and page structure. It will be updated with real materials provided by Phoenix later.'}
          </p>
          <Link className="button primary" href={`${localizePath('/contact/', locale)}?type=course`}>
            {locale === 'zh' ? '课程咨询' : 'Course Inquiry'}
          </Link>
        </div>
      </Container>
    </article>
  );
}

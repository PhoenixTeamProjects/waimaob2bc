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
import { getPostsByTopic } from '@/lib/content/posts';
import type { Post } from '@/types/content';

export function PostArticle({ post, locale }: { post: Post; locale: Locale }) {
  const path = `${localizePath('/blog/', locale)}${post.slug}/`;
  const related = getPostsByTopic(post.topic, locale)
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);
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
          <div className="article-meta-grid">
            <span>{post.typeLabel}</span>
            <span>{post.publishedAt}</span>
            <span>
              {post.updatedAt ?? post.publishedAt} · {locale === 'zh' ? '最后更新' : 'Updated'}
            </span>
            <span>
              {post.readingMinutes} {locale === 'zh' ? '分钟阅读' : 'min read'}
            </span>
            <span>{locale === 'zh' ? '作者 Phoenix' : 'Author Phoenix'}</span>
          </div>
          <p className="tag-row">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </p>
        </header>

        <div className="article-layout">
          <aside className="article-toc prose-card">
            <h2>{locale === 'zh' ? '文章目录' : 'Contents'}</h2>
            <ol>
              <li>{locale === 'zh' ? '核心背景' : 'Background'}</li>
              <li>{locale === 'zh' ? '执行过程' : 'Process'}</li>
              <li>{locale === 'zh' ? '复盘与下一步' : 'Review and next step'}</li>
            </ol>
          </aside>

          <div className="article-body prose-card">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="article-extra-grid">
          <section className="prose-card">
            <h2>{locale === 'zh' ? '关于作者' : 'About the author'}</h2>
            <p>
              {locale === 'zh'
                ? 'Phoenix 是外贸实战操盘手，长期记录客户开发、外贸运营、AI、建站、SOHO 和课程培训中的真实过程。'
                : 'Phoenix is a frontline foreign-trade practitioner documenting customer development, AI, websites, SOHO practice and training.'}
            </p>
          </section>
          <section className="prose-card">
            <h2>{locale === 'zh' ? '相关文章' : 'Related articles'}</h2>
            {related.length > 0 ? (
              <div className="mini-list">
                {related.map((item) => (
                  <Link href={`${localizePath('/blog/', locale)}${item.slug}/`} key={item.slug}>
                    {item.title}
                  </Link>
                ))}
              </div>
            ) : (
              <p>{locale === 'zh' ? '相关内容正在持续补充。' : 'Related content is being added.'}</p>
            )}
          </section>
        </div>

        <div className="prose-card route-note cta-card">
          <div>
            <h2>{locale === 'zh' ? '把文章里的方法用到你的业务里' : 'Apply this method to your business'}</h2>
            <p>
              {locale === 'zh'
                ? '后续文章会接入后台，由 Phoenix 提供真实材料后持续更新，并关联相关项目、课程和复盘。'
                : 'Future articles will be connected to backend-managed materials, related projects, courses and reviews.'}
            </p>
          </div>
          <Link className="button primary" href={`${localizePath('/contact/', locale)}?type=course`}>
            {locale === 'zh' ? '课程咨询' : 'Course Inquiry'}
          </Link>
        </div>
      </Container>
    </article>
  );
}

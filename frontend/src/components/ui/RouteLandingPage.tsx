import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/ui/JsonLd';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { localizePath, type Locale } from '@/config/i18n';
import type { RoutePageContent } from '@/data/route-pages';
import { getProjects } from '@/lib/content/projects';
import { getPostsByTopic } from '@/lib/content/posts';
import {
  createBreadcrumbStructuredData,
  getBreadcrumbs
} from '@/lib/seo/breadcrumbs';
import type { TopicKey } from '@/types/content';

function inferTopicKey(path: string): TopicKey {
  if (path.startsWith('/ai-practice/')) return 'ai-practice';
  if (path.startsWith('/website/')) return 'website';
  if (path.startsWith('/training/')) return 'training';
  if (path.startsWith('/foreign-trade/social-media-leads/')) return 'social-media';
  return 'foreign-trade-ops';
}

function getMethodSteps(page: RoutePageContent, locale: Locale) {
  if (page.path === '/foreign-trade/') {
    return locale === 'zh'
      ? ['产品理解', '市场判断', '客户画像', '渠道选择', '客户获取', '客户调查', '联系触达', '持续跟进', '成交复盘']
      : ['Product', 'Market', 'Buyer profile', 'Channels', 'Leads', 'Research', 'Outreach', 'Follow-up', 'Review'];
  }

  if (page.path === '/ai-practice/') {
    return locale === 'zh'
      ? ['业务场景', '任务拆解', '工具组合', '人工审核', '自动化边界', '结果复盘']
      : ['Scenario', 'Task breakdown', 'Tool stack', 'Human review', 'Automation boundary', 'Review'];
  }

  if (page.path === '/website/') {
    return locale === 'zh'
      ? ['网站定位', '信息架构', '内容模型', '页面组件', '部署发布', 'SEO 与数据']
      : ['Positioning', 'Architecture', 'Content model', 'Components', 'Deployment', 'SEO & data'];
  }

  if (page.path === '/training/') {
    return locale === 'zh'
      ? ['问题诊断', '方法拆解', '工具演示', '现场练习', '执行清单', '复盘迭代']
      : ['Diagnosis', 'Method', 'Tools', 'Practice', 'Checklist', 'Review'];
  }

  return page.points;
}

export function RouteLandingPage({
  page,
  locale = 'zh'
}: {
  page: RoutePageContent;
  locale?: Locale;
}) {
  const breadcrumbs = getBreadcrumbs(page.path, locale, page.title);
  const posts = getPostsByTopic(inferTopicKey(page.path), locale).slice(0, 3);
  const projects = getProjects(locale).slice(0, 2);
  const methodSteps = getMethodSteps(page, locale);
  const isTopLevel = ['/foreign-trade/', '/ai-practice/', '/website/', '/training/'].includes(page.path);

  return (
    <section className="section page-section">
      <JsonLd data={createBreadcrumbStructuredData(page.path, locale, page.title)} />
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <div className="page-hero-panel">
          <SectionHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <div className="hero-actions page-actions">
            <Link className="button primary" href={localizePath('/blog/', locale)}>
              {locale === 'zh' ? '阅读相关文章' : 'Read articles'}
            </Link>
            <Link className="button ghost" href={`${localizePath('/contact/', locale)}?type=course`}>
              {locale === 'zh' ? '课程咨询' : 'Course Inquiry'}
            </Link>
          </div>
        </div>

        <div className="content-band">
          <div className="band-heading">
            <p className="eyebrow">{isTopLevel ? 'Methodology' : 'Category View'}</p>
            <h2>{locale === 'zh' ? 'Phoenix 对这个方向的判断' : 'Phoenix’s view on this direction'}</h2>
            <p>
              {locale === 'zh'
                ? '不把页面做成空文章列表，而是先讲清楚业务逻辑、执行路径和后续内容如何沉淀。'
                : 'This page is not just a post list. It explains the business logic, execution path and how content will be organized.'}
            </p>
          </div>
          <div className="process-list">
            {methodSteps.map((point, index) => (
              <div className="process-item numbered" key={point}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="content-band two-column-band">
          <section className="prose-card">
            <h2>{isTopLevel ? (locale === 'zh' ? '核心方向' : 'Core directions') : locale === 'zh' ? '分类说明' : 'Category description'}</h2>
            <p>{page.description}</p>
            <ul>
              {page.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
          <section className="prose-card">
            <h2>{locale === 'zh' ? '相关项目与案例' : 'Related projects and cases'}</h2>
            {projects.length > 0 ? (
              <div className="mini-list">
                {projects.map((project) => (
                  <article key={project.slug}>
                    <strong>{project.title}</strong>
                    <p>{project.summary}</p>
                  </article>
                ))}
              </div>
            ) : (
              <p>
                {locale === 'zh'
                  ? '等待 Phoenix 提供可公开的真实项目素材；不会使用虚假成果占位。'
                  : 'Waiting for public real project materials from Phoenix. No fake results are used as placeholders.'}
              </p>
            )}
          </section>
        </div>

        <div className="content-band">
          <div className="band-heading">
            <p className="eyebrow">{locale === 'zh' ? 'Latest Practice' : 'Latest Practice'}</p>
            <h2>{locale === 'zh' ? '最新实战内容' : 'Latest practical content'}</h2>
          </div>
          {posts.length > 0 ? (
            <div className="post-grid">
              {posts.map((post) => (
                <article className="post-card" key={post.slug}>
                  <p className="meta">
                    {post.typeLabel} · {post.publishedAt}
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link className="text-link" href={`${localizePath('/blog/', locale)}${post.slug}/`}>
                    {locale === 'zh' ? '阅读全文' : 'Read more'}
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="prose-card empty-state">
              <h2>{locale === 'zh' ? '等待真实文章沉淀' : 'Waiting for real articles'}</h2>
              <p>
                {locale === 'zh'
                  ? '该方向会接入实战记录、方法教程、工具实测、项目复盘、观点和踩坑记录。'
                  : 'This section will connect practice notes, how-tos, tool tests, project reviews, opinions and pitfall notes.'}
              </p>
            </div>
          )}
        </div>

        <div className="prose-card route-note cta-card">
          <div>
            <h2>{locale === 'zh' ? '把方向变成下一步动作' : 'Turn this direction into next steps'}</h2>
            <p>
              {locale === 'zh'
                ? '如果你正在做客户开发、AI、建站或团队培训，可以先把当前问题讲清楚，再判断适合阅读、咨询还是课程。'
                : 'If you are working on customer development, AI, websites or team training, start by clarifying the current bottleneck.'}
            </p>
          </div>
          <Link className="button primary" href={`${localizePath('/contact/', locale)}?type=course`}>
            {locale === 'zh' ? '课程咨询' : 'Course Inquiry'}
          </Link>
        </div>
      </Container>
    </section>
  );
}

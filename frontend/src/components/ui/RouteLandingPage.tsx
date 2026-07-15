import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { localizePath, type Locale } from '@/config/i18n';
import type { RoutePageContent } from '@/data/route-pages';

export function RouteLandingPage({
  page,
  locale = 'zh'
}: {
  page: RoutePageContent;
  locale?: Locale;
}) {
  return (
    <section className="section page-section">
      <Container>
        <SectionHeading
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <div className="process-list">
          {page.points.map((point) => (
            <div className="process-item" key={point}>
              {point}
            </div>
          ))}
        </div>
        <div className="prose-card route-note">
          <p>
            {locale === 'zh'
              ? '当前页面是 Phoenix 个人品牌网站的专题首页。后续会接入文章、项目案例、课程、媒体资料和后台内容模型，逐步沉淀真实内容。'
              : 'This is a topic landing page for Phoenix’s personal brand website. Articles, projects, courses, media materials and backend content models will be connected step by step.'}
          </p>
          <Link className="button primary" href={`${localizePath('/contact/', locale)}?type=course`}>
            {locale === 'zh' ? '课程咨询' : 'Course Inquiry'}
          </Link>
        </div>
      </Container>
    </section>
  );
}

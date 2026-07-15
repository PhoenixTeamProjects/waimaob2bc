import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { RoutePageContent } from '@/data/route-pages';

export function RouteLandingPage({ page }: { page: RoutePageContent }) {
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
            当前页面是 Phoenix 个人品牌网站的专题首页。后续会接入文章、项目案例、课程、媒体资料和后台内容模型，逐步沉淀真实内容。
          </p>
          <Link className="button primary" href="/contact/?type=course">
            课程咨询
          </Link>
        </div>
      </Container>
    </section>
  );
}

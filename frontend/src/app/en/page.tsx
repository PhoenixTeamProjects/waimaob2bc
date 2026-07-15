import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { profile } from '@/data/profile';
import { enRoutePages } from '@/data/route-pages';

const featuredPages = enRoutePages.filter((page) =>
  ['/foreign-trade/', '/ai-practice/', '/website/', '/training/', '/projects/'].includes(
    page.path
  )
);

export default function EnglishHomePage() {
  return (
    <>
      <section className="hero">
        <Container>
          <p className="eyebrow">Phoenix Personal Brand Website</p>
          <h1>Phoenix Foreign Trade Practitioner</h1>
          <p className="hero-lead">
            I do not talk about foreign trade from outside the battlefield. I am still doing customer development, platform operations, independent websites, social media, AI and SOHO practice every day.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/en/foreign-trade/">
              Read Practical Content
            </Link>
            <Link className="button ghost" href="/en/contact/?type=course">
              Course Inquiry
            </Link>
          </div>
        </Container>
      </section>

      <section className="trust-strip" aria-label="Phoenix trust metrics">
        <Container>
          <div className="metric-grid">
            {profile.trustMetrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>
                  {metric.label === '培训及服务企业'
                    ? 'Companies trained or served'
                    : metric.label === '累计培训学员'
                      ? 'Students trained'
                      : metric.label === '跨境电商及外贸公司经营经历'
                        ? 'Companies operated'
                        : 'Multi-industry practice'}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Frontline Practice"
            title="Real work, real problems, real review"
            description="Phoenix’s content comes from ongoing foreign-trade work: customer development, Alibaba.com operations, independent websites, customs data, overseas social media, AI and SOHO practice."
          />
          <div className="card-grid">
            {featuredPages.map((page) => (
              <Link className="card" href={`/en${page.path}`} key={page.path}>
                <h3>{page.title}</h3>
                <p>{page.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section muted">
        <Container>
          <SectionHeading
            eyebrow="Method"
            title="Turn complex foreign-trade work into executable steps"
            description="Method → Tools → Operation → Execution → Result → Review. The goal is not inspiration, but knowing what to do next."
          />
        </Container>
      </section>
    </>
  );
}

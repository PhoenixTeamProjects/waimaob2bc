import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig, topics } from '@/config/site';
import { profile } from '@/data/profile';
import { getPosts } from '@/lib/content/posts';

export default function HomePage() {
  const latestPosts = getPosts('zh').slice(0, 3);

  return (
    <>
      <section className="hero">
        <Container>
          <p className="eyebrow">Phoenix 个人品牌网站</p>
          <h1>{siteConfig.title}</h1>
          <p className="hero-lead">{profile.heroStatements.join(' ')}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/blog/">
              看实战内容
            </Link>
            <Link className="button ghost" href="/contact/?type=course">
              课程与咨询
            </Link>
          </div>
        </Container>
      </section>

      <section className="trust-strip" aria-label="Phoenix 真实经历数据">
        <Container>
          <div className="metric-grid">
            {profile.trustMetrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="我仍然在一线做外贸"
            title="很多外贸课程来自过去，我的内容来自今天"
            description="Phoenix 长期参与客户开发、平台运营、独立站、海关数据、海外社媒、AI 和 SOHO 项目。本站记录正在发生的真实工作、问题、调整和复盘。"
          />
          <div className="card-grid">
            {topics.map((topic) => (
              <Link className="card" href={topic.href} key={topic.key}>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="方法论"
            title="把复杂的外贸工作拆成能执行的步骤"
            description={profile.trainingPhilosophy}
          />
          <div className="process-list">
            {profile.currentPractice.map((item) => (
              <div className="process-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section muted">
        <Container>
          <SectionHeading
            eyebrow="最新记录"
            title="从建站过程开始公开实战"
            description="后续文章将以方法、工具、操作、执行、结果、复盘的方式持续沉淀。"
          />
          <div className="post-list">
            {latestPosts.map((post) => (
              <article className="post-card" key={post.slug}>
                <p className="meta">
                  {post.typeLabel} · {post.readingMinutes} 分钟阅读
                </p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link className="text-link" href={`/blog/${post.slug}/`}>
                  查看文章
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

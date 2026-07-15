import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig, topics } from '@/config/site';
import { getPosts } from '@/lib/content/posts';

export default function HomePage() {
  const latestPosts = getPosts().slice(0, 3);

  return (
    <>
      <section className="hero">
        <Container>
          <p className="eyebrow">Phoenix 个人品牌网站</p>
          <h1>{siteConfig.title}</h1>
          <p className="hero-lead">
            一个围绕真实外贸一线、AI 实战、独立站建设、课程培训和项目复盘持续更新的个人网站。
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/blog/">
              看实战内容
            </Link>
            <Link className="button ghost" href="/contact/">
              课程与咨询
            </Link>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="内容框架"
            title="本站先搭框架，再逐步填入真实资料"
            description="当前阶段只放可确认的方向和结构，不编造照片、媒体链接、课程价格、客户案例或经营数据。"
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
                  {post.type} · {post.readingMinutes} 分钟阅读
                </p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link href="/blog/">查看文章</Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

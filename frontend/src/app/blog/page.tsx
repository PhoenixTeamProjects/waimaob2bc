import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getPosts } from '@/lib/content/posts';
import { createMetadata } from '@/lib/seo/metadata';

export const metadata = createMetadata({
  title: '博客',
  description: 'Phoenix 外贸、AI、建站与课程实战内容。',
  path: '/blog/'
});

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section className="section page-section">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="实战博客"
          description="这里是文章系统入口。后续接入后台后，文章、栏目、专题、标签、SEO 和关联内容将由后台管理。"
        />
        <div className="post-list">
          {posts.map((post) => (
            <article className="post-card" key={post.slug}>
              <p className="meta">
                {post.publishedAt} · {post.type} · {post.readingMinutes} 分钟阅读
              </p>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <p className="tag-row">{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

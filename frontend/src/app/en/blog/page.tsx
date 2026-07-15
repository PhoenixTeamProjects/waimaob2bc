import { Container } from '@/components/layout/Container';
import { PostList } from '@/components/ui/PostList';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getPosts } from '@/lib/content/posts';
import { createMetadata } from '@/lib/seo/metadata';

export const metadata = createMetadata({
  title: 'Practical Blog',
  description:
    'Practical notes from Phoenix on foreign trade, AI, websites and business execution.',
  path: '/en/blog/',
  locale: 'en'
});

export default function EnglishBlogPage() {
  const posts = getPosts('en');

  return (
    <section className="section page-section">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="Practical Blog"
          description="A content hub for Phoenix’s practical notes. Posts, topics, tags, SEO fields and related content will later be managed by the backend."
        />
        <PostList posts={posts} locale="en" />
      </Container>
    </section>
  );
}

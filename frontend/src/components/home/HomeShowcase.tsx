import Link from 'next/link';
import type { Locale } from '@/config/i18n';
import { LiquidGlass } from '@/components/visual/LiquidGlass';
import { Reveal } from '@/components/visual/Reveal';
import type { Post } from '@/types/content';
import type { HomeCopy } from './home-content';

export function HomeShowcase({
  copy,
  locale,
  posts
}: {
  copy: HomeCopy;
  locale: Locale;
  posts: Post[];
}) {
  const prefix = locale === 'zh' ? '' : '/en';

  return (
    <section className="home-scene">
      <div className="container showcase-layout">
        <Reveal>
          <div className="scene-heading">
            <p className="cinematic-eyebrow">{copy.showcaseEyebrow}</p>
            <h2>{copy.showcaseTitle}</h2>
            <p>{copy.showcaseLead}</p>
          </div>
        </Reveal>
        <div className="post-ribbon">
          {posts.map((post, index) => (
            <Reveal delay={index * 100} key={post.slug}>
              <LiquidGlass as="article" className="showcase-card">
                <p className="meta">{post.typeLabel} · {post.readingMinutes} min</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link className="text-link" href={`${prefix}/blog/${post.slug}/`}>
                  {copy.blogCta}
                </Link>
              </LiquidGlass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

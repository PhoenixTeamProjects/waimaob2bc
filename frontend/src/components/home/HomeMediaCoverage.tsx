import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { LiquidGlass } from '@/components/visual/LiquidGlass';
import { Reveal } from '@/components/visual/Reveal';
import type { Locale } from '@/config/i18n';
import { getMediaCoverage } from '@/data/media';
import type { HomeCopy } from './home-content';

export function HomeMediaCoverage({ copy, locale }: { copy: HomeCopy; locale: Locale }) {
  const items = getMediaCoverage(locale);
  const direct = items.find((item) => item.directlyMentionsPhoenix);
  const contextual = items.filter((item) => !item.directlyMentionsPhoenix).slice(0, 3);

  return (
    <section className="home-scene media-scene">
      <Container>
        <div className="scene-grid">
          <Reveal>
            <div className="scene-heading">
              <p className="cinematic-eyebrow">{copy.mediaEyebrow}</p>
              <h2>{copy.mediaTitle}</h2>
              <p>{copy.mediaLead}</p>
            </div>
          </Reveal>

          <div className="media-coverage-grid">
            {direct ? (
              <Reveal>
                <LiquidGlass className="media-feature-card">
                  <p className="media-badge">
                    {locale === 'zh' ? '直接提及吕斌' : 'Directly mentions Lv Bin'}
                  </p>
                  <h3>{direct.title}</h3>
                  <p>{direct.summary}</p>
                  <div className="media-meta">
                    <span>{direct.source}</span>
                    <span>{direct.publishedAt}</span>
                    <span>{direct.relation}</span>
                  </div>
                  <Link className="text-link" href={direct.url} target="_blank" rel="noreferrer">
                  {locale === 'zh' ? '查看官方报道' : 'View official report'}
                  </Link>
                </LiquidGlass>
              </Reveal>
            ) : null}

            <Reveal>
              <LiquidGlass className="media-context-card">
                <p className="media-badge">
                  {locale === 'zh' ? '参与建设的平台报道' : 'Platform coverage'}
                </p>
                <div className="media-context-list">
                  {contextual.map((item) => (
                    <Link href={item.url} key={item.url} target="_blank" rel="noreferrer">
                      <strong>{item.title}</strong>
                      <span>{item.source} · {item.publishedAt}</span>
                      <em>{item.relation}</em>
                    </Link>
                  ))}
                </div>
              </LiquidGlass>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

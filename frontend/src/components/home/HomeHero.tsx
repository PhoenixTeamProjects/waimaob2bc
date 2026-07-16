import Link from 'next/link';
import type { Locale } from '@/config/i18n';
import { LiquidGlass } from '@/components/visual/LiquidGlass';
import { Reveal } from '@/components/visual/Reveal';
import type { HomeCopy } from './home-content';

export function HomeHero({ copy, locale }: { copy: HomeCopy; locale: Locale }) {
  const prefix = locale === 'zh' ? '' : '/en';

  return (
    <section className="home-scene home-hero-scene">
      <div className="container home-hero-grid">
        <Reveal className="home-hero-copy">
          <LiquidGlass className="hero-glass">
            <p className="cinematic-eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="cinematic-lead">{copy.lead}</p>
            <div className="hero-actions">
              <Link className="button primary glass-button" href={`${prefix}/blog/`}>
                {copy.primaryCta}
              </Link>
              <Link className="button ghost glass-ghost" href={`${prefix}/contact/?type=course`}>
                {copy.secondaryCta}
              </Link>
            </div>
          </LiquidGlass>
        </Reveal>
        <div className="hero-orbit" aria-hidden="true">
          <Reveal delay={160}>
            <LiquidGlass className="floating-note">
              <span>01</span>
              <strong>{locale === 'zh' ? '一线实战' : 'Frontline'}</strong>
              <p>{locale === 'zh' ? '真实问题驱动内容' : 'Real problems shape the content'}</p>
            </LiquidGlass>
          </Reveal>
          <Reveal delay={260}>
            <LiquidGlass className="floating-note floating-note-offset">
              <span>02</span>
              <strong>{locale === 'zh' ? '系统方法' : 'Systems'}</strong>
              <p>{locale === 'zh' ? '把复杂工作拆成流程' : 'Turn complexity into repeatable steps'}</p>
            </LiquidGlass>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import type { Locale } from '@/config/i18n';
import { LiquidGlass } from '@/components/visual/LiquidGlass';
import { Reveal } from '@/components/visual/Reveal';
import type { HomeCopy } from './home-content';

export function HomeCTA({ copy, locale }: { copy: HomeCopy; locale: Locale }) {
  const prefix = locale === 'zh' ? '' : '/en';

  return (
    <section className="home-scene final-scene">
      <div className="container">
        <Reveal>
          <LiquidGlass className="final-glass">
            <p className="cinematic-eyebrow">Start Here</p>
            <h2>{copy.finalTitle}</h2>
            <p>{copy.finalLead}</p>
            <div className="hero-actions">
              <Link className="button primary glass-button" href={`${prefix}/contact/?type=course`}>
                {copy.secondaryCta}
              </Link>
              <Link className="button ghost glass-ghost" href={`${prefix}/projects/`}>
                {locale === 'zh' ? '查看项目案例' : 'View Projects'}
              </Link>
            </div>
          </LiquidGlass>
        </Reveal>
      </div>
    </section>
  );
}

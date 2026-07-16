import type { Locale } from '@/config/i18n';
import { LiquidGlass } from '@/components/visual/LiquidGlass';
import { Reveal } from '@/components/visual/Reveal';
import type { HomeCopy } from './home-content';
import { matrixItems } from './home-content';

export function HomeMatrix({ copy, locale }: { copy: HomeCopy; locale: Locale }) {
  return (
    <section className="home-scene">
      <div className="scene-occluder scene-occluder-left" aria-hidden="true" />
      <div className="container scene-grid">
        <Reveal>
          <div className="scene-heading">
            <p className="cinematic-eyebrow">{copy.matrixEyebrow}</p>
            <h2>{copy.matrixTitle}</h2>
            <p>{copy.matrixLead}</p>
          </div>
        </Reveal>
        <div className="matrix-grid">
          {matrixItems[locale].map(([title, description], index) => (
            <Reveal delay={index * 90} key={title}>
              <LiquidGlass className="matrix-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </LiquidGlass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

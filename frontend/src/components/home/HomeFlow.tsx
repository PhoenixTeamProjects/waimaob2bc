import type { Locale } from '@/config/i18n';
import { LiquidGlass } from '@/components/visual/LiquidGlass';
import { Reveal } from '@/components/visual/Reveal';
import type { HomeCopy } from './home-content';
import { flowItems } from './home-content';

export function HomeFlow({ copy, locale }: { copy: HomeCopy; locale: Locale }) {
  return (
    <section className="home-scene">
      <div className="container flow-layout">
        <Reveal>
          <div className="scene-heading">
            <p className="cinematic-eyebrow">{copy.flowEyebrow}</p>
            <h2>{copy.flowTitle}</h2>
            <p>{copy.flowLead}</p>
          </div>
        </Reveal>
        <div className="flow-steps">
          {flowItems[locale].map((item, index) => (
            <Reveal delay={index * 90} key={item}>
              <LiquidGlass className="flow-step">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </LiquidGlass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

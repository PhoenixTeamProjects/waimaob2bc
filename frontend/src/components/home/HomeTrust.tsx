import { LiquidGlass } from '@/components/visual/LiquidGlass';
import { Reveal } from '@/components/visual/Reveal';
import type { HomeCopy } from './home-content';

export function HomeTrust({
  copy,
  metrics
}: {
  copy: HomeCopy;
  metrics: Array<{ value: string; label: string }>;
}) {
  return (
    <section className="home-scene">
      <div className="container trust-layout">
        <Reveal>
          <div className="scene-heading compact">
            <p className="cinematic-eyebrow">{copy.trustEyebrow}</p>
            <h2>{copy.trustTitle}</h2>
          </div>
        </Reveal>
        <div className="metric-grid cinematic-metrics">
          {metrics.map((metric, index) => (
            <Reveal delay={index * 80} key={metric.label}>
              <LiquidGlass className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </LiquidGlass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { LiquidGlass } from '@/components/visual/LiquidGlass';
import { Reveal } from '@/components/visual/Reveal';
import type { HomeCopy } from './home-content';

export function HomeCapability({ copy }: { copy: HomeCopy }) {
  return (
    <section className="home-scene">
      <div className="scene-occluder scene-occluder-right" aria-hidden="true" />
      <div className="container capability-layout">
        <Reveal>
          <LiquidGlass className="wide-glass">
            <p className="cinematic-eyebrow">{copy.capabilityEyebrow}</p>
            <h2>{copy.capabilityTitle}</h2>
            <p>{copy.capabilityLead}</p>
            <div className="capability-line" aria-hidden="true">
              <span>Lead</span>
              <i />
              <span>Content</span>
              <i />
              <span>Website</span>
              <i />
              <span>Automation</span>
            </div>
          </LiquidGlass>
        </Reveal>
      </div>
    </section>
  );
}

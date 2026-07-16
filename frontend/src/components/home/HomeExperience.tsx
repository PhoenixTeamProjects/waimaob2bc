import type { Locale } from '@/config/i18n';
import { CinematicBackground } from '@/components/visual/CinematicBackground';
import { CursorAura } from '@/components/visual/CursorAura';
import { FilmGrain } from '@/components/visual/FilmGrain';
import { ParticleCanvas } from '@/components/visual/ParticleCanvas';
import type { Post } from '@/types/content';
import { HomeCapability } from './HomeCapability';
import { HomeCTA } from './HomeCTA';
import { HomeFlow } from './HomeFlow';
import { HomeHero } from './HomeHero';
import { HomeMatrix } from './HomeMatrix';
import { HomeMediaCoverage } from './HomeMediaCoverage';
import { HomeShowcase } from './HomeShowcase';
import { HomeTrust } from './HomeTrust';
import { homeCopy } from './home-content';

const englishMetrics = [
  'Companies trained or served',
  'Students trained',
  'Companies operated',
  'Multi-industry practice'
];

export function HomeExperience({
  locale,
  posts,
  metrics
}: {
  locale: Locale;
  posts: Post[];
  metrics: Array<{ value: string; label: string }>;
}) {
  const copy = homeCopy[locale];
  const localizedMetrics =
    locale === 'en'
      ? metrics.map((metric, index) => ({ value: metric.value, label: englishMetrics[index] ?? metric.label }))
      : metrics;

  return (
    <div className="immersive-home">
      <CinematicBackground />
      <ParticleCanvas />
      <CursorAura />
      <HomeHero copy={copy} locale={locale} />
      <HomeMatrix copy={copy} locale={locale} />
      <HomeCapability copy={copy} />
      <HomeShowcase copy={copy} locale={locale} posts={posts} />
      <HomeFlow copy={copy} locale={locale} />
      <HomeTrust copy={copy} metrics={localizedMetrics} />
      <HomeMediaCoverage copy={copy} locale={locale} />
      <HomeCTA copy={copy} locale={locale} />
      <FilmGrain />
    </div>
  );
}

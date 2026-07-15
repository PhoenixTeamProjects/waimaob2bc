import type { Locale } from '@/config/i18n';
import { projectSources } from '@/data/projects';
import type { ProjectCase, ProjectSource, ProjectTypeKey } from '@/types/content';

function toLocalizedProject(source: ProjectSource, locale: Locale): ProjectCase {
  return {
    slug: source.slug,
    title: source.title[locale],
    summary: source.summary[locale],
    type: source.type,
    typeLabel: source.typeLabel[locale],
    status: source.status,
    statusLabel: source.statusLabel[locale],
    tags: source.tags,
    startedAt: source.startedAt,
    publishedAt: source.publishedAt,
    problem: source.problem[locale],
    process: source.process[locale],
    result: source.result[locale],
    review: source.review[locale],
    locale
  };
}

export function getProjectSources(): ProjectSource[] {
  return [...projectSources].sort((a, b) =>
    (b.publishedAt ?? b.startedAt ?? '').localeCompare(a.publishedAt ?? a.startedAt ?? '')
  );
}

export function getProjects(locale: Locale = 'zh'): ProjectCase[] {
  return getProjectSources().map((project) => toLocalizedProject(project, locale));
}

export function getProjectsByType(
  type: ProjectTypeKey,
  locale: Locale = 'zh'
): ProjectCase[] {
  return getProjects(locale).filter((project) => project.type === type);
}

export function getProjectBySlug(
  slug: string,
  locale: Locale = 'zh'
): ProjectCase | undefined {
  const source = projectSources.find((project) => project.slug === slug);
  return source ? toLocalizedProject(source, locale) : undefined;
}

export function getProjectSlugs() {
  return projectSources.map((project) => project.slug);
}

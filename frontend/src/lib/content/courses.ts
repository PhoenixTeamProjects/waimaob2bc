import type { Locale } from '@/config/i18n';
import { courseSources } from '@/data/courses';
import type { Course, CourseSource, CourseTypeKey } from '@/types/content';

function toLocalizedCourse(source: CourseSource, locale: Locale): Course {
  return {
    slug: source.slug,
    title: source.title[locale],
    summary: source.summary[locale],
    type: source.type,
    typeLabel: source.typeLabel[locale],
    status: source.status,
    statusLabel: source.statusLabel[locale],
    suitableFor: source.suitableFor[locale],
    outcomes: source.outcomes[locale],
    modules: source.modules[locale],
    notes: source.notes[locale],
    locale
  };
}

export function getCourseSources(): CourseSource[] {
  return [...courseSources];
}

export function getCourses(locale: Locale = 'zh'): Course[] {
  return getCourseSources().map((course) => toLocalizedCourse(course, locale));
}

export function getCoursesByType(type: CourseTypeKey, locale: Locale = 'zh'): Course[] {
  return getCourses(locale).filter((course) => course.type === type);
}

export function getCourseBySlug(slug: string, locale: Locale = 'zh'): Course | undefined {
  const source = courseSources.find((course) => course.slug === slug);
  return source ? toLocalizedCourse(source, locale) : undefined;
}

export function getCourseSlugs() {
  return courseSources.map((course) => course.slug);
}

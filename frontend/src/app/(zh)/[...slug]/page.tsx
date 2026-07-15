import { notFound } from 'next/navigation';
import { ProjectIndexPage } from '@/components/ui/ProjectIndexPage';
import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { TrainingIndexPage } from '@/components/ui/TrainingIndexPage';
import { getRoutePage, routePages } from '@/data/route-pages';
import { createMetadata } from '@/lib/seo/metadata';

export const dynamicParams = false;

export function generateStaticParams() {
  return routePages.map((page) => ({
    slug: page.path.replace(/^\/|\/$/g, '').split('/')
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = `/${slug.join('/')}/`;

  try {
    const page = getRoutePage(path, 'zh');

    return createMetadata({
      title: page.title,
      description: page.description,
      path,
      locale: 'zh'
    });
  } catch {
    return {};
  }
}

export default async function ZhTopicPage({
  params
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = `/${slug.join('/')}/`;

  if (path === '/projects/') {
    return <ProjectIndexPage locale="zh" />;
  }

  if (path === '/training/') {
    return <TrainingIndexPage locale="zh" />;
  }

  try {
    return <RouteLandingPage locale="zh" page={getRoutePage(path, 'zh')} />;
  } catch {
    notFound();
  }
}

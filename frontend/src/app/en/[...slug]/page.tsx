import { AboutPageContent } from '@/components/ui/AboutPageContent';
import { ContactPageContent } from '@/components/ui/ContactPageContent';
import { ProjectIndexPage } from '@/components/ui/ProjectIndexPage';
import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { TrainingIndexPage } from '@/components/ui/TrainingIndexPage';
import { enRoutePages, getRoutePage } from '@/data/route-pages';
import { createMetadata } from '@/lib/seo/metadata';

const extraPages = [['about'], ['contact']];

export function generateStaticParams() {
  const topicParams = enRoutePages.map((page) => ({
    slug: page.path.replace(/^\/|\/$/g, '').split('/')
  }));

  return [...topicParams, ...extraPages.map((slug) => ({ slug }))];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = `/${slug.join('/')}/`;

  if (path === '/about/') {
    return createMetadata({
      title: 'About Lv Bin / Phoenix',
      description:
        'Lv Bin, also known as Phoenix, is a frontline foreign trade practitioner, business operator and trainer.',
      path: '/en/about/',
      locale: 'en'
    });
  }

  if (path === '/contact/') {
    return createMetadata({
      title: 'Contact Lv Bin / Phoenix',
      description:
        'Contact Lv Bin / Phoenix for foreign trade practice, AI practice, website building, corporate training and consulting.',
      path: '/en/contact/',
      locale: 'en'
    });
  }

  const page = getRoutePage(path, 'en');

  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/en${path}`,
    locale: 'en'
  });
}

export default async function EnglishCatchAllPage({
  params
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = `/${slug.join('/')}/`;

  if (path === '/about/') {
    return <AboutPageContent locale="en" />;
  }

  if (path === '/contact/') {
    return <ContactPageContent locale="en" />;
  }

  if (path === '/projects/') {
    return <ProjectIndexPage locale="en" />;
  }

  if (path === '/training/') {
    return <TrainingIndexPage locale="en" />;
  }

  return <RouteLandingPage locale="en" page={getRoutePage(path, 'en')} />;
}

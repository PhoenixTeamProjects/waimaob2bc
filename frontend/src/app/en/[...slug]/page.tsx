import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { enRoutePages, getRoutePage } from '@/data/route-pages';
import { createMetadata } from '@/lib/seo/metadata';

const extraPages = [
  ['about'],
  ['contact'],
  ['blog']
];

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
      title: 'About Phoenix',
      description:
        'Phoenix is a frontline foreign trade practitioner, business operator and trainer.',
      path: '/en/about/',
      locale: 'en'
    });
  }

  if (path === '/contact/') {
    return createMetadata({
      title: 'Contact Phoenix',
      description:
        'Contact Phoenix for foreign trade practice, AI practice, website building, corporate training and consulting.',
      path: '/en/contact/',
      locale: 'en'
    });
  }

  if (path === '/blog/') {
    return createMetadata({
      title: 'Practical Blog',
      description:
        'Practical notes from Phoenix on foreign trade, AI, websites and business execution.',
      path: '/en/blog/',
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
    return (
      <RouteLandingPage
        locale="en"
        page={{
          path,
          eyebrow: 'About Phoenix',
          title: 'I am not a trainer who has left the frontline',
          description:
            'Phoenix is a foreign-trade practitioner, business operator and trainer who still works on customer development, platform operations, websites, social media, AI and SOHO projects.',
          points: [
            'Operated cross-border and foreign-trade companies',
            'Worked as foreign-trade director and company CEO',
            'Trained or served 200+ companies',
            'Trained 1,000+ students',
            'Shares only real practice and review'
          ]
        }}
      />
    );
  }

  if (path === '/contact/') {
    return (
      <RouteLandingPage
        locale="en"
        page={{
          path,
          eyebrow: 'Contact',
          title: 'Contact Phoenix',
          description:
            'Suitable topics include foreign-trade practice, AI practice, website building, corporate training, one-on-one consulting and business cooperation.',
          points: [
            'Foreign trade course',
            'AI practice course',
            'Website course',
            'Corporate training',
            'One-on-one consulting'
          ]
        }}
      />
    );
  }

  if (path === '/blog/') {
    return (
      <RouteLandingPage
        locale="en"
        page={{
          path,
          eyebrow: 'Blog',
          title: 'Practical Blog',
          description:
            'A content hub for Phoenix’s practical notes. The English blog list will be connected to the future content backend.',
          points: ['Practice notes', 'How-to guides', 'Tool tests', 'Project reviews', 'Opinion pieces']
        }}
      />
    );
  }

  return <RouteLandingPage locale="en" page={getRoutePage(path, 'en')} />;
}

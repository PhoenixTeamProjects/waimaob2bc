import { HomeExperience } from '@/components/home/HomeExperience';
import { profile } from '@/data/profile';
import { getPosts } from '@/lib/content/posts';
import { createMetadata } from '@/lib/seo/metadata';

export const metadata = createMetadata({
  title: 'Phoenix Foreign Trade Practitioner',
  description:
    'Phoenix personal brand website for foreign trade practice, AI practice, website building, training and consulting.',
  path: '/en/',
  locale: 'en'
});

export default function EnglishHomePage() {
  const latestPosts = getPosts('en').slice(0, 3);

  return <HomeExperience locale="en" posts={latestPosts} metrics={profile.trustMetrics} />;
}

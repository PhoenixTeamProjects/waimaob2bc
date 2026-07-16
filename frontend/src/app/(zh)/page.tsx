import { HomeExperience } from '@/components/home/HomeExperience';
import { profile } from '@/data/profile';
import { getPosts } from '@/lib/content/posts';

export default function HomePage() {
  const latestPosts = getPosts('zh').slice(0, 3);

  return <HomeExperience locale="zh" posts={latestPosts} metrics={profile.trustMetrics} />;
}

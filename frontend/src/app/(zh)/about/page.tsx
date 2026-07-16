import { AboutPageContent } from '@/components/ui/AboutPageContent';
import { createMetadata } from '@/lib/seo/metadata';

export const metadata = createMetadata({
  title: '关于我',
  description: 'Phoenix 的个人品牌故事、真实经历与实战方向。',
  path: '/about/'
});

export default function AboutPage() {
  return <AboutPageContent locale="zh" />;
}

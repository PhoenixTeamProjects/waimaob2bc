import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function NextjsWebsitePage() {
  return <RouteLandingPage page={getRoutePage('/website/nextjs/')} />;
}

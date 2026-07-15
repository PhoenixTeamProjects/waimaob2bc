import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function WordpressWebsitePage() {
  return <RouteLandingPage page={getRoutePage('/website/wordpress/')} />;
}

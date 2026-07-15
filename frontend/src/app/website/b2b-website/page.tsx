import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function B2bWebsitePage() {
  return <RouteLandingPage page={getRoutePage('/website/b2b-website/')} />;
}

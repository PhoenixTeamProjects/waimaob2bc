import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function SocialMediaLeadsPage() {
  return <RouteLandingPage page={getRoutePage('/foreign-trade/social-media-leads/')} />;
}

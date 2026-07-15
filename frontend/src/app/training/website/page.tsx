import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function WebsiteTrainingPage() {
  return <RouteLandingPage page={getRoutePage('/training/website/')} />;
}

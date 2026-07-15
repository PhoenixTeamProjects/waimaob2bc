import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function WebsiteCasesPage() {
  return <RouteLandingPage page={getRoutePage('/website/cases/')} />;
}

import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function SohoPage() {
  return <RouteLandingPage page={getRoutePage('/foreign-trade/soho/')} />;
}

import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function ForeignTradePage() {
  return <RouteLandingPage page={getRoutePage('/foreign-trade/')} />;
}

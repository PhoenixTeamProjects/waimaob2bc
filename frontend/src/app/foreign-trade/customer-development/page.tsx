import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function CustomerDevelopmentPage() {
  return <RouteLandingPage page={getRoutePage('/foreign-trade/customer-development/')} />;
}

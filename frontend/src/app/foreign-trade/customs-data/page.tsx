import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function CustomsDataPage() {
  return <RouteLandingPage page={getRoutePage('/foreign-trade/customs-data/')} />;
}

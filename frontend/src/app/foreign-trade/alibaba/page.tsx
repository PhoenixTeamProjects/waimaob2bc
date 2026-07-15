import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function AlibabaPage() {
  return <RouteLandingPage page={getRoutePage('/foreign-trade/alibaba/')} />;
}

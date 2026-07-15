import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function ForeignTradeTrainingPage() {
  return <RouteLandingPage page={getRoutePage('/training/foreign-trade/')} />;
}

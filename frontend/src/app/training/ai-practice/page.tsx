import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function AiPracticeTrainingPage() {
  return <RouteLandingPage page={getRoutePage('/training/ai-practice/')} />;
}

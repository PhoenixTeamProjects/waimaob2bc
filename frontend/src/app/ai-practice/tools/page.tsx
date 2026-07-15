import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function AiToolsPage() {
  return <RouteLandingPage page={getRoutePage('/ai-practice/tools/')} />;
}
